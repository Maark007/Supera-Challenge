import React from "react";

import { View, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Body,
  Circle,
  BodyContent,
  Header,
  MenuContent,
  HeaderTitle,
  Subtitle,
  UserTitle,
} from "./styles/home";

import MenuCard from "../components/menuCard";

export default function Home({ navigation, userName }) {
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
            <UserTitle>Hello, {userName}</UserTitle>
            <Subtitle>The Future of Gaming</Subtitle>
          </View>
          <View style={{ position: "relative", top: -22, right: -25 }}>
            <Circle height='150px' color={circleColors.bigCircle}>
              <Circle height='100px' color={circleColors.mediumCircle}>
                <Circle height='60px' color={circleColors.littleCircle}>
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
      <StatusBar barStyle="light-content" />
    </Body>
  );
}

const circleColors = {
  bigCircle: "rgba(255,255,255, 0.5)",
  mediumCircle: "rgba(255,255,255, 0.3)",
  littleCircle: "rgba(255,255,255, 0.2)",
};
