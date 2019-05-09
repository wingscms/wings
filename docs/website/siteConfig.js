// See https://docusaurus.io/docs/site-config

const siteConfig = {
  title: 'Wings',
  tagline: 'Documentation for Wings',
  url: 'https://docs.wings.dev',
  baseUrl: '/',
  projectName: 'Wings-docs',
  organizationName: 'Wings',
  headerLinks: [
    { label: 'Users', doc: 'getting-started' },
    { label: 'Developers', doc: 'developers-getting-started' },
    { label: 'Blog', href: 'https://wings.dev' },
  ],
  headerIcon: 'img/wings_logo.svg',
  footerIcon: 'img/wings_logo.svg',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#417de8',
    secondaryColor: '#222',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Wings`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/previewimage.png',
  twitterImage: 'img/previewimage.png',
};

module.exports = siteConfig;
