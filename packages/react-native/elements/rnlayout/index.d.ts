import { View, CssProperty, Style, LayoutBase } from '@nativescript/core';
import type { FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent, Order, FlexGrow, FlexShrink, FlexWrapBefore, AlignSelf } from '@nativescript/core';

export type RNFlexDirection = FlexDirection;
export type RNFlexWrap = FlexWrap;
export type RNJustifyContent = JustifyContent;
export type RNAlignItems = AlignItems;
export type RNAlignContent = AlignContent;

/**
 * A flex order integer.
 */
export type RNOrder = Order;

/**
 * A flex-grow number. Negative values are invalid.
 */
export type RNFlexGrow = FlexGrow;

/**
 * A flex-shrink number. Negative values are invalid.
 */
export type RNFlexShrink = FlexShrink;

/**
 * A flex-wrap-before value. True, false or their string presentations "true" or "false".
 */
export type RNFlexWrapBefore = FlexWrapBefore;

export type RNAlignSelf = AlignSelf;

export class RNFlexboxLayout extends FlexboxLayout {
	public flexDirection: RNFlexDirection;
	public flexWrap: RNFlexWrap;
	public justifyContent: RNJustifyContent;
	public alignItems: RNAlignItems;
	public alignContent: RNAlignContent;

	public static setOrder(view: View, order: number);
	public static getOrder(view: View): number;

	public static setFlexGrow(view: View, grow: number);
	public static getFlexGrow(view: View);

	public static setFlexShrink(view: View, shrink: number);
	public static getFlexShrink(view: View): number;

	public static setAlignSelf(view: View, align: AlignSelf);
	public static getAlignSelf(view: View): AlignSelf;

	public static setFlexWrapBefore(view: View, wrap: boolean);
	public static getFlexWrapBefore(view: View): boolean;
}

export const flexDirectionProperty: CssProperty<Style, FlexDirection>;
export const flexWrapProperty: CssProperty<Style, FlexWrap>;
export const justifyContentProperty: CssProperty<Style, JustifyContent>;
export const alignItemsProperty: CssProperty<Style, AlignItems>;

export const orderProperty: CssProperty<Style, Order>;
export const flexGrowProperty: CssProperty<Style, FlexGrow>;
export const flexShrinkProperty: CssProperty<Style, FlexShrink>;
export const flexWrapBeforeProperty: CssProperty<Style, FlexWrapBefore>;
export const alignSelfProperty: CssProperty<Style, AlignSelf>;