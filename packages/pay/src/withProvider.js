import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StripeProvider } from 'react-stripe-elements';
import load from 'load-script';

export default Comp => class WithStripe extends Component {
  static propTypes = {
    stripeKey: PropTypes.string.isRequired,
  }
  state = { stripe: null };

  componentDidMount() {
    if (window.Stripe) this.setStripe();
    else load('https://js.stripe.com/v3/', () => this.setStripe());
  }

  setStripe = () => this.setState({ stripe: window.Stripe(this.props.stripeKey) });

  render() {
    const { stripe } = this.state;
    const { stripeKey, ...props } = this.props;

    return (
      <StripeProvider stripe={stripe}>
        <Comp {...props} />
      </StripeProvider>
    );
  }
};
