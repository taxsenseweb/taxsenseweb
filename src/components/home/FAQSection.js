import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export default function FAQSection() {
  const { language } = useLanguage();

  // Separate state for left and right columns
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (index) => {
    setOpenLeft((prev) => (prev === index ? null : index));
  };

  const toggleRight = (index) => {
    setOpenRight((prev) => (prev === index ? null : index));
  };

  const faqs = {
    en: [
      {
        question: "What is the meaning of income tax?",
        answer:
          "In Bangladesh, income tax is levied on the income of the taxpayer. According to the Income Tax Act-2023, this tax includes not only the income tax due under the act but also additional tax, surplus tax, fines, interest, or any recoverable amounts. In essence, income tax is a mandatory contribution to the government, intended to help cover state expenses for the benefit of all citizens.",
      },
      {
        question: "What is E-TIN?",
        answer: "E-TIN stands for Electronic Tax Identification Number.",
      },
      {
        question: "Who is eligible for the income tax return in Bangladesh?",
        answer:
          "With a few exceptions, any individual with an E-TIN (Electronic Taxpayer Identification Number) is required to submit a tax return.",
      },
      {
        question: "When do I have to file my income tax return?",
        answer:
          "Individual taxpayers must submit their income tax returns between July 1st and November 30th each year.",
      },
      {
        question: "Where to submit the income tax return?",
        answer:
          "You must submit your income tax return to the respective tax circle mentioned on your E-TIN.",
      },
      {
        question: "What is the zero-income tax return?",
        answer:
          "If the taxable income does not exceed the minimum threshold (BDT 3.50 lakh for males and BDT 4 lakh for females), the individual is eligible to submit a zero-income tax return.",
      },
      {
        question: "What is the income tax rate in Bangladesh?",
        answer: (
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                For any male, the income tax rate in Bangladesh:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• For the first 3,50,000 BDT of total income: 0%</li>
                <li>• For the next 1,00,000 BDT of total income: 5%</li>
                <li>• For the next 4,00,000 BDT of total income: 10%</li>
                <li>• For the next 5,00,000 BDT of total income: 15%</li>
                <li>• For the next 5,00,000 BDT of total income: 20%</li>
                <li>• For the next 20,00,000 BDT of total income: 25%</li>
                <li>• On the remaining total income: 30%</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                For any third gender or female or above 65 years of age:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• For the first 4,00,000 BDT of total income: 0%</li>
                <li>• For the next 1,00,000 BDT of total income: 5%</li>
                <li>• For the next 4,00,000 BDT of total income: 10%</li>
                <li>• For the next 5,00,000 BDT of total income: 15%</li>
                <li>• For the next 5,00,000 BDT of total income: 20%</li>
                <li>• For the next 20,00,000 BDT of total income: 25%</li>
                <li>• On the remaining total income: 25%</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        question: "What is the minimum tax?",
        answer:
          "When taxable income exceeds the tax-free limit, the taxpayer must pay tax based on their area of residence. The minimum tax amounts are BDT 5,000 for Dhaka and Chittagong city corporation areas, BDT 4,000 for other city corporation areas, and BDT 3,000 for areas outside the city corporations.",
      },
      {
        question: "Who will pay income tax in Bangladesh?",
        answer:
          "Individuals whose income exceeds the minimum taxable thresholds (BDT 3.50 lakh for males and BDT 4 lakh for females) are required to pay income tax.",
      },
      {
        question: "What are the sources of income for income tax?",
        answer:
          "According to the Income Tax Act-2023, the sources of income are as follows: 1. Income from Employment, 2. Income from Rent, 3. Income from Agriculture, 4. Income from Business, 5. Income from Capital Gain, 6. Income from Financial Assets, 7. Income from Other Sources.",
      },
      {
        question: "What is Tax Deducted at Source (TDS)?",
        answer:
          "The tax deducted from income before payment is referred to as Tax Deducted at Source (TDS).",
      },
      {
        question: "How do I apply for E-TIN?",
        answer: "To get your E-TIN, please visit the incometax.gov.bd",
      },
    ],
    bn: [
      {
        question: "আয়কর কী?",
        answer:
          "বাংলাদেশে করদাতার আয়ের উপর আয়কর আরোপ করা হয়। আয়কর আইন-২০২৩ অনুযায়ী, এই করের মধ্যে শুধুমাত্র আইনের অধীনে প্রাপ্য আয়কর নয়, অতিরিক্ত কর, উদ্বৃত্ত কর, জরিমানা, সুদ বা যেকোনো আদায়যোগ্য অর্থও অন্তর্ভুক্ত। মূলত, আয়কর সরকারের কাছে একটি বাধ্যতামূলক অবদান, যা সকল নাগরিকের কল্যাণে রাষ্ট্রীয় ব্যয় মেটাতে সাহায্য করার উদ্দেশ্যে।",
      },
      {
        question: "ই-টিন কী?",
        answer: "ই-টিন অর্থ ইলেকট্রনিক ট্যাক্স আইডেন্টিফিকেশন নম্বর।",
      },
      {
        question: "বাংলাদেশে আয়কর রিটার্নের জন্য কে যোগ্য?",
        answer:
          "কিছু ব্যতিক্রম ছাড়া, ই-টিন (ইলেকট্রনিক ট্যাক্সপেয়ার আইডেন্টিফিকেশন নম্বর) সহ যেকোনো ব্যক্তিকে কর রিটার্ন জমা দিতে হবে।",
      },
      {
        question: "কখন আমাকে আয়কর রিটার্ন দাখিল করতে হবে?",
        answer:
          "ব্যক্তিগত করদাতাদের প্রতি বছর ১ জুলাই থেকে ৩০ নভেম্বরের মধ্যে তাদের আয়কর রিটার্ন জমা দিতে হবে।",
      },
      {
        question: "আয়কর রিটার্ন কোথায় জমা দিতে হবে?",
        answer:
          "আপনার ই-টিনে উল্লিখিত সংশ্লিষ্ট কর সার্কেলে আপনার আয়কর রিটার্ন জমা দিতে হবে।",
      },
      {
        question: "শূন্য আয়কর রিটার্ন কী?",
        answer:
          "যদি করযোগ্য আয় ন্যূনতম সীমা (পুরুষদের জন্য ৩.৫০ লাখ টাকা এবং মহিলাদের জন্য ৪ লাখ টাকা) অতিক্রম না করে, তাহলে ব্যক্তি শূন্য আয়কর রিটার্ন জমা দেওয়ার যোগ্য।",
      },
      {
        question: "বাংলাদেশে আয়করের হার কত?",
        answer: (
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                যেকোনো পুরুষের জন্য বাংলাদেশে আয়করের হার:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• প্রথম ৩,৫০,০০০ টাকা মোট আয়ের জন্য: ০%</li>
                <li>• পরবর্তী ১,০০,০০০ টাকা মোট আয়ের জন্য: ৫%</li>
                <li>• পরবর্তী ৪,০০,০০০ টাকা মোট আয়ের জন্য: ১০%</li>
                <li>• পরবর্তী ৫,০০,০০০ টাকা মোট আয়ের জন্য: ১৫%</li>
                <li>• পরবর্তী ৫,০০,০০০ টাকা মোট আয়ের জন্য: ২০%</li>
                <li>• পরবর্তী ২০,০০,০০০ টাকা মোট আয়ের জন্য: ২৫%</li>
                <li>• অবশিষ্ট মোট আয়ের উপর: ৩০%</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                যেকোনো তৃতীয় লিঙ্গ বা মহিলা বা ৬৫ বছরের উর্ধ্বে:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• প্রথম ৪,০০,০০০ টাকা মোট আয়ের জন্য: ০%</li>
                <li>• পরবর্তী ১,০০,০০০ টাকা মোট আয়ের জন্য: ৫%</li>
                <li>• পরবর্তী ৪,০০,০০০ টাকা মোট আয়ের জন্য: ১০%</li>
                <li>• পরবর্তী ৫,০০,০০০ টাকা মোট আয়ের জন্য: ১৫%</li>
                <li>• পরবর্তী ৫,০০,০০০ টাকা মোট আয়ের জন্য: ২০%</li>
                <li>• পরবর্তী ২০,০০,০০০ টাকা মোট আয়ের জন্য: ২৫%</li>
                <li>• অবশিষ্ট মোট আয়ের উপর: ২৫%</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        question: "ন্যূনতম কর কী?",
        answer:
          "যখন করযোগ্য আয় করমুক্ত সীমা অতিক্রম করে, তখন করদাতাকে তাদের বসবাসের এলাকার ভিত্তিতে কর প্রদান করতে হবে। ন্যূনতম কর হল ঢাকা ও চট্টগ্রাম সিটি কর্পোরেশন এলাকার জন্য ৫,০০০ টাকা, অন্যান্য সিটি কর্পোরেশন এলাকার জন্য ৪,০০০ টাকা এবং সিটি কর্পোরেশনের বাইরের এলাকার জন্য ৩,০০০ টাকা।",
      },
      {
        question: "বাংলাদেশে কে আয়কর প্রদান করবে?",
        answer:
          "যাদের আয় ন্যূনতম করযোগ্য সীমা (পুরুষদের জন্য ৩.৫০ লাখ টাকা এবং মহিলাদের জন্য ৪ লাখ টাকা) অতিক্রম করে তাদের আয়কর প্রদান করতে হবে।",
      },
      {
        question: "আয়করের জন্য আয়ের উৎস কী?",
        answer:
          "আয়কর আইন-২০২৩ অনুযায়ী, আয়ের উৎসগুলি নিম্নরূপ: ১. চাকরি থেকে আয়, ২. ভাড়া থেকে আয়, ৩. কৃষি থেকে আয়, ৪. ব্যবসা থেকে আয়, ৫. মূলধনী লাভ থেকে আয়, ৬. আর্থিক সম্পদ থেকে আয়, ৭. অন্যান্য উৎস থেকে আয়।",
      },
      {
        question: "উৎসে কর কর্তন (TDS) কী?",
        answer:
          "পেমেন্টের আগে আয় থেকে যে কর কেটে নেওয়া হয় তাকে উৎসে কর কর্তন (TDS) বলে।",
      },
      {
        question: "আমি কীভাবে ই-টিনের জন্য আবেদন করব?",
        answer: "আপনার ই-টিন পেতে, অনুগ্রহ করে incometax.gov.bd ভিজিট করুন।",
      },
    ],
  };

  const currentFAQs = faqs[language || "en"] || faqs.en;

  // Split into two columns
  const mid = Math.ceil(currentFAQs.length / 2);
  const leftFAQs = currentFAQs.slice(0, mid);
  const rightFAQs = currentFAQs.slice(mid);

  const AccordionItem = ({ faq, isOpen, onToggle }) => (
    <div
      className={`bg-white border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
        isOpen ? "shadow-md" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left text-red-800 flex items-center justify-between   rounded-xl"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.25 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="border-t border-gray-100 pt-4">
                {typeof faq.answer === "string" ? (
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                ) : (
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {language === "bn"
              ? "আয়কর সম্পর্কিত প্রশ্ন ও উত্তর"
              : "Income Tax FAQs"}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600/80 max-w-4xl mx-auto leading-relaxed">
            {language === "bn"
              ? "বাংলাদেশের আয়কর নিয়ম ও পদ্ধতি সম্পর্কে সাধারণ প্রশ্নের উত্তর পান।"
              : "Get answers to common questions about income tax rules and procedures in Bangladesh."}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left column */}
          <div className="space-y-4">
            {leftFAQs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                faq={faq}
                isOpen={openLeft === idx}
                onToggle={() => toggleLeft(idx)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {rightFAQs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                faq={faq}
                isOpen={openRight === idx}
                onToggle={() => toggleRight(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
