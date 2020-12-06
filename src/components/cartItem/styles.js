import styled from "styled-components/native";

export const Body = styled.View`
  padding: 10px 0;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0px 0 15px 0;
`;

export const Image = styled.Image`
  height: 130px;
  width: 100px;
`;

export const Description = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  height: 130px;
  padding: 20px 16px;
`;

export const Title = styled.Text`
  font-size: 17px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #0009;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border-width: 1px;
  border-color: red;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: red;
`;

export const NoItemsBox = styled.View`
  align-items: center;
  justify-content: center;
  padding: 50px 15px;
`;

export const NoItemsText = styled.Text`
  font-size: 19px;
`;
