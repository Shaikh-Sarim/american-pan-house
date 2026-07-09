'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: '01',
    title: 'Printing',
    description: 'Bring your book to life with our professional printing services. We provide high-quality print options, including cover design and layout, to ensure your book looks amazing.',
    image: '/book-cover-1.png',
  },
  {
    id: '02',
    title: 'Ghost Writing',
    description: 'Get your story written by the experts with our ghostwriting services. We bring your ideas to life with professional ghostwriting, editing, and publishing.',
    image: '/book-cover-2.png',
  },
  {
    id: '03',
    title: 'Marketing',
    description: 'Maximize your book\'s potential with our comprehensive marketing services. Our team of experts provides targeted strategies to help your book reach its audience.',
    image: '/book-cover-3.png',
  },
  {
    id: '04',
    title: 'Editing',
    description: 'Elevate your writing with our expert editing services. Our team of professionals provides comprehensive editing, proofreading, and formatting to polish your work.',
    image: '/book-cover-4.png',
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const current = services[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <section id="services" className="py-20 bg-blue-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Become a<span className="text-brand-red"> Best Selling</span> Author
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Achieve your dream of becoming a best-selling author with our comprehensive book writing, editing, publishing, and marketing services. Trust us to be your partner in your journey toward success.
          </p>
        </motion.div>

        {/* Service Carousel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 h-[520px] md:h-[560px] overflow-hidden"
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-cols-2'}`}>
            {/* Image Side */}
            <div className={`flex items-center justify-center ${!isEven ? 'lg:order-2' : ''}`}>
              <div className="relative w-full max-w-sm aspect-[4/5]">
                {/* Decorative Red Frame Background */}
                <div className="absolute inset-0 bg-brand-red rounded-2xl transform scale-105 z-0" />
                
                {/* Inner Black Border */}
                <div className="absolute inset-2 bg-black rounded-xl z-1" />
                
                {/* Image Container */}
                <div className="absolute inset-0 z-10 m-4 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`text-white ${!isEven ? 'lg:order-1' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-6xl font-bold text-brand-red">{current.id}</h3>
                  <h2 className="text-4xl font-bold">{current.title}</h2>
                </div>
                
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  {current.description}
                </p>
                
                <Link href="/services" className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors inline-block">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? 'bg-white w-4 h-4'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
