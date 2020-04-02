import { ThemeProvider } from 'styled-components';
import WingsProvider from '@wingscms/react/src/ctx/Wings';
import { Theme } from '@wingscms/components';
import client from './wings/wings';

export default [
  {
    icon: 'graphql',
    title: 'Wings API',
    components: [WingsProvider],
    params: [{ name: 'Mocked', props: { client }, default: true }],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'paintbrush',
    title: 'Theme',
    components: [ThemeProvider],
    params: [
      { name: 'No Theme', props: {}, default: true },
      { name: 'Default Theme', props: { theme: new Theme() } },
      { name: 'Test Theme', props: { theme: new Theme({ primaryColor: '#ff0000' }) } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
