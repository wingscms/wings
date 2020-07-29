import React, { useState } from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Button, Dialog, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  const [open, setOpen] = useState(false);
  const overlay = boolean('overlay', true);
  const clickOutsideToClose = boolean('clickOutsideToClose', true);
  const size = select('size', Dialog.Size, Dialog.Size.MEDIUM);
  const verticalAlign = select('verticalAlign', Dialog.VerticalAlign, Dialog.VerticalAlign.CENTER);
  const horizontalAlign = select(
    'horizontalAlign',
    Dialog.HorizontalAlign,
    Dialog.HorizontalAlign.CENTER,
  );
  return (
    <div>
      <Button intent={Button.Intent.PRIMARY} onClick={() => setOpen(true)}>
        Open Model
      </Button>
      {open ? (
        <Dialog
          clickOutsideToClose={clickOutsideToClose}
          overlay={overlay}
          open={open}
          onClose={() => setOpen(false)}
          size={size}
          verticalAlign={verticalAlign}
          horizontalAlign={horizontalAlign}
        >
          <Dialog.Header title="This Is A Dialog" onClose={() => setOpen(false)} />
          <Text style={{ padding: '0 20px' }}>{faker.lorem.paragraphs(1)}</Text>
        </Dialog>
      ) : null}
    </div>
  );
};

export const wrapStory = paddingWrap;
