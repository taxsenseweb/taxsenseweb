import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ClientsSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  // Real client logos from public/clients folder
  const clients = [
    {
      name: "Bank Asia Limited",
      logo: "/clients/Bank-Asia-Limited-Logo-Vector.svg-.png",
    },
    {
      name: "Uni Logo",
      logo: "/clients/cropped-Uni1logo_for_web.jpg",
    },
    {
      name: "Green Logo Company",
      logo: "/clients/logo_green-1.png",
    },
    {
      name: "Client 1",
      logo: "/clients/327439728_1662014604217252_3882132783104307807_n.jpg",
    },
    {
      name: "Client 2",
      logo: "/clients/346476980_3462942090647371_7842320966996879783_n.jpg",
    },
    {
      name: "Client 3",
      logo: "/clients/405467726_122094280034150701_7439153767348733036_n.jpg",
    },
    {
      name: "Standard Size Logo",
      logo: "/clients/250x60.png",
    },
    {
      name: "R Company",
      logo: "/clients/R.jpg",
    },
    {
      name: "AAA Corporation",
      logo: "/clients/aaa.jpeg",
    },
    {
      name: "Download Company",
      logo: "/clients/download.png",
    },
    {
      name: "Images Corp",
      logo: "/clients/images.jpeg",
    },
    {
      name: "WW Enterprise",
      logo: "/clients/ww.jpg",
    },
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  // Carousel control functions
  const slideLeft = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : clients.length - 1));
  };

  const slideRight = () => {
    setCurrentSlide((prev) => (prev < clients.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-20 bg-red-50">
      {/* Curved Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-gray-50 opacity-50"
          ></path>
        </svg>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <img
              src="/clients/hero.png"
              alt="Taxsense Clients Hero"
              className="max-w-full h-auto mx-auto rounded-xl shadow-lg"
              style={{ maxHeight: "450px" }}
            />
            {/* Optional overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.clients.title}
          </h2>
        </div>

        {/* Carousel with Arrow Controls */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-[#8b1f1f] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-[#8b1f1f] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
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

          {/* Sliding container */}
          <div
            className="flex gap-12 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 220}px)`, // 220px = 160px width + 60px gap
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-40 h-32 flex items-center justify-center  hover:shadow-md transition-shadow duration-300 p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full scale-125 object-contain transition-transform duration-300 hover:scale-105"
                  style={{
                    maxWidth: "140px",
                    maxHeight: "80px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.clients.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
