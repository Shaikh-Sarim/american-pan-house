'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: 'Starter',
    price: '$1,499',
    description: 'Perfect for first-time authors',
    features: [
      'Manuscript evaluation',
      'Copyediting',
      'Basic cover design',
      'ISBN & formatting',
      'Online distribution',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$4,999',
    description: 'Our most popular choice',
    features: [
      'Everything in Starter',
      'Developmental editing',
      'Premium cover design',
      'Interior design',
      'Marketing plan',
      'Social media kit',
      'Priority support',
      'Author platform setup',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$8,999',
    description: 'Complete publishing solution',
    features: [
      'Everything in Professional',
      'Advanced marketing campaign',
      'Press release distribution',
      'Book launch strategy',
      'Media appearances coordination',
      'Ongoing marketing support',
      ' 24/7 dedicated support',
      'Quarterly business reviews',
    ],
    highlighted: false,
  },
];

export function PricingSection() {
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
    <section className="section-padding bg-brand-light">
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
            Publishing
            <span className="block text-brand-red">Packages</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Choose the package that fits your needs and budget. All packages include our full author support.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden transition-all ${
                pkg.highlighted
                  ? 'ring-2 ring-brand-red shadow-2xl md:scale-105'
                  : 'bg-white'
              }`}
            >
              {/* Header */}
              <div
                className={`p-8 ${
                  pkg.highlighted
                    ? 'bg-brand-red text-white'
                    : 'bg-white border-b-2 border-gray-100'
                }`}
              >
                <p
                  className={`text-sm font-semibold mb-2 ${
                    pkg.highlighted ? 'text-brand-red/30' : 'text-brand-red'
                  }`}
                >
                  {pkg.description}
                </p>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold">{pkg.price}</p>
              </div>

              {/* Features */}
              <div className={`p-8 ${pkg.highlighted ? 'bg-white' : 'bg-brand-light'}`}>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={
                          pkg.highlighted
                            ? 'text-brand-red'
                            : 'text-brand-red'
                        }
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    pkg.highlighted
                      ? 'btn-primary w-full block text-center'
                      : 'btn-secondary w-full block text-center'
                  }
                >
                  Choose {pkg.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6">Flexible Payment Options</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              We offer flexible payment plans to make publishing accessible. All packages are customizable based on your specific needs.
            </p>
            <p>
              Want a custom package? Schedule a consultation with our team to create the perfect publishing solution for your book.
            </p>
          </div>
          <Link href="/contact" className="btn-primary mt-6 inline-block">Schedule Consultation</Link>
        </motion.div>
      </div>
    </section>
  );
}
