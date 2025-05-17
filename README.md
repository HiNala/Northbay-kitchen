# Northbay Kitchen & Bath - Website

A mobile-first, headless-Shopify demo site showcasing NBKB's high-end kitchen & bath remodel expertise. This project mirrors the aesthetic of Studio McGee and can be connected to a live Shopify store via a simple environment flag change.

## Features

- React 18, Server Components
- Next.js 15 App Router
- Headless Shopify integration
- Responsive design with TailwindCSS
- Mobile-first approach
- Cart functionality
- Real testimonials from actual clients
- Dynamic portfolio showcase
- Animated page transitions

## Tech Stack

- **Framework**: Next.js 15
- **Rendering**: Server Components, SSR, ISR
- **Styling**: TailwindCSS
- **Data**: Switchboard data layer (`local.ts` vs `shopify.ts`)
- **Headless Commerce**: Shopify Storefront API (GraphQL)
- **Deployment**: Vercel / Netlify / Any hosting platform
- **Authentication**: None (public-facing site)

## Project Structure

- `src/app/*` - Next.js app router pages
- `src/components/*` - Reusable React components
- `src/lib/*` - Utility functions, API handlers, etc.
- `src/lib/api/*` - Data layer (local mock data and Shopify connectors)
- `public/*` - Static assets (images, fonts, etc.)

## Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Shopify Integration

The application uses a switchboard data layer to toggle between local mock data and the Shopify API:

```bash
# Use local mock data (default)
NEXT_PUBLIC_BACKEND=local

# Use live Shopify data
NEXT_PUBLIC_BACKEND=shopify
```

### Setting up Shopify Integration

To connect the site to a Shopify store, follow these steps:

1. **Create a Shopify store**
   - If you don't have one, sign up at [Shopify](https://www.shopify.com/)
   - Set up your products, collections, and store information

2. **Create a Custom App in Shopify**
   - Go to your Shopify admin panel
   - Navigate to Apps > Develop apps > Create an app
   - Name your app (e.g. "NBKB Headless")
   - Set the app URL to your website's URL
   - Go to "Configuration" and select the Storefront API
   - Configure the Storefront API scopes, make sure to include:
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_read_product_tags`
     - `unauthenticated_read_product_pickup_locations`
     - `unauthenticated_read_selling_plans`
     - `unauthenticated_write_checkouts`
     - `unauthenticated_read_checkouts`
     - `unauthenticated_write_customers`

3. **Get API credentials**
   - After creating the app, you'll receive an API key and API secret key
   - In the Storefront API section, create a new access token
   - Save the Storefront API access token securely

4. **Configure environment variables**
   - Create or update your `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_BACKEND=shopify
   SHOPIFY_STOREFRONT_API_ENDPOINT=https://your-store-name.myshopify.com/api/2023-10/graphql.json
   SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_api_token
   ```

5. **Restart your development server**
   - Run `npm run dev` to apply the new environment variables

6. **Test the integration**
   - Visit your site and verify that product data is being pulled from Shopify
   - Test the cart functionality to ensure it's working with Shopify

### Shopify Data Structure

The site expects the following data structure in Shopify:

1. **Products**: Standard Shopify products with:
   - Title, description, images
   - Variants (if applicable)
   - Price information
   - Product type (used for categorization)
   - Tags (used for filtering)

2. **Collections**: Used for organizing products by category
   - "Kitchen" collection for kitchen products
   - "Bath" collection for bathroom products

3. **Metafields**: For additional data like:
   - Portfolio projects (can be stored as metafields on products or collections)
   - Testimonials (can be stored as metafields or as products in a hidden collection)

## Deployment

This project can be deployed to any hosting platform that supports Next.js, such as Vercel, Netlify, or your own server:

1. Configure your build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

2. Set up environment variables on your hosting platform
   - Don't forget to add the Shopify API credentials

3. Deploy your site
   - Follow your hosting platform's instructions for deployment

## Credits

- Design inspiration: Studio McGee
- Development: Custom development for Northbay Kitchen & Bath
- Images: Northbay Kitchen & Bath Design Center
