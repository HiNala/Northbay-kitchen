'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, isLoading, updateCartItem, removeFromCart, getCheckoutUrl } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartItem(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  const handleCheckout = async () => {
    try {
      const checkoutUrl = await getCheckoutUrl();
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error getting checkout URL:', error);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          <h2 className="text-xl font-medium">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-zinc-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="h-[calc(100%-10rem)] overflow-y-auto p-4">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <svg className="animate-spin h-8 w-8 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : !cart || cart.items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-zinc-300 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-zinc-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-200">
              {cart.items.map((item) => (
                <li key={item.id} className="py-4 flex">
                  {/* Product Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
                    {item.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 96px) 96px, 96px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-zinc-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-zinc-900">
                      <h3>
                        <Link href={`/products/${item.productId}`} onClick={onClose}>{item.title}</Link>
                      </h3>
                      <p className="ml-4">${item.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-zinc-200 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-zinc-600 hover:bg-zinc-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-zinc-800 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-zinc-600 hover:bg-zinc-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-zinc-500 hover:text-zinc-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        {cart && cart.items.length > 0 && (
          <div className="border-t border-zinc-200 p-4">
            <div className="flex justify-between text-base font-medium text-zinc-900 mb-4">
              <p>Subtotal</p>
              <p>${cart.totalPrice.toFixed(2)}</p>
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors"
            >
              {isLoading ? 'Loading...' : 'Checkout'}
            </button>
            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="text-sm text-zinc-600 hover:text-zinc-800"
              >
                or Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 