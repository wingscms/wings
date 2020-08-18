import React from 'react';
import faker from 'faker';
import { Card } from '@wingscms/components';
import { paddingWrap, image } from '../../../../utils';

export default () => (
  <Card>
    <Card.Image position="bottom" image={{ src: image() }} />
    <Card.Heading position="top">
      <Card.Heading.Title>A title</Card.Heading.Title>
      <Card.Heading.Subtitle>{faker.lorem.sentences(2)}</Card.Heading.Subtitle>
    </Card.Heading>
  </Card>
);

export const wrapStory = paddingWrap;
