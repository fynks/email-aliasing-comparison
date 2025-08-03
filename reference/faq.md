# Frequently Asked Questions

Quick answers to the most common questions about email aliasing.

## Getting Started Questions

### What is email aliasing exactly?
Email aliasing is like having multiple front doors to your house. You give out different email addresses to different people, but all emails end up in your real inbox. The key benefit is that recipients never see your actual email address.

**Simple example:**
- Your real email: `john@gmail.com` (hidden)
- Shopping alias: `shopping@provider.com` 
- Newsletter alias: `news@provider.com`
- Both forward to your real Gmail inbox

### How is this different from Gmail's +addressing?
Gmail's +addressing (`yourname+tag@gmail.com`) is basic aliasing, but it has limitations:

| Feature | Gmail + addressing | Dedicated Services |
|---------|-------------------|-------------------|
| **Privacy** | Easy to remove +tag | True privacy |
| **Control** | Can't disable | Can turn off individual aliases |
| **Custom domains** | No | Yes (paid plans) |
| **Reply hiding** | No | Yes |

### Will people know I'm using an alias?
**No.** Recipients see your alias as a normal email address. They can't tell it's forwarded unless you tell them. When you reply, they still only see the alias, not your real email.

### How many aliases do I actually need?
Most people use 10-50 aliases. Start with these categories:
- **Shopping** (e.g., `amazon@alias.com`)
- **Newsletters** (e.g., `news@alias.com`)
- **Social media** (e.g., `social@alias.com`)
- **Work/Professional** (e.g., `work@alias.com`)
- **Temporary** (e.g., `trial@alias.com`)

---

## Technical Questions

### Can I reply from my alias?
**Depends on the service:**

**Free plans with replies:**
- DuckDuckGo ✅
- SimpleLogin ✅
- Erine.email ✅
- ForwardMail ✅

**Paid plans only:**
- Addy.io (no replies on free)
- Firefox Relay (premium only)
- AdGuard Mail (premium only)

### How fast are emails forwarded?
**Typical forwarding times:**
- Most services: 5-30 seconds
- Peak times: 1-3 minutes
- International: Up to 10 minutes

If emails take longer than 10 minutes consistently, check your spam folder or contact support.

### Do I need a custom domain?
**No, but it has advantages:**

**Without custom domain:**
- Use provider's domains (e.g., `@simplelogin.io`)
- Quick setup
- Less control

**With custom domain:**
- Use your own domain (e.g., `@yourdomain.com`)
- Complete control
- Professional appearance
- Can switch providers while keeping aliases

### What happens to my emails if the provider shuts down?
This is why you should:

1. **Keep your original email active** as backup
2. **Export alias lists** regularly (if available)
3. **Document where each alias is used**
4. **Choose established providers** with good track records
5. **Have a migration plan**

**Most reliable providers by backing:**
- SimpleLogin (Proton AG - large company)
- Apple Hide My Email (Apple Inc.)
- DuckDuckGo (established search company)

---

## Service-Specific Questions

### Which provider should I choose?

**For complete beginners:**
- **DuckDuckGo** - Free, unlimited, zero setup

**For best value:**
- **Addy.io Lite** - $1/month, most features

**For maximum privacy:**
- **SimpleLogin** - $4/month, Swiss jurisdiction

**For Apple users:**
- **Apple Hide My Email** - $0.99/month with iCloud+

### Can I use multiple providers at once?
**Yes, but not recommended for beginners.**

**Problems with multiple providers:**
- Confusing to manage
- Hard to remember which alias is with which provider
- More points of failure

**Better approach:**
- Start with one provider
- Use different providers for different purposes (e.g., work vs personal)
- Have a backup provider ready but not actively used

### Is it worth paying for premium features?
**Upgrade if you need:**
- More aliases than free plans offer
- Reply functionality (some providers)
- Custom domains
- Better customer support
- Advanced features (rules, encryption)

**Most popular upgrade path:**
1. Start with free plan
2. Use for 1-2 months
3. Upgrade if you hit limitations or want more features

