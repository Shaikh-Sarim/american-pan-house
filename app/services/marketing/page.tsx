'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function MarketingPage() {
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
            Book Marketing & Distribution
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Maximize your book's potential with our comprehensive marketing services. We help your book reach its target audience.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Get Your Book in Front of Readers
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our marketing and distribution strategy is tailored to your book's genre and target audience. We use proven techniques to maximize visibility and sales.
              </p>
              <ul className="space-y-4">
                {[
                  'ISBN assignment and registration',
                  'Bookstore distribution network',
                  'Online marketing campaigns',
                  'Social media promotion',
                  'Press release distribution',
                  'Author platform building'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-red flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Marketing Strategy</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Market Analysis', desc: 'Analyze target audience and market trends' },
                  { step: '2', title: 'Strategy Development', desc: 'Create customized marketing strategy' },
                  { step: '3', title: 'Campaign Execution', desc: 'Launch multi-channel marketing campaigns' },
                  { step: '4', title: 'Distribution Setup', desc: 'Distribute through major retail channels' },
                  { step: '5', title: 'Performance Tracking', desc: 'Monitor sales and adjust strategy' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-red">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Book's Success?</h2>
          <p className="text-lg mb-8 text-red-100">
            Let our marketing experts create a winning strategy for your book
          </p>
          <Link href="/contact" className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
