import React from 'react';

import _Heading from '../Heading';
import _Surface from '../Surface';
import _Text from '../Text';

import styled, { css } from '../../lib/styled';
import { t } from '../../theme';

const getPosition = ({ position }) => {
  switch (position) {
    case 'bottom':
      return css`
        align-self: end;
      `;
    default:
      return css`
        align-self: start;
      `;
  }
};

const Surface = styled(_Surface)`
  width: 100%;
  padding: ${t(_ => _.extraSmallSpacing)};
  position: relative;
  ${getPosition};
`;

const Heading = styled(_Heading)`
  font-size: 20px;
`;

const Text = styled(_Text)`
  font-size: 16px;
`;

const Title = ({ children }) => <Heading noSpacing>{children}</Heading>;

const Subtitle = ({ children }) => <Text noSpacing>{children}</Text>;

function CardHeading({ elevation, position = 'top', children, ...props }) {
  return (
    <Surface elevation={elevation} position={position} {...props}>
      {children}
    </Surface>
  );
}

export default CardHeading;

CardHeading.Title = Title;
CardHeading.Subtitle = Subtitle;
