/**
 * API Switchboard
 * 
 * This file controls whether the application uses local mock data or
 * the Shopify Storefront API based on the NEXT_PUBLIC_BACKEND environment variable.
 */

import * as localApi from './local';
import * as shopifyApi from './shopify';

// Define the data source based on environment variable
const dataSource = process.env.NEXT_PUBLIC_BACKEND === 'shopify' 
  ? shopifyApi 
  : localApi;

// Export common interface functions
export const getProducts = dataSource.getProducts;
export const getProduct = dataSource.getProduct;
export const getPortfolioProjects = dataSource.getPortfolioProjects;
export const getPortfolioProject = dataSource.getPortfolioProject;
export const createCart = dataSource.createCart;
export const addToCart = dataSource.addToCart;
export const getCart = dataSource.getCart;
export const removeFromCart = dataSource.removeFromCart;
export const updateCartItem = dataSource.updateCartItem;
export const getCheckoutUrl = dataSource.getCheckoutUrl;

// Types
export type { Product } from './types';
export type { PortfolioProject } from './types';
export type { Cart, CartItem } from './types'; 