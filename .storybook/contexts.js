import { ThemeProvider } from 'styled-components';
import WingsProvider from '@wingscms/react/src/ctx/Wings';
import { Theme } from '@wingscms/components';
import client from './wings/wings';

export default [
  {
    icon: 'graphql',
    title: 'Default',
    components: [WingsProvider],
    params: [{ name: 'Mock Wings API', props: { client }, default: true }],
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
      { name: 'Default Theme', props: { theme: () => new Theme() }, default: true },
      { name: 'Test Theme', props: { theme: () => new Theme({ primaryColor: '#ff0000' }) } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
