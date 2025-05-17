'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioProject } from '@/lib/api/types';
import ImageLightbox from './ImageLightbox';

interface PortfolioGalleryProps {
  projects: PortfolioProject[];
  category?: 'kitchen' | 'bath' | 'all';
}

export default function PortfolioGallery({ projects, category = 'all' }: PortfolioGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<PortfolioProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter projects by category if specified
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
  
  // Lightbox handlers
  const openLightbox = (project: PortfolioProject, imageIndex: number = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-zinc-500">No projects available in this category yet.</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group">
            <div 
              className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden rounded-md cursor-pointer"
              onClick={() => openLightbox(project, 0)}
            >
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
            <div className="flex items-center justify-between text-zinc-600">
              <span>{new Date(project.date).getFullYear()}</span>
              <div className="flex space-x-4">
                <button 
                  onClick={() => openLightbox(project, 0)}
                  className="text-zinc-900 font-medium hover:underline inline-flex items-center"
                >
                  View Gallery
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </button>
                
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="text-zinc-900 font-medium hover:underline inline-flex items-center"
                >
                  Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {currentProject && (
        <ImageLightbox
          images={currentProject.images || []}
          alt={currentProject.title}
          isOpen={lightboxOpen}
          initialIndex={currentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
} 