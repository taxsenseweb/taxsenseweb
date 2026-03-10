# TaxSense Ltd - Design System Guide

## Overview

This design guide extracts the visual language and UI patterns from the TaxSense Ltd homepage, navbar, and footer to ensure consistency across all pages and the mobile application.

---

## 1. Color Palette

### Primary Colors

- **Primary Red**: `#700000` - Main brand color, used for CTAs, highlights, and emphasis
- **Primary Hover**: `#8b1f1f` - Hover state for primary buttons and links
- **Secondary Red**: `#A61E2A` - Used for feature cards and accent elements
- **Dark Red**: `#A21B21` - Used in gradients and backgrounds

### Neutral Colors

- **White**: `#FFFFFF` - Background, text on dark surfaces
- **Black**: `#000000` - Text headings, footer overlay
- **Dark Gray**: `#171717` - Body text color
- **Light Gray**: `#F3F4F6` (gray-100) - Section backgrounds
- **Medium Gray**: Various opacity whites for overlays (`white/10`, `white/20`, `white/80`, `white/90`)

### Gradient Patterns

- **Hero Gradient**: `from-gray-100 via-red-300 to-[#A21B21]`
- **Stats Card Gradient**: `from-black via-gray-900 to-black`
- **Text Gradient**: `from-yellow-300 via-yellow-100 to-white` (for stats numbers)

---

## 2. Typography

### Font Family

- **Primary Font**: `Outfit` - Modern, clean, geometric sans-serif
- **Fallback Stack**: `ui-sans-serif, system-ui, sans-serif`
- **Font Weights**: 100, 200, 300, 400, 500, 600, 700, 800, 900

### Type Scale

```
Hero Title (Desktop):     text-6xl (60px) - font-bold
Hero Title (Tablet):      text-5xl (48px) - font-bold
Hero Title (Mobile):      text-3xl (30px) - font-bold
Section Headings:         text-4xl to text-5xl (36-48px) - font-bold
Subsection Headings:      text-xl to text-2xl (20-24px) - font-semibold
Body Text:                text-base to text-lg (16-18px) - font-normal
Small Text:               text-sm (14px) - font-medium
Footer Text:              text-sm (14px) - font-normal
```

### Text Colors

- **Headings**: `text-black` on light backgrounds, `text-white` on dark backgrounds
- **Body Text**: `text-gray-700` or `text-black` on light backgrounds
- **Links**: `text-gray-600` default, `text-white` on hover (with background change)
- **Footer Text**: `text-white/80` to `text-white/90` with full white on hover

---

## 3. Spacing & Layout

### Container Widths

- **Max Width**: `max-w-7xl` (1280px) - Standard for all sections
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8`

### Section Spacing

- **Vertical Padding**: `py-16` to `py-24` for sections
- **Grid Gaps**: `gap-6` to `gap-12` depending on content density
- **Element Spacing**: `space-y-3` to `space-y-8` for vertical stacks

### Responsive Grid Patterns

```css
/* Two Column Layout */
grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16

/* Three Column */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8

