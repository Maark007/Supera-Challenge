import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/home";

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
