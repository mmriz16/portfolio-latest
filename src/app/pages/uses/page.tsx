'use client';

import Container from '@/app/components/container';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function Uses() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col gap-7 px-6 mt-24 mb-12">
          <h1 className="text-4xl font-bold text-white">Uses</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
}
