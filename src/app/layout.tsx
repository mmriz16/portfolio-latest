import { Analytics } from '@vercel/analytics/next';
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
  title: 'Miftakhul Rizky — UI/UX Designer & Icon Designer',
  description: 'Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons. Creating intuitive digital experiences and beautiful iconography. Contact: m.miftakhul.rizky4@gmail.com',
  keywords: ['Miftakhul Rizky', 'UI/UX Designer', 'Icon Designer', 'Termicons', 'Designer', 'Portfolio', 'mmriz16'],
  authors: [{ name: 'Miftakhul Rizky', url: 'https://me.termicons.com' }],
  creator: 'Miftakhul Rizky',
  publisher: 'Miftakhul Rizky',
  metadataBase: new URL('https://me.termicons.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://me.termicons.com',
    title: 'Miftakhul Rizky — UI/UX Designer & Icon Designer',
    description: 'Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons. Creating intuitive digital experiences and beautiful iconography.',
    siteName: 'Miftakhul Rizky Portfolio',
    images: [
      {
        url: '/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Miftakhul Rizky - UI/UX Designer Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miftakhul Rizky — UI/UX Designer & Icon Designer',
    description: 'Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons.',
    images: ['/img/profile.jpg'],
    creator: '@mmriz16',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'XzUfjTLW4tgHOcr45mhYwwEHNnrL56ywEWF-BnZinTM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Miftakhul Rizky',
    alternateName: 'mmriz16',
    url: 'https://me.termicons.com',
    image: 'https://me.termicons.com/img/profile.jpg',
    jobTitle: 'UI/UX Designer & Icon Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Termicons',
    },
    sameAs: [
      'https://dribbble.com/mmriz16',
      'https://www.behance.net/mmriz16',
      'https://www.instagram.com/mmriz16',
      'https://thenounproject.com/mmriz16',
      'https://www.linkedin.com/in/mmriz16',
    ],
    email: 'm.miftakhul.rizky4@gmail.com',
    knowsAbout: ['UI/UX Design', 'Icon Design', 'Web Design', 'Mobile Design', 'Digital Design'],
    description: 'UI/UX Designer and Icon Designer, Founder of Termicons. Creating intuitive digital experiences and beautiful iconography.',
  };

  return (
    <html lang='en'>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
