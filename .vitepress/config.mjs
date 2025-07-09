import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Best Email Alias Providers Guide",
  description: "Compare pricing, features, and security of Addy.io, SimpleLogin, DuckDuckGo Email Protection, ForwardMail, Apple Hide My Email, Firefox Relay, AdGuard Mail, 33Mail, IronVest, and Erine.email.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  rewrites: {
    'README.md': 'index.md'
  },
  head: [
    // Performance optimization
    ['link', { rel: 'preload', href: '/favicon.svg', as: 'image' }],
    
    // Critical resource hints - prioritize most important resources
    ['link', { rel: 'preconnect', href: 'https://img.shields.io', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://img.shields.io' }],
    ['link', { rel: 'preconnect', href: 'https://github.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://github.com' }],

    // Favicons and PWA
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'canonical', href: 'https://email-aliasing-comparison.netlify.app' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'email aliasing 2025, best email alias providers, email privacy service comparison, anonymous email forwarding, secure email aliases, email privacy protection, hide real email address, disposable email service, temporary email aliases, email forwarding service, privacy email tools, anonymous email service, email alias generator, secure email forwarding, email privacy guide 2025, Addy.io review, SimpleLogin vs Addy.io, DuckDuckGo email protection, Firefox Relay alternative, Apple Hide My Email review, ForwardMail comparison, AdGuard Mail review, 33Mail alternative, IronVest email masking, Erine.email review, email alias service comparison, best anonymous email service, email privacy tools 2025, secure email providers, email forwarding comparison, privacy-focused email, anonymous email providers, email alias providers ranking, email security service, privacy email forwarding, email anonymity service, temporary email providers, disposable email comparison, email privacy software, secure email alias service, email protection service, anonymous forwarding service, email privacy solutions, secure anonymous email, email alias security, privacy email service, email forwarding security, anonymous email tools, email privacy apps, secure email privacy, email alias features, privacy email comparison, email forwarding providers, secure email solutions, email privacy features, anonymous email comparison, email alias reviews, privacy email providers, secure email forwarding service, email privacy ranking, anonymous email security, email alias guide, privacy email tools comparison, secure email alias providers, email forwarding guide, anonymous email providers comparison, email privacy service review, secure email privacy service, email alias provider comparison, privacy email service ranking, secure anonymous email service, email forwarding service comparison, privacy-focused email providers, secure email alias comparison, anonymous email service review, email privacy provider guide, secure email forwarding comparison, privacy email alias service, anonymous email forwarding service, secure email privacy tools, email alias security comparison, privacy email forwarding service, secure anonymous email providers, email privacy service comparison 2025' }],
    ['meta', { name: 'author', content: 'Email Privacy Experts' }],
    ['meta', { name: 'publisher', content: 'Email Aliasing Comparison Guide' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'bingbot', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'en-US' }],
    ['meta', { name: 'content-language', content: 'en-US' }],
    ['meta', { name: 'distribution', content: 'global' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['meta', { name: 'revisit-after', content: '7 days' }],

    // Open Graph Meta Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Best Email Alias Providers 2025 - Complete Privacy & Security Guide' }],
    ['meta', { property: 'og:description', content: 'Discover the top email alias providers in 2025. Expert reviews and comparisons of Addy.io, SimpleLogin, DuckDuckGo Email, and 7+ other privacy services. Find the perfect email aliasing solution with our comprehensive guide featuring pricing analysis, security evaluations, and migration tutorials.' }],
    ['meta', { property: 'og:url', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'og:site_name', content: 'Email Aliasing Comparison 2025' }],
    ['meta', { property: 'og:image', content: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png' }],
    ['meta', { property: 'og:image:alt', content: 'Email Aliasing Comparison Guide - Best Email Alias Providers 2025' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'article:author', content: 'Email Privacy Experts' }],
    ['meta', { property: 'article:publisher', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'article:published_time', content: '2024-01-01T00:00:00Z' }],
    ['meta', { property: 'article:modified_time', content: '2025-07-09T00:00:00Z' }],
    ['meta', { property: 'article:section', content: 'Privacy & Security' }],
    ['meta', { property: 'article:tag', content: 'Email Privacy' }],
    ['meta', { property: 'article:tag', content: 'Email Aliasing' }],
    ['meta', { property: 'article:tag', content: 'Anonymous Email' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@emailprivacy' }],
    ['meta', { name: 'twitter:creator', content: '@emailprivacy' }],
    ['meta', { name: 'twitter:title', content: 'Best Email Alias Providers 2025 - Complete Privacy & Security Guide' }],
    ['meta', { name: 'twitter:description', content: 'Discover the top email alias providers in 2025. Expert reviews of 10+ services including Addy.io, SimpleLogin, DuckDuckGo Email. Complete with pricing analysis, security evaluations, and step-by-step migration guides.' }],
    ['meta', { name: 'twitter:image', content: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Email Aliasing Comparison Guide - Best Email Alias Providers 2025' }],

    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Email Aliasing Comparison 2025',
      description: 'Complete guide to the best email alias providers in 2025. Compare pricing, features, and security of top email privacy services.',
      url: 'https://email-aliasing-comparison.netlify.app',
      author: {
        '@type': 'Organization',
        name: 'Email Privacy Experts'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Email Aliasing Comparison Guide',
        url: 'https://email-aliasing-comparison.netlify.app'
      },
      inLanguage: 'en-US',
      about: [
        { '@type': 'Thing', name: 'Email Privacy' },
        { '@type': 'Thing', name: 'Email Aliasing' },
        { '@type': 'Thing', name: 'Anonymous Email' },
        { '@type': 'Thing', name: 'Email Security' },
        { '@type': 'Thing', name: 'Privacy Tools' }
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Addy.io' },
        { '@type': 'SoftwareApplication', name: 'SimpleLogin' },
        { '@type': 'SoftwareApplication', name: 'DuckDuckGo Email Protection' },
        { '@type': 'SoftwareApplication', name: 'ForwardMail' },
        { '@type': 'SoftwareApplication', name: 'Apple Hide My Email' },
        { '@type': 'SoftwareApplication', name: 'Firefox Relay' },
        { '@type': 'SoftwareApplication', name: 'AdGuard Mail' },
        { '@type': 'SoftwareApplication', name: '33Mail' },
        { '@type': 'SoftwareApplication', name: 'IronVest' },
        { '@type': 'SoftwareApplication', name: 'Erine.email' }
      ]
    })],

    // Additional JSON-LD for Article
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Best Email Alias Providers 2025 - Complete Privacy & Security Guide',
      description: 'Comprehensive comparison and review of the top email alias providers in 2025, featuring detailed analysis of pricing, features, security, and privacy policies.',
      author: {
        '@type': 'Organization',
        name: 'Email Privacy Experts'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Email Aliasing Comparison Guide',
        logo: {
          '@type': 'ImageObject',
          url: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png'
        }
      },
      datePublished: '2024-01-01',
      dateModified: '2025-07-09',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://email-aliasing-comparison.netlify.app'
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://email-aliasing-comparison.netlify.app/icons/icon-512x512.png',
        width: 512,
        height: 512
      },
      articleSection: 'Privacy & Security',
      keywords: 'email aliasing, email privacy, anonymous email, secure email, privacy tools, email security'
    })]

  
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
            buttonText: 'Search email providers, features & guides',
            buttonAriaLabel: 'Search the best email alias providers, features and privacy guides'
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
