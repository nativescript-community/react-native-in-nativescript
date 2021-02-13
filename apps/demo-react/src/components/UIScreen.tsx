import * as React from "react";
import { useRef } from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { EventData, StackLayout } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";
import { StyleSheet, NSVElement } from "react-nativescript";

type UIScreenProps = {
    route: RouteProp<MainStackParamList, "ui">,
    navigation: FrameNavigationProp<MainStackParamList, "ui">,
}

const nativeViews: Set<any> = new Set();

function makeDistinctNativeViewIos(size: CGSize): RCTView {
    function randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomUIColor(): UIColor {
        const hue = randomIntFromInterval(0, 100) / 100; // 0.0 to 1.0
        const saturation = randomIntFromInterval(50, 100) / 100; // 0.5 to 1.0, away from white
        const brightness = randomIntFromInterval(50, 100) / 100; // 0.5 to 1.0, away from black
        
        return UIColor.colorWithHueSaturationBrightnessAlpha(
            hue,
            saturation,
            brightness,
            1
        );
    }

    const rctView = RCTView.alloc().initWithFrame(
        CGRectMake(0, 0, randomIntFromInterval(100, size.width), randomIntFromInterval(100, size.height))
    );
    rctView.backgroundColor = randomUIColor();
    nativeViews.add(rctView); // So that we can easily remove it later.

    return rctView;
}

function onTest1Tap(canvas: StackLayout|undefined): void {
    if(!canvas){
        return; // View hasn't mounted yet (somehow).
    }

    if(isAndroid){
        const canvasNativeView: org.nativescript.widgets.StackLayout = canvas.android;
        if(!canvasNativeView){
            return; // Android native view hasn't loaded yet (somehow).
        }

        console.log(`TODO: implement Android`);
        return;
    }

    const canvasNativeView: UIView = canvas.ios;
    if(!canvasNativeView){
        return; // iOS native view hasn't loaded yet (somehow).
    }

    const rctView = makeDistinctNativeViewIos(canvasNativeView.bounds.size);
    canvasNativeView.addSubview(rctView);
    console.log("Inserting:", rctView);
}

function cleanUp(): void {
    if(isAndroid){
        console.log(`TODO: implement Android`);
        return;
    }

    nativeViews.forEach(view => {
        (view as UIView).removeFromSuperview();
        nativeViews.delete(view);
    });
}

export function UIScreen({ navigation }: UIScreenProps){
    const canvasRef = useRef<NSVElement<StackLayout>>(null);

    return (
        <flexboxLayout
            style={{
                ...styles.fullSize,
                ...styles.mainColumn,
            }}
        >
            <button
                style={styles.button}
                onTap={(args: EventData) => onTest1Tap(canvasRef.current?.nativeView ?? void 0)}
            >
                Insert native view
            </button>
            <button
                style={styles.button}
                onTap={cleanUp}
            >
                Clean up
            </button>
            <label style={styles.label}>Below is a blank area to play with.</label>
            <stackLayout ref={canvasRef} style={styles.canvas}>
                {/* We'll shove native views in here. */}
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    fullSize: {
        width: "100%",
        height: "100%",
    },
    mainColumn: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    canvas: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "rgba(240,240,240)",
    },
    button: {
        borderRadius: 16,
        padding: 12,
        backgroundColor: "rgba(240,240,240)",
    },
    label: {
        fontSize: 14,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
    }
});
