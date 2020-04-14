import { WingsProvider } from '@wingscms/react';
import { ThemeProvider, IntlProvider } from '@wingscms/components';
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
      { name: 'None', props: {}, default: true },
      { name: 'Red', props: { theme: { primaryColor: '#ff0000' } } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'globe',
    title: 'i18n',
    components: [IntlProvider],
    params: [
      { locale: 'en', messages: { testMessage: 'English' } },
      { locale: 'nl', messages: { testMessage: 'Nederlands' } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
