import React from 'react';

import _Heading from '../Heading';
import _Surface from '../Surface';
import _Text from '../Text';

import styled from '../../lib/styled';
import { limitCharacters } from '../../lib/utils';
import { t } from '../../theme';

const Surface = styled(_Surface)`
  width: 100%;
  padding: ${t(_ => _.smallSpacing)};
  position: relative;
`;

const Heading = styled(_Heading)`
  font-size: 20px;
  text-decoration: none;
`;

const Text = styled(_Text)`
  font-size: 16px;
  text-decoration: none;
`;

const Title = ({ characterLimit, title = '', children }) => (
  <Heading noSpacing>
    {characterLimit
      ? limitCharacters(title, { limit: characterLimit, suffix: '...', subtractSuffix: true })
      : title}
    {children}
  </Heading>
);

const Subtitle = ({ characterLimit, subtitle = '', children }) => (
  <Text noSpacing>
    {' '}
    {characterLimit
      ? limitCharacters(subtitle, { limit: characterLimit, suffix: '...', subtractSuffix: true })
      : subtitle}
    {children}
  </Text>
);

function CardHeading({ elevation, children, ...props }) {
  return (
    <Surface elevation={elevation} {...props}>
      {children}
    </Surface>
  );
}

export default CardHeading;

CardHeading.Title = Title;
CardHeading.Subtitle = Subtitle;
