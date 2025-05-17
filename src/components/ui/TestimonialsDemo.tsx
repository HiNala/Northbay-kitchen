"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function NBKBTestimonials() {
  return (
    <AnimatedTestimonials
      title="What Our Clients Say"
      subtitle="Don't just take our word for it. See what our clients have to say about their experience with Northbay Kitchen & Bath Design Center."
      badgeText="Customer Reviews"
      testimonials={[
        {
          id: 1,
          name: "Nicole Wiseman",
          role: "Homeowner",
          company: "Sonoma County",
          content:
            "From the moment we walked in we felt good about this place, with someone right there at the door to greet us and assess our needs. Kari really cares about her clients and gives her full attention. We are so impressed with the customer service!",
          rating: 5,
          avatar: "/mock/avatars/avatar-1.jpg",
        },
        {
          id: 2,
          name: "Linda Reid",
          role: "Homeowner",
          company: "Petaluma",
          content:
            "Northbay Kitchen & Bath designed and remodeled my master bathroom and turned it into the master bath I have always wanted. Catherine improved upon the design with solutions I hadn't even thought of! Her brilliant design sense made an overwhelming process simply a pleasure.",
          rating: 5,
          avatar: "/mock/avatars/avatar-2.jpg",
        },
        {
          id: 3,
          name: "Jim Castille",
          role: "Client",
          company: "Santa Rosa",
          content:
            "Great experience with Northbay Kitchen and Bath!! All of the elements of our kitchen tied together perfectly from the cabinets to the island to the fixtures. Our new Miele appliances that Dave recommended are amazing!",
          rating: 5,
          avatar: "/mock/avatars/avatar-3.jpg",
        },
      ]}
      trustedCompanies={["Houzz", "Miele", "Sub-Zero", "Wolf", "Thermador"]}
      trustedCompaniesTitle="Trusted partners we work with"
    />
  );
} 