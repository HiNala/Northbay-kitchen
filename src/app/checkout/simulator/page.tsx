'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/context/CartContext';

// Define checkout steps
enum CheckoutStep {
  SHIPPING = 'shipping',
  PAYMENT = 'payment',
  REVIEW = 'review',
  CONFIRMATION = 'confirmation'
}

export default function CheckoutSimulator() {
  const router = useRouter();
  const { cart, updateCartItem, removeFromCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.SHIPPING);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    sameAsShipping: true,
  });

  // Handle shipping form submission
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(CheckoutStep.PAYMENT);
    window.scrollTo(0, 0);
  };

  // Handle payment form submission
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(CheckoutStep.REVIEW);
    window.scrollTo(0, 0);
  };

  // Handle review/submit
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setCurrentStep(CheckoutStep.CONFIRMATION);
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }, 1500);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, formType: 'shipping' | 'payment') => {
    const { name, value, type, checked } = e.target;
    
    if (formType === 'shipping') {
      setShippingInfo({
        ...shippingInfo,
        [name]: type === 'checkbox' ? checked : value
      });
    } else {
      setPaymentInfo({
        ...paymentInfo,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  // Handle quantity changes
  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    await updateCartItem(itemId, newQuantity);
  };

  // Handle remove item
  const handleRemoveItem = async (itemId: string) => {
    await removeFromCart(itemId);
  };

  // Get billing address based on checkbox
  const getBillingAddress = () => {
    if (paymentInfo.sameAsShipping) {
      return `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zipCode}`;
    }
    return 'Different billing address';
  };

  // If no cart or empty cart, redirect to products
  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Your Cart is Empty</h1>
        <p className="mb-8">Add some products to your cart before proceeding to checkout.</p>
        <Link 
          href="/products" 
          className="px-6 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Checkout Header */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-block mb-8">
          <h1 className="text-2xl font-serif">Northbay Kitchen & Bath</h1>
        </Link>
        
        {/* Checkout Steps */}
        <div className="flex justify-center mb-8">
          <ol className="flex items-center w-full max-w-3xl">
            <li className={`flex items-center ${currentStep === CheckoutStep.SHIPPING ? 'text-brass-600 font-medium' : 'text-zinc-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full ${currentStep === CheckoutStep.SHIPPING ? 'bg-brass-100 text-brass-600' : currentStep > CheckoutStep.SHIPPING ? 'bg-green-100 text-green-600' : 'bg-zinc-100'}`}>
                {currentStep > CheckoutStep.SHIPPING ? (
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                ) : (
                  "1"
                )}
              </span>
              Shipping
            </li>
            <li className="flex w-full items-center">
              <div className={`flex-1 h-0.5 mx-2 ${currentStep >= CheckoutStep.PAYMENT ? 'bg-brass-600' : 'bg-zinc-200'}`}></div>
            </li>
            <li className={`flex items-center ${currentStep === CheckoutStep.PAYMENT ? 'text-brass-600 font-medium' : 'text-zinc-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full ${currentStep === CheckoutStep.PAYMENT ? 'bg-brass-100 text-brass-600' : currentStep > CheckoutStep.PAYMENT ? 'bg-green-100 text-green-600' : 'bg-zinc-100'}`}>
                {currentStep > CheckoutStep.PAYMENT ? (
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                ) : (
                  "2"
                )}
              </span>
              Payment
            </li>
            <li className="flex w-full items-center">
              <div className={`flex-1 h-0.5 mx-2 ${currentStep >= CheckoutStep.REVIEW ? 'bg-brass-600' : 'bg-zinc-200'}`}></div>
            </li>
            <li className={`flex items-center ${currentStep === CheckoutStep.REVIEW ? 'text-brass-600 font-medium' : 'text-zinc-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full ${currentStep === CheckoutStep.REVIEW ? 'bg-brass-100 text-brass-600' : currentStep > CheckoutStep.REVIEW ? 'bg-green-100 text-green-600' : 'bg-zinc-100'}`}>
                {currentStep > CheckoutStep.REVIEW ? (
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                ) : (
                  "3"
                )}
              </span>
              Review
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Column */}
        <div className="lg:col-span-2">
          {/* Shipping Information Step */}
          {currentStep === CheckoutStep.SHIPPING && (
            <div className="bg-white p-8 rounded-lg border border-zinc-200">
              <h2 className="text-2xl font-medium mb-6">Shipping Information</h2>
              
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-zinc-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange(e, 'shipping')}
                    required
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-zinc-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-zinc-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-zinc-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleInputChange(e, 'shipping')}
                      required
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Payment Information Step */}
          {currentStep === CheckoutStep.PAYMENT && (
            <div className="bg-white p-8 rounded-lg border border-zinc-200">
              <h2 className="text-2xl font-medium mb-6">Payment Information</h2>
              
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-6">
                  <label htmlFor="cardName" className="block text-sm font-medium text-zinc-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    required
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-zinc-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    required
                    placeholder="**** **** **** ****"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-zinc-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={(e) => handleInputChange(e, 'payment')}
                      required
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-zinc-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={(e) => handleInputChange(e, 'payment')}
                      required
                      placeholder="***"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      id="sameAsShipping"
                      name="sameAsShipping"
                      type="checkbox"
                      checked={paymentInfo.sameAsShipping}
                      onChange={(e) => handleInputChange(e, 'payment')}
                      className="h-4 w-4 text-brass-600 focus:ring-brass-500 border-zinc-300 rounded"
                    />
                    <label htmlFor="sameAsShipping" className="ml-2 block text-sm text-zinc-700">
                      Billing address same as shipping
                    </label>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(CheckoutStep.SHIPPING)}
                    className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-md hover:bg-zinc-50 transition-colors"
                  >
                    Back to Shipping
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    Continue to Review
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Order Review Step */}
          {currentStep === CheckoutStep.REVIEW && (
            <div className="bg-white p-8 rounded-lg border border-zinc-200">
              <h2 className="text-2xl font-medium mb-6">Review Order</h2>
              
              {/* Shipping Information Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Shipping Information</h3>
                <div className="bg-zinc-50 p-4 rounded-md">
                  <p><span className="font-medium">Name:</span> {shippingInfo.firstName} {shippingInfo.lastName}</p>
                  <p><span className="font-medium">Email:</span> {shippingInfo.email}</p>
                  <p><span className="font-medium">Phone:</span> {shippingInfo.phone}</p>
                  <p><span className="font-medium">Address:</span> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                </div>
              </div>
              
              {/* Payment Information Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Payment Information</h3>
                <div className="bg-zinc-50 p-4 rounded-md">
                  <p><span className="font-medium">Card:</span> **** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
                  <p><span className="font-medium">Expiry:</span> {paymentInfo.expiryDate}</p>
                  <p><span className="font-medium">Billing Address:</span> {getBillingAddress()}</p>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Order Items</h3>
                <div className="border-t border-zinc-200">
                  {cart.items.map((item) => (
                    <div key={item.id} className="py-4 border-b border-zinc-200 flex items-center">
                      {item.image && (
                        <div className="w-16 h-16 bg-zinc-100 rounded-md overflow-hidden mr-4">
                          <div className="relative h-full w-full">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="64px"
                              className="object-cover object-center"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-zinc-500">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(CheckoutStep.PAYMENT)}
                  className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-md hover:bg-zinc-50 transition-colors"
                >
                  Back to Payment
                </button>
                <button
                  type="button"
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Order Confirmation Step */}
          {currentStep === CheckoutStep.CONFIRMATION && (
            <div className="bg-white p-8 rounded-lg border border-zinc-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-medium mb-3">Order Confirmed!</h2>
              <p className="text-zinc-600 mb-6">
                Thank you for your order, {shippingInfo.firstName}. We've received your order and will begin processing it right away.
              </p>
              
              <div className="bg-zinc-50 p-4 rounded-md text-left mb-8">
                <p><span className="font-medium">Order Number:</span> {Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}</p>
                <p><span className="font-medium">Email:</span> {shippingInfo.email}</p>
                <p><span className="font-medium">Shipping Address:</span> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                <p><span className="font-medium">Total:</span> ${cart.totalPrice.toFixed(2)}</p>
              </div>
              
              <Link
                href="/"
                className="px-8 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors inline-block"
              >
                Return to Home
              </Link>
            </div>
          )}
        </div>

        {/* Order Summary Column */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 sticky top-6">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            
            <div className="mb-6">
              {cart.items.map((item) => (
                <div key={item.id} className="flex items-start py-3 border-b border-zinc-200 last:border-b-0">
                  {item.image && (
                    <div className="w-16 h-16 bg-zinc-100 rounded-md overflow-hidden mr-3">
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="64px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium mb-1 truncate">{item.title}</h3>
                    <p className="text-sm text-zinc-500">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="ml-2 text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-zinc-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-medium">${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span className="font-medium">${(cart.totalPrice * 0.07).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium mt-4 pt-4 border-t border-zinc-300">
                <span>Total</span>
                <span>${(cart.totalPrice + (cart.totalPrice * 0.07)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 