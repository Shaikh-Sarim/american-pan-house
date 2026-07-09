'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  price: number;
}

export function PortfolioSection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    if (books.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [books]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Loading portfolio...</p>
        </div>
      </section>
    );
  }

  if (books.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Portfolio</h2>
          <p className="text-gray-600">No books available yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  const book = books[currentIndex];

  if (!book) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Loading portfolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-brand-navy">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Showcase of published books from our talented authors
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 h-[520px] md:h-[620px] overflow-hidden">
          {/* Left: Book Cover */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm aspect-[4/5]">
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-brand-red rounded-xl transform scale-105 z-0 opacity-90"></div>
              {/* Black inner border */}
              <div className="absolute inset-2 border-4 border-black rounded-lg z-0"></div>
              {/* Image */}
              <motion.img
                key={book.id}
                src={book.coverImage}
                alt={book.title}
                className="absolute inset-0 w-full h-full rounded-lg shadow-2xl object-cover relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right: Book Details */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div key={`details-${book.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {book.title}
              </h3>
              <p className="text-lg text-yellow-300 font-semibold mb-6">
                By {book.author}
              </p>

              <p className="text-gray-100 text-lg leading-relaxed mb-8">
                {book.description}
              </p>

              <Link href="/portfolio" className="bg-brand-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 inline-block">
                View More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevSlide}
            className="bg-brand-navy text-white p-3 rounded-full hover:bg-blue-900 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-red w-8'
                    : 'bg-gray-400 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-brand-navy text-white p-3 rounded-full hover:bg-blue-900 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Book Counter */}
        <div className="text-center">
          <p className="text-gray-100">
            Book {currentIndex + 1} of {books.length}
          </p>
        </div>
      </div>
    </section>
  );
}
