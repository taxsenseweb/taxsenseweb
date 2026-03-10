import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";

// Service data with detailed content
const servicesData = {
  "tax-advisory": {
    title: "Tax Advisory",
    description:
      "In today’s complex regulatory environment, effective tax planning and compliance are essential for every business and individual level.",
    heroImage: "/service/tax-advisory.webp",
    intro:
      "Proper tax management reduces liabilities, maximizes savings, and protects your business from legal risks.",
    content: `In today’s complex regulatory environment, effective tax planning and compliance are essential for every business and individual level. Proper tax management not only helps you stay compliant with the National Board of Revenue (NBR) but also allows you to reduce liabilities, maximize savings, and protect your business from legal risks. Furthermore, if you have TIN (tax identification number) certificate then you must submit tax return otherwise you will face fine and Legal Complication.

Taxsense Limited Tax Advisory is one of many areas of professional services where our Company is well ahead of the competition. Our Tax Consultancy team provides comprehensive taxation solutions for both individual and corporate clients.


`,
    content_bn: `বর্তমানের জটিল ব্যবসায়িক ও আইনি পরিমণ্ডলে সঠিক ট্যাক্স পরিকল্পনা ও কমপ্লায়েন্স অত্যন্ত গুরুত্বপূর্ণ। সঠিকভাবে ট্যাক্স ব্যবস্থাপনা আপনাকে জাতীয় রাজস্ব বোর্ড (NBR)-এর সাথে সামঞ্জস্য বজায় রাখতে সাহায্য করে, ট্যাক্স লায়াবিলিটি কমায়, সেভিংস বাড়ায় এবং আইনি ঝুঁকি থেকে ব্যবসাকে রক্ষা করে।

আপনার যদি TIN (Tax Identification Number) সনদ থাকে তাহলে ট্যাক্স রিটার্ন দাখিল করা বাধ্যতামূলক, নইলে জরিমানা ও আইনি জটিলতার সম্মুখীন হতে পারেন।

ট্যাক্সসেন্স লিমিটেড ট্যাক্স পরামর্শ পেশাদার সেবার একটি ক্ষেত্র যেখানে আমাদের কোম্পানি প্রতিযোগিতায় অগ্রগামী। আমাদের ট্যাক্স কনসালট্যান্সি টিম ব্যক্তি এবং কর্পোরেট উভয় ক্লায়েন্টদের জন্য ব্যাপক কর সমাধান প্রদান করে।

আমাদের সেবাসমূহ:
• ট্যাক্স পরিকল্পনা ও কৌশলগত পরামর্শ
• ব্যক্তিগত ও কর্পোরেট ট্যাক্স রিটার্ন প্রস্তুতি
• বিশেষজ্ঞ ট্যাক্স পরামর্শ
• ট্যাক্স মূল্যায়ন ও আপিল সহায়তা
• উইথহোল্ডিং ট্যাক্স (AIT) ব্যবস্থাপনা`,
    services: [
      "Tax Planning & Strategic Advisory",
      "Individual & Corporate Tax Return Preparation",
      "Expert Tax Advisory",
      "Tax Assessment & Appeal Support",
      "Withholding Tax (AIT) Management",
    ],
    services_bn: [
      "ট্যাক্স পরিকল্পনা ও কৌশলগত পরামর্শ",
      "ব্যক্তিগত ও কর্পোরেট ট্যাক্স রিটার্ন প্রস্তুতি",
      "বিশেষজ্ঞ ট্যাক্স পরামর্শ",
      "ট্যাক্স মূল্যায়ন ও আপিল সহায়তা",
      "উইথহোল্ডিং ট্যাক্স (AIT) ব্যবস্থাপনা",
    ],
    icon: "💰",
  },
  "vat-consultancy": {
    title: "VAT Consultancy",
    description:
      "VAT (Value Added Tax) is a type of indirect tax charged on the value added at each stage of production and distribution.",
    heroImage: "/service/vat-consultancy.webp",
    intro:
      "Proper VAT management helps you avoid penalties, maintain transparency, and build credibility with regulatory authorities such as the NBR.",
    intro_bn:
      "সঠিক ভ্যাট ব্যবস্থাপনা আপনাকে জরিমানা এড়াতে, স্বচ্ছতা বজায় রাখতে এবং NBR-এর মতো নিয়ন্ত্রক কর্তৃপক্ষের সাথে বিশ্বাসযোগ্যতা তৈরি করতে সহায়তা করে।",
    content: `VAT (Value Added Tax) is a type of indirect tax charged on the value added at each stage of production and distribution of goods and services. In Bangladesh, Value Added Tax (VAT) compliance is a crucial part of running any legitimate business. Proper VAT management helps you avoid penalties, maintain transparency, and build credibility with regulatory authorities such as the National Board of Revenue (NBR).

At Taxsense Limited, we have experienced VAT Specialists who can provide precise information and advice regarding the procedure of registration, amount of VAT that needs to be paid and ensure all paper works relating to VAT and other taxes are up to date, thereby, minimizing the chance of any error.

`,
    content_bn: `ভ্যাট (মূল্য সংযোজন কর) হল একটি পরোক্ষ কর যা পণ্য এবং সেবার উৎপাদন ও বিতরণের প্রতিটি পর্যায়ে সংযোজিত মূল্যের উপর আরোপিত হয়। বাংলাদেশে, ভ্যাট সম্মতি যেকোনো বৈধ ব্যবসা পরিচালনার একটি গুরুত্বপূর্ণ অংশ। সঠিক ভ্যাট ব্যবস্থাপনা আপনাকে জরিমানা এড়াতে, স্বচ্ছতা বজায় রাখতে এবং জাতীয় রাজস্ব বোর্ড (NBR)-এর মতো নিয়ন্ত্রক কর্তৃপক্ষের সাথে বিশ্বাসযোগ্যতা তৈরি করতে সহায়তা করে।

ট্যাক্সসেন্স লিমিটেডে, আমাদের অভিজ্ঞ ভ্যাট বিশেষজ্ঞ রয়েছেন যারা নিবন্ধনের পদ্ধতি, প্রদেয় ভ্যাটের পরিমাণ সম্পর্কে সুনির্দিষ্ট তথ্য এবং পরামর্শ প্রদান করতে পারেন এবং ভ্যাট এবং অন্যান্য করের সাথে সম্পর্কিত সমস্ত কাগজপত্র আপ টু ডেট রয়েছে তা নিশ্চিত করতে পারেন, যার ফলে কোনো ত্রুটির সম্ভাবনা হ্রাস পায়।

`,
    services: [
      "VAT (BIN) Registration",
      "Monthly VAT Return Preparation & Submission",
      "VAT Advisory & Compliance Support",
      "VAT Audit Support",
      "VAT Planning & Strategy",
    ],
    services_bn: [
      "ভ্যাট (BIN) নিবন্ধন",
      "মাসিক ভ্যাট রিটার্ন প্রস্তুতি ও জমা",
      "ভ্যাট পরামর্শ ও সম্মতি সহায়তা",
      "ভ্যাট অডিট সহায়তা",
      "ভ্যাট পরিকল্পনা ও কৌশল",
    ],
    icon: "📊",
  },
  "company-registration": {
    title: "Company Registration",
    description:
      "Company registration means legally creating and recognizing your business as a company under government law.",
    heroImage: "/service/company-registration.jpg",
    intro:
      "Taxsense makes the process of starting your business as easy as possible by removing unnecessary fees, taking care of lengthy paperwork, and handling legal complexities.",
    intro_bn:
      "ট্যাক্সসেন্স অপ্রয়োজনীয় ফি দূর করে, দীর্ঘ কাগজপত্রের যত্ন নিয়ে এবং আইনি জটিলতা পরিচালনা করে আপনার ব্যবসা শুরু করার প্রক্রিয়াটি যতটা সম্ভব সহজ করে তোলে।",
    content: `Company registration means legally creating and recognizing your business as a company under government law. If you want to increase your business size then company can give you many benefits. It can own assets, sign contracts, and sue/be sued in its own name. Registered companies often get tax incentives, rebates, and benefits compared to unregistered businesses. Also it is Easier to raise funds for a company.

Taxsense makes the process of starting your business as easy as possible by removing unnecessary fees, taking care of lengthy paperwork, handling legal complexities as well as granting you access to one of the greatest startup ecosystems in the world.

`,
    content_bn: `কোম্পানি নিবন্ধন মানে সরকারি আইনের অধীনে আইনগতভাবে আপনার ব্যবসা তৈরি এবং স্বীকৃতি দেওয়া। আপনি যদি আপনার ব্যবসার আকার বৃদ্ধি করতে চান তবে কোম্পানি আপনাকে অনেক সুবিধা দিতে পারে। এটি সম্পদের মালিক হতে পারে, চুক্তিতে স্বাক্ষর করতে পারে এবং নিজের নামে মামলা করতে/করা যেতে পারে। নিবন্ধিত কোম্পানিগুলি প্রায়শই অনিবন্ধিত ব্যবসার তুলনায় কর প্রণোদনা, ছাড় এবং সুবিধা পায়। এছাড়াও একটি কোম্পানির জন্য তহবিল সংগ্রহ করা সহজ।

ট্যাক্সসেন্স অপ্রয়োজনীয় ফি দূর করে, দীর্ঘ কাগজপত্রের যত্ন নিয়ে, আইনি জটিলতা পরিচালনা করে এবং বিশ্বের সেরা স্টার্টআপ ইকোসিস্টেমগুলির মধ্যে একটিতে আপনাকে অ্যাক্সেস প্রদান করে আপনার ব্যবসা শুরু করার প্রক্রিয়াটি যতটা সম্ভব সহজ করে তোলে।

`,
    services: [
      "Private Limited Company Registration",
      "One Person Company (OPC) Registration",
      "Partnership Firm Registration",
      "Foundation / Society Registration",
      "Joint Venture Formation",
      "Trade License, TIN & BIN Support",
      "RJSC Annual Return & Compliance Filing",
      "MOA & AOA Drafting",
      "Post-Incorporation Advisory & Secretarial Services",
    ],
    services_bn: [
      "প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন",
      "ওয়ান পার্সন কোম্পানি (OPC) নিবন্ধন",
      "পার্টনারশিপ ফার্ম নিবন্ধন",
      "ফাউন্ডেশন / সোসাইটি নিবন্ধন",
      "জয়েন্ট ভেঞ্চার গঠন",
      "ট্রেড লাইসেন্স, TIN ও BIN সহায়তা",
      "RJSC বার্ষিক রিটার্ন ও সম্মতি ফাইলিং",
      "MOA ও AOA খসড়া তৈরি",
      "নিবন্ধন-পরবর্তী পরামর্শ ও সচিবালয় সেবা",
    ],
    icon: "🏢",
  },
  "trade-license": {
    title: "Trade License",
    title_bn: "ট্রেড লাইসেন্স",
    description:
      "Obtaining a Trade License is the first and most essential step to legally operate any business in Bangladesh.",
    description_bn:
      "বাংলাদেশে যেকোনো ব্যবসা পরিচালনার জন্য ট্রেড লাইসেন্স গ্রহণ করা প্রথম ও গুরুত্বপূর্ণ ধাপ।",
    heroImage: "/service/trade-licence.png",
    intro:
      "Taxsense Limited assists with application, renewal, correction, and compliance with City Corporation or Municipality requirements.",
    intro_bn:
      "Taxsense Limited ট্রেড লাইসেন্সের আবেদন, নবায়ন, সংশোধন এবং সিটি কর্পোরেশন বা পৌরসভার নিয়ম অনুযায়ী প্রয়োজনীয় সহায়তা প্রদান করে।",
    content: `Obtaining a Trade License is the first and most essential step to legally operate any business in Bangladesh. At Taxsense Limited, we make this process simple, fast, and fully compliant with local regulations.

Whether you're starting a new company, partnership firm, or small enterprise, our expert team handles the entire process from document preparation and application submission to approval from the respective City Corporation or Municipality.

We ensure your license is issued correctly, renewed on time, and aligned with your business nature — saving you from delays, penalties, or rejection.`,
    content_bn: `বাংলাদেশে যেকোনো ব্যবসা পরিচালনার জন্য ট্রেড লাইসেন্স গ্রহণ করা প্রথম ও গুরুত্বপূর্ণ ধাপ। Taxsense Limited এই প্রক্রিয়াটিকে সহজ, দ্রুত এবং স্থানীয় নিয়ম অনুযায়ী সম্পূর্ণ সামঞ্জস্যপূর্ণ করে তোলে।

আপনি একটি নতুন কোম্পানি, পার্টনারশিপ ফার্ম, বা ছোট উদ্যোগ শুরু করছেন কিনা, আমাদের বিশেষজ্ঞ দল ডকুমেন্ট প্রস্তুতি এবং আবেদন জমা দেওয়া থেকে শুরু করে সংশ্লিষ্ট সিটি কর্পোরেশন বা পৌরসভা থেকে অনুমোদন পর্যন্ত সম্পূর্ণ প্রক্রিয়া পরিচালনা করে।

আমরা নিশ্চিত করি যে আপনার লাইসেন্স সঠিকভাবে জারি করা হয়েছে, সময়মতো নবায়ন করা হয়েছে এবং আপনার ব্যবসার প্রকৃতির সাথে সামঞ্জস্যপূর্ণ — আপনাকে বিলম্ব, জরিমানা বা প্রত্যাখ্যান থেকে রক্ষা করে।`,
    services: [
      "New Trade License Application",
      "Renewal of Trade License",
      "Ownership or Address Change Updates",
      "Correction of Trade License Information",
      "Compliance Guidance",
    ],
    services_bn: [
      "নতুন ট্রেড লাইসেন্স আবেদন",
      "ট্রেড লাইসেন্স নবায়ন",
      "মালিকানা বা ঠিকানা পরিবর্তন আপডেট",
      "ট্রেড লাইসেন্স তথ্য সংশোধন",
      "কমপ্লায়েন্স নির্দেশনা",
    ],
    icon: "📄",
  },
  "trademark-registration": {
    title: "Trademark Registration",
    title_bn: "ট্রেডমার্ক নিবন্ধন",
    description:
      "Trademark registration protects a brand's name, logo, slogan, or symbol under the Department of Patents, Designs & Trademarks (DPDT).",
    description_bn:
      "ট্রেডমার্ক নিবন্ধনের মাধ্যমে ব্যবসার নাম, লোগো বা স্লোগানকে আইনি সুরক্ষা প্রদান করা হয়।",
    heroImage: "/service/trademark-registration.jpg",
    intro:
      "Taxsense Limited provides assistance for trademark application, renewal, and legal procedures.",
    intro_bn:
      "Taxsense Limited ট্রেডমার্ক সার্চ, আবেদন, নবায়ন এবং সংশ্লিষ্ট আইনি সহায়তা প্রদান করে।",
    content: `Trademark registration protects a brand's name, logo, slogan, or symbol under the Department of Patents, Designs & Trademarks (DPDT). Your brand is your identity — protect it with a registered Trademark.

At Taxsense Limited, we provide complete support for Trademark Registration, Renewal, and Legal Protection under the Department of Patents, Designs & Trademarks (DPDT).

Our team conducts thorough trademark searches, prepares all necessary documentation, handles the application process, and ensures your trademark is properly registered and protected.`,
    content_bn: `ট্রেডমার্ক নিবন্ধনের মাধ্যমে ব্যবসার নাম, লোগো বা স্লোগানকে আইনি সুরক্ষা প্রদান করা হয়। আপনার ব্র্যান্ড আপনার পরিচয় — একটি নিবন্ধিত ট্রেডমার্ক দিয়ে এটি রক্ষা করুন।

Taxsense Limited-এ, আমরা ডিপার্টমেন্ট অফ পেটেন্টস, ডিজাইনস অ্যান্ড ট্রেডমার্কস (DPDT)-এর অধীনে ট্রেডমার্ক নিবন্ধন, নবায়ন এবং আইনি সুরক্ষার জন্য সম্পূর্ণ সহায়তা প্রদান করি।

আমাদের টিম পুঙ্খানুপুঙ্খ ট্রেডমার্ক অনুসন্ধান পরিচালনা করে, সমস্ত প্রয়োজনীয় ডকুমেন্টেশন প্রস্তুত করে, আবেদন প্রক্রিয়া পরিচালনা করে এবং নিশ্চিত করে যে আপনার ট্রেডমার্ক সঠিকভাবে নিবন্ধিত এবং সুরক্ষিত।`,
    services: [
      "Trademark Search & Availability Check",
      "Application Filing & DPDT Submission",
      "Class Selection & Documentation",
      "Legal Follow-up",
      "Trademark Renewal",
    ],
    services_bn: [
      "ট্রেডমার্ক সার্চ ও প্রাপ্যতা পরীক্ষা",
      "আবেদন ফাইলিং ও DPDT জমা",
      "ক্লাস নির্বাচন ও ডকুমেন্টেশন",
      "আইনি ফলো-আপ",
      "ট্রেডমার্ক নবায়ন",
    ],
    icon: "®️",
  },
  "tin-bin": {
    title: "TIN & BIN Services",
    description:
      "Tax Identification Number and Business Identification Number services",
    heroImage: "/service/tin-bin.jpg",
    intro:
      "Professional TIN and BIN registration services for individuals and businesses.",
    content: `TIN (Tax Identification Number) and BIN (Business Identification Number) are essential requirements for tax compliance and business operations in Bangladesh. Our services ensure proper registration and management of these important identification numbers.

We provide comprehensive support for TIN registration for individuals and businesses, helping you comply with tax obligations. BIN registration is essential for businesses engaged in import-export activities and VAT-registered businesses.

Our team handles all application processes, documentation requirements, and ensures timely processing of your TIN and BIN applications with the relevant authorities.`,
    services: [
      "TIN Registration for Individuals",
      "TIN Registration for Businesses",
      "BIN Registration & Renewal",
      "TIN Certificate Issuance",
      "TIN/BIN Amendment Services",
      "Return Filing Support",
      "Compliance Monitoring",
      "Advisory Services",
    ],
    icon: "🆔",
  },
  "irc-erc": {
    title:
      "Import Registration Certificate (IRC) & Export Registration Certificate (ERC)",
    title_bn: "আমদানি নিবন্ধন সনদ (IRC) ও রপ্তানি নিবন্ধন সনদ (ERC)",
    description:
      "To import or export legally in Bangladesh, businesses must obtain IRC or ERC from CCI&E.",
    description_bn:
      "বাংলাদেশে বৈধভাবে আমদানি ও রপ্তানি কার্যক্রম পরিচালনার জন্য IRC বা ERC নিবন্ধন বাধ্যতামূলক।",
    heroImage: "/service/irc-erc.png",
    intro:
      "We provide complete assistance for new IRC/ERC registration, renewal, and modification — ensuring your business can legally import and export goods without interruption.",
    intro_bn:
      "আমরা নতুন IRC/ERC নিবন্ধন, নবায়ন এবং সংশোধনের জন্য সম্পূর্ণ সহায়তা প্রদান করি — নিশ্চিত করি যে আপনার ব্যবসা বৈধভাবে বিঘ্ন ছাড়াই পণ্য আমদানি ও রপ্তানি করতে পারে।",
    content: `To import or export legally in Bangladesh, every business must obtain an IRC (Import Registration Certificate) or ERC (Export Registration Certificate) from Office of the Chief Controller of Imports and Exports (CCI&E).

At Taxsense Limited, we provide complete assistance for new IRC/ERC registration, renewal, and modification — ensuring your business can legally import and export goods without interruption.

Our experienced team manages the entire process — from document preparation, bank endorsement, and CCI&E submission to final certificate collection — saving you valuable time and ensuring full compliance with the latest government regulations.`,
    content_bn: `বাংলাদেশে বৈধভাবে আমদানি বা রপ্তানি করতে হলে প্রতিটি ব্যবসাকে চিফ কন্ট্রোলার অফ ইমপোর্টস অ্যান্ড এক্সপোর্টস (CCI&E)-এর কার্যালয় থেকে IRC (আমদানি নিবন্ধন সনদ) বা ERC (রপ্তানি নিবন্ধন সনদ) সংগ্রহ করতে হয়।

Taxsense Limited-এ, আমরা নতুন IRC/ERC নিবন্ধন, নবায়ন এবং সংশোধনের জন্য সম্পূর্ণ সহায়তা প্রদান করি — নিশ্চিত করি যে আপনার ব্যবসা বৈধভাবে বিঘ্ন ছাড়াই পণ্য আমদানি ও রপ্তানি করতে পারে।

আমাদের অভিজ্ঞ টিম সম্পূর্ণ প্রক্রিয়া পরিচালনা করে — ডকুমেন্ট প্রস্তুতি, ব্যাংক এনডোর্সমেন্ট এবং CCI&E জমা থেকে শুরু করে চূড়ান্ত সনদ সংগ্রহ পর্যন্ত — আপনার মূল্যবান সময় সাশ্রয় করে এবং সর্বশেষ সরকারি নিয়মকানুনের সম্পূর্ণ সম্মতি নিশ্চিত করে।`,
    services: [
      "New IRC & ERC License Application",
      "Renewal and Amendment of Existing Licenses",
      "Documentation & Bank Endorsement Support",
      "Trade-related Advisory & Compliance Support",
    ],
    services_bn: [
      "নতুন IRC ও ERC লাইসেন্স আবেদন",
      "বিদ্যমান লাইসেন্স নবায়ন ও সংশোধন",
      "ডকুমেন্টেশন ও ব্যাংক এনডোর্সমেন্ট সহায়তা",
      "বাণিজ্য সংক্রান্ত পরামর্শ ও সম্মতি সহায়তা",
    ],
    icon: "🌐",
  },
  "accounting-service": {
    title: "Accounting Service & Accounts Setup (Software Implementation)",
    title_bn: "হিসাবরক্ষণ সেবা ও অ্যাকাউন্টস সেটআপ (সফটওয়্যার বাস্তবায়ন)",
    description:
      "Every business needs a strong accounting system to track income, expenses, cash flow, and profitability.",
    description_bn:
      "প্রতিটি ব্যবসার জন্য একটি কার্যকর হিসাবরক্ষণ ব্যবস্থা প্রয়োজন, যা আয়, ব্যয়, নগদ প্রবাহ ও লাভ নির্ণয়ে সহায়তা করে।",
    heroImage: "/service/accounting-software.jpg",
    intro:
      "Digital accounting software such as Tally, ZohoBooks, QuickBooks, or Xero can automate routine work and give real-time financial insights.",
    intro_bn:
      "Tally, ZohoBooks, QuickBooks বা Xero-এর মতো ডিজিটাল অ্যাকাউন্টিং সফটওয়্যার রুটিন কাজ স্বয়ংক্রিয় করতে এবং রিয়েল-টাইম আর্থিক অন্তর্দৃষ্টি প্রদান করতে পারে।",
    content: `Every business, regardless of size, needs a strong accounting system to track income, expenses, cash flow, and profitability. Proper accounting not only helps you understand your financial health but also ensures regulatory compliance, tax accuracy, and informed business decisions.

That's where Taxsense Limited comes in. We provide comprehensive Accounting Services and Accounts Setup (Software Implementation) tailored to your business type, size, and compliance needs. Our team of Chartered Accountants, Financial Experts ensures your books are perfectly structured and always up-to-date.`,
    content_bn: `প্রতিটি ব্যবসার জন্য, আকার নির্বিশেষে, একটি শক্তিশালী হিসাবরক্ষণ ব্যবস্থা প্রয়োজন যা আয়, ব্যয়, নগদ প্রবাহ এবং লাভজনকতা ট্র্যাক করে। সঠিক হিসাবরক্ষণ শুধুমাত্র আপনার আর্থিক স্বাস্থ্য বুঝতে সাহায্য করে না বরং নিয়ন্ত্রক সম্মতি, কর নির্ভুলতা এবং সচেতন ব্যবসায়িক সিদ্ধান্ত নিশ্চিত করে।

এখানেই Taxsense Limited আসে। আমরা আপনার ব্যবসার ধরন, আকার এবং সম্মতি প্রয়োজন অনুযায়ী ব্যাপক হিসাবরক্ষণ সেবা এবং অ্যাকাউন্ট সেটআপ (সফটওয়্যার বাস্তবায়ন) প্রদান করি। আমাদের চার্টার্ড অ্যাকাউন্ট্যান্ট এবং আর্থিক বিশেষজ্ঞদের টিম নিশ্চিত করে যে আপনার বইগুলি নিখুঁতভাবে গঠিত এবং সর্বদা আপ-টু-ডেট।`,
    services: [
      "Full Accounting & Bookkeeping Support",
      "Monthly & Annual Financial Statement Preparation",
      "Accounting Software Setup (Tally, QuickBooks, ZohoBooks, Xero, etc.)",
      "Payroll & Expense Management System",
      "Data Entry, Reconciliation & Audit Support",
      "NBR Compliance Advisory",
    ],
    services_bn: [
      "সম্পূর্ণ হিসাবরক্ষণ ও বহিখাতা সহায়তা",
      "মাসিক ও বার্ষিক আর্থিক বিবৃতি প্রস্তুতি",
      "অ্যাকাউন্টিং সফটওয়্যার সেটআপ (Tally, QuickBooks, ZohoBooks, Xero, ইত্যাদি)",
      "বেতন ও ব্যয় ব্যবস্থাপনা সিস্টেম",
      "ডেটা এন্ট্রি, পুনর্মিলন ও অডিট সহায়তা",
      "NBR সম্মতি পরামর্শ",
    ],
    icon: "💻",
  },
  "business-audit": {
    title: "Business Audit Services",
    title_bn: "ব্যবসায়িক অডিট সেবা",
    description:
      "A proper business audit is more than just a compliance requirement — it's a powerful tool to understand your company's true financial position.",
    description_bn:
      "সঠিক ব্যবসায়িক অডিট শুধুমাত্র একটি সম্মতি প্রয়োজনীয়তা নয় — এটি আপনার কোম্পানির প্রকৃত আর্থিক অবস্থা বোঝার জন্য একটি শক্তিশালী হাতিয়ার।",
    heroImage: "/service/business-audit.png",
    intro:
      "We go beyond traditional compliance audits to deliver actionable insights that help you identify risks and improve financial accuracy.",
    intro_bn:
      "আমরা ঐতিহ্যগত সম্মতি অডিটের বাইরে গিয়ে কার্যকর অন্তর্দৃষ্টি প্রদান করি যা আপনাকে ঝুঁকি চিহ্নিত করতে এবং আর্থিক নির্ভুলতা উন্নত করতে সহায়তা করে।",
    content: `A proper business audit is more than just a compliance requirement — it's a powerful tool to understand your company's true financial position and ensure accountability at every level.

In today's fast-changing business environment, a transparent and well-structured audit process gives you the confidence to make informed decisions and sustain long-term growth.

At Taxsense Limited, we go beyond traditional compliance audits to deliver actionable insights. Our approach helps you identify risks, improve financial accuracy, and ensure accountability throughout your organization — empowering better business decisions.`,
    content_bn: `একটি সঠিক ব্যবসায়িক অডিট শুধুমাত্র একটি সম্মতি প্রয়োজনীয়তার চেয়ে বেশি — এটি আপনার কোম্পানির প্রকৃত আর্থিক অবস্থান বোঝার এবং প্রতিটি স্তরে জবাবদিহিতা নিশ্চিত করার জন্য একটি শক্তিশালী হাতিয়ার।

আজকের দ্রুত পরিবর্তনশীল ব্যবসায়িক পরিবেশে, একটি স্বচ্ছ এবং সুসংগঠিত অডিট প্রক্রিয়া আপনাকে সচেতন সিদ্ধান্ত নিতে এবং দীর্ঘমেয়াদী বৃদ্ধি বজায় রাখার আত্মবিশ্বাস দেয়।

Taxsense Limited-এ, আমরা ঐতিহ্যগত সম্মতি অডিটের বাইরে গিয়ে কার্যকর অন্তর্দৃষ্টি প্রদান করি। আমাদের পদ্ধতি আপনাকে ঝুঁকি চিহ্নিত করতে, আর্থিক নির্ভুলতা উন্নত করতে এবং আপনার সংস্থা জুড়ে জবাবদিহিতা নিশ্চিত করতে সহায়তা করে — আরও ভাল ব্যবসায়িক সিদ্ধান্ত গ্রহণে ক্ষমতায়ন করে।`,
    services: [
      "Statutory Audit for Companies",
      "Internal & Management Audit",
      "Compliance Audit (Tax, VAT & Regulatory)",
      "Special Purpose Audit & Investigative Review",
      "Risk Assessment & Internal Control Evaluation",
      "Financial Reporting & Advisory Support",
    ],
    services_bn: [
      "কোম্পানিগুলির জন্য সংবিধিবদ্ধ অডিট",
      "অভ্যন্তরীণ ও ব্যবস্থাপনা অডিট",
      "সম্মতি অডিট (ট্যাক্স, ভ্যাট ও নিয়ন্ত্রক)",
      "বিশেষ উদ্দেশ্য অডিট ও তদন্তমূলক পর্যালোচনা",
      "ঝুঁকি মূল্যায়ন ও অভ্যন্তরীণ নিয়ন্ত্রণ মূল্যায়ন",
      "আর্থিক প্রতিবেদন ও পরামর্শ সহায়তা",
    ],
    icon: "🔍",
  },
  audit: {
    title: "Financial Audit",
    description:
      "Independent financial audit services for accuracy and compliance",
    heroImage:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Independent financial audit services ensuring accuracy, compliance, and transparency in financial reporting.",
    content: `Financial audits provide independent verification of your financial statements and ensure compliance with accounting standards and regulatory requirements. Our professional audit services enhance credibility and transparency in financial reporting.

We conduct comprehensive audits of financial statements, accounting records, and internal controls to ensure accuracy and compliance. Our audit opinions provide stakeholders with confidence in the reliability of financial information.`,
    services: [
      "Statutory Financial Audit",
      "Independent Audit Opinion",
      "Financial Statement Review",
      "Internal Control Testing",
      "Compliance Verification",
      "Management Letter",
      "Audit Documentation",
      "Stakeholder Reporting",
    ],
    icon: "📋",
  },
  "rjsc-return-vat-withholding": {
    title: "RJSC, VAT & Tax Return Services",
    description: "Complete return filing services ensuring timely compliance",
    heroImage: "/service/return-services.jpg",
    intro:
      "Comprehensive return filing services for RJSC, VAT, and withholding tax ensuring regulatory compliance.",
    content: `Regular filing of various returns is mandatory for businesses in Bangladesh. Our comprehensive return filing services ensure timely submission of all required returns including RJSC annual returns, VAT returns, and withholding tax returns.

We handle the preparation and filing of all statutory returns, ensuring compliance with regulatory deadlines and requirements. Our team maintains updated knowledge of changing regulations and filing procedures to ensure accurate and timely submissions.`,
    services: [
      "RJSC Annual Return Filing",
      "VAT Return Preparation & Filing",
      "Withholding Tax Returns",
      "Monthly Return Processing",
      "Compliance Calendar Management",
      "Penalty Avoidance Strategy",
      "Return Amendment Services",
      "Regulatory Update Advisory",
    ],
    icon: "📝",
  },
  "other-services": {
    title: "Other Services",
    title_bn: "অন্যান্য সেবা",
    description:
      "Beyond core tax and compliance services, we assist clients with specialized business licenses and regulatory approvals.",
    description_bn:
      "মূল ট্যাক্স ও কমপ্লায়েন্স সেবার পাশাপাশি, আমরা বিশেষ ব্যবসায়িক লাইসেন্স ও সরকারী অনুমোদন সংগ্রহে সহায়তা প্রদান করি।",
    heroImage: "/service/other.webp",
    intro:
      "Specialized business licenses and regulatory approvals for various sectors including pharmaceuticals, aviation, fire safety, and chamber memberships.",
    intro_bn:
      "ফার্মাসিউটিক্যালস, এভিয়েশন, ফায়ার সেফটি এবং চেম্বার সদস্যপদসহ বিভিন্ন খাতের জন্য বিশেষায়িত ব্যবসায়িক লাইসেন্স ও নিয়ন্ত্রক অনুমোদন।",
    content: `Beyond core tax and compliance services, Taxsense Limited also assists clients with a wide range of specialized business licenses and regulatory approvals such as Drug License (DGDA), Civil Aviation License, Fire License, Chamber of Commerce Membership Certificates, and many more sector-specific approvals required for business compliance and expansion.

These licenses are essential for operating in regulated industries and maintaining full legal compliance. Our team handles the entire process from application to approval, ensuring your business meets all regulatory requirements.`,
    content_bn: `মূল ট্যাক্স ও কমপ্লায়েন্স সেবার পাশাপাশি, Taxsense Limited বিভিন্ন বিশেষায়িত ব্যবসায়িক লাইসেন্স ও নিয়ন্ত্রক অনুমোদন সংগ্রহে সহায়তা প্রদান করে যেমন ড্রাগ লাইসেন্স (DGDA), সিভিল এভিয়েশন লাইসেন্স, ফায়ার লাইসেন্স, চেম্বার অব কমার্স সদস্যপদ সনদপত্র এবং ব্যবসার কমপ্লায়েন্স ও সম্প্রসারণের জন্য প্রয়োজনীয় আরও অনেক সেক্টর-নির্দিষ্ট অনুমোদন।

এই লাইসেন্সগুলো নিয়ন্ত্রিত শিল্পে পরিচালনার জন্য অপরিহার্য এবং সম্পূর্ণ আইনি কমপ্লায়েন্স বজায় রাখতে সহায়ক। আমাদের টিম আবেদন থেকে অনুমোদন পর্যন্ত সম্পূর্ণ প্রক্রিয়া পরিচালনা করে, নিশ্চিত করে যে আপনার ব্যবসা সমস্ত নিয়ন্ত্রক প্রয়োজনীয়তা পূরণ করে।`,
    services: [
      "Drug License (Pharmaceuticals & Medical Devices - DGDA)",
      "Civil Aviation License (Travel, Freight, Airline Support)",
      "Fire License ",
      "Chamber of Commerce Membership Certificates",
      "Sector-specific Regulatory Approvals",
      "License Renewal & Amendment Services",
      "Compliance Advisory & Documentation Support",
    ],
    services_bn: [
      "ড্রাগ লাইসেন্স (ফার্মাসিউটিক্যালস ও মেডিকেল ডিভাইস - DGDA)",
      "সিভিল এভিয়েশন লাইসেন্স (ট্রাভেল, ফ্রেইট, এয়ারলাইন সাপোর্ট)",
      "ফায়ার লাইসেন্স ও ফায়ার সেফটি কমপ্লায়েন্স",
      "চেম্বার অব কমার্স সদস্যপদ সনদপত্র",
      "সেক্টর-নির্দিষ্ট নিয়ন্ত্রক অনুমোদন",
      "লাইসেন্স নবায়ন ও সংশোধন সেবা",
      "কমপ্লায়েন্স পরামর্শ ও ডকুমেন্টেশন সহায়তা",
    ],
    icon: "🔧",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Force re-render on client side when language changes
  useEffect(() => {
    setMounted(true);
  }, [language]);

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const service = servicesData[slug];

  // Map slugs to t.services.items array indices
  const slugToIndexMap = {
    "tax-advisory": 0,
    "vat-consultancy": 1,
    "company-registration": 2,
    "trade-license": 3,
    "trademark-registration": 4,
    "tin-bin": 5,
    "irc-erc": 6,
    "accounting-service": 7,
    "business-audit": 8,
    audit: 9,
    "rjsc-return-vat-withholding": 10,
    "other-services": 11,
  };

  // Helper to pick language-specific fields when available
  const getField = (field) => {
    if (!service) return undefined;

    // Preferred: explicit *_bn or *_en fields on the service object
    if (language === "bn") {
      if (service[`${field}_bn`]) return service[`${field}_bn`];
    } else {
      if (service[`${field}_en`]) return service[`${field}_en`];
    }

    // Fallback: try to use translations from `t.services.items` for title/description
    if (
      (field === "title" || field === "description") &&
      t &&
      t.services &&
      Array.isArray(t.services.items)
    ) {
      const itemIndex = slugToIndexMap[slug];
      if (itemIndex !== undefined && t.services.items[itemIndex]) {
        const item = t.services.items[itemIndex];
        if (field === "title" && item.title) return item.title;
        if (field === "description" && item.description)
          return item.description;
      }
    }

    // Final fallback to default field
    if (service[field]) return service[field];

    return undefined;
  };

  const title = getField("title");
  const description = getField("description");
  const intro = getField("intro");
  const content = getField("content");
  const servicesList = getField("services") || service.services || [];

  // Handle service not found
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
            >
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    "Hello, I want a quotation for " + title
  )}`;

  return (
    <>
      <NextSeo
        title={`${title} - Taxsense Ltd`}
        description={description}
        openGraph={{
          title: `${title} - Taxsense Ltd`,
          description: description,
          images: [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
      />

      <Layout key={language}>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.heroImage})`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">{service.icon}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {title}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {intro}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <div className="text-gray-700 leading-relaxed mb-12">
                {(content || "").split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Services List */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {language === "bn"
                    ? `আমাদের ${title} সেবাসমূহ অন্তর্ভুক্ত:`
                    : `Our ${title} Services Include:`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesList.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-[#700000] mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "bn" ? "শুরু করতে প্রস্তুত?" : "Ready to Get Started?"}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {language === "bn"
                    ? `আপনার প্রয়োজন অনুযায়ী পেশাদার ${title} সেবার জন্য আমাদের বিশেষজ্ঞদের সাথে যোগাযোগ করুন।`
                    : `Contact our experts for professional ${title} services tailored to your needs.`}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#700000] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#8b1f1f] transition-colors transform hover:scale-105 inline-flex items-center justify-center cursor-pointer"
                  >
                    {language === "bn" ? "মূল্য নির্ধারণ পান" : "Get Quotation"}
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <Link
                    href="/services"
                    className="border-2 border-[#700000] text-[#700000] px-8 py-3 rounded-xl font-semibold hover:bg-[#700000] hover:text-white transition-colors inline-flex items-center justify-center cursor-pointer overflow-hidden transform-gpu"
                  >
                    {language === "bn" ? "সব সেবা দেখুন" : "View All Services"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(servicesData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  if (!servicesData[slug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
}
