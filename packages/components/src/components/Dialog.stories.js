import React from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Dialog, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  return (
    <Dialog
      clickOutsideToClose={true}
      overlay={boolean('overlay', true)}
      open={true}
      onClose={action('onClose')}
      size={select('size', Dialog.Size, Dialog.Size.MEDIUM)}
      position={select('position', Dialog.Position, Dialog.Position.CENTER)}
    >
      <Dialog.Header title="This Is A Dialog" onClose={action('onClose')} />
      <Text style={{ padding: '0 20px' }}>{faker.lorem.paragraphs(1)}</Text>
    </Dialog>
  );
};

export const wrapStory = paddingWrap;
