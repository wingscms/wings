import { image } from '../../../utils';
import translations from './translations';

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
    translations,
  },
};
