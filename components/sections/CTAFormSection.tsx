'use client';

import { motion } from 'framer-motion';
import { FileText, BarChart3, CheckCircle, Users } from 'lucide-react';
import { useState } from 'react';

export function CTAFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      icon: <FileText size={32} />,
      title: 'Share your manuscript or project idea',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Receive a customized publishing plan and quotation',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Approve the plan and begin the process',
    },
    {
      icon: <Users size={32} />,
      title: 'Work with expert teams for editing, design, and book publishing services',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-brand-navy via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="section-container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Publish Your Book with a Trusted Book Publishing Company USA?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                If you're ready to turn your manuscript into a professionally published book, American Pen House is here to guide you every step of the way. Tell us about your project and our team will provide a clear roadmap according to your goals.
              </p>
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">STEP-BY-STEP PUBLISHING PROCESS</h3>
              <p className="text-blue-100 mb-6">Getting started is easy:</p>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className="text-yellow-400 flex-shrink-0 mt-1">
                      {step.icon}
                    </div>
                    <p className="text-blue-50 font-semibold">{step.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-2xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sign Up To Avail 50% Discount
              </h3>
              <p className="text-gray-600">Discuss Your Project With Our Experts</p>
            </div>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                <p className="font-semibold">Thank you! We'll be in touch soon.</p>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                <p className="font-semibold">{error}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-brand-red text-gray-900 placeholder-gray-500 disabled:bg-gray-100"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-brand-red text-gray-900 placeholder-gray-500 disabled:bg-gray-100"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-brand-red text-gray-900 placeholder-gray-500 disabled:bg-gray-100"
                />

                <textarea
                  name="message"
                  placeholder="Write Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-brand-red text-gray-900 placeholder-gray-500 resize-none disabled:bg-gray-100"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Get Started Now'}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
