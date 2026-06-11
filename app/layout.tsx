import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'American Pen House | Professional Book Publishing Services',
  description:
    'Premium publishing services for authors. Professional editing, cover design, marketing, and distribution for your book.',
  keywords: [
    'book publishing',
    'self-publishing',
    'editing services',
    'cover design',
    'author support',
  ],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'American Pen House',
    description: 'Your Path to Publishing Excellence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
