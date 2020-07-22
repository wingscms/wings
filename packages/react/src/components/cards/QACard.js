import React from 'react';
import styled from '../../lib/styled';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { Accordion, Heading, Text } from '@wingscms/components';
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

function QACardView({
  content,
  title,
  backgroundColor,
  backgroundHoverColor,
  intent = Accordion.Item.Intent.PRIMARY,
  ...props
}) {
  return (
    <Container {...filterInvalidDOMProps(props)}>
      {title ? <Heading rank={3}>{title}</Heading> : null}
      <Accordion>
        {content.map(
          (
            {
              question,
              answer,
              intent: itemIntent,
              backgroundColor: itemBackgroundColor,
              backgroundHoverColor: itemBackgroundHoverColor,
            },
            idx,
          ) => {
            return (
              <Accordion.Item
                key={idx}
                intent={itemIntent || intent}
                backgroundColor={backgroundColor || itemBackgroundColor}
                backgroundHoverColor={backgroundHoverColor || itemBackgroundHoverColor}
                label={isJSON(question) ? <Content content={question} mini /> : question} // <Content /> for backwards compatability
              >
                {isJSON(answer) ? (
                  <Content content={answer} mini />
                ) : (
                  <Text noSpacing>{answer}</Text>
                )}
              </Accordion.Item>
            );
          },
        )}
      </Accordion>
    </Container>
  );
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
