import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51IBp9vGm3C8Rs2urBUskgpBlKiMIxo6A1loB2gSnIr0XNilY7yESzef8eSv3YDKbiKwTSmMFXIkkZrbZDerDjaX300GnrgRaz8"
);

export const cardTokenRequest = (cardInfo) => {
  return stripe.createToken({ card: cardInfo });
};

export const payRequest = (token, amount, name) => {
  return fetch("https://us-central1-rn-meals-togo.cloudfunctions.net/pay", {
    body: JSON.stringify({
      token,
      name,
      amount
    }),
    method: "POST"
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong with your payment");
    }
    return res.json();
  });
};
