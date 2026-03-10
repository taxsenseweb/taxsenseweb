import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Resource Card Component
const ResourceCard = ({ resource, category }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={resource.image}
          alt={resource.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>

        {/* Type Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          {resource.type === "guide" && (
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          )}
          {resource.type === "template" && (
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          )}
          {resource.type === "checklist" && (
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {resource.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {resource.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {resource.readTime}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            {resource.views}
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Link href={resource.link}>
            <button className="w-full bg-[#700000] hover:bg-[#8b1f1f] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 inline-flex items-center justify-center cursor-pointer">
              {resource.type === "template" ? "Download" : "Read More"}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Resources() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  // Dummy resource data
  const categories = [
    { id: "all", name: "All Resources" },
    { id: "tax", name: "Tax & VAT" },
    { id: "business", name: "Business Setup" },
    { id: "compliance", name: "Compliance" },
    { id: "templates", name: "Templates" },
  ];

  const resources = [
    {
      id: 1,
      category: "tax",
      type: "guide",
      title: "Complete Guide to VAT Registration in Bangladesh",
      description:
        "Step-by-step guide covering VAT registration requirements, documentation, and the complete application process for businesses in Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      readTime: "8 min read",
      views: "2.4k views",
      link: "/resources/vat-registration-guide",
    },
    {
      id: 2,
      category: "tax",
      type: "guide",
      title: "Tax Planning Strategies for Small Businesses",
      description:
        "Effective tax planning strategies to minimize tax liability while ensuring compliance with Bangladesh tax regulations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      readTime: "12 min read",
      views: "3.1k views",
      link: "/resources/tax-planning-strategies",
    },
    {
      id: 3,
      category: "business",
      type: "checklist",
      title: "Company Registration Checklist 2025",
      description:
        "Complete checklist for company registration in Bangladesh including all required documents, fees, and procedural steps.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      readTime: "5 min read",
      views: "1.8k views",
      link: "/resources/company-registration-checklist",
    },
    {
      id: 4,
      category: "business",
      type: "guide",
      title: "How to Obtain Trade License in Dhaka",
      description:
        "Comprehensive guide to obtaining a trade license from Dhaka city corporations with timeline expectations and common pitfalls to avoid.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      readTime: "10 min read",
      views: "2.9k views",
      link: "/resources/trade-license-guide",
    },
    {
      id: 5,
      category: "templates",
      type: "template",
      title: "Annual Tax Return Template",
      description:
        "Ready-to-use Excel template for preparing individual and corporate annual tax returns with built-in calculations.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      readTime: "Instant download",
      views: "5.2k downloads",
      link: "/resources/download/tax-return-template",
    },
    {
      id: 6,
      category: "compliance",
      type: "guide",
      title: "Understanding IRC & ERC Certificates",
      description:
        "Everything you need to know about Import Registration Certificate (IRC) and Export Registration Certificate (ERC) in Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      readTime: "7 min read",
      views: "1.5k views",
      link: "/resources/irc-erc-guide",
    },
    {
      id: 7,
      category: "templates",
      type: "template",
      title: "Business Expense Tracker Spreadsheet",
      description:
        "Professional expense tracking template with category management, receipt logging, and monthly reporting features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      readTime: "Instant download",
      views: "4.7k downloads",
      link: "/resources/download/expense-tracker",
    },
    {
      id: 8,
      category: "compliance",
      type: "checklist",
      title: "Monthly VAT Return Filing Checklist",
      description:
        "Month-end checklist to ensure accurate and timely VAT return filing with all required supporting documents.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      readTime: "4 min read",
      views: "2.1k views",
      link: "/resources/vat-return-checklist",
    },
    {
      id: 9,
      category: "business",
      type: "guide",
      title: "Trademark Registration Process in Bangladesh",
      description:
        "Detailed walkthrough of the trademark registration process including search, application, examination, and approval stages.",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=300&fit=crop",
      readTime: "9 min read",
      views: "1.9k views",
      link: "/resources/trademark-registration",
    },
    {
      id: 10,
      category: "tax",
      type: "guide",
      title: "TIN & BIN: What You Need to Know",
      description:
        "Complete information about Tax Identification Number (TIN) and Business Identification Number (BIN) requirements and application process.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      readTime: "6 min read",
      views: "3.5k views",
      link: "/resources/tin-bin-guide",
    },
    {
      id: 11,
      category: "templates",
      type: "template",
      title: "Invoice Template for Bangladesh Businesses",
      description:
        "Professional invoice template compliant with Bangladesh VAT regulations including all mandatory fields.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      readTime: "Instant download",
      views: "6.8k downloads",
      link: "/resources/download/invoice-template",
    },
    {
      id: 12,
      category: "compliance",
      type: "guide",
      title: "RJSC Annual Return Filing Guide",
      description:
        "Essential guide for filing annual returns with the Registrar of Joint Stock Companies and Firms (RJSC) in Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      readTime: "11 min read",
      views: "2.3k views",
      link: "/resources/rjsc-annual-return",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <Layout>
      <NextSeo
        title="Resources - Tax Guides, Templates & Checklists | Taxsense Ltd"
        description="Free tax guides, business templates, compliance checklists, and resources for businesses in Bangladesh. Expert insights on VAT, company registration, and more."
        canonical="https://taxsense.com.bd/resources"
        openGraph={{
          url: "https://taxsense.com.bd/resources",
          title: "Resources - Tax Guides & Templates | Taxsense Ltd",
          description:
            "Free tax guides, business templates, and compliance resources for Bangladesh businesses.",
          images: [
            {
              url: "https://taxsense.com.bd/og-resources.jpg",
              width: 1200,
              height: 630,
              alt: "Taxsense Ltd Resources",
            },
          ],
          site_name: "Taxsense Ltd",
        }}
      />

      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-r from-[#700000] via-[#8b1f1f] to-[#700000] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Resources & Learning Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Expert guides, templates, and checklists to help your business
            succeed in Bangladesh
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#700000] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
              {filteredResources.length} Resources Available
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {activeCategory === "all"
                ? "All Resources"
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of expert guides and downloadable resources
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                category={
                  categories.find((c) => c.id === resource.category)?.name
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Get Resources Delivered to Your Inbox
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to receive the latest tax guides, business templates,
                and compliance updates
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Need More Help?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is here to provide personalized guidance for your
            specific business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl">
                Contact Our Experts
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-[#700000] text-[#700000] hover:bg-[#700000] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer">
                View Our Services
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
