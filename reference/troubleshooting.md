# Troubleshooting Guide

Solutions for common email aliasing problems and technical issues.

## Email Delivery Issues

### Emails Not Being Forwarded

**Most common problem. Check these in order:**

#### 1. Check Your Spam Folder
**Problem**: Forwarded emails often get flagged as spam initially.

**Solution:**
```
1. Check spam/junk folder in your email client
2. Look for emails from your alias provider's domain
3. Mark as "Not Spam" or move to inbox
4. Add alias provider to safe senders list
```

**Safe sender domains to add:**
- `@duck.com` (DuckDuckGo)
- `@simplelogin.io` (SimpleLogin)
- `@anonaddy.me` (Addy.io)
- `@mozmail.com` (Firefox Relay)

#### 2. Verify Alias Configuration
**Problem**: Alias might not be set up correctly.

**Quick test:**
```
1. Send email to your alias from another account
2. Wait 5-10 minutes
3. Check all email folders (inbox, spam, promotions)
4. Verify alias spelling is exactly correct
```

#### 3. Check Service Status
**Problem**: Provider might be experiencing outages.

**How to check:**
- Visit provider's status page or website
- Check their social media (Twitter) for outage reports
- Try creating a new test alias to see if service is working

#### 4. Account Limits Reached
**Problem**: Free plans often have usage limits.

**Check these limits:**
- **Monthly bandwidth** (Addy.io: 10MB, 33Mail: 10MB)
- **Email count** (AdGuard Mail: 2,000/month)
- **Alias limits** (SimpleLogin: 10 on free)

**Solution**: Upgrade to paid plan or wait for monthly reset.

#### 5. DNS Issues (Custom Domains Only)
**Problem**: DNS settings not configured correctly.

**Check DNS records:**
```bash
# Check MX record
dig MX yourdomain.com

# Should show your provider's mail servers
# Example for Addy.io:
# yourdomain.com. 300 IN MX 10 mx1.anonaddy.com.
```

**Common DNS fixes:**
- Wait 24-48 hours for DNS propagation
- Verify MX record points to correct mail server
- Check with provider's DNS verification tool

---

### Slow Email Delivery

**Normal delivery times:**
- Most providers: 5-30 seconds
- Peak times: 1-3 minutes  
- International delivery: Up to 10 minutes

**When to worry:**
- Consistent delays over 30 minutes
- Complete delivery failures
- Error messages in provider dashboard

**Troubleshooting steps:**
1. **Test with different senders** - Gmail, Outlook, Yahoo
2. **Try different times** - avoid peak hours (9am-5pm)
3. **Check provider status** - look for known issues
4. **Contact support** if delays persist over 1 hour

---

### High Bounce Rate

**Problem**: Your emails are being rejected by recipient servers.

**Common causes:**

#### New Domain Reputation
**Symptoms**: Custom domain emails bouncing frequently
**Solution**: 
- Warm up domain gradually (send small volumes first)
- Ensure proper SPF, DKIM, DMARC records
- Consider using provider's shared domains initially

#### Content Filtering
**Symptoms**: Specific types of emails bouncing
**Solution**:
- Avoid spam trigger words
- Don't send identical emails to many recipients
- Include proper unsubscribe links
- Use plain text instead of heavy HTML

#### IP Reputation Issues
**Symptoms**: Bounces from major providers (Gmail, Outlook)
**Solution**:
- Provider issue - contact their support
- Switch to different provider temporarily
- Use different sending domain

---

## Reply Issues

### Can't Reply From Alias

#### Check Plan Limitations
**Problem**: Free plans often don't include reply functionality.

**Plans without replies:**
- Addy.io (free plan)
- Firefox Relay (free plan)
- AdGuard Mail (free plan)
- 33Mail (free plan)

**Solution**: Upgrade to paid plan or switch to provider with free replies.

#### Configuration Problems
**Problem**: Reply feature not enabled or configured.

**Check provider settings:**
```
Addy.io: Settings → Email Options → "Reply from alias"
SimpleLogin: Settings → General → "Reply support"
ForwardMail: Automatic with custom domains
```

#### Email Client Issues
**Problem**: Email client not configured for alias replies.

**Gmail setup:**
```
1. Settings → Accounts and Import
2. "Send mail as" → Add another email address
3. Enter your alias information
4. Follow verification steps
```

**Outlook setup:**
```
1. File → Account Settings → Email
2. New... → Manual setup
3. Enter alias as email address
4. Use provider's SMTP settings
```

### Recipient Sees Real Email
**Problem**: When replying, your real email shows instead of alias.

**Common causes:**
- Reply feature not properly configured
- Using wrong email client settings
- Provider doesn't support anonymous replies

**Solutions:**
1. Use provider's web interface instead
2. Check SMTP configuration in email client
3. Verify reply support is enabled in provider settings
4. Contact provider support for proper setup

---

## Account & Access Issues

### Forgot Which Alias is Used Where

**Prevention:**
- Use descriptive alias names (`amazon.shopping@provider.com`)
- Update password manager with alias info
- Keep simple spreadsheet of aliases

**Recovery methods:**
1. **Check email headers** to see which alias received emails
2. **Search provider dashboard** for recent alias activity
3. **Review password manager** entries
4. **Check recent alias creation** in provider history

### Locked Out of Provider Account

**Common solutions:**
1. **Password reset** using your real email address
2. **Check spam folder** for reset emails
3. **Try different browsers** or incognito mode
4. **Clear browser cache** and cookies
5. **Contact provider support** with account details

**Prevention:**
- Use strong, unique passwords
- Enable two-factor authentication
- Keep recovery email up to date
- Document account information securely

### Alias Suddenly Stopped Working

