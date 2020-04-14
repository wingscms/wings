import { WingsProvider, IntlProvider } from '@wingscms/react';
import { ThemeProvider } from '@wingscms/components';
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
      {
        name: 'English',
        props: { locale: 'en', messages: { 'wings.Campaign.description.collapse': 'Collapse' } },
        default: true,
      },
      {
        name: 'Nederlands',
        props: { locale: 'nl', messages: { 'wings.Campaign.description.collapse': 'Inklappen' } },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
