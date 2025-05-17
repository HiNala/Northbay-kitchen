# Northbay Kitchen & Bath Design Center (NBKB)

A mobile-first, headless-Shopify demo site showcasing NBKB's high-end kitchen & bath remodel expertise. This project mirrors the aesthetic of Studio McGee and can be connected to a live Shopify store via a simple environment flag change.

## Features

- Mobile-first, responsive design
- Headless Shopify integration
- High-performance React components
- Accessible UI (WCAG 2.2 AA compliant)
- Modern editorial style with brass-accent palette

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
- `/src/lib/api` - Data fetching layer
- `/src/content` - MDX content
- `/public/mock` - Mock images for development

## License

[MIT](LICENSE)
