import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import ShopPayment from "./screens/shop";
import ProductScreen from "./screens/productScreen";
import Login from "./screens/login";

const Tab = createStackNavigator();

export default function Navigation() {
  const [userName, setUsername] = useState(undefined);
  const [buyedProducts, setBuyedProducts] = useState([]);

  return (
    <Tab.Navigator headerMode="screen" initialRouteName="Login">
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {(props) => (
          <Home {...props} navigation={props.navigation} userName={userName} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Shop" options={{ headerShown: false }}>
        {(props) => (
          <ShopPayment
            {...props}
            navigation={props.navigation}
            setBuyedProducts={setBuyedProducts}
            buyedProducts={buyedProducts}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="ProductScreen" options={{ headerShown: false }}>
        {(props) => <ProductScreen {...props} navigation={props.navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Login" options={{ headerShown: false }}>
        {(props) => (
          <Login
            {...props}
            navigation={props.navigation}
            setUsername={setUsername}
            userName={userName}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
