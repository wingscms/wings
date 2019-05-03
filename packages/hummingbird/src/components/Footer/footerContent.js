import React, { Fragment } from 'react';
import { Newsletter } from '@wingscms/crane';
import styled from 'styled-components';
import Section from './Section';
import AnchorButton from '../AnchorButton';
import socialMediaIcon from './SocialMediaIcon';

const StyledMailchimpForm = styled(Newsletter)`
  input {
    font-size: 12px;
    padding: 5px;
    height: auto;
  }
  label {
    font-size: 12px;
  }
  button {
    background-color: #000;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s all linear;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
`;

const AddressLine = styled.p`
  margin: 0;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  > div {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
`;

export default data =>
  (data
    ? data.map(block => (
      <Section>
        {block.map((x) => {
            switch (x[0]) {
              case 'title':
                return <p className="title">{x[1]}</p>;
              case 'text':
                return (
                  <AddressLine>
                    {x[1].map(y => (
                      <Fragment>
                        {y}
                        <br />
                      </Fragment>
                    ))}
                  </AddressLine>
                );
              case 'phone':
                return (
                  <AddressLine>
                    <a className="footerLink" href={`tel:${x[1]}`}>
                      {x[1]}
                    </a>
                  </AddressLine>
                );
              case 'email':
                return (
                  <AddressLine>
                    <a className="footerLink" href={`mailto:${x[2]}`}>
                      {x[1]}
                    </a>
                  </AddressLine>
                );
              case 'link':
                return (
                  <AddressLine>
                    <a className="footerLink" href={`${x[2]}`}>
                      {x[1]}
                    </a>
                  </AddressLine>
                );
              case 'button':
                return (
                  <AnchorButton href={x[2]} size="small">
                    {x[1]}
                  </AnchorButton>
                );
              case 'social':
                return (
                  <SocialMediaWrapper>
                    {x[1].map(y => socialMediaIcon(y[0], y[1], y[2], y[3]))}
                  </SocialMediaWrapper>
                );
              case 'mailchimp':
                return (
                  <StyledMailchimpForm
                    action={x[1]}
                    buttonLabel={x[2]}
                    confirmationText={x[3]}
                    privacyCheckbox={false}
                    privacyMessage=""
                  />
                );
              default:
                return null;
            }
          })}
      </Section>
    ))
    : null);
