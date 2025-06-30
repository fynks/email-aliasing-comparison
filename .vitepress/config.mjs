import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Email Aliasing Comparison",
  description: "A comprehensive comparison of pricing, features, and security of email alias providers", ignoreDeadLinks: true,
  cleanUrls: true,
  rewrites: {
    'README.md': 'index.md'
  },
  head: [
    // Critical resource hints - prioritize most important resources
    ['link', { rel: 'preconnect', href: 'https://img.shields.io', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://img.shields.io' }],
    ['link', { rel: 'preconnect', href: 'https://profile-counter.glitch.me', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://profile-counter.glitch.me' }],

    // Favicons with improved metadata
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    // Performance and CLS optimization headers
    ['link', { rel: 'preconnect', href: 'https://img.shields.io', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://img.shields.io' }],
    ['link', { rel: 'preconnect', href: 'https://github.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://github.com' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: '' }],

    ['meta', { name: 'author', content: 'Fynks' }],
    ['meta', { name: 'publisher', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large' }],
    ['meta', { name: 'language', content: 'en-US' }],

  
  ],
  themeConfig: {
    logo: {
      light: '/favicon.svg',
      dark: '/favicon.svg',
      alt: 'Site Logo'
    },
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
            buttonText: 'Search apps, modules & guides',
            buttonAriaLabel: 'Search root apps, modules & root guides'
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
      { text: 'Providers', link: '/email-alais-providers/index.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Custom Theme Examples', link: '/addy-vs-simplelogin.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fynks/email-aliasing-comparison' }
    ]
  }
})
