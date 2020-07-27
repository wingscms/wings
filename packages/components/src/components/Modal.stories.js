import React, { useState } from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Button, Modal, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  const [open, setOpen] = useState(false);
  const overlay = boolean('overlay', true);
  const clickOutsideToClose = boolean('clickOutsideToClose', true);
  const size = select('size', Modal.Size, Modal.Size.MEDIUM);
  const verticalAlign = select('verticalAlign', Modal.VerticalAlign, Modal.VerticalAlign.CENTER);
  const horizontalAlign = select(
    'horizontalAlign',
    Modal.HorizontalAlign,
    Modal.HorizontalAlign.CENTER,
  );
  return (
    <div>
      <Button intent={Button.Intent.PRIMARY} onClick={() => setOpen(true)}>
        Open Model
      </Button>
      {open ? (
        <Modal
          clickOutsideToClose={clickOutsideToClose}
          overlay={overlay}
          open={open}
          onClose={() => setOpen(false)}
          size={size}
          verticalAlign={verticalAlign}
          horizontalAlign={horizontalAlign}
        >
          <Modal.Header title="This is a modal" onClose={() => setOpen(false)} />
          <Text style={{ padding: '0 20px' }}>{faker.lorem.paragraphs(1)}</Text>
        </Modal>
      ) : null}
    </div>
  );
};

export const wrapStory = paddingWrap;
