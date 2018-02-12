import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { injectStripe } from 'react-stripe-elements';
import qs from 'qs';
import omit from 'lodash.omit';
import withElements from './withElements';
import withProvider from './withProvider';
import DefaultButton from './DefaultButton';

class WingsPayButton extends Component {
  static propTypes = {
    amount: PropTypes.number,
    children: PropTypes.node,
  };

  static defaultProps = {
    amount: 2000,
    children: <DefaultButton />,
  };

  state = {
    processing: false,
    payment: false,
  };

  charge = {
    source: null,
    livemode: null,
    clientSecret: null,
  };

  componentDidMount() {
    this.processIdealRedirect();
  }

  redirect = url => window.location.replace(url);
  getQueryParams = () => qs.parse(window.location.search.substr(1));
  setQueryParams = q => window.history.replaceState(
    null,
    null,
    `${window.location.pathname}?${qs.stringify(q)}`,
  );
  removeQueryParams = params => this.setQueryParams(omit(this.getQueryParams(), params));
  removeIdealRedirectParams = () => this.removeQueryParams([
    'source', 'livemode', 'client_secret',
  ]);
  amountString = () => this.props.amount.toString();
  setChargeInfo = (info) => { this.charge = { ...this.charge, ...info }; };
  parseIdealRedirectParams = () => {
    const {
      source,
      livemode,
      client_secret: clientSecret,
    } = this.getQueryParams();
    const isIdealRedirect = (source && (livemode !== null) && clientSecret);
    if (isIdealRedirect) {
      this.removeIdealRedirectParams();
      this.setChargeInfo({ source, livemode, clientSecret });
      return true;
    }
    return false;
  };

  processIdealRedirect() {
    if (!this.parseIdealRedirectParams()) return;
    this.setState({ processing: true, payment: true });
    this.verifyPayment();
  }

  verifyPayment = () => {
    // TODO: contact Wings through websocket
    setTimeout(() => this.setState({ processing: false }), 3000);
  };

  createSource = ({ amount }) => this.props.stripe.createSource({
    type: 'ideal',
    amount: window.__WINGS_PAY_AMOUNT__ || amount,
    currency: 'eur',
    redirect: {
      return_url: window.location.href,
    },
  });

  handlePay = async ({ amount = this.props.amount }) => {
    const result = await this.createSource({ amount });
    if (result.error) alert('Something went wrong with iDEAL.'); // eslint-disable-line no-alert
    this.redirect(result.source.redirect.url);
  };

  render() {
    const { children } = this.props;
    const { processing, payment } = this.state;
    return React.cloneElement(children, {
      onPay: this.handlePay,
      processing,
      payment,
    });
  }
}

const ConnectedWingsPayButton = compose(
  withProvider,
  withElements,
  injectStripe,
)(WingsPayButton);

ConnectedWingsPayButton.asHOC = config => PayButton => props => (
  <ConnectedWingsPayButton {...config}>
    <PayButton {...DefaultButton.defaultProps} {...props} />
  </ConnectedWingsPayButton>
);

export default ConnectedWingsPayButton;
