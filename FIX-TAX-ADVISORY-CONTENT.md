# Fix for Tax Advisory Content

## Issue
The Tax Advisory service page shows mixed English and Bangla content, plus the services list is showing in the content section when it should only be in the separate "Services Include" section.

## What to Fix

In `src/pages/services/[slug].js`, find the `"tax-advisory"` object (around line 10-60) and update the `content` field.

### Current Content (Lines 17-32):
```javascript
content: `In today's complex regulatory environment, effective tax planning and compliance are essential for every business and individual level. Proper tax management not only helps you stay compliant with the National Board of Revenue (NBR) but also allows you to reduce liabilities, maximize savings, and protect your business from legal risks. Furthermore, if you have TIN (tax identification number) certificate then you must submit tax return otherwise you will face fine and Legal Complication.

Taxsense Limited Tax Advisory is one of many areas of professional services where our Company is well ahead of the competition. Our Tax Consultancy team provides comprehensive taxation solutions for both individual and corporate clients.

Our services include:
• Tax Planning & Strategic Advisory
• Individual & Corporate Tax Return Preparation
• Expert Tax Advisory
• Tax Assessment & Appeal Support
• Withholding Tax (AIT) Management

ট্যাক্স পরামর্শ সেবা (Tax Advisory)
বর্তমানের জটিল ব্যবসায়িক ও আইনি পরিমণ্ডলে সঠিক ট্যাক্স পরিকল্পনা ও কমপ্লায়েন্স অত্যন্ত গুরুত্বপূর্ণ।
সঠিকভাবে ট্যাক্স ব্যবস্থাপনা আপনাকে জাতীয় রাজস্ব বোর্ড (NBR)-এর সাথে সামঞ্জস্য বজায় রাখতে সাহায্য করে, ট্যাক্স লায়াবিলিটি কমায়, সেভিংস বাড়ায় এবং আইনি ঝুঁকি থেকে ব্যবসাকে রক্ষা করে।
আপনার যদি TIN (Tax Identification Number) সনদ থাকে তাহলে ট্যাক্স রিটার্ন দাখিল করা বাধ্যতামূলক, নইলে জরিমানা ও আইনি জটিলতার সম্মুখীন হতে পারেন।
`,
```

###SHOULD BE (Fixed Content):
```javascript
content: `In today's complex regulatory environment, effective tax planning and compliance are essential for every business and individual level. Proper tax management not only helps you stay compliant with the National Board of Revenue (NBR) but also allows you to reduce liabilities, maximize savings, and protect your business from legal risks. Furthermore, if you have TIN (tax identification number) certificate then you must submit tax return otherwise you will face fine and Legal Complication.

Taxsense Limited Tax Advisory is one of many areas of professional services where our Company is well ahead of the competition. Our Tax Consultancy team provides comprehensive taxation solutions for both individual and corporate clients.`,
```

## What to Remove
Remove from the `content` field:
1. ❌ "Our services include:" bullet list (this is already shown separately below)
2. ❌ Bengali content starting with "ট্যাক্স পরামর্শ সেবা (Tax Advisory)" (this should only be in `content_bn`)

## Keep as-is
- ✅ The `content_bn` field should remain unchanged (lines 33-44)
- ✅ The `services` and `services_bn` arrays should remain unchanged
- ✅ These are displayed in separate sections on the page

## Manual Fix Required
Please manually edit lines 17-32 in the file to remove the extra content.

