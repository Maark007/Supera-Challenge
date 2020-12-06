import React from "react";

import {
  Body,
  Button,
  ButtonText,
  InputContainer,
  Input,
  InputView,
} from "./styles/login";
import { StatusBar, Alert } from "react-native";

import UserIcon from "../assets/svgs/avatar.svg";

export default function Login({ setUsername, navigation, userName }) {
  const goHomeScreen = () => {
    if (userName) return navigation.navigate("Home");
    if (!userName)
      return Alert.alert(
        "Usuário não encontrado.",
        "Escreva seu nome para prosseguirmos."
      );
  };

  return (
    <Body>
      <UserIcon width={160} height={160} />
      <InputContainer>
        <InputView>
          <Input
            onChangeText={(text) => setUsername(text)}
            placeholder="Digite seu Nome"
            placeholderTextColor="#0009"
            maxLength={8}
          />
        </InputView>
        <Button onPress={goHomeScreen}>
          <ButtonText>Login</ButtonText>
        </Button>
      </InputContainer>
      <StatusBar barStyle="light-content" />
    </Body>
  );
}
