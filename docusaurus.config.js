// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://nebulae-ventures.github.io/docs-dev/',
  baseUrl: '/docs-dev/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nebulae-ventures', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'prod',
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
      navbar: {
        title: 'Nebulae Ventures Docs',
        logo: {
          alt: 'Nebulae Ventures Logo',
          src: 'img/logo-white.png',
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
                to: '/home',
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
