import React, { useState } from 'react';
import faker from 'faker';
import { boolean } from '@storybook/addon-knobs/react';
import { Button, Modal } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  const [open, setOpen] = useState(false);
  const overlay = boolean('overlay', true);
  const clickOutsideToClose = boolean('clickOutsideToClose', true);
  return (
    <div>
      <Button intent={Button.Intent.PRIMARY} onClick={() => setOpen(true)}>
        Open Model
      </Button>
      <br />
      {faker.lorem.paragraphs(8)}
      {open ? (
        <Modal
          clickOutsideToClose={clickOutsideToClose}
          overlay={overlay}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Modal.Header title="This is a modal" onClose={() => setOpen(false)} />
        </Modal>
      ) : null}
    </div>
  );
};

export const wrapStory = paddingWrap;
