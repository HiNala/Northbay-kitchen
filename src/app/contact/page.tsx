import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us | Northbay Kitchen & Bath',
  description: 'Get in touch with Northbay Kitchen & Bath for your kitchen or bathroom remodeling project.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHeader 
        title="Contact Us" 
        subtitle="Have a question, or want to start a project? Get in touch with our design team."
      />

      {/* Contact Form & Info Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="kitchen-remodel">Kitchen Remodel</option>
                    <option value="bathroom-remodel">Bathroom Remodel</option>
                    <option value="custom-cabinetry">Custom Cabinetry</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500 transition-all"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-brass-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brass-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif">Visit Our Showroom</h2>
                </div>
                
                <p className="text-lg mb-4 font-medium">1110 Petaluma Blvd. N, Petaluma, CA 94952</p>
                
                <h3 className="text-xl font-medium mb-3 text-zinc-800">Hours</h3>
                <ul className="space-y-2 text-zinc-700 mb-6">
                  <li className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
                
                <Link
                  href="https://maps.google.com/?q=1110+Petaluma+Blvd.+N,+Petaluma,+CA+94952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brass-700 hover:text-brass-600 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  Get Directions
                </Link>
              </div>
              
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-brass-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brass-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif">Contact Us</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-brass-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500">Phone</h3>
                      <a href="tel:+17077691646" className="text-lg text-zinc-800 hover:text-brass-600 transition-colors">(707) 769-1646</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-brass-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500">Email</h3>
                      <a href="mailto:info@nbkbdesigncenter.com" className="text-lg text-zinc-800 hover:text-brass-600 transition-colors">info@nbkbdesigncenter.com</a>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-sm font-medium text-zinc-500 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://instagram.com/northbay_kitchen_and_bath" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:text-brass-600 hover:border-brass-300 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="https://facebook.com/NBKBDesignCenter" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:text-brass-600 hover:border-brass-300 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/northbay-kitchen-and-bath-pfvwus-pf~252277180" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:text-brass-600 hover:border-brass-300 transition-colors"
                        aria-label="Houzz"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.5,4h-1.3L4,10.9v3.1h4.1v6H12v-6h4.1v-4H12V4z M16.1,10v0.8H12v4.6h-0.9v-4.6H7v-0.9l4.5-3.4V10H16.1z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.5647810864225!2d-122.6507908!3d38.2494603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b3edfd0cfcff%3A0x20ecb45b3ae8fcf!2s1110%20Petaluma%20Blvd%20N%2C%20Petaluma%2C%20CA%2094952!5e0!3m2!1sen!2sus!4v1626877401000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Google Maps location for Northbay Kitchen & Bath"
        ></iframe>
      </section>
    </main>
  );
} 