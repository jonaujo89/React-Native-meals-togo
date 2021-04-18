import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import Text from "../../../components/typography/text.component";
import SafeArea from "../../../components/utils/safe-area.component";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";

import { CartContext } from "../../../services/cart/cart.context";

import CreditCardInput from "../components/credit-card.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";

const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
        <CreditCardInput />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return (
                <List.Item
                  title={`${item} - ${price / 100}`}
                  key={(Math.random() * 1000).toFixed(3)}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
