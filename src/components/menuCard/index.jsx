import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import Arrow from "../../assets/svgs/arrow-down-icon.svg";

import { Image, View } from "react-native";
import { products } from "../../model/products";
import { AntDesign } from "@expo/vector-icons";
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
  Subtitle,
  RateBox,
  PickerView,
} from "./styles";

export default function MenuCard({ navigation }) {
  const [selectedPickerValue, setSelectedPickerValue] = useState("Filtros");

  const navigateToProductScreen = (id) => {
    return navigation.navigate("ProductScreen", {
      id: id,
    });
  };

  const productData = () => {
    switch (selectedPickerValue) {
      case "maior-preço":
        return products.sort((a, b) => b.price - a.price);
      case "menor-preço":
        return products.sort((a, b) => a.price - b.price);
      case "popularidade":
        return products.sort((a, b) => b.score - a.score);
      case "A-Z":
        return products.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));
      case "Z-A":
        return products.sort((a, b) => (a.name[0] > b.name[0] ? -1 : 1));
      default:
        return products;
    }
  };

  return (
    <Body>
      <Header>
        <HeaderTitle>Games</HeaderTitle>
        <PickerView>
          <RNPickerSelect
            onValueChange={(value) => setSelectedPickerValue(value)}
            items={[
              { label: "Maior Preço", value: "maior-preço" },
              { label: "Menor Preço", value: "menor-preço" },
              { label: "Popularidade", value: "popularidade" },
              { label: "A-Z", value: "A-Z" },
              { label: "Z-A", value: "Z-A" },
            ]}
            value="Filtrar"
            style={{
              placeholder: { color: "#000" },
              inputIOS: { color: "#000" },
              inputAndroid: { color: "#000" },
            }}
            placeholder={{
              label: "Filtrar",
              value: selectedPickerValue,
              color: "blue",
            }}
            Icon={() => {
              return <Arrow height={20} width={12} style={{ margin: 15 }}/>;
            }}
          />
        </PickerView>
      </Header>
      {productData().map((product, i) => {
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
                <Description>
                  <RateBox>
                    <View style={{ marginRight: 5 }}>
                      <AntDesign name="star" size={16} color="yellow" />
                    </View>
                    <Subtitle>{product.score}</Subtitle>
                  </RateBox>
                  <Subtitle>R$ {product.price}</Subtitle>
                </Description>
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
