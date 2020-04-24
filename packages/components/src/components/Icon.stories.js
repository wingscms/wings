import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import styled from '../lib/styled';
import { Icon } from '..';

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
  const icon = select('icon', Object.keys(Icon), Object.keys(Icon)[0]);
  const _Icon = Icon[icon];
  return (
    <Wrapper>
      <_Icon />
    </Wrapper>
  );
};
