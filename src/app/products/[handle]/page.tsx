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

  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumbs */}
      <div className="bg-zinc-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-800">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-zinc-800">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-800">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden mb-4">
                {selectedImage ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={selectedImage}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-zinc-400">No image available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`aspect-[4/3] bg-zinc-100 rounded overflow-hidden ${
                        selectedImage === image ? 'ring-2 ring-zinc-900' : ''
                      }`}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={image}
                          alt={`${product.title} - Image ${index + 1}`}
                          fill
                          sizes="100px"
                          className="object-cover object-center"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-medium mb-2">{product.title}</h1>
              <p className="text-2xl font-medium text-zinc-900 mb-6">${product.price.toFixed(2)}</p>
              
              {product.description && (
                <div className="prose prose-zinc mb-6">
                  <p>{product.description}</p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-zinc-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-zinc-300 rounded-md w-32">
                  <button
                    type="button"
                    onClick={decrementQuantity}
                    className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-full text-center border-0 focus:ring-0"
                  />
                  <button
                    type="button"
                    onClick={incrementQuantity}
                    className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mb-6">
                {showSuccess ? (
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Item added to cart!
                  </div>
                ) : null}
                
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                  className="w-full md:w-auto px-8 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center"
                >
                  {addingToCart ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-zinc-200 pt-6">
                <h3 className="text-lg font-medium mb-3">Details</h3>
                <ul className="list-disc pl-5 text-zinc-600 space-y-1">
                  <li>High-quality materials</li>
                  <li>Professional installation available</li>
                  <li>Sonoma County delivery included</li>
                  {product.category && (
                    <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section - would be implemented when we have related products functionality */}
    </main>
  );
} 