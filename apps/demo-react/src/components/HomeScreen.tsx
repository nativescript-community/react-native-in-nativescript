import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { ListView, StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "home">,
    navigation: FrameNavigationProp<MainStackParamList, "home">,
}

interface MyItem {
    label: string,
    route: keyof MainStackParamList,
}
const items: MyItem[] = [
    {
        label: "Basic tests",
        route: "basic",
    },
];

const cellFactory = (item: MyItem) => {
    return <label style={styles.label}>{item.label}</label>;
};

export function Home({ navigation }: HomeScreenProps) {
    const onItemTap = (args: ItemEventData) => {
        const index: number = args.index;
        const item: MyItem = items[index];
        navigation.navigate(item.route);
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
        fontSize: 22,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
    }
});
