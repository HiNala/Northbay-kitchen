/**
 * Shopify API implementation
 * 
 * This file provides implementation for the Shopify Storefront API
 * and will be used when NEXT_PUBLIC_BACKEND=shopify
 */

import { Product, PortfolioProject, Cart, CartItem } from './types';

// Note: This is a simplified implementation that will need to be
// expanded with actual Shopify Storefront API calls when credentials
// are available.

// Shopify GraphQL endpoint and token will be set in environment variables
// These should NOT be exposed client-side
const SHOPIFY_STOREFRONT_API_ENDPOINT = process.env.SHOPIFY_STOREFRONT_API_ENDPOINT;
const SHOPIFY_STOREFRONT_API_TOKEN = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

// Simple fetch wrapper for Shopify Storefront API
const shopifyFetch = async <T>({
  query,
  variables
}: {
  query: string;
  variables?: any;
}): Promise<T> => {
  try {
    // Using server-side only environment variables for security
    if (!SHOPIFY_STOREFRONT_API_ENDPOINT || !SHOPIFY_STOREFRONT_API_TOKEN) {
      throw new Error('Shopify API credentials are not configured');
    }

    const result = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_API_TOKEN
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0].message);
    }

    return body.data as T;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw error;
  }
};

// Placeholder for Shopify product transform function
const transformShopifyProduct = (shopifyProduct: any): Product => {
  // This would map Shopify's product structure to our internal Product type
  return {
    id: shopifyProduct.id,
    title: shopifyProduct.title,
    handle: shopifyProduct.handle,
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    images: shopifyProduct.images.edges.map((edge: any) => edge.node.originalSrc),
    description: shopifyProduct.description,
    category: shopifyProduct.productType.toLowerCase()
  };
};

// API Implementation for Shopify

export const getProducts = async (): Promise<Product[]> => {
  // Placeholder - would implement actual Shopify GraphQL query
  // For example:
  /*
  const data = await shopifyFetch<any>({
    query: `
      query GetProducts {
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              productType
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
    `
  });
  
  return data.products.edges.map((edge: any) => transformShopifyProduct(edge.node));
  */
  
  // For now, return an empty array since we don't have Shopify creds yet
  console.warn('Using Shopify API without credentials - returning empty products array');
  return [];
};

export const getProduct = async (handle: string): Promise<Product | null> => {
  // Placeholder - would implement actual Shopify GraphQL query by handle
  console.warn('Using Shopify API without credentials - returning null product');
  return null;
};

// Portfolio projects would typically come from Shopify collections, pages, or metafields
export const getPortfolioProjects = async (): Promise<PortfolioProject[]> => {
  console.warn('Using Shopify API without credentials - returning empty projects array');
  return [];
};

export const getPortfolioProject = async (slug: string): Promise<PortfolioProject | null> => {
  console.warn('Using Shopify API without credentials - returning null project');
  return null;
};

// Cart functions using Shopify Storefront API

export const createCart = async (): Promise<Cart> => {
  // Placeholder - would implement actual Shopify cart creation
  // For example:
  /*
  const data = await shopifyFetch<any>({
    query: `
      mutation CreateCart {
        cartCreate {
          cart {
            id
            checkoutUrl
          }
        }
      }
    `
  });
  
  return {
    id: data.cartCreate.cart.id,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    checkoutUrl: data.cartCreate.cart.checkoutUrl
  };
  */
  
  console.warn('Using Shopify API without credentials - returning mock cart');
  return {
    id: `shopify_cart_placeholder_${Date.now()}`,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    checkoutUrl: '/checkout'
  };
};

export const getCart = async (): Promise<Cart | null> => {
  console.warn('Using Shopify API without credentials - returning null cart');
  return null;
};

export const addToCart = async (productId: string, quantity: number): Promise<Cart> => {
  console.warn('Using Shopify API without credentials - returning mock cart');
  return {
    id: `shopify_cart_placeholder_${Date.now()}`,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    checkoutUrl: '/checkout'
  };
};

export const updateCartItem = async (itemId: string, quantity: number): Promise<Cart | null> => {
  console.warn('Using Shopify API without credentials - returning null cart');
  return null;
};

export const removeFromCart = async (itemId: string): Promise<Cart | null> => {
  console.warn('Using Shopify API without credentials - returning null cart');
  return null;
};

export const getCheckoutUrl = async (): Promise<string> => {
  // In Shopify mode, this would return the Shopify Checkout URL
  console.warn('Using Shopify API without credentials - returning mock checkout URL');
  return '/checkout';
}; 