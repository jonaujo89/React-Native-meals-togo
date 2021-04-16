import React from "react";
import SafeArea from "../../../components/utils/safe-area.component";
import CreditCardInput from "../components/credit-card.component";

const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};

export default CheckoutScreen;
