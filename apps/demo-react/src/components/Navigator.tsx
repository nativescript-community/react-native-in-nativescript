import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Home } from "./HomeScreen";
import { BasicScreen } from "./BasicScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="basic"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen options={{ title: "Home" }} name="home" component={Home} />
            <StackNavigator.Screen options={{ title: "Basic tests" }} name="basic" component={BasicScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
