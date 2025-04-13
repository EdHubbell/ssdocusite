import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'StomaStrap',
  tagline: 'Strap that s&!t down',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://stomastrap.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EdHubbell', // Usually your GitHub org/user name.
  projectName: 'ssdocusite', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-NT7QM3P5',
        },
        gtag: {
          trackingID: ['GTM-NT7QM3P5','G-68XSQE47YJ', 'GT-MBTLN7G2'],
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/stomastrap-social-card.jpg',
    navbar: {
      title: 'StomaStrap',
      logo: {
        alt: 'StomaStrap Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'infoSidebar',
          position: 'left',
          label: 'Info',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Info',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Sales@StomaStrap.com',
              href: 'mailto:sales@stomastrap.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'StomaStrap Blog',
              to: '/blog',
            },
            {
              label: 'GSDware LLC',
              href: 'https://gsdware.com/',
            },
    
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StomaStrap LLC. Built by GSDware LLC with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
