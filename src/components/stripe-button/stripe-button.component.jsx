import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe requires price in cents
  const publishableKey =
    "pk_test_51J2pUiFK3WhWff5smAwJ90dKMxbAKlGPofl4ijg8bvzhQxdZ33IDjNDNR7y8Y4Z4Q9rssNxhRAeY9uCnIhkjhBu900qVqIMkPc";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
