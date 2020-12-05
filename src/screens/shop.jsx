import React from "react";
import { Text } from "react-native";

export default function Shop({ route }) {
  const { id } = route.params;
  return <Text>{id}</Text>;
}
