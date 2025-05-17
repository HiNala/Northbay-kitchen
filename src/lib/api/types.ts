/**
 * Common Types for the API Layer
 */

// Product type matching the schema in the PRD
export interface Product {
  id: string;
  title: string;
  handle: string;
  price: number;
  images: string[];
  description?: string;
  category?: string;
}

// Portfolio project for showcasing completed work
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'kitchen' | 'bath';
  images: string[];
  description: string;
  features?: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

// Cart related types
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  checkoutUrl?: string;
} 