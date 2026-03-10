# 🔐 Environment Variables Setup Guide

## Local Development (.env.local)

Create a file named `.env.local` in the root directory with the following content:

```env
# Email Configuration
EMAIL_USER=taxsenseweb@gmail.com
EMAIL_PASSWORD=jnxs zdam qawd iuxx
EMAIL_FROM=taxsenseweb@gmail.com
EMAIL_TO=taxsenselimited@gmail.com
```

### ⚠️ IMPORTANT: 
- `.env.local` is automatically ignored by Git (don't commit it!)
- This file contains sensitive credentials
- Never share this file publicly

---

## Vercel Production Deployment

Add these environment variables in your **Vercel Dashboard**:

### Steps:
1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add the following variables:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `EMAIL_USER` | `taxsenseweb@gmail.com` | Gmail account to send from |
| `EMAIL_PASSWORD` | `jnxs zdam qawd iuxx` | Gmail app password |
| `EMAIL_FROM` | `taxsenseweb@gmail.com` | Sender email address |
| `EMAIL_TO` | `taxsenselimited@gmail.com` | Recipient email address |

### Environment Selection:
- ✅ Production
- ✅ Preview
- ✅ Development

### 🔄 After Adding Variables:
1. Click **Save**
2. **Redeploy** your project for changes to take effect

---

## Why Environment Variables?

### ✅ Benefits:
- **Security**: Credentials not exposed in code
- **Flexibility**: Easy to change without code changes
- **Best Practice**: Industry standard for sensitive data
- **Multiple Environments**: Different credentials for dev/staging/production

### ❌ Without ENV Variables:
- ❌ Credentials committed to Git (security risk)
- ❌ Hard to manage multiple environments
- ❌ Requires code changes to update credentials

---

## Testing

### Test Locally:
1. Create `.env.local` with your credentials
2. Run: `npm run dev`
3. Visit: `http://localhost:3000/contact`
4. Submit the form
5. Check taxsenselimited@gmail.com inbox

### Test on Vercel:
1. Add environment variables in Vercel
2. Deploy your project
3. Visit: `https://your-domain.vercel.app/contact`
4. Submit the form
5. Verify emails received

---

## Troubleshooting

### Emails not sending locally?
- ✅ Check `.env.local` exists in root directory
- ✅ Verify credentials are correct
- ✅ Restart development server after creating `.env.local`

### Emails not sending on Vercel?
- ✅ Check environment variables are set in Vercel dashboard
- ✅ Redeploy after adding variables
- ✅ Check Vercel function logs for errors

### Gmail blocking emails?
- ✅ Ensure 2FA is enabled on `taxsenseweb@gmail.com`
- ✅ Use App Password, not regular password
- ✅ Check "Less secure app access" settings (if needed)

---

## File Structure

```
taxsense/
├── .env.local          ← Create this (gitignored)
├── .env.example        ← Template file (committed to Git)
├── src/
│   └── pages/
│       └── api/
│           └── contact.js  ← Uses environment variables
└── ENV_SETUP_GUIDE.md  ← This file
```

---

## Security Checklist

- [x] `.env.local` is in `.gitignore`
- [x] Credentials not hardcoded in source files
- [x] Using Gmail App Password (not regular password)
- [x] Environment variables set in Vercel
- [x] Test emails working in both environments

---

## Need Help?

If emails still aren't working:
1. Check Vercel function logs
2. Verify Gmail app password is correct
3. Ensure 2FA is enabled on Gmail account
4. Check spam folders
5. Test with `test-email.js` script first

