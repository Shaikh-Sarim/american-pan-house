'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-brand-navy text-white shadow-md">
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-brand-red">American</span> Pen House
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-brand-red transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-brand-red transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-brand-red transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-brand-red transition-colors">
            About
          </Link>
          <Link href="/testimonials" className="hover:text-brand-red transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
          <Link href="/login" className="text-xs bg-brand-red px-3 py-2 rounded hover:bg-red-700 transition-colors">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-red">
          <div className="section-container py-4 space-y-3 flex flex-col">
            <Link
              href="/"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/testimonials"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:text-brand-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="btn-primary mt-2 text-center text-xs"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
