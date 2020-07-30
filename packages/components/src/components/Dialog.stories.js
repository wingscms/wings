import React from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Dialog, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  return (
    <div>
      {boolean('open', true) ? (
        <Dialog
          clickOutsideToClose={boolean('clickOutsideToClose', true)}
          overlay={boolean('overlay', true)}
          open={open}
          onClose={() => {}}
          size={select('size', Dialog.Size, Dialog.Size.MEDIUM)}
          verticalAlign={select('verticalAlign', Dialog.VerticalAlign, Dialog.VerticalAlign.CENTER)}
          horizontalAlign={select(
            'horizontalAlign',
            Dialog.HorizontalAlign,
            Dialog.HorizontalAlign.CENTER,
          )}
        >
          <Dialog.Header title="This Is A Dialog" onClose={() => {}} />
          <Text style={{ padding: '0 20px' }}>{faker.lorem.paragraphs(1)}</Text>
        </Dialog>
      ) : null}
    </div>
  );
};

export const wrapStory = paddingWrap;
