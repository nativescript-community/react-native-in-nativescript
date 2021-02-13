
declare class RCTAccessibilityManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTAccessibilityManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTAccessibilityManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	isBoldTextEnabled: boolean;

	isGrayscaleEnabled: boolean;

	isInvertColorsEnabled: boolean;

	isReduceMotionEnabled: boolean;

	isReduceTransparencyEnabled: boolean;

	isVoiceOverEnabled: boolean;

	readonly multiplier: number;

	multipliers: NSDictionary<string, number>;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTAccessibilityManagerCls(): typeof NSObject;

declare var RCTAccessibilityManagerDidUpdateMultiplierNotification: string;

declare class RCTActionSheetManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTActionSheetManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTActionSheetManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTActionSheetManagerCls(): typeof NSObject;

declare class RCTActivityIndicatorView extends UIActivityIndicatorView {

	static alloc(): RCTActivityIndicatorView; // inherited from NSObject

	static appearance(): RCTActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTActivityIndicatorView; // inherited from UIAppearance

	static new(): RCTActivityIndicatorView; // inherited from NSObject
}

declare class RCTActivityIndicatorViewManager extends RCTViewManager {

	static alloc(): RCTActivityIndicatorViewManager; // inherited from NSObject

	static new(): RCTActivityIndicatorViewManager; // inherited from NSObject
}

declare function RCTAddAssertFunction(assertFunction: (p1: string, p2: string, p3: number, p4: string, p5: string) => void): void;

declare function RCTAddLogFunction(logFunction: (p1: RCTLogLevel, p2: RCTLogSource, p3: string, p4: number, p5: string) => void): void;

declare class RCTAdditionAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTAdditionAnimatedNode; // inherited from NSObject

	static new(): RCTAdditionAnimatedNode; // inherited from NSObject
}

declare class RCTAlertController extends UIAlertController {

	static alertControllerWithTitleMessagePreferredStyle(title: string, message: string, preferredStyle: UIAlertControllerStyle): RCTAlertController; // inherited from UIAlertController

	static alloc(): RCTAlertController; // inherited from NSObject

	static new(): RCTAlertController; // inherited from NSObject

	showCompletion(animated: boolean, completion: () => void): void;
}

declare class RCTAlertManager extends NSObject implements RCTBridgeModule, RCTInvalidating {

	static alloc(): RCTAlertManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTAlertManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTAlertManagerCls(): typeof NSObject;

declare const enum RCTAlertViewStyle {

	Default = 0,

	SecureTextInput = 1,

	PlainTextInput = 2,

	LoginAndPasswordInput = 3
}

declare function RCTAllocateRootViewTag(): number;

declare class RCTAnimatedImage extends UIImage implements RCTAnimatedImageProtocol {

	static alloc(): RCTAnimatedImage; // inherited from NSObject

	static new(): RCTAnimatedImage; // inherited from NSObject

	static objectWithItemProviderDataTypeIdentifierError(data: NSData, typeIdentifier: string): RCTAnimatedImage; // inherited from NSItemProviderReading

	readonly animatedImageFrameCount: number; // inherited from RCTAnimatedImageProtocol

	readonly animatedImageLoopCount: number; // inherited from RCTAnimatedImageProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface RCTAnimatedImageProtocol extends NSObjectProtocol {

	animatedImageFrameCount: number;

	animatedImageLoopCount: number;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;
}
declare var RCTAnimatedImageProtocol: {

	prototype: RCTAnimatedImageProtocol;
};

declare class RCTAnimatedNode extends NSObject {

	static alloc(): RCTAnimatedNode; // inherited from NSObject

	static new(): RCTAnimatedNode; // inherited from NSObject

	readonly childNodes: NSMapTable<number, RCTAnimatedNode>;

	readonly config: NSDictionary<string, any>;

	manager: RCTNativeAnimatedNodesManager;

	readonly needsUpdate: boolean;

	readonly nodeTag: number;

	readonly parentNodes: NSMapTable<number, RCTAnimatedNode>;

	constructor(o: { tag: number; config: NSDictionary<string, any>; });

	addChild(child: RCTAnimatedNode): void;

	detachNode(): void;

	initWithTagConfig(tag: number, config: NSDictionary<string, any>): this;

	isManagedByFabric(): boolean;

	onAttachedToNode(parent: RCTAnimatedNode): void;

	onDetachedFromNode(parent: RCTAnimatedNode): void;

	performUpdate(): void;

	removeChild(child: RCTAnimatedNode): void;

	setNeedsUpdate(): void;

	updateNodeIfNecessary(): void;
}

declare function RCTAnimationClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

declare function RCTAnimationDragCoefficient(): number;

interface RCTAnimationDriver extends NSObjectProtocol {

	animationHasBegun: boolean;

	animationHasFinished: boolean;

	animationId: number;

	valueNode: RCTValueAnimatedNode;

	initWithIdConfigForNodeCallBack?(animationId: number, config: NSDictionary<any, any>, valueNode: RCTValueAnimatedNode, callback: (p1: NSArray<any>) => void): RCTAnimationDriver;

	resetAnimationConfig(config: NSDictionary<any, any>): void;

	startAnimation(): void;

	stepAnimationWithTime(currentTime: number): void;

	stopAnimation(): void;
}
declare var RCTAnimationDriver: {

	prototype: RCTAnimationDriver;
};

declare const enum RCTAnimationType {

	Spring = 0,

	Linear = 1,

	EaseIn = 2,

	EaseOut = 3,

	EaseInEaseOut = 4,

	Keyboard = 5
}

declare class RCTAppState extends RCTEventEmitter implements RCTInvalidating {

	static alloc(): RCTAppState; // inherited from NSObject

	static new(): RCTAppState; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTAppStateCls(): typeof NSObject;

declare class RCTAppearance extends RCTEventEmitter implements RCTBridgeModule {

	static alloc(): RCTAppearance; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTAppearance; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTAppearanceCls(): typeof NSObject;

declare class RCTAsyncLocalStorage extends NSObject implements RCTBridgeModule, RCTInvalidating {

	static alloc(): RCTAsyncLocalStorage; // inherited from NSObject

	static clearAllData(): void;

	static moduleName(): string;

	static new(): RCTAsyncLocalStorage; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	clearOnInvalidate: boolean;

	readonly valid: boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	clearAllData(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	multiGetCallback(keys: NSArray<string> | string[], callback: (p1: NSArray<any>) => void): void;

	multiSetCallback(kvPairs: NSArray<NSArray<string>> | NSArray<string>[], callback: (p1: NSArray<any>) => void): void;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTAsyncLocalStorageCls(): typeof NSObject;

interface RCTAutoInsetsProtocol {

	automaticallyAdjustContentInsets: boolean;

	contentInset: UIEdgeInsets;

	refreshContentInset(): void;
}
declare var RCTAutoInsetsProtocol: {

	prototype: RCTAutoInsetsProtocol;
};

declare class RCTBackedTextFieldDelegateAdapter extends NSObject {

	static alloc(): RCTBackedTextFieldDelegateAdapter; // inherited from NSObject

	static new(): RCTBackedTextFieldDelegateAdapter; // inherited from NSObject

	constructor(o: { textField: UITextField; });

	initWithTextField(backedTextInputView: UITextField): this;

	selectedTextRangeWasSet(): void;

	skipNextTextInputDidChangeSelectionEventWithTextRange(textRange: UITextRange): void;
}

interface RCTBackedTextInputDelegate extends NSObjectProtocol {

	scrollViewDidScroll?(scrollView: UIScrollView): void;

	textInputDidBeginEditing(): void;

	textInputDidChange(): void;

	textInputDidChangeSelection(): void;

	textInputDidEndEditing(): void;

	textInputDidReturn(): void;

	textInputShouldBeginEditing(): boolean;

	textInputShouldChangeTextInRange(text: string, range: NSRange): string;

	textInputShouldEndEditing(): boolean;

	textInputShouldReturn(): boolean;
}
declare var RCTBackedTextInputDelegate: {

	prototype: RCTBackedTextInputDelegate;
};

interface RCTBackedTextInputViewProtocol extends UITextInput {

	attributedText: NSAttributedString;

	caretHidden: boolean;

	clearButtonMode: UITextFieldViewMode;

	contentSize: CGSize;

	contextMenuHidden: boolean;

	defaultTextAttributes: NSDictionary<string, any>;

	editable: boolean;

	inputAccessoryView: UIView;

	placeholder: string;

	placeholderColor: UIColor;

	scrollEnabled: boolean;

	textContainerInset: UIEdgeInsets;

	textInputDelegate: RCTBackedTextInputDelegate;

	textWasPasted: boolean;

	setSelectedTextRangeNotifyDelegate(selectedTextRange: UITextRange, notifyDelegate: boolean): void;
}
declare var RCTBackedTextInputViewProtocol: {

	prototype: RCTBackedTextInputViewProtocol;
};

declare class RCTBackedTextViewDelegateAdapter extends NSObject {

	static alloc(): RCTBackedTextViewDelegateAdapter; // inherited from NSObject

	static new(): RCTBackedTextViewDelegateAdapter; // inherited from NSObject

	constructor(o: { textView: UITextView; });

	initWithTextView(backedTextInputView: UITextView): this;

	skipNextTextInputDidChangeSelectionEventWithTextRange(textRange: UITextRange): void;
}

declare class RCTBaseTextInputShadowView extends RCTBaseTextShadowView {

	static alloc(): RCTBaseTextInputShadowView; // inherited from NSObject

	static new(): RCTBaseTextInputShadowView; // inherited from NSObject

	maximumNumberOfLines: number;

	onContentSizeChange: (p1: NSDictionary<any, any>) => void;

	placeholder: string;

	text: string;

	constructor(o: { bridge: RCTBridge; });

	initWithBridge(bridge: RCTBridge): this;

	uiManagerWillPerformMounting(): void;
}

declare class RCTBaseTextInputView extends RCTView implements RCTBackedTextInputDelegate {

	static alloc(): RCTBaseTextInputView; // inherited from NSObject

	static appearance(): RCTBaseTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTBaseTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTBaseTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTBaseTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTBaseTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTBaseTextInputView; // inherited from UIAppearance

	static new(): RCTBaseTextInputView; // inherited from NSObject

	attributedText: NSAttributedString;

	autoFocus: boolean;

	readonly backedTextInputView: UIView;

	blurOnSubmit: boolean;

	clearTextOnFocus: boolean;

	inputAccessoryViewID: string;

	keyboardType: UIKeyboardType;

	maxLength: number;

	mostRecentEventCount: number;

	readonly nativeEventCount: number;

	onChange: (p1: NSDictionary<any, any>) => void;

	onContentSizeChange: (p1: NSDictionary<any, any>) => void;

	onScroll: (p1: NSDictionary<any, any>) => void;

	onSelectionChange: (p1: NSDictionary<any, any>) => void;

	onTextInput: (p1: NSDictionary<any, any>) => void;

	reactBorderInsets: UIEdgeInsets;

	reactPaddingInsets: UIEdgeInsets;

	secureTextEntry: boolean;

	selectTextOnFocus: boolean;

	selection: RCTTextSelection;

	textAttributes: RCTTextAttributes;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bridge: RCTBridge; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBridge(bridge: RCTBridge): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	self(): this;

	setSelectionStartSelectionEnd(start: number, end: number): void;

	textInputDidBeginEditing(): void;

	textInputDidChange(): void;

	textInputDidChangeSelection(): void;

	textInputDidEndEditing(): void;

	textInputDidReturn(): void;

	textInputShouldBeginEditing(): boolean;

	textInputShouldChangeTextInRange(text: string, range: NSRange): string;

	textInputShouldEndEditing(): boolean;

	textInputShouldReturn(): boolean;
}

declare class RCTBaseTextInputViewManager extends RCTBaseTextViewManager {

	static alloc(): RCTBaseTextInputViewManager; // inherited from NSObject

	static new(): RCTBaseTextInputViewManager; // inherited from NSObject
}

declare class RCTBaseTextShadowView extends RCTShadowView {

	static alloc(): RCTBaseTextShadowView; // inherited from NSObject

	static new(): RCTBaseTextShadowView; // inherited from NSObject

	textAttributes: RCTTextAttributes;

	attributedTextWithBaseTextAttributes(baseTextAttributes: RCTTextAttributes): NSAttributedString;
}

declare var RCTBaseTextShadowViewEmbeddedShadowViewAttributeName: string;

declare class RCTBaseTextViewManager extends RCTViewManager {

	static alloc(): RCTBaseTextViewManager; // inherited from NSObject

	static new(): RCTBaseTextViewManager; // inherited from NSObject
}

declare class RCTBlobManager extends NSObject implements RCTBridgeModule, RCTURLRequestHandler {

	static alloc(): RCTBlobManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTBlobManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	createFromPartsWithId(parts: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], blobId: string): void;

	handlerPriority(): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	remove(blobId: string): void;

	resolve(blob: NSDictionary<string, any>): NSData;

	resolveOffsetSize(blobId: string, offset: number, size: number): NSData;

	resolveURL(url: NSURL): NSData;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;

	store(data: NSData): string;

	storeWithId(data: NSData, blobId: string): void;
}

declare function RCTBlurredImageWithRadius(inputImage: UIImage, radius: number): UIImage;

interface RCTBorderColors {
	top: any;
	left: any;
	bottom: any;
	right: any;
}
declare var RCTBorderColors: interop.StructType<RCTBorderColors>;

declare function RCTBorderColorsAreEqual(borderColors: RCTBorderColors): boolean;

declare function RCTBorderInsetsAreEqual(borderInsets: UIEdgeInsets): boolean;

declare const enum RCTBorderStyle {

	Unset = 0,

	Solid = 1,

	Dotted = 2,

	Dashed = 3
}

declare class RCTBridge extends NSObject implements RCTInvalidating {

	static alloc(): RCTBridge; // inherited from NSObject

	static currentBridge(): RCTBridge;

	static new(): RCTBridge; // inherited from NSObject

	static setCurrentBridge(bridge: RCTBridge): void;

	readonly accessibilityManager: RCTAccessibilityManager;

	batchedBridge: RCTBridge;

	bridgeDescription: string;

	bundleURL: NSURL;

	readonly delegate: RCTBridgeDelegate;

	readonly devMenu: RCTDevMenu;

	readonly devSettings: RCTDevSettings;

	executorClass: typeof NSObject;

	flowID: number;

	flowIDMap: NSDictionary<any, any>;

	flowIDMapLock: NSLock;

	readonly imageLoader: RCTImageLoader;

	readonly imageStoreManager: RCTImageStoreManager;

	readonly inspectable: boolean;

	readonly launchOptions: NSDictionary<any, any>;

	readonly loading: boolean;

	readonly moduleClasses: NSArray<typeof NSObject>;

	readonly moduleProvider: () => NSArray<RCTBridgeModule>;

	readonly moduleSetupComplete: boolean;

	readonly networking: RCTNetworking;

	readonly parentBridge: RCTBridge;

	readonly performanceLogger: RCTPerformanceLogger;

	readonly redBox: RCTRedBox;

	readonly uiManager: RCTUIManager;

	readonly valid: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bundleURL: NSURL; moduleProvider: () => NSArray<RCTBridgeModule>; launchOptions: NSDictionary<any, any>; });

	constructor(o: { delegate: RCTBridgeDelegate; bundleURL: NSURL; moduleProvider: () => NSArray<RCTBridgeModule>; launchOptions: NSDictionary<any, any>; });

	constructor(o: { delegate: RCTBridgeDelegate; launchOptions: NSDictionary<any, any>; });

	_immediatelyCallTimer(timer: number): void;

	callNativeModuleMethodParams(moduleID: number, methodID: number, params: NSArray<any> | any[]): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decorateNativeCallInvoker(nativeInvoker: any): any;

	dispatchBlockQueue(block: () => void, queue: NSObject): void;

	enqueueCallbackArgs(cbID: number, args: NSArray<any> | any[]): void;

	enqueueJSCallArgs(moduleDotMethod: string, args: NSArray<any> | any[]): void;

	enqueueJSCallMethodArgsCompletion(module: string, method: string, args: NSArray<any> | any[], completion: () => void): void;

	eventDispatcher(): RCTEventDispatcher;

	initWithBundleURLModuleProviderLaunchOptions(bundleURL: NSURL, block: () => NSArray<RCTBridgeModule>, launchOptions: NSDictionary<any, any>): this;

	initWithDelegateBundleURLModuleProviderLaunchOptions(delegate: RCTBridgeDelegate, bundleURL: NSURL, block: () => NSArray<RCTBridgeModule>, launchOptions: NSDictionary<any, any>): this;

	initWithDelegateLaunchOptions(delegate: RCTBridgeDelegate, launchOptions: NSDictionary<any, any>): this;

	invalidate(): void;

