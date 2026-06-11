'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PrintingQualitySection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-2 lg:order-1"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl w-full h-full">
              <img
                src="/amazon-book-publishing.png"
                alt="Amazon book publishing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Publish Your Book With American Pen House
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Experience your book publishing service with American Pen House. Our meticulous process brings your stories to world, reflecting their timeless essence. Trust our commitment to excellence as we transform words into enduring narratives. Choose American Pen House for unparalleled quality in publishing.
            </p>
            <Link href="/services" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Publish Your Book
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
