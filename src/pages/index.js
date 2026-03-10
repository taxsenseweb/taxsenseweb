import { NextSeo, OrganizationJsonLd, FAQPageJsonLd } from "next-seo";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhoWeAreSection from "../components/home/WhoWeAreSection";
import PricingPlansSection from "../components/home/PricingPlansSection";
import ClientsSection from "../components/home/ClientsSection";
import FAQSection from "../components/home/FAQSection";

// SEO data for home page
const homepageSEO = {
  title:
    "Taxsense Ltd - Expert Tax Consultancy & Accounting Services in Bangladesh",
  description:
    "Professional tax consultancy firm in Dhaka, Bangladesh. Specializing in VAT, income tax, corporate tax planning, accounting, and business advisory services. Trusted by 500+ clients.",
  canonical: "https://taxsense.com.bd",
  openGraph: {
    title:
      "Taxsense Ltd - Expert Tax Consultancy & Accounting Services in Bangladesh",
    description:
      "Professional tax consultancy firm in Dhaka, Bangladesh. Specializing in VAT, income tax, corporate tax planning, accounting, and business advisory services. Trusted by 500+ clients.",
    url: "https://taxsense.com.bd",
    type: "website",
    images: [
      {
        url: "https://taxsense.com.bd/taxsense_ltd1.png",
        width: 1200,
        height: 630,
        alt: "Taxsense Ltd - Professional Tax Consultancy Services",
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "tax consultant Dhaka, VAT registration Bangladesh, income tax filing, corporate tax planning, accounting services Dhaka, business consultant Bangladesh, tax advisory firm",
    },
    {
      property: "article:publisher",
      content: "https://www.facebook.com/taxsensebd",
    },
  ],
};

// Organization structured data
const organizationData = {
  type: "Organization",
  id: "https://taxsense.com.bd",
  name: "Taxsense Ltd",
  alternateName: "Taxsense Limited",
  url: "https://taxsense.com.bd",
  logo: "https://taxsense.com.bd/taxsense_ltd1.png",
  contactPoint: [
    {
      telephone: "+880-1234-567890",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  ],
  address: {
    streetAddress: "House 123, Road 456",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka Division",
    postalCode: "1207",
    addressCountry: "BD",
  },
  sameAs: [
    "https://www.facebook.com/taxsensebd",
    "https://www.linkedin.com/company/taxsensebd",
  ],
};

// FAQ structured data
const faqData = {
  mainEntity: [
    {
      questionName: "What tax services do you provide?",
      acceptedAnswerText:
        "We provide comprehensive tax services including VAT registration and filing, income tax preparation, corporate tax planning, tax compliance, and business advisory services.",
    },
    {
      questionName: "How much do your tax consultancy services cost?",
      acceptedAnswerText:
        "Our pricing varies based on the complexity of your tax needs. We offer competitive packages starting from basic consultation to comprehensive annual tax management services.",
    },
    {
      questionName: "Do you serve clients outside Dhaka?",
      acceptedAnswerText:
        "Yes, we serve clients across Bangladesh and also provide remote consultation services for international clients with Bangladesh tax obligations.",
    },
    {
      questionName: "How quickly can you complete tax filing?",
      acceptedAnswerText:
        "Most individual tax returns are completed within 3-5 business days, while corporate filings typically take 7-10 business days depending on complexity.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <NextSeo {...homepageSEO} />
      <OrganizationJsonLd {...organizationData} />
      <FAQPageJsonLd {...faqData} />

      <Layout>
        <HeroSection />
        <ServicesSection />
        <WhoWeAreSection />
        <PricingPlansSection />
        <ClientsSection />
        <FAQSection />
      </Layout>
    </>
  );
}
