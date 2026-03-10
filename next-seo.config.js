const defaultSEO = {
  title: "Taxsense Ltd - Professional Tax Consultancy Services in Bangladesh",
  description:
    "Leading tax consultancy firm in Bangladesh providing comprehensive tax services, VAT consultation, accounting solutions, and business advisory services. Expert tax consultants in Dhaka.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taxsense.com.bd",
    siteName: "Taxsense Ltd",
    title: "Taxsense Ltd - Professional Tax Consultancy Services in Bangladesh",
    description:
      "Leading tax consultancy firm in Bangladesh providing comprehensive tax services, VAT consultation, accounting solutions, and business advisory services. Expert tax consultants in Dhaka.",
    images: [
      {
        url: "/public/taxsense_ltd1.png",
        width: 1200,
        height: 630,
        alt: "Taxsense Ltd - Professional Tax Consultancy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@taxsensebd",
    site: "@taxsensebd",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      name: "googlebot",
      content: "index,follow",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge",
    },
    {
      name: "keywords",
      content:
        "tax consultant Bangladesh, VAT services Dhaka, accounting firm Bangladesh, tax advisory, business consultation, income tax filing, corporate tax, tax planning",
    },
    {
      name: "author",
      content: "Taxsense Ltd",
    },
    {
      name: "geo.region",
      content: "BD-13",
    },
    {
      name: "geo.placename",
      content: "Dhaka",
    },
    {
      name: "geo.position",
      content: "23.8103;90.4125",
    },
    {
      name: "ICBM",
      content: "23.8103, 90.4125",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon_io/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon_io/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicon_io/android-chrome-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/favicon_io/site.webmanifest",
    },
  ],
};

export default defaultSEO;
