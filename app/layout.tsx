import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Frame in Goa',
  description: 'Premium Builder Pass generator for Hacker House Goa 2026.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
