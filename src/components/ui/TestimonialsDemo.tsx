"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    name: 'Linda Reid',
    location: 'Petaluma',
    text: 'I went in to their amazing and well appointed showroom just to get some ideas and Catherine was so pleasant and helpful. Her brilliant design sense made an overwhelming process simply a pleasure. Dave and his crew made the stress of construction minimal, and the results were stunning!',
    image: '/images/about/team-1.jpg',
  },
  {
    id: '2',
    name: 'Jim Castille',
    location: 'Santa Rosa',
    text: 'Great experience with Northbay Kitchen and Bath! We knew we wanted a new kitchen but we really didn\'t know where to start. Megan helped us each step of the way and brought so many great ideas into the design of our kitchen. All elements tied together perfectly. Would highly recommend!',
    image: '/images/about/team-2.jpg',
  },
  {
    id: '3',
    name: 'Nicole Wiseman',
    location: 'Sonoma County',
    text: 'From the moment we walked in we felt good about this place, with someone right there at the door to greet us. Kari has been wonderful and turned our stressful renovation into a smooth process. She is extremely knowledgeable and helps with decisions. We are so impressed with the customer service!',
    image: '/images/about/team-3.jpg',
  },
  {
    id: '4',
    name: 'David Graves',
    location: 'Napa Valley',
    text: 'David is very knowledgeable and has a great staff! Their beautiful showroom has a great selection of products. The design team took the time to understand our vision and expertly guided us through the renovation process. I would absolutely recommend checking them out!',
    image: '/images/about/team-4.jpg',
  }
];

export function NBKBTestimonials() {
  const [current, setCurrent] = useState(0);
  
  const next = useCallback(() => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }, []);
  
  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [next]);
  
  const testimonial = testimonials[current];

  return (
    <section className="w-full py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">What Our Clients Say</h2>
          <div className="w-16 h-0.5 bg-brass-300 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-zinc-100 transition-colors -ml-4 md:-ml-6 focus:outline-none focus:ring-2 focus:ring-brass-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium">{testimonial.name}</h3>
                  <p className="text-zinc-500">{testimonial.location}</p>
                  
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                
                <div className="md:w-2/3 relative">
                  <div className="absolute -left-2 -top-2 text-6xl text-brass-300 opacity-30">"</div>
                  <blockquote className="relative z-10 text-lg md:text-xl font-light text-zinc-700 leading-relaxed">
                    {testimonial.text}
                  </blockquote>
                  <div className="absolute -right-2 bottom-0 text-6xl text-brass-300 opacity-30">"</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-zinc-100 transition-colors -mr-4 md:-mr-6 focus:outline-none focus:ring-2 focus:ring-brass-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === current ? "bg-brass-500" : "bg-zinc-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 