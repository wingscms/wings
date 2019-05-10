// See https://docusaurus.io/docs/site-config

module.exports = {
  title: 'Wings',
  tagline: 'Documentation for Wings',
  url: 'https://docs.wings.dev',
  baseUrl: '/',
  projectName: 'Wings-docs',
  organizationName: 'Wings',
  headerLinks: [
    { label: 'Users', doc: 'users-general-getting-started' },
    { label: 'Developers', doc: 'dev-general-getting-started' },
    { label: 'Home', href: 'https://wings.dev' },
    { label: 'Dashboard', href: 'https://admin.wings.dev' },
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
  scripts: [],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/preview.png',
  twitterImage: 'img/preview.png',
};
