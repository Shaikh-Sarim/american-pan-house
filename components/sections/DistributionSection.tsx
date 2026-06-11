'use client';

import { motion } from 'framer-motion';

export function DistributionSection() {
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

  const platforms = [
    { 
      name: 'Lulu', 
      logo: '/lulu.svg',
      url: 'https://www.lulu.com'
    },
    { 
      name: 'Barnes & Noble', 
      logo: '/barnes.svg',
      url: 'https://www.barnesandnoble.com'
    },
    { 
      name: 'Walmart', 
      logo: '/walmart.svg',
      url: 'https://www.walmart.com'
    },
    { 
      name: 'Apple Books', 
      logo: '/apple.jpg',
      url: 'https://books.apple.com'
    },
    { 
      name: "Powell's City of Books", 
      logo: '/powells.svg',
      url: 'https://www.powells.com'
    },
    { 
      name: 'Amazon KDP', 
      logo: '/amazon.png',
      url: 'https://kdp.amazon.com'
    },
    { 
      name: 'Ingram', 
      logo: '/ingram.png',
      url: 'https://www.ingramspark.com'
    },
    { 
      name: 'Google Play Books', 
      logo: '/google-play-books.png',
      url: 'https://play.google.com/books'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800 text-white">
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
            Sell your book everywhere
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Distribute your book worldwide on Amazon, Barnes & Noble, and through dozens of other stores
          </motion.p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="w-32 h-24 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-105"
              title={platform.name}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="max-w-[120px] max-h-[70px] object-contain"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image doesn't load
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<span class="text-center text-sm font-semibold text-gray-300">${platform.name}</span>`;
                  }
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
