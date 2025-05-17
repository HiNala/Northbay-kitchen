'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This is a mock interface for Instagram posts that we'd fetch from an API
interface InstagramPost {
  id: string;
  permalink: string;
  media_url: string;
  caption: string;
  username: string;
  timestamp: string;
}

interface InstagramGalleryProps {
  limit?: number;
  username?: string;
  showCaption?: boolean;
  showUsername?: boolean;
  showFollowButton?: boolean;
}

export default function InstagramGallery({ 
  limit = 6, 
  username = 'nbkbdesigncenter',
  showCaption = false,
  showUsername = true,
  showFollowButton = true
}: InstagramGalleryProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, we would fetch from Instagram API
    // For now, we'll use mock data
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const mockPosts: InstagramPost[] = Array.from({ length: 12 }, (_, i) => ({
        id: `mock-${i}`,
        permalink: 'https://instagram.com',
        media_url: `/mock/instagram/instagram-${(i % 6) + 1}.jpg`,
        caption: 'Beautiful kitchen design by Northbay Kitchen & Bath #kitchendesign #interiordesign',
        username: 'nbkbdesigncenter',
        timestamp: new Date().toISOString()
      }));
      
      setPosts(mockPosts.slice(0, limit));
      setLoading(false);
    }, 800);
  }, [limit]);

  return (
    <div className="w-full">
      {/* Instagram Header */}
      {(showUsername || showFollowButton) && (
        <div className="flex justify-between items-center mb-8">
          {showUsername && (
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-serif">@{username}</span>
            </div>
          )}
          
          {showFollowButton && (
            <Link 
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-zinc-200 hover:border-zinc-300 transition-colors text-sm"
            >
              Follow
            </Link>
          )}
        </div>
      )}
      
      {/* Instagram Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="aspect-square bg-zinc-100 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {posts.map((post) => (
            <Link 
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10"></div>
              <Image
                src={post.media_url}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 