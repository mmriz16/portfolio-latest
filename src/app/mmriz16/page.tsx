import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'mmriz16 | Miftakhul Rizky — UI/UX Designer',
  description: 'mmriz16. Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons. Contact: m.miftakhul.rizky4@gmail.com',
  keywords: ['mmriz16', 'Miftakhul Rizky', 'UI/UX', 'Icon Designer', 'Termicons'],
  alternates: {
    canonical: '/mmriz16',
  },
  openGraph: {
    title: 'mmriz16 | Miftakhul Rizky — UI/UX Designer',
    description: 'mmriz16. Miftakhul Rizky, UI/UX Designer and icon designer. Founder Termicons.',
    url: 'https://me.termicons.com/mmriz16',
    images: [
      {
        url: '/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'mmriz16 - Miftakhul Rizky Profile',
      },
    ],
  },
};

export default function Mmriz16Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/img/profile.jpg"
              alt="mmriz16 - Miftakhul Rizky Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-white/20"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            mmriz16
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Miftakhul Rizky — UI/UX Designer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            mmriz16 is the creative identity of Miftakhul Rizky, a passionate UI/UX Designer and icon designer. 
            As the founder of Termicons, mmriz16 specializes in creating intuitive digital experiences and 
            beautiful iconography that bridges the gap between functionality and aesthetics.
          </p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">About mmriz16</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Design Philosophy</h4>
              <p className="text-gray-300 leading-relaxed">
                mmriz16 believes in creating designs that are not just visually appealing but also 
                functionally superior. Every pixel serves a purpose, every interaction tells a story.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Expertise</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• UI/UX Design</li>
                <li>• Icon Design & Illustration</li>
                <li>• Web & Mobile Design</li>
                <li>• Design Systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Connect with mmriz16</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="https://www.instagram.com/mmriz16" 
              target="_blank" 
              rel="noopener noreferrer me"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Instagram
            </Link>
            <Link 
              href="https://dribbble.com/mmriz16" 
              target="_blank" 
              rel="noopener noreferrer me"
              className="bg-gradient-to-r from-pink-400 to-red-500 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Dribbble
            </Link>
            <Link 
              href="https://thenounproject.com/mmriz16" 
              target="_blank" 
              rel="noopener noreferrer me"
              className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Noun Project
            </Link>
            <Link 
              href="https://www.linkedin.com/in/mmriz16" 
              target="_blank" 
              rel="noopener noreferrer me"
              className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-gray-400">
            Email: <a href="mailto:m.miftakhul.rizky4@gmail.com" className="text-blue-400 hover:underline">m.miftakhul.rizky4@gmail.com</a>
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to work with mmriz16?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s create something amazing together. Explore the full portfolio and get in touch.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              View Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}