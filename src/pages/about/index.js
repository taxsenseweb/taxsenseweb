import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-red-300 to-[#A21B21] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Professional Tax Consultancy
              <br />
              <span className="text-[#700000]">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team of tax professionals committed to
              delivering exceptional tax consultancy and accounting services for
              businesses across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Your Trusted Tax Partner Since Inception
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to simplify tax compliance and financial
                  management for businesses, Taxsense Ltd has been at the
                  forefront of providing comprehensive tax consultancy services
                  in Bangladesh.
                </p>
                <p>
                  Our journey began with a simple mission: to help businesses
                  navigate complex tax regulations and optimize their financial
                  operations. Today, we continue to uphold this mission while
                  adapting to new tax reforms and regulatory changes.
                </p>
                <p>
                  We believe in building lasting relationships with our clients,
                  understanding their unique business challenges, and delivering
                  solutions that exceed expectations while ensuring full
                  compliance with tax authorities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services">
                  <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center cursor-pointer shadow-lg">
                    Our Services
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
                  <button className="border border-[#700000] hover:bg-[#700000] hover:text-white bg-white text-[#700000] px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer">
                    Contact Us
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#700000]/20 to-[#A61E2A]/20"></div>
              <Image
                src="/Hero/hero.png"
                alt="Taxsense Ltd Office - Professional Tax Consultancy Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#700000]">
              <div className="w-16 h-16 bg-[#700000]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#700000]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses with expert tax consultancy and accounting
                services that ensure compliance, optimize financial performance,
                and drive sustainable growth through ethical and professional
                practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#A61E2A]">
              <div className="w-16 h-16 bg-[#A61E2A]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#A61E2A]"
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
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be Bangladesh's most trusted and innovative tax consultancy
                firm, recognized for excellence in service delivery, client
                satisfaction, and contributing to the financial success of
                businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to
              serving our clients with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#700000]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#700000]"
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
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                We conduct business with honesty, transparency, and ethical
                practices in all our interactions with clients and authorities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#A61E2A]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#A61E2A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We constantly seek new and better ways to solve tax challenges
                and deliver value through modern accounting solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#700000]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#700000]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive for excellence in every service we provide, from tax
                filing to comprehensive financial audits and business advisory.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#A61E2A]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#A61E2A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Client Focus
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our clients are at the heart of everything we do. We listen,
                understand, and tailor our services to meet their specific
                needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#700000]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#700000]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Confidentiality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain the highest standards of confidentiality and data
                security to protect our clients' sensitive financial
                information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 bg-[#A61E2A]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#A61E2A]"
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
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Professional Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We invest in continuous learning and development to stay updated
                with latest tax laws and accounting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help your business achieve tax compliance
            and financial excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#700000] text-white hover:bg-[#8b1f1f] px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center cursor-pointer shadow-lg">
                Get In Touch
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
            <Link href="/services">
              <button className="bg-transparent border-2 border-[#700000] text-[#700000] hover:bg-[#700000] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer">
                View Our Services
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
