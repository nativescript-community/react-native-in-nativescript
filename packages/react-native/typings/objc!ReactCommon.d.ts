
declare class RCTTurboModuleManager extends NSObject implements RCTTurboModuleLookupDelegate {

	static alloc(): RCTTurboModuleManager; // inherited from NSObject

	static new(): RCTTurboModuleManager; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bridge: RCTBridge; delegate: RCTTurboModuleManagerDelegate; jsInvoker: any; });

	constructor(o: { bridge: RCTBridge; delegate: RCTTurboModuleManagerDelegate; jsInvoker: any; performanceLogger: RCTTurboModulePerformanceLogger; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBridgeDelegateJsInvoker(bridge: RCTBridge, delegate: RCTTurboModuleManagerDelegate, jsInvoker: any): this;

	initWithBridgeDelegateJsInvokerPerformanceLogger(bridge: RCTBridge, delegate: RCTTurboModuleManagerDelegate, jsInvoker: any, performanceLogger: RCTTurboModulePerformanceLogger): this;

	installJSBindingWithRuntime(runtime: any): void;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	moduleForName(moduleName: string | interop.Pointer | interop.Reference<any>): any;

	moduleForNameWarnOnLookupFailure(moduleName: string | interop.Pointer | interop.Reference<any>, warnOnLookupFailure: boolean): any;

	moduleIsInitialized(moduleName: string | interop.Pointer | interop.Reference<any>): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface RCTTurboModuleManagerDelegate extends NSObjectProtocol {

	getModuleClassFromName?(name: string | interop.Pointer | interop.Reference<any>): typeof NSObject;

	getModuleInstanceFromClass?(moduleClass: typeof NSObject): any;

	getTurboModuleInstanceJsInvokerNativeInvokerPerfLogger(name: number, instance: any, jsInvoker: any, nativeInvoker: any, perfLogger: RCTTurboModulePerformanceLogger): any;

	getTurboModuleJsInvoker?(name: number, jsInvoker: any): any;
}
declare var RCTTurboModuleManagerDelegate: {

	prototype: RCTTurboModuleManagerDelegate;
};

interface RCTTurboModulePerformanceLogger {

	asyncMethodCallArgumentConversionEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncMethodCallArgumentConversionStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncMethodCallEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncMethodCallStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncRCTTurboModuleMethodCallDispatchMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncRCTTurboModuleMethodCallEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	asyncRCTTurboModuleMethodCallStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	attachMethodQueueToRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	attachMethodQueueToRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	attachRCTBridgeToRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	attachRCTBridgeToRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createRCTTurboModuleCacheHit(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createTurboModuleCacheHit(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	createTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	dispatchDidInitializeModuleNotificationForRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	dispatchDidInitializeModuleNotificationForRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getCppTurboModuleFromTMMDelegateEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getCppTurboModuleFromTMMDelegateStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getRCTTurboModuleClassEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getRCTTurboModuleClassStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getRCTTurboModuleInstanceEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getRCTTurboModuleInstanceStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromRCTCxxModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromRCTCxxModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromTMMDelegateEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	getTurboModuleFromTMMDelegateStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	registerRCTTurboModuleForFrameUpdatesEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	registerRCTTurboModuleForFrameUpdatesStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	setupRCTTurboModuleDispatch(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	setupRCTTurboModuleEnd(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	setupRCTTurboModuleStart(moduleName: string | interop.Pointer | interop.Reference<any>): void;

	syncMethodCallArgumentConversionEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncMethodCallArgumentConversionStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncMethodCallEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncMethodCallReturnConversionEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncMethodCallReturnConversionStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncMethodCallStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncRCTTurboModuleMethodCallEndMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;

	syncRCTTurboModuleMethodCallStartMethodNameMethodCallId(moduleName: string | interop.Pointer | interop.Reference<any>, methodName: string | interop.Pointer | interop.Reference<any>, methodCallId: number): void;
}
declare var RCTTurboModulePerformanceLogger: {

	prototype: RCTTurboModulePerformanceLogger;
};

declare var ReactCommonVersionNumber: number;

declare var ReactCommonVersionString: interop.Reference<number>;
