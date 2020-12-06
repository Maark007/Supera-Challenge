import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
`;

export const ProductContainer = styled.View`
  background: #000;
  flex: 1;
  position: relative;
`;

export const ProductContent = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  position: absolute;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 15px 16px;
`;

export const ReturnButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #0009;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductDetails = styled.View`
  width: 100%;
  height: 270px;
  background: #fff;
  border-top-left-radius: 50px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageContent = styled.View`
  height: 202px;
  width: 162px;
  margin-bottom: 20px;
`;

export const TitleBox = styled.View`
  align-items: center;
  justify-content: center;
  padding: 25px 10px 0 10px;
  text-align: center;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 21px;
`;

export const DescriptionBox = styled.View`
  padding: 20px 16px 0 16px;
  text-align: justify;
`;

export const Description = styled.Text`
  color: #0009;
  font-size: 15px;
  text-align: justify;
`;

export const Rate = styled.View`
  margin-top: 10px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const RateTitle = styled.Text`
  color: #0009;
  font-size: 17.3px;
  margin-right: 5px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  border-radius: 10px;
  height: 45px;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;
