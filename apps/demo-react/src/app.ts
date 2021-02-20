import * as React from 'react';
/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false });
import * as ReactNativeScript from 'react-nativescript';
import { mainStackNavigator as AppContainer } from './components/Navigator';
// import { MyDelegate } from './AppDelegate';
// import { Application } from '@nativescript/core';
// Application.ios.delegate = MyDelegate;

console.log(`App entrypoint!`);

/**
 * Our log here doesn't get executed, as the app hits a JS exception first.
 * 
 * The first problem is that global.__fbBatchedBridgeConfig is undefined.
 * 
 * If you simply provide an empty object, react-native/Libraries/TurboModule/TurboModuleRegistry.js complains that the native module hasn't been registered into that config.
 * BatchedBridge/NativeModules.js is also relevant, but I've lost track of why.
 * 
 * Jest shows here how to mock fbBatchedBridgeConfig: https://github.com/facebook/react-native/blob/b28fa2dae061cff829e00afec565fe8a05ef0a5a/jest/setup.js#L177
 * But when used for real, it's assigned by constructing RCTObcExecutor via an RCTObjcExecutorFactory: https://github.com/facebook/react-native/blob/6e6443afd04a847ef23fb6254a84e48c70b45896/React/CxxBridge/RCTObjcExecutor.mm#L67
 * This indeed occurs here, in the "start" method of RCTCxxBridge: https://github.com/facebook/react-native/blob/d02211cbce9ec268002eb6df4c6433f11475ce19/React/CxxBridge/RCTCxxBridge.mm#L448
 * RCTCxxBridge is actually available to NativeScript, and inherits the "start" method from its superclass, RCTBridge. It only otherwise exposes initWithParentBridge().
 * initWithParentBridge() is called by [RCTBridge setUp]: https://github.com/facebook/react-native/blob/8fe25fcd5b14ffadef3195c486b2046b83628b47/React/Base/RCTBridge.m#L317
 * [RCTBridge setup] is called by [RCTBridge initWithDelegateBundleURLModuleProviderLaunchOptions], which happens here: https://github.com/facebook/react-native/blob/8fe25fcd5b14ffadef3195c486b2046b83628b47/React/Base/RCTBridge.m#L197
 * This is exactly what we call in the first line of our App Delegate's applicationDidFinishLaunchingWithOptions!
 * 
 * The next problem is that the TurboModuleRegistry starts fishing around for native modules before our app.ts gets to run.
 * This is very irritating, as it means that some JS vendor code is running before our userland code. And we can only set our AppDelegate within the userland code.
 * 
 * Following the rabbit hole, it seems that this is all ultimately due to the side-effects of InitializeCore: https://github.com/facebook/react-native/blob/6e6443afd04a847ef23fb6254a84e48c70b45896/Libraries/Core/InitializeCore.js
 * 
 * Interestingly, that file itself is just a barrel of polyfills. The React team themself say you can pick-and-choose what you need if appropriate: https://github.com/facebook/react-native/blob/0a28b34dacb91a7e74cd5feec59cf8f8fb0487c9/Libraries/Core/polyfillPromise.js#L19-L20
 * 
 * So instead, we could just stop importing InitializeCore and instead import just the bits we need before setting up our AppDelegate.
 * 
 */

ReactNativeScript.start(React.createElement(AppContainer, {}, null));

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
