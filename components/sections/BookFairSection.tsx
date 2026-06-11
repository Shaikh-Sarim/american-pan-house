'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function BookFairSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-navy to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unleash the Power of Your Book with American Pen House
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Amidst a bustling book fair, enthusiasts delve into diverse titles, drawn by the promise of new worlds. Conversations ignite, recommendations flow, and the air hums with literary discussions. Here, bibliophiles connect, exchange stories, and celebrate the magic of words. In this vibrant tapestry, discovery and appreciation intertwine, weaving a rich fabric of literary exploration.
            </p>
            <Link href="/contact" className="inline-block bg-white text-brand-navy px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Sell Your Book
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl w-full h-full">
              <img
                src="/amazonkdp.png"
                alt="Amazon KDP publishing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
