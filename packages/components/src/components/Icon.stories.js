import React from 'react';
import styled from 'styled-components';
import { Icon } from '@wingscms/components';

const Wrapper = styled.div`
  max-width: 100px;
  max-height: 100px;
  svg {
    path {
      fill: #000;
    }
  }
`;

export default () => {
  return (
    <Wrapper>
      <Icon icon="facebook" />
    </Wrapper>
  );
};
