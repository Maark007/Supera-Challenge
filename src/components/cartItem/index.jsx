import React from "react";

import { ScrollView } from "react-native";
import {
  Body,
  Image,
  Description,
  Content,
  Title,
  Price,
  Button,
  ButtonText,
  NoItemsBox,
  NoItemsText,
} from "./styles";

export default function CartItem({ buyedProducts, setRefreshProducts }) {
  
  const removeItem = (id) => {
    const findObject = buyedProducts.map((product) => product.id);
    const index = findObject.indexOf(id);
    setRefreshProducts((prev) => !prev);
    return buyedProducts.splice(index, 1);
  };

  return (
    <Body>
      <ScrollView>
        {buyedProducts.map((product, i) => (
          <Content key={i}>
            <Image source={product.image} />
            <Description>
              <Title>{product.name}</Title>
              <Price>R$ {product.price}</Price>
              <Button onPress={() => removeItem(product.id)}>
                <ButtonText>Cancelar Pedido</ButtonText>
              </Button>
            </Description>
          </Content>
        ))}
        {buyedProducts.length === 0 && (
          <NoItemsBox>
            <NoItemsText>Não há podutos no carrinho.</NoItemsText>
          </NoItemsBox>
        )}
      </ScrollView>
    </Body>
  );
}
