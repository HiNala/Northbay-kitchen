import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Northbay Kitchen & Bath',
  description: 'Learn about Northbay Kitchen & Bath Design Center, providing high-quality kitchen and bathroom remodeling in Sonoma County for over 30 years.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About Us</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Crafting beautiful kitchen and bath spaces in Sonoma County for over 30 years.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-zinc-600 mb-4">
                Founded in 1993, Northbay Kitchen & Bath Design Center has been helping Sonoma County homeowners 
                transform their spaces into beautiful, functional environments that reflect their personal style.
              </p>
              <p className="text-zinc-600 mb-4">
                What started as a small cabinet shop has grown into a full-service design-build firm, 
                specializing in kitchen and bathroom renovations that combine timeless design with modern functionality.
              </p>
              <p className="text-zinc-600">
                Our team of experienced designers and craftsmen work closely with each client to ensure 
                that every project exceeds expectations, from initial concept to final installation.
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden">
              {/* Placeholder for company image */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-zinc-500 text-sm">Company Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-brass-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brass-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Craftsmanship</h3>
              <p className="text-zinc-600">
                We believe in doing things right the first time. Our attention to detail and commitment to quality craftsmanship is evident in every project we complete.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-brass-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brass-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Client-Focused</h3>
              <p className="text-zinc-600">
                Your vision is our priority. We listen carefully to your needs and preferences to create spaces that are uniquely yours.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-brass-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brass-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Integrity</h3>
              <p className="text-zinc-600">
                We operate with transparency and honesty at every stage of the process, from initial consultation to project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="aspect-square bg-zinc-200 rounded-full w-48 h-48 mx-auto mb-4 overflow-hidden">
                {/* Placeholder for team member image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Team Photo</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Sarah Johnson</h3>
              <p className="text-zinc-500 mb-3">Design Director</p>
              <p className="text-zinc-600">
                With over 15 years of experience in kitchen and bath design, Sarah brings a wealth of knowledge and creativity to every project.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="aspect-square bg-zinc-200 rounded-full w-48 h-48 mx-auto mb-4 overflow-hidden">
                {/* Placeholder for team member image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Team Photo</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Michael Chen</h3>
              <p className="text-zinc-500 mb-3">Lead Craftsman</p>
              <p className="text-zinc-600">
                Michael's attention to detail and precision craftsmanship ensures that every installation meets our high standards of quality.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="aspect-square bg-zinc-200 rounded-full w-48 h-48 mx-auto mb-4 overflow-hidden">
                {/* Placeholder for team member image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Team Photo</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Jessica Rivera</h3>
              <p className="text-zinc-500 mb-3">Project Manager</p>
              <p className="text-zinc-600">
                Jessica's organizational skills and attention to detail ensure that your project runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Let our experienced team help you create the kitchen or bathroom of your dreams.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 