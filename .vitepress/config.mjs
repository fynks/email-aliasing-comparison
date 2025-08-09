import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Email Aliasing Comparison",
  titleTemplate: "Complete Privacy & Security Guide",
  description: "Comprehensive comparison of the best email alias providers in 2025. Compare Addy.io, SimpleLogin, DuckDuckGo Email Protection, ForwardMail, Apple Hide My Email & more for  pricing, security, setup guides & privacy.",
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
    ['link', { rel: 'canonical', href: 'https://email-aliasing-comparison.netlify.app' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'application-name', content: 'Email Aliasing Comparison' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // Enhanced SEO Meta Tags
    ['meta', { name: 'keywords', content: 'email aliasing 2025, email privacy guide, email alias providers comparison, anonymous email service, secure email forwarding, email privacy protection, disposable email addresses, email security tools, privacy email service, Addy.io vs SimpleLogin, DuckDuckGo email protection, best email alias service, email anonymity, temporary email addresses, email forwarding service, hide real email address, email privacy tools 2025, secure email aliases, email tracking prevention, anonymous email forwarding, email privacy comparison, email alias setup guide, email security comparison, privacy-focused email, email alias generator, secure anonymous email, email privacy software, private email forwarding, email masking service, email privacy ranking, anonymous email providers' }],
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
    ['meta', { property: 'og:title', content: 'Email Aliasing Comparison - Complete Privacy & Security Guide' }],
    ['meta', { property: 'og:description', content: 'Comprehensive comparison of the best email alias providers in 2025. Compare pricing, features, security & privacy across 10+ services including Addy.io, SimpleLogin, DuckDuckGo Email Protection. Features step-by-step setup guides, security analysis & privacy comparisons.' }],
    ['meta', { property: 'og:url', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'og:site_name', content: 'Email Aliasing Comparison' }],
    ['meta', { property: 'og:image', content: 'https://email-aliasing-comparison.netlify.app/og.png' }],
    ['meta', { property: 'og:image:alt', content: 'Email Aliasing Comparison Guide - Best Email Alias Providers 2025' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'article:author', content: 'Email Privacy Experts' }],
    ['meta', { property: 'article:publisher', content: 'https://email-aliasing-comparison.netlify.app' }],
    ['meta', { property: 'article:published_time', content: '2024-01-01T00:00:00Z' }],
    ['meta', { property: 'article:modified_time', content: '2025-08-05T00:00:00Z' }],
    ['meta', { property: 'article:section', content: 'Privacy & Security' }],
    ['meta', { property: 'article:tag', content: 'Email Privacy' }],
    ['meta', { property: 'article:tag', content: 'Email Aliasing' }],
    ['meta', { property: 'article:tag', content: 'Anonymous Email' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@emailprivacy' }],
    ['meta', { name: 'twitter:creator', content: '@emailprivacy' }],
    ['meta', { name: 'twitter:title', content: 'Email Aliasing Comparison - Complete Privacy & Security Guide' }],
    ['meta', { name: 'twitter:description', content: 'Comprehensive comparison of the best email alias providers in 2025. Compare pricing, features, security & privacy across 10+ services with step-by-step setup guides and security analysis.' }],
    ['meta', { name: 'twitter:image', content: 'https://email-aliasing-comparison.netlify.app/og.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Email Aliasing Comparison Guide - Best Email Alias Providers 2025' }],

    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Email Aliasing Comparison',
      description: 'Comprehensive comparison of the best email alias providers in 2025. Compare pricing, features, security & privacy across 10+ services including Addy.io, SimpleLogin, DuckDuckGo Email Protection with step-by-step setup guides.',
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
        { 
          '@type': 'SoftwareApplication', 
          name: 'Addy.io',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.5',
            bestRating: '5',
            ratingCount: '150'
          },
          offers: {
            '@type': 'Offer',
            price: '1.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'SimpleLogin',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            bestRating: '5',
            ratingCount: '200'
          },
          offers: {
            '@type': 'Offer',
            price: '4.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'DuckDuckGo Email Protection',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.2',
            bestRating: '5',
            ratingCount: '300'
          },
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'ForwardMail',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.3',
            bestRating: '5',
            ratingCount: '80'
          },
          offers: {
            '@type': 'Offer',
            price: '3.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'Apple Hide My Email',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.0',
            bestRating: '5',
            ratingCount: '500'
          },
          offers: {
            '@type': 'Offer',
            price: '0.99',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'Firefox Relay',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '3.8',
            bestRating: '5',
            ratingCount: '120'
          },
          offers: {
            '@type': 'Offer',
            price: '0.99',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'AdGuard Mail',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '3.9',
            bestRating: '5',
            ratingCount: '90'
          },
          offers: {
            '@type': 'Offer',
            price: '2.99',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: '33Mail',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '3.5',
            bestRating: '5',
            ratingCount: '60'
          },
          offers: {
            '@type': 'Offer',
            price: '1.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'IronVest',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '3.7',
            bestRating: '5',
            ratingCount: '70'
          },
          offers: {
            '@type': 'Offer',
            price: '39.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        },
        { 
          '@type': 'SoftwareApplication', 
          name: 'Erine.email',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.1',
            bestRating: '5',
            ratingCount: '40'
          },
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        }
      ]
    })],

    // Additional JSON-LD for Article
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Email Aliasing Comparison - Complete Privacy & Security Guide',
      description: 'Comprehensive comparison and review of the top email alias providers in 2025, featuring detailed analysis of pricing, features, security, privacy policies, setup guides, and expert recommendations for maximum email privacy protection.',
      author: {
        '@type': 'Organization',
        name: 'Email Privacy Experts'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Email Aliasing Comparison Guide',
        logo: {
          '@type': 'ImageObject',
          url: 'https://email-aliasing-comparison.netlify.app/og.png'
        }
      },
      datePublished: '2024-01-01',
      dateModified: '2025-08-05',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://email-aliasing-comparison.netlify.app'
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://email-aliasing-comparison.netlify.app/og.png',
        width: 512,
        height: 512
      },
      articleSection: 'Privacy & Security',
      keywords: 'email aliasing, email privacy, anonymous email, secure email, privacy tools, email security, email forwarding, disposable email, email protection'
    })],

    // Additional JSON-LD for FAQ and How-To
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is email aliasing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Email aliasing is a privacy technique that lets you create multiple email addresses that all forward to your real inbox, helping protect your privacy and prevent spam.'
          }
        },
        {
          '@type': 'Question',
          name: 'Which is the best email alias provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best provider depends on your needs: DuckDuckGo for beginners (free), Addy.io Lite for best value ($1/month), and SimpleLogin for maximum security ($4/month).'
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

    // JSON-LD for Comparison
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: 'Email Alias Providers',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.2',
          bestRating: '5',
          ratingCount: '1570'
        },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '0',
          highPrice: '39',
          priceCurrency: 'USD',
          offerCount: '10'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'Email Privacy Experts'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'Comprehensive comparison of the best email alias providers in 2025, including detailed analysis of pricing, features, security, and privacy policies.'
    })]


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
            buttonText: 'Search guides & comparisons',
            buttonAriaLabel: 'Search email alias providers, setup guides, security analysis, and pricing comparisons'
          },
          modal: {
            displayDetails: 'Display detailed search results',
            resetButtonTitle: 'Reset search query',
            backButtonTitle: 'Close search modal',
            noResultsText: 'No results found for',
            footer: {
              selectText: 'to select result',
              navigateText: 'to navigate results',
              closeText: 'to close search'
            }
          }
        }
      }
    },
    nav: [
      {
        text: 'Quick Start',
        items: [
          { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
          { text: 'Provider Selector', link: '/#interactive-provider-selector' },
          { text: 'Setup Guide', link: '/#complete-setup-guide' },
          { text: 'Top 3 Providers', link: '/#top-3-beginner-friendly-providers' }
        ]
      },
      {
        text: 'Compare',
        items: [
          { text: 'Quick Reference', link: '/#quick-reference-table' },
          { text: 'Free Plans', link: '/#free-plans-comparison' },
          { text: 'Paid Plans', link: '/#paid-plans-comparison' },
          { text: 'Privacy & Security', link: '/#privacy-and-data-collection-comparison' },
          { text: 'Addy.io vs SimpleLogin', link: '/#addyio-vs-simplelogin' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/#complete-setup-guide' },
          { text: 'Best Practices', link: '/#step-5-best-practices-and-optimization' },
          { text: 'Common Mistakes', link: '/#step-6-common-mistakes-to-avoid' },
          { text: 'Migration & Scaling', link: '/#step-7-migration-and-scaling' }
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'FAQ', link: '/#frequently-asked-questions' },
          { text: 'Troubleshooting', link: '/#troubleshooting-guide' },
          { text: 'Glossary', link: '/#feature-glossary' },
          { text: 'Additional Resources', link: '/#additional-resources' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Understanding Email Aliasing',
          collapsed: false,
          items: [
            { text: 'What is Email Aliasing?', link: '/#what-is-email-aliasing' },
            { text: 'How Email Aliasing Works', link: '/#how-email-aliasing-works' },
            { text: 'Types of Email Aliasing', link: '/#types-of-email-aliasing' },
            { text: 'Benefits and Use Cases', link: '/#benefits-and-use-cases' }
          ]
        },
        {
          text: 'Quick Start Guide',
          collapsed: false,
          items: [
            { text: 'Interactive Provider Selector', link: '/#interactive-provider-selector' },
            { text: 'Top 3 Beginner-Friendly Providers', link: '/#top-3-beginner-friendly-providers' },
            { text: 'Complete Setup Guide', link: '/#complete-setup-guide' },
            { text: 'Best Practices & Optimization', link: '/#step-5-best-practices-and-optimization' },
            { text: 'Common Mistakes to Avoid', link: '/#step-6-common-mistakes-to-avoid' },
            { text: 'Migration and Scaling', link: '/#step-7-migration-and-scaling' }
          ]
        },
        {
          text: 'Provider Comparisons',
          collapsed: false,
          items: [
            { text: 'Quick Reference Table', link: '/#quick-reference-table' },
            { text: 'Free Plans Comparison', link: '/#free-plans-comparison' },
            { text: 'Paid Plans Comparison', link: '/#paid-plans-comparison' },
            { text: 'Privacy & Data Collection', link: '/#privacy-and-data-collection-comparison' },
            { text: 'Advanced Features & Security', link: '/#advanced-features-and-security-comparison' },
            { text: 'Cancellation Policies', link: '/#cancellation-policies-comparison' },
            { text: 'Addy.io vs SimpleLogin', link: '/#addyio-vs-simplelogin' }
          ]
        },
        {
          text: 'Legal and Compliance',
          collapsed: true,
          items: [
            { text: 'Privacy Law Comparison', link: '/#privacy-law-comparison' },
            { text: 'Jurisdiction Analysis', link: '/#jurisdiction-analysis' },
            { text: 'Legal Framework Overview', link: '/#legal-framework-overview' }
          ]
        },
        {
          text: 'Reference & Support',
          collapsed: true,
          items: [
            { text: 'Feature Glossary', link: '/#feature-glossary' },
            { text: 'Troubleshooting Guide', link: '/#troubleshooting-guide' },
            { text: 'Frequently Asked Questions', link: '/#frequently-asked-questions' },
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
      message: 'Released under the MIT License. Helping users make informed email privacy decisions.',
      copyright: 'Copyright © 2024-2025 Email Aliasing Comparison Guide'
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
