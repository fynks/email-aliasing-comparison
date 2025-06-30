import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Email Aliasing Comparison",
  description: "A comprehensive comparison of pricing, features, and security of email alias providers including Addy.io, SimpleLogin, DuckDuckGo Email, and more",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://email-aliasing-comparison.netlify.app'
  },
  rewrites: {
    'README.md': 'index.md'
  },
  head: [
    // Critical resource hints - prioritize most important resources
    ['link', { rel: 'preconnect', href: 'https://img.shields.io', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://img.shields.io' }],
    ['link', { rel: 'preconnect', href: 'https://github.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://github.com' }],

    // Favicons with improved metadata
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'email aliasing, email privacy, email forwarding, Addy.io, SimpleLogin, DuckDuckGo Email, Firefox Relay, email security, privacy protection, anonymous email, email aliases comparison, email providers' }],
    ['meta', { name: 'author', content: 'Email Aliasing Comparison Team' }],
    ['meta', { name: 'publisher', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large' }],
    ['meta', { name: 'language', content: 'en-US' }],

    // Open Graph Meta Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Email Aliasing Comparison - Privacy & Security Guide' }],
    ['meta', { property: 'og:description', content: 'Comprehensive comparison of email alias providers including Addy.io, SimpleLogin, DuckDuckGo Email, and more. Features, pricing, and security analysis.' }],
    ['meta', { property: 'og:url', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'og:site_name', content: 'Email Aliasing Comparison' }],
    ['meta', { property: 'og:image', content: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Email Aliasing Comparison - Privacy & Security Guide' }],
    ['meta', { name: 'twitter:description', content: 'Comprehensive comparison of email alias providers. Features, pricing, and security analysis.' }],
    ['meta', { name: 'twitter:image', content: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png' }],

  
  ],
  themeConfig: {
    logo: {
      light: '/favicon.svg',
      dark: '/favicon.svg',
      alt: 'Email Aliasing Comparison Logo'
    },
    siteTitle: 'Email Aliasing Comparison',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: {
            buttonText: 'Search providers, features & guides',
            buttonAriaLabel: 'Search email aliasing providers and guides'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results for',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Providers', 
        items: [
          { text: 'All Providers', link: '/email-alais-providers/' },
          { text: 'Addy.io vs SimpleLogin', link: '/email-alais-providers/addy-vs-simplelogin' }
        ]
      },
      { text: 'Guide', link: '/#getting-started-guide' }
    ],

    sidebar: {
      '/email-alais-providers/': [
        {
          text: 'Provider Comparisons',
          items: [
            { text: 'Overview', link: '/email-alais-providers/' },
            { text: 'Addy.io vs SimpleLogin', link: '/email-alais-providers/addy-vs-simplelogin' }
          ]
        }
      ],
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
            { text: 'Why Use Email Aliasing?', link: '/#why-use-email-aliasing' },
            { text: 'How It Works', link: '/#how-email-aliasing-works' }
          ]
        },
        {
          text: 'Provider Comparisons',
          items: [
            { text: 'Quick Comparison', link: '/#provider-comparison' },
            { text: 'By Use Case', link: '/#quick-comparison-by-use-case' },
            { text: 'All Providers', link: '/email-alais-providers/' },
            { text: 'Addy.io vs SimpleLogin', link: '/email-alais-providers/addy-vs-simplelogin' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fynks/email-aliasing-comparison' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Email Aliasing Comparison Team'
    },

    editLink: {
      pattern: 'https://github.com/fynks/email-aliasing-comparison/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
