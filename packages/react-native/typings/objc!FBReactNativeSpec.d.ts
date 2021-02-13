
declare var FBReactNativeSpecVersionNumber: number;

declare var FBReactNativeSpecVersionString: interop.Reference<number>;

declare var JS: string;

declare var JSVar: string;

declare var JSVar10: string;

declare var JSVar11: string;

declare var JSVar12: string;

declare var JSVar13: string;

declare var JSVar14: string;

declare var JSVar15: string;

declare var JSVar16: string;

declare var JSVar17: string;

declare var JSVar18: number;

declare var JSVar19: string;

declare var JSVar2: string;

declare var JSVar20: string;

declare var JSVar21: string;

declare var JSVar22: string;

declare var JSVar23: string;

declare var JSVar24: string;

declare var JSVar25: number;

declare var JSVar26: string;

declare var JSVar27: string;

declare var JSVar28: string;

declare var JSVar29: string;

declare var JSVar3: string;

declare var JSVar30: number;

declare var JSVar31: string;

declare var JSVar32: number;

declare var JSVar33: string;

declare var JSVar34: string;

declare var JSVar35: number;

declare var JSVar36: boolean;

declare var JSVar37: number;

declare var JSVar38: number;

declare var JSVar39: number;

declare var JSVar4: string;

declare var JSVar40: number;

declare var JSVar41: number;

declare var JSVar42: number;

declare var JSVar43: number;

declare var JSVar44: number;

declare var JSVar45: number;

declare var JSVar46: string;

declare var JSVar47: string;

declare var JSVar48: string;

declare var JSVar49: string;

declare var JSVar5: string;

declare var JSVar50: string;

declare var JSVar51: string;

declare var JSVar52: string;

declare var JSVar53: string;

declare var JSVar54: string;

declare var JSVar55: NSObjectProtocol;

declare var JSVar56: number;

declare var JSVar57: number;

declare var JSVar58: number;

declare var JSVar59: number;

declare var JSVar6: string;

declare var JSVar60: number;

declare var JSVar61: number;

declare var JSVar62: string;

declare var JSVar63: boolean;

declare var JSVar64: boolean;

declare var JSVar65: boolean;

declare var JSVar66: number;

declare var JSVar67: string;

declare var JSVar68: string;

declare var JSVar69: string;

declare var JSVar7: string;

declare var JSVar70: NSObjectProtocol;

declare var JSVar71: NSObjectProtocol;

declare var JSVar72: number;

declare var JSVar73: boolean;

declare var JSVar74: number;

declare var JSVar75: number;

declare var JSVar76: number;

declare var JSVar77: number;

declare var JSVar78: number;

declare var JSVar79: number;

declare var JSVar8: string;

declare var JSVar80: boolean;

declare var JSVar81: boolean;

declare var JSVar82: boolean;

declare var JSVar83: boolean;

declare var JSVar84: string;

declare var JSVar85: NSObjectProtocol;

declare var JSVar86: string;

declare var JSVar87: number;

declare var JSVar88: string;

declare var JSVar89: number;

declare var JSVar9: NSObjectProtocol;

declare var JSVar90: number;

declare var JSVar91: number;

declare var JSVar92: number;

declare var JSVar93: number;

declare var JSVar94: number;

declare var JSVar95: number;

declare var JSVar96: number;

declare var JSVar97: number;

interface NativeAccessibilityInfoSpec extends RCTBridgeModule {

	announceForAccessibility(announcement: string): void;

	isReduceMotionEnabled(onSuccess: (p1: NSArray<any>) => void): void;

	isTouchExplorationEnabled(onSuccess: (p1: NSArray<any>) => void): void;

