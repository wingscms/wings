import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../lib/styled';
import NewsletterForm from './NewsletterForm';
import { ConfirmationBox } from '../form';
import { Envelope } from '../Icon';
import { insertLink, randomString } from '../../lib/utils';

const Warning = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #b33a3a;
  border: 2px solid #b33a3a;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #f9ecec;
`;

const Title = styled.h2`
  svg {
    width: 1em;
    height: 1em;
    stroke: #000;
    stroke-width: 2;
    fill: none;
    vertical-align: baseline;
    margin-right: 0.25em;
    position: relative;
    top: 0.125em;
  }
`;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmation: false,
      showError: false,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  static propTypes = {
    /** Title */
    title: PropTypes.string,
    /** Introduction text */
    intro: PropTypes.string,
    /** Background image */
    icon: PropTypes.bool,
    /** Privacy message */
    privacyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** link to privacy policy */
    privacyMessageLink: PropTypes.string,
    /** is Privacy message a checkbox */
    privacyCheckbox: PropTypes.bool,
    /** Confirmation text */
    confirmedText: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    intro: '',
    icon: false,
    privacyMessage: {
      start: 'I consent to the ',
      link: 'privacy policy',
      end: ' of Crane!',
    },
    privacyMessageLink: 'https://example.com',
    privacyCheckbox: true,
    confirmedText: 'Thank you for signing up. Please check your e-mail for confirmation.',
  };

  onSubmitHandler(e) {
    if (this.props.actionNetworkHelper) {
      e.preventDefault();
      fetch(this.props.actionNetworkHelper, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          person: {
            family_name: '',
            given_name: '',
            email_addresses: [
              {
                primary: true,
                address: e.target.elements.email.value,
                status: 'subscribed',
              },
            ],
            postal_addesses: [
              {
                primary: true,
                country: 'NL',
              },
            ],
          },
          triggers: {
            autoresponse: {
              enabled: true,
            },
          },
          'action_network:referrer_data': {
            source: `Wings Site: ${this.props.siteTitle}`,
            website: document.location.href,
          },
        }),
      })
        .then(res => res)
        .then(res => {
          if (res.status === 200) {
            this.setState({ showConfirmation: true });
          } else {
            this.setState({ showError: true });
          }
        })
        .catch(err => {
          console.log(err); // eslint-disable-line no-console
          this.setState({ showError: true });
        });
    } else {
      // this.setState({ showConfirmation: true });
    }
  }

  render() {
    const { showConfirmation, showError } = this.state;
    const {
      target = randomString(),
      title,
      intro,
      icon,
      privacyMessage,
      privacyMessageLink,
      privacyCheckbox,
      confirmedText,
      actionNetworkHelper,
      className,
      confirmationText,
      confirmationTitle,
      ...props
    } = this.props;

    const linkedPrivacyMessage = insertLink(privacyMessage, privacyMessageLink);

    return (
      <section className={className}>
        {showConfirmation && actionNetworkHelper ? (
          <ConfirmationBox
            confirmationText={confirmationText}
            confirmationTitle={confirmationTitle}
          />
        ) : null}
        <Title>
          {!icon || <Envelope />}
          {title}
        </Title>
        {showConfirmation && !actionNetworkHelper ? <p>{confirmedText}</p> : null}
        {actionNetworkHelper || !showConfirmation ? (
          <div>
            <p style={{ marginTop: '0' }}>{intro}</p>
            <NewsletterForm
              disabled={showConfirmation}
              {...{ privacyCheckbox, linkedPrivacyMessage }}
              {...props}
              actionNetworkHelper={actionNetworkHelper}
              target={target}
              onSubmit={this.onSubmitHandler}
            />
          </div>
        ) : null}
        {showError ? <Warning>Maak a.u.b. een nieuwsbrief keuze</Warning> : null}
        <iframe id={target} name={target} title={target} style={{ display: 'none' }} />
      </section>
    );
  }
}
