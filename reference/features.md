# Feature Glossary

Complete guide to email aliasing terminology and features. Understand every term and feature mentioned in comparisons.

## Core Concepts

### Alias
**Definition**: An email address that forwards messages to your real inbox.
**Example**: `shopping@provider.com` → forwards to `yourname@gmail.com`
**Also called**: Forwarding address, email mask, email redirect

### Catch-All
**Definition**: Automatically forwards ALL emails sent to a domain to your inbox.
**Example**: With catch-all enabled on `yourdomain.com`, any email to `anything@yourdomain.com` reaches you
**Use case**: Create aliases on-the-fly without pre-creating them
**Risk**: Can receive a lot of spam if domain is discovered

### Reply Support
**Definition**: Ability to send emails FROM your alias address.
**Without reply support**: Recipients see your real email when you respond
**With reply support**: Recipients only see your alias when you respond
**Also called**: Send from alias, anonymous replies

### Custom Domain
**Definition**: Using your own domain name for aliases instead of the provider's shared domain.
**Example**: `alias@yourdomain.com` instead of `alias@provider.com`
**Benefits**: Professional appearance, full control, can switch providers
**Requirements**: Domain ownership, DNS configuration

---

## Provider Types

### Shared Domains
**Definition**: Email domains provided by the alias service that multiple users share.
**Examples**: `@simplelogin.io`, `@duck.com`, `@anonaddy.me`
**Pros**: No setup required, works immediately
**Cons**: Less professional, potential blocking by some services

### Premium Domains
**Definition**: Higher-quality shared domains offered by providers, often on paid plans.
**Examples**: `@aleeas.com` (Addy.io), `@slmail.me` (SimpleLogin)
**Benefits**: More professional appearance, less likely to be blocked
**Access**: Usually requires paid subscription

### Subdomain Aliases
**Definition**: Aliases that use subdomains of your custom domain.
**Example**: `username@mail.yourdomain.com`
**Use case**: Separating alias traffic from main domain email
**Setup**: Requires DNS subdomain configuration

---

## Advanced Features

### Directory/Subdomain Feature
**Definition**: Create aliases automatically using a pattern without pre-creating them.
**SimpleLogin example**: Enable `username+anything@simplelogin.io` format
**Addy.io example**: Use `anything.username@anonaddy.me` format
**Benefit**: Infinite aliases without manual creation
**Risk**: Less control over what gets created

### Rules Engine
**Definition**: Automated actions triggered by incoming emails.
**Basic rules**: Forward, block, delete based on sender or subject
**Advanced rules**: Complex conditions using regex patterns
**Examples**:
- Auto-delete emails containing "unsubscribe"
- Forward newsletter emails to specific folder
- Block emails from certain domains

### Bandwidth Limiting
**Definition**: Restriction on amount of email data that can be forwarded per month.
**Purpose**: Prevent abuse and control provider costs
**Common limits**: 10MB (free plans), 100MB-1GB (paid plans)
**What counts**: Size of forwarded emails, not number of emails

### Webhook Support
**Definition**: Real-time HTTP notifications sent to your applications when emails are received.
**Use cases**: 
- Trigger actions in your software when emails arrive
- Log email activity to external systems
- Integrate with automation tools (Zapier, IFTTT)
**Providers**: Addy.io, ForwardMail

---

## Security Features

### GPG/PGP Encryption
**Definition**: End-to-end encryption that protects email content from provider and others.
**GPG**: GNU Privacy Guard (used by Addy.io)
**PGP**: Pretty Good Privacy (used by SimpleLogin)
**Setup**: Generate key pair, upload public key to provider
**Benefit**: Even provider can't read your encrypted emails

### Two-Factor Authentication (2FA)
**Definition**: Additional security layer requiring second form of verification.
**TOTP**: Time-based codes from apps like Google Authenticator
**WebAuthn**: Hardware security keys (YubiKey, etc.)
**SMS**: Text message codes (less secure)
**Recommendation**: Use TOTP or WebAuthn for best security

