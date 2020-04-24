import { addons } from '@storybook/addons';
import wingsTheme from './theme/theme';
import '@storybook/addon-knobs/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-contexts/register';

addons.setConfig({
  theme: wingsTheme,
});
