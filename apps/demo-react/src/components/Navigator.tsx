import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Home } from "./HomeScreen";
import { BasicScreen } from "./BasicScreen";
import { UIScreen } from "./UIScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="ui"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen options={{ title: "Home" }} name="home" component={Home} />
            <StackNavigator.Screen options={{ title: "API tests" }} name="basic" component={BasicScreen} />
            <StackNavigator.Screen options={{ title: "UI tests" }} name="ui" component={UIScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
