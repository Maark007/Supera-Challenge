import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import ShopPayment from "./screens/shop";
import ProductScreen from "./screens/productScreen";

export default function Navigation() {
  const Tab = createStackNavigator();

  return (
    <Tab.Navigator headerMode="screen">

      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <Home {...props} navigation={props.navigation} />}
      </Tab.Screen>
      
      <Tab.Screen name="Shop">
        {(props) => <ShopPayment {...props} navigation={props.navigation} />}
      </Tab.Screen>
      
      <Tab.Screen name="ProductScreen" options={{ headerShown: false }}>
        {(props) => <ProductScreen {...props} navigation={props.navigation} />}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
