import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] md:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="w-full h-full relative">
            {/* Placeholder for hero image - will be replaced with actual images */}
            <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
        
        <div className="z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Beautiful Spaces,<br />Thoughtfully Designed
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Northbay Kitchen & Bath creates stunning, functional spaces 
            that reflect your personal style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="/start-planning"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group">
              <div className="aspect-[4/3] bg-zinc-200 mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Project Image Placeholder</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Santa Rosa Modern Farmhouse</h3>
              <p className="text-zinc-600 mb-3">Kitchen Renovation</p>
              <Link
                href="/portfolio/santa-rosa-modern-farmhouse-kitchen"
                className="text-zinc-900 font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Project Card 2 */}
            <div className="group">
              <div className="aspect-[4/3] bg-zinc-200 mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Project Image Placeholder</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Healdsburg Spa Retreat</h3>
              <p className="text-zinc-600 mb-3">Bathroom Renovation</p>
              <Link
                href="/portfolio/healdsburg-spa-bathroom-retreat"
                className="text-zinc-900 font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Project Card 3 */}
            <div className="group">
              <div className="aspect-[4/3] bg-zinc-200 mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Project Image Placeholder</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Sonoma County Cottage</h3>
              <p className="text-zinc-600 mb-3">Full Home Renovation</p>
              <Link
                href="/portfolio"
                className="text-zinc-900 font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Our Services</h2>
            <p className="text-lg text-zinc-600">
              From initial concept to final installation, we handle every aspect of your kitchen or bathroom remodel
              with meticulous attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-zinc-200 rounded-lg">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="m2 2 20 20"></path>
                  <path d="M18.34 14.34A10 10 0 0 0 9.66 5.66"></path>
                  <path d="m5 3-3 3 7 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Design Consultation</h3>
              <p className="text-zinc-600">
                Our expert designers will help you create a space that reflects your style and meets your functional needs.
              </p>
            </div>
            
            <div className="p-6 border border-zinc-200 rounded-lg">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15l-7-3-7 3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Custom Cabinetry</h3>
              <p className="text-zinc-600">
                Our skilled craftsmen build beautiful, durable cabinets tailored to your exact specifications.
              </p>
            </div>
            
            <div className="p-6 border border-zinc-200 rounded-lg">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Full Installation</h3>
              <p className="text-zinc-600">
                Our professional installers ensure every element of your project is perfectly executed.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="px-8 py-3 border border-zinc-900 text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors inline-block"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Clients Say</h2>
          
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 h-12 w-12 text-zinc-500">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
            
            <blockquote className="text-xl md:text-2xl mb-8">
              "Northbay Kitchen & Bath transformed our outdated kitchen into a stunning space that honors our home's history while giving us all the modern amenities we wanted."
            </blockquote>
            
            <p className="text-zinc-400 mb-2">The Peterson Family</p>
            <p className="text-zinc-500">Santa Rosa, CA</p>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors inline-block"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-zinc-600 mb-8">
            Schedule a consultation with one of our expert designers to start planning your dream kitchen or bathroom.
          </p>
          <Link
            href="/start-planning"
            className="px-8 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
