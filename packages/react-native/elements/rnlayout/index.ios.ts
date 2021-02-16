import { FlexDirection, FlexWrap, RNJustifyContent, RNAlignItems, RNAlignContent, RNLayoutBase, RNFlexBasisPercent, orderProperty, flexGrowProperty, flexShrinkProperty, flexWrapBeforeProperty, alignSelfProperty } from './rnlayout-common';
import { View } from '@nativescript/core';
import { layout } from '@nativescript/core/utils';

export * from './rnlayout-common';

import EXACTLY = layout.EXACTLY;
import AT_MOST = layout.AT_MOST;
import UNSPECIFIED = layout.UNSPECIFIED;

import MEASURED_SIZE_MASK = layout.MEASURED_SIZE_MASK;
import MEASURED_STATE_TOO_SMALL = layout.MEASURED_STATE_TOO_SMALL;

function requestFlexboxLayout(this: View, value) {
	const flexbox = this.parent;
	if (flexbox instanceof RNLayoutBase) {
		flexbox.requestLayout();
	}
}
View.prototype[orderProperty.setNative] = requestFlexboxLayout;
View.prototype[flexGrowProperty.setNative] = requestFlexboxLayout;
View.prototype[flexShrinkProperty.setNative] = requestFlexboxLayout;
View.prototype[flexWrapBeforeProperty.setNative] = requestFlexboxLayout;
View.prototype[alignSelfProperty.setNative] = requestFlexboxLayout;

const MATCH_PARENT = -1;
const WRAP_CONTENT = -2;

const View_sUseZeroUnspecifiedMeasureSpec = true; // NOTE: android version < M

// Long ints may not be safe in JavaScript
const MAX_SIZE = 0x00ffffff & MEASURED_SIZE_MASK;

import makeMeasureSpec = layout.makeMeasureSpec;
import getMeasureSpecMode = layout.getMeasureSpecMode;
import getMeasureSpecSize = layout.getMeasureSpecSize;

// `eachLayoutChild` iterates over children, and we need more - indexed access.
// This class tries to accomodate that by collecting all children in an
// array no more than once per measure.
class MeasureContext {
	private children: View[];

	constructor(private owner: RNLayout) {
		this.children = [];
		this.owner.eachLayoutChild((child) => {
			this.children.push(child);
		});
	}

	public get childrenCount(): number {
		return this.children.length;
	}

	public childAt(index: number): View {
		return this.children[index];
	}
}

class FlexLine {
	_left: number = Number.MAX_VALUE;
	_top: number = Number.MAX_VALUE;
	_right: number = Number.MAX_VALUE;
	_bottom: number = Number.MAX_VALUE;

	_mainSize = 0;
	_dividerLengthInMainSize = 0;
	_crossSize = 0;
	_itemCount = 0;
	_totalFlexGrow = 0;
	_totalFlexShrink = 0;
	_maxBaseline = 0;

	_indicesAlignSelfStretch: number[] = [];

	get left(): number {
		return this._left;
	}
	get top(): number {
		return this._top;
	}
	get right(): number {
		return this._right;
	}
	get bottom(): number {
		return this._bottom;
	}

	get mainSize(): number {
		return this._mainSize;
	}
	get crossSize(): number {
		return this._crossSize;
	}
	get itemCount(): number {
		return this._itemCount;
	}
	get totalFlexGrow(): number {
		return this._totalFlexGrow;
	}
	get totalFlexShrink(): number {
		return this._totalFlexShrink;
	}
}

class Order {
	index: number;
	order: number;

	public compareTo(another: Order): number {
		if (this.order !== another.order) {
			return this.order - another.order;
		}

		return this.index - another.index;
	}
}

// Ultimately extends CustomLayoutView, which implements createNativeView(), > ContainerView > View
/**
  * @see https://reactnative.dev/docs/0.62/communication-ios for more end-to-end docs.
  * Seems we need to have an RCTRootView above us.
  */
