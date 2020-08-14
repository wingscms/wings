import React from 'react';
import fp from 'filter-invalid-dom-props';

import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Reveal from './Reveal';
import Heading from './Heading';
import _Text from './Text';
import _Surface from './Surface';

const Text = styled(_Text)`
  color: ${t((_, { textColor }) => textColor || _.sectionMarkerTextColor)};
  margin-bottom: 0;
`;

const Surface = styled(_Surface)`
  width: 100%;
  background: ${t(_ => _.sectionMarkerBackgroundColor)};
  &:first-child {
    margin-top: 0 !important;
  }
`;

const Chapter = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${t(_ => _.largeSpacing)} 10px;
  position: relative;
  * {
    text-align: center;
  }
  ${t(_ =>
    _.tabletQuery(
      css`
        padding: ${t(_ => _.mediumSpacing)};
      `,
    ),
  )}
`;

const TitleWrap = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled(Heading)`
  color: ${t((_, { titleColor }) => titleColor || _.sectionMarkerTitleColor)};
  text-transform: ${t(_ => _.titleTransform)};
  position: ${({ number }) => (number ? 'absolute' : 'relative')};
  top: 0;
  width: 100%;
`;

const Number = styled.span`
  color: ${t((_, { numberColor }) => numberColor || _.sectionMarkerNumberColor)};
  ${t(Heading.getStyles(7))}
  font-weight: bold;
  opacity: ${t((_, { numberOpacity }) => numberOpacity || _.sectionMarkerNumberOpacity)};
`;

export default function SectionMarker({
  elevation = 1,
  reveal,
  sectionTitle = '',
  text = '',
  marker = '',
  markerColor,
  titleColor,
  textColor,
  markerOpacity,
  ...props
}) {
  return (
    <Surface elevation={elevation} {...fp(props)}>
      <Chapter>
        <Reveal reveal={reveal}>
          <TitleWrap>
            <Number numberColor={markerColor} numberOpacity={markerOpacity}>
              {marker}
            </Number>
            <Title number={marker} titleColor={titleColor} rank={1}>
              {sectionTitle}
            </Title>
          </TitleWrap>
          {text && <Text textColor={textColor}>{text}</Text>}
        </Reveal>
      </Chapter>
    </Surface>
  );
}
