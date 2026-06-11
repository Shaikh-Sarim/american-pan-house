'use client';

import { motion } from 'framer-motion';
import { BookOpen, Smartphone, Headphones, PenTool, Palette, DollarSign } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: BookOpen,
    title: 'Book Printing',
  },
  {
    icon: Smartphone,
    title: 'eBook Publishing',
  },
  {
    icon: Headphones,
    title: 'Audiobooks',
  },
  {
    icon: PenTool,
    title: 'Book Editing &\nFormatting',
  },
  {
    icon: Palette,
    title: 'Book Design &\nFormatting',
  },
  {
    icon: DollarSign,
    title: 'Sell Your Book',
  },
];

export function SelfPublishingPackageSection() {
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
    <section className="py-20 bg-brand-red">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Just need printed books?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Get high-quality softcover or hardcover book printing (includes free shipping for orders of 25 books or more)
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="mb-4 p-6 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Icon size={40} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-relaxed whitespace-pre-line">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/services" className="px-12 py-4 bg-white text-brand-red font-bold text-lg rounded-2xl hover:bg-gray-100 transition-colors shadow-lg inline-block">
            Explore Self-Publishing Package
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
