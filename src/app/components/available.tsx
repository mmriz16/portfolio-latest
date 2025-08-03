'use client';
import Container from '@/app/components/container';

export default function Available() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="col-10">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-5">
              <h1 className="text-base">Indonesia Based</h1>
              <p className="text-base text-white/50">Working Globally</p>
            </div>
            <div className="col-span-4">
              <h1 className="text-base">Building</h1>
              <a className='text-base text-white/50' href="https://aghatis.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="bx bx-arrow-up-right-stroke"></i>PT Aghatis Karya Indonesia</a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <button className='text-base bg-white px-5 py-3 rounded-full text-black'>Contact Me</button>
        </div>
      </div>
    </Container>
  );
}