**Immediate checks:**
1. **Log into provider dashboard** - check if alias is still active
2. **Check account status** - verify subscription is current
3. **Review recent emails** - look for provider notifications
4. **Test with new email** - send fresh test to the alias

**Common causes:**
- Account suspension (billing issues, terms violation)
- Alias accidentally disabled
- Provider service outage
- Domain expiration (custom domains)

---

## Website & Service Issues

### Website Blocks Alias Domain

**Problem**: Some websites detect and block known alias domains.

**Common blocked domains:**
- `@10minutemail.com` (temporary email)
- `@guerrillamail.com` (disposable email)
- Sometimes: `@simplelogin.io`, `@duck.com`

**Solutions:**
1. **Use custom domain** if available with your plan
2. **Try different provider** with less known domains
3. **Use more "normal" looking alias** names
4. **Contact website support** to explain legitimate use

### Service Requires "Real" Email

**Problem**: Website demands email from major providers only.

**Workarounds:**
1. **Sign up with real email** initially
2. **Change to alias** in account settings after signup
3. **Use built-in aliasing** (Gmail+, iCloud+) for initial signup
4. **Contact customer service** to explain alias usage

### Two-Factor Authentication Issues

**Problem**: 2FA codes sent to alias not arriving quickly enough.

**Solutions:**
1. **Use SMS or authenticator apps** instead of email 2FA
2. **Add extra time buffer** before requesting new codes
3. **Use real email for 2FA** and alias for regular communications
4. **Choose faster provider** if timing is critical

---

## Provider-Specific Issues

### DuckDuckGo Issues

#### Extension Not Working
**Problem**: Duck icon not appearing in email fields.

**Solutions:**
1. **Refresh page** - Extension sometimes needs reload
2. **Check extension permissions** - Ensure site access enabled
3. **Try different browser** - Test if browser-specific issue
4. **Reinstall extension** - Remove and add back

#### Alias Not Generated
**Problem**: Clicking duck icon doesn't create alias.

**Solutions:**
1. **Wait a moment** - Generation can take a few seconds
2. **Try incognito mode** - Check if other extensions interfere
3. **Check internet connection** - Requires connection to DuckDuckGo servers
4. **Manual creation** - Visit DuckDuckGo email page directly

### SimpleLogin Issues

#### Mobile App Sync Problems
**Problem**: Aliases created on web don't appear in mobile app.

**Solutions:**
1. **Pull to refresh** in mobile app
2. **Log out and back in** to force sync
3. **Check internet connection** on mobile device
4. **Update app** to latest version

#### PGP Encryption Not Working
**Problem**: Encrypted emails not decrypting properly.

**Solutions:**
1. **Verify PGP key** is correctly uploaded
2. **Check key expiration** date
3. **Test with simple encrypted email** first
4. **Review PGP setup guide** on SimpleLogin docs

### Addy.io Issues

#### API Access Problems
**Problem**: API calls failing or returning errors.

**Solutions:**
1. **Check API key** is correct and active
2. **Verify rate limits** (60 requests/minute)
3. **Check API documentation** for correct endpoints
4. **Test with simple GET request** first

#### GPG Encryption Setup
**Problem**: GPG encryption not working correctly.

**Solutions:**
1. **Generate new GPG key pair** if needed
2. **Export public key** correctly
3. **Upload to Addy.io dashboard** properly
4. **Test encryption** with simple email

---

## Performance Optimization

### Reducing Email Delays

**Provider-side optimization:**
- Choose providers with better infrastructure (SimpleLogin, Apple)
- Use providers in your geographic region
- Avoid providers during peak hours if possible

**Email client optimization:**
- Configure proper IMAP sync intervals
- Reduce email client checking frequency
- Use push notifications instead of polling

### Managing Large Numbers of Aliases

**Organization strategies:**
- Use consistent naming conventions
- Regular cleanup of unused aliases
- Categorize aliases by purpose or risk level
- Use provider's built-in organization features

**Performance considerations:**
- Some providers slow down with many aliases
- Consider multiple providers for different purposes
- Monitor bandwidth usage on limited plans

---

## Getting Help

### Before Contacting Support

**Information to gather:**
1. **Exact error messages** or symptoms
2. **Timeline** - when did problem start?
3. **Steps taken** to reproduce issue
4. **Browser/device information**
5. **Account details** (without passwords)

### Provider Support Contacts

**Professional support:**
- **SimpleLogin**: support@simplelogin.io (24-48h response)
- **ForwardMail**: support@forwardemail.net

**Limited support:**
- **Addy.io**: support@addy.io (best effort)
- **AdGuard Mail**: Through AdGuard support system

**Community support only:**
- **DuckDuckGo**: Community forums
- **Erine.email**: GitHub issues

### Community Resources

**General help:**
- **Reddit**: r/privacy, r/selfhosted
- **GitHub**: Provider-specific issue trackers
- **Discord/Matrix**: Provider community channels

**Emergency alternatives:**
If your primary provider is down:
1. **Keep real email active** as backup
2. **Have secondary provider** ready
3. **Document critical aliases** and their purposes
4. **Know how to quickly update important accounts**

---

## Prevention Tips

### Avoiding Common Problems

**Setup phase:**
- Test thoroughly before relying on aliases
- Use descriptive naming conventions
- Document alias usage
- Set up proper email filtering

**Ongoing maintenance:**
- Regular cleanup of unused aliases
- Monitor provider status and updates
- Keep provider contact information handy
- Have backup plans for critical aliases

**Security considerations:**
- Use unique passwords for provider accounts
- Enable two-factor authentication where available
- Keep recovery information up to date
- Regularly review alias activity for suspicious emails

---

**Need immediate help?** Check our **[FAQ](./faq.md)** for quick answers, or contact your provider's support directly.

---

**← [Feature Glossary](./features.md)** | **[Legal & Compliance →](./legal.md)**