	setAccessibilityFocus(reactTag: number): void;
}
declare var NativeAccessibilityInfoSpec: {

	prototype: NativeAccessibilityInfoSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeAccessibilityManagerSpec extends RCTBridgeModule {

	announceForAccessibility(announcement: string): void;

	getCurrentBoldTextStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	getCurrentGrayscaleStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	getCurrentInvertColorsStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	getCurrentReduceMotionStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	getCurrentReduceTransparencyStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	getCurrentVoiceOverStateOnError(onSuccess: (p1: NSArray<any>) => void, onError: (p1: NSArray<any>) => void): void;

	setAccessibilityContentSizeMultipliers(JSMultipliers: any): void;

	setAccessibilityFocus(reactTag: number): void;
}
declare var NativeAccessibilityManagerSpec: {

	prototype: NativeAccessibilityManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeActionSheetManagerSpec extends RCTBridgeModule {

	showActionSheetWithOptionsCallback(options: any, callback: (p1: NSArray<any>) => void): void;

	showShareActionSheetWithOptionsFailureCallbackSuccessCallback(options: any, failureCallback: (p1: NSArray<any>) => void, successCallback: (p1: NSArray<any>) => void): void;
}
declare var NativeActionSheetManagerSpec: {

	prototype: NativeActionSheetManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeAlertManagerSpec extends RCTBridgeModule {

	alertWithArgsCallback(args: any, callback: (p1: NSArray<any>) => void): void;
}
declare var NativeAlertManagerSpec: {

	prototype: NativeAlertManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeAnimatedModuleSpec extends RCTBridgeModule {

	addAnimatedEventToViewEventNameEventMapping(viewTag: number, eventName: string, eventMapping: any): void;

	addListener(eventName: string): void;

	connectAnimatedNodeToViewViewTag(nodeTag: number, viewTag: number): void;

	connectAnimatedNodesChildTag(parentTag: number, childTag: number): void;

	createAnimatedNodeConfig(tag: number, config: NSDictionary<any, any>): void;

	disconnectAnimatedNodeFromViewViewTag(nodeTag: number, viewTag: number): void;

	disconnectAnimatedNodesChildTag(parentTag: number, childTag: number): void;

	dropAnimatedNode(tag: number): void;

	extractAnimatedNodeOffset(nodeTag: number): void;

	flattenAnimatedNodeOffset(nodeTag: number): void;

	removeAnimatedEventFromViewEventNameAnimatedNodeTag(viewTag: number, eventName: string, animatedNodeTag: number): void;

	removeListeners(count: number): void;

	restoreDefaultValues(nodeTag: number): void;

	setAnimatedNodeOffsetOffset(nodeTag: number, offset: number): void;

	setAnimatedNodeValueValue(nodeTag: number, value: number): void;

	startAnimatingNodeNodeTagConfigEndCallback(animationId: number, nodeTag: number, config: NSDictionary<any, any>, endCallback: (p1: NSArray<any>) => void): void;

	startListeningToAnimatedNodeValue(tag: number): void;

	stopAnimation(animationId: number): void;

	stopListeningToAnimatedNodeValue(tag: number): void;
}
declare var NativeAnimatedModuleSpec: {

	prototype: NativeAnimatedModuleSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare const enum NativeAppearanceColorSchemeName {

	Light = 0,

	Dark = 1
}

declare function NativeAppearanceColorSchemeNameToNSString(folly: number): string;

interface NativeAsyncStorageSpec extends RCTBridgeModule {

	clear(callback: (p1: NSArray<any>) => void): void;

	getAllKeys(callback: (p1: NSArray<any>) => void): void;

	multiGetCallback(keys: NSArray<any> | any[], callback: (p1: NSArray<any>) => void): void;

	multiMergeCallback(kvPairs: NSArray<any> | any[], callback: (p1: NSArray<any>) => void): void;

	multiRemoveCallback(keys: NSArray<any> | any[], callback: (p1: NSArray<any>) => void): void;

	multiSetCallback(kvPairs: NSArray<any> | any[], callback: (p1: NSArray<any>) => void): void;
}
declare var NativeAsyncStorageSpec: {

	prototype: NativeAsyncStorageSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeBugReportingSpec extends RCTBridgeModule {

	setCategoryID(categoryID: string): void;

	setExtraDataExtraFiles(extraData: NSDictionary<any, any>, extraFiles: NSDictionary<any, any>): void;

	startReportAProblemFlow(): void;
}
declare var NativeBugReportingSpec: {

	prototype: NativeBugReportingSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeCameraRollManagerSpec extends RCTBridgeModule {

	deletePhotosResolveReject(assets: NSArray<any> | any[], resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	getPhotosResolveReject(params: any, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	saveToCameraRollTypeResolveReject(uri: string, type: string, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;
}
declare var NativeCameraRollManagerSpec: {

	prototype: NativeCameraRollManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeClipboardSpec extends RCTBridgeModule {

	getStringReject(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	setString(content: string): void;
}
declare var NativeClipboardSpec: {

	prototype: NativeClipboardSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeDevMenuSpec extends RCTBridgeModule {

	debugRemotely(enableDebug: boolean): void;

	reload(): void;

	setHotLoadingEnabled(enabled: boolean): void;

	setProfilingEnabled(enabled: boolean): void;

	show(): void;
}
declare var NativeDevMenuSpec: {

	prototype: NativeDevMenuSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeExceptionsManagerSpec extends RCTBridgeModule {

	dismissRedbox(): void;

	reportException(data: any): void;

	reportFatalExceptionStackExceptionId(message: string, stack: NSArray<any> | any[], exceptionId: number): void;

	reportSoftExceptionStackExceptionId(message: string, stack: NSArray<any> | any[], exceptionId: number): void;

	updateExceptionMessageStackExceptionId(message: string, stack: NSArray<any> | any[], exceptionId: number): void;
}
declare var NativeExceptionsManagerSpec: {

	prototype: NativeExceptionsManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeFrameRateLoggerSpec extends RCTBridgeModule {

	beginScroll(): void;

	endScroll(): void;

	setContext(context: string): void;

	setGlobalOptions(options: any): void;
}
declare var NativeFrameRateLoggerSpec: {

	prototype: NativeFrameRateLoggerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeImageEditorSpec extends RCTBridgeModule {

	cropImageCropDataSuccessCallbackErrorCallback(uri: string, cropData: any, successCallback: (p1: NSArray<any>) => void, errorCallback: (p1: NSArray<any>) => void): void;
}
declare var NativeImageEditorSpec: {

	prototype: NativeImageEditorSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeImagePickerIOSSpec extends RCTBridgeModule {

	canRecordVideos(callback: (p1: NSArray<any>) => void): void;

	canUseCamera(callback: (p1: NSArray<any>) => void): void;

	clearAllPendingVideos(): void;

	openCameraDialogSuccessCallbackCancelCallback(config: any, successCallback: (p1: NSArray<any>) => void, cancelCallback: (p1: NSArray<any>) => void): void;

	openSelectDialogSuccessCallbackCancelCallback(config: any, successCallback: (p1: NSArray<any>) => void, cancelCallback: (p1: NSArray<any>) => void): void;

	removePendingVideo(url: string): void;
}
declare var NativeImagePickerIOSSpec: {

	prototype: NativeImagePickerIOSSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeImageStoreSpec extends RCTBridgeModule {

	addImageFromBase64SuccessCallbackErrorCallback(base64ImageData: string, successCallback: (p1: NSArray<any>) => void, errorCallback: (p1: NSArray<any>) => void): void;

	getBase64ForTagSuccessCallbackErrorCallback(uri: string, successCallback: (p1: NSArray<any>) => void, errorCallback: (p1: NSArray<any>) => void): void;

	hasImageForTagCallback(uri: string, callback: (p1: NSArray<any>) => void): void;

	removeImageForTag(uri: string): void;
}
declare var NativeImageStoreSpec: {

	prototype: NativeImageStoreSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeKeyboardObserverSpec extends RCTBridgeModule {

	addListener(eventName: string): void;

	removeListeners(count: number): void;
}
declare var NativeKeyboardObserverSpec: {

	prototype: NativeKeyboardObserverSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeLinkingSpec extends RCTBridgeModule {

	addListener(eventName: string): void;

	canOpenURLResolveReject(url: string, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	getInitialURLReject(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	openSettingsReject(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	openURLResolveReject(url: string, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	removeListeners(count: number): void;

	sendIntentExtrasResolveReject(action: string, extras: NSArray<any> | any[], resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;
}
declare var NativeLinkingSpec: {

	prototype: NativeLinkingSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeModalManagerSpec extends RCTBridgeModule {

	addListener(eventName: string): void;

	removeListeners(count: number): void;
}
declare var NativeModalManagerSpec: {

	prototype: NativeModalManagerSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeNetworkingIOSSpec extends RCTBridgeModule {

	abortRequest(requestId: number): void;

	addListener(eventName: string): void;

	clearCookies(callback: (p1: NSArray<any>) => void): void;

	removeListeners(count: number): void;

	sendRequestCallback(query: any, callback: (p1: NSArray<any>) => void): void;
}
declare var NativeNetworkingIOSSpec: {

	prototype: NativeNetworkingIOSSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativePushNotificationManagerIOSSpec extends RCTBridgeModule {

	abandonPermissions(): void;

	addListener(eventType: string): void;

	cancelAllLocalNotifications(): void;

	cancelLocalNotifications(userInfo: NSDictionary<any, any>): void;

	checkPermissions(callback: (p1: NSArray<any>) => void): void;

	getApplicationIconBadgeNumber(callback: (p1: NSArray<any>) => void): void;

	getDeliveredNotifications(callback: (p1: NSArray<any>) => void): void;

	getInitialNotificationReject(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	getScheduledLocalNotifications(callback: (p1: NSArray<any>) => void): void;

	onFinishRemoteNotificationFetchResult(notificationId: string, fetchResult: string): void;

	presentLocalNotification(notification: any): void;

	removeAllDeliveredNotifications(): void;

	removeDeliveredNotifications(identifiers: NSArray<any> | any[]): void;

	removeListeners(count: number): void;

	requestPermissionsResolveReject(permission: any, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	scheduleLocalNotification(notification: any): void;

	setApplicationIconBadgeNumber(num: number): void;
}
declare var NativePushNotificationManagerIOSSpec: {

	prototype: NativePushNotificationManagerIOSSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeSegmentFetcherSpec extends RCTBridgeModule {

	fetchSegmentOptionsCallback(segmentId: number, options: NSDictionary<any, any>, callback: (p1: NSArray<any>) => void): void;

	getSegmentOptionsCallback(segmentId: number, options: NSDictionary<any, any>, callback: (p1: NSArray<any>) => void): void;
}
declare var NativeSegmentFetcherSpec: {

	prototype: NativeSegmentFetcherSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeShareModuleSpec extends RCTBridgeModule {

	shareDialogTitleResolveReject(content: any, dialogTitle: string, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;
}
declare var NativeShareModuleSpec: {

	prototype: NativeShareModuleSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeTVNavigationEventEmitterSpec extends RCTBridgeModule {

	addListener(eventName: string): void;

	removeListeners(count: number): void;
}
declare var NativeTVNavigationEventEmitterSpec: {

	prototype: NativeTVNavigationEventEmitterSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeTimePickerAndroidSpec extends RCTBridgeModule {

	openResolveReject(options: any, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;
}
declare var NativeTimePickerAndroidSpec: {

	prototype: NativeTimePickerAndroidSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeTimingSpec extends RCTBridgeModule {

	createTimerDurationJsSchedulingTimeRepeats(callbackID: number, duration: number, jsSchedulingTime: number, repeats: boolean): void;

	deleteTimer(timerID: number): void;

	setSendIdleEvents(sendIdleEvents: boolean): void;
}
declare var NativeTimingSpec: {

	prototype: NativeTimingSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeVibrationSpec extends RCTBridgeModule {

	cancel(): void;

	vibrate(pattern: number): void;

	vibrateByPatternRepeat(pattern: NSArray<any> | any[], repeat: number): void;
}
declare var NativeVibrationSpec: {

	prototype: NativeVibrationSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

interface NativeWebSocketModuleSpec extends RCTBridgeModule {

	addListener(eventName: string): void;

	closeReasonSocketID(code: number, reason: string, socketID: number): void;

	connectProtocolsOptionsSocketID(url: string, protocols: NSArray<any> | any[], options: any, socketID: number): void;

	ping(socketID: number): void;

	removeListeners(count: number): void;

	sendBinaryForSocketID(base64String: string, forSocketID: number): void;

	sendForSocketID(message: string, forSocketID: number): void;
}
declare var NativeWebSocketModuleSpec: {

	prototype: NativeWebSocketModuleSpec;

	moduleName(): string;

	requiresMainQueueSetup?(): boolean;
};

declare var facebook: number;

declare var facebookVar: number;

declare var facebookVar2: number;

declare var folly: number;

declare var follyVar: number;

declare var follyVar10: number;

declare var follyVar11: number;

declare var follyVar12: number;

declare var follyVar13: number;

declare var follyVar14: number;

declare var follyVar15: number;

declare var follyVar16: number;

declare var follyVar17: number;

declare var follyVar18: number;

declare var follyVar19: number;

declare var follyVar2: number;

declare var follyVar20: number;

declare var follyVar21: number;

declare var follyVar22: number;

declare var follyVar23: number;

declare var follyVar24: number;

declare var follyVar25: number;

declare var follyVar26: number;

declare var follyVar27: number;

declare var follyVar28: number;

declare var follyVar29: number;

declare var follyVar3: number;

declare var follyVar30: number;

declare var follyVar31: number;

declare var follyVar32: number;

declare var follyVar33: number;

declare var follyVar34: number;

declare var follyVar35: number;

declare var follyVar36: number;

declare var follyVar37: number;

declare var follyVar38: number;

declare var follyVar39: number;

declare var follyVar4: number;

declare var follyVar40: number;

declare var follyVar41: number;

declare var follyVar42: number;

declare var follyVar43: number;

declare var follyVar5: number;

declare var follyVar6: number;

declare var follyVar7: number;

declare var follyVar8: number;

declare var follyVar9: number;
