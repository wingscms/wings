import React from 'react';
import fp from 'filter-invalid-dom-props';
import styled, { css } from '../../lib/styled';

import { wide, Heading } from '@wingscms/components';
import { slugify } from '../../lib/utils';
import createCard from '../../createCard';
import { t } from '../../theme';
import Fade from '../Fade';

const IntroText = styled.div`
  color: ${t(_ => _.chapterIntroColor)};
  margin-bottom: 0;
`;

const Container = styled.div`
  ${wide};
  background: ${t(_ => _.chapterBackgroundColor)};
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
  color: ${t(_ => _.chapterItemColor)};
  text-transform: ${t(_ => _.titleTransform)};
  position: absolute;
  top: 0;
  width: 100%;
`;

const Marker = styled.span`
  color: ${t(_ => _.chapterItemNumberColor)};
  ${t(Heading.getStyles(7))}
  font-weight: bold;
  opacity: 0.3;
`;

function SectionMarkerView({ fade = true, title = '', intro = '', marker = '', ...props }) {
  return (
    <Container className="headerContainer" id={slugify(title)} {...fp(props)}>
      <Chapter>
        <Fade fade={fade}>
          <TitleWrap>
            <Marker>{marker}</Marker>
            <Title rank={1}>{title}</Title>
          </TitleWrap>
          <IntroText>{intro}</IntroText>
        </Fade>
      </Chapter>
    </Container>
  );
}

export default createCard({
  name: 'SectionMarkerCard',
  renderWith: SectionMarkerView,
});
