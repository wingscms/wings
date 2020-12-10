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
  border-radius: 0;
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
  position: relative;
  top: 0;
  width: 100%;
  &:before {
    content: '${({ number }) => number}';
    font-size: 1.7em;
    color: ${t((_, { numberColor }) => numberColor || _.sectionMarkerNumberColor)};
    font-weight: bold;
    opacity: ${t((_, { numberOpacity }) => numberOpacity || _.sectionMarkerNumberOpacity)};
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
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
            <Title
              number={marker}
              titleColor={titleColor}
              rank={1}
              numberColor={markerColor}
              numberOpacity={markerOpacity}
            >
              {sectionTitle}
            </Title>
          </TitleWrap>
          {text && <Text textColor={textColor}>{text}</Text>}
        </Reveal>
      </Chapter>
    </Surface>
  );
}
