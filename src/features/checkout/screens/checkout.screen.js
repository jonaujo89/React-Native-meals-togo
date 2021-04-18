import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import Text from "../../../components/typography/text.component";
import SafeArea from "../../../components/utils/safe-area.component";
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
  PaymentProcessing
} from "../components/checkout.styles";

import { CartContext } from "../../../services/cart/cart.context";

import CreditCardInput from "../components/credit-card.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { payRequest } from "../../../services/checkout/checkout.service";

const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card"
      });
      return;
    }
    //card.id is stripe payment token
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((error) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: error
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
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
        <NameInput
          label="Full Name"
          value={name}
          onChangeText={(text) => {
            if (text.length) {
              setName(text);
            } else {
              setName(null);
            }
          }}
        />
        <Spacer position="top" size="large">
          {name && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() => {
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card"
                });
              }}
            />
          )}
        </Spacer>
        <Spacer position="top" size="large">
          <PayButton
            disabled={isLoading}
            icon="cash-usd"
            mode="contained"
            onPress={onPay}
          >
            Pay
          </PayButton>
          <Spacer position="top" size="large" />
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
