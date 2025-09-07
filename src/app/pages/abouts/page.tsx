'use client';
import Image from 'next/image';

import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Articles() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-2 grid-rows-1 gap-12 px-6 mt-24 mb-12">
          <div className='flex flex-col gap-12'>
            <div className="w-full max-w-[650px]">
              <h1 id='title' className="text-[46px] font-bold leading-[1.1]">I&apos;m Miftakhul Rizky. I live in Bandung City, where I design the future.</h1>
            </div>
            <div className="flex flex-col gap-6">
              <p id='desc' className="text-base font-medium text-white/50">I&apos;ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
              <p id='desc' className="text-base font-medium text-white/50">The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister&apos;s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I&apos;d be able to get to orbit.</p>
              <p id='desc' className="text-base font-medium text-white/50">I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad&apos;s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
              <p id='desc' className="text-base font-medium text-white/50">Today, I&apos;m the founder of Planetaria, where we&apos;re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
            </div>
          </div>
          <div>
            <Image className='rounded-2xl rotate-2 overflow-hidden relative -z-10' src="/img/me.jpg" alt="profile" width={460} height={100} />
            <ul className='flex gap-2 mt-12'>
              <li className='text-sm p-4 border border-white/10 rounded-xl hover:cursor-pointer hover:bg-white/10 hover:border-white/0'>Github</li>
              <li className='text-sm p-4 border border-white/10 rounded-xl hover:cursor-pointer hover:bg-white/10 hover:border-white/0'>Linkedin</li>
              <li className='text-sm p-4 border border-white/10 rounded-xl hover:cursor-pointer hover:bg-white/10 hover:border-white/0'>Email</li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}