'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: 'Can you help with cover design and layout?',
      answer: 'Yes, we offer professional cover design and layout services. Our experienced design team will work with you to create a visually stunning cover that attracts readers and represents your book perfectly.',
    },
    {
      question: 'What file formats do you accept for printing?',
      answer: 'We accept a wide variety of file formats including PDF, DOCX, INDD, and more. Please contact our team for a complete list of supported formats and specific technical requirements for your project.',
    },
    {
      question: 'Can I order a small quantity of books or a large bulk order?',
      answer: 'Absolutely! We support both small print runs and large bulk orders. Whether you need 10 copies or 10,000, we have flexible printing options to suit your needs.',
    },
    {
      question: 'Are there digital versions available for American Pen House publications?',
      answer: 'Yes, we offer digital publishing services and can convert your book into e-book formats like EPUB and PDF for distribution on major digital platforms.',
    },
    {
      question: 'Can I submit my work for consideration by American Pen House?',
      answer: 'Yes! We welcome submissions from authors. Please visit our submissions page or contact us directly with your manuscript for review by our editorial team.',
    },
    {
      question: 'How can I stay updated on new releases and promotions?',
      answer: 'Subscribe to our newsletter on the website to receive updates about new releases, special promotions, and exclusive offers. You can also follow us on social media for the latest news.',
    },
    {
      question: 'Do you offer any discounts for bulk purchases or educational institutions?',
      answer: 'Yes, we offer special pricing for bulk orders and educational institutions. Please contact our sales team to discuss bulk pricing and institutional discounts.',
    },
    {
      question: 'How can I get in touch with American Pen House customer support?',
      answer: 'You can reach our customer support team through our contact form on the website, via email, or by phone. We typically respond within 24 business hours.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-blue-900 to-blue-800 text-white">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-blue-100 max-w-2xl mx-auto text-lg"
          >
            Find answers to common questions about our publishing services
          </motion.p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-2 border-blue-400 rounded-lg overflow-hidden bg-blue-950/40"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-400/10 transition-colors text-left"
              >
                <h3 className="font-bold text-lg text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-blue-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-blue-400/30"
                  >
                    <div className="px-6 py-4 bg-blue-400/5">
                      <p className="text-blue-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
