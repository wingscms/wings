import React from 'react';
import styled from 'styled-components';
import Content from '../Content';

import CtaButton from '../Button';
import { InfoContainer } from '../Event';

const OuterContainer = styled.div`
  width: 100%;
  position: relative;
`;

const OuterContainerBottom = styled(OuterContainer)`
  background-color: #f8f8f8;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: block;
  padding: 40px 20px;
  overflow-x: visible;
  overflow-y: auto;
  position: relative;
  @media screen and (min-width: 800px) {
    padding: 100px 20px;
  }
`;

const InnerContainerBottom = styled(InnerContainer)`
  @media screen and (min-width: 800px) {
    padding: 40px 20px;
  }
`;
const ContentContainer = styled.div`
  max-width: 100%;
  position: relative;
  > p:first-child {
    margin-top: 0;
  }
  @media screen and (min-width: 800px) {
    float: left;
    max-width: 50%;
  }
`;

export default ({ event }) => (
  // const windowExists = typeof window !== 'undefined';
  <OuterContainerBottom>
    <InnerContainerBottom>
      <ContentContainer>
        <Content content={event.description} className="article-body" />
        <CtaButton
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('signupform')
              .getElementsByTagName('input')[0]
              .focus();
          }}
        />
      </ContentContainer>
      <InfoContainer event={event} />
    </InnerContainerBottom>
  </OuterContainerBottom>
);
