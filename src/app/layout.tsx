import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import 'boxicons/css/boxicons.min.css';
import SmoothScrolling from './components/SmoothScrolling';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Miftakhul Rizky',
  description: 'Portfolio Design by Miftakhul Rizky',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
