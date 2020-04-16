import { create } from '@storybook/theming/create';
import logo from './logo.svg';

export default create({
  base: 'light',
  colorPrimary: '#417DE8',
  colorSecondary: '#417DE8',
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#ECF2FC',
  appBorderRadius: 4,
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',
  textColor: '#212121',
  textInverseColor: '#fff',
  barTextColor: '#212121',
  barSelectedColor: '#417DE8',
  barBg: '#ECF2FC',
  inputTextColor: '#212121',
  inputBorderRadius: 4,
  brandTitle: 'Wings Components',
  brandUrl: 'https://example.com',
  brandImage: logo,
});
