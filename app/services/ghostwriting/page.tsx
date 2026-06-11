'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function GhostwritingPage() {
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
            Professional Ghost Writing
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Get your story written by the experts. We bring your ideas to life with professional ghostwriting, editing, and publishing.
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
                Turn Your Ideas Into Published Works
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our team of professional ghostwriters specializes in creating compelling narratives across multiple genres. Whether you have a full outline or just an idea, we'll work with you to bring your vision to life.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert ghostwriting team',
                  'Multiple genre expertise',
                  'Custom writing tailored to your voice',
                  'Complete confidentiality agreements',
                  'Professional editing included',
                  'Dedicated project manager'
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
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Consultation', desc: 'Initial meeting to understand your vision' },
                  { step: '2', title: 'Outline Development', desc: 'We create a detailed outline together' },
                  { step: '3', title: 'Writing', desc: 'Our writers craft your book chapter by chapter' },
                  { step: '4', title: 'Revision', desc: 'Multiple rounds of revision for perfection' },
                  { step: '5', title: 'Final Delivery', desc: 'Complete manuscript ready for publication' }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-lg mb-8 text-red-100">
            Schedule a consultation with our ghostwriting team today
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
