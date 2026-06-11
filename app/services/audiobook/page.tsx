'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AudiobookPage() {
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
            Professional Audiobook Production
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Convert your book into professional audio format with expert voice talent.
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
                Bring Your Words to Life
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Audiobooks are one of the fastest growing markets in publishing. Our professional production team ensures your book is narrated to perfection with studio-quality sound.
              </p>
              <ul className="space-y-4">
                {[
                  'Professional voice narrators',
                  'Studio-quality audio production',
                  'Multi-voice narration options',
                  'Audible distribution included',
                  'Mastering and editing',
                  'Copyright-compliant production'
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
              <h3 className="text-2xl font-bold mb-6">Production Timeline</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Manuscript Review', desc: 'Analyze your book for narration' },
                  { step: '2', title: 'Voice Selection', desc: 'Choose from our expert narrators' },
                  { step: '3', title: 'Recording', desc: 'Professional studio recording sessions' },
                  { step: '4', title: 'Post-Production', desc: 'Mastering, editing, and quality check' },
                  { step: '5', title: 'Distribution', desc: 'Published on Audible and other platforms' }
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
          <h2 className="text-4xl font-bold mb-6">Ready for Audiobook Production?</h2>
          <p className="text-lg mb-8 text-red-100">
            Tap into the growing audiobook market
          </p>
          <Link href="/contact" className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Get a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
