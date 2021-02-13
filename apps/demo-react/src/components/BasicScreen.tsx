import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";
import { ListView, StyleSheet } from "react-nativescript";
import { Dialogs, isAndroid } from "@nativescript/core";

type ContactsScreenProps = {
    route: RouteProp<MainStackParamList, "basic">,
    navigation: FrameNavigationProp<MainStackParamList, "basic">,
}

interface MyItem {
    label: string,
    callback?: () => void;
}

function errorHandler(error: any): Promise<void> {
    console.error(error);
    Dialogs.alert(`Error: ${error.message || error}`);
    return Promise.resolve();
}

const items: MyItem[] = [
    {
        label: `Sanity test`,
        callback: () => {
            if(isAndroid){
                for(let key in com.facebook){
                    console.log(`com.facebook.${key}`);
                }
                return;
            }
            console.log(`Sanity check not yet implemented for iOS (plugin only implemented for Android).`);
        },
    },
];

const cellFactory = (item: MyItem) => {
    return <label style={styles.label}>{item.label}</label>;
};

export function BasicScreen({ navigation }: ContactsScreenProps) {
    const onItemTap = (args: ItemEventData) => {
        const index: number = args.index;
        const item: MyItem = items[index];
        item.callback?.();
    };

    return (
        <ListView
            width={"100%"}
            height={"100%"}
            items={items}
            cellFactory={cellFactory}
            onItemTap={onItemTap}
        />
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
    }
});
