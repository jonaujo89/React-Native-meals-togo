import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51IBp9vGm3C8Rs2urBUskgpBlKiMIxo6A1loB2gSnIr0XNilY7yESzef8eSv3YDKbiKwTSmMFXIkkZrbZDerDjaX300GnrgRaz8"
);

export const cardTokenRequest = (cardInfo) => {
  stripe.createToken({ cardInfo });
};
