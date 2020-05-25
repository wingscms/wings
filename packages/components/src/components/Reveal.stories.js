import React from 'react';
import faker from 'faker';
import { boolean } from '@storybook/addon-knobs/react';
import { Reveal } from '@wingscms/components';

export const Controlled = () => {
  faker.seed(1);
  return <Reveal reveal={boolean('reveal', true)}>{faker.lorem.paragraphs(10)}</Reveal>;
};
