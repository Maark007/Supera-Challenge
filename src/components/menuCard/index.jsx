import React, { useState } from "react";

import { Image } from "react-native";
import { products } from "../../model/products";
import {
  Body,
  Header,
  HeaderTitle,
  ProductContent,
  ProductContainer,
  ProductImage,
  ProductTitle,
  Title,
  Description,
  Picker,
} from "./styles";

export default function MenuCard({ navigation }) {
  const [selectedPickerValue, setSelectedPickerValue] = useState("Filtros");

  const navigateToProductScreen = (id) => {
    return navigation.navigate("ProductScreen", {
      id: id,
    });
  };

  return (
    <Body>
      <Header>
        <HeaderTitle>Games</HeaderTitle>
        <Picker
          selectedValue={selectedPickerValue}
          onValueChange={(itemValue) => setSelectedPickerValue(itemValue)}
        >
          <Picker.Item label="Maior Preço" value="maior-preço" />
          <Picker.Item label="Menor Preço" value="menor-preço" />
          <Picker.Item label="Popularidade" value="popularidade" />
          <Picker.Item label="A-Z" value="A-Z" />
          <Picker.Item label="Z-A" value="Z-A" />
        </Picker>
      </Header>
      {products.map((product, i) => {
        return (
          <ProductContainer
            key={i}
            onPress={() => navigateToProductScreen(product.id)}
          >
            <ProductContent>
              <ProductImage>
                <Image style={image} source={product.image} />
              </ProductImage>
              <ProductTitle>
                <Title>{product.name}</Title>
                <Description></Description>
              </ProductTitle>
            </ProductContent>
          </ProductContainer>
        );
      })}
    </Body>
  );
}

const image = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: "cover",
  borderRadius: 5,
};
