'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="pt-32 pb-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url(/background.png)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT: Text Content */}
          <div>
            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-4"
            >
              <img 
                src="/logo.png" 
                alt="American Pen House Logo" 
                className="h-16 w-auto object-contain"
              />
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              American Pen House -
              <span className="block text-brand-red">Your Pathway to Exceptional Book Publishing</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-100 mb-8 leading-relaxed"
            >
              Embark on a journey of literary distinction with American Pen House – Your Premier Destination for Top-Ranked Book Publishing. We take pride in unleashing brilliance onto every page, offering meticulous editing, captivating cover designs, and a commitment to the highest standards of quality.
            </motion.p>

            {/* Rating/Social Proof */}
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#B22234" className="text-brand-red" />
                ))}
              </div>
              <span className="text-brand-red font-bold text-lg">4.96/5</span>
              <span className="text-gray-600">Trusted by 500+ Authors</span>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-3"
            >
              {/* Trustpilot Badge */}
              <div className="flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://www.normanspublishing.com/Images/trustpilot-logo%20(1)%20(1)%20(1)%20(1)%20(1)%20(1)%20(1).png" 
                  alt="Trustpilot" 
                  className="h-8 w-auto"
                />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link href="#contact" className="btn-primary inline-block">
                Get A Quote
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <img 
              src="/hero.png" 
              alt="Professional Publishing" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
