import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { NBKBTestimonials } from '@/components/ui/TestimonialsDemo';

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
  rating?: number;
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Nicole Wiseman',
      location: 'Sonoma County',
      text: 'From the moment we walked in we felt good about this place, with someone right there at the door to greet us and assess our needs. From there we were sent over to Kari who has been wonderful and turned our stressful renovation into a smooth and easier process. She is extremely knowledgeable and helped us make decisions. Kari really cares about her clients and gives her full attention. We are so impressed with the customer service at this place and would recommend to anyone.',
      image: '/images/about/team-3.jpg',
      rating: 5
    },
    {
      id: '2',
      name: 'Linda Reid',
      location: 'Petaluma',
      text: 'Northbay Kitchen & Bath designed and remodeled my master bathroom and turned it into the master bath I have always wanted. I went in to their amazing and well appointed showroom just to get some ideas and Catherine was so pleasant and helpful, I later went back with some sketches. Catherine improved upon the design with solutions I hadn\'t even thought of! Her brilliant design sense made an overwhelming process simply a pleasure. Dave and his crew made the stress of construction minimal. Dave spent time with me helping to make decisions or problem solving where necessary. Though ours was a relatively small job, I never felt like a low priority. There was no "nickle and dimeing", the job kept moving along and the results were stunning. My husband is a contractor and has pretty high standards and he was completely satisfied as well. These people were just a pleasure to work with!',
      image: '/images/about/team-1.jpg',
      rating: 5
    },
    {
      id: '3',
      name: 'Jim Castille',
      location: 'Santa Rosa',
      text: 'Great experience with Northbay Kitchen and Bath!! Couldn\'t be happier with our updated kitchen! We knew we wanted a new kitchen but we really didn\'t know where to start. Megan from the Northbay design team helped us each step of the way in the planning process and brought so many great ideas into the design of our kitchen. All of the elements of our kitchen tied together perfectly from the cabinets to the island to the fixtures. Our new Miele appliances that Dave the owner recommended are amazing and were worth spending a little extra to get. The install teams were great and involved us in the decision making throughout the process. Everything turned out perfect and we are extremely satisfied with the way our new kitchen turned out. Would highly recommend Northbay Kitchen & Bath. Thank you Dave, Catherine, and Megan!!!',
      image: '/images/about/team-2.jpg',
      rating: 5
    },
    {
      id: '4',
      name: 'Dal Heagley',
      location: 'Petaluma',
      text: 'I live in the neighborhood a few blocks away from the store. My master bathroom has a huge heavy glass swinging door, that I could see (with my Senior Citizen Eyes) that the door wasn\'t hanging straight, and was beginning to scrape the wall when swinging it open and shut. I stopped by the store to see if they could refer me to someone who could fix this. The staff on hand was discussing where they might refer me, when the OWNER of Northbay, on his way out for the weekend, heard our discussion. He hopped in his car, came to my house, and personally fixed that door! And refused to take any fee for it. I did get a little scolding ("...if that door falls down, it\'ll kill you!"). To say I was grateful would be an understatement! It was like family taking care of family. Unheard of these days, and I never forgot it.',
      image: '/images/about/team-4.jpg',
      rating: 5
    },
    {
      id: '5',
      name: 'Fabien Vives',
      location: 'Sonoma County',
      text: 'If you\'re looking to remodel your kitchen or your bathroom you will find everything that you need. They have an amazing selection of materials, tiles and hardware. They provide great designs services, done with taste and they can also do the install. Highly recommend.',
      image: '/images/about/team-3.jpg',
      rating: 5
    },
    {
      id: '6',
      name: 'David Graves',
      location: 'Napa Valley',
      text: 'David is very knowledgeable and has a great staff! Tessa was especially helpful as well. Beautiful building with a great selection of products. I would absolutely recommend checking them out!',
      image: '/images/about/maxine.jpg',
      rating: 5
    },
    {
      id: '7',
      name: 'Jennifer Adams',
      location: 'Sonoma County',
      text: 'North bay is our go to spot for design and material purchasing. We have used their services on multiple projects and continue to recommend them to our new clients. Stop by north bay kitchen and bath for all of your remodeling design and material needs.',
      image: '/images/about/kylee.jpg',
      rating: 5
    },
    {
      id: '8',
      name: 'Christopher Morgan',
      title: 'Ski House Project Client',
      location: 'Lake Tahoe',
      text: 'Northbay Kitchen & Bath (Chloe) helped us pick out all the tile for a new house construction project. This included 3 different "stone" types for bathrooms and entry foyer; Backsplash tile for the kitchen and a very special "carpet tile" for the Master Bathroom. The quality of the products are top notch and look amazing in our new ski house. We also purchased cabinet pulls, bath hardware, and a very nice tub filler with valve. Northbay can truly be a one-stop experience for the discerning design person.',
      image: '/images/about/team-1.jpg',
      rating: 5
    }
  ];

  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-300'}`} 
          />
        ))}
      </div>
    );
  };

  const featuredTestimonial = testimonials[1]; // Linda Reid's testimonial

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHeader 
        title="Testimonials" 
        subtitle="Kind Words from Our Clients"
      />

      {/* Featured Testimonial Carousel */}
      <NBKBTestimonials />

      {/* Testimonials Grid */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">More Client Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.id !== featuredTestimonial.id).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col h-full"
              >
                {renderStars(testimonial.rating)}
                
                <blockquote className="mt-4 mb-6 text-zinc-700 leading-relaxed flex-grow">
                  "{testimonial.text.length > 200 
                    ? `${testimonial.text.substring(0, 200)}...` 
                    : testimonial.text}"
                </blockquote>
                
                <div className="flex items-center mt-auto pt-4 border-t border-zinc-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || `/images/about/team-${(parseInt(testimonial.id) % 4) + 1}.jpg`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    {testimonial.title && (
                      <p className="text-zinc-600 text-sm">{testimonial.title}</p>
                    )}
                    <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Banner */}
      <section className="w-full py-12 bg-brass-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif mb-3">Trusted by Homeowners Across Sonoma County</h3>
          <div className="flex justify-center space-x-1 md:space-x-2">
            {renderStars(5)}
          </div>
          <p className="mt-3 text-lg text-zinc-700">4.9 out of 5 stars from over 150+ reviews</p>
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
            <Button 
              href="/start-planning"
              variant="primary"
              size="lg"
            >
              Start Planning
            </Button>
            <Button 
              href="/contact"
              variant="outlineBrass"
              size="lg"
              className="text-white border-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 