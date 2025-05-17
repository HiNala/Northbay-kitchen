'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioProject } from '@/lib/api';
import { PortfolioProject } from '@/lib/api/types';

interface PortfolioProjectPageProps {
  params: {
    slug: string;
  };
}

export default function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = params;
  const router = useRouter();
  
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectData = await getPortfolioProject(slug);
        
        if (!projectData) {
          router.push('/portfolio');
          return;
        }
        
        setProject(projectData);
        if (projectData.images && projectData.images.length > 0) {
          setSelectedImage(projectData.images[0]);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-zinc-300 rounded-full border-t-zinc-800"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/portfolio" 
          className="px-6 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumbs */}
      <div className="bg-zinc-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-800">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-zinc-800">Portfolio</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-800">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Hero */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">{project.title}</h1>
            <p className="text-lg text-zinc-600">{project.category === 'kitchen' ? 'Kitchen' : 'Bathroom'} Remodel</p>
          </div>
          
          {/* Main Image */}
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden mb-6">
            {selectedImage ? (
              <div className="relative h-full w-full">
                <Image
                  src={selectedImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-zinc-500">No image available</p>
              </div>
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-12">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-[4/3] bg-zinc-100 rounded overflow-hidden ${
                    selectedImage === image ? 'ring-2 ring-zinc-900' : ''
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover object-center"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="w-full py-12 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif mb-6">Project Overview</h2>
              <p className="text-zinc-600 mb-6 whitespace-pre-line">
                {project.description}
              </p>
              
              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Key Features</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-zinc-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Project Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-medium mb-4 pb-4 border-b border-zinc-100">Project Information</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-zinc-500">Project Type</dt>
                    <dd className="font-medium">{project.category === 'kitchen' ? 'Kitchen' : 'Bathroom'} Remodel</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Location</dt>
                    <dd className="font-medium">Sonoma County, CA</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Completed</dt>
                    <dd className="font-medium">{new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}</dd>
                  </div>
                </dl>
              </div>
              
              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-brass-50 p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brass-400">
                      <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <blockquote className="text-zinc-700 italic mb-4">"{project.testimonial.quote}"</blockquote>
                  <p className="text-zinc-500 text-sm">{project.testimonial.author}</p>
                </div>
              )}
              
              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/start-planning"
                  className="w-full inline-block text-center px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif mb-8 text-center">More {project.category === 'kitchen' ? 'Kitchen' : 'Bathroom'} Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would be populated dynamically with other projects from the same category */}
            {/* For now, we'll show placeholder cards */}
            {[1, 2, 3].map((i) => (
              <Link href="/portfolio" key={i} className="group block">
                <div className="aspect-[4/3] bg-zinc-200 mb-4 rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-zinc-500 text-sm">Project Image</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-1">Modern {project.category === 'kitchen' ? 'Kitchen' : 'Bathroom'} Design</h3>
                <p className="text-zinc-600">{project.category === 'kitchen' ? 'Kitchen' : 'Bath'} Remodel</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Our expert designers are ready to help you create your dream {project.category === 'kitchen' ? 'kitchen' : 'bathroom'}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/start-planning"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 