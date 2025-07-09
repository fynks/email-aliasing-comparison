import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Email Aliasing Comparison",
  description: "A comprehensive guide to email alias providers with detailed comparisons, pricing analysis, security considerations, and migration guides. Compare Addy.io, SimpleLogin, DuckDuckGo Email, ForwardMail, Apple Hide My Email, and more.",
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
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'email aliasing, email privacy, email forwarding, Addy.io, SimpleLogin, DuckDuckGo Email, Firefox Relay, AdGuard Mail, ForwardMail, Apple Hide My Email, 33Mail, IronVest, Erine.email, email security, privacy protection, anonymous email, email aliases comparison, email providers, email privacy guide, secure email, anonymous forwarding, email alias providers comparison, privacy tools, email security guide' }],
    ['meta', { name: 'author', content: 'Email Aliasing Comparison Team' }],
    ['meta', { name: 'publisher', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large' }],
    ['meta', { name: 'language', content: 'en-US' }],

    // Open Graph Meta Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Email Aliasing Comparison - Complete Privacy & Security Guide' }],
    ['meta', { property: 'og:description', content: 'Comprehensive guide to email alias providers with detailed comparisons, pricing analysis, security considerations, and migration guides. Compare Addy.io, SimpleLogin, DuckDuckGo Email, and 7+ other providers.' }],
    ['meta', { property: 'og:url', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'og:site_name', content: 'Email Aliasing Comparison' }],
    ['meta', { property: 'og:image', content: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Email Aliasing Comparison - Complete Privacy & Security Guide' }],
    ['meta', { name: 'twitter:description', content: 'Comprehensive guide to email alias providers with detailed comparisons, pricing analysis, and migration guides. Compare 10+ providers including Addy.io and SimpleLogin.' }],
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
            buttonText: 'Search providers',
            buttonAriaLabel: 'Search providers'
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
      { 
        text: 'Providers', 
        items: [
          { text: 'Provider Directory', link: '/#complete-provider-directory' },
          { text: 'Comparison Tables', link: '/#comparison-tables' },
          { text: 'Detailed Analysis', link: '/#detailed-provider-analysis' },
          { text: 'Cancellation Policies', link: '/#cancellation-policies' }
        ]
      },
      { 
        text: 'Guides', 
        items: [
          { text: 'Getting Started', link: '/#getting-started-guide' },
          { text: 'Use Case Recommendations', link: '/#use-case-recommendations' },
          { text: 'Migration Guide', link: '/#migration-between-providers' },
          { text: 'Security Considerations', link: '/#security-and-privacy-considerations' }
        ]
      },
      { text: 'Resources', link: '/#additional-resources' }
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
            { text: 'Introduction', link: '/#introduction' },
            { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
            { text: 'Benefits and Use Cases', link: '/#benefits-and-use-cases' },
            { text: 'How Email Aliasing Works', link: '/#how-email-aliasing-works' }
          ]
        },
        {
          text: 'Provider Analysis',
          items: [
            { text: 'Provider Categories', link: '/#provider-categories' },
            { text: 'Complete Directory', link: '/#complete-provider-directory' },
            { text: 'Comparison Tables', link: '/#comparison-tables' },
            { text: 'Detailed Analysis', link: '/#detailed-provider-analysis' },
            { text: 'Cancellation Policies', link: '/#cancellation-policies' }
          ]
        },
        {
          text: 'Practical Guides',
          items: [
            { text: 'Use Case Recommendations', link: '/#use-case-recommendations' },
            { text: 'Getting Started Guide', link: '/#getting-started-guide' },
            { text: 'Migration Between Providers', link: '/#migration-between-providers' },
            { text: 'Security & Privacy', link: '/#security-and-privacy-considerations' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Advanced Features', link: '/#advanced-features-comparison' },
            { text: 'Additional Resources', link: '/#additional-resources' },
            { text: 'Contributing', link: '/#contributing' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fynks/email-aliasing-comparison' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2025 Email Aliasing Comparison Team'
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
