'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { getCheckoutUrl, cart } = useCart();
  const [loading, setLoading] = useState(true);

  // Redirect to the appropriate checkout
  useEffect(() => {
    const redirectToCheckout = async () => {
      try {
        setLoading(true);
        
        // Check if there are items in the cart
        if (!cart || cart.items.length === 0) {
          router.push('/products');
          return;
        }
        
        // Get the checkout URL (either Shopify URL or local simulator)
        const checkoutUrl = await getCheckoutUrl();
        router.push(checkoutUrl);
      } catch (error) {
        console.error('Error redirecting to checkout:', error);
        router.push('/checkout/simulator');
      } finally {
        setLoading(false);
      }
    };

    redirectToCheckout();
  }, [cart, getCheckoutUrl, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 border-4 border-zinc-300 rounded-full border-t-zinc-800 mx-auto mb-4"></div>
        <p className="text-lg">Preparing your checkout...</p>
      </div>
    </div>
  );
} 