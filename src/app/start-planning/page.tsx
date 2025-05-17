import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Start Planning | Northbay Kitchen & Bath',
  description: 'Begin planning your kitchen or bathroom remodel with Northbay Kitchen & Bath Design Center. Learn about our process and book a consultation.',
};

export default function StartPlanningPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Start Planning Your Project</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Let us guide you through the process of transforming your kitchen or bathroom into the space of your dreams.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Process</h2>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden md:order-1">
                {/* Placeholder for process image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Consultation Image</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brass-200 rounded-full flex items-center justify-center text-brass-700 font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-medium ml-3">Consultation</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  Every great project begins with a conversation. During your initial consultation, 
                  we'll discuss your vision, needs, and budget to ensure we're aligned on your project goals.
                </p>
                <p className="text-zinc-600">
                  Our designers will ask questions about your style preferences, how you use the space, 
                  and any specific features or materials you're interested in.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden">
                {/* Placeholder for process image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Design Image</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brass-200 rounded-full flex items-center justify-center text-brass-700 font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-medium ml-3">Design</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  Our design team will create concept drawings and 3D renderings of your space, giving you a detailed 
                  preview of what your remodeled kitchen or bathroom will look like.
                </p>
                <p className="text-zinc-600">
                  At this stage, we'll collaborate closely with you to refine the design, select materials, 
                  fixtures, and finishes, and make any adjustments necessary to match your vision.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden md:order-1">
                {/* Placeholder for process image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Proposal Image</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brass-200 rounded-full flex items-center justify-center text-brass-700 font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-medium ml-3">Proposal</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  Once the design is finalized, we'll provide you with a detailed proposal that includes a 
                  comprehensive breakdown of costs, materials, timeline, and scope of work.
                </p>
                <p className="text-zinc-600">
                  Our transparent approach ensures there are no surprises, and you'll know exactly what to expect 
                  at every stage of the project.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden">
                {/* Placeholder for process image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Construction Image</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brass-200 rounded-full flex items-center justify-center text-brass-700 font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-medium ml-3">Construction</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  Our expert team of craftsmen will bring your design to life with precision and attention to detail, 
                  ensuring that every element of your project is executed to the highest standards.
                </p>
                <p className="text-zinc-600">
                  Throughout the construction phase, our project manager will keep you informed about progress, 
                  address any questions or concerns, and ensure that work stays on schedule.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden md:order-1">
                {/* Placeholder for process image */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-zinc-500 text-sm">Completion Image</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brass-200 rounded-full flex items-center justify-center text-brass-700 font-bold">
                    5
                  </div>
                  <h3 className="text-2xl font-medium ml-3">Completion</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  The final step is the reveal of your beautiful new space! We'll conduct a thorough walkthrough to 
                  ensure everything meets our standards and your expectations.
                </p>
                <p className="text-zinc-600">
                  We'll provide information on caring for your new kitchen or bathroom, and our team will be available to 
                  address any questions or concerns that may arise after the project is complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Book a Consultation</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Ready to take the first step towards your dream kitchen or bathroom? Schedule a consultation with one of our expert designers.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                      placeholder="Your full name"
                    />
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
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label htmlFor="preferred-date" className="block text-sm font-medium text-zinc-700 mb-1">
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    id="preferred-date"
                    name="preferred-date"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brass-500"
                    placeholder="Share your ideas, goals, and any specific requirements for your project"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-zinc-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">How long does a typical remodel take?</h3>
              <p className="text-zinc-600">
                The timeline for a remodel varies depending on the scope of the project. A bathroom remodel typically takes 
                3-6 weeks, while a kitchen remodel can take 6-12 weeks. During your consultation, we'll provide a more accurate 
                timeline based on your specific project.
              </p>
            </div>
            
            <div className="border border-zinc-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">What is your typical budget range for projects?</h3>
              <p className="text-zinc-600">
                Our projects vary widely in budget depending on size, materials, and complexity. Bathroom remodels typically 
                start at $20,000, while kitchen remodels start at $40,000. We work with you to create a design that meets your 
                needs and budget.
              </p>
            </div>
            
            <div className="border border-zinc-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Do I need to have a design in mind before the consultation?</h3>
              <p className="text-zinc-600">
                Not at all! While it's helpful to have ideas or inspiration, our designers are experienced in guiding you through 
                the process. We'll help you explore options and develop a design that reflects your style and meets your functional needs.
              </p>
            </div>
            
            <div className="border border-zinc-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Do you handle permits and inspections?</h3>
              <p className="text-zinc-600">
                Yes, we handle all necessary permits and inspections as part of our comprehensive service. Our team is familiar with 
                local regulations and will ensure that your project meets all building codes and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Take the first step towards your dream kitchen or bathroom by booking a consultation today.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 