'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
    <section id="contact" className="section-padding bg-white">
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
            Let's Talk About Your
            <span className="block text-brand-red">Publishing Dreams</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Ready to publish your book? Get in touch with our team for a free consultation and personalized publishing plan.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="p-4 bg-brand-red/10 rounded-lg h-fit">
                <Phone className="text-brand-red" size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9AM-5PM EST</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="p-4 bg-brand-red/10 rounded-lg h-fit">
                <Mail className="text-brand-red" size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-600">info@americanpenhouse.com</p>
                <p className="text-gray-500 text-sm">We reply within 24 hours</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="p-4 bg-brand-red/10 rounded-lg h-fit">
                <MapPin className="text-brand-red" size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Address</h4>
                <p className="text-gray-600">123 Literary Lane</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-brand-light p-8 rounded-xl"
          >
            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                <p className="text-green-800">
                  Thank you! We'll be in touch shortly.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <div className="mb-6">
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                placeholder="Tell us about your publishing goals..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
