import { View, CssProperty, Style, LayoutBase } from '@nativescript/core';
import { FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent, Order, FlexGrow, FlexShrink, FlexWrapBefore, AlignSelf } from '@nativescript/core';
import type { RNFlexDirection, RNFlexWrap, RNJustifyContent, RNAlignItems, RNAlignContent, RNOrder, RNFlexGrow, RNFlexShrink, RNFlexWrapBefore, RNAlignSelf } from './rnlayout-common';
import {
    flexDirectionProperty,
    flexWrapProperty,
    justifyContentProperty,
    alignItemsProperty,
    orderProperty,
    flexGrowProperty,
    flexShrinkProperty,
    flexWrapBeforeProperty,
    alignSelfProperty,
} from '@nativescript/core/ui/layouts/flexbox-layout/flexbox-layout-common';

export type { RNFlexDirection };
export type { RNFlexWrap };
export type { RNJustifyContent };
export type { RNAlignItems };
export type { RNAlignContent };

/**
 * A flex order integer.
 */
export type { RNOrder };

/**
 * A flex-grow number. Negative values are invalid.
 */
export type { RNFlexGrow };

/**
 * A flex-shrink number. Negative values are invalid.
 */
export type { RNFlexShrink };

/**
 * A flex-wrap-before value. True, false or their string presentations "true" or "false".
 */
export type { RNFlexWrapBefore };

export type { RNAlignSelf };

/**
 * TODO: RCTView doesn't expose any styling, but RCTShadowView does.
 * Android mentioned shadow views too. So that's probably the thing to implement.
 * @see RCTShadowView
 */
export class RNLayout extends FlexboxLayout {
	public static setFlexGrow(view: View, grow: number);
	public static getFlexGrow(view: View);

	public static setFlexShrink(view: View, shrink: number);
	public static getFlexShrink(view: View): number;

	public static setAlignSelf(view: View, align: AlignSelf);
	public static getAlignSelf(view: View): AlignSelf;
}

export {
    FlexDirection,
    FlexWrap,
};

export {
    flexDirectionProperty,
    flexWrapProperty,
    justifyContentProperty,
    alignItemsProperty,
    orderProperty,
    flexGrowProperty,
    flexShrinkProperty,
    flexWrapBeforeProperty,
    alignSelfProperty,
};
