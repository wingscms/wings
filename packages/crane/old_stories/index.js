import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Button', Button)
  .addDecorator(withKnobs);
