# Next.js Frontend Architecture Project

A modern, scalable frontend architecture built with Next.js and Tailwind CSS, designed to support 5-8 pages with a component-based structure.

## 🏗️ Project Architecture

```
src/
├── components/
│   ├── layout/           # Layout components (Navbar, Footer, Layout)
│   │   ├── Navbar.js     # Responsive navigation bar
│   │   ├── Footer.js     # Footer with links and social media
│   │   └── Layout.js     # Main layout wrapper
│   └── ui/               # Reusable UI components (for future use)
├── pages/
│   ├── index.js          # Home page
│   ├── about/
│   │   └── index.js      # About page
│   ├── services/
│   │   └── index.js      # Services page
│   ├── contact/
│   │   └── index.js      # Contact page
│   ├── _app.js           # Next.js app wrapper
│   └── _document.js      # Next.js document wrapper
└── styles/
    └── globals.css       # Global styles and Tailwind imports
```

## 🚀 Features

### ✅ Implemented

- **Responsive Navigation**: Mobile-friendly navbar with hamburger menu
- **Fixed Layout Components**: Consistent navbar and footer across all pages
- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Component-Based Architecture**: Modular and reusable components
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### 📱 Pages Structure

1. **Home Page** (`/`) - Hero section, features, and call-to-action
2. **About Page** (`/about`) - Company story and values
3. **Services Page** (`/services`) - Service offerings grid
4. **Contact Page** (`/contact`) - Contact form and information

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (React 19.1.0)
- **Package Manager**: npm

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Component Structure

### Layout Components (`src/components/layout/`)

#### Navbar.js

- Responsive navigation with mobile hamburger menu
- Logo and navigation links
- Smooth transitions and hover effects
- Fixed positioning with z-index

#### Footer.js

- Company information and social media links
- Quick navigation links
- Contact information
- Responsive grid layout

#### Layout.js

- Wraps all pages with consistent navbar and footer
- Handles main content area with proper spacing
- Ensures footer stays at bottom

### Page Components (`src/pages/`)

Each page follows a consistent structure:

- Hero section with gradient backgrounds
- Content sections with proper spacing
- Call-to-action sections
- Responsive grid layouts

## 🎯 Key Features

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Flexible grid systems
- Touch-friendly navigation

### Modern UI/UX

- Gradient backgrounds
- Smooth transitions
- Hover effects
- Professional color scheme
- Clean typography

### Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

## 📁 Adding New Pages

To add a new page:

1. **Create page directory**:

   ```bash
   mkdir src/pages/your-page
   ```

2. **Create page file**:

   ```javascript
   // src/pages/your-page/index.js
   import Layout from "../../components/layout/Layout";

   export default function YourPage() {
     return <Layout>{/* Your page content */}</Layout>;
   }
   ```

3. **Add navigation link** in `Navbar.js`:
   ```javascript
   <Link href="/your-page" className="...">
     Your Page
   </Link>
   ```

## 🎨 Customization

### Colors

The project uses Tailwind's default color palette. You can customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
      },
    },
  },
};
```

### Typography

Fonts can be customized in the Tailwind config or by importing custom fonts in `_app.js`.

### Components

All components are modular and can be easily customized by modifying the respective files in `src/components/`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:

- Create an issue in the repository
- Contact: info@company.com

---

**Built with ❤️ using Next.js and Tailwind CSS**
