'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PublishingPromotionSection() {
  return (
    <section className="py-20 bg-brand-red text-white">
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
              Elevate Your Story with American Pen House Publishing Services
            </h2>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              Experience superior book publishing with American Pen House. Our dedicated team crafts masterpieces, ensuring precision and vibrancy. Elevate your narrative with premium materials and attention to detail. Trust American Pen House for unmatched excellence in publishing services.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Explore Our Services <ArrowRight size={20} />
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
                src="/what-to-expect.jpg"
                alt="Library and publishing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
