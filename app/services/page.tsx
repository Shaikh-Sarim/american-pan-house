'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Smartphone, Headphones, PenTool, Palette, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'printing',
    icon: BookOpen,
    title: 'Print Publishing',
    description: 'Professional book printing with high-quality materials and binding options.',
    details: [
      'Hardcover and paperback options',
      'Custom binding designs',
      'Full-color interior printing',
      'Quantity discounts available',
    ],
    link: '/services/printing',
  },
  {
    id: 'ebook',
    icon: Smartphone,
    title: 'E-Book Publishing',
    description: 'Digital publishing services for Amazon Kindle, Apple Books, and more.',
    details: [
      'EPUB and MOBI formats',
      'Multi-platform distribution',
      'DRM-free options',
      'Pricing optimization',
    ],
    link: '/services/ebook',
  },
  {
    id: 'audiobook',
    icon: Headphones,
    title: 'Audiobook Production',
    description: 'Convert your book into professional audio format with voice talent.',
    details: [
      'Professional narration',
      'Studio-quality production',
      'Multi-voice production',
      'Audible distribution',
    ],
    link: '/services/audiobook',
  },
  {
    id: 'editing',
    icon: PenTool,
    title: 'Editing & Proofreading',
    description: 'Professional editing services to polish your manuscript to perfection.',
    details: [
      'Content editing',
      'Copy editing',
      'Proofreading',
      'Feedback reports',
    ],
    link: '/services/editing',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Book Design & Layout',
    description: 'Custom cover design and interior layout that makes your book stand out.',
    details: [
      'Cover design',
      'Interior layout',
      'Typography design',
      'Print-ready files',
    ],
    link: '/services/design',
  },
  {
    id: 'marketing',
    icon: DollarSign,
    title: 'Marketing & Distribution',
    description: 'Get your book in front of readers with our marketing and distribution services.',
    details: [
      'ISBN assignment',
      'Bookstore distribution',
      'Online marketing',
      'Social media promotion',
    ],
    link: '/services/marketing',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Publishing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Comprehensive publishing solutions tailored to help your book reach its full potential
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-brand-red"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 p-3 bg-brand-red rounded-full w-fit">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="text-brand-red font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-red-100">
            Contact us today to discuss your publishing needs and get a free quote
          </p>
          <Link href="/contact" className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
