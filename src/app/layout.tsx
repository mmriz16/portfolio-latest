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
  title: 'mmriz16 | Miftakhul Rizky — UI/UX Designer',
  description: 'mmriz16. Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons. Contact: m.miftakhul.rizky4@gmail.com',
  keywords: ['mmriz16', 'Miftakhul Rizky', 'UI/UX', 'Icon Designer', 'Termicons', 'Designer', 'Portfolio'],
  authors: [{ name: 'Miftakhul Rizky', url: 'https://me.termicons.com' }],
  creator: 'mmriz16',
  publisher: 'Miftakhul Rizky',
  metadataBase: new URL('https://me.termicons.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://me.termicons.com',
    title: 'mmriz16 | Miftakhul Rizky — UI/UX Designer',
    description: 'mmriz16. Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons. Contact: m.miftakhul.rizky4@gmail.com',
    siteName: 'mmriz16 Portfolio',
    images: [
      {
        url: '/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'mmriz16 - Miftakhul Rizky Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mmriz16 | Miftakhul Rizky — UI/UX Designer',
    description: 'mmriz16. Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons.',
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
    jobTitle: 'UI/UX Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Termicons',
    },
    sameAs: [
      'https://www.instagram.com/mmriz16',
      'https://dribbble.com/mmriz16',
      'https://thenounproject.com/mmriz16',
      'https://www.linkedin.com/in/mmriz16',
      'https://github.com/mmriz16',
    ],
    email: 'm.miftakhul.rizky4@gmail.com',
    knowsAbout: ['UI/UX Design', 'Icon Design', 'Web Design', 'Mobile Design'],
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
