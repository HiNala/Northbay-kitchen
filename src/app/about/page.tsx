import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About | Northbay Kitchen & Bath',
  description: 'Learn about Northbay Kitchen & Bath Design Center, providing high-quality kitchen and bathroom remodeling in Sonoma County for over 30 years.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHeader 
        title="About Us" 
        subtitle="Crafting beautiful kitchen and bath spaces in Sonoma County for over 30 years."
      />

      {/* Company History */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Founded in 1994 by David Frym, Northbay Kitchen & Bath Design Center was created to offer a space where clients could experience materials firsthand. 
                This privately owned design and build showroom in Petaluma, California serves as a one-stop shop for designers, contractors, homeowners, and builders.
              </p>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                David Frym, owner and general contractor, is renowned for his deep passion for design-build and his unwavering commitment to crafting unique custom homes. 
                With a focus on delivering comprehensive remodeling and design services, David's work is marked by professional and high-quality craftsmanship.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                His dedication to innovation and excellence, coupled with his strong client relationships, has solidified Northbay Kitchen & Bath's reputation as a leader 
                in the North San Francisco Bay Area's design-build community.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src="/images/about/company.jpg"
                  alt="Northbay Kitchen & Bath Design Center Showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-brass-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brass-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Craftsmanship</h3>
              <p className="text-zinc-600">
                We believe in doing things right the first time. Our attention to detail and commitment to quality craftsmanship is evident in every project we complete.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-brass-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brass-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Client-Focused</h3>
              <p className="text-zinc-600">
                Your vision is our priority. We listen carefully to your needs and preferences to create spaces that are uniquely yours.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-brass-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6 text-center">Northbay Kitchen & Bath Team</h2>
          <div className="w-16 h-0.5 bg-brass-300 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* David Frym */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/david-frym.jpg"
                    alt="David Frym - Owner/President"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">David Frym</h3>
                <p className="text-brass-600 mb-4">Owner/President</p>
                <p className="text-zinc-600 leading-relaxed">
                  David Frym is renowned for his deep passion for design-build and his unwavering commitment to crafting unique custom homes. His relationships with clients are at the heart of his practice.
                </p>
              </div>
            </div>
            
            {/* Megan Svendsen */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/megan.jpg"
                    alt="Megan Svendsen - CKBD, Certified Kitchen & Bath Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">Megan Svendsen</h3>
                <p className="text-brass-600 mb-4">CKBD, Certified Kitchen & Bath Designer</p>
                <p className="text-zinc-600 leading-relaxed">
                  As a recognized professional in the National Kitchen and Bath Association, Megan is passionate about taking her clients' dreams to reality through an open dialogue.
                </p>
              </div>
            </div>
            
            {/* Josie Givogri */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/josie.jpg"
                    alt="Josie Givogri - Interior Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">Josie Givogri</h3>
                <p className="text-brass-600 mb-4">Interior Designer</p>
                <p className="text-zinc-600 leading-relaxed">
                  With over 12 years of experience in the design industry, Josie has developed a passion for guiding clients through the design process, making it enjoyable and stress-free.
                </p>
              </div>
            </div>
            
            {/* Maxine Callahan */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/maxine.jpg"
                    alt="Maxine Callahan - Assistant Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">Maxine Callahan</h3>
                <p className="text-brass-600 mb-4">Assistant Designer</p>
                <p className="text-zinc-600 leading-relaxed">
                  Raised in Sonoma County, Maxine brings a refined sense of design to wine country homes, combining local charm with functional elegance.
                </p>
              </div>
            </div>
            
            {/* Alexxus Anderson */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/alexxus.jpg"
                    alt="Alexxus Anderson - Showroom Manager | Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">Alexxus Anderson</h3>
                <p className="text-brass-600 mb-4">Showroom Manager | Designer</p>
                <p className="text-zinc-600 leading-relaxed">
                  With a BA in Design from UC Davis, Alexxus has extensive knowledge of the construction process and guides clients to options that will create lasting and stunning results.
                </p>
              </div>
            </div>
            
            {/* Kylee Giovando */}
            <div className="group">
              <div className="aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/kylee.jpg"
                    alt="Kylee Giovando - Purchasing & Office Coordinator"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">Kylee Giovando</h3>
                <p className="text-brass-600 mb-4">Purchasing & Office Coordinator</p>
                <p className="text-zinc-600 leading-relaxed">
                  Kylee, daughter of David Frym, excels in managing the complete lifecycle of design projects from taking orders through purchasing and installation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              href="/contact" 
              variant="primary"
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Showroom Images */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src="/images/about/showroom-1.jpg"
                  alt="Our design studio workspace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src="/images/about/showroom-2.jpg"
                  alt="Kitchen design project in progress"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Let our experienced team help you create the kitchen or bathroom of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact"
              variant="white"
              size="lg"
            >
              Get in Touch
            </Button>
            <Button 
              href="/portfolio"
              variant="outlineBrass"
              size="lg"
              className="text-white border-white"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 