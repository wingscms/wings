import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

export default Comp => ({ stripeKey, ...props }) => (
  <StripeProvider apiKey={stripeKey}>
    <Comp {...props} />
  </StripeProvider>
);
