import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import RestaurantDetail from "./screens/RestaurantDetail";
import Home from "./screens/Home";

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="RestaurantDetail"
                    component={RestaurantDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
