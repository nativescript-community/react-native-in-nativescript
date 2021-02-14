import { RNLayout } from "../rnlayout";

/**
  * @see https://reactnative.dev/docs/0.62/communication-ios for more end-to-end docs.
  */
export class RNRoot extends RNLayout {
    public readonly shadowView: RCTRootShadowView = new RCTRootShadowView();
}