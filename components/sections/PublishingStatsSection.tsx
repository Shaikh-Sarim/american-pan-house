'use client';

import { motion } from 'framer-motion';

export function PublishingStatsSection() {
  const stats = [
    {
      number: '900+',
      label: 'Published Authors',
    },
    {
      number: '250+',
      label: 'Returning Authors',
    },
    {
      number: '200+',
      label: 'Retail partners worldwide',
    },
  ];

  return (
    <section className="py-20 bg-brand-red text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          American Pen House at a quick glance
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-4">
                  {stat.number}
                </h3>
              </motion.div>
              <div className="flex justify-center mb-4">
                <div className="w-1 h-16 bg-yellow-300 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-100">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