	isBatchActive(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	jsCallInvoker(): any;

	logMessageLevel(message: string, level: string): void;

	moduleDataForName(moduleName: string): RCTModuleData;

	moduleForClass(moduleClass: typeof NSObject): any;

	moduleForName(moduleName: string): any;

	moduleForNameLazilyLoadIfNecessary(moduleName: string, lazilyLoad: boolean): any;

	moduleIsInitialized(moduleClass: typeof NSObject): boolean;

	modulesConformingToProtocol(protocol: any /* Protocol */): NSArray<any>;

	onFastRefresh(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerAdditionalModuleClasses(newModules: NSArray<typeof NSObject> | typeof NSObject[]): void;

	registerModuleForFrameUpdatesWithModuleData(module: RCTBridgeModule, moduleData: RCTModuleData): void;

	registerSegmentWithIdPath(segmentId: number, path: string): void;

	reload(): void;

	reloadWithReason(reason: string): void;

	requestReload(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setRCTTurboModuleLookupDelegate(turboModuleLookupDelegate: RCTTurboModuleLookupDelegate): void;

	setSurfacePresenter(presenter: RCTSurfacePresenterStub): void;

	setUp(): void;

	start(): void;

	startProfiling(): void;

	stopProfiling(callback: (p1: NSData) => void): void;

	surfacePresenter(): RCTSurfacePresenterStub;

	updateModuleWithInstance(instance: RCTBridgeModule): void;

	webSocketModule(): RCTWebSocketModule;
}

interface RCTBridgeDelegate extends NSObjectProtocol {

	bridgeDidNotFindModule?(bridge: RCTBridge, moduleName: string): boolean;

	extraLazyModuleClassesForBridge?(bridge: RCTBridge): NSDictionary<string, typeof NSObject>;

	extraModulesForBridge?(bridge: RCTBridge): NSArray<RCTBridgeModule>;

	loadSourceForBridgeOnProgressOnComplete?(bridge: RCTBridge, onProgress: (p1: RCTLoadingProgress) => void, loadCallback: (p1: NSError, p2: RCTSource) => void): void;

	loadSourceForBridgeWithBlock?(bridge: RCTBridge, loadCallback: (p1: NSError, p2: RCTSource) => void): void;

	shouldBridgeUseCustomJSC?(bridge: RCTBridge): boolean;

	sourceURLForBridge(bridge: RCTBridge): NSURL;
}
declare var RCTBridgeDelegate: {

	prototype: RCTBridgeDelegate;
};

declare var RCTBridgeDidDownloadScriptNotification: string;

declare var RCTBridgeDidDownloadScriptNotificationBridgeDescriptionKey: string;

declare var RCTBridgeDidDownloadScriptNotificationReasonKey: string;

declare var RCTBridgeDidDownloadScriptNotificationSourceKey: string;

declare var RCTBridgeDidInvalidateModulesNotification: string;

declare var RCTBridgeFastRefreshNotification: string;

interface RCTBridgeMethod extends NSObjectProtocol {

	JSMethodName: string;

	functionType: RCTFunctionType;

	invokeWithBridgeModuleArguments(bridge: RCTBridge, module: any, _arguments: NSArray<any> | any[]): any;
}
declare var RCTBridgeMethod: {

	prototype: RCTBridgeMethod;
};

interface RCTBridgeModule extends NSObjectProtocol {

	bridge?: RCTBridge;

	methodQueue?: NSObject;

	batchDidComplete?(): void;

	constantsToExport?(): NSDictionary<any, any>;

	methodsToExport?(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush?(): void;
}
declare var RCTBridgeModule: {

	prototype: RCTBridgeModule;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare function RCTBridgeModuleNameForClass(bridgeModuleClass: typeof NSObject): string;

declare var RCTBridgeWillBeInvalidatedNotification: string;

declare var RCTBridgeWillDownloadScriptNotification: string;

declare var RCTBridgeWillInvalidateModulesNotification: string;

declare var RCTBridgeWillReloadNotification: string;

declare function RCTBundlePathForURL(URL: NSURL): string;

declare class RCTBundleStatus extends NSObject {

	static alloc(): RCTBundleStatus; // inherited from NSObject

	static new(): RCTBundleStatus; // inherited from NSObject

	bundleUpdateTimestamp: number;

	isLastBundleDownloadSuccess: boolean;
}

declare class RCTBundleURLProvider extends NSObject {

	static alloc(): RCTBundleURLProvider; // inherited from NSObject

	static jsBundleURLForBundleRootPackagerHostEnableDevEnableMinification(bundleRoot: string, packagerHost: string, enableDev: boolean, enableMinification: boolean): NSURL;

	static new(): RCTBundleURLProvider; // inherited from NSObject

	static resourceURLForResourcePathPackagerHostQuery(path: string, packagerHost: string, query: string): NSURL;

	static sharedSettings(): RCTBundleURLProvider;

	enableDev: boolean;

	enableLiveReload: boolean;

	enableMinification: boolean;

	jsLocation: string;

	isPackagerRunning(host: string): boolean;

	jsBundleURLForBundleRootFallbackResource(bundleRoot: string, resourceName: string): NSURL;

	jsBundleURLForBundleRootFallbackResourceFallbackExtension(bundleRoot: string, resourceName: string, extension: string): NSURL;

	jsBundleURLForBundleRootFallbackURLProvider(bundleRoot: string, fallbackURLProvider: () => NSURL): NSURL;

	jsBundleURLForFallbackResourceFallbackExtension(resourceName: string, extension: string): NSURL;

	packagerServerHost(): string;

	resetToDefaults(): void;

	resourceURLForResourceRootResourceNameResourceExtensionOfflineBundle(root: string, name: string, extension: string, offlineBundle: NSBundle): NSURL;

	setDefaults(): void;
}

declare var RCTBundleURLProviderUpdatedNotification: string;

declare function RCTCeilPixelValue(value: number): number;

declare function RCTClassOverridesClassMethod(cls: typeof NSObject, selector: string): boolean;

declare function RCTClassOverridesInstanceMethod(cls: typeof NSObject, selector: string): boolean;

declare class RCTClipboard extends NSObject implements RCTBridgeModule {

	static alloc(): RCTClipboard; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTClipboard; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTClipboardCls(): typeof NSObject;

declare function RCTColorToHexString(color: any): string;

interface RCTComponent extends NSObjectProtocol {

	reactTag: number;

	rootTag: number;

	didSetProps(changedProps: NSArray<string> | string[]): void;

	didUpdateReactSubviews(): void;

	insertReactSubviewAtIndex(subview: RCTComponent, atIndex: number): void;

	isReactRootView(): boolean;

	reactSubviews(): NSArray<RCTComponent>;

	reactSuperview(): RCTComponent;

	reactTagAtPoint(point: CGPoint): number;

	removeReactSubview(subview: RCTComponent): void;
}
declare var RCTComponent: {

	prototype: RCTComponent;
};

declare class RCTComponentData extends NSObject {

	static alloc(): RCTComponentData; // inherited from NSObject

	static new(): RCTComponentData; // inherited from NSObject

	eventInterceptor: (p1: string, p2: NSDictionary<any, any>, p3: number) => void;

	readonly manager: RCTViewManager;

	readonly managerClass: typeof NSObject;

	readonly name: string;

	constructor(o: { managerClass: typeof NSObject; bridge: RCTBridge; });

	createShadowViewWithTag(tag: number): RCTShadowView;

	createViewWithTagRootTag(tag: number, rootTag: number): UIView;

	initWithManagerClassBridge(managerClass: typeof NSObject, bridge: RCTBridge): this;

	setPropsForShadowView(props: NSDictionary<string, any>, shadowView: RCTShadowView): void;

	setPropsForView(props: NSDictionary<string, any>, view: RCTComponent): void;

	viewConfig(): NSDictionary<string, any>;
}

declare class RCTComponentEvent extends NSObject implements RCTEvent {

	static alloc(): RCTComponentEvent; // inherited from NSObject

	static moduleDotMethod(): string;

	static new(): RCTComponentEvent; // inherited from NSObject

	readonly coalescingKey: number; // inherited from RCTEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventName: string; // inherited from RCTEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly viewTag: number; // inherited from RCTEvent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; viewTag: number; body: NSDictionary<any, any>; });

	arguments(): NSArray<any>;

	canCoalesce(): boolean;

	class(): typeof NSObject;

	coalesceWithEvent(newEvent: RCTEvent): RCTEvent;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithNameViewTagBody(name: string, viewTag: number, body: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var RCTContentDidAppearNotification: string;

declare class RCTConvert extends NSObject {

	static BOOL(json: any): boolean;

	static CATransform3D(json: any): CATransform3D;

	static CGAffineTransform(json: any): CGAffineTransform;

	static CGColor(json: any): any;

	static CGColorArray(json: any): NSArray<any>;

	static CGFloat(json: any): number;

	static CGImage(json: any): any;

	static CGLineCap(json: any): CGLineCap;

	static CGLineJoin(json: any): CGLineJoin;

	static CGPoint(json: any): CGPoint;

	static CGRect(json: any): CGRect;

	static CGSize(json: any): CGSize;

	static CLLocationCoordinate2D(json: any): CLLocationCoordinate2D;

	static CLLocationDegrees(json: any): number;

	static CLLocationDistance(json: any): number;

	static NSArray(json: any): NSArray<any>;

	static NSArrayArray(json: any): NSArray<NSArray<any>>;

	static NSData(json: any): NSData;

	static NSDate(json: any): Date;

	static NSDictionary(json: any): NSDictionary<any, any>;

	static NSDictionaryArray(json: any): NSArray<NSDictionary<any, any>>;

	static NSIndexSet(json: any): NSIndexSet;

	static NSInteger(json: any): number;

	static NSLineBreakMode(json: any): NSLineBreakMode;

	static NSLocale(json: any): NSLocale;

	static NSNumber(json: any): number;

	static NSNumberArray(json: any): NSArray<number>;

	static NSPropertyList(json: any): any;

	static NSSet(json: any): NSSet<any>;

	static NSString(json: any): string;

	static NSStringArray(json: any): NSArray<string>;

	static NSStringArrayArray(json: any): NSArray<NSArray<string>>;

	static NSTextAlignment(json: any): NSTextAlignment;

	static NSTimeInterval(json: any): number;

	static NSTimeZone(json: any): NSTimeZone;

	static NSUInteger(json: any): number;

	static NSURL(json: any): NSURL;

	static NSURLArray(json: any): NSArray<NSURL>;

	static NSURLRequest(json: any): NSURLRequest;

	static NSURLRequestCachePolicy(json: any): NSURLRequestCachePolicy;

	static NSUnderlineStyle(json: any): NSUnderlineStyle;

	static NSWritingDirection(json: any): NSWritingDirection;

	static RCTAnimationType(json: any): RCTAnimationType;

	static RCTBorderStyle(json: any): RCTBorderStyle;

	static RCTFileURL(json: any): NSURL;

	static RCTFileURLArray(json: any): NSArray<NSURL>;

	static RCTImageSource(json: any): RCTImageSource;

	static RCTImageSourceArray(json: any): NSArray<RCTImageSource>;

	static RCTPointerEvents(json: any): RCTPointerEvents;

	static RCTResizeMode(json: any): RCTResizeMode;

	static RCTTextDecorationLineType(json: any): RCTTextDecorationLineType;

	static RCTTextSelection(json: any): RCTTextSelection;

	static RCTTextTransform(json: any): RCTTextTransform;

	static UIActivityIndicatorViewStyle(json: any): UIActivityIndicatorViewStyle;

	static UIBarStyle(json: any): UIBarStyle;

	static UIColor(json: any): UIColor;

	static UIColorArray(json: any): NSArray<UIColor>;

	static UIDataDetectorTypes(json: any): UIDataDetectorTypes;

	static UIDatePickerMode(json: any): UIDatePickerMode;

	static UIEdgeInsets(json: any): UIEdgeInsets;

	static UIFont(json: any): UIFont;

	static UIImage(json: any): UIImage;

	static UIKeyboardAppearance(json: any): UIKeyboardAppearance;

	static UIKeyboardType(json: any): UIKeyboardType;

	static UIModalPresentationStyle(json: any): UIModalPresentationStyle;

	static UIReturnKeyType(json: any): UIReturnKeyType;

	static UIScrollViewKeyboardDismissMode(json: any): UIScrollViewKeyboardDismissMode;

	static UIStatusBarAnimation(json: any): UIStatusBarAnimation;

	static UIStatusBarStyle(json: any): UIStatusBarStyle;

	static UITextAutocapitalizationType(json: any): UITextAutocapitalizationType;

	static UITextAutocorrectionType(json: any): UITextAutocorrectionType;

	static UITextFieldViewMode(json: any): UITextFieldViewMode;

	static UITextSpellCheckingType(json: any): UITextSpellCheckingType;

	static UIViewContentMode(json: any): UIViewContentMode;

	static YGAlign(json: any): YGAlign;

	static YGDirection(json: any): YGDirection;

	static YGDisplay(json: any): YGDisplay;

	static YGFlexDirection(json: any): YGFlexDirection;

	static YGJustify(json: any): YGJustify;

	static YGOverflow(json: any): YGOverflow;

	static YGPositionType(json: any): YGPositionType;

	static YGValue(json: any): YGValue;

	static YGWrap(json: any): YGWrap;

	static alloc(): RCTConvert; // inherited from NSObject

	static css_backface_visibility_t(json: any): boolean;

	static double(json: any): number;

	static float(json: any): number;

	static id(json: any): any;

	static int(json: any): number;

	static int64_t(json: any): number;

	static new(): RCTConvert; // inherited from NSObject

	static uint64_t(json: any): number;
}

declare function RCTConvertArrayValue(p1: string, p2: any): NSArray<any>;

declare function RCTConvertEnumValue(p1: string | interop.Pointer | interop.Reference<any>, p2: NSDictionary<any, any>, p3: number, p4: any): number;

declare function RCTConvertMultiEnumValue(p1: string | interop.Pointer | interop.Reference<any>, p2: NSDictionary<any, any>, p3: number, p4: any): number;

declare function RCTCoreGraphicsFloatFromYogaFloat(value: number): number;

declare function RCTCoreGraphicsFloatFromYogaValue(value: YGValue, baseFloatValue: number): number;

declare function RCTCoreModulesClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

interface RCTCornerInsets {
	topLeft: CGSize;
	topRight: CGSize;
	bottomLeft: CGSize;
	bottomRight: CGSize;
}
declare var RCTCornerInsets: interop.StructType<RCTCornerInsets>;

interface RCTCornerRadii {
	topLeft: number;
	topRight: number;
	bottomLeft: number;
	bottomRight: number;
}
declare var RCTCornerRadii: interop.StructType<RCTCornerRadii>;

declare function RCTCornerRadiiAreEqual(cornerRadii: RCTCornerRadii): boolean;

declare function RCTCurrentThreadName(): string;

interface RCTCustomRefreshContolProtocol {

	onRefresh: (p1: NSDictionary<any, any>) => void;

	refreshing: boolean;
}
declare var RCTCustomRefreshContolProtocol: {

	prototype: RCTCustomRefreshContolProtocol;
};

declare class RCTCxxBridge extends RCTBridge {

	static alloc(): RCTCxxBridge; // inherited from NSObject

	static currentBridge(): RCTCxxBridge; // inherited from RCTBridge

	static new(): RCTCxxBridge; // inherited from NSObject

	readonly runtime: interop.Pointer | interop.Reference<any>;

	constructor(o: { parentBridge: RCTBridge; });

	initWithParentBridge(bridge: RCTBridge): this;
}

declare class RCTCxxConvert extends NSObject {

	static alloc(): RCTCxxConvert; // inherited from NSObject

	static new(): RCTCxxConvert; // inherited from NSObject
}

declare class RCTDataRequestHandler extends NSObject implements RCTInvalidating, RCTURLRequestHandler {

	static alloc(): RCTDataRequestHandler; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTDataRequestHandler; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	handlerPriority(): number;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;
}

declare function RCTDataRequestHandlerCls(): typeof NSObject;

declare function RCTDataURL(mimeType: string, data: NSData): NSURL;

declare class RCTDatePicker extends UIDatePicker {

	static alloc(): RCTDatePicker; // inherited from NSObject

	static appearance(): RCTDatePicker; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTDatePicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTDatePicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTDatePicker; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTDatePicker; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTDatePicker; // inherited from UIAppearance

	static new(): RCTDatePicker; // inherited from NSObject
}

declare class RCTDatePickerManager extends RCTViewManager {

	static alloc(): RCTDatePickerManager; // inherited from NSObject

	static new(): RCTDatePickerManager; // inherited from NSObject
}

declare class RCTDecayAnimation extends NSObject implements RCTAnimationDriver {

	static alloc(): RCTDecayAnimation; // inherited from NSObject

	static new(): RCTDecayAnimation; // inherited from NSObject

	readonly animationHasBegun: boolean; // inherited from RCTAnimationDriver

	readonly animationHasFinished: boolean; // inherited from RCTAnimationDriver

	readonly animationId: number; // inherited from RCTAnimationDriver

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly valueNode: RCTValueAnimatedNode; // inherited from RCTAnimationDriver

	readonly  // inherited from NSObjectProtocol

	constructor(o: { id: number; config: NSDictionary<any, any>; forNode: RCTValueAnimatedNode; callBack: (p1: NSArray<any>) => void; }); // inherited from RCTAnimationDriver

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIdConfigForNodeCallBack(animationId: number, config: NSDictionary<any, any>, valueNode: RCTValueAnimatedNode, callback: (p1: NSArray<any>) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetAnimationConfig(config: NSDictionary<any, any>): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimation(): void;

	stepAnimationWithTime(currentTime: number): void;

	stopAnimation(): void;
}

declare function RCTDecodeImageWithData(data: NSData, destSize: CGSize, destScale: number, resizeMode: RCTResizeMode): UIImage;

declare var RCTDefaultLogFunction: (p1: RCTLogLevel, p2: RCTLogSource, p3: string, p4: number, p5: string) => void;

declare function RCTDegreesToRadians(degrees: number): number;

declare class RCTDevLoadingView extends NSObject implements RCTBridgeModule, RCTDevLoadingViewProtocol {

	static alloc(): RCTDevLoadingView; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTDevLoadingView; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	static setEnabled(enabled: boolean): void;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	hide(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showMessageColorBackgroundColor(message: string, color: UIColor, backgroundColor: UIColor): void;

	showWithURL(URL: NSURL): void;

	updateProgress(progress: RCTLoadingProgress): void;
}

declare function RCTDevLoadingViewCls(): typeof NSObject;

declare function RCTDevLoadingViewGetEnabled(): boolean;

interface RCTDevLoadingViewProtocol extends NSObjectProtocol {

	hide(): void;

	showMessageColorBackgroundColor(message: string, color: UIColor, backgroundColor: UIColor): void;

	showWithURL(URL: NSURL): void;

	updateProgress(progress: RCTLoadingProgress): void;
}
declare var RCTDevLoadingViewProtocol: {

	prototype: RCTDevLoadingViewProtocol;

	setEnabled(enabled: boolean): void;
};

declare function RCTDevLoadingViewSetEnabled(enabled: boolean): void;

declare class RCTDevMenu extends NSObject {

	static alloc(): RCTDevMenu; // inherited from NSObject

	static new(): RCTDevMenu; // inherited from NSObject

	hotLoadingEnabled: boolean;

	liveReloadEnabled: boolean;

	readonly presentedItems: NSArray<RCTDevMenuItem>;

	profilingEnabled: boolean;

	shakeToShow: boolean;

	addItem(item: RCTDevMenuItem): void;

	addItemHandler(title: string, handler: () => void): void;

	isActionSheetShown(): boolean;

	reload(): void;

	show(): void;
}

declare function RCTDevMenuCls(): typeof NSObject;

declare class RCTDevMenuItem extends NSObject {

	static alloc(): RCTDevMenuItem; // inherited from NSObject

	static buttonItemWithTitleBlockHandler(titleBlock: () => string, handler: () => void): RCTDevMenuItem;

	static buttonItemWithTitleHandler(title: string, handler: () => void): RCTDevMenuItem;

	static new(): RCTDevMenuItem; // inherited from NSObject
}

declare class RCTDevSettings extends RCTEventEmitter {

	static alloc(): RCTDevSettings; // inherited from NSObject

	static new(): RCTDevSettings; // inherited from NSObject

	isDebuggingRemotely: boolean;

	readonly isElementInspectorShown: boolean;

	readonly isHotLoadingAvailable: boolean;

	isHotLoadingEnabled: boolean;

	readonly isJSCSamplingProfilerAvailable: boolean;

	readonly isLiveReloadAvailable: boolean;

	readonly isNuclideDebuggingAvailable: boolean;

	isPerfMonitorShown: boolean;

	isProfilingEnabled: boolean;

	readonly isRemoteDebuggingAvailable: boolean;

	isShakeToShowDevMenuEnabled: boolean;

	startSamplingProfilerOnLaunch: boolean;

	constructor(o: { dataSource: RCTDevSettingsDataSource; });

	addHandlerForPackagerMethod(handler: RCTPackagerClientMethod, name: string): void;

	initWithDataSource(dataSource: RCTDevSettingsDataSource): this;

	setupHotModuleReloadClientIfApplicableForURL(bundleURL: NSURL): void;

	toggleElementInspector(): void;
}

declare function RCTDevSettingsCls(): typeof NSObject;

interface RCTDevSettingsDataSource extends NSObjectProtocol {

	settingForKey(key: string): any;

	updateSettingWithValueForKey(value: any, key: string): void;
}
declare var RCTDevSettingsDataSource: {

	prototype: RCTDevSettingsDataSource;
};

declare function RCTDevSettingsSetEnabled(enabled: boolean): void;

declare class RCTDeviceInfo extends NSObject implements RCTBridgeModule {

	static alloc(): RCTDeviceInfo; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTDeviceInfo; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTDeviceInfoCls(): typeof NSObject;

declare var RCTDidInitializeModuleNotification: string;

declare var RCTDidSetupModuleNotification: string;

declare var RCTDidSetupModuleNotificationModuleNameKey: string;

declare var RCTDidSetupModuleNotificationSetupTimeKey: string;

declare class RCTDiffClampAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTDiffClampAnimatedNode; // inherited from NSObject

	static new(): RCTDiffClampAnimatedNode; // inherited from NSObject
}

interface RCTDimensions {
	window: { width: number; height: number; scale: number; fontScale: number; };
	screen: { width: number; height: number; scale: number; fontScale: number; };
}
declare var RCTDimensions: interop.StructType<RCTDimensions>;

declare class RCTDisplayLink extends NSObject {

	static alloc(): RCTDisplayLink; // inherited from NSObject

	static new(): RCTDisplayLink; // inherited from NSObject

	addToRunLoop(runLoop: NSRunLoop): void;

	invalidate(): void;

	registerModuleForFrameUpdatesWithModuleData(module: RCTBridgeModule, moduleData: RCTModuleData): void;
}

interface RCTDisplayRefreshable {

	displayDidRefresh(displayLink: CADisplayLink): void;
}
declare var RCTDisplayRefreshable: {

	prototype: RCTDisplayRefreshable;
};

declare const enum RCTDisplayType {

	None = 0,

	Flex = 1,

	Inline = 2
}

declare class RCTDisplayWeakRefreshable extends NSObject {

	static alloc(): RCTDisplayWeakRefreshable; // inherited from NSObject

	static displayLinkWithWeakRefreshable(refreshable: RCTDisplayRefreshable): CADisplayLink;

	static new(): RCTDisplayWeakRefreshable; // inherited from NSObject

	refreshable: RCTDisplayRefreshable;
}

declare class RCTDivisionAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTDivisionAnimatedNode; // inherited from NSObject

	static new(): RCTDivisionAnimatedNode; // inherited from NSObject
}

declare function RCTDropReactPrefixes(s: string): string;

declare function RCTEnableAppearancePreference(enabled: boolean): void;

declare function RCTEnableImageLoadingInstrumentation(enabled: boolean): void;

declare function RCTEnableImageLoadingPerfInstrumentation(enabled: boolean): void;

declare function RCTEnableTurboModule(enabled: boolean): void;

interface RCTErrorCustomizer extends NSObjectProtocol {

	customizeErrorInfo(info: RCTErrorInfo): RCTErrorInfo;
}
declare var RCTErrorCustomizer: {

	prototype: RCTErrorCustomizer;
};

declare var RCTErrorDomain: string;

declare class RCTErrorInfo extends NSObject {

	static alloc(): RCTErrorInfo; // inherited from NSObject

	static new(): RCTErrorInfo; // inherited from NSObject

	readonly errorMessage: string;

	readonly stack: NSArray<RCTJSStackFrame>;

	constructor(o: { errorMessage: string; stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[]; });

	initWithErrorMessageStack(errorMessage: string, stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[]): this;
}

declare var RCTErrorUnspecified: string;

declare function RCTErrorWithMessage(message: string): NSError;

interface RCTEvent extends NSObjectProtocol {

	coalescingKey?: number;

	eventName: string;

	viewTag: number;

	arguments(): NSArray<any>;

	canCoalesce(): boolean;

	coalesceWithEvent?(newEvent: RCTEvent): RCTEvent;
}
declare var RCTEvent: {

	prototype: RCTEvent;

	moduleDotMethod(): string;
};

declare class RCTEventAnimation extends NSObject {

	static alloc(): RCTEventAnimation; // inherited from NSObject

	static new(): RCTEventAnimation; // inherited from NSObject

	readonly valueNode: RCTValueAnimatedNode;

	constructor(o: { eventPath: NSArray<string> | string[]; valueNode: RCTValueAnimatedNode; });

	initWithEventPathValueNode(eventPath: NSArray<string> | string[], valueNode: RCTValueAnimatedNode): this;

	updateWithEvent(event: RCTEvent): void;
}

declare class RCTEventDispatcher extends NSObject implements RCTBridgeModule {

	static alloc(): RCTEventDispatcher; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTEventDispatcher; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addDispatchObserver(observer: RCTEventDispatcherObserver): void;

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeDispatchObserver(observer: RCTEventDispatcherObserver): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendAppEventWithNameBody(name: string, body: any): void;

	sendDeviceEventWithNameBody(name: string, body: any): void;

	sendEvent(event: RCTEvent): void;

	sendFakeScrollEvent(reactTag: number): void;

	sendTextEventWithTypeReactTagTextKeyEventCount(type: RCTTextEventType, reactTag: number, text: string, key: string, eventCount: number): void;
}

interface RCTEventDispatcherObserver extends NSObjectProtocol {

	eventDispatcherWillDispatchEvent(event: RCTEvent): void;
}
declare var RCTEventDispatcherObserver: {

	prototype: RCTEventDispatcherObserver;
};

declare class RCTEventEmitter extends NSObject implements RCTBridgeModule, RCTJSInvokerModule {

	static alloc(): RCTEventEmitter; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTEventEmitter; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	bridge: RCTBridge;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	invokeJS: (p1: string, p2: string, p3: NSArray<any>) => void; // inherited from RCTJSInvokerModule

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addListener(eventName: string): void;

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeListeners(count: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendEventWithNameBody(name: string, body: any): void;

	startObserving(): void;

	stopObserving(): void;

	supportedEvents(): NSArray<string>;
}

declare class RCTExceptionsManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTExceptionsManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTExceptionsManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	delegate: RCTExceptionsManagerDelegate;

	maxReloadAttempts: number;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { delegate: RCTExceptionsManagerDelegate; });

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	initWithDelegate(delegate: RCTExceptionsManagerDelegate): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reportFatalExceptionStackExceptionId(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], exceptionId: number): void;

	reportSoftExceptionStackExceptionId(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], exceptionId: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTExceptionsManagerCls(): typeof NSObject;

interface RCTExceptionsManagerDelegate extends NSObjectProtocol {

	handleFatalJSExceptionWithMessageStackExceptionId(message: string, stack: NSArray<any> | any[], exceptionId: number): void;

	handleSoftJSExceptionWithMessageStackExceptionId(message: string, stack: NSArray<any> | any[], exceptionId: number): void;

	updateJSExceptionWithMessageStackExceptionId?(message: string, stack: NSArray<any> | any[], exceptionId: number): void;
}
declare var RCTExceptionsManagerDelegate: {

	prototype: RCTExceptionsManagerDelegate;
};

declare function RCTExecuteOnMainQueue(block: () => void): void;

declare function RCTExecuteOnUIManagerQueue(block: () => void): void;

declare class RCTFPSGraph extends UIView {

	static alloc(): RCTFPSGraph; // inherited from NSObject

	static appearance(): RCTFPSGraph; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTFPSGraph; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTFPSGraph; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTFPSGraph; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTFPSGraph; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTFPSGraph; // inherited from UIAppearance

	static new(): RCTFPSGraph; // inherited from NSObject

	readonly FPS: number;

	readonly maxFPS: number;

	readonly minFPS: number;

	constructor(o: { frame: CGRect; color: UIColor; });

	initWithFrameColor(frame: CGRect, color: UIColor): this;

	onTick(timestamp: number): void;
}

declare function RCTFatal(error: NSError): void;

declare function RCTFatalException(exception: NSException): void;

declare var RCTFatalExceptionName: string;

declare class RCTFileReaderModule extends NSObject implements RCTBridgeModule {

	static alloc(): RCTFileReaderModule; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTFileReaderModule; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTFileRequestHandler extends NSObject implements RCTInvalidating, RCTURLRequestHandler {

	static alloc(): RCTFileRequestHandler; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTFileRequestHandler; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	handlerPriority(): number;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;
}

declare function RCTFileRequestHandlerCls(): typeof NSObject;

declare function RCTFloorPixelValue(value: number): number;

declare class RCTFont extends NSObject {

	static alloc(): RCTFont; // inherited from NSObject

	static new(): RCTFont; // inherited from NSObject

	static updateFontWithFamily(font: UIFont, family: string): UIFont;

	static updateFontWithFamilySizeWeightStyleVariantScaleMultiplier(font: UIFont, family: string, size: number, weight: string, style: string, variant: NSArray<string> | string[], scaleMultiplier: number): UIFont;

	static updateFontWithSize(font: UIFont, size: number): UIFont;

	static updateFontWithStyle(font: UIFont, style: string): UIFont;

	static updateFontWithWeight(font: UIFont, weight: string): UIFont;
}

declare function RCTForceTouchAvailable(): boolean;

declare function RCTFormatError(message: string, stacktrace: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], maxMessageLength: number): string;

declare function RCTFormatLog(timestamp: Date, level: RCTLogLevel, fileName: string, lineNumber: number, message: string): string;

declare function RCTFormatLogLevel(p1: RCTLogLevel): string;

declare function RCTFormatLogSource(p1: RCTLogSource): string;

declare function RCTFormatStackTrace(stackTrace: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): string;

declare class RCTFrameAnimation extends NSObject implements RCTAnimationDriver {

	static alloc(): RCTFrameAnimation; // inherited from NSObject

	static new(): RCTFrameAnimation; // inherited from NSObject

	readonly animationHasBegun: boolean; // inherited from RCTAnimationDriver

	readonly animationHasFinished: boolean; // inherited from RCTAnimationDriver

	readonly animationId: number; // inherited from RCTAnimationDriver

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly valueNode: RCTValueAnimatedNode; // inherited from RCTAnimationDriver

	readonly  // inherited from NSObjectProtocol

	constructor(o: { id: number; config: NSDictionary<any, any>; forNode: RCTValueAnimatedNode; callBack: (p1: NSArray<any>) => void; }); // inherited from RCTAnimationDriver

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIdConfigForNodeCallBack(animationId: number, config: NSDictionary<any, any>, valueNode: RCTValueAnimatedNode, callback: (p1: NSArray<any>) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetAnimationConfig(config: NSDictionary<any, any>): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimation(): void;

	stepAnimationWithTime(currentTime: number): void;

	stopAnimation(): void;
}

declare class RCTFrameUpdate extends NSObject {

	static alloc(): RCTFrameUpdate; // inherited from NSObject

	static new(): RCTFrameUpdate; // inherited from NSObject

	readonly deltaTime: number;

	readonly timestamp: number;

	constructor(o: { displayLink: CADisplayLink; });

	initWithDisplayLink(displayLink: CADisplayLink): this;
}

interface RCTFrameUpdateObserver extends NSObjectProtocol {

	pauseCallback: () => void;

	paused: boolean;

	didUpdateFrame(update: RCTFrameUpdate): void;
}
declare var RCTFrameUpdateObserver: {

	prototype: RCTFrameUpdateObserver;
};

declare const enum RCTFunctionType {

	Normal = 0,

	Promise = 1,

	Sync = 2
}

declare class RCTGIFImageDecoder extends NSObject implements RCTImageDataDecoder {

	static alloc(): RCTGIFImageDecoder; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTGIFImageDecoder; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canDecodeImageData(imageData: NSData): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	decodeImageDataSizeScaleResizeModeCompletionHandler(imageData: NSData, size: CGSize, scale: number, resizeMode: RCTResizeMode, completionHandler: (p1: NSError, p2: UIImage) => void): () => void;

	decoderPriority(): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTGIFImageDecoderCls(): typeof NSObject;

declare function RCTGetAssertFunction(): (p1: string, p2: string, p3: number, p4: string, p5: string) => void;

declare function RCTGetBorderImage(borderStyle: RCTBorderStyle, viewSize: CGSize, cornerRadii: RCTCornerRadii, borderInsets: UIEdgeInsets, borderColors: RCTBorderColors, backgroundColor: any, drawToEdge: boolean): UIImage;

declare function RCTGetCornerInsets(cornerRadii: RCTCornerRadii, borderInsets: UIEdgeInsets): RCTCornerInsets;

declare function RCTGetDimensions(fontScale: number): RCTDimensions;

declare function RCTGetFatalExceptionHandler(): (p1: NSException) => void;

declare function RCTGetFatalHandler(): (p1: NSError) => void;

declare function RCTGetImageData(image: UIImage, quality: number): NSData;

declare function RCTGetImageMetadata(data: NSData): NSDictionary<string, any>;

declare function RCTGetLogFunction(): (p1: RCTLogLevel, p2: RCTLogSource, p3: string, p4: number, p5: string) => void;

declare function RCTGetLogThreshold(): RCTLogLevel;

declare function RCTGetModuleClasses(): NSArray<typeof NSObject>;

declare function RCTGetMultiplierForContentSizeCategory(category: string): number;

declare function RCTGetRGBAColorComponents(color: any, rgba: interop.Reference<number>): void;

declare function RCTGetReactNativeVersion(): NSDictionary<any, any>;

declare function RCTGetUIManagerQueue(): NSObject;

declare function RCTGetURLQueryParam(URL: NSURL, param: string): string;

declare function RCTGzipData(data: NSData, level: number): NSData;

declare class RCTHTTPRequestHandler extends NSObject implements RCTInvalidating, RCTURLRequestHandler {

	static alloc(): RCTHTTPRequestHandler; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTHTTPRequestHandler; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	handlerPriority(): number;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;
}

declare function RCTHTTPRequestHandlerCls(): typeof NSObject;

declare function RCTHasFontHandlerSet(): boolean;

declare function RCTHumanReadableType(obj: NSObject): string;

declare class RCTI18nManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTI18nManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTI18nManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTI18nManagerCls(): typeof NSObject;

declare class RCTI18nUtil extends NSObject {

	static alloc(): RCTI18nUtil; // inherited from NSObject

	static new(): RCTI18nUtil; // inherited from NSObject

	static sharedInstance(): RCTI18nUtil;

	allowRTL(value: boolean): void;

	doLeftAndRightSwapInRTL(): boolean;

	forceRTL(value: boolean): void;

	isRTL(): boolean;

	isRTLAllowed(): boolean;

	isRTLForced(): boolean;

	swapLeftAndRightInRTL(value: boolean): void;
}

declare class RCTImageCache extends NSObject implements RCTImageCacheProtocol {

	static alloc(): RCTImageCache; // inherited from NSObject

	static new(): RCTImageCache; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addImageToCacheURLSizeScaleResizeModeResponse(image: UIImage, url: string, size: CGSize, scale: number, resizeMode: RCTResizeMode, response: NSURLResponse): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageForUrlSizeScaleResizeMode(url: string, size: CGSize, scale: number, resizeMode: RCTResizeMode): UIImage;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface RCTImageCacheProtocol extends NSObjectProtocol {

	addImageToCacheURLSizeScaleResizeModeResponse(image: UIImage, url: string, size: CGSize, scale: number, resizeMode: RCTResizeMode, response: NSURLResponse): void;

	imageForUrlSizeScaleResizeMode(url: string, size: CGSize, scale: number, resizeMode: RCTResizeMode): UIImage;
}
declare var RCTImageCacheProtocol: {

	prototype: RCTImageCacheProtocol;
};

declare function RCTImageClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

interface RCTImageDataDecoder extends RCTBridgeModule {

	canDecodeImageData(imageData: NSData): boolean;

	decodeImageDataSizeScaleResizeModeCompletionHandler(imageData: NSData, size: CGSize, scale: number, resizeMode: RCTResizeMode, completionHandler: (p1: NSError, p2: UIImage) => void): () => void;

	decoderPriority?(): number;
}
declare var RCTImageDataDecoder: {

	prototype: RCTImageDataDecoder;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare class RCTImageEditingManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTImageEditingManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTImageEditingManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTImageEditingManagerCls(): typeof NSObject;

declare function RCTImageFromLocalAssetURL(imageURL: NSURL): UIImage;

declare function RCTImageFromLocalBundleAssetURL(imageURL: NSURL): UIImage;

declare function RCTImageHasAlpha(image: any): boolean;

declare class RCTImageLoader extends NSObject implements RCTBridgeModule, RCTImageLoaderProtocol {

	static alloc(): RCTImageLoader; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTImageLoader; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	maxConcurrentDecodingBytes: number; // inherited from RCTImageLoaderProtocol

	maxConcurrentDecodingTasks: number; // inherited from RCTImageLoaderProtocol

	maxConcurrentLoadingTasks: number; // inherited from RCTImageLoaderProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { redirectDelegate: RCTImageRedirectProtocol; });

	constructor(o: { redirectDelegate: RCTImageRedirectProtocol; loadersProvider: () => NSArray<RCTImageURLLoader>; decodersProvider: () => NSArray<RCTImageDataDecoder>; });

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	decodeImageDataSizeScaleClippedResizeModeCompletionBlock(imageData: NSData, size: CGSize, scale: number, clipped: boolean, resizeMode: RCTResizeMode, completionBlock: (p1: NSError, p2: UIImage) => void): () => void;

	getImageCacheStatus(requests: NSArray<any> | any[]): NSDictionary<any, any>;

	getImageSizeForURLRequestBlock(imageURLRequest: NSURLRequest, completionBlock: (p1: NSError, p2: CGSize) => void): () => void;

	handlerPriority(): number;

	initWithRedirectDelegate(redirectDelegate: RCTImageRedirectProtocol): this;

	initWithRedirectDelegateLoadersProviderDecodersProvider(redirectDelegate: RCTImageRedirectProtocol, getLoaders: () => NSArray<RCTImageURLLoader>, getDecoders: () => NSArray<RCTImageDataDecoder>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadImageWithURLRequestCallback(imageURLRequest: NSURLRequest, callback: (p1: NSError, p2: UIImage) => void): () => void;

	loadImageWithURLRequestPriorityCallback(imageURLRequest: NSURLRequest, priority: RCTImageLoaderPriority, callback: (p1: NSError, p2: UIImage) => void): () => void;

	loadImageWithURLRequestSizeScaleClippedResizeModeProgressBlockPartialLoadBlockCompletionBlock(imageURLRequest: NSURLRequest, size: CGSize, scale: number, clipped: boolean, resizeMode: RCTResizeMode, progressBlock: (p1: number, p2: number) => void, partialLoadBlock: (p1: UIImage) => void, completionBlock: (p1: NSError, p2: UIImage) => void): () => void;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;

	setImageCache(cache: RCTImageCacheProtocol): void;
}

declare function RCTImageLoaderCls(): typeof NSObject;

declare const enum RCTImageLoaderPriority {

	Immediate = 0,

	Prefetch = 1
}

interface RCTImageLoaderProtocol extends RCTURLRequestHandler {

	maxConcurrentDecodingBytes: number;

	maxConcurrentDecodingTasks: number;

	maxConcurrentLoadingTasks: number;

	decodeImageDataSizeScaleClippedResizeModeCompletionBlock(imageData: NSData, size: CGSize, scale: number, clipped: boolean, resizeMode: RCTResizeMode, completionBlock: (p1: NSError, p2: UIImage) => void): () => void;

	getImageCacheStatus(requests: NSArray<any> | any[]): NSDictionary<any, any>;

	getImageSizeForURLRequestBlock(imageURLRequest: NSURLRequest, completionBlock: (p1: NSError, p2: CGSize) => void): () => void;

	loadImageWithURLRequestCallback(imageURLRequest: NSURLRequest, callback: (p1: NSError, p2: UIImage) => void): () => void;

	loadImageWithURLRequestPriorityCallback(imageURLRequest: NSURLRequest, priority: RCTImageLoaderPriority, callback: (p1: NSError, p2: UIImage) => void): () => void;

	loadImageWithURLRequestSizeScaleClippedResizeModeProgressBlockPartialLoadBlockCompletionBlock(imageURLRequest: NSURLRequest, size: CGSize, scale: number, clipped: boolean, resizeMode: RCTResizeMode, progressBlock: (p1: number, p2: number) => void, partialLoadBlock: (p1: UIImage) => void, completionBlock: (p1: NSError, p2: UIImage) => void): () => void;

	setImageCache(cache: RCTImageCacheProtocol): void;
}
declare var RCTImageLoaderProtocol: {

	prototype: RCTImageLoaderProtocol;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface RCTImageLoaderWithAttributionProtocol extends RCTImageLoaderProtocol {

	trackURLImageContentDidSetForRequest(loaderRequest: RCTImageURLLoaderRequest): void;

	trackURLImageDidDestroy(loaderRequest: RCTImageURLLoaderRequest): void;

	trackURLImageVisibilityForRequestImageView(loaderRequest: RCTImageURLLoaderRequest, imageView: UIView): void;
}
declare var RCTImageLoaderWithAttributionProtocol: {

	prototype: RCTImageLoaderWithAttributionProtocol;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare function RCTImageLoadingInstrumentationEnabled(): boolean;

declare function RCTImageLoadingPerfInstrumentationEnabled(): boolean;

interface RCTImageRedirectProtocol {

	redirectAssetsURL(URL: NSURL): NSURL;
}
declare var RCTImageRedirectProtocol: {

	prototype: RCTImageRedirectProtocol;
};

declare class RCTImageShadowView extends RCTShadowView {

	static alloc(): RCTImageShadowView; // inherited from NSObject

	static new(): RCTImageShadowView; // inherited from NSObject
}

declare class RCTImageSource extends NSObject {

	static alloc(): RCTImageSource; // inherited from NSObject

	static new(): RCTImageSource; // inherited from NSObject

	readonly request: NSURLRequest;

	readonly scale: number;

	readonly size: CGSize;

	constructor(o: { URLRequest: NSURLRequest; size: CGSize; scale: number; });

	imageSourceWithSizeScale(size: CGSize, scale: number): this;

	initWithURLRequestSizeScale(request: NSURLRequest, size: CGSize, scale: number): this;
}

declare class RCTImageStoreManager extends NSObject implements RCTURLRequestHandler {

	static alloc(): RCTImageStoreManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTImageStoreManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest(requestToken: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	getImageDataForTagWithBlock(imageTag: string, block: (p1: NSData) => void): void;

	getImageForTagWithBlock(imageTag: string, block: (p1: UIImage) => void): void;

	handlerPriority(): number;

	imageForTag(imageTag: string): UIImage;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeImageForTagWithBlock(imageTag: string, block: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;

	storeImage(image: UIImage): string;

	storeImageDataWithBlock(imageData: NSData, block: (p1: string) => void): void;

	storeImageWithBlock(image: UIImage, block: (p1: string) => void): void;
}

declare function RCTImageStoreManagerCls(): typeof NSObject;

interface RCTImageURLLoader extends RCTBridgeModule {

	canLoadImageURL(requestURL: NSURL): boolean;

	loadImageForURLSizeScaleResizeModeProgressHandlerPartialLoadHandlerCompletionHandler(imageURL: NSURL, size: CGSize, scale: number, resizeMode: RCTResizeMode, progressHandler: (p1: number, p2: number) => void, partialLoadHandler: (p1: UIImage) => void, completionHandler: (p1: NSError, p2: UIImage) => void): () => void;

	loaderPriority?(): number;

	requiresScheduling?(): boolean;

	shouldCacheLoadedImages?(): boolean;
}
declare var RCTImageURLLoader: {

	prototype: RCTImageURLLoader;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare class RCTImageURLLoaderRequest extends NSObject {

	static alloc(): RCTImageURLLoaderRequest; // inherited from NSObject

	static new(): RCTImageURLLoaderRequest; // inherited from NSObject

	readonly cancellationBlock: () => void;

	readonly imageURL: NSURL;

	readonly requestId: string;

	constructor(o: { requestId: string; imageURL: NSURL; cancellationBlock: () => void; });

	cancel(): void;

	initWithRequestIdImageURLCancellationBlock(requestId: string, imageURL: NSURL, cancellationBlock: () => void): this;
}

interface RCTImageURLLoaderWithAttribution extends RCTImageURLLoader {

	trackURLImageContentDidSetForRequest(loaderRequest: RCTImageURLLoaderRequest): void;

	trackURLImageDidDestroy(loaderRequest: RCTImageURLLoaderRequest): void;

	trackURLImageVisibilityForRequestImageView(loaderRequest: RCTImageURLLoaderRequest, imageView: UIView): void;
}
declare var RCTImageURLLoaderWithAttribution: {

	prototype: RCTImageURLLoaderWithAttribution;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare class RCTImageView extends RCTView {

	static alloc(): RCTImageView; // inherited from NSObject

	static appearance(): RCTImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTImageView; // inherited from UIAppearance

	static new(): RCTImageView; // inherited from NSObject

	blurRadius: number;

	capInsets: UIEdgeInsets;

	defaultImage: UIImage;

	imageSources: NSArray<RCTImageSource>;

	renderingMode: UIImageRenderingMode;

	resizeMode: RCTResizeMode;

	constructor(o: { bridge: RCTBridge; });

	initWithBridge(bridge: RCTBridge): this;
}

declare class RCTImageViewManager extends RCTViewManager {

	static alloc(): RCTImageViewManager; // inherited from NSObject

	static new(): RCTImageViewManager; // inherited from NSObject
}

declare class RCTInputAccessoryShadowView extends RCTShadowView {

	static alloc(): RCTInputAccessoryShadowView; // inherited from NSObject

	static new(): RCTInputAccessoryShadowView; // inherited from NSObject
}

declare class RCTInputAccessoryView extends UIView {

	static alloc(): RCTInputAccessoryView; // inherited from NSObject

	static appearance(): RCTInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTInputAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTInputAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTInputAccessoryView; // inherited from UIAppearance

	static new(): RCTInputAccessoryView; // inherited from NSObject

	constructor(o: { bridge: RCTBridge; });

	initWithBridge(bridge: RCTBridge): this;
}

declare class RCTInputAccessoryViewContent extends UIView {

	static alloc(): RCTInputAccessoryViewContent; // inherited from NSObject

	static appearance(): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTInputAccessoryViewContent; // inherited from UIAppearance

	static new(): RCTInputAccessoryViewContent; // inherited from NSObject
}

declare class RCTInputAccessoryViewManager extends RCTViewManager {

	static alloc(): RCTInputAccessoryViewManager; // inherited from NSObject

	static new(): RCTInputAccessoryViewManager; // inherited from NSObject
}

declare class RCTInspector extends NSObject {

	static alloc(): RCTInspector; // inherited from NSObject

	static connectPageForRemoteConnection(pageId: number, remote: RCTInspectorRemoteConnection): RCTInspectorLocalConnection;

	static new(): RCTInspector; // inherited from NSObject

	static pages(): NSArray<RCTInspectorPage>;
}

declare class RCTInspectorDevServerHelper extends NSObject {

	static alloc(): RCTInspectorDevServerHelper; // inherited from NSObject

	static connectWithBundleURL(bundleURL: NSURL): RCTInspectorPackagerConnection;

	static disableDebugger(): void;

	static new(): RCTInspectorDevServerHelper; // inherited from NSObject
}

declare class RCTInspectorLocalConnection extends NSObject {

	static alloc(): RCTInspectorLocalConnection; // inherited from NSObject

	static new(): RCTInspectorLocalConnection; // inherited from NSObject

	disconnect(): void;

	sendMessage(message: string): void;
}

declare class RCTInspectorPackagerConnection extends NSObject {

	static alloc(): RCTInspectorPackagerConnection; // inherited from NSObject

	static new(): RCTInspectorPackagerConnection; // inherited from NSObject

	constructor(o: { URL: NSURL; });

	closeQuietly(): void;

	connect(): void;

	initWithURL(url: NSURL): this;

	isConnected(): boolean;

	sendEventToAllConnections(event: string): void;

	setBundleStatusProvider(bundleStatusProvider: () => RCTBundleStatus): void;
}

declare class RCTInspectorPage extends NSObject {

	static alloc(): RCTInspectorPage; // inherited from NSObject

	static new(): RCTInspectorPage; // inherited from NSObject

	readonly id: number;

	readonly title: string;

	readonly vm: string;
}

declare class RCTInspectorRemoteConnection extends NSObject {

	static alloc(): RCTInspectorRemoteConnection; // inherited from NSObject

	static new(): RCTInspectorRemoteConnection; // inherited from NSObject

	onDisconnect(): void;

	onMessage(message: string): void;
}

declare function RCTInterpolateValue(value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number, extrapolateLeft: string, extrapolateRight: string): number;

declare function RCTInterpolateValueInRange(value: number, inputRange: NSArray<number> | number[], outputRange: NSArray<number> | number[], extrapolateLeft: string, extrapolateRight: string): number;

declare class RCTInterpolationAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTInterpolationAnimatedNode; // inherited from NSObject

	static new(): RCTInterpolationAnimatedNode; // inherited from NSObject
}

interface RCTInvalidating extends NSObjectProtocol {

	invalidate(): void;
}
declare var RCTInvalidating: {

	prototype: RCTInvalidating;
};

declare function RCTIsBundleAssetURL(imageURL: NSURL): boolean;

declare function RCTIsLibraryAssetURL(imageURL: NSURL): boolean;

declare function RCTIsLocalAssetURL(imageURL: NSURL): boolean;

declare function RCTIsMainQueue(): boolean;

declare function RCTIsMainQueueFunction(): boolean;

declare function RCTIsPseudoUIManagerQueue(): boolean;

declare function RCTIsUIManagerQueue(): boolean;

declare function RCTJSErrorFromCodeMessageAndNSError(code: string, message: string, error: NSError): NSDictionary<string, any>;

declare function RCTJSErrorFromNSError(error: NSError): NSDictionary<string, any>;

interface RCTJSInvokerModule {

	invokeJS: (p1: string, p2: string, p3: NSArray<any>) => void;
}
declare var RCTJSInvokerModule: {

	prototype: RCTJSInvokerModule;
};

declare function RCTJSONClean(object: any): any;

declare function RCTJSONParse(jsonString: string, error: interop.Pointer | interop.Reference<NSError>): any;

declare function RCTJSONParseMutable(jsonString: string, error: interop.Pointer | interop.Reference<NSError>): any;

declare function RCTJSONStringify(jsonObject: any, error: interop.Pointer | interop.Reference<NSError>): string;

declare var RCTJSRawStackTraceKey: string;

declare class RCTJSStackFrame extends NSObject {

	static alloc(): RCTJSStackFrame; // inherited from NSObject

	static new(): RCTJSStackFrame; // inherited from NSObject

	static stackFrameWithDictionary(dict: NSDictionary<any, any>): RCTJSStackFrame;

	static stackFrameWithLine(line: string): RCTJSStackFrame;

	static stackFramesWithDictionaries(dicts: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): NSArray<RCTJSStackFrame>;

	static stackFramesWithLines(lines: string): NSArray<RCTJSStackFrame>;

	readonly collapse: number;

	readonly column: number;

	readonly file: string;

	readonly lineNumber: number;

	readonly methodName: string;

	constructor(o: { methodName: string; file: string; lineNumber: number; column: number; collapse: number; });

	initWithMethodNameFileLineNumberColumnCollapse(methodName: string, file: string, lineNumber: number, column: number, collapse: number): this;

	toDictionary(): NSDictionary<any, any>;
}

declare var RCTJSStackTraceKey: string;

declare var RCTJSThread: NSObject;

declare var RCTJavaScriptDidFailToLoadNotification: string;

declare var RCTJavaScriptDidLoadNotification: string;

interface RCTJavaScriptExecutor extends RCTBridgeModule, RCTInvalidating {

	valid: boolean;

	callFunctionOnModuleMethodArgumentsCallback(module: string, method: string, args: NSArray<any> | any[], onComplete: (p1: any, p2: NSError) => void): void;

	executeApplicationScriptSourceURLOnComplete(script: NSData, sourceURL: NSURL, onComplete: (p1: NSError) => void): void;

	executeAsyncBlockOnJavaScriptQueue(block: () => void): void;

	executeBlockOnJavaScriptQueue(block: () => void): void;

	flushedQueue(onComplete: (p1: any, p2: NSError) => void): void;

	injectJSONTextAsGlobalObjectNamedCallback(script: string, objectName: string, onComplete: (p1: NSError) => void): void;

	invokeCallbackIDArgumentsCallback(cbID: number, args: NSArray<any> | any[], onComplete: (p1: any, p2: NSError) => void): void;

	setUp(): void;
}
declare var RCTJavaScriptExecutor: {

	prototype: RCTJavaScriptExecutor;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare class RCTJavaScriptLoader extends NSObject {

	static alloc(): RCTJavaScriptLoader; // inherited from NSObject

	static attemptSynchronousLoadOfBundleAtURLRuntimeBCVersionSourceLengthError(scriptURL: NSURL, runtimeBCVersion: number, sourceLength: interop.Pointer | interop.Reference<number>): NSData;

	static loadBundleAtURLOnProgressOnComplete(scriptURL: NSURL, onProgress: (p1: RCTLoadingProgress) => void, onComplete: (p1: NSError, p2: RCTSource) => void): void;

	static new(): RCTJavaScriptLoader; // inherited from NSObject
}

declare const RCTJavaScriptLoaderErrorBCNotSupported: number;

declare const RCTJavaScriptLoaderErrorBCVersion: number;

declare const RCTJavaScriptLoaderErrorCannotBeLoadedSynchronously: number;

declare var RCTJavaScriptLoaderErrorDomain: string;

declare const RCTJavaScriptLoaderErrorFailedOpeningFile: number;

declare const RCTJavaScriptLoaderErrorFailedReadingFile: number;

declare const RCTJavaScriptLoaderErrorFailedStatingFile: number;

declare const RCTJavaScriptLoaderErrorNoScriptURL: number;

declare const RCTJavaScriptLoaderErrorURLLoadFailed: number;

declare var RCTJavaScriptWillStartExecutingNotification: string;

declare var RCTJavaScriptWillStartLoadingNotification: string;

declare class RCTKeyCommands extends NSObject {

	static alloc(): RCTKeyCommands; // inherited from NSObject

	static new(): RCTKeyCommands; // inherited from NSObject

	static sharedInstance(): RCTKeyCommands;

	isDoublePressKeyCommandRegisteredForInputModifierFlags(input: string, flags: UIKeyModifierFlags): boolean;

	isKeyCommandRegisteredForInputModifierFlags(input: string, flags: UIKeyModifierFlags): boolean;

	registerDoublePressKeyCommandWithInputModifierFlagsAction(input: string, flags: UIKeyModifierFlags, block: (p1: UIKeyCommand) => void): void;

	registerKeyCommandWithInputModifierFlagsAction(input: string, flags: UIKeyModifierFlags, block: (p1: UIKeyCommand) => void): void;

	unregisterDoublePressKeyCommandWithInputModifierFlags(input: string, flags: UIKeyModifierFlags): void;

	unregisterKeyCommandWithInputModifierFlags(input: string, flags: UIKeyModifierFlags): void;
}

declare function RCTKeyWindow(): UIWindow;

declare class RCTKeyboardObserver extends RCTEventEmitter {

	static alloc(): RCTKeyboardObserver; // inherited from NSObject

	static new(): RCTKeyboardObserver; // inherited from NSObject
}

declare function RCTKeyboardObserverCls(): typeof NSObject;

declare class RCTLayoutAnimation extends NSObject {

	static alloc(): RCTLayoutAnimation; // inherited from NSObject

	static initializeStatics(): void;

	static new(): RCTLayoutAnimation; // inherited from NSObject

	readonly animationType: RCTAnimationType;

	readonly delay: number;

	readonly duration: number;

	readonly initialVelocity: number;

	readonly property: string;

	readonly springDamping: number;

	constructor(o: { duration: number; config: NSDictionary<any, any>; });

	constructor(o: { duration: number; delay: number; property: string; springDamping: number; initialVelocity: number; animationType: RCTAnimationType; });

	initWithDurationConfig(duration: number, config: NSDictionary<any, any>): this;

	initWithDurationDelayPropertySpringDampingInitialVelocityAnimationType(duration: number, delay: number, property: string, springDamping: number, initialVelocity: number, animationType: RCTAnimationType): this;

	performAnimationsWithCompletionBlock(animations: () => void, completionBlock: (p1: boolean) => void): void;
}

declare class RCTLayoutAnimationGroup extends NSObject {

	static alloc(): RCTLayoutAnimationGroup; // inherited from NSObject

	static new(): RCTLayoutAnimationGroup; // inherited from NSObject

	callback: (p1: NSArray<any>) => void;

	readonly creatingLayoutAnimation: RCTLayoutAnimation;

	readonly deletingLayoutAnimation: RCTLayoutAnimation;

	readonly updatingLayoutAnimation: RCTLayoutAnimation;

	constructor(o: { config: NSDictionary<any, any>; callback: (p1: NSArray<any>) => void; });

	constructor(o: { creatingLayoutAnimation: RCTLayoutAnimation; updatingLayoutAnimation: RCTLayoutAnimation; deletingLayoutAnimation: RCTLayoutAnimation; callback: (p1: NSArray<any>) => void; });

	initWithConfigCallback(config: NSDictionary<any, any>, callback: (p1: NSArray<any>) => void): this;

	initWithCreatingLayoutAnimationUpdatingLayoutAnimationDeletingLayoutAnimationCallback(creatingLayoutAnimation: RCTLayoutAnimation, updatingLayoutAnimation: RCTLayoutAnimation, deletingLayoutAnimation: RCTLayoutAnimation, callback: (p1: NSArray<any>) => void): this;
}

interface RCTLayoutContext {
	absolutePosition: CGPoint;
	affectedShadowViews: NSHashTable<RCTShadowView>;
	other: NSHashTable<string>;
}
declare var RCTLayoutContext: interop.StructType<RCTLayoutContext>;

interface RCTLayoutMetrics {
	frame: CGRect;
	contentFrame: CGRect;
	borderWidth: UIEdgeInsets;
	displayType: RCTDisplayType;
	layoutDirection: UIUserInterfaceLayoutDirection;
}
declare var RCTLayoutMetrics: interop.StructType<RCTLayoutMetrics>;

declare function RCTLayoutMetricsFromYogaNode(yogaNode: interop.Pointer | interop.Reference<any>): RCTLayoutMetrics;

declare function RCTLibraryPath(): string;

declare function RCTLibraryPathForURL(URL: NSURL): string;

declare function RCTLinkingClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

declare class RCTLinkingManager extends RCTEventEmitter {

	static alloc(): RCTLinkingManager; // inherited from NSObject

	static applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

	static applicationOpenURLOptions(app: UIApplication, URL: NSURL, options: NSDictionary<string, any>): boolean;

	static applicationOpenURLSourceApplicationAnnotation(application: UIApplication, URL: NSURL, sourceApplication: string, annotation: any): boolean;

	static new(): RCTLinkingManager; // inherited from NSObject
}

declare function RCTLinkingManagerCls(): typeof NSObject;

declare class RCTLoadingProgress extends NSObject {

	static alloc(): RCTLoadingProgress; // inherited from NSObject

	static new(): RCTLoadingProgress; // inherited from NSObject

	done: number;

	status: string;

	total: number;
}

declare class RCTLocalAssetImageLoader extends NSObject implements RCTImageURLLoader {

	static alloc(): RCTLocalAssetImageLoader; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTLocalAssetImageLoader; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	canLoadImageURL(requestURL: NSURL): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadImageForURLSizeScaleResizeModeProgressHandlerPartialLoadHandlerCompletionHandler(imageURL: NSURL, size: CGSize, scale: number, resizeMode: RCTResizeMode, progressHandler: (p1: number, p2: number) => void, partialLoadHandler: (p1: UIImage) => void, completionHandler: (p1: NSError, p2: UIImage) => void): () => void;

	loaderPriority(): number;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requiresScheduling(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldCacheLoadedImages(): boolean;
}

declare function RCTLocalAssetImageLoaderCls(): typeof NSObject;

declare class RCTLogBox extends NSObject implements RCTBridgeModule {

	static alloc(): RCTLogBox; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTLogBox; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	hide(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	show(): void;
}

declare function RCTLogBoxCls(): typeof NSObject;

declare const enum RCTLogLevel {

	Trace = 0,

	Info = 1,

	Warning = 2,

	Error = 3,

	Fatal = 4
}

declare const enum RCTLogSource {

	Native = 1,

	JavaScript = 2
}

declare function RCTMD5Hash(string: string): string;

declare function RCTMakeAndLogError(message: string, toStringify: any, extraData: NSDictionary<string, any>): NSDictionary<string, any>;

declare function RCTMakeError(message: string, toStringify: any, extraData: NSDictionary<string, any>): NSDictionary<string, any>;

declare class RCTMaskedView extends RCTView {

	static alloc(): RCTMaskedView; // inherited from NSObject

	static appearance(): RCTMaskedView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTMaskedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTMaskedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTMaskedView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTMaskedView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTMaskedView; // inherited from UIAppearance

	static new(): RCTMaskedView; // inherited from NSObject
}

declare class RCTMaskedViewManager extends RCTViewManager {

	static alloc(): RCTMaskedViewManager; // inherited from NSObject

	static new(): RCTMaskedViewManager; // inherited from NSObject
}

declare class RCTMethodArgument extends NSObject {

	static alloc(): RCTMethodArgument; // inherited from NSObject

	static new(): RCTMethodArgument; // inherited from NSObject

	readonly nullability: RCTNullability;

	readonly type: string;

	readonly unused: boolean;
}

interface RCTMethodInfo {
	jsName: string;
	objcName: string;
	isSync: boolean;
}
declare var RCTMethodInfo: interop.StructType<RCTMethodInfo>;

declare class RCTModalHostView extends UIView implements RCTInvalidating {

	static alloc(): RCTModalHostView; // inherited from NSObject

	static appearance(): RCTModalHostView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTModalHostView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTModalHostView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTModalHostView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTModalHostView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTModalHostView; // inherited from UIAppearance

	static new(): RCTModalHostView; // inherited from NSObject

	animationType: string;

	delegate: RCTModalHostViewInteractor;

	identifier: number;

	onOrientationChange: (p1: NSDictionary<any, any>) => void;

	onShow: (p1: NSDictionary<any, any>) => void;

	presentationStyle: UIModalPresentationStyle;

	supportedOrientations: NSArray<string>;

	transparent: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bridge: RCTBridge; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBridge(bridge: RCTBridge): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTModalHostViewController extends UIViewController {

	static alloc(): RCTModalHostViewController; // inherited from NSObject

	static new(): RCTModalHostViewController; // inherited from NSObject

	boundsDidChangeBlock: (p1: CGRect) => void;

	supportedInterfaceOrientations: UIInterfaceOrientationMask;
}

interface RCTModalHostViewInteractor extends NSObjectProtocol {

	dismissModalHostViewWithViewControllerAnimated(modalHostView: RCTModalHostView, viewController: RCTModalHostViewController, animated: boolean): void;

	presentModalHostViewWithViewControllerAnimated(modalHostView: RCTModalHostView, viewController: RCTModalHostViewController, animated: boolean): void;
}
declare var RCTModalHostViewInteractor: {

	prototype: RCTModalHostViewInteractor;
};

declare class RCTModalHostViewManager extends RCTViewManager implements RCTInvalidating {

	static alloc(): RCTModalHostViewManager; // inherited from NSObject

	static new(): RCTModalHostViewManager; // inherited from NSObject

	dismissalBlock: (p1: UIViewController, p2: UIViewController, p3: boolean, p4: () => void) => void;

	presentationBlock: (p1: UIViewController, p2: UIViewController, p3: boolean, p4: () => void) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTModuleData extends NSObject implements RCTInvalidating {

	static alloc(): RCTModuleData; // inherited from NSObject

	static new(): RCTModuleData; // inherited from NSObject

	readonly exportedConstants: NSDictionary<string, any>;

	readonly hasConstantsToExport: boolean;

	readonly hasInstance: boolean;

	readonly implementsBatchDidComplete: boolean;

	readonly implementsPartialBatchDidFlush: boolean;

	instance: RCTBridgeModule;

	readonly methodQueue: NSObject;

	readonly methods: NSArray<RCTBridgeMethod>;

	readonly methodsByName: NSDictionary<string, RCTBridgeMethod>;

	readonly moduleClass: typeof NSObject;

	readonly name: string;

	requiresMainQueueSetup: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { moduleClass: typeof NSObject; bridge: RCTBridge; });

	constructor(o: { moduleClass: typeof NSObject; moduleProvider: () => RCTBridgeModule; bridge: RCTBridge; });

	constructor(o: { moduleInstance: RCTBridgeModule; bridge: RCTBridge; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gatherConstants(): void;

	initWithModuleClassBridge(moduleClass: typeof NSObject, bridge: RCTBridge): this;

	initWithModuleClassModuleProviderBridge(moduleClass: typeof NSObject, moduleProvider: () => RCTBridgeModule, bridge: RCTBridge): this;

	initWithModuleInstanceBridge(instance: RCTBridgeModule, bridge: RCTBridge): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTModuleMethod extends NSObject implements RCTBridgeMethod {

	static alloc(): RCTModuleMethod; // inherited from NSObject

	static new(): RCTModuleMethod; // inherited from NSObject

	readonly moduleClass: typeof NSObject;

	readonly selector: string;

	readonly JSMethodName: string; // inherited from RCTBridgeMethod

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly functionType: RCTFunctionType; // inherited from RCTBridgeMethod

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { exportedMethod: interop.Pointer | interop.Reference<RCTMethodInfo>; moduleClass: typeof NSObject; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithExportedMethodModuleClass(exportMethod: interop.Pointer | interop.Reference<RCTMethodInfo>, moduleClass: typeof NSObject): this;

	invokeWithBridgeModuleArguments(bridge: RCTBridge, module: any, _arguments: NSArray<any> | any[]): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTModuloAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTModuloAnimatedNode; // inherited from NSObject

	static new(): RCTModuloAnimatedNode; // inherited from NSObject
}

declare class RCTMultilineTextInputView extends RCTBaseTextInputView {

	static alloc(): RCTMultilineTextInputView; // inherited from NSObject

	static appearance(): RCTMultilineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTMultilineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTMultilineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTMultilineTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTMultilineTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTMultilineTextInputView; // inherited from UIAppearance

	static new(): RCTMultilineTextInputView; // inherited from NSObject
}

declare class RCTMultilineTextInputViewManager extends RCTBaseTextInputViewManager {

	static alloc(): RCTMultilineTextInputViewManager; // inherited from NSObject

	static new(): RCTMultilineTextInputViewManager; // inherited from NSObject
}

declare class RCTMultipartDataTask extends NSObject {

	static alloc(): RCTMultipartDataTask; // inherited from NSObject

	static new(): RCTMultipartDataTask; // inherited from NSObject

	constructor(o: { URL: NSURL; partHandler: (p1: number, p2: NSDictionary<any, any>, p3: NSData, p4: NSError, p5: boolean) => void; progressHandler: (p1: NSDictionary<any, any>, p2: number, p3: number) => void; });

	initWithURLPartHandlerProgressHandler(url: NSURL, partHandler: (p1: number, p2: NSDictionary<any, any>, p3: NSData, p4: NSError, p5: boolean) => void, progressHandler: (p1: NSDictionary<any, any>, p2: number, p3: number) => void): this;

	startTask(): void;
}

declare class RCTMultipartStreamReader extends NSObject {

	static alloc(): RCTMultipartStreamReader; // inherited from NSObject

	static new(): RCTMultipartStreamReader; // inherited from NSObject

	constructor(o: { inputStream: NSInputStream; boundary: string; });

	initWithInputStreamBoundary(stream: NSInputStream, boundary: string): this;

	readAllPartsWithCompletionCallbackProgressCallback(callback: (p1: NSDictionary<any, any>, p2: NSData, p3: boolean) => void, progressCallback: (p1: NSDictionary<any, any>, p2: number, p3: number) => void): boolean;
}

declare class RCTMultiplicationAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTMultiplicationAnimatedNode; // inherited from NSObject

	static new(): RCTMultiplicationAnimatedNode; // inherited from NSObject
}

declare class RCTNativeAnimatedModule extends RCTEventEmitter implements RCTBridgeModule, RCTEventDispatcherObserver, RCTSurfacePresenterObserver, RCTUIManagerObserver, RCTValueAnimatedNodeObserver {

	static alloc(): RCTNativeAnimatedModule; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTNativeAnimatedModule; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animatedNodeDidUpdateValue(node: RCTValueAnimatedNode, value: number): void;

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	didMountComponentsWithRootTag(rootTag: number): void;

	eventDispatcherWillDispatchEvent(event: RCTEvent): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	uiManagerDidPerformLayout(manager: RCTUIManager): void;

	uiManagerDidPerformMounting(manager: RCTUIManager): void;

	uiManagerPerformMountingWithBlock(manager: RCTUIManager, block: () => void): boolean;

	uiManagerWillPerformLayout(manager: RCTUIManager): void;

	uiManagerWillPerformMounting(manager: RCTUIManager): void;

	willMountComponentsWithRootTag(rootTag: number): void;
}

declare function RCTNativeAnimatedModuleCls(): typeof NSObject;

declare class RCTNativeAnimatedNodesManager extends NSObject {

	static alloc(): RCTNativeAnimatedNodesManager; // inherited from NSObject

	static new(): RCTNativeAnimatedNodesManager; // inherited from NSObject

	constructor(o: { bridge: RCTBridge; });

	addAnimatedEventToViewEventNameEventMapping(viewTag: number, eventName: string, eventMapping: NSDictionary<string, any>): void;

	connectAnimatedNodeToViewViewTagViewName(nodeTag: number, viewTag: number, viewName: string): void;

	connectAnimatedNodesChildTag(parentTag: number, childTag: number): void;

	createAnimatedNodeConfig(tag: number, config: NSDictionary<string, any>): void;

	disconnectAnimatedNodeFromViewViewTag(nodeTag: number, viewTag: number): void;

	disconnectAnimatedNodesChildTag(parentTag: number, childTag: number): void;

	dropAnimatedNode(tag: number): void;

	extractAnimatedNodeOffset(nodeTag: number): void;

	flattenAnimatedNodeOffset(nodeTag: number): void;

	handleAnimatedEvent(event: RCTEvent): void;

	initWithBridge(bridge: RCTBridge): this;

	isNodeManagedByFabric(tag: number): boolean;

	removeAnimatedEventFromViewEventNameAnimatedNodeTag(viewTag: number, eventName: string, animatedNodeTag: number): void;

	restoreDefaultValues(nodeTag: number): void;

	setAnimatedNodeOffsetOffset(nodeTag: number, offset: number): void;

	setAnimatedNodeValueValue(nodeTag: number, value: number): void;

	startAnimatingNodeNodeTagConfigEndCallback(animationId: number, nodeTag: number, config: NSDictionary<string, any>, callBack: (p1: NSArray<any>) => void): void;

	startListeningToAnimatedNodeValueValueObserver(tag: number, valueObserver: RCTValueAnimatedNodeObserver): void;

	stepAnimations(displaylink: CADisplayLink): void;

	stopAnimation(animationId: number): void;

	stopAnimationLoop(): void;

	stopListeningToAnimatedNodeValue(tag: number): void;

	updateAnimations(): void;
}

declare function RCTNetworkClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

declare class RCTNetworkTask extends NSObject implements RCTURLRequestDelegate {

	static alloc(): RCTNetworkTask; // inherited from NSObject

	static new(): RCTNetworkTask; // inherited from NSObject

	completionBlock: (p1: NSURLResponse, p2: NSData, p3: NSError) => void;

	downloadProgressBlock: (p1: number, p2: number) => void;

	incrementalDataBlock: (p1: NSData, p2: number, p3: number) => void;

	readonly request: NSURLRequest;

	readonly requestID: number;

	readonly requestToken: any;

	readonly response: NSURLResponse;

	responseBlock: (p1: NSURLResponse) => void;

	readonly status: RCTNetworkTaskStatus;

	uploadProgressBlock: (p1: number, p2: number) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: NSURLRequest; handler: RCTURLRequestHandler; callbackQueue: NSObject; });

	URLRequestDidCompleteWithError(requestToken: any, error: NSError): void;

	URLRequestDidReceiveData(requestToken: any, data: NSData): void;

	URLRequestDidReceiveResponse(requestToken: any, response: NSURLResponse): void;

	URLRequestDidSendDataWithProgress(requestToken: any, bytesSent: number): void;

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRequestHandlerCallbackQueue(request: NSURLRequest, handler: RCTURLRequestHandler, callbackQueue: NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	start(): void;
}

declare const enum RCTNetworkTaskStatus {

	Pending = 0,

	InProgress = 1,

	Finished = 2
}

declare class RCTNetworking extends RCTEventEmitter {

	static alloc(): RCTNetworking; // inherited from NSObject

	static new(): RCTNetworking; // inherited from NSObject

	constructor(o: { handlersProvider: () => NSArray<RCTURLRequestHandler>; });

	addRequestHandler(handler: RCTNetworkingRequestHandler): void;

	addResponseHandler(handler: RCTNetworkingResponseHandler): void;

	canHandleRequest(request: NSURLRequest): boolean;

	initWithHandlersProvider(getHandlers: () => NSArray<RCTURLRequestHandler>): this;

	networkTaskWithRequestCompletionBlock(request: NSURLRequest, completionBlock: (p1: NSURLResponse, p2: NSData, p3: NSError) => void): RCTNetworkTask;

	removeRequestHandler(handler: RCTNetworkingRequestHandler): void;

	removeResponseHandler(handler: RCTNetworkingResponseHandler): void;
}

declare function RCTNetworkingCls(): typeof NSObject;

declare var RCTNetworkingPHUploadHackScheme: string;

interface RCTNetworkingRequestHandler extends NSObjectProtocol {

	canHandleNetworkingRequest(data: NSDictionary<any, any>): boolean;

	handleNetworkingRequest(data: NSDictionary<any, any>): NSDictionary<any, any>;
}
declare var RCTNetworkingRequestHandler: {

	prototype: RCTNetworkingRequestHandler;
};

interface RCTNetworkingResponseHandler extends NSObjectProtocol {

	canHandleNetworkingResponse(responseType: string): boolean;

	handleNetworkingResponseData(response: NSURLResponse, data: NSData): any;
}
declare var RCTNetworkingResponseHandler: {

	prototype: RCTNetworkingResponseHandler;
};

declare function RCTNormalizeInputEventName(eventName: string): string;

declare const enum RCTNullability {

	NullabilityUnspecified = 0,

	Nullable = 1,

	Nonnullable = 2
}

declare function RCTOverrideAppearancePreference(p1: string): void;

declare const enum RCTPLTag {

	ScriptDownload = 0,

	ScriptExecution = 1,

	RAMBundleLoad = 2,

	RAMStartupCodeSize = 3,

	RAMStartupNativeRequires = 4,

	RAMStartupNativeRequiresCount = 5,

	RAMNativeRequires = 6,

	RAMNativeRequiresCount = 7,

	NativeModuleInit = 8,

	NativeModuleMainThread = 9,

	NativeModulePrepareConfig = 10,

	NativeModuleMainThreadUsesCount = 11,

	NativeModuleSetup = 12,

	TurboModuleSetup = 13,

	JSCWrapperOpenLibrary = 14,

	BridgeStartup = 15,

	TTI = 16,

	BundleSize = 17,

	Size = 18
}

interface RCTPackagerClientMethod extends NSObjectProtocol {

	handleNotification(params: NSDictionary<string, any>): void;

	handleRequestWithResponder(params: NSDictionary<string, any>, responder: RCTPackagerClientResponder): void;

	methodQueue?(): NSObject;
}
declare var RCTPackagerClientMethod: {

	prototype: RCTPackagerClientMethod;
};

declare class RCTPackagerClientResponder extends NSObject {

	static alloc(): RCTPackagerClientResponder; // inherited from NSObject

	static new(): RCTPackagerClientResponder; // inherited from NSObject

	constructor(o: { id: any; socket: RCTReconnectingWebSocket; });

	initWithIdSocket(msgId: any, socket: RCTReconnectingWebSocket): this;

	respondWithError(error: any): void;

	respondWithResult(result: any): void;
}

declare class RCTPackagerConnection extends NSObject {

	static alloc(): RCTPackagerConnection; // inherited from NSObject

	static new(): RCTPackagerConnection; // inherited from NSObject

	static sharedPackagerConnection(): RCTPackagerConnection;

	addConnectedHandlerQueue(handler: () => void, queue: NSObject): number;

	addHandlerForMethod(handler: RCTPackagerClientMethod, method: string): void;

	addNotificationHandlerQueueForMethod(handler: (p1: NSDictionary<string, any>) => void, queue: NSObject, method: string): number;

	addRequestHandlerQueueForMethod(handler: (p1: NSDictionary<string, any>, p2: RCTPackagerClientResponder) => void, queue: NSObject, method: string): number;

	removeHandler(token: number): void;

	stop(): void;
}

declare function RCTParseArgumentIdentifier(input: interop.Pointer | interop.Reference<string>, string: interop.Pointer | interop.Reference<string>): boolean;

declare function RCTParseMethodSignature(input: string | interop.Pointer | interop.Reference<any>, _arguments: interop.Pointer | interop.Reference<NSArray<RCTMethodArgument>>): string;

declare function RCTParseSelectorIdentifier(input: interop.Pointer | interop.Reference<string>, string: interop.Pointer | interop.Reference<string>): boolean;

declare function RCTParseType(input: interop.Pointer | interop.Reference<string>): string;

declare class RCTParserUtils extends NSObject {

	static alloc(): RCTParserUtils; // inherited from NSObject

	static new(): RCTParserUtils; // inherited from NSObject
}

declare function RCTPathCreateWithRoundedRect(bounds: CGRect, cornerInsets: RCTCornerInsets, transform: interop.Pointer | interop.Reference<CGAffineTransform>): interop.Unmanaged<any>;

declare function RCTPerfMonitorCls(): typeof NSObject;

declare function RCTPerformBlockWithAssertFunction(block: () => void, assertFunction: (p1: string, p2: string, p3: number, p4: string, p5: string) => void): void;

declare function RCTPerformBlockWithLogFunction(block: () => void, logFunction: (p1: RCTLogLevel, p2: RCTLogSource, p3: string, p4: number, p5: string) => void): void;

declare function RCTPerformBlockWithLogPrefix(block: () => void, prefix: string): void;

declare class RCTPerformanceLogger extends NSObject {

	static alloc(): RCTPerformanceLogger; // inherited from NSObject

	static new(): RCTPerformanceLogger; // inherited from NSObject

	addValueForTag(value: number, tag: RCTPLTag): void;

	appendStartForTag(tag: RCTPLTag): void;

	appendStopForTag(tag: RCTPLTag): void;

	durationForTag(tag: RCTPLTag): number;

	labelsForTags(): NSArray<string>;

	markStartForTag(tag: RCTPLTag): void;

	markStopForTag(tag: RCTPLTag): void;

	setValueForTag(value: number, tag: RCTPLTag): void;

	valueForTag(tag: RCTPLTag): number;

	valuesForTags(): NSArray<number>;
}

declare class RCTPicker extends UIPickerView {

	static alloc(): RCTPicker; // inherited from NSObject

	static appearance(): RCTPicker; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTPicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTPicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTPicker; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTPicker; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTPicker; // inherited from UIAppearance

	static new(): RCTPicker; // inherited from NSObject

	color: UIColor;

	font: UIFont;

	items: NSArray<NSDictionary<any, any>>;

	onChange: (p1: NSDictionary<any, any>) => void;

	selectedIndex: number;

	textAlign: NSTextAlignment;
}

declare class RCTPickerManager extends RCTViewManager {

	static alloc(): RCTPickerManager; // inherited from NSObject

	static new(): RCTPickerManager; // inherited from NSObject
}

declare class RCTPlatform extends NSObject implements RCTBridgeModule {

	static alloc(): RCTPlatform; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTPlatform; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTPlatformCls(): typeof NSObject;

declare const enum RCTPointerEvents {

	Unspecified = 0,

	None = 1,

	BoxNone = 2,

	BoxOnly = 3
}

declare function RCTPresentedViewController(): UIViewController;

declare function RCTProfileBeginAsyncEvent(tag: number, name: string, args: NSDictionary<string, string>): number;

interface RCTProfileCallbacks {
	start: interop.FunctionReference<() => string>;
	stop: interop.FunctionReference<() => void>;
	begin_section: interop.FunctionReference<(p1: number, p2: string, p3: number, p4: interop.Pointer | interop.Reference<systrace_arg_t>) => void>;
	end_section: interop.FunctionReference<(p1: number, p2: number, p3: interop.Pointer | interop.Reference<systrace_arg_t>) => void>;
	begin_async_section: interop.FunctionReference<(p1: number, p2: string, p3: number, p4: number, p5: interop.Pointer | interop.Reference<systrace_arg_t>) => void>;
	end_async_section: interop.FunctionReference<(p1: number, p2: string, p3: number, p4: number, p5: interop.Pointer | interop.Reference<systrace_arg_t>) => void>;
	instant_section: interop.FunctionReference<(p1: number, p2: string, p3: number) => void>;
	begin_async_flow: interop.FunctionReference<(p1: number, p2: string, p3: number) => void>;
	end_async_flow: interop.FunctionReference<(p1: number, p2: string, p3: number) => void>;
}
declare var RCTProfileCallbacks: interop.StructType<RCTProfileCallbacks>;

declare var RCTProfileDidEndProfiling: string;

declare var RCTProfileDidStartProfiling: string;

declare function RCTProfileEnd(p1: RCTBridge, p2: (p1: string) => void): void;

declare function RCTProfileEndAsyncEvent(tag: number, category: string, cookie: number, name: string, threadName: string): void;

declare function RCTProfileGetQueue(): NSObject;

declare function RCTProfileHideControls(): void;

declare function RCTProfileHookInstance(instance: any): void;

declare function RCTProfileHookModules(p1: RCTBridge): void;

declare function RCTProfileImmediateEvent(tag: number, name: string, time: number, scope: number): void;

declare function RCTProfileInit(p1: RCTBridge): void;

declare function RCTProfileIsProfiling(): boolean;

declare function RCTProfileRegisterCallbacks(p1: interop.Pointer | interop.Reference<RCTProfileCallbacks>): void;

declare function RCTProfileSendResult(bridge: RCTBridge, route: string, profileData: NSData): void;

declare function RCTProfileShowControls(): void;

declare var RCTProfileTagAlways: number;

declare function RCTProfileUnhookModules(p1: RCTBridge): void;

declare class RCTProgressViewManager extends RCTViewManager {

	static alloc(): RCTProgressViewManager; // inherited from NSObject

	static new(): RCTProgressViewManager; // inherited from NSObject
}

declare class RCTPropsAnimatedNode extends RCTAnimatedNode {

	static alloc(): RCTPropsAnimatedNode; // inherited from NSObject

	static new(): RCTPropsAnimatedNode; // inherited from NSObject

	connectToViewViewNameBridge(viewTag: number, viewName: string, bridge: RCTBridge): void;

	disconnectFromView(viewTag: number): void;

	restoreDefaultValues(): void;
}

declare function RCTRadiansToDegrees(radians: number): number;

declare class RCTRawTextShadowView extends RCTShadowView {

	static alloc(): RCTRawTextShadowView; // inherited from NSObject

	static new(): RCTRawTextShadowView; // inherited from NSObject

	text: string;
}

declare class RCTRawTextViewManager extends RCTViewManager {

	static alloc(): RCTRawTextViewManager; // inherited from NSObject

	static new(): RCTRawTextViewManager; // inherited from NSObject
}

declare function RCTReactDisplayTypeFromYogaDisplayType(displayType: YGDisplay): RCTDisplayType;

declare function RCTReadChar(input: interop.Pointer | interop.Reference<string>, c: number): boolean;

declare function RCTReadString(input: interop.Pointer | interop.Reference<string>, string: string | interop.Pointer | interop.Reference<any>): boolean;

declare class RCTReconnectingWebSocket extends NSObject {

	static alloc(): RCTReconnectingWebSocket; // inherited from NSObject

	static new(): RCTReconnectingWebSocket; // inherited from NSObject

	delegate: RCTReconnectingWebSocketDelegate;

	delegateDispatchQueue: NSObject;

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; queue: NSObject; });

	initWithURL(url: NSURL): this;

	initWithURLQueue(url: NSURL, queue: NSObject): this;

	send(data: any): void;

	start(): void;

	stop(): void;
}

interface RCTReconnectingWebSocketDelegate {

	reconnectingWebSocketDidClose(webSocket: RCTReconnectingWebSocket): void;

	reconnectingWebSocketDidOpen(webSocket: RCTReconnectingWebSocket): void;

	reconnectingWebSocketDidReceiveMessage(webSocket: RCTReconnectingWebSocket, message: any): void;
}
declare var RCTReconnectingWebSocketDelegate: {

	prototype: RCTReconnectingWebSocketDelegate;
};

declare class RCTRedBox extends NSObject implements RCTBridgeModule {

	static alloc(): RCTRedBox; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTRedBox; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	overrideBundleURL: NSURL;

	overrideReloadAction: () => void;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addCustomButtonOnPressHandler(title: string, handler: () => void): void;

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	dismiss(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerErrorCustomizer(errorCustomizer: RCTErrorCustomizer): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showError(error: NSError): void;

	showErrorMessage(message: string): void;

	showErrorMessageWithDetails(message: string, details: string): void;

	showErrorMessageWithParsedStack(message: string, stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[]): void;

	showErrorMessageWithParsedStackErrorCookie(message: string, stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[], errorCookie: number): void;

	showErrorMessageWithRawStack(message: string, rawStack: string): void;

	showErrorMessageWithRawStackErrorCookie(message: string, rawStack: string, errorCookie: number): void;

	showErrorMessageWithStack(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): void;

	showErrorMessageWithStackErrorCookie(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], errorCookie: number): void;

	updateErrorMessageWithParsedStack(message: string, stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[]): void;

	updateErrorMessageWithParsedStackErrorCookie(message: string, stack: NSArray<RCTJSStackFrame> | RCTJSStackFrame[], errorCookie: number): void;

	updateErrorMessageWithStack(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): void;

	updateErrorMessageWithStackErrorCookie(message: string, stack: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], errorCookie: number): void;
}

declare function RCTRedBoxCls(): typeof NSObject;

interface RCTRedBoxExtraDataActionDelegate extends NSObjectProtocol {

	reload(): void;
}
declare var RCTRedBoxExtraDataActionDelegate: {

	prototype: RCTRedBoxExtraDataActionDelegate;
};

declare class RCTRedBoxExtraDataViewController extends UIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): RCTRedBoxExtraDataViewController; // inherited from NSObject

	static new(): RCTRedBoxExtraDataViewController; // inherited from NSObject

	actionDelegate: RCTRedBoxExtraDataActionDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addExtraDataForIdentifier(data: NSDictionary<any, any>, identifier: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare function RCTRedBoxGetEnabled(): boolean;

declare function RCTRedBoxSetEnabled(enabled: boolean): void;

declare class RCTRefreshControl extends UIRefreshControl implements RCTCustomRefreshContolProtocol {

	static alloc(): RCTRefreshControl; // inherited from NSObject

	static appearance(): RCTRefreshControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTRefreshControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTRefreshControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRefreshControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTRefreshControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRefreshControl; // inherited from UIAppearance

	static new(): RCTRefreshControl; // inherited from NSObject

	title: string;

	onRefresh: (p1: NSDictionary<any, any>) => void; // inherited from RCTCustomRefreshContolProtocol

	readonly refreshing: boolean; // inherited from RCTCustomRefreshContolProtocol
}

declare class RCTRefreshControlManager extends RCTViewManager {

	static alloc(): RCTRefreshControlManager; // inherited from NSObject

	static new(): RCTRefreshControlManager; // inherited from NSObject
}

interface RCTRefreshableProtocol {

	setRefreshing(refreshing: boolean): void;
}
declare var RCTRefreshableProtocol: {

	prototype: RCTRefreshableProtocol;
};

declare function RCTRegisterModule(p1: typeof NSObject): void;

declare function RCTRegisterReloadCommandListener(listener: RCTReloadListener): void;

declare function RCTReloadCommandSetBundleURL(URL: NSURL): void;

interface RCTReloadListener {

	didReceiveReloadCommand(): void;
}
declare var RCTReloadListener: {

	prototype: RCTReloadListener;
};

declare const enum RCTResizeMode {

	Cover = 2,

	Contain = 1,

	Stretch = 0,

	Center = 4,

	Repeat = -1
}

declare class RCTRootContentView extends RCTView implements RCTInvalidating {

	static alloc(): RCTRootContentView; // inherited from NSObject

	static appearance(): RCTRootContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTRootContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTRootContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRootContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTRootContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRootContentView; // inherited from UIAppearance

	static new(): RCTRootContentView; // inherited from NSObject

	readonly availableSize: CGSize;

	readonly bridge: RCTBridge;

	readonly contentHasAppeared: boolean;

	passThroughTouches: boolean;

	sizeFlexibility: RCTRootViewSizeFlexibility;

	readonly touchHandler: RCTTouchHandler;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; bridge: RCTBridge; reactTag: number; sizeFlexiblity: RCTRootViewSizeFlexibility; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFrameBridgeReactTagSizeFlexiblity(frame: CGRect, bridge: RCTBridge, reactTag: number, sizeFlexibility: RCTRootViewSizeFlexibility): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTRootShadowView extends RCTShadowView {

	static alloc(): RCTRootShadowView; // inherited from NSObject

	static new(): RCTRootShadowView; // inherited from NSObject

	availableSize: CGSize;

	baseDirection: YGDirection;

	minimumSize: CGSize;

	layoutWithAffectedShadowViews(affectedShadowViews: NSHashTable<RCTShadowView>): void;
}

declare class RCTRootView extends UIView {

	static alloc(): RCTRootView; // inherited from NSObject

	static appearance(): RCTRootView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRootView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTRootView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTRootView; // inherited from UIAppearance

	static new(): RCTRootView; // inherited from NSObject

	appProperties: NSDictionary<any, any>;

	readonly bridge: RCTBridge;

	readonly contentView: UIView;

	delegate: RCTRootViewDelegate;

	intrinsicContentSize: CGSize;

	readonly intrinsicSize: CGSize;

	loadingView: UIView;

	loadingViewFadeDelay: number;

	loadingViewFadeDuration: number;

	minimumSize: CGSize;

	readonly moduleName: string;

	passThroughTouches: boolean;

	reactViewController: UIViewController;

	sizeFlexibility: RCTRootViewSizeFlexibility;

	constructor(o: { bridge: RCTBridge; moduleName: string; initialProperties: NSDictionary<any, any>; });

	constructor(o: { bundleURL: NSURL; moduleName: string; initialProperties: NSDictionary<any, any>; launchOptions: NSDictionary<any, any>; });

	cancelTouches(): void;

	contentViewInvalidated(): void;

	initWithBridgeModuleNameInitialProperties(bridge: RCTBridge, moduleName: string, initialProperties: NSDictionary<any, any>): this;

	initWithBundleURLModuleNameInitialPropertiesLaunchOptions(bundleURL: NSURL, moduleName: string, initialProperties: NSDictionary<any, any>, launchOptions: NSDictionary<any, any>): this;
}

interface RCTRootViewDelegate extends NSObjectProtocol {

	rootViewDidChangeIntrinsicSize(rootView: RCTRootView): void;
}
declare var RCTRootViewDelegate: {

	prototype: RCTRootViewDelegate;
};

declare const enum RCTRootViewSizeFlexibility {

	None = 0,

	Width = 1,

	Height = 2,

	WidthAndHeight = 3
}

declare function RCTRoundPixelValue(value: number): number;

declare function RCTRunningInAppExtension(): boolean;

declare function RCTRunningInTestEnvironment(): boolean;

declare var RCTSRHTTPResponseErrorKey: string;

declare const enum RCTSRReadyState {

	R_CONNECTING = 0,

	R_OPEN = 1,

	R_CLOSING = 2,

	R_CLOSED = 3
}

declare const enum RCTSRStatusCode {

	CodeNormal = 1000,

	CodeGoingAway = 1001,

	CodeProtocolError = 1002,

	CodeUnhandledType = 1003,

	NoStatusReceived = 1005,

	CodeInvalidUTF8 = 1007,

	CodePolicyViolated = 1008,

	CodeMessageTooBig = 1009
}

declare class RCTSRWebSocket extends NSObject implements NSStreamDelegate {

	static alloc(): RCTSRWebSocket; // inherited from NSObject

	static new(): RCTSRWebSocket; // inherited from NSObject

	delegate: RCTSRWebSocketDelegate;

	readonly protocol: string;

	readonly readyState: RCTSRReadyState;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; protocols: NSArray<string> | string[]; });

	constructor(o: { URLRequest: NSURLRequest; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<string> | string[]; });

	class(): typeof NSObject;

	close(): void;

	closeWithCodeReason(code: number, reason: string): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(url: NSURL): this;

	initWithURLProtocols(url: NSURL, protocols: NSArray<string> | string[]): this;

	initWithURLRequest(request: NSURLRequest): this;

	initWithURLRequestProtocols(request: NSURLRequest, protocols: NSArray<string> | string[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): this;

	send(data: any): void;

	sendPing(data: NSData): void;

	setDelegateDispatchQueue(queue: NSObject): void;

	setDelegateOperationQueue(queue: NSOperationQueue): void;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	unscheduleFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;
}

interface RCTSRWebSocketDelegate extends NSObjectProtocol {

	webSocketDidCloseWithCodeReasonWasClean?(webSocket: RCTSRWebSocket, code: number, reason: string, wasClean: boolean): void;

	webSocketDidFailWithError?(webSocket: RCTSRWebSocket, error: NSError): void;

	webSocketDidOpen?(webSocket: RCTSRWebSocket): void;

	webSocketDidReceiveMessage(webSocket: RCTSRWebSocket, message: any): void;

	webSocketDidReceivePong?(webSocket: RCTSRWebSocket, pongPayload: NSData): void;
}
declare var RCTSRWebSocketDelegate: {

	prototype: RCTSRWebSocketDelegate;
};

declare var RCTSRWebSocketErrorDomain: string;

declare class RCTSafeAreaShadowView extends RCTShadowView {

	static alloc(): RCTSafeAreaShadowView; // inherited from NSObject

	static new(): RCTSafeAreaShadowView; // inherited from NSObject
}

declare class RCTSafeAreaView extends RCTView {

	static alloc(): RCTSafeAreaView; // inherited from NSObject

	static appearance(): RCTSafeAreaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSafeAreaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSafeAreaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSafeAreaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSafeAreaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSafeAreaView; // inherited from UIAppearance

	static new(): RCTSafeAreaView; // inherited from NSObject

	emulateUnlessSupported: boolean;

	constructor(o: { bridge: RCTBridge; });

	initWithBridge(bridge: RCTBridge): this;
}

declare class RCTSafeAreaViewLocalData extends NSObject {

	static alloc(): RCTSafeAreaViewLocalData; // inherited from NSObject

	static new(): RCTSafeAreaViewLocalData; // inherited from NSObject

	readonly insets: UIEdgeInsets;

	constructor(o: { insets: UIEdgeInsets; });

	initWithInsets(insets: UIEdgeInsets): this;
}

declare class RCTSafeAreaViewManager extends RCTViewManager {

	static alloc(): RCTSafeAreaViewManager; // inherited from NSObject

	static new(): RCTSafeAreaViewManager; // inherited from NSObject
}

declare function RCTSanitizeNaNValue(value: number, property: string): number;

declare function RCTScreenScale(): number;

declare function RCTScreenSize(): CGSize;

declare class RCTScrollContentShadowView extends RCTShadowView {

	static alloc(): RCTScrollContentShadowView; // inherited from NSObject

	static new(): RCTScrollContentShadowView; // inherited from NSObject
}

declare class RCTScrollContentView extends RCTView {

	static alloc(): RCTScrollContentView; // inherited from NSObject

	static appearance(): RCTScrollContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTScrollContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTScrollContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTScrollContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTScrollContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTScrollContentView; // inherited from UIAppearance

	static new(): RCTScrollContentView; // inherited from NSObject
}

declare class RCTScrollContentViewManager extends RCTViewManager {

	static alloc(): RCTScrollContentViewManager; // inherited from NSObject

	static new(): RCTScrollContentViewManager; // inherited from NSObject
}

declare class RCTScrollEvent extends NSObject implements RCTEvent {

	static alloc(): RCTScrollEvent; // inherited from NSObject

	static moduleDotMethod(): string;

	static new(): RCTScrollEvent; // inherited from NSObject

	readonly coalescingKey: number; // inherited from RCTEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventName: string; // inherited from RCTEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly viewTag: number; // inherited from RCTEvent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { eventName: string; reactTag: number; scrollViewContentOffset: CGPoint; scrollViewContentInset: UIEdgeInsets; scrollViewContentSize: CGSize; scrollViewFrame: CGRect; scrollViewZoomScale: number; userData: NSDictionary<any, any>; coalescingKey: number; });

	arguments(): NSArray<any>;

	canCoalesce(): boolean;

	class(): typeof NSObject;

	coalesceWithEvent(newEvent: RCTEvent): RCTEvent;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithEventNameReactTagScrollViewContentOffsetScrollViewContentInsetScrollViewContentSizeScrollViewFrameScrollViewZoomScaleUserDataCoalescingKey(eventName: string, reactTag: number, scrollViewContentOffset: CGPoint, scrollViewContentInset: UIEdgeInsets, scrollViewContentSize: CGSize, scrollViewFrame: CGRect, scrollViewZoomScale: number, userData: NSDictionary<any, any>, coalescingKey: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTScrollView extends RCTView implements RCTAutoInsetsProtocol, RCTScrollableProtocol, UIScrollViewDelegate {

	static alloc(): RCTScrollView; // inherited from NSObject

	static appearance(): RCTScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTScrollView; // inherited from UIAppearance

	static new(): RCTScrollView; // inherited from NSObject

	DEPRECATED_sendUpdatedChildFrames: boolean;

	centerContent: boolean;

	contentSize: CGSize;

	readonly contentView: UIView;

	disableIntervalMomentum: boolean;

	inverted: boolean;

	maintainVisibleContentPosition: NSDictionary<any, any>;

	onMomentumScrollBegin: (p1: NSDictionary<any, any>) => void;

	onMomentumScrollEnd: (p1: NSDictionary<any, any>) => void;

	onScroll: (p1: NSDictionary<any, any>) => void;

	onScrollBeginDrag: (p1: NSDictionary<any, any>) => void;

	onScrollEndDrag: (p1: NSDictionary<any, any>) => void;

	onScrollToTop: (p1: NSDictionary<any, any>) => void;

	scrollEventThrottle: number;

	scrollToOverflowEnabled: boolean;

	readonly scrollView: UIScrollView;

	snapToAlignment: string;

	snapToEnd: boolean;

	snapToInterval: number;

	snapToOffsets: NSArray<number>;

	snapToStart: boolean;

	automaticallyAdjustContentInsets: boolean; // inherited from RCTAutoInsetsProtocol

	contentInset: UIEdgeInsets; // inherited from RCTAutoInsetsProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { eventDispatcher: RCTEventDispatcher; });

	addScrollListener(scrollListener: NSObject): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithEventDispatcher(eventDispatcher: RCTEventDispatcher): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshContentInset(): void;

	removeScrollListener(scrollListener: NSObject): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToEnd(animated: boolean): void;

	scrollToOffset(offset: CGPoint): void;

	scrollToOffsetAnimated(offset: CGPoint, animated: boolean): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	updateContentOffsetIfNeeded(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;

	zoomToRectAnimated(rect: CGRect, animated: boolean): void;
}

declare class RCTScrollViewManager extends RCTViewManager {

	static alloc(): RCTScrollViewManager; // inherited from NSObject

	static new(): RCTScrollViewManager; // inherited from NSObject
}

interface RCTScrollableProtocol {

	contentSize: CGSize;

	addScrollListener(scrollListener: NSObject): void;

	removeScrollListener(scrollListener: NSObject): void;

	scrollToEnd(animated: boolean): void;

	scrollToOffset(offset: CGPoint): void;

	scrollToOffsetAnimated(offset: CGPoint, animated: boolean): void;

	zoomToRectAnimated(rect: CGRect, animated: boolean): void;
}
declare var RCTScrollableProtocol: {

	prototype: RCTScrollableProtocol;
};

declare class RCTSegmentedControl extends UISegmentedControl {

	static alloc(): RCTSegmentedControl; // inherited from NSObject

	static appearance(): RCTSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSegmentedControl; // inherited from UIAppearance

	static new(): RCTSegmentedControl; // inherited from NSObject

	onChange: (p1: NSDictionary<any, any>) => void;

	selectedIndex: number;

	values: NSArray<string>;
}

declare class RCTSegmentedControlManager extends RCTViewManager {

	static alloc(): RCTSegmentedControlManager; // inherited from NSObject

	static new(): RCTSegmentedControlManager; // inherited from NSObject
}

declare function RCTSetAssertFunction(assertFunction: (p1: string, p2: string, p3: number, p4: string, p5: string) => void): void;

declare function RCTSetDefaultFontHandler(handler: (p1: number, p2: string) => UIFont): void;

declare function RCTSetFatalExceptionHandler(fatalExceptionHandler: (p1: NSException) => void): void;

declare function RCTSetFatalHandler(fatalHandler: (p1: NSError) => void): void;

declare function RCTSetLogFunction(logFunction: (p1: RCTLogLevel, p2: RCTLogSource, p3: string, p4: number, p5: string) => void): void;

declare function RCTSetLogThreshold(threshold: RCTLogLevel): void;

declare function RCTSettingsClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

declare class RCTSettingsManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTSettingsManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTSettingsManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { userDefaults: NSUserDefaults; });

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	initWithUserDefaults(defaults: NSUserDefaults): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTSettingsManagerCls(): typeof NSObject;

declare class RCTShadowView extends NSObject implements RCTComponent {

	static alloc(): RCTShadowView; // inherited from NSObject

	static new(): RCTShadowView; // inherited from NSObject

	static yogaConfig(): interop.Pointer | interop.Reference<any>;

	alignContent: YGAlign;

	alignItems: YGAlign;

	alignSelf: YGAlign;

	aspectRatio: number;

	readonly availableSize: CGSize;

	readonly borderAsInsets: UIEdgeInsets;

	borderBottomWidth: number;

	borderEndWidth: number;

	borderLeftWidth: number;

	borderRightWidth: number;

	borderStartWidth: number;

	borderTopWidth: number;

	borderWidth: number;

	bottom: YGValue;

	readonly compoundInsets: UIEdgeInsets;

	readonly contentFrame: CGRect;

	direction: YGDirection;

	display: YGDisplay;

	end: YGValue;

	flex: number;

	flexBasis: YGValue;

	flexDirection: YGFlexDirection;

	flexGrow: number;

	flexShrink: number;

	flexWrap: YGWrap;

	height: YGValue;

	intrinsicContentSize: CGSize;

	justifyContent: YGJustify;

	layoutMetrics: RCTLayoutMetrics;

	left: YGValue;

	margin: YGValue;

	marginBottom: YGValue;

	marginEnd: YGValue;

	marginHorizontal: YGValue;

	marginLeft: YGValue;

	marginRight: YGValue;

	marginStart: YGValue;

	marginTop: YGValue;

	marginVertical: YGValue;

	maxHeight: YGValue;

	maxWidth: YGValue;

	minHeight: YGValue;

	minWidth: YGValue;

	newView: boolean;

	onLayout: (p1: NSDictionary<any, any>) => void;

	overflow: YGOverflow;

	padding: YGValue;

	readonly paddingAsInsets: UIEdgeInsets;

	paddingBottom: YGValue;

	paddingEnd: YGValue;

	paddingHorizontal: YGValue;

	paddingLeft: YGValue;

	paddingRight: YGValue;

	paddingStart: YGValue;

	paddingTop: YGValue;

	paddingVertical: YGValue;

	position: YGPositionType;

	right: YGValue;

	rootView: RCTRootShadowView;

	size: CGSize;

	start: YGValue;

	readonly superview: RCTShadowView;

	top: YGValue;

	viewName: string;

	width: YGValue;

	readonly yogaNode: interop.Pointer | interop.Reference<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	reactTag: number; // inherited from RCTComponent

	rootTag: number; // inherited from RCTComponent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canHaveSubviews(): boolean;

	class(): typeof NSObject;

	clearLayout(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didSetProps(changedProps: NSArray<string> | string[]): void;

	didUpdateReactSubviews(): void;

	dirtyLayout(): void;

	insertReactSubviewAtIndex(subview: RCTShadowView, atIndex: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReactRootView(): boolean;

	isYogaLeafNode(): boolean;

	layoutSubviewsWithContext(layoutContext: RCTLayoutContext): void;

	layoutWithMetricsLayoutContext(layoutMetrics: RCTLayoutMetrics, layoutContext: RCTLayoutContext): void;

	layoutWithMinimumSizeMaximumSizeLayoutDirectionLayoutContext(minimumSize: CGSize, maximumSize: CGSize, layoutDirection: UIUserInterfaceLayoutDirection, layoutContext: RCTLayoutContext): void;

	measureLayoutRelativeToAncestor(ancestor: RCTShadowView): CGRect;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reactSubviews(): NSArray<RCTComponent>;

	reactSuperview(): RCTShadowView;

	reactTagAtPoint(point: CGPoint): number;

	removeReactSubview(subview: RCTShadowView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setLocalData(localData: NSObject): void;

	sizeThatFitsMinimumSizeMaximumSize(minimumSize: CGSize, maximumSize: CGSize): CGSize;

	viewIsDescendantOf(ancestor: RCTShadowView): boolean;
}

declare function RCTSharedApplication(): UIApplication;

declare var RCTShowDevMenuNotification: string;

declare var RCTSingleFrameInterval: number;

declare class RCTSinglelineTextInputView extends RCTBaseTextInputView {

	static alloc(): RCTSinglelineTextInputView; // inherited from NSObject

	static appearance(): RCTSinglelineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSinglelineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSinglelineTextInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSinglelineTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSinglelineTextInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSinglelineTextInputView; // inherited from UIAppearance

	static new(): RCTSinglelineTextInputView; // inherited from NSObject
}

declare class RCTSinglelineTextInputViewManager extends RCTBaseTextInputViewManager {

	static alloc(): RCTSinglelineTextInputViewManager; // inherited from NSObject

	static new(): RCTSinglelineTextInputViewManager; // inherited from NSObject
}

declare function RCTSizeInPixels(pointSize: CGSize, scale: number): CGSize;

declare function RCTSkipWhitespace(input: interop.Pointer | interop.Reference<string>): void;

declare class RCTSlider extends UISlider {

	static alloc(): RCTSlider; // inherited from NSObject

	static appearance(): RCTSlider; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSlider; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSlider; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSlider; // inherited from UIAppearance

	static new(): RCTSlider; // inherited from NSObject

	lastValue: number;

	maximumTrackImage: UIImage;

	minimumTrackImage: UIImage;

	onSlidingComplete: (p1: NSDictionary<any, any>) => void;

	onValueChange: (p1: NSDictionary<any, any>) => void;

	step: number;

	thumbImage: UIImage;

	trackImage: UIImage;
}

declare class RCTSliderManager extends RCTViewManager {

	static alloc(): RCTSliderManager; // inherited from NSObject

	static new(): RCTSliderManager; // inherited from NSObject
}

declare class RCTSource extends NSObject {

	static alloc(): RCTSource; // inherited from NSObject

	static new(): RCTSource; // inherited from NSObject

	readonly data: NSData;

	readonly filesChangedCount: number;

	readonly length: number;

	readonly url: NSURL;
}

declare class RCTSourceCode extends NSObject implements RCTBridgeModule {

	static alloc(): RCTSourceCode; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTSourceCode; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTSourceCodeCls(): typeof NSObject;

declare const RCTSourceFilesChangedCountNotBuiltByBundler: number;

declare const RCTSourceFilesChangedCountRebuiltFromScratch: number;

declare class RCTSpringAnimation extends NSObject implements RCTAnimationDriver {

	static alloc(): RCTSpringAnimation; // inherited from NSObject

	static new(): RCTSpringAnimation; // inherited from NSObject

	readonly animationHasBegun: boolean; // inherited from RCTAnimationDriver

	readonly animationHasFinished: boolean; // inherited from RCTAnimationDriver

	readonly animationId: number; // inherited from RCTAnimationDriver

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly valueNode: RCTValueAnimatedNode; // inherited from RCTAnimationDriver

	readonly  // inherited from NSObjectProtocol

	constructor(o: { id: number; config: NSDictionary<any, any>; forNode: RCTValueAnimatedNode; callBack: (p1: NSArray<any>) => void; }); // inherited from RCTAnimationDriver

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIdConfigForNodeCallBack(animationId: number, config: NSDictionary<any, any>, valueNode: RCTValueAnimatedNode, callback: (p1: NSArray<any>) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetAnimationConfig(config: NSDictionary<any, any>): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimation(): void;

	stepAnimationWithTime(currentTime: number): void;

	stopAnimation(): void;
}

declare class RCTStatusBarManager extends RCTEventEmitter {

	static alloc(): RCTStatusBarManager; // inherited from NSObject

	static new(): RCTStatusBarManager; // inherited from NSObject
}

declare function RCTStatusBarManagerCls(): typeof NSObject;

declare class RCTStyleAnimatedNode extends RCTAnimatedNode {

	static alloc(): RCTStyleAnimatedNode; // inherited from NSObject

	static new(): RCTStyleAnimatedNode; // inherited from NSObject

	propsDictionary(): NSDictionary<string, NSObject>;
}

declare class RCTSubtractionAnimatedNode extends RCTValueAnimatedNode {

	static alloc(): RCTSubtractionAnimatedNode; // inherited from NSObject

	static new(): RCTSubtractionAnimatedNode; // inherited from NSObject
}

declare class RCTSurface extends NSObject {

	static alloc(): RCTSurface; // inherited from NSObject

	static new(): RCTSurface; // inherited from NSObject

	delegate: RCTSurfaceDelegate;

	readonly intrinsicSize: CGSize;

	readonly maximumSize: CGSize;

	readonly minimumSize: CGSize;

	readonly moduleName: string;

	properties: NSDictionary<any, any>;

	readonly rootViewTag: number;

	readonly stage: RCTSurfaceStage;

	constructor(o: { bridge: RCTBridge; moduleName: string; initialProperties: NSDictionary<any, any>; });

	initWithBridgeModuleNameInitialProperties(bridge: RCTBridge, moduleName: string, initialProperties: NSDictionary<any, any>): this;

	mountReactComponentWithBridgeModuleNameParams(bridge: RCTBridge, moduleName: string, params: NSDictionary<any, any>): void;

	setMinimumSizeMaximumSize(minimumSize: CGSize, maximumSize: CGSize): void;

	setSize(size: CGSize): void;

	sizeThatFitsMinimumSizeMaximumSize(minimumSize: CGSize, maximumSize: CGSize): CGSize;

	start(): boolean;

	stop(): boolean;

	synchronouslyWaitForStageTimeout(stage: RCTSurfaceStage, timeout: number): boolean;

	unmountReactComponentWithBridgeRootViewTag(bridge: RCTBridge, rootViewTag: number): void;

	view(): RCTSurfaceView;
}

interface RCTSurfaceDelegate extends NSObjectProtocol {

	surfaceDidChangeIntrinsicSize?(surface: RCTSurface, intrinsicSize: CGSize): void;

	surfaceDidChangeStage?(surface: RCTSurface, stage: RCTSurfaceStage): void;
}
declare var RCTSurfaceDelegate: {

	prototype: RCTSurfaceDelegate;
};

declare class RCTSurfaceHostingProxyRootView extends RCTSurfaceHostingView {

	static alloc(): RCTSurfaceHostingProxyRootView; // inherited from NSObject

	static appearance(): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceHostingProxyRootView; // inherited from UIAppearance

	static new(): RCTSurfaceHostingProxyRootView; // inherited from NSObject

	appProperties: NSDictionary<any, any>;

	readonly bridge: RCTBridge;

	readonly contentView: UIView;

	delegate: RCTRootViewDelegate;

	loadingView: UIView;

	loadingViewFadeDelay: number;

	loadingViewFadeDuration: number;

	readonly moduleName: string;

	passThroughTouches: boolean;

	reactViewController: UIViewController;

	sizeFlexibility: RCTRootViewSizeFlexibility;

	constructor(o: { bridge: RCTBridge; moduleName: string; initialProperties: NSDictionary<any, any>; });

	constructor(o: { bundleURL: NSURL; moduleName: string; initialProperties: NSDictionary<any, any>; launchOptions: NSDictionary<any, any>; });

	cancelTouches(): void;

	initWithBridgeModuleNameInitialProperties(bridge: RCTBridge, moduleName: string, initialProperties: NSDictionary<any, any>): this;

	initWithBundleURLModuleNameInitialPropertiesLaunchOptions(bundleURL: NSURL, moduleName: string, initialProperties: NSDictionary<any, any>, launchOptions: NSDictionary<any, any>): this;
}

declare class RCTSurfaceHostingView extends UIView implements RCTSurfaceDelegate {

	static alloc(): RCTSurfaceHostingView; // inherited from NSObject

	static appearance(): RCTSurfaceHostingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSurfaceHostingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSurfaceHostingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceHostingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSurfaceHostingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceHostingView; // inherited from UIAppearance

	static createSurfaceWithBridgeModuleNameInitialProperties(bridge: RCTBridge, moduleName: string, initialProperties: NSDictionary<any, any>): RCTSurface;

	static new(): RCTSurfaceHostingView; // inherited from NSObject

	activityIndicatorViewFactory: () => UIView;

	sizeMeasureMode: RCTSurfaceSizeMeasureMode;

	readonly surface: RCTSurface;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bridge: RCTBridge; moduleName: string; initialProperties: NSDictionary<any, any>; sizeMeasureMode: RCTSurfaceSizeMeasureMode; });

	constructor(o: { surface: RCTSurface; sizeMeasureMode: RCTSurfaceSizeMeasureMode; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBridgeModuleNameInitialPropertiesSizeMeasureMode(bridge: RCTBridge, moduleName: string, initialProperties: NSDictionary<any, any>, sizeMeasureMode: RCTSurfaceSizeMeasureMode): this;

	initWithSurfaceSizeMeasureMode(surface: RCTSurface, sizeMeasureMode: RCTSurfaceSizeMeasureMode): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	surfaceDidChangeIntrinsicSize(surface: RCTSurface, intrinsicSize: CGSize): void;

	surfaceDidChangeStage(surface: RCTSurface, stage: RCTSurfaceStage): void;
}

declare function RCTSurfaceMinimumSizeAndMaximumSizeFromSizeAndSizeMeasureMode(size: CGSize, sizeMeasureMode: RCTSurfaceSizeMeasureMode, minimumSize: interop.Pointer | interop.Reference<CGSize>, maximumSize: interop.Pointer | interop.Reference<CGSize>): void;

interface RCTSurfacePresenterObserver extends NSObjectProtocol {

	didMountComponentsWithRootTag?(rootTag: number): void;

	willMountComponentsWithRootTag?(rootTag: number): void;
}
declare var RCTSurfacePresenterObserver: {

	prototype: RCTSurfacePresenterObserver;
};

interface RCTSurfacePresenterStub extends NSObjectProtocol {

	addObserver(observer: RCTSurfacePresenterObserver): void;

	removeObserver(observer: RCTSurfacePresenterObserver): void;

	synchronouslyUpdateViewOnUIThreadProps(reactTag: number, props: NSDictionary<any, any>): boolean;
}
declare var RCTSurfacePresenterStub: {

	prototype: RCTSurfacePresenterStub;
};

declare class RCTSurfaceRootShadowView extends RCTShadowView {

	static alloc(): RCTSurfaceRootShadowView; // inherited from NSObject

	static new(): RCTSurfaceRootShadowView; // inherited from NSObject

	baseDirection: YGDirection;

	delegate: RCTSurfaceRootShadowViewDelegate;

	readonly intrinsicSize: CGSize;

	readonly maximumSize: CGSize;

	readonly minimumSize: CGSize;

	layoutWithAffectedShadowViews(affectedShadowViews: NSHashTable<RCTShadowView>): void;

	setMinimumSizeMaximumSize(size: CGSize, maximumSize: CGSize): void;
}

interface RCTSurfaceRootShadowViewDelegate extends NSObjectProtocol {

	rootShadowViewDidChangeIntrinsicSize(rootShadowView: RCTSurfaceRootShadowView, instrinsicSize: CGSize): void;

	rootShadowViewDidStartLayingOut(rootShadowView: RCTSurfaceRootShadowView): void;

	rootShadowViewDidStartRendering(rootShadowView: RCTSurfaceRootShadowView): void;
}
declare var RCTSurfaceRootShadowViewDelegate: {

	prototype: RCTSurfaceRootShadowViewDelegate;
};

declare class RCTSurfaceRootView extends RCTView {

	static alloc(): RCTSurfaceRootView; // inherited from NSObject

	static appearance(): RCTSurfaceRootView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSurfaceRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSurfaceRootView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceRootView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSurfaceRootView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceRootView; // inherited from UIAppearance

	static new(): RCTSurfaceRootView; // inherited from NSObject
}

declare const enum RCTSurfaceSizeMeasureMode {

	WidthUndefined = 0,

	WidthExact = 1,

	WidthAtMost = 2,

	HeightUndefined = 0,

	HeightExact = 4,

	HeightAtMost = 8
}

declare const enum RCTSurfaceStage {

	SurfaceDidInitialize = 1,

	BridgeDidLoad = 2,

	ModuleDidLoad = 4,

	SurfaceDidRun = 8,

	SurfaceDidInitialRendering = 16,

	SurfaceDidInitialLayout = 32,

	SurfaceDidInitialMounting = 64,

	SurfaceDidStop = 128,

	Initialized = 1,

	Started = 256,

	Prepared = 62,

	Mounted = 64
}

declare function RCTSurfaceStageIsPreparing(stage: RCTSurfaceStage): boolean;

declare function RCTSurfaceStageIsRunning(stage: RCTSurfaceStage): boolean;

declare class RCTSurfaceView extends UIView {

	static alloc(): RCTSurfaceView; // inherited from NSObject

	static appearance(): RCTSurfaceView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSurfaceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSurfaceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSurfaceView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSurfaceView; // inherited from UIAppearance

	static new(): RCTSurfaceView; // inherited from NSObject

	rootView: RCTSurfaceRootView;

	stage: RCTSurfaceStage;

	readonly surface: RCTSurface;

	constructor(o: { surface: RCTSurface; });

	initWithSurface(surface: RCTSurface): this;
}

declare function RCTSwapClassMethods(cls: typeof NSObject, original: string, replacement: string): void;

declare function RCTSwapInstanceMethods(cls: typeof NSObject, original: string, replacement: string): void;

declare class RCTSwitch extends UISwitch {

	static alloc(): RCTSwitch; // inherited from NSObject

	static appearance(): RCTSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTSwitch; // inherited from UIAppearance

	static new(): RCTSwitch; // inherited from NSObject

	onChange: (p1: NSDictionary<any, any>) => void;

	wasOn: boolean;
}

declare class RCTSwitchManager extends RCTViewManager {

	static alloc(): RCTSwitchManager; // inherited from NSObject

	static new(): RCTSwitchManager; // inherited from NSObject
}

declare class RCTTVNavigationEventEmitter extends RCTEventEmitter {

	static alloc(): RCTTVNavigationEventEmitter; // inherited from NSObject

	static new(): RCTTVNavigationEventEmitter; // inherited from NSObject
}

declare function RCTTVNavigationEventEmitterCls(): typeof NSObject;

declare var RCTTVNavigationEventNotification: string;

declare function RCTTargetRect(sourceSize: CGSize, destSize: CGSize, destScale: number, resizeMode: RCTResizeMode): CGRect;

declare function RCTTargetSize(sourceSize: CGSize, sourceScale: number, destSize: CGSize, destScale: number, resizeMode: RCTResizeMode, allowUpscaling: boolean): CGSize;

declare function RCTTempFilePath(extension: string, error: interop.Pointer | interop.Reference<NSError>): string;

declare class RCTTextAttributes extends NSObject implements NSCopying {

	static alloc(): RCTTextAttributes; // inherited from NSObject

	static new(): RCTTextAttributes; // inherited from NSObject

	alignment: NSTextAlignment;

	allowFontScaling: boolean;

	backgroundColor: UIColor;

	baseWritingDirection: NSWritingDirection;

	fontFamily: string;

	fontSize: number;

	fontSizeMultiplier: number;

	fontStyle: string;

	fontVariant: NSArray<string>;

	fontWeight: string;

	foregroundColor: UIColor;

	isHighlighted: boolean;

	layoutDirection: UIUserInterfaceLayoutDirection;

	letterSpacing: number;

	lineHeight: number;

	maxFontSizeMultiplier: number;

	opacity: number;

	tag: number;

	textDecorationColor: UIColor;

	textDecorationLine: RCTTextDecorationLineType;

	textDecorationStyle: NSUnderlineStyle;

	textShadowColor: UIColor;

	textShadowOffset: CGSize;

	textShadowRadius: number;

	textTransform: RCTTextTransform;

	applyTextAttributes(textAttributes: RCTTextAttributes): void;

	applyTextAttributesToText(text: string): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	effectiveBackgroundColor(): UIColor;

	effectiveFont(): UIFont;

	effectiveFontSizeMultiplier(): number;

	effectiveForegroundColor(): UIColor;

	effectiveParagraphStyle(): NSParagraphStyle;

	effectiveTextAttributes(): NSDictionary<string, any>;
}

declare var RCTTextAttributesIsHighlightedAttributeName: string;

declare var RCTTextAttributesTagAttributeName: string;

declare const enum RCTTextDecorationLineType {

	None = 0,

	Underline = 1,

	Strikethrough = 2,

	UnderlineStrikethrough = 3
}

declare const enum RCTTextEventType {

	Focus = 0,

	Blur = 1,

	Change = 2,

	Submit = 3,

	End = 4,

	KeyPress = 5
}

declare class RCTTextSelection extends NSObject {

	static alloc(): RCTTextSelection; // inherited from NSObject

	static new(): RCTTextSelection; // inherited from NSObject

	readonly end: number;

	readonly start: number;

	constructor(o: { start: number; end: number; });

	initWithStartEnd(start: number, end: number): this;
}

declare class RCTTextShadowView extends RCTBaseTextShadowView {

	static alloc(): RCTTextShadowView; // inherited from NSObject

	static new(): RCTTextShadowView; // inherited from NSObject

	adjustsFontSizeToFit: boolean;

	lineBreakMode: NSLineBreakMode;

	maximumNumberOfLines: number;

	minimumFontScale: number;

	onTextLayout: (p1: NSDictionary<any, any>) => void;

	constructor(o: { bridge: RCTBridge; });

	initWithBridge(bridge: RCTBridge): this;

	uiManagerWillPerformMounting(): void;
}

declare const enum RCTTextTransform {

	Undefined = 0,

	None = 1,

	Capitalize = 2,

	Uppercase = 3,

	Lowercase = 4
}

declare var RCTTextUpdateLagWarningThreshold: number;

declare class RCTTextView extends UIView {

	static alloc(): RCTTextView; // inherited from NSObject

	static appearance(): RCTTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTTextView; // inherited from UIAppearance

	static new(): RCTTextView; // inherited from NSObject

	selectable: boolean;

	setTextStorageContentFrameDescendantViews(textStorage: NSTextStorage, contentFrame: CGRect, descendantViews: NSArray<UIView> | UIView[]): void;
}

declare class RCTTextViewManager extends RCTBaseTextViewManager {

	static alloc(): RCTTextViewManager; // inherited from NSObject

	static new(): RCTTextViewManager; // inherited from NSObject
}

declare class RCTTiming extends NSObject implements RCTBridgeModule, RCTFrameUpdateObserver, RCTInvalidating {

	static alloc(): RCTTiming; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTTiming; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	pauseCallback: () => void; // inherited from RCTFrameUpdateObserver

	readonly paused: boolean; // inherited from RCTFrameUpdateObserver

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { delegate: RCTTimingDelegate; });

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	createTimerForNextFrameDurationJsSchedulingTimeRepeats(callbackID: number, jsDuration: number, jsSchedulingTime: Date, repeats: boolean): void;

	deleteTimer(timerID: number): void;

	didUpdateFrame(update: RCTFrameUpdate): void;

	initWithDelegate(delegate: RCTTimingDelegate): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTTimingCls(): typeof NSObject;

interface RCTTimingDelegate {

	callIdleCallbacks(absoluteFrameStartMS: number): void;

	callTimers(timers: NSArray<number> | number[]): void;

	immediatelyCallTimer(callbackID: number): void;
}
declare var RCTTimingDelegate: {

	prototype: RCTTimingDelegate;
};

declare class RCTTouchEvent extends NSObject implements RCTEvent {

	static alloc(): RCTTouchEvent; // inherited from NSObject

	static moduleDotMethod(): string;

	static new(): RCTTouchEvent; // inherited from NSObject

	readonly coalescingKey: number; // inherited from RCTEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventName: string; // inherited from RCTEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly viewTag: number; // inherited from RCTEvent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { eventName: string; reactTag: number; reactTouches: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]; changedIndexes: NSArray<number> | number[]; coalescingKey: number; });

	arguments(): NSArray<any>;

	canCoalesce(): boolean;

	class(): typeof NSObject;

	coalesceWithEvent(newEvent: RCTEvent): RCTEvent;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithEventNameReactTagReactTouchesChangedIndexesCoalescingKey(eventName: string, reactTag: number, reactTouches: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], changedIndexes: NSArray<number> | number[], coalescingKey: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RCTTouchHandler extends UIGestureRecognizer {

	static alloc(): RCTTouchHandler; // inherited from NSObject

	static new(): RCTTouchHandler; // inherited from NSObject

	constructor(o: { bridge: RCTBridge; });

	attachToView(view: UIView): void;

	cancel(): void;

	detachFromView(view: UIView): void;

	initWithBridge(bridge: RCTBridge): this;
}

declare class RCTTrackingAnimatedNode extends RCTAnimatedNode {

	static alloc(): RCTTrackingAnimatedNode; // inherited from NSObject

	static new(): RCTTrackingAnimatedNode; // inherited from NSObject
}

declare class RCTTransformAnimatedNode extends RCTAnimatedNode {

	static alloc(): RCTTransformAnimatedNode; // inherited from NSObject

	static new(): RCTTransformAnimatedNode; // inherited from NSObject

	propsDictionary(): NSDictionary<string, NSObject>;
}

declare function RCTTransformFromTargetRect(sourceSize: CGSize, targetRect: CGRect): CGAffineTransform;

declare function RCTTransformImage(image: UIImage, destSize: CGSize, destScale: number, transform: CGAffineTransform): UIImage;

declare var RCTTriggerReloadCommandBundleURLKey: string;

declare function RCTTriggerReloadCommandListeners(reason: string): void;

declare var RCTTriggerReloadCommandNotification: string;

declare var RCTTriggerReloadCommandReasonKey: string;

declare function RCTTurboModuleEnabled(): boolean;

interface RCTTurboModuleLookupDelegate extends NSObjectProtocol {

	moduleForName(moduleName: string | interop.Pointer | interop.Reference<any>): any;

	moduleForNameWarnOnLookupFailure(moduleName: string | interop.Pointer | interop.Reference<any>, warnOnLookupFailure: boolean): any;

	moduleIsInitialized(moduleName: string | interop.Pointer | interop.Reference<any>): boolean;
}
declare var RCTTurboModuleLookupDelegate: {

	prototype: RCTTurboModuleLookupDelegate;
};

declare class RCTUIImageViewAnimated extends UIImageView {

	static alloc(): RCTUIImageViewAnimated; // inherited from NSObject

	static appearance(): RCTUIImageViewAnimated; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTUIImageViewAnimated; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTUIImageViewAnimated; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUIImageViewAnimated; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTUIImageViewAnimated; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUIImageViewAnimated; // inherited from UIAppearance

	static new(): RCTUIImageViewAnimated; // inherited from NSObject
}

declare function RCTUIKitLayoutDirectionFromYogaLayoutDirection(direction: YGDirection): UIUserInterfaceLayoutDirection;

declare function RCTUIKitLocalizedString(string: string): string;

declare class RCTUIManager extends NSObject implements RCTBridgeModule, RCTInvalidating {

	static JSResponder(): UIView;

	static alloc(): RCTUIManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTUIManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly observerCoordinator: RCTUIManagerObserverCoordinator;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addUIBlock(block: (p1: RCTUIManager, p2: NSDictionary<number, UIView>) => void): void;

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prependUIBlock(block: (p1: RCTUIManager, p2: NSDictionary<number, UIView>) => void): void;

	registerRootView(rootView: UIView): void;

	registerRootViewTag(rootTag: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rootViewForReactTagWithCompletion(reactTag: number, completion: (p1: UIView) => void): void;

	self(): this;

	setAvailableSizeForRootView(availableSize: CGSize, rootView: UIView): void;

	setIntrinsicContentSizeForView(intrinsicContentSize: CGSize, view: UIView): void;

	setLocalDataForView(localData: NSObject, view: UIView): void;

	setNativeIDForView(nativeID: string, view: UIView): void;

	setNeedsLayout(): void;

	setNextLayoutAnimationGroup(layoutAnimationGroup: RCTLayoutAnimationGroup): void;

	setSizeForView(size: CGSize, view: UIView): void;

	shadowViewForReactTag(reactTag: number): RCTShadowView;

	synchronouslyUpdateViewOnUIThreadViewNameProps(reactTag: number, viewName: string, props: NSDictionary<any, any>): void;

	viewForNativeIDWithRootTag(nativeID: string, rootTag: number): UIView;

	viewForReactTag(reactTag: number): UIView;

	viewNameForReactTag(reactTag: number): string;
}

interface RCTUIManagerObserver extends NSObjectProtocol {

	uiManagerDidPerformLayout?(manager: RCTUIManager): void;

	uiManagerDidPerformMounting?(manager: RCTUIManager): void;

	uiManagerPerformMountingWithBlock?(manager: RCTUIManager, block: () => void): boolean;

	uiManagerWillPerformLayout?(manager: RCTUIManager): void;

	uiManagerWillPerformMounting?(manager: RCTUIManager): void;
}
declare var RCTUIManagerObserver: {

	prototype: RCTUIManagerObserver;
};

declare class RCTUIManagerObserverCoordinator extends NSObject implements RCTUIManagerObserver {

	static alloc(): RCTUIManagerObserverCoordinator; // inherited from NSObject

	static new(): RCTUIManagerObserverCoordinator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addObserver(observer: RCTUIManagerObserver): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeObserver(observer: RCTUIManagerObserver): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	uiManagerDidPerformLayout(manager: RCTUIManager): void;

	uiManagerDidPerformMounting(manager: RCTUIManager): void;

	uiManagerPerformMountingWithBlock(manager: RCTUIManager, block: () => void): boolean;

	uiManagerWillPerformLayout(manager: RCTUIManager): void;

	uiManagerWillPerformMounting(manager: RCTUIManager): void;
}

declare var RCTUIManagerQueueName: string;

declare function RCTUIManagerTypeForTagIsFabric(reactTag: number): boolean;

declare var RCTUIManagerWillUpdateViewsDueToContentSizeMultiplierChangeNotification: string;

declare class RCTUITextField extends UITextField implements RCTBackedTextInputViewProtocol {

	static alloc(): RCTUITextField; // inherited from NSObject

	static appearance(): RCTUITextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTUITextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTUITextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUITextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTUITextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUITextField; // inherited from UIAppearance

	static new(): RCTUITextField; // inherited from NSObject

	attributedText: NSAttributedString; // inherited from RCTBackedTextInputViewProtocol

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly beginningOfDocument: UITextPosition; // inherited from UITextInput

	caretHidden: boolean; // inherited from RCTBackedTextInputViewProtocol

	clearButtonMode: UITextFieldViewMode; // inherited from RCTBackedTextInputViewProtocol

	readonly contentSize: CGSize; // inherited from RCTBackedTextInputViewProtocol

	contextMenuHidden: boolean; // inherited from RCTBackedTextInputViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	defaultTextAttributes: NSDictionary<string, any>; // inherited from RCTBackedTextInputViewProtocol

	readonly description: string; // inherited from NSObjectProtocol

	editable: boolean; // inherited from RCTBackedTextInputViewProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly endOfDocument: UITextPosition; // inherited from UITextInput

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	inputAccessoryView: UIView; // inherited from RCTBackedTextInputViewProtocol

	inputDelegate: UITextInputDelegate; // inherited from UITextInput

	readonly insertDictationResultPlaceholder: any; // inherited from UITextInput

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	readonly markedTextRange: UITextRange; // inherited from UITextInput

	markedTextStyle: NSDictionary<string, any>; // inherited from UITextInput

	passwordRules: UITextInputPasswordRules; // inherited from UITextInputTraits

	placeholder: string; // inherited from RCTBackedTextInputViewProtocol

	placeholderColor: UIColor; // inherited from RCTBackedTextInputViewProtocol

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	scrollEnabled: boolean; // inherited from RCTBackedTextInputViewProtocol

	secureTextEntry: boolean; // inherited from UITextInputTraits

	selectedTextRange: UITextRange; // inherited from UITextInput

	selectionAffinity: UITextStorageDirection; // inherited from UITextInput

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContainerInset: UIEdgeInsets; // inherited from RCTBackedTextInputViewProtocol

	textContentType: string; // inherited from UITextInputTraits

	textInputDelegate: RCTBackedTextInputDelegate; // inherited from RCTBackedTextInputViewProtocol

	readonly textInputView: UIView; // inherited from UITextInput

	readonly textWasPasted: boolean; // inherited from RCTBackedTextInputViewProtocol

	readonly tokenizer: UITextInputTokenizer; // inherited from UITextInput

	readonly  // inherited from NSObjectProtocol

	baseWritingDirectionForPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSWritingDirection;

	beginFloatingCursorAtPoint(point: CGPoint): void;

	caretRectForPosition(position: UITextPosition): CGRect;

	characterOffsetOfPositionWithinRange(position: UITextPosition, range: UITextRange): number;

	characterRangeAtPoint(point: CGPoint): UITextRange;

	characterRangeByExtendingPositionInDirection(position: UITextPosition, direction: UITextLayoutDirection): UITextRange;

	class(): typeof NSObject;

	closestPositionToPoint(point: CGPoint): UITextPosition;

	closestPositionToPointWithinRange(point: CGPoint, range: UITextRange): UITextPosition;

	comparePositionToPosition(position: UITextPosition, other: UITextPosition): NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	dictationRecognitionFailed(): void;

	dictationRecordingDidEnd(): void;

	endFloatingCursor(): void;

	firstRectForRange(range: UITextRange): CGRect;

	frameForDictationResultPlaceholder(placeholder: any): CGRect;

	insertDictationResult(dictationResult: NSArray<UIDictationPhrase> | UIDictationPhrase[]): void;

	insertText(text: string): void;

	insertTextAlternativesStyle(text: string, alternatives: NSArray<string> | string[], style: UITextAlternativeStyle): void;

	insertTextPlaceholderWithSize(size: CGSize): UITextPlaceholder;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	offsetFromPositionToPosition(from: UITextPosition, toPosition: UITextPosition): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionFromPositionInDirectionOffset(position: UITextPosition, direction: UITextLayoutDirection, offset: number): UITextPosition;

	positionFromPositionOffset(position: UITextPosition, offset: number): UITextPosition;

	positionWithinRangeAtCharacterOffset(range: UITextRange, offset: number): UITextPosition;

	positionWithinRangeFarthestInDirection(range: UITextRange, direction: UITextLayoutDirection): UITextPosition;

	removeDictationResultPlaceholderWillInsertResult(placeholder: any, willInsertResult: boolean): void;

	removeTextPlaceholder(textPlaceholder: UITextPlaceholder): void;

	replaceRangeWithText(range: UITextRange, text: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectionRectsForRange(range: UITextRange): NSArray<UITextSelectionRect>;

	self(): this;

	setAttributedMarkedTextSelectedRange(markedText: NSAttributedString, selectedRange: NSRange): void;

	setBaseWritingDirectionForRange(writingDirection: NSWritingDirection, range: UITextRange): void;

	setMarkedTextSelectedRange(markedText: string, selectedRange: NSRange): void;

	setSelectedTextRangeNotifyDelegate(selectedTextRange: UITextRange, notifyDelegate: boolean): void;

	shouldChangeTextInRangeReplacementText(range: UITextRange, text: string): boolean;

	textInRange(range: UITextRange): string;

	textRangeFromPositionToPosition(fromPosition: UITextPosition, toPosition: UITextPosition): UITextRange;

	textStylingAtPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSDictionary<string, any>;

	unmarkText(): void;

	updateFloatingCursorAtPoint(point: CGPoint): void;
}

declare class RCTUITextView extends UITextView implements RCTBackedTextInputViewProtocol {

	static alloc(): RCTUITextView; // inherited from NSObject

	static appearance(): RCTUITextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTUITextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTUITextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUITextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTUITextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTUITextView; // inherited from UIAppearance

	static new(): RCTUITextView; // inherited from NSObject

	preferredMaxLayoutWidth: number;

	attributedText: NSAttributedString; // inherited from RCTBackedTextInputViewProtocol

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly beginningOfDocument: UITextPosition; // inherited from UITextInput

	caretHidden: boolean; // inherited from RCTBackedTextInputViewProtocol

	clearButtonMode: UITextFieldViewMode; // inherited from RCTBackedTextInputViewProtocol

	readonly contentSize: CGSize; // inherited from RCTBackedTextInputViewProtocol

	contextMenuHidden: boolean; // inherited from RCTBackedTextInputViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	defaultTextAttributes: NSDictionary<string, any>; // inherited from RCTBackedTextInputViewProtocol

	readonly description: string; // inherited from NSObjectProtocol

	editable: boolean; // inherited from RCTBackedTextInputViewProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly endOfDocument: UITextPosition; // inherited from UITextInput

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	inputAccessoryView: UIView; // inherited from RCTBackedTextInputViewProtocol

	inputDelegate: UITextInputDelegate; // inherited from UITextInput

	readonly insertDictationResultPlaceholder: any; // inherited from UITextInput

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	readonly markedTextRange: UITextRange; // inherited from UITextInput

	markedTextStyle: NSDictionary<string, any>; // inherited from UITextInput

	passwordRules: UITextInputPasswordRules; // inherited from UITextInputTraits

	placeholder: string; // inherited from RCTBackedTextInputViewProtocol

	placeholderColor: UIColor; // inherited from RCTBackedTextInputViewProtocol

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	scrollEnabled: boolean; // inherited from RCTBackedTextInputViewProtocol

	secureTextEntry: boolean; // inherited from UITextInputTraits

	selectedTextRange: UITextRange; // inherited from UITextInput

	selectionAffinity: UITextStorageDirection; // inherited from UITextInput

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContainerInset: UIEdgeInsets; // inherited from RCTBackedTextInputViewProtocol

	textContentType: string; // inherited from UITextInputTraits

	textInputDelegate: RCTBackedTextInputDelegate; // inherited from RCTBackedTextInputViewProtocol

	readonly textInputView: UIView; // inherited from UITextInput

	readonly textWasPasted: boolean; // inherited from RCTBackedTextInputViewProtocol

	readonly tokenizer: UITextInputTokenizer; // inherited from UITextInput

	readonly  // inherited from NSObjectProtocol

	baseWritingDirectionForPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSWritingDirection;

	beginFloatingCursorAtPoint(point: CGPoint): void;

	caretRectForPosition(position: UITextPosition): CGRect;

	characterOffsetOfPositionWithinRange(position: UITextPosition, range: UITextRange): number;

	characterRangeAtPoint(point: CGPoint): UITextRange;

	characterRangeByExtendingPositionInDirection(position: UITextPosition, direction: UITextLayoutDirection): UITextRange;

	class(): typeof NSObject;

	closestPositionToPoint(point: CGPoint): UITextPosition;

	closestPositionToPointWithinRange(point: CGPoint, range: UITextRange): UITextPosition;

	comparePositionToPosition(position: UITextPosition, other: UITextPosition): NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	dictationRecognitionFailed(): void;

	dictationRecordingDidEnd(): void;

	endFloatingCursor(): void;

	firstRectForRange(range: UITextRange): CGRect;

	frameForDictationResultPlaceholder(placeholder: any): CGRect;

	insertDictationResult(dictationResult: NSArray<UIDictationPhrase> | UIDictationPhrase[]): void;

	insertText(text: string): void;

	insertTextAlternativesStyle(text: string, alternatives: NSArray<string> | string[], style: UITextAlternativeStyle): void;

	insertTextPlaceholderWithSize(size: CGSize): UITextPlaceholder;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	offsetFromPositionToPosition(from: UITextPosition, toPosition: UITextPosition): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionFromPositionInDirectionOffset(position: UITextPosition, direction: UITextLayoutDirection, offset: number): UITextPosition;

	positionFromPositionOffset(position: UITextPosition, offset: number): UITextPosition;

	positionWithinRangeAtCharacterOffset(range: UITextRange, offset: number): UITextPosition;

	positionWithinRangeFarthestInDirection(range: UITextRange, direction: UITextLayoutDirection): UITextPosition;

	removeDictationResultPlaceholderWillInsertResult(placeholder: any, willInsertResult: boolean): void;

	removeTextPlaceholder(textPlaceholder: UITextPlaceholder): void;

	replaceRangeWithText(range: UITextRange, text: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectionRectsForRange(range: UITextRange): NSArray<UITextSelectionRect>;

	self(): this;

	setAttributedMarkedTextSelectedRange(markedText: NSAttributedString, selectedRange: NSRange): void;

	setBaseWritingDirectionForRange(writingDirection: NSWritingDirection, range: UITextRange): void;

	setMarkedTextSelectedRange(markedText: string, selectedRange: NSRange): void;

	setSelectedTextRangeNotifyDelegate(selectedTextRange: UITextRange, notifyDelegate: boolean): void;

	shouldChangeTextInRangeReplacementText(range: UITextRange, text: string): boolean;

	textInRange(range: UITextRange): string;

	textRangeFromPositionToPosition(fromPosition: UITextPosition, toPosition: UITextPosition): UITextRange;

	textStylingAtPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSDictionary<string, any>;

	unmarkText(): void;

	updateFloatingCursorAtPoint(point: CGPoint): void;
}

declare function RCTURLByReplacingQueryParam(URL: NSURL, param: string, value: string): NSURL;

interface RCTURLRequestDelegate extends NSObjectProtocol {

	URLRequestDidCompleteWithError(requestToken: any, error: NSError): void;

	URLRequestDidReceiveData(requestToken: any, data: NSData): void;

	URLRequestDidReceiveResponse(requestToken: any, response: NSURLResponse): void;

	URLRequestDidSendDataWithProgress(requestToken: any, bytesSent: number): void;
}
declare var RCTURLRequestDelegate: {

	prototype: RCTURLRequestDelegate;
};

interface RCTURLRequestHandler extends RCTBridgeModule {

	canHandleRequest(request: NSURLRequest): boolean;

	cancelRequest?(requestToken: any): void;

	handlerPriority?(): number;

	sendRequestWithDelegate(request: NSURLRequest, delegate: RCTURLRequestDelegate): any;
}
declare var RCTURLRequestHandler: {

	prototype: RCTURLRequestHandler;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare function RCTUnsafeExecuteOnMainQueueSync(block: () => void): void;

declare function RCTUnsafeExecuteOnUIManagerQueueSync(block: () => void): void;

declare function RCTUpscalingRequired(sourceSize: CGSize, sourceScale: number, destSize: CGSize, destScale: number, resizeMode: RCTResizeMode): boolean;

declare var RCTUserInterfaceStyleDidChangeNotification: string;

declare var RCTUserInterfaceStyleDidChangeNotificationTraitCollectionKey: string;

declare class RCTUtilsUIOverride extends NSObject {

	static alloc(): RCTUtilsUIOverride; // inherited from NSObject

	static hasPresentedViewController(): boolean;

	static new(): RCTUtilsUIOverride; // inherited from NSObject

	static presentedViewController(): UIViewController;

	static setPresentedViewController(presentedViewController: UIViewController): void;
}

declare function RCTValidateTypeOfViewCommandArgument(obj: NSObject, expectedClass: any, expectedType: string, componentName: string, commandName: string, argPos: string): boolean;

declare class RCTValueAnimatedNode extends RCTAnimatedNode {

	static alloc(): RCTValueAnimatedNode; // inherited from NSObject

	static new(): RCTValueAnimatedNode; // inherited from NSObject

	animatedObject: any;

	value: number;

	valueObserver: RCTValueAnimatedNodeObserver;

	extractOffset(): void;

	flattenOffset(): void;

	setOffset(offset: number): void;
}

interface RCTValueAnimatedNodeObserver extends NSObjectProtocol {

	animatedNodeDidUpdateValue(node: RCTValueAnimatedNode, value: number): void;
}
declare var RCTValueAnimatedNodeObserver: {

	prototype: RCTValueAnimatedNodeObserver;
};

declare var RCTVersionMajor: string;

declare var RCTVersionMinor: string;

declare var RCTVersionPatch: string;

declare var RCTVersionPrerelease: string;

declare class RCTVibration extends NSObject implements RCTBridgeModule {

	static alloc(): RCTVibration; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTVibration; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function RCTVibrationClassProvider(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

declare function RCTVibrationCls(): typeof NSObject;

declare class RCTView extends UIView {

	static alloc(): RCTView; // inherited from NSObject

	static appearance(): RCTView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RCTView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RCTView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RCTView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RCTView; // inherited from UIAppearance

	static autoAdjustInsetsForViewWithScrollViewUpdateOffset(parentView: UIView, scrollView: UIScrollView, updateOffset: boolean): void;

	static contentInsetsForView(curView: UIView): UIEdgeInsets;

	static new(): RCTView; // inherited from NSObject

	borderBottomColor: any;

	borderBottomEndRadius: number;

	borderBottomLeftRadius: number;

	borderBottomRightRadius: number;

	borderBottomStartRadius: number;

	borderBottomWidth: number;

	borderColor: any;

	borderEndColor: any;

	borderEndWidth: number;

	borderLeftColor: any;

	borderLeftWidth: number;

	borderRadius: number;

	borderRightColor: any;

	borderRightWidth: number;

	borderStartColor: any;

	borderStartWidth: number;

	borderStyle: RCTBorderStyle;

	borderTopColor: any;

	borderTopEndRadius: number;

	borderTopLeftRadius: number;

	borderTopRightRadius: number;

	borderTopStartRadius: number;

	borderTopWidth: number;

	borderWidth: number;

	hitTestEdgeInsets: UIEdgeInsets;

	onAccessibilityAction: (p1: NSDictionary<any, any>) => void;

	onAccessibilityEscape: (p1: NSDictionary<any, any>) => void;

	onAccessibilityTap: (p1: NSDictionary<any, any>) => void;

	onMagicTap: (p1: NSDictionary<any, any>) => void;

	pointerEvents: RCTPointerEvents;

	removeClippedSubviews: boolean;

	updateClippedSubviews(): void;
}

declare class RCTViewManager extends NSObject implements RCTBridgeModule {

	static alloc(): RCTViewManager; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTViewManager; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	bridge: RCTBridge;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	batchDidComplete(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	customBubblingEventTypes(): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shadowView(): RCTShadowView;

	view(): UIView;
}

declare class RCTVirtualTextShadowView extends RCTBaseTextShadowView {

	static alloc(): RCTVirtualTextShadowView; // inherited from NSObject

	static new(): RCTVirtualTextShadowView; // inherited from NSObject
}

declare class RCTVirtualTextViewManager extends RCTBaseTextViewManager {

	static alloc(): RCTVirtualTextViewManager; // inherited from NSObject

	static new(): RCTVirtualTextViewManager; // inherited from NSObject
}

declare class RCTWeakProxy extends NSObject {

	static alloc(): RCTWeakProxy; // inherited from NSObject

	static new(): RCTWeakProxy; // inherited from NSObject

	static weakProxyWithTarget(target: any): RCTWeakProxy;

	readonly target: any;
}

interface RCTWebSocketContentHandler extends NSObjectProtocol {

	processWebsocketMessageForSocketIDWithType(message: any, socketID: number, type: interop.Pointer | interop.Reference<string>): any;
}
declare var RCTWebSocketContentHandler: {

	prototype: RCTWebSocketContentHandler;
};

declare class RCTWebSocketExecutor extends NSObject implements RCTJavaScriptExecutor {

	static alloc(): RCTWebSocketExecutor; // inherited from NSObject

	static moduleName(): string;

	static new(): RCTWebSocketExecutor; // inherited from NSObject

	static requiresMainQueueSetup(): boolean;

	readonly bridge: RCTBridge; // inherited from RCTBridgeModule

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodQueue: NSObject; // inherited from RCTBridgeModule

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly valid: boolean; // inherited from RCTJavaScriptExecutor

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	batchDidComplete(): void;

	callFunctionOnModuleMethodArgumentsCallback(module: string, method: string, args: NSArray<any> | any[], onComplete: (p1: any, p2: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	executeApplicationScriptSourceURLOnComplete(script: NSData, sourceURL: NSURL, onComplete: (p1: NSError) => void): void;

	executeAsyncBlockOnJavaScriptQueue(block: () => void): void;

	executeBlockOnJavaScriptQueue(block: () => void): void;

	flushedQueue(onComplete: (p1: any, p2: NSError) => void): void;

	initWithURL(URL: NSURL): this;

	injectJSONTextAsGlobalObjectNamedCallback(script: string, objectName: string, onComplete: (p1: NSError) => void): void;

	invalidate(): void;

	invokeCallbackIDArgumentsCallback(cbID: number, args: NSArray<any> | any[], onComplete: (p1: any, p2: NSError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodsToExport(): NSArray<RCTBridgeMethod>;

	partialBatchDidFlush(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setUp(): void;
}

declare function RCTWebSocketExecutorCls(): typeof NSObject;

declare class RCTWebSocketModule extends RCTEventEmitter {

	static alloc(): RCTWebSocketModule; // inherited from NSObject

	static new(): RCTWebSocketModule; // inherited from NSObject

	sendDataForSocketID(data: NSData, socketID: number): void;

	setContentHandlerForSocketID(handler: RCTWebSocketContentHandler, socketID: number): void;
}

declare function RCTWebSocketModuleCls(): typeof NSObject;

declare class RCTWrapperViewController extends UIViewController {

	static alloc(): RCTWrapperViewController; // inherited from NSObject

	static new(): RCTWrapperViewController; // inherited from NSObject

	constructor(o: { contentView: UIView; });

	initWithContentView(contentView: UIView): this;
}

declare function RCTYogaDisplayTypeFromReactDisplayType(displayType: RCTDisplayType): YGDisplay;

declare function RCTYogaFloatFromCoreGraphicsFloat(value: number): number;

declare function RCTYogaLayoutDirectionFromUIKitLayoutDirection(direction: UIUserInterfaceLayoutDirection): YGDirection;

declare function RCTZeroIfNaN(value: number): number;

declare var RCT_PACKAGER_CLIENT_PROTOCOL_VERSION: number;

declare var ReactVersionNumber: number;

declare var ReactVersionString: interop.Reference<number>;

declare var SwitchAccessibilityTrait: number;

declare function _RCTLogJavaScriptInternal(p1: RCTLogLevel, p2: string): void;

declare function _RCTProfileBeginEvent(calleeThread: NSThread, time: number, tag: number, name: string, args: NSDictionary<string, string>): void;

declare function _RCTProfileBeginFlowEvent(): number;

declare function _RCTProfileEndEvent(calleeThread: NSThread, threadName: string, time: number, tag: number, category: string): void;

declare function _RCTProfileEndFlowEvent(p1: number): void;

declare var kRCTBundleURLProviderDefaultPort: number;

interface systrace_arg_t {
	key: string;
	key_len: number;
	value: string;
	value_len: number;
}
declare var systrace_arg_t: interop.StructType<systrace_arg_t>;
