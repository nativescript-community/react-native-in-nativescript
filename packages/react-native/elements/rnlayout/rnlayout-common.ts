import { View, CssProperty, Style, LayoutBase, makeValidator, makeParser, unsetValue, CSSType, ShorthandProperty } from '@nativescript/core';
import { FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent, AlignSelf } from '@nativescript/core/ui/layouts/flexbox-layout/flexbox-layout-common';
import {
    FlexboxLayoutBase,
    FlexGrow,
    FlexShrink,
    FlexBasisPercent,
    Basis,
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

// We don't implement Order, FlexWrapBefore, flex-flow.

// In Yoga, FlexBasis supports all the same values that width and height do.
export type RNBasis = Basis;

/** No different from that of FlexboxLayout. */
// export type RNFlexDirection = FlexDirection;
// export namespace RNFlexDirection {
// 	export const ROW = 'row';
// 	export const ROW_REVERSE = 'row-reverse';
// 	export const COLUMN = 'column';
// 	export const COLUMN_REVERSE = 'column-reverse';

// 	export const isValid = makeValidator<RNFlexDirection>(ROW, ROW_REVERSE, COLUMN, COLUMN_REVERSE);
// 	export const parse = makeParser<RNFlexDirection>(isValid);
// }

/** No different from that of FlexboxLayout. */
// export type RNFlexWrap = FlexWrap;
// export namespace RNFlexWrap {
// 	export const NOWRAP = 'nowrap';
// 	export const WRAP = 'wrap';
// 	export const WRAP_REVERSE = 'wrap-reverse';

// 	export const isValid = makeValidator<RNFlexWrap>(NOWRAP, WRAP, WRAP_REVERSE);
// 	export const parse = makeParser<RNFlexWrap>(isValid);
// }

export type RNJustifyContent = JustifyContent | 'space-evenly';
export namespace RNJustifyContent {
	export const FLEX_START = 'flex-start' as const;
	export const FLEX_END = 'flex-end' as const;
	export const CENTER = 'center' as const;
	export const SPACE_BETWEEN = 'space-between';
	export const SPACE_AROUND = 'space-around';
	export const SPACE_EVENLY = 'space-evenly';

	export const isValid = makeValidator<RNJustifyContent>(FLEX_START, FLEX_END, CENTER, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENLY);
	export const parse = makeParser<RNJustifyContent>(isValid);
}

export type RNFlexBasisPercent = FlexBasisPercent;
export namespace RNFlexBasisPercent {
	export const DEFAULT = -1;
}

export type RNAlignItems = AlignItems | 'auto';
export namespace RNAlignItems {
	export const FLEX_START = 'flex-start';
	export const FLEX_END = 'flex-end';
	export const CENTER = 'center';
	export const BASELINE = 'baseline';
	export const STRETCH = 'stretch';
	export const AUTO = 'auto';

	export const isValid = makeValidator<RNAlignItems>(FLEX_START, FLEX_END, CENTER, BASELINE, STRETCH, AUTO);
	export const parse = makeParser<RNAlignItems>(isValid);
}

export type RNAlignContent = AlignContent | 'baseline' | 'auto';
export namespace RNAlignContent {
	export const FLEX_START = 'flex-start';
	export const FLEX_END = 'flex-end';
	export const CENTER = 'center';
	export const SPACE_BETWEEN = 'space-between';
	export const SPACE_AROUND = 'space-around';
	export const STRETCH = 'stretch';
	export const BASELINE = 'baseline';
	export const AUTO = 'auto';

	export const isValid = makeValidator<RNAlignContent>(FLEX_START, FLEX_END, CENTER, SPACE_BETWEEN, SPACE_AROUND, STRETCH, BASELINE, AUTO);
	export const parse = makeParser<RNAlignContent>(isValid);
}

/** No different from that of FlexboxLayout. */
// export type RNFlexGrow = FlexGrow;
// export namespace RNFlexGrow {
// 	export function isValid(value: any): boolean {
// 		const parsed = parseInt(value);

// 		return isFinite(parsed) && value >= 0;
// 	}
// 	export const parse = parseFloat;
// }

/** No different from that of FlexboxLayout. */
// export type RNFlexShrink = FlexShrink;
// export namespace RNFlexShrink {
// 	export function isValid(value: any): boolean {
// 		const parsed = parseInt(value);

// 		return isFinite(parsed) && value >= 0;
// 	}
// 	export const parse = parseFloat;
// }

/** Different from that of FlexboxLayout, because so too is RNAlignItems from AlignItems. */
export type RNAlignSelf = RNAlignItems;
export namespace RNAlignSelf {
	export const AUTO = 'auto';
	export const FLEX_START = 'flex-start';
	export const FLEX_END = 'flex-end';
	export const CENTER = 'center';
	export const BASELINE = 'baseline';
	export const STRETCH = 'stretch';

	export const isValid = makeValidator<RNAlignSelf>(AUTO, FLEX_START, FLEX_END, CENTER, BASELINE, STRETCH);
	export const parse = makeParser<RNAlignSelf>(isValid);
}

function validateArgs(element: View): View {
	if (!element) {
		throw new Error('element cannot be null or undefinied.');
	}

	return element;
}

/**
 * A common base class for all cross platform flexbox layout implementations.
 */
@CSSType('RNLayout')
export abstract class RNLayoutBase extends FlexboxLayoutBase {
	// get flexDirection(): FlexDirection {
	// 	return this.style.flexDirection;
	// }
	// set flexDirection(value: FlexDirection) {
	// 	this.style.flexDirection = value;
	// }

	// get flexWrap(): FlexWrap {
	// 	return this.style.flexWrap;
	// }
	// set flexWrap(value: FlexWrap) {
	// 	this.style.flexWrap = value;
	// }

	// get justifyContent(): JustifyContent {
	// 	return this.style.justifyContent;
	// }
	// set justifyContent(value: JustifyContent) {
	// 	this.style.justifyContent = value;
	// }

	// get alignItems(): AlignItems {
	// 	return this.style.alignItems;
	// }
	// set alignItems(value: AlignItems) {
	// 	this.style.alignItems = value;
	// }

	// get alignContent(): AlignContent {
	// 	return this.style.alignContent;
	// }
	// set alignContent(value: AlignContent) {
	// 	this.style.alignContent = value;
	// }

	public static setFlexGrow(view: View, grow: number) {
        super.setFlexGrow(view, grow);
	}
	public static getFlexGrow(view: View) {
        return super.getFlexGrow(view);
	}

	public static setFlexShrink(view: View, shrink: number) {
        super.setFlexShrink(view, shrink);
	}
	public static getFlexShrink(view: View): number {
        return super.getFlexShrink(view);
	}

	public static setAlignSelf(view: View, align: AlignSelf) {
        super.setAlignSelf(view, align);
	}
	public static getAlignSelf(view: View): AlignSelf {
        return this.getAlignSelf(view);
	}
}

RNLayoutBase.prototype.recycleNativeView = 'auto';

/** No different from that of FlexboxLayout. */
// export const flexDirectionProperty = new CssProperty<Style, RNFlexDirection>({
// 	name: 'flexDirection',
// 	cssName: 'flex-direction',
// 	defaultValue: RNFlexDirection.ROW,
// 	affectsLayout: global.isIOS,
// 	valueConverter: RNFlexDirection.parse,
// });
// flexDirectionProperty.register(Style);

/** No different from that of FlexboxLayout. */
// export const flexWrapProperty = new CssProperty<Style, FlexWrap>({
// 	name: 'flexWrap',
// 	cssName: 'flex-wrap',
// 	defaultValue: 'nowrap',
// 	affectsLayout: global.isIOS,
// 	valueConverter: FlexWrap.parse,
// });
// flexWrapProperty.register(Style);

/** DOES differ from that of FlexboxLayout, but we'd have to change core to support the 'space-evenly' property. */
// export const justifyContentProperty = new CssProperty<Style, JustifyContent>({
// 	name: 'justifyContent',
// 	cssName: 'justify-content',
// 	defaultValue: JustifyContent.FLEX_START,
// 	affectsLayout: global.isIOS,
// 	valueConverter: JustifyContent.parse,
// });
// justifyContentProperty.register(Style);

/** DOES differ from that of FlexboxLayout, but we'd have to change core to support the 'auto' property. */
// export const alignItemsProperty = new CssProperty<Style, AlignItems>({
// 	name: 'alignItems',
// 	cssName: 'align-items',
// 	defaultValue: AlignItems.STRETCH,
// 	affectsLayout: global.isIOS,
// 	valueConverter: AlignItems.parse,
// });
// alignItemsProperty.register(Style);

/** DOES differ from that of FlexboxLayout, but we'd have to change core to support the 'auto' and 'baseline' properties. */
// export const alignContentProperty = new CssProperty<Style, AlignContent>({
// 	name: 'alignContent',
// 	cssName: 'align-content',
// 	defaultValue: AlignContent.STRETCH,
// 	affectsLayout: global.isIOS,
// 	valueConverter: AlignContent.parse,
// });
// alignContentProperty.register(Style);

/** No different from that of FlexboxLayout. The default of 0 is the same, too. */
// export const flexGrowProperty = new CssProperty<Style, FlexGrow>({
// 	name: 'flexGrow',
// 	cssName: 'flex-grow',
// 	defaultValue: FLEX_GROW_DEFAULT,
// 	valueConverter: FlexGrow.parse,
// });
// flexGrowProperty.register(Style);
// Object.defineProperty(View.prototype, 'flexGrow', {
// 	get(this: View): FlexGrow {
// 		return this.style.flexGrow;
// 	},
// 	set(this: View, value: FlexGrow) {
// 		this.style.flexGrow = value;
// 	},
// 	enumerable: true,
// 	configurable: true,
// });

/** No different from that of FlexboxLayout. The default of 1 is the same, too. */
// export const flexShrinkProperty = new CssProperty<Style, FlexShrink>({
// 	name: 'flexShrink',
// 	cssName: 'flex-shrink',
// 	defaultValue: FLEX_SHRINK_DEFAULT,
// 	valueConverter: FlexShrink.parse,
// });
// flexShrinkProperty.register(Style);
// Object.defineProperty(View.prototype, 'flexShrink', {
// 	get(this: View): FlexShrink {
// 		return this.style.flexShrink;
// 	},
// 	set(this: View, value: FlexShrink) {
// 		this.style.flexShrink = value;
// 	},
// 	enumerable: true,
// 	configurable: true,
// });

/** DOES differ from that of FlexboxLayout, but we'd have to change core to support the 'auto' property. */
// export const alignSelfProperty = new CssProperty<Style, AlignSelf>({
// 	name: 'alignSelf',
// 	cssName: 'align-self',
// 	defaultValue: AlignSelf.AUTO,
// 	valueConverter: AlignSelf.parse,
// });
// alignSelfProperty.register(Style);
// Object.defineProperty(View.prototype, 'alignSelf', {
// 	get(this: View): AlignSelf {
// 		return this.style.alignSelf;
// 	},
// 	set(this: View, value: AlignSelf) {
// 		this.style.alignSelf = value;
// 	},
// 	enumerable: true,
// 	configurable: true,
// });

/**
 * A minor difference from FlexboxLayout, but we can live with it for now.
 * 
 * Ideally we want:
 *   flex: inital | auto | none | <flex-grow> <flex-shrink> | <flex-grow> <flex-shrink> <flex-basis>
 * But we'd need to change core to support flex-basis as a new Style, so for now we just support:
 *   flex: inital | auto | none | <flex-grow> <flex-shrink> | <flex-grow> <flex-shrink>
 * 
 * From the React Native docs:
 * When flex is a positive number, it makes the component flexible, and it will be sized proportional
 * to its flex value. So a component with flex set to 2 will take twice the space as a component with
 * flex set to 1. flex: <positive number> equates to flexGrow: <positive number>, flexShrink: 1,
 * flexBasis: 0.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
 * @see https://reactnative.dev/docs/layout-props#flex
 */
// const flexProperty = new ShorthandProperty<Style, string>({
// 	name: 'flex',
// 	cssName: 'flex',
// 	getter: function (this: Style) {
// 		// return `${this.flexGrow} ${this.flexShrink} ${this.flexBasis}`;
// 		return `${this.flexGrow} ${this.flexShrink}`;
// 	},
// 	converter: function (value: string) {
// 		const properties: [CssProperty<any, any>, any][] = [];
// 		if (value === unsetValue) {
// 			properties.push([flexGrowProperty, value]);
// 			properties.push([flexShrinkProperty, value]);
// 		} else {
// 			const trimmed = value && value.trim();
// 			if (trimmed) {
// 				const values = trimmed.split(/\s+/);
// 				if (values.length === 1) {
// 					switch (values[0]) {
// 						case 'inital':
// 							properties.push([flexGrowProperty, 0]);
// 							properties.push([flexShrinkProperty, 1]);
// 							// properties.push([flexBasisProperty, FlexBasis.AUTO])
// 							break;
// 						case 'auto':
// 							properties.push([flexGrowProperty, 1]);
// 							properties.push([flexShrinkProperty, 1]);
// 							// properties.push([flexBasisProperty, FlexBasis.AUTO])
// 							break;
// 						case 'none':
// 							properties.push([flexGrowProperty, 0]);
// 							properties.push([flexShrinkProperty, 0]);
// 							// properties.push([flexBasisProperty, FlexBasis.AUTO])
// 							break;
// 						default:
// 							if (FlexGrow.isValid(values[0])) {
// 								properties.push([flexGrowProperty, FlexGrow.parse(values[0])]);
// 								properties.push([flexShrinkProperty, 1]);
// 								// properties.push([flexBasisProperty, 0])
// 							}
// 					}
// 				}
// 				if (values.length >= 2) {
// 					if (FlexGrow.isValid(values[0]) && FlexShrink.isValid(values[1])) {
// 						properties.push([flexGrowProperty, FlexGrow.parse(values[0])]);
// 						properties.push([flexShrinkProperty, FlexShrink.parse(values[1])]);
// 					}
// 				}
// 				// if (value.length >= 3) {
// 				//     properties.push({ property: flexBasisProperty, value: FlexBasis.parse(values[2])})
// 				// }
// 			}
// 		}

// 		return properties;
// 	},
// });
// flexProperty.register(Style);

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
