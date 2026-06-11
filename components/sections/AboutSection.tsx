'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, Target, Zap, BarChart3, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Industry veterans with 100+ years combined publishing experience',
  },
  {
    icon: Users,
    title: 'Author-Focused',
    description: 'Personalized support tailored to each author\'s unique needs',
  },
  {
    icon: Target,
    title: 'Market-Ready',
    description: 'Books polished to professional standards for maximum market appeal',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Efficient processes that get your book to market quickly',
  },
  {
    icon: BarChart3,
    title: 'High Royalties',
    description: '70% royalty rates, significantly higher than industry average',
  },
  {
    icon: Shield,
    title: 'Your Rights',
    description: 'Retain 100% ownership and control of your intellectual property',
  },
];

export function AboutSection() {
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

  return (
    <section id="about" className="section-padding bg-brand-light">
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
            Why Choose
            <span className="block text-brand-red">American Pen House?</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We combine expertise, innovation, and genuine author advocacy to deliver exceptional publishing outcomes.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-brand-red/10 rounded-lg w-fit mb-6">
                <benefit.icon size={28} className="text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
