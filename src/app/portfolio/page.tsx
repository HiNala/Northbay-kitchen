import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPortfolioProjects } from '@/lib/api';
import { PortfolioProject } from '@/lib/api/types';

export const metadata: Metadata = {
  title: 'Portfolio | Northbay Kitchen & Bath',
  description: 'Browse our kitchen and bath remodeling projects in Sonoma County.',
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  
  // Group projects by category
  const kitchenProjects = projects.filter((project: PortfolioProject) => project.category === 'kitchen');
  const bathProjects = projects.filter((project: PortfolioProject) => project.category === 'bath');

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
          
          {kitchenProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-500">Check back soon for our kitchen projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitchenProjects.map((project: PortfolioProject) => (
                <Link 
                  href={`/portfolio/${project.slug}`} 
                  key={project.id}
                  className="group block"
                >
                  <div className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden rounded-md">
                    {project.images && project.images.length > 0 ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-zinc-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-1 group-hover:text-zinc-700">{project.title}</h3>
                  <div className="flex items-center text-zinc-600">
                    <span className="mr-2">{new Date(project.date).getFullYear()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="text-zinc-900 font-medium group-hover:underline">View Project</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bath Projects */}
      <section className="w-full py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Bathroom Remodels</h2>
          
          {bathProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-500">Check back soon for our bathroom projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bathProjects.map((project: PortfolioProject) => (
                <Link 
                  href={`/portfolio/${project.slug}`} 
                  key={project.id}
                  className="group block"
                >
                  <div className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden rounded-md">
                    {project.images && project.images.length > 0 ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-zinc-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-1 group-hover:text-zinc-700">{project.title}</h3>
                  <div className="flex items-center text-zinc-600">
                    <span className="mr-2">{new Date(project.date).getFullYear()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="text-zinc-900 font-medium group-hover:underline">View Project</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
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