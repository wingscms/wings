import WingsProvider from '@wingscms/react/src/ctx/Wings';
import client from './wings/wings';

export default [
  {
    icon: 'box',
    title: 'Default',
    components: [WingsProvider],
    params: [{ name: 'Mock Wings API', props: { client }, default: true }],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
