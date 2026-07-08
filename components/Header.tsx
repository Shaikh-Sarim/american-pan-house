"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState<number>(80);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onResize = () => {
      setIsLarge(window.innerWidth >= 1024);
      // update spacer height to match header's rendered height
      if (headerRef.current) {
        setSpacerHeight(headerRef.current.offsetHeight);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header ref={headerRef} className="fixed w-full top-0 z-50 text-white">
      {/* Top info strip (desktop only) - rendered only on large screens to avoid mobile overlap */}
      {isLarge && (
        <div className="w-full bg-white/95 text-brand-navy">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8 py-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:info@americanpenhouse.com" className="hover:underline">info@americanpenhouse.com</a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={16} />
              <span>123 Literary Lane, New York, NY 10001</span>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-brand-navy/85 backdrop-blur-sm border-b border-brand-navy/30 relative">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-3 items-center py-4">
          {/* Left: Logo */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-brand-red">American</span> Pen House
            </Link>
          </div>

          {/* Center: Nav links */}
          <div className="col-span-1 flex justify-center">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-brand-red transition-colors text-lg">
                Home
              </Link>
              <Link href="/services" className="hover:text-brand-red transition-colors text-lg">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-brand-red transition-colors text-lg">
                Portfolio
              </Link>
              <Link href="/about" className="hover:text-brand-red transition-colors text-lg">
                About
              </Link>
              <Link href="/testimonials" className="hover:text-brand-red transition-colors text-lg">
                Testimonials
              </Link>
              <Link href="/contact" className="hover:text-white/90 transition-colors text-lg">
                Contact
              </Link>
            </div>
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="col-span-1 flex items-center justify-end gap-4">
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Absolute CTA on the right edge for desktop */}
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2">
          <Link href="/contact" className="bg-brand-red text-white rounded-full px-6 py-2 shadow-md">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy/90 backdrop-blur-sm border-t border-brand-navy/30">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3 flex flex-col">
            <Link href="/" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/portfolio" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="/about" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/testimonials" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="/contact" className="py-2 hover:text-brand-red transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link href="/contact" className="mt-2 text-center bg-brand-red text-white px-4 py-2 rounded-full" onClick={() => setIsOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}

      {/* Spacer to prevent fixed header from overlapping content */}
      <div style={{ height: spacerHeight }} aria-hidden="true" />
    </header>
  );
}
