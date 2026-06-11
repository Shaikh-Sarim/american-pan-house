'use client';

import { motion } from 'framer-motion';

const platforms = [
  { name: 'Logo 1', logo: '/logo-0.webp' },
  { name: 'Logo 2', logo: '/logo-1.png' },
  { name: 'Logo 3', logo: '/logo-2.webp' },
  { name: 'Logo 4', logo: '/logo-3.webp' },
  { name: 'Logo 5', logo: '/logo-4.png' },
  { name: 'Logo 6', logo: '/logo-5.webp' },
  { name: 'Logo 7', logo: '/logo-6.webp' },
  { name: 'Logo 8', logo: '/logo-7.png' },
  { name: 'Logo 9', logo: '/logo-8.webp' },
];

export function TopTierPlatformsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section className="py-20 bg-brand-navy">
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
            Top Tier Platforms Featuring American Pen House
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are excited to announce the open call for article submission on these platforms. We welcome articles from diverse perspectives, covering a wide range of topics that provoke thought, inspire innovation, and spark meaningful conversations.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                title={platform.name}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-scrolling Logo Carousel */}
        <div className="relative w-full overflow-hidden bg-white/5 rounded-lg py-8 mb-8">
          <motion.div
            className="flex gap-8 px-8"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set */}
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-16 min-w-max"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  title={platform.name}
                />
              </div>
            ))}

            {/* Duplicate for infinite scroll effect */}
            {platforms.map((platform, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-16 min-w-max"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  title={platform.name}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
