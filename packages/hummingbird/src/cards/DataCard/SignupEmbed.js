import React from 'react';
import styled from 'styled-components';
import SignupEmbed from '../../components/Embed';

import wide from '../../styles/wide';

const Wrapper = styled.div`
  ${wide};
`;

export default ({ signupId, ctaButtonText, ctaText, type, useBackgroundImage, expandable }) => (
  <Wrapper>
    <SignupEmbed
      type={type}
      signupId={signupId}
      ctaText={ctaText}
      ctaButtonText={ctaButtonText}
      useBackgroundImage={useBackgroundImage}
      expandable={expandable}
    />
  </Wrapper>
);
