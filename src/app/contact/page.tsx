import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Northbay Kitchen & Bath',
  description: 'Get in touch with Northbay Kitchen & Bath Design Center to start planning your kitchen or bathroom remodel project.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our team to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-brass-100 p-2 rounded-md text-brass-700 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Showroom</h3>
                    <p className="text-zinc-600">123 Main Street</p>
                    <p className="text-zinc-600">Santa Rosa, CA 95401</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brass-100 p-2 rounded-md text-brass-700 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <p className="text-zinc-600">Monday - Friday: 9am - 5pm</p>
                    <p className="text-zinc-600">Saturday: 10am - 3pm</p>
                    <p className="text-zinc-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brass-100 p-2 rounded-md text-brass-700 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-zinc-600">(707) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brass-100 p-2 rounded-md text-brass-700 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-zinc-600">info@northbaykitchenbath.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" className="text-zinc-600 hover:text-brass-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://pinterest.com" className="text-zinc-600 hover:text-brass-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <line x1="12" x2="12" y1="17" y2="22"></line>
                      <path d="M8 17a5 5 0 0 1-3-9c1.635-2.87 6.941-1.039 7.12 3.035"></path>
                      <circle cx="14.5" cy="9.5" r="1.5"></circle>
                      <circle cx="11.5" cy="5.5" r="1.5"></circle>
                      <circle cx="17.5" cy="13.5" r="1.5"></circle>
                      <path d="M12.602 17.494c.105.886.745 1.912 1.743 2.057 1.633.236 2.363-1.074 2.5-2.606.181-2.017-.092-4.005-.56-5.947-.27-1.118.845-1.311 1.57-.985.63.283 1.594 1.113 1.44 3.209-.02.14-.082.391.09.456.222.084.444-.366.487-.436.144-.247.15-.504.241-.767.226-.666.5-1.32.705-1.993"></path>
                    </svg>
                  </a>
                  <a href="https://houzz.com" className="text-zinc-600 hover:text-brass-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M13 3H8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-7.5L13 3Z"></path>
                      <path d="M13 3v7.5h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-zinc-50 p-8 rounded-lg">
              <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    placeholder="Your email address"
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
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-zinc-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                  >
                    <option value="">Select a project type</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="both">Kitchen & Bathroom</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    placeholder="Tell us about your project and how we can help"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Visit Our Showroom</h2>
          <div className="h-96 bg-zinc-200 rounded-lg flex items-center justify-center">
            <p className="text-zinc-500">Map Placeholder</p>
          </div>
        </div>
      </section>
    </main>
  );
} 