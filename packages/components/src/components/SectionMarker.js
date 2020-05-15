import React from 'react';
import fp from 'filter-invalid-dom-props';
import { Heading } from '@wingscms/components';

import styled, { css } from '../lib/styled';
import { slugify } from '../lib/utils';
import { t } from '../theme';
import Fade from './Fade';

const Text = styled.div`
  color: ${t((_, { textColor }) => textColor || _.sectionMarkerTextColor)};
  margin-bottom: 0;
`;

const Container = styled.div`
  width: 100%;
  background: ${t(_ => _.sectionMarkerBackgroundColor)};
  margin-top: ${t(_ => _.largeSpacing)};
  margin-bottom: ${t(_ => _.largeSpacing)};
  &:first-child {
    margin-top: 0 !important;
  }
  ${t(_ =>
    _.tabletQuery(
      css`
        margin-top: ${t(_ => _.mediumSpacing)};
        margin-bottom: ${t(_ => _.mediumSpacing)};
      `,
    ),
  )}
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

export default function SectionMarkerView({
  fade = true,
  title = '',
  text = '',
  number = '',
  numberColor,
  titleColor,
  textColor,
  numberOpacity,
  ...props
}) {
  return (
    <Container className="headerContainer" id={slugify(title)} {...fp(props)}>
      <Chapter>
        <Fade fade={fade}>
          <TitleWrap>
            <Number numberColor={numberColor} numberOpacity={numberOpacity}>
              {number}
            </Number>
            <Title number={number} titleColor={titleColor} rank={1}>
              {title}
            </Title>
          </TitleWrap>
          {text && <Text textColor={textColor}>{text}</Text>}
        </Fade>
      </Chapter>
    </Container>
  );
}
