import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation | Northbay Kitchen & Bath',
  description: 'Thank you for your order with Northbay Kitchen & Bath.',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-medium mb-4">Order Confirmed!</h1>
        <p className="text-zinc-600 mb-8">
          Thank you for your order. We've received your order details and will begin processing it right away.
          A confirmation email will be sent to your email address shortly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/products" 
            className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-md hover:bg-zinc-50 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/" 
            className="px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 