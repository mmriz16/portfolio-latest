'use client';
import Container from '@/app/components/container';

export default function Available() {
  return (
    <Container>
      <div className="grid grid-cols-10 grid-rows-1 gap-7 px-6">
        <div className="col-span-8">
          <div className="grid grid-cols-8 grid-rows-1">
            <div className="col-span-4">
              <h1 className="text-base">Indonesia Based</h1>
              <p className="text-base text-white/50">Working Globally</p>
            </div>
            <div className="col-span-4 col-start-5">
              <h1 className="text-base">Now Building</h1>
              <a className='text-base text-white/50' href="https://aghatis.vercel.app/" target="_blank" rel="noopener noreferrer">PT Aghatis Karya Indonesia</a>
            </div>
          </div>
        </div>
        <div className="col-span-2 col-start-9 flex justify-end items-end">
          <button className='text-base bg-white px-5 py-3 rounded-full text-black'>Contact Me</button>
        </div>
      </div>
    </Container>
  );
}