### Zero-Knowledge Architecture
**Definition**: Provider design where service can't access your private data.
**Implementation**: All sensitive data encrypted with keys only you control
**Reality**: Few email alias providers are truly zero-knowledge
**Closest**: Providers with end-to-end encryption (GPG/PGP)

---

## Account Management

### Bulk Operations
**Definition**: Ability to manage multiple aliases simultaneously.
**Examples**: 
- Enable/disable multiple aliases at once
- Export/import alias lists via CSV
- Apply rules to groups of aliases
- Mass delete unused aliases
**Providers**: Mainly Addy.io Pro, some SimpleLogin features

### Usage Analytics
**Definition**: Detailed statistics about your alias usage.
**Metrics**: 
- Number of emails forwarded per alias
- Bandwidth usage over time
- Most active aliases
- Spam/blocked email counts
**Providers**: Addy.io (detailed), SimpleLogin (basic), others (limited)

### API Access
**Definition**: Programming interface for managing aliases programmatically.
**Uses**:
- Automate alias creation/deletion
- Integrate with other software
- Build custom management tools
- Bulk operations via scripts
**Providers**: Addy.io, SimpleLogin, ForwardMail

---

## Email Processing

### Spam Filtering
**Definition**: Automatic detection and blocking of unwanted emails.
**Basic filtering**: Simple keyword and sender blocking
**Advanced filtering**: Machine learning, reputation systems
**SpamAssassin**: Open-source spam filter used by some providers
**User control**: Ability to whitelist/blacklist senders

### Email Tracking Removal
**Definition**: Automatic removal of tracking pixels and links from emails.
**Tracking pixels**: Invisible images that track when you open emails
**Link tracking**: Modified URLs that track when you click
**Providers**: DuckDuckGo (built-in), Firefox Relay
**Benefit**: Improved privacy from email marketers

### Header Modification
**Definition**: Changes made to email headers during forwarding.
**Original headers**: Often preserved for debugging
**Added headers**: Provider may add forwarding information
**Privacy**: Some providers strip identifying information
**Technical**: Important for deliverability and spam filtering

---

## Plan Types

### Freemium Model
**Definition**: Free tier with limitations, paid upgrades for full features.
**Free limitations**: Usually alias count, bandwidth, or feature restrictions
**Upgrade triggers**: When you outgrow free limitations
**Examples**: SimpleLogin (10 free), AdGuard Mail (10 free)

### Trial Period
**Definition**: Full access for limited time, then requires payment.
**Typical length**: 7-30 days
**Purpose**: Let users test full features before buying
**After trial**: Usually downgrades to limited free plan or stops working

### Usage-Based Billing
**Definition**: Pricing based on actual usage rather than fixed plans.
**Metrics**: Number of aliases, bandwidth, emails processed
**Pros**: Pay only for what you use
**Cons**: Unpredictable costs, complex pricing
**Reality**: Most providers use fixed-tier pricing instead

---

## Technical Terms

### MX Records
**Definition**: DNS records that specify which mail servers handle email for a domain.
**Purpose**: Tell other email servers where to deliver mail for your domain
**Format**: `yourdomain.com. IN MX 10 mx1.provider.com.`
**Setup**: Required when using custom domains with alias providers

### SPF (Sender Policy Framework)
**Definition**: DNS record that specifies which servers can send email for your domain.
**Purpose**: Prevent email spoofing and improve deliverability
**Format**: `"v=spf1 include:provider.com ~all"`
**Alias impact**: Provider must be authorized to send from your domain

### DKIM (DomainKeys Identified Mail)
**Definition**: Cryptographic authentication that proves emails haven't been tampered with.
**Setup**: Provider generates keys, you add public key to DNS
**Benefit**: Improves email deliverability and trust
**Alias providers**: Handle DKIM signing automatically

### DMARC (Domain-based Message Authentication)
**Definition**: Policy that tells receiving servers what to do with emails that fail SPF/DKIM.
**Policies**: None (monitor), Quarantine (spam folder), Reject (bounce)
**Reports**: Provides feedback on email authentication results
**Alias setup**: Must align with SPF/DKIM configuration

---

## Mobile & Browser Features

