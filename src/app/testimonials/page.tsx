import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Testimonials | Northbay Kitchen & Bath',
  description: 'Read what our clients have to say about their experience working with Northbay Kitchen & Bath Design Center.',
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Client Testimonials</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Read what our clients have to say about their experience working with our team.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Sarah & Michael Peterson</h3>
                  <p className="text-zinc-500">Santa Rosa, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "NBKB transformed our outdated kitchen into a stunning space that honors our home's history while giving us all the modern amenities we wanted. Their attention to detail and craftsmanship is exceptional."
                </blockquote>
                <p className="text-zinc-500">Kitchen Remodel, 2024</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Jennifer & Mark Williams</h3>
                  <p className="text-zinc-500">Healdsburg, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "Our bathroom feels like a luxury spa retreat. The attention to detail and craftsmanship exceeded our expectations. The team at NBKB was professional, responsive, and made the process enjoyable."
                </blockquote>
                <p className="text-zinc-500">Bathroom Remodel, 2024</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">David & Lisa Thompson</h3>
                  <p className="text-zinc-500">Sebastopol, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "We were hesitant to remodel our kitchen due to past negative experiences with contractors. NBKB restored our faith in the process! They were transparent, reliable, and delivered exactly what they promised, on time and on budget."
                </blockquote>
                <p className="text-zinc-500">Kitchen Remodel, 2023</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Patricia & Robert Johnson</h3>
                  <p className="text-zinc-500">Windsor, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "The design team at NBKB has an incredible eye for detail. They took our general ideas and transformed them into a cohesive design that exceeded our expectations. Our new bathroom is both beautiful and functional."
                </blockquote>
                <p className="text-zinc-500">Bathroom Remodel, 2023</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Emily & James Rodriguez</h3>
                  <p className="text-zinc-500">Petaluma, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "We renovated both our kitchen and master bathroom with NBKB, and couldn't be happier with the results. Their project management was impeccable, keeping everything on schedule and addressing any concerns promptly."
                </blockquote>
                <p className="text-zinc-500">Kitchen & Bathroom Remodel, 2023</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="border border-zinc-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full overflow-hidden">
                  {/* Client photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-xs">Photo</p>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Karen & Thomas Anderson</h3>
                  <p className="text-zinc-500">Santa Rosa, CA</p>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brass-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 mb-4">
                  "The team at NBKB brought our vision to life with a level of quality that exceeded our expectations. Their design suggestions elevated our original ideas, and the craftmanship is something we'll enjoy for years to come."
                </blockquote>
                <p className="text-zinc-500">Kitchen Remodel, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Featured Success Story</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden">
              {/* Project image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-zinc-500 text-sm">Project Image Placeholder</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">The Wilson Family's Home Transformation</h3>
              
              <blockquote className="text-zinc-600 italic mb-6">
                "Working with NBKB was the best decision we made for our renovation. Their expertise and attention to detail made all the difference in creating a space that truly feels like home."
              </blockquote>
              
              <p className="text-zinc-600 mb-4">
                The Wilsons came to us with a challenging project: modernizing their 1940s kitchen while preserving the home's historic character. Our design team worked closely with them to create a space that blends contemporary functionality with vintage charm.
              </p>
              
              <p className="text-zinc-600 mb-6">
                The result was a stunning kitchen featuring custom shaker cabinets, quartz countertops, and state-of-the-art appliances that meet their modern needs while honoring the home's architectural style.
              </p>
              
              <Link
                href="/portfolio/wilson-family-kitchen"
                className="flex items-center text-zinc-900 font-medium hover:text-brass-700 transition-colors"
              >
                View This Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Join our growing list of satisfied clients and transform your home with our expert design and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
            >
              Browse Our Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 