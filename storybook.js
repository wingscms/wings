const storybook = require('@storybook/react/standalone');
const bootstrap = require('./.storybook/wings/bootstrap');

bootstrap().then(() =>
  storybook({
    mode: 'dev',
    port: 8001,
    quiet: true,
    configDir: './.storybook',
    ci: true,
  }),
);
