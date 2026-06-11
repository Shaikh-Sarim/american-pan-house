'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function WhatToExpectSection() {
  return (
    <section className="py-20 bg-brand-red">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT: Image */}
          <div className="flex items-center justify-center">
            <motion.img
              src="/what-to-expect.jpg"
              alt="Books Stack"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              What You Can Anticipate When Collaborating With Us!
            </h2>

            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              At American Pen House, we not only guide you through the publishing journey but also connect you with the right vendors to bring your book to life. Our mission is to help you publish the book you envision, ensuring the process is joyful and exciting rather than stressful. As our founder puts it, "At American Pen House, we aim to help authors bring their vision to life—smoothly, quickly, and affordably."
            </p>

            <Link href="/about" className="px-10 py-4 bg-white text-brand-red font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-block">
              LEARN MORE ABOUT US
            </Link>

            <div className="mt-12 pt-8 border-t border-white/30">
              <p className="text-white font-bold text-lg">JOIN OUR FACEBOOK PAGE</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
