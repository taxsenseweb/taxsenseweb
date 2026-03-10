import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Media Card Component
const MediaCard = ({ media, category }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image/Thumbnail Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={media.thumbnail}
          alt={media.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Play Button for Videos */}
        {media.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-8 h-8 text-black group-hover:text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {media.type}
          </span>
        </div>

        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="text-white text-sm font-medium flex items-center gap-2">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {media.date}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
          {media.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {media.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          {media.duration && (
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
              {media.duration}
            </span>
          )}
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
            {media.views}
          </span>
        </div>

        {/* Tags */}
        {media.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {media.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          <Link href={media.link}>
            <button className="w-full bg-[#700000] hover:bg-[#8b1f1f] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 inline-flex items-center justify-center cursor-pointer">
              {media.type === "video"
                ? "Watch Now"
                : media.type === "article"
                ? "Read Article"
                : "View Gallery"}
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

export default function Media() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  // Media categories
  const categories = [
    { id: "all", name: "All Media" },
    { id: "news", name: "News & Updates" },
    { id: "videos", name: "Videos" },
    { id: "events", name: "Events" },
    { id: "press", name: "Press Releases" },
  ];

  // Dummy media data
  const mediaItems = [
    {
      id: 1,
      category: "news",
      type: "article",
      title: "Taxsense Ltd Expands Services to Include Digital Tax Solutions",
      description:
        "We're excited to announce the launch of our new digital tax filing platform, making it easier than ever for businesses to manage their tax compliance online.",
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      date: "Nov 28, 2025",
      views: "3.2k views",
      tags: ["announcement", "digital", "innovation"],
      link: "/media/digital-tax-solutions",
    },
    {
      id: 2,
      category: "videos",
      type: "video",
      title: "Understanding VAT Registration: Complete Walkthrough",
      description:
        "Watch our comprehensive video guide on VAT registration in Bangladesh, covering all steps from documentation to final approval.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "Nov 25, 2025",
      duration: "12:45",
      views: "8.5k views",
      tags: ["tutorial", "VAT", "registration"],
      link: "/media/vat-registration-video",
    },
    {
      id: 3,
      category: "events",
      type: "gallery",
      title: "Business Tax Summit 2025 - Dhaka",
      description:
        "Highlights from our annual Business Tax Summit where industry leaders discussed the latest trends in taxation and business compliance.",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      date: "Nov 20, 2025",
      views: "2.1k views",
      tags: ["event", "summit", "networking"],
      link: "/media/tax-summit-2025",
    },
    {
      id: 4,
      category: "press",
      type: "article",
      title: "Taxsense Ltd Achieves ISO 9001:2015 Certification",
      description:
        "We are proud to announce that Taxsense Ltd has been awarded ISO 9001:2015 certification, reinforcing our commitment to quality service delivery.",
      thumbnail:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      date: "Nov 18, 2025",
      views: "4.7k views",
      tags: ["certification", "achievement", "quality"],
      link: "/media/iso-certification",
    },
    {
      id: 5,
      category: "videos",
      type: "video",
      title: "5 Common Tax Mistakes Small Businesses Make",
      description:
        "Learn about the most common tax filing mistakes that small businesses make and how to avoid them with expert advice from our tax consultants.",
      thumbnail:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop",
      date: "Nov 15, 2025",
      duration: "8:20",
      views: "12.3k views",
      tags: ["tips", "mistakes", "smallbusiness"],
      link: "/media/common-tax-mistakes",
    },
    {
      id: 6,
      category: "news",
      type: "article",
      title: "New Tax Regulations for 2026: What You Need to Know",
      description:
        "Stay ahead of upcoming tax regulation changes in Bangladesh. Our experts break down what the new regulations mean for your business.",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      date: "Nov 12, 2025",
      views: "5.9k views",
      tags: ["regulations", "2026", "update"],
      link: "/media/tax-regulations-2026",
    },
    {
      id: 7,
      category: "events",
      type: "gallery",
      title: "Client Appreciation Dinner 2025",
      description:
        "Photos from our annual client appreciation event where we celebrated partnerships and success stories with our valued clients.",
      thumbnail:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      date: "Nov 8, 2025",
      views: "1.8k views",
      tags: ["celebration", "clients", "appreciation"],
      link: "/media/client-dinner-2025",
    },
    {
      id: 8,
      category: "videos",
      type: "video",
      title: "How to Choose the Right Business Structure",
      description:
        "Confused about whether to register as a sole proprietorship, partnership, or company? Watch this video for expert guidance on choosing the right structure.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      date: "Nov 5, 2025",
      duration: "15:30",
      views: "9.7k views",
      tags: ["business", "structure", "guide"],
      link: "/media/business-structure-guide",
    },
    {
      id: 9,
      category: "press",
      type: "article",
      title: "Taxsense Ltd Partners with Leading Accounting Software Provider",
      description:
        "Strategic partnership announcement to integrate advanced accounting software solutions with our tax advisory services.",
      thumbnail:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      date: "Nov 1, 2025",
      views: "3.5k views",
      tags: ["partnership", "software", "integration"],
      link: "/media/software-partnership",
    },
    {
      id: 10,
      category: "news",
      type: "article",
      title: "Deadline Reminder: Q4 VAT Return Filing",
      description:
        "Important reminder about the upcoming deadline for Q4 VAT return filing and what documents you need to prepare.",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      date: "Oct 28, 2025",
      views: "6.2k views",
      tags: ["deadline", "VAT", "reminder"],
      link: "/media/vat-deadline-reminder",
    },
    {
      id: 11,
      category: "videos",
      type: "video",
      title: "Client Success Story: From Startup to Profitable Business",
      description:
        "Hear from one of our clients about their journey from startup to a profitable business and how Taxsense helped them navigate tax complexities.",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      date: "Oct 25, 2025",
      duration: "10:15",
      views: "7.4k views",
      tags: ["success", "testimonial", "startup"],
      link: "/media/client-success-story",
    },
    {
      id: 12,
      category: "events",
      type: "gallery",
      title: "Corporate Training Workshop: Advanced VAT Compliance",
      description:
        "Photos and highlights from our recent corporate training workshop on advanced VAT compliance strategies for finance professionals.",
      thumbnail:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      date: "Oct 20, 2025",
      views: "2.9k views",
      tags: ["training", "workshop", "VAT"],
      link: "/media/vat-training-workshop",
    },
  ];

  const filteredMedia =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((m) => m.category === activeCategory);

  return (
    <Layout>
      <NextSeo
        title="Media & News - Latest Updates, Videos & Events | Taxsense Ltd"
        description="Stay updated with the latest news, videos, events, and press releases from Taxsense Ltd. Expert insights on tax, business, and compliance in Bangladesh."
        canonical="https://taxsense.com.bd/media"
        openGraph={{
          url: "https://taxsense.com.bd/media",
          title: "Media & News - Latest Updates | Taxsense Ltd",
          description:
            "Latest news, videos, events, and press releases from Taxsense Ltd - your trusted tax advisory partner in Bangladesh.",
          images: [
            {
              url: "https://taxsense.com.bd/og-media.jpg",
              width: 1200,
              height: 630,
              alt: "Taxsense Ltd Media Center",
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
            Media Center
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            News, Videos & Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Stay informed with the latest updates, insights, and stories from
            Taxsense Ltd
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

      {/* Featured Media Section */}
      {activeCategory === "all" && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                Featured Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Latest Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Large Featured Card */}
              <div className="lg:col-span-2 group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <Image
                      src={mediaItems[0].thumbnail}
                      alt={mediaItems[0].title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                      {
                        categories.find((c) => c.id === mediaItems[0].category)
                          ?.name
                      }
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors duration-300">
                      {mediaItems[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {mediaItems[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {mediaItems[0].date}
                      </span>
                      <span>{mediaItems[0].views}</span>
                    </div>
                    <Link href={mediaItems[0].link}>
                      <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center w-fit cursor-pointer">
                        Read Full Story
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
          </div>
        </section>
      )}

      {/* Media Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
              {filteredMedia.length} Items Available
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {activeCategory === "all"
                ? "All Media"
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of news, videos, events, and press releases
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((media) => (
              <MediaCard
                key={media.id}
                media={media}
                category={categories.find((c) => c.id === media.category)?.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter and get the latest news, insights,
                and updates delivered to your inbox
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
                Join 5,000+ subscribers. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Have a Story or Event to Share?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Contact our media team for press
            inquiries, event collaborations, or partnership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl">
                Contact Media Team
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
      </section>
    </Layout>
  );
}
