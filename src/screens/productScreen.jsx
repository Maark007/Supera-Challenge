import React from "react";

import { Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { products } from "../model/products";
import {
  Body,
  ProductContainer,
  ProductContent,
  Header,
  ReturnButton,
  ProductDetails,
  HeaderContent,
  ImageContent,
  TitleBox,
  Title,
  DescriptionBox,
  Description,
  DescriptionTitle,
  Rate,
  RateTitle,
  ButtonBox,
  Button,
  ButtonText,
} from "./styles/productScreen";

export default function ProductScreen({ route, navigation }) {
  const { id } = route.params;
  const returnToMenu = () => {
    return navigation.navigate("Home");
  };
  const directToShopCart = () => {
    return navigation.navigate("Shop", {
      id: id,
    });
  };

  return (
    <Body>
        {products.map((product) => {
          if (product.id === id) {
            return (
              <>
                <ProductContainer key={product.id}>
                  <Image
                    source={product.background}
                    style={imageResizeStyles}
                    blurRadius={2.3}
                  />
                </ProductContainer>
                <ProductContent>
                  <Header>
                    <ReturnButton onPress={returnToMenu}>
                      <Ionicons name="ios-arrow-back" size={24} color="#fff" />
                    </ReturnButton>
                  </Header>
                  <HeaderContent>
                    <ImageContent>
                      <Image source={product.image} style={imageResizeStyles} />
                    </ImageContent>
                  </HeaderContent>
                  <ProductDetails>
                    <TitleBox>
                      <Title>{product.name}</Title>
                    </TitleBox>
                    <DescriptionBox>
                      <DescriptionTitle>About</DescriptionTitle>
                      <Description>{product.description}</Description>
                      <Rate>
                        <RateTitle>R$ {product.price}</RateTitle>
                      </Rate>
                    </DescriptionBox>
                    <ButtonBox>
                      <Button onPress={directToShopCart}>
                        <ButtonText>Comprar</ButtonText>
                      </Button>
                    </ButtonBox>
                  </ProductDetails>
                </ProductContent>
              </>
            );
          }
        })}
    </Body>
  );
}

const imageResizeStyles = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: "cover",
  borderRadius: 5,
};
