'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="American Pen House Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-xl font-bold">
                <span className="text-brand-red">American</span> Pen House
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering authors to share their stories with the world through professional publishing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-red transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-brand-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-brand-red transition-colors">
                  Publishing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-red transition-colors">
                  Editing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-red transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-red transition-colors">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brand-red" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-brand-red" />
                <span>info@americanpenhouse.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-red mt-1 flex-shrink-0" />
                <span>123 Literary Lane, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} American Pen House. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-gray-400 md:justify-end">
              <Link href="#" className="hover:text-brand-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-brand-red transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-brand-red transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
