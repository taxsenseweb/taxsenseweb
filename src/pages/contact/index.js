import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-spam honeypot field
  });
  const [submissionTime] = useState(Date.now()); // Track when form was loaded
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        padding: "16px",
      },
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submissionTime,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Dismiss loading toast and show success
        toast.success(
          data.message || "Thank you! We'll get back to you within 24 hours.",
          {
            id: loadingToast,
            duration: 5000,
            style: {
              borderRadius: "10px",
              background: "#10B981",
              color: "#fff",
              padding: "16px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10B981",
            },
          }
        );

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        // Dismiss loading toast and show error
        toast.error(data.error || "Something went wrong. Please try again.", {
          id: loadingToast,
          duration: 5000,
          style: {
            borderRadius: "10px",
            background: "#EF4444",
            color: "#fff",
            padding: "16px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#EF4444",
          },
        });
      }
    } catch (error) {
      // Dismiss loading toast and show error
      toast.error(
        "Failed to send message. Please try again or contact us directly.",
        {
          id: loadingToast,
          duration: 5000,
          style: {
            borderRadius: "10px",
            background: "#EF4444",
            color: "#fff",
            padding: "16px",
          },
        }
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Toast Notifications Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <NextSeo
        title="Contact Us - Get in Touch with Taxsense Ltd"
        description="Contact Taxsense Ltd for expert tax advisory, VAT consultancy, and business services in Bangladesh. Reach out to our team for professional assistance."
        canonical="https://taxsense.com.bd/contact"
        openGraph={{
          url: "https://taxsense.com.bd/contact",
          title: "Contact Us - Taxsense Ltd",
          description:
            "Get in touch with our expert team for tax advisory and business services in Bangladesh.",
          images: [
            {
              url: "https://taxsense.com.bd/og-contact.jpg",
              width: 1200,
              height: 630,
              alt: "Contact Taxsense Ltd",
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
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Ready to take your business to the next level? Let's discuss how we
            can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="mb-8">
                <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Send Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <div style={{ position: "absolute", left: "-5000px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="new-password"
                    placeholder=""
                    readOnly
                    onFocus={(e) => e.target.blur()}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all text-black"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all text-black"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all text-black"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all text-black"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all text-black"
                  >
                    <option value="">Select a subject</option>
                    <option value="tax-advisory">Tax Advisory</option>
                    <option value="vat-consultancy">VAT Consultancy</option>
                    <option value="company-registration">
                      Company Registration
                    </option>
                    <option value="trade-license">Trade License</option>
                    <option value="trademark-registration">
                      Trademark Registration
                    </option>
                    <option value="irc-erc">IRC & ERC Services</option>
                    <option value="accounting-service">
                      Accounting Service & Software
                    </option>
                    <option value="business-audit">Business Audit</option>
                    <option value="other-services">Other Services</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700000] focus:border-transparent transition-all resize-none text-black"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full cursor-pointer py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center group ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#700000] hover:bg-[#8b1f1f] text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Contact Information
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  We're Here to Help
                </h2>
                <p className="text-gray-600">
                  Reach out to us through any of the following channels. Our
                  team is ready to assist you
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#700000]/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#700000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#700000] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#700000] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Office Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.footer.contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#700000]/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#700000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#700000] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#700000] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Phone Number
                      </h3>
                      <a
                        href={`tel:${t.footer.contact.phone}`}
                        className="text-gray-600 hover:text-[#700000] transition-colors"
                      >
                        {t.footer.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#700000]/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#700000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#700000] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#700000] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Email Address
                      </h3>
                      <a
                        href={`mailto:${t.footer.contact.email}`}
                        className="text-gray-600 hover:text-[#700000] transition-colors"
                      >
                        {t.footer.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#700000]/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#700000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#700000] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#700000] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Website
                      </h3>
                      <a
                        href="https://www.taxsense.com.bd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#700000] transition-colors"
                      >
                        {t.footer.contact.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#700000]/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#700000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#700000] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#700000] group-hover:text-white transition-colors duration-300"
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
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Saturday - Thursday: 10:00 AM - 6:00 PM</p>
                        <p>Friday: Closed</p>
                        <p className="text-sm text-gray-500 mt-2">
                          (Bangladesh Time - GMT+6)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/taxsensebd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#700000] hover:bg-[#8b1f1f] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/taxsensebd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#700000] hover:bg-[#8b1f1f] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:taxsenselimited@gmail.com"
                    className="w-12 h-12 bg-[#700000] hover:bg-[#8b1f1f] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.taxsense.com.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#700000] hover:bg-[#8b1f1f] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label="Website"
                  >
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Dhaka, we're easily accessible and ready
              to welcome you
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564665928584!2d90.42407607601263!3d23.795229587154846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74875f7660d%3A0x730b5980a39c32f6!2sLevel-8%2C%20House-5A%2C%20Road-2E%2C%20R%2FA%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1733059200000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taxsense Ltd Office Location"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir//Level-8,+House-5A,+Road-2E,+R%2FA,+Dhaka/@23.7600768,90.43968,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c74875f7660d:0x730b5980a39c32f6!2m2!1d90.4262567!2d23.7952297?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#700000] hover:bg-[#8b1f1f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Directions
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
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
