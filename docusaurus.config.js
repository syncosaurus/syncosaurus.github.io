// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import 'dotenv/config'
import { themes as prismThemes } from 'prism-react-renderer'
import tailwindPlugin from './plugins/tailwind-config.cjs'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syncosaurus',
  tagline:
    "An open-source framework for real-time, collaborative web applications",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://syncosaurus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'syncosaurus', // Usually your GitHub org/user name.
  projectName: 'syncosaurus.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    puzzleUrl: 'https://c218db58.website-puzzle.pages.dev',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Syncosaurus',
        logo: {
          alt: 'Syncosaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/case-study', label: 'Case Study', position: 'right' },
          { to: '/team', label: 'The Team', position: 'right' },
          { type: 'doc', label: 'Docs', docId: 'index', position: 'right' },
          {
            to: 'https://github.com/syncosaurus',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Case Study',
                to: '/case-study',
              },
              {
                label: 'The Team',
                to: '/team',
              },
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/syncosaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Syncosaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: { defaultMode: 'light', disableSwitch: true },
    }),
  plugins: [tailwindPlugin],
}

export default config
