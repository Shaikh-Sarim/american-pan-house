'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Wand2, BookMarked, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: 1,
    title: 'Submit Your Manuscript',
    description: 'Share your completed manuscript with our team. We\'ll review it and provide initial feedback on its potential.',
  },
  {
    icon: Wand2,
    number: 2,
    title: 'Professional Editing',
    description: 'Our expert editors refine your work, ensuring it meets publication standards while maintaining your unique voice.',
  },
  {
    icon: BookMarked,
    number: 3,
    title: 'Design & Layout',
    description: 'Professional design team creates a stunning cover and formats your interior for optimal reading experience.',
  },
  {
    icon: Rocket,
    number: 4,
    title: 'Publishing & Distribution',
    description: 'Your book is published and distributed to major retailers, bookstores, and online platforms worldwide.',
  },
  {
    icon: TrendingUp,
    number: 5,
    title: 'Marketing & Growth',
    description: 'We provide ongoing marketing support to help your book reach readers and build your author platform.',
  },
];

export function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="section-padding bg-white">
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
            Our Publishing
            <span className="block text-brand-red">Process</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Follow our proven 5-step process to transform your manuscript into a published success.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-brand-red/30 via-brand-red to-brand-red/30"></div>

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-brand-light rounded-lg p-6 text-center h-full flex flex-col">
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-4">
                    <div className="p-4 bg-white rounded-lg inline-flex">
                      <step.icon size={32} className="text-brand-red" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to start your publishing journey?
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Begin Your Publishing Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
