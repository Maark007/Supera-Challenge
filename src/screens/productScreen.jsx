import React from "react";

import { Image, View } from "react-native";
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

  const directToShopCart = (product) => {
    return navigation.navigate("Shop", {
      product: product,
    });
  };

  return (
    <Body>
      {products.map((product, i) => {
        if (product.id === id) {
          return (
            <View style={{ flex: 1 }} key={i}>
              <ProductContainer>
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
                    <Description>{product.description}</Description>
                    <Rate>
                      <RateTitle>R$ {product.price}</RateTitle>
                    </Rate>
                  </DescriptionBox>
                  <ButtonBox>
                    <Button onPress={() => directToShopCart(product)}>
                      <ButtonText>Comprar</ButtonText>
                    </Button>
                  </ButtonBox>
                </ProductDetails>
              </ProductContent>
            </View>
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