### Browser Extensions
**Definition**: Add-ons that integrate alias creation into web browsing.
**Features**:
- Auto-detect email fields
- Generate aliases with one click
- Manage existing aliases
- Fill forms automatically
**Browsers**: Chrome, Firefox, Safari, Edge support varies by provider

### Mobile Applications
**Definition**: Native smartphone apps for alias management.
**Features**:
- Create/manage aliases on-the-go
- Receive push notifications
- Quick alias generation
- Account management
**Platforms**: iOS, Android availability varies by provider

### Progressive Web Apps (PWA)
**Definition**: Web applications that work like native apps.
**Benefits**: No app store required, works offline, push notifications
**Alias providers**: Some offer PWA versions of their web interfaces
**Access**: Usually through "Add to Home Screen" in mobile browsers

---

## Business Features

### Team Management
**Definition**: Features for managing multiple users under one organization.
**User roles**: Admin, manager, user with different permissions
**Centralized billing**: One payment for multiple team members
**Audit logs**: Track who created/modified aliases
**Providers**: Mainly SimpleLogin business plans

### Single Sign-On (SSO)
**Definition**: Use existing organizational login systems for alias provider access.
**Protocols**: SAML, OIDC, OAuth integration
**Benefits**: Simplified user management, consistent security policies
**Availability**: Enterprise plans only, limited providers

### Compliance Features
**Definition**: Features required for regulatory compliance in business environments.
**GDPR**: Data export, deletion, consent management
**SOC 2**: Security and availability audit standards
**Data residency**: Control over where data is stored geographically
**Audit logs**: Detailed activity tracking for compliance reporting

---

## Legacy & Compatibility

### Plus Addressing
**Definition**: Built-in email aliasing using + symbols (Gmail, Outlook).
**Format**: `yourname+tag@gmail.com`
**Pros**: Free, no additional service needed
**Cons**: Easy to remove +tag, limited privacy, no management features
**Use case**: Simple categorization, testing

### Dot Trick (Gmail)
**Definition**: Gmail ignores dots in email addresses.
**Example**: `your.name@gmail.com` = `yourname@gmail.com`
**Limitation**: Limited variations, not true privacy
**Security risk**: Can be exploited for account takeover attempts

### Sub-addressing Standards
**Definition**: RFC 5233 standard for email sub-addressing.
**Implementation**: Varies by email provider
**Delimiter**: Usually + but can be other characters
**Alias providers**: Some support importing + addresses

---

## Performance Metrics

### Delivery Time
**Definition**: How long emails take to forward from alias to your inbox.
**Typical**: 5-30 seconds for most providers
**Factors**: Provider infrastructure, geographic distance, email size
**Peak times**: May be slower during high-traffic periods

### Uptime/Reliability
**Definition**: Percentage of time service is available and working correctly.
**Enterprise**: 99.9% or higher expected
**Standard**: 99%+ acceptable for personal use
**Monitoring**: Some providers publish status pages

### Throughput Limits
**Definition**: Maximum number of emails that can be processed per time period.
**Rate limiting**: Protection against abuse and spam
**Typical limits**: 50-100 emails per hour for free plans
**Scaling**: Paid plans usually have higher limits

---

## Future Technologies

### Quantum-Ready Encryption
**Definition**: Encryption methods designed to resist future quantum computer attacks.
**Current status**: Research phase, some providers preparing
**Timeline**: Quantum threat expected in 10-20 years
**Providers**: ForwardMail mentions quantum preparation

### AI-Powered Features
**Definition**: Machine learning features for email management.
**Potential uses**: Smart spam filtering, automatic categorization, threat detection
**Privacy concerns**: AI processing may require reading email content
**Current status**: Limited implementation in alias providers

### Blockchain Integration
**Definition**: Using blockchain technology for email verification or decentralization.
**Potential benefits**: Censorship resistance, provable email delivery
**Reality**: Mostly experimental, high complexity and cost
**Adoption**: Minimal in current alias providers

---

**Need help with specific terms?** Check our **[FAQ](./faq.md)** or contact your provider's support for clarification.

---

**← [FAQ](./faq.md)** | **[Troubleshooting →](./troubleshooting.md)**