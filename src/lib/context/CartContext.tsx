'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Cart, CartItem } from '@/lib/api/types';
import * as api from '@/lib/api';

interface CartContextType {
  cart: Cart | null;
  isLoading: boolean;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  updateCartItem: (itemId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  getCheckoutUrl: () => Promise<string>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize cart on component mount
  useEffect(() => {
    const initCart = async () => {
      try {
        setIsLoading(true);
        let currentCart = await api.getCart();
        
        if (!currentCart) {
          currentCart = await api.createCart();
        }
        
        setCart(currentCart);
      } catch (error) {
        console.error('Failed to initialize cart:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initCart();
  }, []);

  // Add item to cart
  const addToCart = async (productId: string, quantity: number) => {
    try {
      setIsLoading(true);
      const updatedCart = await api.addToCart(productId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update cart item quantity
  const updateCartItem = async (itemId: string, quantity: number) => {
    try {
      setIsLoading(true);
      const updatedCart = await api.updateCartItem(itemId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to update cart item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId: string) => {
    try {
      setIsLoading(true);
      const updatedCart = await api.removeFromCart(itemId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get checkout URL
  const getCheckoutUrl = async (): Promise<string> => {
    try {
      return await api.getCheckoutUrl();
    } catch (error) {
      console.error('Failed to get checkout URL:', error);
      return '/checkout/error';
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addToCart,
        updateCartItem,
        removeFromCart,
        getCheckoutUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
} 