import React, { useEffect, useState } from "react";

import CartItem from "../components/cartItem";
import CartIcon from "../assets/svgs/cart-icon.svg";

import { StatusBar, TouchableOpacity, View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Body,
  Header,
  HeaderTitle,
  MenuItems,
  Title,
  TitleBox,
  ButtonContainer,
  Button,
  ButtonText,
  ProductsContainer,
} from "./styles/shop";

export default function Shop({
  route,
  navigation,
  buyedProducts,
  setBuyedProducts,
}) {
  const { product } = route.params;

  const [refreshProducts, setRefreshProducts] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [frete, setFrete] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (product) {
      setBuyedProducts((prev) => [...prev, product]);
    }
  }, [product]);

  useEffect(() => {
    if (buyedProducts.length !== 0) {
      const price = buyedProducts.map((product) => product.price);
      const value = price.reduce((value, acc) => {
        const fixedValue = value + acc;
        return fixedValue;
      });
      return setSubtotal(value);
    }
  }, [buyedProducts, refreshProducts]);

  useEffect(() => {
    if (buyedProducts.length !== 0) {
      const numberOfProducts = buyedProducts.length;
      const freightValue = 10 * numberOfProducts;
      setFrete(freightValue);
    }
  }, [buyedProducts, refreshProducts]);

  useEffect(() => {
    if (buyedProducts.length !== 0) {
      const value = subtotal + frete;
      return setTotal(value);
    }
  }, [subtotal, frete, refreshProducts]);

  useEffect(() => {
    const value = 0;
    if (buyedProducts.length === 0) {
      setSubtotal(value);
      setFrete(value);
      setTotal(value);
    }
  }, [buyedProducts.length]);

  const returnHome = () => {
    return navigation.navigate("Home");
  };

  const buyProducts = () => {
    if (buyedProducts.length !== 0) {
      setBuyedProducts([]);
      setSubtotal(0);
      setFrete(0);
      setTotal(0);
      return Alert.alert(
        "Compras realizadas com sucesso!",
        "Obrigado por comprar em nossa loja, volte sempre."
      );
    } else;
  };

  return (
    <Body>
      <Header>
        <TouchableOpacity onPress={returnHome}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <HeaderTitle>Shooping Cart</HeaderTitle>
        <TouchableOpacity onPress={returnHome}>
          <CartIcon height={29} width={29} />
        </TouchableOpacity>
      </Header>
      <MenuItems>
        <ProductsContainer>
          <CartItem
            buyedProducts={buyedProducts}
            setRefreshProducts={setRefreshProducts}
          />
        </ProductsContainer>
        <View style={{ paddingBottom: 20 }}>
          <View>
            <TitleBox>
              <Title>Subtotal</Title>
              <Title>R$ {subtotal.toFixed(2)}</Title>
            </TitleBox>
            <TitleBox>
              <Title>Frete</Title>
              <Title greenColor={subtotal > 250}>
                {subtotal < 250 ? `R$ ${frete.toFixed(2)}` : "GRÁTIS"}
              </Title>
            </TitleBox>
            <TitleBox>
              <Title weight>Total</Title>
              <Title weight>
                R$
                {subtotal.toFixed(2) < 250
                  ? total.toFixed(2)
                  : subtotal.toFixed(2)}
              </Title>
            </TitleBox>
          </View>
          <ButtonContainer>
            <Button onPress={buyProducts}>
              <ButtonText>Comprar</ButtonText>
            </Button>
          </ButtonContainer>
        </View>
      </MenuItems>
      <StatusBar backgroundColor="#0141df" barStyle="light-content" />
    </Body>
  );
}
