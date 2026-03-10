import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function WhoWeAreSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 bg-gray-100">
      {/* Decorative Shapes */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Circle decoration */}
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/10 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-primary/10 rounded-full"></div>

        {/* Dots pattern */}
        <svg
          className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.07]"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 5) * 20 + 10}
              cy={Math.floor(i / 5) * 20 + 10}
              r="2"
              fill="currentColor"
              className="text-primary"
            />
          ))}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {t.whoWeAre.title}
              </h2>
            </div>

            <div className="space-y-4 text-lg md:text-xl text-black/80 leading-relaxed">
              <p>{t.whoWeAre.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/about">
                <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center cursor-pointer">
                  {t.whoWeAre.cta}
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
                <button className="border-2 border-[#700000] hover:bg-[#8b1f1f] hover:text-white bg-transparent text-[#700000] px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer overflow-hidden transform-gpu">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Features/Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whoWeAre.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ backgroundColor: "#A61E2A" }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stats - Redesigned for solid, professional look */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  Our Track Record
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {t.whoWeAre.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg border border-white/30">
                        {index === 0 && (
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className="w-6 h-6 text-white"
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
                        )}
                      </div>
                      <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-300 via-yellow-100 to-white bg-clip-text mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs font-medium text-transparent bg-gradient-to-r from-yellow-200 to-white bg-clip-text uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
