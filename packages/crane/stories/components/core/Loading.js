import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import Loading from '../../../src/components/Loading';
import theme from '../../styles/theme';

export const LoadingInfo = `
  documentation...
`;

export const LoadingStory = () => (
  <Loading
    theme={theme}
    intent={select(
      'Intent',
      {
        none: 'none',
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
      },
      'none',
    )}
    size={select(
      'Size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    )}
  />
);