/* Four Column (Footer) */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12
```

---

## 4. Button Styles

### Primary Button

```css
Background: #700000
Text: White
Padding: px-6 py-2.5 sm:py-3 (or px-8 py-3 for larger)
Border Radius: rounded-lg (8px) or rounded-xl (12px)
Font Weight: font-semibold or font-bold
Hover: bg-[#8b1f1f] + transform hover:scale-105
Transition: transition-all duration-300
Shadow: shadow-lg (optional)
```

### Secondary Button (Outline)

```css
Background: transparent (or bg-white)
Text: text-[#700000]
Border: border border-[#700000]
Padding: px-6 py-2.5 sm:py-3
Border Radius: rounded-lg or rounded-xl
Font Weight: font-semibold
Hover: bg-[#8b1f1f] + text-white
Transition: transition-all duration-300
```

### Button with Icon

- Icon positioned with `ml-2` (8px margin-left)
- Icon size: `h-4 w-4` or `h-5 w-5`
- Icon animation: `group-hover:translate-x-1 transition-transform`

---

## 5. Card Components

### Service Cards

```css
Background: white
Padding: p-6 to p-8
Border Radius: rounded-xl (12px)
Shadow: shadow-lg
Hover: hover:shadow-xl transform hover:scale-105
Transition: transition-all duration-300
Border: Optional 1px border-gray-200
```

### Feature Cards (Red Accent)

```css
Background: #A61E2A
Padding: p-6
Border Radius: rounded-xl
Icon Container: w-12 h-12 bg-white/20 rounded-lg
Text: text-white
Hover: hover:shadow-md transition-shadow duration-300
```

### Stats Cards (Dark Gradient)

```css
Background: gradient from-black via-gray-900 to-black
Border: border border-gray-700
Header: bg-primary with white text
Icon: w-12 h-12 bg-white/20 rounded-full
Number: text-2xl with gradient text from-yellow-300 to-white
Label: text-xs uppercase tracking-widest
```

---

## 6. Navigation (Navbar)

### Structure

- **Background**: `bg-white` with `shadow-lg`
- **Position**: `fixed w-full top-0 z-50`
- **Height**: `h-16` (64px)

### Nav Links

```css
Default: text-gray-600
Padding: px-3 py-2
Border Radius: rounded-md
Font: text-md font-bold
Hover State:
  - Background: bg-[#700000]
  - Text: text-white
Transition: transition-all duration-200
```

### Dropdown Menu

```css
Background: bg-white
Border: border border-gray-200 rounded-lg
Shadow: shadow-lg
Width: w-80
Padding: py-2
Dropdown Items:
  - Padding: px-4 py-3
  - Hover: bg-[#8b1f1f] text-white
  - Border Radius: rounded-md mx-2 my-1
```

### Mobile Menu

- Opens below navbar
- Background: `bg-white shadow-lg`
- Padding: `px-2 pt-2 pb-3`
- Same hover states as desktop

---

## 7. Footer

### Structure

- **Background**: `bg-[#700000]` (primary red)
- **Text Color**: `text-white`
- **Sections**: 4-column grid on desktop (2 columns for "About", 1 each for Services/Resources)

### Footer Elements

```css
Section Headings: text-lg font-semibold text-white mb-6
Link Items: text-white/80 hover:text-white
Bullet Icons: w-1.5 h-1.5 bg-white/60 rounded-full
Social Icons: w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full
Bottom Bar: bg-black/20 border-t border-white/10
Copyright Text: text-white/80 text-sm
```

### Contact Info Icons

- Container: `w-10 h-10 bg-white/10 rounded-full`
- Icon: `w-5 h-5 text-white`
- Hover: Background changes to `bg-white/20`

---

## 8. Animations & Transitions

### Fade In Up (Hero Section)

```css
@keyframes fadeInUp {
  from: opacity 0, translateY(30px)
  to: opacity 1, translateY(0)
}
Duration: 0.8s ease-out
Stagger: 0.2s and 0.4s delays
```

### Hover Transforms

- **Cards**: `hover:scale-105` with `transition-all duration-300`
- **Buttons**: `hover:scale-105` or `translateY(-1px)`
- **Icons**: `group-hover:translate-x-1` or `group-hover:scale-110`

### Slide Animation (Client Logos)

```css
@keyframes slide {
  0%: translateX(0)
  100%: translateX(-50%)
}
Duration: 30s linear infinite
Pause on hover: animation-play-state: paused
```

---

## 9. Icon System

### Icon Sizes

- **Small**: `w-4 h-4` or `w-5 h-5` (navbar, buttons)
- **Medium**: `w-6 h-6` (features, stats)
- **Large**: `w-10 h-10` or `w-12 h-12` (icon containers)

### Icon Containers

- **Rounded Square**: `rounded-lg` with `bg-white/20` or `bg-primary/10`
- **Rounded Circle**: `rounded-full` with `bg-white/10` or `bg-white/20`
- **Padding/Flex**: `flex items-center justify-center`

### Icon Colors

- **Light backgrounds**: Match brand color `#700000` or `text-gray-600`
- **Dark backgrounds**: `text-white`
- **Hover**: Typically `text-white` when background changes

---

## 10. Responsive Breakpoints

### Tailwind Breakpoints Used

```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Desktops
xl:  1280px - Large desktops
```

### Mobile-First Patterns

- Start with mobile layout (`grid-cols-1`, smaller text, vertical stacks)
- Add tablet breakpoint (`md:`) for 2-column grids
- Add desktop breakpoint (`lg:`) for 3-4 column grids and horizontal layouts
- Extra large (`xl:`) for enhanced spacing/sizing

---

## 11. Imagery & Media

### Image Handling

- Use Next.js `<Image>` component for optimization
- Add `priority` prop for above-the-fold images
- Alt text should be descriptive for accessibility

### Hero Images

- Container: `rounded-full overflow-hidden`
- Background: `bg-[#700000]` behind images
- Transform: `rotate-3` or `-rotate-0` for visual interest
- Hover: `hover:rotate-0 transition-all duration-500`

### Image Sizes (Hero Section)

- Desktop: `w-72 xl:w-80` with `h-[320px] xl:h-[380px]`
- Mobile: `w-full max-w-[280px]` with auto height

---

## 12. Shadow System

### Shadow Hierarchy

```css
Default Card: shadow-lg
Hover Card: shadow-xl
Button: shadow-lg (optional)
Dropdown: shadow-lg
Navbar: shadow-lg
Footer: No shadow (dark background)
Icon Containers: shadow-lg on special elements (stats)
```

---

## 13. Border Radius Scale

### Consistency

- **Small Elements**: `rounded-md` (6px) - Nav links, small buttons
- **Medium Elements**: `rounded-lg` (8px) - Buttons, dropdowns, cards
- **Large Elements**: `rounded-xl` (12px) - Major cards, feature sections
- **Circular**: `rounded-full` - Icons, badges, social buttons

---

## 14. Accessibility Considerations

### ARIA & Semantic HTML

- Use `role="banner"`, `role="navigation"`, `role="contentinfo"` appropriately
- Add `aria-label` to icon-only buttons
- Include `sr-only` classes for screen-reader-only text
- Use semantic `<address>` in footer

### Focus States

- Outline: `focus:outline-2 focus:outline-offset-2`
- Ring: `focus:ring-2 focus:ring-inset`
- Background: `focus:bg-[#8b1f1f]` for interactive elements

### Color Contrast

- Ensure text meets WCAA AA standards (4.5:1 for body, 3:1 for large text)
- White text on `#700000` provides good contrast
- Avoid low-opacity text on low-contrast backgrounds

---

## 15. Best Practices for Consistency

### When Creating New Pages

1. **Container**: Always use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
2. **Sections**: Use `py-16` to `py-24` for vertical rhythm
3. **Headings**: Start with section badge (`bg-primary/10 text-black rounded-full`), followed by large heading
4. **Buttons**: Primary action = filled red button, secondary = outline button
5. **Cards**: White background with `rounded-xl shadow-lg`, hover adds scale and shadow

### When Building Mobile App

1. Use same color palette (`#700000`, `#8b1f1f`, `#A61E2A`)
2. Maintain Outfit font family across all text
3. Use rounded corners consistently (8px for buttons, 12px for cards)
4. Keep icon sizes proportional (24px, 32px, 48px)
5. Apply same shadow and spacing principles
6. Ensure touch targets are minimum 44x44px
7. Maintain same animation timing (300ms for most transitions)

---

## 16. Component Reusability

### Repeating Patterns to Extract

- **Section Header**: Badge + Large Heading + Description
- **CTA Button Group**: Primary + Secondary button side-by-side
- **Icon Card**: Icon container + Title + Description
- **Social Media Bar**: Fixed icon size with hover scale
- **Contact Info Block**: Icon + Label + Value

Create reusable components for these patterns to maintain consistency.

---

## Summary

The TaxSense design system emphasizes **professionalism, trust, and clarity** through:

- A bold red brand color (`#700000`) paired with clean neutrals
- Modern Outfit typography with clear hierarchy
- Generous spacing and clean layouts
- Smooth, purposeful animations
- Consistent card and button patterns
- Strong accessibility and responsive design

Use this guide as the foundation for all new pages and the mobile application to ensure a cohesive brand experience.
