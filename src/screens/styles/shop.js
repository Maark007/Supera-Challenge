import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #0141df;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const MenuItems = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ greenColor }) => (greenColor ? "green" : "#0009")};
  font-weight: ${({ weight }) => (weight ? "bold" : 100)};
`;

export const TitleBox = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 16px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 95%;
  max-width: 400px;
  height: 50px;
  background: #006fcd;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProductsContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ScrollContent = styled.ScrollView``;
