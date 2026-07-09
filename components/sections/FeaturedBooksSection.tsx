'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const getButtonLink = (buttonText: string): string => {
  switch (buttonText) {
    case 'Guidance And Support':
      return '/about';
    case 'Royalties':
      return '/services';
    case 'Publish Your Book':
      return '/contact';
    case 'Learn More':
      return '/about';
    default:
      return '/contact';
  }
};

const books = [
  {
    id: 1,
    title: 'Guidance and support',
    description: 'While working with American Pen House, you would receive personalized help and mentorship at every step. Our team is committed to assisting you in obtaining the necessary guidance.',
    buttonText: 'Guidance And Support',
    image: '/book-cover-1.png',
  },
  {
    id: 2,
    title: 'High Royalties',
    description: 'Authors at American Pen House are paid 75% of net royalties, which is made possible with our delivery system. We also provide transparency over the distribution costs without inflating them.',
    buttonText: 'Royalties',
    image: '/book-cover-2.png',
  },
  {
    id: 3,
    title: 'Ready to Pen Your Own Story?',
    description: 'Do you want to go on an adventure that is for the rest of your life? Immerse yourself into the realm of storytelling and let us help you share your story with the words!',
    buttonText: 'Publish Your Book',
    image: '/book-cover-3.png',
  },
  {
    id: 4,
    title: 'Captivate Readers with Exceptional Prose Craftsmanship',
    description: 'Allow yourself to partake in an unprecedented adventure with our splendid prose technique. We stand out in the market of American Pen House.',
    buttonText: 'Learn More',
    image: '/book-cover-4.png',
  },
];

export function FeaturedBooksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? books.length - 1 : prev - 1
    );
  };

  const current = books[currentIndex];

  return (
    <section className="py-20 bg-brand-navy">
      <div className="section-container">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[520px] md:min-h-[620px] overflow-hidden"
        >
          {/* LEFT: Book Cover with Red Frame */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5]">
              {/* Decorative Red Frame Background */}
              <div className="absolute inset-0 bg-brand-red rounded-3xl transform scale-105 z-0" />
              
              {/* Inner Black Border */}
              <div className="absolute inset-3 bg-black rounded-2xl z-1" />
              
              {/* Image Container */}
              <div className="absolute inset-0 z-10 m-4 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {current.title}
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {current.description}
              </p>
              <Link href={getButtonLink(current.buttonText)} className="px-8 py-3 bg-white text-brand-navy font-bold rounded-full hover:bg-gray-100 transition-colors inline-block">
                {current.buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-16">
          {/* Dot Indicators */}
          <div className="flex gap-3">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  currentIndex === index
                    ? 'bg-white w-4 h-4'
                    : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-3 bg-brand-red text-white hover:bg-brand-red/90 rounded-full transition-colors shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 bg-brand-red text-white hover:bg-brand-red/90 rounded-full transition-colors shadow-lg"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
