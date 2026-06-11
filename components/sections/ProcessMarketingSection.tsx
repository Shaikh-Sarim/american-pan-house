'use client';

import { motion } from 'framer-motion';

export function ProcessMarketingSection() {
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

  const steps = [
    {
      number: '01',
      title: 'CONNECT WITH US',
      description: 'The first step is to contact us by filling out the form on the website or sending a message, and one of our customer service representatives will get back to you.',
    },
    {
      number: '02',
      title: 'BOOK REVIEW',
      description: 'Our marketing team will then review and analyze your book to find the right audience and target market for your book\'s conversion.',
    },
    {
      number: '03',
      title: 'RESEARCH AND STRATEGY / LAUNCH CAMPAIGN',
      description: 'Based on your book\'s category, demographics, and budget, we create a marketing strategy to reach your audience. Email, Facebook, advertising. Good blogs and social media promote your book engage.',
    },
    {
      number: '04',
      title: 'ANALYZE THE RESULTS',
      description: 'Analyze the results of marketing efforts and make adjustments as needed to optimize performance and drive sales and conversions.',
    },
  ];

  return (
    <section className="section-padding bg-brand-red text-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            How Do We Work?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/90 max-w-2xl mx-auto text-lg"
          >
            We have a very simple and easy-to-follow process.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-2 border-dashed border-blue-400 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all"
            >
              {/* Number */}
              <div className="text-4xl font-bold text-blue-400 mb-4 font-mono">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-white leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
