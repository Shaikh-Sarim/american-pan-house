'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  price: number;
}

export default function PortfolioPage() {
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-600">Loading portfolio...</p>
        </div>
      </main>
    );
  }

  if (books.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-600">No books available yet</p>
        </div>
      </main>
    );
  }

  const currentBook = books[currentIndex];

  if (!currentBook) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-600">No book data available</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-32 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Author Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Discover the exceptional books we've helped bring to life
          </motion.p>
        </div>
      </section>

      {/* Featured Book Section */}
      <section className="py-20 bg-gradient-to-b from-white to-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Book Cover */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-brand-red rounded-lg transform scale-105 z-0" />
                <img
                  src={currentBook.coverImage || '/placeholder-book.png'}
                  alt={currentBook.title}
                  className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-brand-navy mb-2">
                {currentBook.title}
              </h2>
              <p className="text-2xl text-brand-red font-semibold mb-6">
                by {currentBook.author}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {currentBook.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-brand-navy">
                  ${currentBook.price}
                </span>
                <button className="btn-primary">
                  Learn More
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mb-8">
                {books.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'bg-brand-red w-8'
                        : 'bg-gray-300 w-3 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to book ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                  aria-label="Previous book"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-red bg-brand-red text-white hover:bg-red-700 hover:border-red-700 transition-colors"
                  aria-label="Next book"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Books Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-navy mb-16">
            All Published Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setCurrentIndex(idx)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow mb-4">
                  <div className="absolute inset-0 bg-brand-red z-0 transform scale-105" />
                  <img
                    src={book.coverImage || '/placeholder-book.png'}
                    alt={book.title}
                    className="relative z-10 w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-3">{book.author}</p>
                <p className="text-2xl font-bold text-brand-red">${book.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