export class RNLayout extends RNLayoutBase {
	// Omit divider

	/**
	 * ShadowView tree mirrors RCT view tree. Every node is highly stateful.
	 * 1. A node is in one of three lifecycles: uninitialized, computed, dirtied.
	 * 1. RCTBridge may call any of the padding/margin/width/height/top/left setters. A setter would dirty
	 *    the node and all of its ancestors.
	 * 2. At the end of each Bridge transaction, we call layoutWithMinimumSize:maximumSize:layoutDirection:layoutContext
	 *    at the root node to recursively lay out the entire hierarchy.
	 * 3. If a node is "computed" and the constraint passed from above is identical to the constraint used to
	 *    perform the last computation, we skip laying out the subtree entirely.
	 * @see https://github.com/facebook/react-native/blob/0f4f91766339f2cf4189446d7d575493d33b4009/React/Views/RCTShadowView.h#L30
	 */
	public readonly shadowView: RCTShadowView = new RCTShadowView();

	private _reorderedIndices: number[];

	private _orderCache: number[];
	private _flexLines: FlexLine[] = [];
	private _childrenFrozen: boolean[];
	private measureContext: MeasureContext;

	public _addViewToNativeVisualTree(child: View, atIndex: number): boolean {
		const result = super._addViewToNativeVisualTree(child, atIndex);

		if(!(child instanceof RNLayout)){
			throw new Error(`RNLayout can only accept other RNLayouts as children. Was unexpectedly passed: ${child}`);
		}

		this.shadowView.insertReactSubviewAtIndex(child.shadowView, atIndex);


		return result;
	}

	public _removeViewFromNativeVisualTree(child: View): void {
		const result = super._removeViewFromNativeVisualTree(child);

		if(!(child instanceof RNLayout)){
			throw new Error(`RNLayout can only accept other RNLayouts as children. Was unexpectedly passed: ${child}`);
		}

		this.shadowView.removeReactSubview(child.shadowView);

		return result;
	}

	// private _measureHorizontal(widthMeasureSpec: number, heightMeasureSpec: number): void {
	// 	const widthSize = getMeasureSpecSize(widthMeasureSpec);
	// 	const widthMode = getMeasureSpecMode(widthMeasureSpec);
	// 	const heightSize = getMeasureSpecSize(heightMeasureSpec);
	// 	const heightMode = getMeasureSpecMode(heightMeasureSpec);
	// }

	// private _measureVertical(widthMeasureSpec, heightMeasureSpec): void {
	// 	const widthSize = getMeasureSpecSize(widthMeasureSpec);
	// 	const widthMode = getMeasureSpecMode(widthMeasureSpec);
	// 	const heightSize = getMeasureSpecSize(heightMeasureSpec);
	// 	const heightMode = getMeasureSpecMode(heightMeasureSpec);
	// }

	/**
	 * User Interface Layout Process:
	 * @see https://docs.nativescript.org/ui/layouts/layouts
	 * 
	 * During the measure pass, each View is measured to retrieve its desired size.
	 * The measure pass evaluates the following properties:
	 * 
	 * width
	 * height
	 * minWidth
	 * minHeight
	 * visibility
	 * marginTop
	 * marginRight
	 * marginBottom
	 * marginLeft
	 */
	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		this.measureContext = new MeasureContext(this);
		// Omit: super.onMeasure(widthMeasureSpec, heightMeasureSpec);

		// if (this._isOrderChangedFromLastMeasurement) {
		// 	this._reorderedIndices = this._createReorderedIndices();
		// }
		// if (!this._childrenFrozen || this._childrenFrozen.length < this.measureContext.childrenCount) {
		// 	this._childrenFrozen = new Array(this.measureContext.childrenCount);
		// }

