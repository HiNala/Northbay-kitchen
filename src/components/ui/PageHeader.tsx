'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: 'white' | 'light' | 'dark';
  children?: ReactNode;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  background = 'light',
  children 
}: PageHeaderProps) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-zinc-100',
    dark: 'bg-zinc-900 text-white'
  };

  const bgColor = bgColors[background];

  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
          <div className="w-16 h-0.5 bg-brass-300 mx-auto mb-6"></div>
          
          {subtitle && (
            <motion.p 
              className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 