import React from 'react';
import styled from 'styled-components';
import { boolean, text, object } from '@storybook/addon-knobs/react';
import { Newsletter } from '../../src/components/signup';

export const NewsletterInfo = `
  documentation...
`;
export const NewsletterStory = () => {
  const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
  `;
  return (
    <Wrapper>
      <Newsletter
        title={text('title', 'Subscribe')}
        intro={text('introduction', 'Get weekly news in your inbox!')}
        icon={boolean('show icon', false)}
        emailFieldLabel={text('email field label', 'Email address')}
        buttonLabel={text('button label', 'Sign me up!')}
        privacyCheckbox={boolean('active consent', false)}
        privacyMessage={object('privacy message text', {
          start: 'I consent to the ',
          link: 'privacy policy',
          end: ' of Crane!',
        })}
        privacyMessageLink={text('link to privacy policy', 'https://example.com')}
        confirmedText={text(
          'confirmation text',
          'Thank you for signing up. Please check your e-mail for confirmation.',
        )}
      />
    </Wrapper>
  );
};
