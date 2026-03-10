# Email Configuration Guide for TaxSense Contact Form

## ✅ Setup Complete!

The contact form has been successfully configured with nodemailer and spam protection.

---

## 📧 Email Configuration

### Sender Email (Gmail Account)
- **Email**: taxsenseweb@gmail.com
- **App Name**: TaxSense
- **App Password**: `jnxs zdam qawd iuxx`

### Recipients (Who receives contact form submissions)
- **Primary**: taxsenselimited@gmail.com
- **Secondary**: ahsantamim49@gmail.com

---

## 🔒 Spam Protection Features

### 1. **Honeypot Field**
- Hidden field that bots often fill out
- Real users cannot see or interact with it
- Form rejected if filled

### 2. **Time-Based Detection**
- Tracks form load time
- Rejects submissions under 3 seconds
- Prevents automated bot submissions

### 3. **Rate Limiting**
- Max 3 requests per IP per minute
- Prevents spam flooding
- In-memory storage (consider Redis for production)

### 4. **Spam Keyword Detection**
- Filters common spam words
- Keywords: viagra, casino, lottery, prize, etc.
- Silently accepts but doesn't send email

### 5. **Input Validation**
- Email format validation
- Minimum message length (10 characters)
- Required field checking

---

## 📨 Email Templates

### Company Notification Email
**Sent to**: taxsenselimited@gmail.com, ahsantamim49@gmail.com

**Includes**:
- Full contact details (Name, Email, Phone)
- Subject and message
- Timestamp
- Professional formatting
- Reply-to customer email

### Customer Auto-Reply
**Sent to**: Customer's email address

**Includes**:
- Confirmation of receipt
- 24-hour response promise
- Contact information
- Business hours
- Office address
- Social media links

---

## 🚀 How It Works

1. **User fills form** → Form data collected
2. **Client-side validation** → Required fields checked
3. **Submission** → POST to `/api/contact`
4. **Spam checks** → Multiple layers of protection
5. **Rate limiting** → Prevents abuse
6. **Email sending** → Two emails sent:
   - Notification to company
   - Confirmation to customer
7. **Success/Error** → User sees appropriate message

---

## 🔧 Environment Variables (Optional)

You can create a `.env.local` file with:

```env
EMAIL_PASSWORD=jnxs zdam qawd iuxx
```

If not set, the API will use the hardcoded password as fallback.

---

## 📱 Contact Form Fields

### Required Fields:
- ✅ First Name
- ✅ Last Name  
- ✅ Email Address
- ✅ Phone Number
- ✅ Subject
- ✅ Message

### Hidden Fields (Anti-spam):
- Honeypot field
- Submission timestamp

---

## 🎨 User Experience Features

### Loading State
- Submit button shows spinner
- Button disabled during submission
- "Sending..." text displayed

### Success State
- ✅ Green success message
- Form automatically reset
- User confirmation displayed

### Error State
- ❌ Red error message
- Form data preserved
- User can retry submission

---

## 📊 Testing

### Test the form:
1. Go to `/contact` page
2. Fill all required fields
3. Submit the form
4. Check both email addresses for:
   - Company notification email
   - Customer auto-reply email

### Test spam protection:
- Try submitting very quickly (< 3 seconds) → Should be blocked
- Try submitting multiple times rapidly → Rate limited after 3 attempts
- Leave honeypot field filled (manually) → Should be silently rejected

---

## 🔐 Security Notes

1. **App Password**: Uses Gmail app password (not regular password)
2. **Rate Limiting**: Prevents DDoS attacks
3. **Spam Detection**: Multiple layers of protection
4. **Validation**: Server-side validation for all inputs
5. **CORS**: Only accepts POST requests from your domain

---

## 📝 Gmail App Password Setup (Reference)

If you need to regenerate the password:

1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App passwords → Generate new
4. Select "Mail" and "Other (Custom name)"
5. Copy the generated password
6. Update in `src/pages/api/contact.js`

---

## 🚨 Troubleshooting

### Email not sending?
- Check Gmail app password is correct
- Verify Gmail account has 2FA enabled
- Check spam folder for test emails

### Rate limit errors?
- Wait 1 minute between submissions
- Clear server restart to reset limits

### Spam false positives?
- Adjust spam keyword list in API
- Modify time threshold (currently 3 seconds)
- Review honeypot implementation

---

## 📞 Support

For issues with email delivery:
- Check server logs for errors
- Verify nodemailer installation
- Test Gmail credentials

---

## ✨ Features Summary

✅ Professional email templates  
✅ Dual email sending (company + customer)  
✅ Multi-layer spam protection  
✅ Rate limiting  
✅ Success/Error user feedback  
✅ Loading states  
✅ Form validation  
✅ Mobile responsive  
✅ Accessible (ARIA labels)  
✅ Auto-reply to customers  
✅ Beautiful HTML email design  

---

**Setup Date**: December 2024  
**Status**: ✅ Production Ready

