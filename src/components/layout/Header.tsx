'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const cartItemCount = cart?.totalQuantity || 0;

  return (
    <>
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-serif text-zinc-900">Northbay Kitchen & Bath</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/portfolio" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                href="/products" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/testimonials" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Testimonials
              </Link>
              <Link 
                href="/contact" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Cart and Mobile Menu Buttons */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                className="relative p-2 text-zinc-600 hover:text-zinc-900"
                onClick={() => setIsCartOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-zinc-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-md text-zinc-600 hover:text-zinc-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Link
                  href="/start-planning"
                  className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100">
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                href="/portfolio" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/products" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/testimonials" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/contact" 
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/start-planning"
                className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors inline-block mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Planning
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
} 