		// switch (this.flexDirection) {
		// 	case FlexDirection.ROW:
		// 	case FlexDirection.ROW_REVERSE:
		// 		this._measureHorizontal(widthMeasureSpec, heightMeasureSpec);
		// 		break;
		// 	case FlexDirection.COLUMN:
		// 	case FlexDirection.COLUMN_REVERSE:
		// 		this._measureVertical(widthMeasureSpec, heightMeasureSpec);
		// 		break;
		// 	default:
		// 		throw new Error('Invalid value for the flex direction is set: ' + this.flexDirection);
		// }

		// this._childrenFrozen.length = 0;


		const widthSize = getMeasureSpecSize(widthMeasureSpec);
		const heightSize = getMeasureSpecSize(heightMeasureSpec);

		// Could be EXACTLY, AT_MOST, or unspecified. Not sure what to do with them.
		const widthMode = getMeasureSpecMode(widthMeasureSpec);
		const heightMode = getMeasureSpecMode(heightMeasureSpec);

		const minimumSize = CGSizeMake(widthSize, heightSize);
		const maximumSize = CGSizeMake(widthSize, heightSize);

		const isRtl = this.flexDirection === FlexDirection.ROW_REVERSE;

		
		this.shadowView.layoutWithMinimumSizeMaximumSizeLayoutDirectionLayoutContext(
			minimumSize,
			maximumSize,
			isRtl ? UIUserInterfaceLayoutDirection.RightToLeft : UIUserInterfaceLayoutDirection.LeftToRight,
			{
				absolutePosition: CGPointMake(0, 0),
				// affectedShadowViews: this.shadowView.reactSubviews()
				affectedShadowViews: (NSHashTable.alloc().init() as NSHashTable<RCTShadowView>),
				other: (NSHashTable.alloc().init() as NSHashTable<string>),
			},
		);
	}

	/**
	 * User Interface Layout Process:
	 * @see https://docs.nativescript.org/ui/layouts/layouts
	 * 
	 * During the layout pass, each View is placed in a specific layout slot.
	 * This slot is determined by the desired size of the view (retrieved from the
	 * measure pass) and the following properties:
	 * 
	 * marginTop
	 * marginRight
	 * marginBottom
	 * marginLeft
	 * horizontalAlignment
	 * verticalAlignment
	 */
	// public onLayout(left: number, top: number, right: number, bottom: number) {
	// 	const insets = this.getSafeAreaInsets();

	// 	let isRtl;
	// 	switch (this.flexDirection) {
	// 		case FlexDirection.ROW:
	// 			isRtl = false;
	// 			this._layoutHorizontal(isRtl, left, top, right, bottom, insets);
	// 			break;
	// 		case FlexDirection.ROW_REVERSE:
	// 			isRtl = true;
	// 			this._layoutHorizontal(isRtl, left, top, right, bottom, insets);
	// 			break;
	// 		case FlexDirection.COLUMN:
	// 			isRtl = false;
	// 			if (this.flexWrap === FlexWrap.WRAP_REVERSE) {
	// 				isRtl = !isRtl;
	// 			}
	// 			this._layoutVertical(isRtl, false, left, top, right, bottom, insets);
	// 			break;
	// 		case FlexDirection.COLUMN_REVERSE:
	// 			isRtl = false;
	// 			if (this.flexWrap === FlexWrap.WRAP_REVERSE) {
	// 				isRtl = !isRtl;
	// 			}
	// 			this._layoutVertical(isRtl, true, left, top, right, bottom, insets);
	// 			break;
	// 		default:
	// 			throw new Error('Invalid flex direction is set: ' + this.flexDirection);
	// 	}
	// }
}

export namespace FlexboxLayout {
	export function getBaseline(child: View): number {
		// TODO: Check if we support baseline for iOS.
		return 0;
	}

	export function getPaddingStart(child: View): number {
		return child.effectivePaddingLeft;
	}

	export function getPaddingEnd(child: View): number {
		return child.effectivePaddingRight;
	}
}