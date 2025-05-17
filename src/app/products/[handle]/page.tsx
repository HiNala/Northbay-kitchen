'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct } from '@/lib/api';
import { Product } from '@/lib/api/types';
import { useCart } from '@/lib/context/CartContext';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { handle } = params;
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProduct(handle);
        
        if (!productData) {
          router.push('/products');
          return;
        }
        
        setProduct(productData);
        if (productData.images && productData.images.length > 0) {
          setSelectedImage(productData.images[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle, router]);

  // Handle quantity changes
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    if (!product) return;
    
    try {
      setAddingToCart(true);
      await addToCart(product.id, quantity);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-zinc-300 rounded-full border-t-zinc-800"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/products" 
          className="px-6 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

    return (    <main className="flex min-h-screen flex-col">      {/* Breadcrumbs */}      <div className="bg-zinc-50 py-3">        <div className="container mx-auto px-4">          <div className="flex items-center text-sm text-zinc-500">            <Link href="/" className="hover:text-zinc-800">Home</Link>            <span className="mx-2">/</span>            <Link href="/products" className="hover:text-zinc-800">Products</Link>            <span className="mx-2">/</span>            <span className="text-zinc-800">{product.title}</span>          </div>        </div>      </div>      {/* Product Section */}      <section className="py-16">        <div className="container mx-auto px-4">          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">            {/* Product Images */}            <div>              {/* Main Image */}              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden mb-6">                {selectedImage ? (                  <div className="relative h-full w-full">                    <Image                      src={selectedImage}                      alt={product.title}                      fill                      sizes="(max-width: 768px) 100vw, 50vw"                      className="object-cover object-center"                    />                  </div>                ) : (                  <div className="h-full w-full flex items-center justify-center">                    <span className="text-zinc-400">No image available</span>                  </div>                )}              </div>              {/* Thumbnail Gallery */}              {product.images && product.images.length > 1 && (                <div className="grid grid-cols-4 gap-3">                  {product.images.map((image, index) => (                    <button                      key={index}                      onClick={() => setSelectedImage(image)}                      className={`aspect-[4/3] bg-zinc-100 overflow-hidden ${                        selectedImage === image ? 'ring-2 ring-brass-500' : ''                      }`}                    >                      <div className="relative h-full w-full">                        <Image                          src={image}                          alt={`${product.title} - Image ${index + 1}`}                          fill                          sizes="100px"                          className="object-cover object-center"                        />                      </div>                    </button>                  ))}                </div>              )}            </div>            {/* Product Info */}            <div>              <h1 className="text-3xl font-serif mb-3">{product.title}</h1>              <p className="text-2xl font-medium text-zinc-900 mb-6">${product.price.toFixed(2)}</p>                            <div className="w-16 h-0.5 bg-zinc-200 mb-6"></div>                            {product.description && (                <div className="prose prose-zinc mb-8">                  <p className="text-zinc-600">{product.description}</p>                </div>              )}              {/* Quantity Selector */}              <div className="mb-8">                <label htmlFor="quantity" className="block text-sm font-medium text-zinc-700 mb-2">                  Quantity                </label>                <div className="flex items-center border border-zinc-300 w-32">                  <button                    type="button"                    onClick={decrementQuantity}                    className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"                  >                    -                  </button>                  <input                    type="number"                    id="quantity"                    name="quantity"                    min="1"                    value={quantity}                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}                    className="w-full text-center border-0 focus:ring-0"                  />                  <button                    type="button"                    onClick={incrementQuantity}                    className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"                  >                    +                  </button>                </div>              </div>              {/* Add to Cart Button */}              <div className="mb-8">                {showSuccess ? (                  <div className="bg-green-100 text-green-800 px-4 py-3 flex items-center mb-4">                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />                    </svg>                    Item added to cart!                  </div>                ) : null}                                <button                  type="button"                  onClick={handleAddToCart}                  disabled={addingToCart}                  className="w-full md:w-auto px-10 py-3 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors flex items-center justify-center"                >                  {addingToCart ? (                    <>                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>                      </svg>                      Adding...                    </>                  ) : (                    'Add to Cart'                  )}                </button>              </div>              {/* Additional Info */}              <div className="border-t border-zinc-200 pt-6">                <h3 className="text-lg font-medium mb-4">Details</h3>                <ul className="space-y-2 text-zinc-600">                  <li className="flex items-start">                    <span className="mr-2">•</span>                    <span>High-quality materials</span>                  </li>                  <li className="flex items-start">                    <span className="mr-2">•</span>                    <span>Professional installation available</span>                  </li>                  <li className="flex items-start">                    <span className="mr-2">•</span>                    <span>Sonoma County delivery included</span>                  </li>                  {product.category && (                    <li className="flex items-start">                      <span className="mr-2">•</span>                      <span>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>                    </li>                  )}                </ul>              </div>            </div>          </div>        </div>      </section>      {/* Related Products Section */}      <section className="w-full py-16 bg-zinc-50">        <div className="container mx-auto px-4">          <div className="text-center mb-12">            <h2 className="text-2xl font-serif mb-4">You Might Also Like</h2>            <div className="w-16 h-0.5 bg-zinc-300 mx-auto"></div>          </div>                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">            {/* This would be populated with actual related products */}            {/* For now, we'll show placeholders */}            {[1, 2, 3, 4].map((i) => (              <div key={i} className="group">                <Link href="/products">                  <div className="aspect-[4/3] bg-zinc-100 mb-3 overflow-hidden">                    <div className="w-full h-full flex items-center justify-center">                      <span className="text-zinc-400 text-sm">Product {i}</span>                    </div>                  </div>                  <h3 className="text-sm font-medium mb-1 group-hover:text-zinc-700">Related Product</h3>                  <p className="text-zinc-900 text-sm">$99.99</p>                </Link>              </div>            ))}          </div>        </div>      </section>    </main>  );
} 