import React from 'react';
import styled from '../lib/styled';
import { select, text, object } from '@storybook/addon-knobs/react';
import { Signup } from '../../../src/components/signup';

import coffeeshop from '../../img/coffeeshop.jpg';
import field from '../../img/field.jpg';
import jellyfish from '../../img/jellyfish.jpg';
import street from '../../img/street.jpg';

export const SignupInfo = `
  documentation...
`;
export const SignupStory = () => {
  const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
  `;
  return (
    <Wrapper>
      <Signup
        title={text('title', 'Take action now!')}
        intro={text('introduction', 'Stand with us against inequality, sign up now!')}
        image={select(
          'image',
          {
            '': 'none',
            [coffeeshop]: 'coffeeshop',
            [field]: 'field',
            [jellyfish]: 'jellyfish',
            [street]: 'street',
          },
          '',
        )}
        firstNameFieldLabel={text('first name field label', 'First name')}
        lastNameFieldLabel={text('last name field label', 'Last name')}
        emailFieldLabel={text('email field label', 'Email address')}
        newsletterCheckboxTitle={text('newsletter checkbox title', 'Stay up to date!')}
        newsletterCheckboxLabel={text(
          'newsletter checkbox label',
          'Please send me mails about the Crane campaign. You may use my personal data for this.',
        )}
        privacyCheckboxTitle={text('privacy checkbox title', '')}
        privacyCheckboxLabel={object('privacy message text', {
          start: 'I consent to the ',
          link: 'privacy policy',
          end: ' of Crane!',
        })}
        privacyCheckboxLink={text('link to privacy policy', 'https://example.com')}
        buttonLabel={text('button label', 'Sign me up!')}
      />
    </Wrapper>
  );
};
