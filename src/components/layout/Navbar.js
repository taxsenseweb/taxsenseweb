import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Services data with slugs (titles will be localized from translations)
  // Matches the filtered services shown on homepage and /services page
  // Excludes: TIN & BIN, Financial Audit, RJSC services
  const servicesData = [
    { slug: "tax-advisory" },
    { slug: "vat-consultancy" },
    { slug: "company-registration" },
    { slug: "trade-license" },
    { slug: "trademark-registration" },
    { slug: "irc-erc" },
    { slug: "accounting-service" },
    { slug: "business-audit" },
    { slug: "other-services" },
  ];

  return (
    <nav
      className="bg-white shadow-xl fixed w-full top-0 z-50 "
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center"
              aria-label="Taxsense Ltd Home"
            >
              <img
                src="/taxsense_ltd1.png"
                alt="Taxsense Ltd - Professional Tax Consultancy Services"
                className="h-10 w-auto scale-125"
                width="120"
                height="40"
              />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              <li role="none">
                <Link
                  href="/"
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 ${
                    router.pathname === "/" ? "text-[#700000]" : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about"
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 ${
                    router.pathname === "/about"
                      ? "text-[#700000]"
                      : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li role="none" className="relative">
                <button
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 flex items-center ${
                    router.pathname.startsWith("/services")
                      ? "text-[#700000]"
                      : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.services}
                  <svg
                    className="ml-1 h-4 w-4"
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
                  </svg>
                </button>

                {/* Clean Services Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 ${
                    isServicesDropdownOpen
                      ? "opacity-100 visible transform translate-y-0"
                      : "opacity-0 invisible transform -translate-y-2"
                  }`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {servicesData.map((service, index) => {
                    // Map slug to exact index in t.services.items array
                    const slugToTranslationIndex = {
                      "tax-advisory": 0,
                      "vat-consultancy": 1,
                      "company-registration": 2,
                      "trade-license": 3,
                      "trademark-registration": 4,
                      "irc-erc": 6,
                      "accounting-service": 7,
                      "business-audit": 8,
                    };

                    let localizedTitle;
                    
                    if (service.slug === "other-services") {
                      localizedTitle =
                        language === "bn" ? "অন্যান্য সেবা" : "Other Services";
                    } else {
                      const translationIndex = slugToTranslationIndex[service.slug];
                      localizedTitle =
                        (t.services &&
                          t.services.items &&
                          t.services.items[translationIndex] &&
                          t.services.items[translationIndex].title) ||
                        // fallback mapping
                        {
                          "tax-advisory": "Tax Advisory",
                          "vat-consultancy": "VAT Consultancy",
                          "company-registration": "Company Registration",
                          "trade-license": "Trade License",
                          "trademark-registration": "Trademark Registration",
                          "irc-erc": "IRC & ERC Services",
                          "accounting-service":
                            "Accounting Service & Software Implementation",
                          "business-audit": "Business Audit",
                        }[service.slug] ||
                        service.slug;
                    }

                    return (
                      <Link
                        key={index}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#8b1f1f] hover:text-white focus:bg-[#8b1f1f] focus:text-white focus:outline-none transition-colors duration-200 rounded-md mx-2 my-1 font-medium cursor-pointer"
                      >
                        {localizedTitle}
                      </Link>
                    );
                  })}
                </div>
              </li>
              <li role="none">
                <Link
                  href="/resources"
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 ${
                    router.pathname === "/resources"
                      ? "text-[#700000]"
                      : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.resources}
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/media"
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 ${
                    router.pathname === "/media"
                      ? "text-[#700000]"
                      : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.media}
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/contact"
                  className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-md font-bold transition-all duration-200 ${
                    router.pathname === "/contact"
                      ? "text-[#700000]"
                      : "text-gray-600"
                  }`}
                  role="menuitem"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center cursor-pointer space-x-2 bg-primary text-red-600 px-3 py-2 rounded-md text-md font-bold hover:bg-primary-600 transition-colors"
              aria-label={
                language === "en" ? "Switch to Bengali" : "Switch to English"
              }
              title={
                language === "en" ? "Switch to Bengali" : "Switch to English"
              }
            >
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
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{language === "en" ? "বাং" : "EN"}</span>
            </button>
          </div>

          {/* Mobile menu button & Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-primary text-white px-2 py-1 rounded text-xs font-medium hover:bg-primary-600 transition-colors"
              title={
                language === "en" ? "Switch to Bengali" : "Switch to English"
              }
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{language === "en" ? "বাং" : "EN"}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <nav
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1" role="menu">
            <li role="none">
              <Link
                href="/"
                className={`navbar-link hover:bg-[#700000] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === "/" ? "text-[#700000]" : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.home}
              </Link>
            </li>
            <li role="none">
              <Link
                href="/about"
                className={`navbar-link hover:bg-[#700000] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === "/about"
                    ? "text-[#700000]"
                    : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.about}
              </Link>
            </li>
            <li role="none">
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className={`navbar-link hover:bg-[#700000] hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-200 w-full text-left flex items-center justify-between ${
                  router.pathname.startsWith("/services")
                    ? "text-[#700000]"
                    : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.services}
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
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
                </svg>
              </button>

              {/* Mobile Services Dropdown */}
              <div
                className={`${
                  isServicesDropdownOpen ? "block" : "hidden"
                } ml-4 mt-2 space-y-2`}
              >
                {servicesData.map((service, index) => {
                  // Map slug to exact index in t.services.items array
                  const slugToTranslationIndex = {
                    "tax-advisory": 0,
                    "vat-consultancy": 1,
                    "company-registration": 2,
                    "trade-license": 3,
                    "trademark-registration": 4,
                    "irc-erc": 6,
                    "accounting-service": 7,
                    "business-audit": 8,
                  };

                  let localizedTitle;
                  
                  if (service.slug === "other-services") {
                    localizedTitle =
                      language === "bn" ? "অন্যান্য সেবা" : "Other Services";
                  } else {
                    const translationIndex = slugToTranslationIndex[service.slug];
                    localizedTitle =
                      (t.services &&
                        t.services.items &&
                        t.services.items[translationIndex] &&
                        t.services.items[translationIndex].title) ||
                      // fallback mapping
                      {
                        "tax-advisory": "Tax Advisory",
                        "vat-consultancy": "VAT Consultancy",
                        "company-registration": "Company Registration",
                        "trade-license": "Trade License",
                        "trademark-registration": "Trademark Registration",
                        "irc-erc": "IRC & ERC Services",
                        "accounting-service":
                          "Accounting Service & Software Implementation",
                        "business-audit": "Business Audit",
                      }[service.slug] ||
                      service.slug;
                  }

                  return (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-3 py-2 text-gray-600 hover:bg-[#8b1f1f] hover:text-white focus:bg-[#8b1f1f] focus:text-white focus:outline-none transition-colors duration-200 rounded-md font-medium cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {localizedTitle}
                    </Link>
                  );
                })}
              </div>
            </li>
            <li role="none">
              <Link
                href="/resources"
                className={`navbar-link hover:bg-[#700000] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === "/resources"
                    ? "text-[#700000]"
                    : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.resources}
              </Link>
            </li>
            <li role="none">
              <Link
                href="/media"
                className={`navbar-link hover:bg-[#700000] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === "/media"
                    ? "text-[#700000]"
                    : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.media}
              </Link>
            </li>
            <li role="none">
              <Link
                href="/contact"
                className={`navbar-link hover:bg-[#700000] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === "/contact"
                    ? "text-[#700000]"
                    : "text-gray-600"
                }`}
                role="menuitem"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
