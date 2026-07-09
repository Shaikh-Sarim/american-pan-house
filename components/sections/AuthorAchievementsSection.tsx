'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const achievements = [
  {
    id: 1,
    image: '/achievement-1.png',
  },
  {
    id: 2,
    image: '/achievement-2.png',
  },
];

export function AuthorAchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = achievements[currentIndex];

  return (
    <section className="py-16 bg-brand-red">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Authors Achievements
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Whatever the goal for your book may be, we're here for you step-by-step to help you reach the finish line
          </p>
        </motion.div>

        {/* Banner Carousel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden mb-6 min-h-[260px] md:min-h-[360px]"
        >
          <div className="relative w-full h-[260px] md:h-[360px]">
            <Image
              src={current.image}
              alt={`Achievement ${current.id}`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? 'bg-white w-4 h-4'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-3xl mx-auto px-4"
        >
          <p className="text-lg leading-relaxed">
            American Pen House offers authors the opportunity to sell their works directly to readers, allowing them to earn the most high royalties.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