---

## Privacy & Security Questions

### How private are email aliases really?
**What aliases protect against:**
- Websites sharing/selling your email
- Companies tracking you across platforms
- Spam from data breaches
- Unwanted marketing emails

**What aliases don't protect against:**
- Government surveillance (if they target the provider)
- Provider itself reading metadata
- Determined attackers with access to provider systems

**For maximum privacy:**
- Choose Swiss/EU providers (SimpleLogin, Addy.io)
- Use end-to-end encryption (PGP/GPG)
- Avoid US-based providers if concerned about government access

### Can the alias provider read my emails?
**Most providers can technically read forwarded emails** because:
- Emails pass through their servers
- Most use standard TLS encryption (protects in transit)
- Only a few offer end-to-end encryption

**Providers with end-to-end encryption:**
- **Addy.io** - GPG encryption support
- **SimpleLogin** - PGP encryption support
- **Others** - TLS only (still secure from external threats)

### Which jurisdiction is safest?
**Privacy ranking (best to worst):**

1. **Switzerland** (SimpleLogin) - Strong privacy laws, no EU oversight
2. **Netherlands** (Addy.io) - Strong EU privacy laws
3. **France** (Erine.email) - EU privacy laws
4. **Cyprus** (AdGuard) - EU member, reasonable privacy
5. **USA** (others) - 5-Eyes member, potential government access
6. **UK** (33Mail) - 5-Eyes member, weakening privacy laws

### Should I trust a single developer (like Addy.io)?
**Pros of single developer:**
- Quick updates and feature additions
- Direct communication with creator
- Lower costs (no corporate overhead)
- Often more innovative

**Cons of single developer:**
- Single point of failure
- Limited capacity for support
- No succession plan if developer leaves
- Less formal security processes

**Consider having a backup provider** if you rely heavily on a single-developer service.

---

## Setup & Usage Questions

### How do I organize my aliases?
**Recommended naming conventions:**

**By service:**
```
amazon.shopping@provider.com
netflix.streaming@provider.com
reddit.social@provider.com
```

**By category:**
```
shopping.electronics@provider.com
newsletter.tech@provider.com
social.discussion@provider.com
```

**Avoid random strings** like `abc123@provider.com` - you'll forget what they're for.

### How do I manage aliases in my email client?
**Gmail filtering:**
```
1. Settings → Filters and Blocked Addresses
2. Create filter → To: shopping.*@provider.com
3. Apply label: "Shopping"
4. Skip inbox (optional)
```

**Outlook rules:**
```
1. File → Rules → Manage Rules & Alerts
2. New Rule → Apply rule on messages I receive
3. Sent to: newsletter.*@provider.com
4. Move to folder: "Newsletters"
```

### What if I forget which alias I used where?
**Prevention strategies:**
- Use descriptive alias names
- Update password manager with alias info
- Keep a simple spreadsheet of aliases
- Use provider's built-in organization features

**Recovery methods:**
- Check email headers to see which alias received the email
- Use provider's search/filter features
- Look at recent alias creation in dashboard

### Can I use aliases for important accounts like banking?
**Yes, but start carefully:**

**Low-risk testing first:**
- Newsletter subscriptions
- Shopping sites
- Social media
- Software trials

**Important accounts later:**
- Banking and financial services
- Work email
- Government services
- Critical subscriptions

**Always test reply functionality** before using aliases for important accounts where you might need to respond.

---

## Troubleshooting Questions

### Emails aren't being forwarded. What's wrong?

**Check in this order:**

1. **Spam folder** - Forwarded emails often land here initially
2. **Provider status** - Check if service is down
3. **Alias spelling** - Verify you used the exact alias
4. **Account limits** - Some free plans have usage limits
5. **DNS issues** - If using custom domains, check DNS settings

**Quick test:**
```
1. Send email to your alias from another account
2. Wait 5-10 minutes
3. Check all folders (inbox, spam, promotions)
4. Contact provider support if still not working
```

### I can't reply from my alias. Why?

