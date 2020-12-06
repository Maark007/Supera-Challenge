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

export const Header = styled.View`
  padding: 10px 10px 5px 10px;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 21px;
  padding-left: 5px;
  margin-bottom: 15px;
`;

export const Description = styled.View`
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;
`;

export const RateBox = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  color: #fff;
  margin: 3px 0;
`;

export const PickerView = styled.View`
  border-width: 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
`;
