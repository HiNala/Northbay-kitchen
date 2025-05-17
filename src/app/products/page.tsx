import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/api';
import { Product } from '@/lib/api/types';

export const metadata: Metadata = {
  title: 'Products | Northbay Kitchen & Bath',
  description: 'Browse our selection of high-quality kitchen and bathroom products for your renovation project.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Products</h1>
          <div className="w-16 h-0.5 bg-zinc-300 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Browse our selection of high-quality products for your kitchen and bathroom renovation projects.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif">All Products</h2>
            <div className="flex items-center space-x-2">
              <span className="text-zinc-500">{products.length} products</span>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-zinc-500">Check back soon for our updated product catalog.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product: Product) => (
                <div key={product.id} className="group">
                  <Link href={`/products/${product.handle}`} className="block">
                    <div className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden rounded-md">
                      {product.images && product.images.length > 0 ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <span className="text-zinc-400 text-sm">No image</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-medium mb-1 group-hover:text-zinc-700">{product.title}</h3>
                    <p className="text-zinc-900 font-medium">${product.price.toFixed(2)}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-zinc-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-4">Need Help Choosing?</h2>
          <div className="w-16 h-0.5 bg-zinc-300 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 mb-10">
            Our design experts can help you select the perfect products for your renovation project.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 