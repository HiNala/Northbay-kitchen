import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Testimonials | Northbay Kitchen & Bath',
  description: 'Read what our clients have to say about their experience with Northbay Kitchen & Bath Design Center.',
};

interface Testimonial {
  id: string;
  name: string;
  title?: string;
  location: string;
  text: string;
  image?: string;
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Nicole Wiseman',
      location: 'Sonoma County',
      text: 'From the moment we walked in we felt good about this place, with someone right there at the door to greet us and assess our needs. From there we were sent over to Kari who has been wonderful and turned our stressful renovation into a smooth and easier process. She is extremely knowledgeable and helped us make decisions. Kari really cares about her clients and gives her full attention. We are so impressed with the customer service at this place and would recommend to anyone.'
    },
    {
      id: '2',
      name: 'Linda Reid',
      location: 'Petaluma',
      text: 'Northbay Kitchen & Bath designed and remodeled my master bathroom and turned it into the master bath I have always wanted. I went in to their amazing and well appointed showroom just to get some ideas and Catherine was so pleasant and helpful, I later went back with some sketches. Catherine improved upon the design with solutions I hadn\'t even thought of! Her brilliant design sense made an overwhelming process simply a pleasure. Dave and his crew made the stress of construction minimal. Dave spent time with me helping to make decisions or problem solving where necessary. Though ours was a relatively small job, I never felt like a low priority. There was no "nickle and dimeing", the job kept moving along and the results were stunning. My husband is a contractor and has pretty high standards and he was completely satisfied as well. These people were just a pleasure to work with!'
    },
    {
      id: '3',
      name: 'Jim Castille',
      location: 'Santa Rosa',
      text: 'Great experience with Northbay Kitchen and Bath!! Couldn\'t be happier with our updated kitchen! We knew we wanted a new kitchen but we really didn\'t know where to start. Megan from the Northbay design team helped us each step of the way in the planning process and brought so many great ideas into the design of our kitchen. All of the elements of our kitchen tied together perfectly from the cabinets to the island to the fixtures. Our new Miele appliances that Dave the owner recommended are amazing and were worth spending a little extra to get. The install teams were great and involved us in the decision making throughout the process. Everything turned out perfect and we are extremely satisfied with the way our new kitchen turned out. Would highly recommend Northbay Kitchen & Bath. Thank you Dave, Catherine, and Megan!!!'
    },
    {
      id: '4',
      name: 'Dal Heagley',
      location: 'Petaluma',
      text: 'I live in the neighborhood a few blocks away from the store. My master bathroom has a huge heavy glass swinging door, that I could see (with my Senior Citizen Eyes) that the door wasn\'t hanging straight, and was beginning to scrape the wall when swinging it open and shut. I stopped by the store to see if they could refer me to someone who could fix this. The staff on hand was discussing where they might refer me, when the OWNER of Northbay, on his way out for the weekend, heard our discussion. He hopped in his car, came to my house, and personally fixed that door! And refused to take any fee for it. I did get a little scolding ("...if that door falls down, it\'ll kill you!"). To say I was grateful would be an understatement! It was like family taking care of family. Unheard of these days, and I never forgot it.'
    },
    {
      id: '5',
      name: 'Fabien Vives',
      location: 'Sonoma County',
      text: 'If you\'re looking to remodel your kitchen or your bathroom you will find everything that you need. They have an amazing selection of materials, tiles and hardware. They provide great designs services, done with taste and they can also do the install. Highly recommend.'
    },
    {
      id: '6',
      name: 'David Graves',
      location: 'Napa Valley',
      text: 'David is very knowledgeable and has a great staff! Tessa was especially helpful as well. Beautiful building with a great selection of products. I would absolutely recommend checking them out!'
    },
    {
      id: '7',
      name: 'Houzz User',
      location: 'Sonoma County',
      text: 'North bay is our go to spot for design and material purchasing. We have used their services on multiple projects and continue to recommend them to our new clients. Stop by north bay kitchen and bath for all of your remodeling design and material needs.'
    },
    {
      id: '8',
      name: 'Houzz User',
      title: 'Ski House Project Client',
      location: 'Lake Tahoe',
      text: 'Northbay Kitchen & Bath (Chloe) helped us pick out all the tile for a new house construction project. This included 3 different "stone" types for bathrooms and entry foyer; Backsplash tile for the kitchen and a very special "carpet tile" for the Master Bathroom. The quality of the products are top notch and look amazing in our new ski house. We also purchased cabinet pulls, bath hardware, and a very nice tub filler with valve. Northbay can truly be a one-stop experience for the discerning design person.'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Testimonials</h1>
          <div className="w-16 h-0.5 bg-zinc-300 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Kind Words from Our Clients!
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-zinc-300">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
            
            <blockquote className="text-2xl md:text-3xl mb-8 font-light italic text-zinc-700">
              "Our team was able to design our dream kitchen with Northbay's expertise. The attention to detail and quality materials exceeded our expectations!"
            </blockquote>
            
            <p className="text-lg font-medium mb-1">The Peterson Family</p>
            <p className="text-zinc-500">Santa Rosa, CA</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 border border-zinc-200 hover:border-zinc-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 h-10 w-10 text-brass-200">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                
                <blockquote className="text-lg mb-6 text-zinc-700 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-medium">{testimonial.name}</p>
                    {testimonial.title && (
                      <p className="text-zinc-600">{testimonial.title}</p>
                    )}
                    <p className="text-zinc-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Our expert designers are ready to help you create the kitchen or bathroom of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-planning"
              className="px-8 py-3 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Start Planning
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 