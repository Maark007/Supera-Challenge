import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
  background: #006fcd;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #ddd;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin: 10px 0;
  padding: 0 15px;
  color: #000;
  background-color: #fff;
  height: 50px;
  border-radius: 10px;
  position: relative;
`;

export const InputView = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;
`;