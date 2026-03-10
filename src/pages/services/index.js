import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Service Card Component
const ServiceCard = ({ service, index, imageUrl, getServiceSlug }) => {
  const router = useRouter();

  const handleReadMore = () => {
    const slug = getServiceSlug(service.title);
    router.push(`/services/${slug}`);
  };

  const getServiceIcon = (title) => {
    const iconProps = {
      className: "w-6 h-6 text-white",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    };

    if (title.includes("Tax") || title.includes("ট্যাক্স")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      );
    }
    if (title.includes("VAT") || title.includes("ভ্যাট")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }
    if (title.includes("Company") || title.includes("কোম্পানি")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    }
    if (title.includes("Trade License") || title.includes("ট্রেড লাইসেন্স")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
    if (title.includes("Trademark") || title.includes("ট্রেডমার্ক")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    }
    if (
      title.includes("IRC") ||
      title.includes("ERC") ||
      title.includes("আইআরসি") ||
      title.includes("ইআরসি")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
          />
        </svg>
      );
    }
    if (
      title.includes("Account") ||
      title.includes("Software") ||
      title.includes("অ্যাকাউন্ট") ||
      title.includes("সফটওয়্যার")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }
    if (
      title.includes("Business Audit") ||
      title.includes("ব্যবসায়িক নিরীক্ষা")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      );
    }

    // Default icon
    return (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${service.title} - Taxsense Ltd Professional Services`}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          {getServiceIcon(service.title)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Action Section */}
        <div className="mt-auto flex items-center justify-between">
          <button
            onClick={handleReadMore}
            className="inline-flex items-center bg-[#700000] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#8b1f1f] transition-colors duration-200 cursor-pointer"
          >
            Learn More
            <svg
              className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200"
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
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="text-gray-400 hover:text-primary transition-colors duration-200"
            title="Get Consultation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useLanguage();

  // Service navigation mapping
  const serviceNavigationMap = {
    "Tax Advisory": "tax-advisory",
    "VAT Consultancy": "vat-consultancy",
    "Company Registration": "company-registration",
    "Trade License": "trade-license",
    "Trademark Registration": "trademark-registration",
    "IRC & ERC Services": "irc-erc",
    "Accounting Service & Software Implementation": "accounting-service",
    "Business Audit": "business-audit",
    "Other Service": "other-services",
    "ট্যাক্স পরামর্শ": "tax-advisory",
    "ভ্যাট পরামর্শ": "vat-consultancy",
    "ভ্যাট কনসালটেন্সি": "vat-consultancy",
    "কোম্পানি নিবন্ধন": "company-registration",
    "ট্রেড লাইসেন্স": "trade-license",
    "ট্রেডমার্ক নিবন্ধন": "trademark-registration",
    "আইআরসি ও ইআরসি সেবা": "irc-erc",
    "অ্যাকাউন্টিং সেবা ও সফটওয়্যার বাস্তবায়ন": "accounting-service",
    "ব্যবসায়িক নিরীক্ষা": "business-audit",
    "অন্যান্য সেবা": "other-services",
  };

  // Service images
  const serviceImages = [
    "/service/tax-advisory.webp", // Tax Advisory
    "/service/vat-consultancy.webp", // VAT Consultancy
    "/service/company-registration.jpg", // Company Registration
    "/service/trade-licence.png", // Trade License
    "/service/trademark-registration.jpg", // Trademark Registration
    "/service/tax-advisory.webp", // TIN & BIN Services (excluded - placeholder)
    "/service/irc-erc.png", // IRC & ERC Services
    "/service/accounting-software.jpg", // Accounting & Software Implementation
    "/service/business-audit.png", // Business Audit
    "/service/tax-advisory.webp", // Financial Audit (excluded - placeholder)
    "/service/vat-consultancy.webp", // RJSC, VAT & Tax Return (excluded - placeholder)
  ];

  const getServiceSlug = (serviceTitle) => {
    if (serviceNavigationMap[serviceTitle]) {
      return serviceNavigationMap[serviceTitle];
    }
    return serviceTitle
      .toLowerCase()
      .replace(/[&,]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Filter services
  const excludedTitles = [
    "TIN & BIN Services",
    "টিআইএন ও বিআইএন সেবা",
    "Financial Audit",
    "আর্থিক নিরীক্ষা",
    "RJSC, VAT & Tax Return Services",
    "আরজেএসসি, ভ্যাট ও ট্যাক্স রিটার্ন সেবা",
  ];

  const filteredServices = t.services.items.filter(
    (s) => !excludedTitles.includes(s.title),
  );

  const servicesWithOther = [
    ...filteredServices,
    {
      title: "Other Service",
      description:
        t.services.otherDescription ||
        "Additional tailored services and bespoke support to meet your unique needs.",
    },
  ];

  const serviceImagesFor = servicesWithOther.map((s) => {
    const origIndex = t.services.items.findIndex((it) => it.title === s.title);
    if (origIndex >= 0 && origIndex < serviceImages.length) {
      return serviceImages[origIndex];
    }
    return "/service/other.webp";
  });

  // Split services: 4 + 4 + 1 (Other Service centered)
  const firstRowServices = servicesWithOther.slice(0, 4);
  const secondRowServices = servicesWithOther.slice(4, 8);
  const lastRowServices = servicesWithOther.slice(8, 9); // Only Other Service

  return (
    <Layout>
      <NextSeo
        title="Our Services - Taxsense Ltd"
        description="Comprehensive tax advisory, VAT consultancy, company registration, and business services in Bangladesh. Expert solutions for your business needs."
        canonical="https://taxsense.com.bd/services"
        openGraph={{
          url: "https://taxsense.com.bd/services",
          title: "Our Services - Taxsense Ltd",
          description:
            "Comprehensive tax advisory, VAT consultancy, company registration, and business services in Bangladesh.",
          images: [
            {
              url: "https://taxsense.com.bd/og-services.jpg",
              width: 1200,
              height: 630,
              alt: "Taxsense Ltd Services",
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
            {t.services?.subtitle || "Professional Solutions"}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.services?.title || "Our Services"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {t.services?.description ||
              "Comprehensive business solutions tailored to your needs"}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Professional Services Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to meet all
              your business needs
            </p>
          </div>

          {/* First Row - 4 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {firstRowServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                imageUrl={
                  serviceImagesFor[servicesWithOther.indexOf(service)] ||
                  serviceImages[0]
                }
                getServiceSlug={getServiceSlug}
              />
            ))}
          </div>

          {/* Second Row - 4 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {secondRowServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 4}
                imageUrl={
                  serviceImagesFor[servicesWithOther.indexOf(service)] ||
                  serviceImages[0]
                }
                getServiceSlug={getServiceSlug}
              />
            ))}
          </div>

          {/* Third Row - 1 Service (Other Service Centered) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {lastRowServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index + 8}
                  imageUrl={
                    serviceImagesFor[servicesWithOther.indexOf(service)] ||
                    serviceImages[0]
                  }
                  getServiceSlug={getServiceSlug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Work with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our professional services can help your
                business grow and succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl">
                    Get a Quote
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
                <Link href="/about">
                  <button className="border-2 border-[#700000] text-[#700000] hover:bg-[#700000] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer">
                    Learn More About Us
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
