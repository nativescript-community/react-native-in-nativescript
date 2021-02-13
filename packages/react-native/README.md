# @nativescript-community/react-native

```javascript
ns plugin add @nativescript-community/react-native
```

## Usage

// TODO

## Typings

### Android

See comments in the typings file about how I generated them.

### iOS

I generated the iOS typings using:

```sh
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" ns build ios
```

I included all the `.d.ts` files that seemed to have come from React Native (rather than from Apple's SDKs), but I may have missed some. Here's the full set that were generated. If I missed any, please tell me and I'll commit the typing to the repo.

<details> 
    <summary>All Obj-C libraries found</summary>
    <code>
        objc!ARKit.d.ts<br>
        objc!AVFoundation.d.ts<br>
        objc!AVKit.d.ts<br>
        objc!Accelerate.d.ts<br>
        objc!Accessibility.d.ts<br>
        objc!Accounts.d.ts<br>
        objc!AdServices.d.ts<br>
        objc!AdSupport.d.ts<br>
        objc!AddressBook.d.ts<br>
        objc!AddressBookUI.d.ts<br>
        objc!AppClip.d.ts<br>
        objc!AppTrackingTransparency.d.ts<br>
        objc!AppleArchive.d.ts<br>
        objc!AppleTextureEncoder.d.ts<br>
        objc!AssetsLibrary.d.ts<br>
        objc!AudioToolbox.d.ts<br>
        objc!AuthenticationServices.d.ts<br>
        objc!AutomaticAssessmentConfiguration.d.ts<br>
        objc!BackgroundTasks.d.ts<br>
        objc!BusinessChat.d.ts<br>
        objc!CFNetwork.d.ts<br>
        objc!CallKit.d.ts<br>
        objc!CarPlay.d.ts<br>
        objc!ClassKit.d.ts<br>
        objc!ClockKit.d.ts<br>
        objc!CloudKit.d.ts<br>
        objc!CommonCrypto.d.ts<br>
        objc!Compression.d.ts<br>
        objc!Contacts.d.ts<br>
        objc!ContactsUI.d.ts<br>
        objc!CoreAudioKit.d.ts<br>
        objc!CoreAudioTypes.d.ts<br>
        objc!CoreBluetooth.d.ts<br>
        objc!CoreData.d.ts<br>
        objc!CoreFoundation.d.ts<br>
        objc!CoreGraphics.d.ts<br>
        objc!CoreHaptics.d.ts<br>
        objc!CoreImage.d.ts<br>
        objc!CoreLocation.d.ts<br>
        objc!CoreMIDI.d.ts<br>
        objc!CoreML.d.ts<br>
        objc!CoreMedia.d.ts<br>
        objc!CoreModules.d.ts<br>
        objc!CoreMotion.d.ts<br>
        objc!CoreNFC.d.ts<br>
        objc!CoreServices.d.ts<br>
        objc!CoreSpotlight.d.ts<br>
        objc!CoreTelephony.d.ts<br>
        objc!CoreText.d.ts<br>
        objc!CoreVideo.d.ts<br>
        objc!CryptoTokenKit.d.ts<br>
        objc!Darwin.d.ts<br>
        objc!DeveloperToolsSupport.d.ts<br>
        objc!DeviceCheck.d.ts<br>
        objc!Dispatch.d.ts<br>
        objc!DispatchIntrospection.d.ts<br>
        objc!DoubleConversion.d.ts<br>
        objc!EventKit.d.ts<br>
        objc!EventKitUI.d.ts<br>
        objc!ExposureNotification.d.ts<br>
        objc!ExternalAccessory.d.ts<br>
        objc!FBReactNativeSpec.d.ts<br>
        objc!FileProvider.d.ts<br>
        objc!FileProviderUI.d.ts<br>
        objc!Foundation.d.ts<br>
        objc!GLKit.d.ts<br>
        objc!GSS.d.ts<br>
        objc!GameController.d.ts<br>
        objc!GameKit.d.ts<br>
        objc!GameplayKit.d.ts<br>
        objc!HealthKit.d.ts<br>
        objc!HealthKitUI.d.ts<br>
        objc!HomeKit.d.ts<br>
        objc!ICU.d.ts<br>
        objc!IOSurface.d.ts<br>
        objc!IdentityLookup.d.ts<br>
        objc!IdentityLookupUI.d.ts<br>
        objc!ImageCaptureCore.d.ts<br>
        objc!ImageIO.d.ts<br>
        objc!Intents.d.ts<br>
        objc!IntentsUI.d.ts<br>
        objc!JavaScriptCore.d.ts<br>
        objc!LinkPresentation.d.ts<br>
        objc!LocalAuthentication.d.ts<br>
        objc!MDFInternationalization.d.ts<br>
        objc!MachO.d.ts<br>
        objc!MapKit.d.ts<br>
        objc!MaterialComponents.d.ts<br>
        objc!MediaAccessibility.d.ts<br>
        objc!MediaPlayer.d.ts<br>
        objc!MediaToolbox.d.ts<br>
        objc!MessageUI.d.ts<br>
        objc!Messages.d.ts<br>
        objc!Metal.d.ts<br>
        objc!MetalKit.d.ts<br>
        objc!MetalPerformanceShaders.d.ts<br>
        objc!MetalPerformanceShadersGraph.d.ts<br>
        objc!MetricKit.d.ts<br>
        objc!ModelIO.d.ts<br>
        objc!MultipeerConnectivity.d.ts<br>
        objc!NativeScriptEmbedder.d.ts<br>
        objc!NaturalLanguage.d.ts<br>
        objc!NearbyInteraction.d.ts<br>
        objc!Network.d.ts<br>
        objc!NetworkExtension.d.ts<br>
        objc!NewsstandKit.d.ts<br>
        objc!NotificationCenter.d.ts<br>
        objc!OSLog.d.ts<br>
        objc!ObjectiveC.d.ts<br>
        objc!OpenAL.d.ts<br>
        objc!OpenGLES.d.ts<br>
        objc!PDFKit.d.ts<br>
        objc!PassKit.d.ts<br>
        objc!PencilKit.d.ts<br>
        objc!Photos.d.ts<br>
        objc!PhotosUI.d.ts<br>
        objc!Pods_demoreact.d.ts<br>
        objc!PushKit.d.ts<br>
        objc!QuartzCore.d.ts<br>
        objc!QuickLook.d.ts<br>
        objc!QuickLookThumbnailing.d.ts<br>
        objc!RCTAnimation.d.ts<br>
        objc!RCTBlob.d.ts<br>
        objc!RCTImage.d.ts<br>
        objc!RCTLinking.d.ts<br>
        objc!RCTNetwork.d.ts<br>
        objc!RCTSettings.d.ts<br>
        objc!RCTText.d.ts<br>
        objc!RCTTypeSafety.d.ts<br>
        objc!RCTVibration.d.ts<br>
        objc!React.d.ts<br>
        objc!ReactCommon.d.ts<br>
        objc!ReplayKit.d.ts<br>
        objc!SQLite3.d.ts<br>
        objc!SafariServices.d.ts<br>
        objc!SceneKit.d.ts<br>
        objc!ScreenTime.d.ts<br>
        objc!Security.d.ts<br>
        objc!SensorKit.d.ts<br>
        objc!Social.d.ts<br>
        objc!SoundAnalysis.d.ts<br>
        objc!Speech.d.ts<br>
        objc!SpriteKit.d.ts<br>
        objc!StoreKit.d.ts<br>
        objc!SystemConfiguration.d.ts<br>
        objc!TNSWidgets.d.ts<br>
        objc!Twitter.d.ts<br>
        objc!UIKit.d.ts<br>
        objc!UniformTypeIdentifiers.d.ts<br>
        objc!UserNotifications.d.ts<br>
        objc!UserNotificationsUI.d.ts<br>
        objc!VideoSubscriberAccount.d.ts<br>
        objc!VideoToolbox.d.ts<br>
        objc!Vision.d.ts<br>
        objc!VisionKit.d.ts<br>
        objc!WatchConnectivity.d.ts<br>
        objc!WebKit.d.ts<br>
        objc!WidgetKit.d.ts<br>
        objc!_Builtin_intrinsics.d.ts<br>
        objc!asl.d.ts<br>
        objc!cxxreact.d.ts<br>
        objc!dnssd.d.ts<br>
        objc!folly.d.ts<br>
        objc!glog.d.ts<br>
        objc!iAd.d.ts<br>
        objc!jsi.d.ts<br>
        objc!jsinspector.d.ts<br>
        objc!jsireact.d.ts<br>
        objc!libkern.d.ts<br>
        objc!libxml2.d.ts<br>
        objc!os.d.ts<br>
        objc!os_object.d.ts<br>
        objc!os_workgroup.d.ts<br>
        objc!simd.d.ts<br>
        objc!yoga.d.ts<br>
        objc!zlib.d.ts
    </code>
</details>

## License

Apache License Version 2.0
