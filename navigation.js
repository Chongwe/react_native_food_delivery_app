import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestauruantScreen from "./screens/RestauruantScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restauruant" component={RestauruantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
