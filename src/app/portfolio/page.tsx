import { Metadata } from 'next';
import Link from 'next/link';
import { getPortfolioProjects } from '@/lib/api';
import PortfolioGallery from '@/components/ui/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Portfolio | Northbay Kitchen & Bath',
  description: 'Browse our kitchen and bath remodeling projects in Sonoma County.',
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  
  // Group projects by category
  const kitchenProjects = projects.filter(project => project.category === 'kitchen');
  const bathProjects = projects.filter(project => project.category === 'bath');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Portfolio</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Browse our completed kitchen and bath remodeling projects in Sonoma County.
          </p>
        </div>
      </section>

      {/* Kitchen Projects */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Kitchen Remodels</h2>
          <PortfolioGallery projects={kitchenProjects} category="kitchen" />
        </div>
      </section>

      {/* Bath Projects */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Bathroom Remodels</h2>
          <PortfolioGallery projects={bathProjects} category="bath" />
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
              className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
            >
              Start Planning
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 