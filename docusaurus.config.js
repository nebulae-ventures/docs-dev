// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nebulae Ventures Docs',
  tagline: 'Dinosaurs are cool',
  url: 'http://docs.nebulae.ventures',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nebulae-ventures', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-white.png',
      metadata: [{name: 'twitter:card', content: 'Bienvenue sur la documentation de Nebulae !'}],
      navbar: {
        title: 'Nebulae Ventures Docs',
        logo: {
          alt: 'Nebulae Ventures Logo',
          src: 'img/logo-black.png',
          srcDark: 'img/logo-white.png',
        },
        items: [
          {
            href: 'http://nebulae.ventures/',
            label: 'Nebulae Ventures',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
              {
                label: 'Feedback',
                href: 'https://rr5o0aphsnu.typeform.com/to/YP5kYdBX'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/NebulaeVentures',
              },
              {
                label: 'Newsletter',
                to: 'https://nebulae.substack.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label : 'Linkedin',
                to: 'https://www.linkedin.com/company/nebul%C3%A6/'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nebulae Ventures. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
