"use client";

import { useState } from 'react';

export function ConsultationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name || name.trim().length < 2) next.name = 'Please enter your name (min 2 characters)';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email';
    if (!message || message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message || 'Thanks — we will contact you shortly.' });
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        setStatus({ type: 'error', message: data.message || 'Submission failed. Please try again.' });
        if (data.errors && typeof data.errors === 'object') {
          const flattened: Record<string, string> = {};
          Object.entries(data.errors).forEach(([k, v]) => {
            flattened[k] = Array.isArray(v) ? v.join(', ') : String(v);
          });
          setErrors(flattened);
        }
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-brand-red/80">
      <h3 className="text-2xl font-semibold text-brand-red mb-2">Free Consultation</h3>
      <p className="text-brand-navy/80 mb-4">Start with a free, no-obligation consultation about your book.</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-brand-navy">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-brand-red bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/60 focus:outline-none focus:ring-2 focus:ring-brand-red/60"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-navy">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-brand-red bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/60 focus:outline-none focus:ring-2 focus:ring-brand-red/60"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-navy">What would you like to discuss?</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-brand-red bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/60 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-brand-red/60"
            placeholder="Briefly describe your project or questions"
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-lg bg-brand-red px-4 py-2 text-white font-medium hover:opacity-95 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Request Consultation'}
          </button>

          <span className="text-sm text-gray-500">Or call us: <strong className="text-brand-navy">(555) 123-4567</strong></span>
        </div>

        {status && (
          <div className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`} role="status" aria-live="polite">
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default ConsultationForm;
