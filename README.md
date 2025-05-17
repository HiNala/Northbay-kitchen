# Northbay Kitchen & Bath Design Center (NBKB)

A mobile-first, headless-Shopify demo site showcasing NBKB's high-end kitchen & bath remodel expertise. This project mirrors the aesthetic of Studio McGee and can be connected to a live Shopify store via a simple environment flag change.

## Features

- Mobile-first, responsive design (320px to 1920px)
- Headless Shopify integration
- High-performance React components
- Accessible UI (WCAG 2.2 AA compliant)
- Modern editorial style with brass-accent palette
- Instagram gallery integration
- Animated testimonials section
- Portfolio gallery with image lightbox
- Complete checkout simulation

## Tech Stack

- **Frontend**: Next.js 15 (React 19 App Router), TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Motion**: Framer Motion
- **Data**: Switchboard data layer (`local.ts` vs `shopify.ts`)
- **Headless Commerce**: Shopify Storefront API (GraphQL)
- **Content**: Contentlayer (MDX)
- **Hosting**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Environment Configuration

The application uses a switchboard data layer to toggle between local mock data and the Shopify API:

```
# Use local mock data
NEXT_PUBLIC_BACKEND=local

# Use live Shopify data
NEXT_PUBLIC_BACKEND=shopify
```

## Project Structure

- `/src/app/*` - Next.js App Router pages
- `/src/components` - Reusable UI components
  - `/src/components/ui` - Basic UI components
  - `/src/components/layout` - Layout components like headers, footers
- `/src/lib/api` - Data fetching layer
- `/src/lib/context` - Context providers (Cart, Auth)
- `/src/content` - MDX content
- `/public/mock` - Mock images for development
- `/scripts` - Utility scripts for development

## New Features

### 1. Instagram Gallery
- Instagram-like gallery on homepage and dedicated page
- Responsive grid layout optimized for all devices

### 2. Portfolio Lightbox
- Interactive image gallery for portfolio projects
- Lightbox with keyboard navigation and touch gestures
- Smooth animations with Framer Motion

### 3. Enhanced Testimonials
- Animated testimonial slider 
- Client testimonials from actual NBKB customers
- Studio McGee inspired design elements

### 4. Improved Contact Page
- Updated contact form with proper validation
- Google Maps integration
- Clear contact information display

## License

[MIT](LICENSE)
