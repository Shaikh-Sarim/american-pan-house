'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Award-Winning Author',
    content:
      'American Pen House transformed my manuscript into a bestseller. Their team was professional, attentive, and truly passionate about my work. I couldn\'t have done it without them!',
    rating: 5,
    image: '/testimonial-1.jpg',
  },
  {
    name: 'Michael Chen',
    title: 'Business Author',
    content:
      'The publishing process was seamless from start to finish. Their expertise in marketing helped my business book reach thousands of readers. Highly recommended!',
    rating: 5,
    image: '/testimonial-2.jpg',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Self-Published Author',
    content:
      'I was nervous about self-publishing, but the team at American Pen House made everything easy. They provided guidance every step of the way.',
    rating: 5,
    image: '/testimonial-3.jpg',
  },
  {
    name: 'James Wilson',
    title: 'Novel Author',
    content:
      'The quality of the final product exceeded my expectations. The cover design, interior layout, and editing were all exceptional. Thank you!',
    rating: 5,
    image: '/testimonial-4.jpg',
  },
  {
    name: 'Lisa Anderson',
    title: 'Memoir Writer',
    content:
      'Publishing my family\'s story was important to me, and American Pen House treated it with the respect it deserved. A truly wonderful experience.',
    rating: 5,
    image: '/testimonial-5.jpg',
  },
  {
    name: 'David Martinez',
    title: 'Poetry Author',
    content:
      'They understood my vision for my poetry collection and brought it to life beautifully. The attention to detail was remarkable.',
    rating: 5,
    image: '/testimonial-6.jpg',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Authors Say
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Real stories from authors who've published with American Pen House
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-8 border-l-4 border-brand-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-brand-red text-brand-red"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-bold text-brand-navy text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-brand-red text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Books Published' },
              { number: '1000+', label: 'Happy Authors' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-brand-red mb-2">
                  {stat.number}
                </div>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Be the Next Success Story</h2>
          <p className="text-lg mb-8 text-red-100">
            Join hundreds of authors who have achieved their publishing dreams
          </p>
          <button className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
