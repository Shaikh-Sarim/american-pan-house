'use client';

import { motion } from 'framer-motion';

const logos = [
  { url: 'https://www.normanspublishing.com/Images/s6%20(1)%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s10%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s9%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s8%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s7%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s6%20(1)%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s5%20(1)%20(1)%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s4%20(1)%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s3%20(1)%20(1)%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s2%20(1).png' },
  { url: 'https://www.normanspublishing.com/Images/s1%20(1)%20(1)%20(1).png' },
];

export function LogoCarousel() {
  return (
    <section className="py-8 bg-brand-navy">
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-12 px-8"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set */}
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-20"
            >
              <img 
                src={logo.url} 
                alt="Partner logo" 
                className="h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}

          {/* Duplicate for infinite scroll effect */}
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-20"
            >
              <img 
                src={logo.url} 
                alt="Partner logo" 
                className="h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
