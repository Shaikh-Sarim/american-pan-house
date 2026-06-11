'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Team',
    description: 'Our team has won multiple publishing industry awards for excellence and innovation.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personalized support from experienced publishing professionals at every step.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Get your book published quickly without compromising on quality.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'Rigorous quality control ensures your book meets the highest industry standards.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About American Pen House
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading the publishing revolution with innovation, quality, and author-first values
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At American Pen House, we believe every story deserves to be told. Our mission is to
                empower authors with the tools, resources, and expertise needed to bring their
                literary dreams to life. We've helped over 500 authors successfully publish their
                books across multiple platforms.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a focus on innovation and quality, we've revolutionized the publishing industry
                by making it accessible, affordable, and author-friendly. Your success is our success.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-brand-red rounded-lg opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-brand-navy to-blue-900 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center px-8">
                  <span className="text-5xl font-bold text-brand-red">500+</span>
                  <br />
                  <span className="text-2xl mt-4 block">Books Published</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg">Industry-leading features and support</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 p-3 bg-brand-red rounded-full w-fit mx-auto">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Expertise</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A combined 100+ years of publishing industry experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Editing & Design', desc: 'Professional editors and designers' },
              { title: 'Distribution', desc: 'Global reach across all major retailers' },
              { title: 'Marketing', desc: 'Strategic marketing and promotion' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-brand-navy to-blue-900 text-white rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Publishing Family</h2>
          <p className="text-lg mb-8 text-red-100">
            Partner with us to bring your book to life
          </p>
          <button className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