**Common causes:**
- Free plan doesn't include replies (upgrade needed)
- Reply feature not enabled in settings
- Email client not configured properly
- Provider doesn't support replies for your alias type

**Solutions:**
- Check provider settings for "reply" or "send" options
- Verify your plan includes reply functionality
- Use provider's web interface instead of email client
- Contact support for configuration help

### My alias was blocked by a website. What now?

**Some websites block known alias domains:**
- Use different provider's domain
- Upgrade to custom domain
- Try a more "normal" looking alias name
- Contact website to explain legitimate use

**Alternative approaches:**
- Use built-in email aliasing (Gmail+, iCloud+)
- Try a different alias format
- Use temporary email for initial signup, then change to alias

---

## Cost & Value Questions

### Are free plans good enough long-term?
**Depends on your needs:**

**Free plans work well if you:**
- Need fewer than 10 aliases
- Don't need custom domains
- Don't require advanced features
- Are okay with basic support

**Upgrade when you need:**
- More aliases than free limit
- Reply functionality (some providers)
- Custom domains for professional use
- Better customer support
- Advanced features (encryption, rules, analytics)

### What's the best value for money?
**Budget recommendations:**

**Free:** DuckDuckGo (unlimited, no limits)
**$1/month:** Addy.io Lite (best features per dollar)
**$3-4/month:** SimpleLogin Premium (enterprise features)

**Cost per alias comparison:**
- DuckDuckGo: $0 (unlimited)
- Addy.io Lite: $0.02/month (assuming 50 aliases)
- SimpleLogin: $0.08/month (assuming 50 aliases)

### Is it worth switching providers?
**Consider switching if:**
- Current provider is unreliable
- You've outgrown features
- Better value available elsewhere
- Privacy concerns with current provider

**Before switching:**
- Test new provider with a few aliases first
- Plan migration strategy
- Consider running both for transition period
- Export data from current provider if possible

---

## Business & Advanced Questions

### Can I use aliases for business?
**Yes, many providers offer business features:**

**Business-friendly providers:**
- **SimpleLogin Premium** - Professional support, team features
- **ForwardMail** - Enterprise-grade, self-hosting
- **Addy.io Pro** - Advanced features, multiple domains

**Business considerations:**
- Reliability and uptime guarantees
- Professional support
- Team management features
- Compliance requirements (GDPR, etc.)
- Custom domain support

### How do I migrate between providers?
**Migration steps:**
1. **Set up new provider** and test functionality
2. **Create equivalent aliases** on new service
3. **Update accounts gradually** starting with least critical
4. **Run both providers** during transition
5. **Monitor old provider** for missed emails
6. **Cancel old service** once fully migrated

**Expect 2-6 months** for complete migration of active accounts.

### Can I self-host an email alias service?
**Yes, with technical knowledge:**

**Self-hosting options:**
- **ForwardMail** - Full self-hosting support
- **SimpleLogin** - Open source, can be self-hosted
- **Addy.io** - Open source, community self-hosting guides

**Requirements:**
- Server administration skills
- Domain name and DNS management
- Email server configuration knowledge
- Security and maintenance responsibilities

---

## Need More Help?

### Quick References
- **[What is Email Aliasing?](../getting-started/what-is-email-aliasing.md)** - Basic concepts
- **[Quick Setup Guide](../getting-started/quick-start.md)** - Get started in 5 minutes
- **[Provider Comparison](../providers/overview.md)** - Compare all options
- **[Troubleshooting](./troubleshooting.md)** - Technical issues

### Provider Support
- **SimpleLogin**: support@simplelogin.io
- **Addy.io**: support@addy.io  
- **ForwardMail**: support@forwardemail.net
- **DuckDuckGo**: Community support only

### Community Resources
- **Reddit**: r/privacy - General privacy discussions
- **GitHub**: Most providers have issue trackers
- **Discord/Matrix**: Provider-specific community channels

---

**← [Migration Guide](../guides/migration.md)** | **[Feature Glossary →](./features.md)**