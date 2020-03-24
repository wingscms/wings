import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Counter } from '..';

export default () => <Counter>{text('Counter Text', 'Oh my, a Counter!')}</Counter>;
