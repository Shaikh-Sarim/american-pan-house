'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Fiction Author',
    book: 'The Whispered Pages',
    quote: 'American Pen House transformed my manuscript into a professional publication I\'m truly proud of. The entire team was supportive, knowledgeable, and efficient.',
    rating: 5,
    achievement: '250% Sales Growth',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Business Writer',
    book: 'Digital Transformation Roadmap',
    quote: 'The editing and marketing support made all the difference. My book is now used as a reference guide in my industry.',
    rating: 5,
    achievement: '500+ Corporate Sales',
  },
  {
    id: 3,
    name: 'Maria Gonzalez',
    role: 'Memoir Author',
    book: 'Bridges Between Cultures',
    quote: 'From concept to launch, American Pen House provided the expertise and guidance I needed to share my story with the world.',
    rating: 5,
    achievement: '3 International Awards',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Self-Help Author',
    book: 'Mindful Leadership',
    quote: 'The professional cover design and layout made my book stand out on shelves. Sales exceeded my expectations by 300%.',
    rating: 5,
    achievement: '10,000+ Copies Sold',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-brand-navy text-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Author Success
            <span className="block text-brand-red">Stories</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Real stories from authors who achieved their publishing dreams with American Pen House.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            key={current.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 mb-8 overflow-hidden"
          >
            <div className="min-h-[220px] md:min-h-[300px] flex flex-col justify-center">
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="#B22234"
                  className="text-brand-red"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              "{current.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-white/20 pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-lg">{current.name}</p>
                  <p className="text-gray-400 text-sm">{current.role}</p>
                  <p className="text-brand-red text-sm font-semibold mt-1">
                    "{current.book}"
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Achievement</p>
                  <p className="text-brand-red font-bold">{current.achievement}</p>
                </div>
              </div>
            </div>
              </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="p-3 bg-brand-red/20 hover:bg-brand-red/30 rounded-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-brand-red w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 bg-brand-red/20 hover:bg-brand-red/30 rounded-lg transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
