import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: "en-US",
  title: "Email Aliasing Comparison",
  titleTemplate: ":title | Complete Privacy Guide",
  description: "Compare 10+ email alias providers by features, pricing, security, and privacy. Compare Addy.io, SimpleLogin, DuckDuckGo Email and more.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
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
    ['link', { rel: 'canonical', href: 'https://email-aliasing-comparison.pages.dev' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // Enhanced SEO Meta Tags
    ['meta', { name: 'keywords', content: 'email aliasing, email alias providers, email privacy, anonymous email, SimpleLogin, Addy.io, DuckDuckGo email, email security, disposable email, email forwarding, hide email address, email protection 2025' }],
    ['meta', { name: 'author', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'bingbot', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'en-US' }],
    ['meta', { name: 'revisit-after', content: '7 days' }],

    // Open Graph Meta Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Email Aliasing Comparison - Best Privacy Solutions 2025' }],
    ['meta', { property: 'og:description', content: 'Compare 10+ email alias providers by features, pricing, and security. Expert analysis of Addy.io, SimpleLogin, DuckDuckGo Email, and more.' }],
    ['meta', { property: 'og:url', content: 'https://email-aliasing-comparison.pages.dev' }],
    ['meta', { property: 'og:site_name', content: 'Email Aliasing Comparison' }],
    ['meta', { property: 'og:image', content: 'https://email-aliasing-comparison.pages.dev/og.png' }],
    ['meta', { property: 'og:image:alt', content: 'Email Aliasing Comparison - Best Privacy Solutions 2025' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Email Aliasing Comparison - Best Privacy Solutions 2025' }],
    ['meta', { name: 'twitter:description', content: 'Compare 10+ email alias providers by features, pricing, and security. Expert analysis and recommendations.' }],
    ['meta', { name: 'twitter:image', content: 'https://email-aliasing-comparison.pages.dev/og.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Email Aliasing Comparison Guide' }],

    // verification meta tags
    ['meta', { name: 'google-site-verification', content: 'yh6OZ9qZhOAVRs3tkFAwwBYIb3BKrveBy6C0QEVHpw0' }],

    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Email Aliasing Comparison',
      description: 'Compare 10+ email alias providers by features, pricing, security, and privacy. Expert analysis to help you find the best email privacy solution.',
      url: 'https://email-aliasing-comparison.pages.dev',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://email-aliasing-comparison.pages.dev/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      inLanguage: 'en-US'
    })],

    // Additional JSON-LD for FAQ
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is email aliasing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Email aliasing lets you create alternate addresses that forward to your real inbox, protecting your privacy without exposing your primary email.'
          }
        },
        {
          '@type': 'Question',
          name: 'Which is the best email alias provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best provider depends on your needs: DuckDuckGo for beginners (free), Addy.io for best value ($1/month), and SimpleLogin for maximum security ($4/month).'
          }
        },
        {
          '@type': 'Question',
          name: 'Are email aliases secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, email aliases provide significant security benefits by hiding your real email address, reducing spam, and limiting exposure in data breaches.'
          }
        }
      ]
    })],

    // Additional meta tags for humans.txt
    ['link', { rel: 'author', href: '/humans.txt' }]


  ],
  themeConfig: {
    logo: {
      light: '/favicon.svg',
      dark: '/favicon.svg',
      alt: 'Email Aliasing Comparison Guide Logo'
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
            boost: {
              title: 4,
              text: 2,
              titles: 3,
              heading: 3
            }
          }
        },
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search email alias providers and guides'
          },
          modal: {
            displayDetails: 'Display detailed results',
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
        text: 'Getting Started',
        items: [
          { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
          { text: 'Key Benefits', link: '/#key-benefits' },
          { text: 'How it Works', link: '/#how-email-aliasing-works' },
          { text: 'Provider Selector', link: '/#provider-selector' },
          { text: 'Top Recommendations', link: '/#top-3-recommendations' }
        ]
      },
      {
        text: 'Comparisons',
        items: [
          { text: 'Quick Reference Table', link: '/#quick-reference-table' },
          { text: 'Free Plans Comparison', link: '/#free-plans-detailed-comparison' },
          { text: 'Paid Plans Comparison', link: '/#paid-plans-detailed-comparison' },
          { text: 'Addy.io vs SimpleLogin', link: '/#addy-io-vs-simplelogin' }
        ]
      },
      {
        text: 'Privacy & Security',
        items: [
          { text: 'Data Collection', link: '/#data-collection-and-retention' },
          { text: 'Legal & Compliance', link: '/#legal-and-compliance' },
          { text: 'Cancellation Policies', link: '/#cancellation-downgrade-behavior'}
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Best Practices', link: '/#best-practices' },
          { text: 'Common Mistakes', link: '/#mistakes-to-avoid' },
          { text: 'FAQ', link: '/#frequently-asked-questions' },
          { text: 'Troubleshooting', link: '/#troubleshooting-guide' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
            { text: 'Key Benefits', link: '/#key-benefits' },
            { text: 'How it Works', link: '/#how-email-aliasing-works' },
            { text: 'Types of Email Aliasing', link: '/#types-of-email-aliasing' },
            { text: 'Provider Selector', link: '/#provider-selector' },
            { text: 'Top 3 Recommendations', link: '/#top-3-recommendations' }
          ]
        },
        {
          text: 'Provider Comparisons',
          collapsed: false,
          items: [
            { text: 'Quick Reference Table', link: '/#quick-reference-table' },
            { text: 'Free Plans Comparison', link: '/#free-plans-detailed-comparison' },
            { text: 'Paid Plans Comparison', link: '/#paid-plans-detailed-comparison' },
            { text: 'Addy.io vs SimpleLogin', link: '/#addyio-vs-simplelogin' }
          ]
        },
        {
          text: 'Privacy & Security Analysis',
          collapsed: false,
          items: [
            { text: 'Data Collection & Retention', link: '/#data-collection-and-retention' },
            { text: 'Legal & Compliance', link: '/#legal-and-compliance' },
            { text: 'Cancellation & Downgrade Policies', link: '/#cancellation-downgrade-behavior' }
          ]
        },
        {
          text: 'Best Practices',
          collapsed: true,
          items: [
            { text: 'Alias Naming Conventions', link: '/#alias-naming-conventions' },
            { text: 'Organization Strategies', link: '/#organization-strategies' },
            { text: 'Common Mistakes to Avoid', link: '/#mistakes-to-avoid' }
          ]
        },
        {
          text: 'Reference & Support',
          collapsed: true,
          items: [
            { text: 'Feature Glossary', link: '/#feature-glossary' },
            { text: 'Troubleshooting Guide', link: '/#troubleshooting-guide' },
            { text: 'FAQ', link: '/#frequently-asked-questions' },
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
      message: 'Released under the MIT License. Helping you make informed email privacy decisions.',
      copyright: 'Copyright © 2024-2025 Email Aliasing Comparison'
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
  },

  // Mermaid configuration
  mermaid: {
    theme: 'default',
    themeVariables: {
      primaryColor: '#3b82f6',
      primaryTextColor: '#1f2937',
      primaryBorderColor: '#2563eb',
      lineColor: '#6b7280',
      secondaryColor: '#06b6d4',
      tertiaryColor: '#f3f4f6'
    }
  },
  mermaidPlugin: {
    class: 'mermaid'
  }
}))
