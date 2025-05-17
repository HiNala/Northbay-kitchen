/**
 * Local Mock API implementation
 * 
 * This file provides mock data for local development before Shopify
 * credentials are available.
 */

import { Product, PortfolioProject, Cart, CartItem } from './types';

// Mock Products Data
const mockProducts: Product[] = [
  {
    id: 'prod_1',
    title: 'Modern Brass Kitchen Faucet',
    handle: 'modern-brass-kitchen-faucet',
    price: 249.99,
    images: ['/mock/kitchens/kitchen-1.jpg'],
    description: 'Elegant brass pull-down faucet with spot-resistant finish.',
    category: 'kitchen'
  },
  {
    id: 'prod_2',
    title: 'Marble Waterfall Island Countertop',
    handle: 'marble-waterfall-island-countertop',
    price: 3499.99,
    images: ['/mock/kitchens/kitchen-2.jpg'],
    description: 'Luxurious Carrara marble waterfall edge countertop for kitchen islands.',
    category: 'kitchen'
  },
  {
    id: 'prod_3',
    title: 'Matte Black Bathroom Fixtures Set',
    handle: 'matte-black-bathroom-fixtures-set',
    price: 599.99,
    images: ['/mock/baths/bath-1.jpg'],
    description: 'Complete set including faucet, shower head, and accessories in trendy matte black.',
    category: 'bath'
  },
  {
    id: 'prod_4',
    title: 'Frameless Glass Shower Enclosure',
    handle: 'frameless-glass-shower-enclosure',
    price: 1299.99,
    images: ['/mock/baths/bath-2.jpg'],
    description: 'Minimalist frameless glass shower enclosure with brushed nickel hardware.',
    category: 'bath'
  },
  {
    id: 'prod_5',
    title: 'Brass Cabinet Hardware Set',
    handle: 'brass-cabinet-hardware-set',
    price: 129.99,
    images: ['/mock/kitchens/kitchen-3.jpg'],
    description: 'Set of 25 brass drawer pulls and knobs for cabinet upgrade.',
    category: 'kitchen'
  },
];

// Mock Portfolio Projects
const mockProjects: PortfolioProject[] = [
  {
    id: 'proj_1',
    title: 'Santa Rosa Modern Farmhouse Kitchen',
    slug: 'santa-rosa-modern-farmhouse-kitchen',
    date: '2024-12-10',
    category: 'kitchen',
    images: [
      '/mock/kitchens/kitchen-1.jpg',
      '/mock/kitchens/kitchen-2.jpg',
      '/mock/kitchens/kitchen-3.jpg'
    ],
    description: 'Complete remodel of a 1930s farmhouse kitchen featuring custom cabinetry, quartz countertops, and vintage-inspired fixtures with modern functionality.',
    features: [
      'Custom shaker cabinetry in sage green',
      'Quartz countertops with waterfall edge',
      'Farmhouse sink with brass fixtures',
      'White oak floating shelves',
      'Custom range hood'
    ],
    testimonial: {
      quote: 'NBKB transformed our outdated kitchen into a stunning space that honors the home\'s history while giving us all the modern amenities we wanted.',
      author: 'The Peterson Family'
    }
  },
  {
    id: 'proj_2',
    title: 'Healdsburg Spa Bathroom Retreat',
    slug: 'healdsburg-spa-bathroom-retreat',
    date: '2024-11-15',
    category: 'bath',
    images: [
      '/mock/baths/bath-1.jpg',
      '/mock/baths/bath-2.jpg',
      '/mock/baths/bath-3.jpg'
    ],
    description: 'Luxurious primary bathroom renovation inspired by high-end spa retreats. Features include a freestanding soaking tub, zero-entry shower, and custom vanity with integrated lighting.',
    features: [
      'Freestanding oval soaking tub',
      'Zero-entry curbless shower',
      'Heated marble tile flooring',
      'Custom floating double vanity',
      'Programmable shower system'
    ],
    testimonial: {
      quote: 'Our bathroom feels like a luxury spa retreat. The attention to detail and craftsmanship exceeded our expectations.',
      author: 'Mark & Jennifer W.'
    }
  },
];

// Local storage cart implementation
const CART_STORAGE_KEY = 'nbkb_cart';

// API Implementation
export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve(mockProducts);
};

export const getProduct = async (handle: string): Promise<Product | null> => {
  const product = mockProducts.find(p => p.handle === handle);
  return Promise.resolve(product || null);
};

export const getPortfolioProjects = async (): Promise<PortfolioProject[]> => {
  return Promise.resolve(mockProjects);
};

export const getPortfolioProject = async (slug: string): Promise<PortfolioProject | null> => {
  const project = mockProjects.find(p => p.slug === slug);
  return Promise.resolve(project || null);
};

// Cart functions with local storage

export const createCart = async (): Promise<Cart> => {
  const cart: Cart = {
    id: `cart_${Date.now()}`,
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  };
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const getCart = async (): Promise<Cart | null> => {
  if (typeof window === 'undefined') return null;
  
  const cartJson = localStorage.getItem(CART_STORAGE_KEY);
  if (!cartJson) return null;
  
  try {
    const cart = JSON.parse(cartJson) as Cart;
    return Promise.resolve(cart);
  } catch (e) {
    return null;
  }
};

export const addToCart = async (productId: string, quantity: number): Promise<Cart> => {
  let cart = await getCart();
  if (!cart) {
    cart = await createCart();
  }
  
  const product = mockProducts.find(p => p.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  
  const existingItem = cart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      id: `item_${Date.now()}`,
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.images[0]
    });
  }
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const updateCartItem = async (itemId: string, quantity: number): Promise<Cart | null> => {
  const cart = await getCart();
  if (!cart) return null;
  
  const item = cart.items.find(i => i.id === itemId);
  if (!item) return cart;
  
  if (quantity <= 0) {
    return removeFromCart(itemId);
  }
  
  item.quantity = quantity;
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const removeFromCart = async (itemId: string): Promise<Cart | null> => {
  const cart = await getCart();
  if (!cart) return null;
  
  const itemIndex = cart.items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return cart;
  
  cart.items.splice(itemIndex, 1);
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const getCheckoutUrl = async (): Promise<string> => {
  // In local mode, just return a simulated checkout URL
  return Promise.resolve('/checkout/simulator');
}; 