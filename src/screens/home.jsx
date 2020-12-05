import React from "react";

import { View, StatusBar, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import {
  Body,
  Circle,
  BodyContent,
  Header,
  MenuContent,
  HeaderTitle,
  Subtitle,
  UserTitle
} from "./styles/home";

import MenuCard from "../components/menuCard";

export default function Home({ navigation }) {
  const navigateToPaymentTab = () => {
    return navigation.navigate("Shop", {
      id: undefined,
    });
  };

  return (
    <Body>
      <BodyContent>
        <Header>
          <View style={{ paddingTop: 20, paddingLeft: 10 }}>
            <HeaderTitle>Welcome</HeaderTitle>
            <UserTitle>Hello, Jacob Jones</UserTitle>
            <Subtitle>The Future of Gaming</Subtitle>
          </View>
          <View style={{ position: "relative", top: -22, right: -25 }}>
            <Circle height={150} color="rgba(255,255,255, 0.5)">
              <Circle height={100} color="rgba(255,255,255, 0.4)">
                <Circle height={60} color="rgba(255,255,255, 0.2)">
                  <TouchableOpacity onPress={navigateToPaymentTab}>
                    <Feather name="shopping-cart" size={24} color="#fff" />
                  </TouchableOpacity>
                </Circle>
              </Circle>
            </Circle>
          </View>
        </Header>
        <MenuContent>
          <MenuCard navigation={navigation} />
        </MenuContent>
      </BodyContent>
      <StatusBar barStyle="dark-content"/>
    </Body>
  );
}
