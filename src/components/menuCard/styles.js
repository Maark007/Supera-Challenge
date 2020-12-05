import styled from "styled-components/native";

export const Body = styled.ScrollView`
  padding: 5px 10px 5px;
`;

export const ProductContainer = styled.TouchableOpacity`
  height: 230px;
  align-items: center;
  justify-content: flex-end;
`;

export const ProductImage = styled.View`
  position: absolute;
  z-index: 10;
  left: 10px;
  bottom: 10px;
  height: 190px;
  width: 135px;
`;

export const ProductContent = styled.View`
  border-radius: 5px;
  height: 126px;
  width: 100%;
  max-width: 350px;
  background: #213651;
  align-items: flex-end;
`;

export const ProductTitle = styled.View`
  padding: 10px;
  height: 100%;
  width: 55%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Description = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Header = styled.View`
  padding: 21px 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 21px;
`;

export const Picker = styled.Picker`
  height: 50px;
  width: 150px;
  border: 1px solid #000;
`;
