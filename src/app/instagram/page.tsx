import { Metadata } from 'next';
import Link from 'next/link';
import InstagramGallery from '@/components/ui/InstagramGallery';

export const metadata: Metadata = {
  title: 'Instagram Gallery | Northbay Kitchen & Bath',
  description: 'Follow our latest projects and designs on Instagram.',
};

export default function InstagramPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Follow Our Journey</h1>
          <div className="w-16 h-0.5 bg-zinc-300 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Stay inspired with our latest kitchen and bathroom designs on Instagram.
          </p>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <InstagramGallery limit={12} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-zinc-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Space?</h2>
          <div className="w-16 h-0.5 bg-zinc-300 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 mb-10">
            Schedule a consultation with one of our expert designers to start planning your dream kitchen or bathroom.
          </p>
          <Link
            href="/start-planning"
            className="px-10 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 