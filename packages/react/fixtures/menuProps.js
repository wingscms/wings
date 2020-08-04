import { image } from '../../../utils';

export default {
  menu: {
    items: [
      { text: 'Sign Up', url: 'https://wings.dev', primary: true },
      { text: 'Second Primary', url: 'https://wings.dev', primary: true },
      { text: 'An Example Item', url: 'https://wings.dev' },
      { text: 'An Example Item', url: 'https://wings.dev' },
      { text: 'An Example Item', url: 'https://wings.dev' },
    ],
  },
  logo: {
    url: '/',
    imageUrl: image(320, 100),
    alt: '',
  },
  socialButtons: [
    {
      platform: 'facebook',
      url: 'https://wings.dev',
    },
    {
      platform: 'twitter',
      url: 'https://wings.dev',
    },
    {
      platform: 'whatsapp',
      url: 'https://wings.dev',
    },
    {
      platform: 'email',
      url: 'https://wings.dev',
    },
  ],
  translations: {
    current: 'en',
    translations: [
      {
        id: 'de',
        name: 'Deutsch',
        url: 'https://wings.dev',
      },
      {
        id: 'en',
        name: 'English',
        url: 'https://wings.dev',
      },
      {
        id: 'jp',
        name: '日本語',
        url: 'https://wings.dev',
      },
      {
        id: 'nl',
        name: 'Nederlands',
        url: 'https://wings.dev',
      },
      {
        id: 'ru',
        name: 'русский язык',
        url: 'https://wings.dev',
      },
      {
        id: 'zh',
        name: '中文',
        url: 'https://wings.dev',
      },
    ],
  },
};
