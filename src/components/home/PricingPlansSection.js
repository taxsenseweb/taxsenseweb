import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function PricingPlansSection() {
  const { t } = useLanguage();
  const packages = [
    {
      title: "Tax Advisory",
      price: "৳2,000",
      priceNote: "Starting From",
      description: "Comprehensive tax planning and compliance solutions",
      features: [
        "Tax Planning & Strategic Advisory",
        "Individual & Corporate Tax Return",
        "Expert Tax Advisory",
        "Tax Assessment & Appeal Support",
        "Withholding Tax (AIT) Management",
      ],
      slug: "tax-advisory",
      icon: "💰",
    },
    {
      title: "VAT Consultancy",
      price: "Negotiable",
      priceNote: "",
      description: "Complete VAT registration and compliance services",
      features: [
        "VAT (BIN) Registration",
        "Monthly VAT Return Filing",
        "VAT Advisory & Compliance",
        "VAT Audit Support",
        "VAT Planning & Strategy",
      ],
      slug: "vat-consultancy",
      icon: "📊",
    },
    {
      title: "Company Registration",
      price: "৳12,000",
      priceNote: "Starting From",
      description: "Full company registration for all business structures",
      features: [
        "Private Limited Company",
        "One Person Company (OPC)",
        "Partnership Firm",
        "Foundation / Society",
        "Trade License & TIN Support",
      ],
      slug: "company-registration",
      icon: "🏢",
      popular: true,
    },
    {
      title: "Trade License",
      price: "৳2,000",
      priceNote: "Starting From",
      description: "Trade license application and renewal services",
      features: [
        "New Trade License Application",
        "Renewal of Trade License",
        "Ownership/Address Change",
        "Correction of Information",
        "City Corporation Compliance",
      ],
      slug: "trade-license-trademark-registration",
      icon: "📄",
    },
    {
      title: "Trademark Registration",
      price: "৳12,000",
      priceNote: "Starting From",
      description: "Protect your brand with trademark registration",
      features: [
        "Trademark Search & Check",
        "Application Filing & DPDT Submission",
        "Trademark Renewal",
        "Legal Follow-up Support",
        "Brand Protection Advisory",
      ],
      slug: "trade-license-trademark-registration",
      icon: "®️",
    },
    {
      title: "IRC & ERC Services",
      price: "৳10,000",
      priceNote: "Starting From",
      description: "Import and export registration certificates",
      features: [
        "New IRC & ERC Application",
        "Renewal & Amendment",
        "Documentation Support",
        "Bank Endorsement",
        "Trade Compliance Advisory",
      ],
      slug: "irc-erc",
      icon: "🌐",
    },
    {
      title: "Accounting Service",
      price: "Negotiable",
      priceNote: "",
      description: "Accounting services and software implementation",
      features: [
        "Full Accounting & Bookkeeping",
        "Financial Statement Preparation",
        "Software Setup (Tally, QuickBooks)",
        "Payroll & Expense Management",
        "NBR Compliance Advisory",
      ],
      slug: "accounting-service",
      icon: "💻",
    },
    {
      title: "Business Audit",
      price: "Negotiable",
      priceNote: "",
      description: "Comprehensive business audit services",
      features: [
        "Statutory Audit for Companies",
        "Internal & Management Audit",
        "Compliance Audit (Tax, VAT)",
        "Risk Assessment & Control",
        "Financial Reporting Support",
      ],
      slug: "business-audit",
      icon: "🔍",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Tilted Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: "rotateY(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-gray-100"
            opacity="0.3"
          ></path>
        </svg>
      </div>

      {/* Decorative Geometric Shapes */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-32 left-10 w-16 h-16 border-2 border-primary/10 transform rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-20 h-20 border-2 border-primary/10 rounded-full"></div>
        <svg
          className="absolute top-1/2 right-10 w-24 h-24 opacity-[0.05]"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,10 90,90 10,90"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-black px-5 py-2.5 rounded-full text-base font-semibold mb-6">
            {t.pricing.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            {t.pricing.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-black/80 max-w-4xl mx-auto leading-relaxed">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-[#700000] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
                pkg.popular
                  ? "ring-2 ring-white border-white/20"
                  : "border border-primary/20"
              }`}
              style={{ minHeight: "450px" }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-white text-[#700000] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="p-4 flex flex-col flex-1">
                {/* Icon - Fixed height */}
                <div className="text-center mb-1.5">
                  <div className="text-2xl">{pkg.icon}</div>
                </div>

                {/* Title - Fixed height */}
                <div className="text-center mb-2" style={{ minHeight: "48px" }}>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {pkg.title}
                  </h3>
                </div>

                {/* Description - Fixed height */}
                <div className="text-center mb-3" style={{ minHeight: "40px" }}>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Pricing Display - Fixed height */}
                <div className="text-center mb-4" style={{ minHeight: "70px" }}>
                  {pkg.priceNote === "" ? (
                    <div className="flex flex-col justify-center h-full">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {pkg.price}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center h-full">
                      <div className="mb-2">
                        <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                          {pkg.priceNote}
                        </span>
                      </div>
                      <div>
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {pkg.price}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features - Flexible height with consistent spacing */}
                <div className="space-y-2 flex-1">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-white mt-0.5 mr-2 flex-shrink-0"
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
                      <span className="text-white/95 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-3">
                  <Link href={`/services/${pkg.slug}`}>
                    <button className="w-full py-3 px-4 rounded-xl font-semibold cursor-pointer transition-all duration-300 bg-white text-[#700000] hover:bg-[#700000] hover:text-white shadow-lg hover:shadow-xl text-sm md:text-base border-2 border-transparent hover:border-white">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-10 md:p-12 rounded-2xl border border-black max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Can't find the perfect package? We offer customized solutions
              tailored to your specific business requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="group bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg cursor-pointer">
                  Explore All Packages
                  <svg
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
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
              </Link>

              <Link href="/contact">
                <button className="group border border-[#700000] hover:bg-[#8b1f1f] hover:text-white bg-transparent text-[#700000] px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer overflow-hidden transform-gpu">
                  Request Custom Quote
                  <svg
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-3.582 9 8z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
