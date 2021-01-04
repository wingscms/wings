import React from 'react';
import styled from '../../lib/styled';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { Accordion, Heading, Text as _Text, Intent } from '@wingscms/components';
import createCard from '../../createCard';
import Content from '../MobiledocRenderer';
import { isJSON } from '../../lib/utils';
import { t } from '../../theme';

const Container = styled.div`
  margin: ${t(_ => _.mediumSpacing)} 0;
  @media screen and (min-width: 800px) {
    margin: ${t(_ => _.largeSpacing)} 0;
  }
`;

const Text = styled(_Text)`
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
`;

function QACardView({ content, title, backgroundColor, backgroundHoverColor, ...props }) {
  return (
    <Container {...filterInvalidDOMProps(props)}>
      {title ? <Heading rank={3}>{title}</Heading> : null}
      <Accordion
        intent={Intent.PRIMARY}
        backgroundColor={backgroundColor}
        backgroundHoverColor={backgroundHoverColor}
      >
        {content.map(({ question, answer }, idx) => {
          return (
            <Accordion.Item
              key={idx}
              label={isJSON(question) ? <Content content={question} mini /> : question} // <Content /> for backwards compatability
            >
              {isJSON(answer) ? <Content content={answer} mini /> : <Text noSpacing>{answer}</Text>}
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
