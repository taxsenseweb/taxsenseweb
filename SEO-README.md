# TaxSense Ltd - SEO Optimized Next.js Website

This is a comprehensive SEO-optimized website for TaxSense Ltd, a professional tax consultancy firm in Bangladesh.

## 🚀 SEO Features Implemented

### ✅ Technical SEO

- **Meta Tags**: Complete title, description, and Open Graph tags
- **Structured Data**: Organization, FAQ, and local business JSON-LD schemas
- **Sitemap**: Dynamic XML sitemap generation at `/sitemap.xml`
- **Robots.txt**: Proper crawling instructions at `/robots.txt`
- **Performance**: Optimized images with Next.js Image component
- **Security Headers**: XSS protection, content type options, frame options

### ✅ On-Page SEO

- **Semantic HTML**: Proper use of header, main, section, article tags
- **Heading Structure**: Single H1 per page with proper hierarchy
- **Alt Text**: Descriptive alt attributes for all images
- **Internal Linking**: Proper navigation structure
- **Mobile-First**: Responsive design optimized for all devices

### ✅ Local SEO

- **NAP Consistency**: Name, Address, Phone in footer with schema markup
- **Local Keywords**: Bangladesh, Dhaka specific keywords
- **Contact Information**: Proper address markup with itemProp
- **Local Business Schema**: Complete organization structured data

### ✅ Performance Optimization

- **Image Optimization**: WebP and AVIF formats with proper sizing
- **Font Loading**: Optimized Google Fonts with preconnect
- **Code Splitting**: Dynamic imports for better loading
- **Compression**: GZip compression enabled
- **Caching**: Proper cache headers

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and update:

```bash
cp .env.local.example .env.local
```

Update the following variables:

- `NEXT_PUBLIC_GA_ID`: Your Google Analytics 4 measurement ID
- `NEXT_PUBLIC_SITE_URL`: Your actual domain
- Company information variables

### 3. Google Analytics Setup

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your measurement ID (starts with G-XXXXXXXXXX)
3. Add it to your `.env.local` file

### 4. Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 5. Development

```bash
npm run dev
```

### 6. Production Build

```bash
npm run build
npm start
```

## 📊 SEO Checklist Completed

- [x] Unique title and description for home page
- [x] Single H1 tag with relevant keywords
- [x] Semantic HTML structure (header, main, footer, nav)
- [x] Optimized images with descriptive alt text
- [x] Canonical URLs set
- [x] Open Graph and Twitter Card tags
- [x] JSON-LD structured data (Organization, FAQ)
- [x] XML sitemap accessible
- [x] Robots.txt properly configured
- [x] Mobile-first responsive design
- [x] Internal linking structure
- [x] Local SEO with NAP consistency
- [x] Performance optimizations (Core Web Vitals)
- [x] Security headers
- [x] Google Analytics integration

## 🎯 Key SEO Features

### Homepage Optimization

- **Title**: "TaxSense Ltd - Expert Tax Consultancy & Accounting Services in Bangladesh"
- **Description**: Professional tax consultancy firm in Dhaka with 500+ clients
- **Keywords**: tax consultant Bangladesh, VAT services Dhaka, accounting firm
- **Schema**: Organization and FAQ structured data

### Technical Implementation

- **Next-SEO**: Complete SEO configuration
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Performance**: Optimized fonts, compression, caching
- **Accessibility**: ARIA labels, semantic markup, alt texts

### Local SEO

- **NAP**: Consistent business information
- **Schema Markup**: Local business structured data
- **Geographic Keywords**: Dhaka, Bangladesh specific terms
- **Contact Information**: Properly marked up address

## 📈 Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **SEO Score**: 95+
- **Accessibility**: 95+
- **Performance**: 90+

## 🔧 Customization

### Adding New Pages

1. Create the page component
2. Add SEO configuration with NextSeo
3. Update sitemap.xml.js
4. Add to navigation if needed

### Updating Company Information

1. Update environment variables
2. Modify structured data in index.js
3. Update footer contact information

### Analytics and Tracking

- Events are tracked for CTA clicks
- Page views are automatically tracked
- Form submissions can be tracked

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Fast loading on mobile networks

## 🚨 Important Notes

1. **Replace placeholder data**: Update GA ID, domain, contact info
2. **Add real images**: Replace hero images with actual company photos
3. **Content review**: Ensure all content is accurate and up-to-date
4. **Test on real devices**: Verify mobile experience
5. **Monitor Core Web Vitals**: Use PageSpeed Insights regularly

## 📞 Support

For technical support or customization requests, contact the development team.

---

**Built with Next.js 15, TailwindCSS 4, and modern SEO best practices.**
