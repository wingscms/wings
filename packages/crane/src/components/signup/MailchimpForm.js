import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '../../lib/styled';
import { TextInput, CheckboxInput } from '../form';
import { Envelope } from '../icons';

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

export default (props) => {
  let email;
  const {
    action,
    intro,
    title,
    icon,
    confirmationText,
    emailFieldLabel,
    placeholderText,
    privacyCheckbox,
    linkedPrivacyMessage,
    buttonLabel,
    children,
  } = props;
  return (
    <MailchimpSubscribe
      url={action}
      render={({ subscribe, status }) => (
        <form
          className={props.className}
          onSubmit={(e) => {
            e.preventDefault();
            subscribe({ EMAIL: email.state.value });
          }}
        >
          <Title>
            {!icon || <Envelope />}
            {title}
          </Title>
          {status === 'success' ? (
            <p style={{ marginBottom: 0 }}>{confirmationText}</p>
          ) : (
              <div>
                <p>{intro}</p>
                <div>
                  <TextInput
                    name="EMAIL"
                    labelText={emailFieldLabel}
                    placeholder={placeholderText}
                    disabled={status === 'success'}
                    type="email"
                    // eslint-disable-next-line
                    ref={node => {
                      email = node;
                      console.log(email);
                    }}
                    required
                  />
                  {privacyCheckbox ? (
                    <CheckboxInput name="privacy" labelText={linkedPrivacyMessage} required />
                  ) : (
                      <small>{linkedPrivacyMessage}</small>
                    )}
                  <button disabled={status === 'success'} type="submit">
                    {buttonLabel}
                  </button>
                  {children}
                </div>
              </div>
            )}
        </form>
      )}
    />
  );
};
