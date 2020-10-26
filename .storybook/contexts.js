import { WingsProvider, IntlProvider } from '@wingscms/react';
import { ThemeProvider } from '@wingscms/components';
import client from '../.wings/wings';
import en from '../.wings/data/en.json';
import de from '../.wings/data/de.json';
import nl from '../.wings/data/nl.json';

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
      {
        name: 'Red',
        props: {
          theme: {
            primaryColor: '#ff0000',
            secondaryColor: '#990000',
          },
        },
      },
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
        props: {
          locale: 'en',
          messages: en,
        },
        default: true,
      },
      {
        name: 'Deutsch',
        props: {
          locale: 'de',
          messages: de,
        },
      },
      {
        name: 'Nederlands',
        props: {
          locale: 'nl',
          messages: nl,
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
