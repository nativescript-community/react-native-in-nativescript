declare var __DEV__: boolean;

@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate, RCTBridgeDelegate {
    static ObjCProtocols = [UIApplicationDelegate, RCTBridgeDelegate];

    window?: UIWindow;

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        const bridge: RCTBridge = RCTBridge.alloc().initWithDelegateLaunchOptions(this, launchOptions);
        const initialProperties: NSDictionary<string, any>|null = null;
        const rootView: RCTRootView = RCTRootView.alloc().initWithBridgeModuleNameInitialProperties(
            bridge,
            "demo",
            initialProperties
        );
        rootView.backgroundColor = UIColor.alloc().initWithRedGreenBlueAlpha(1, 1, 1, 1);
        this.window = UIWindow.alloc().initWithFrame(UIScreen.mainScreen.bounds);
        const rootViewController: UIViewController = UIViewController.alloc().init();
        rootViewController.view = rootView;
        this.window.rootViewController = rootViewController;
        this.window.makeKeyAndVisible();

        return true;
    }

    sourceURLForBridge(bridge: RCTBridge): NSURL {
        if(__DEV__){
            return RCTBundleURLProvider.sharedSettings().jsBundleURLForBundleRootFallbackResource("index", null);
        }
        return NSBundle.mainBundle.URLForResourceWithExtension("main", "jsbundle");
    }
}

export { MyDelegate };