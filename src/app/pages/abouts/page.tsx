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
            <div className="flex flex-col gap-6 border-b border-white/10 pb-6">
              <p id='desc' className="text-base font-medium text-white/50">My name is Miftakhul Rizky, a UI/UX Designer and Icon Designer based in Bandung. For more than three years, I’ve dedicated myself to shaping digital products that balance usability, aesthetics, and accessibility.</p>
              <p id='desc' className="text-base font-medium text-white/50">My journey into design started with curiosity—how a simple interface could change the way people interact with technology. At first, I was experimenting with graphic design during my college years at STMIK Bandung, creating visuals and helping with promotional materials. Over time, that curiosity grew into a passion for interfaces that solve problems, not just decorate screens.</p>
              <p id='desc' className="text-base font-medium text-white/50">I have since worked on projects across multiple industries, from finance to education and agriculture. Through my role at PT Solusi Infotech Semesta Indonesia, I contributed to initiatives with Bank Indonesia, including ISEF, FESyar, and IKRA. I was responsible for designing mobile applications and dashboards such as HawwaBiz, Simfratani, and M-BMT, making sure they weren’t only functional but also intuitive for their users.</p>
              <p id='desc' className="text-base font-medium text-white/50">Before that, I joined Aghatis Karya Indonesia, a startup founded by a small team of students who believed in building better digital trading experiences. Serving as both UI/UX Designer and CPO, I worked hands-on with developers, turning ideas into products. That experience taught me how to balance design thinking with real business goals.</p>
              <p id='desc' className="text-base font-medium text-white/50">Beyond client projects, I built Termicons, a platform for consistent and scalable icon systems. Icons may look small, but they play a big role in clarity and usability. Termicons was born from my belief that even the smallest details matter when it comes to design.</p>
              <p id='desc' className="text-base font-medium text-white/50">My design philosophy is straightforward:</p>
              <ul className="text-base font-medium text-white/50 list-disc pl-4">
                <li>Interfaces should feel natural and accessible.</li>
                <li>Every decision should be backed by research and empathy for the user.</li>
                <li>Good design is not about adding more, but about removing barriers.</li>
              </ul>
              <p id='desc' className="text-base font-medium text-white/50">I’m also known as mmriz16 on design platforms like Dribbble and The Noun Project, where I share my works and connect with other designers. It’s an alias that represents the creative side of my journey.</p>
              <p id='desc' className="text-base font-medium text-white/50">Outside of work, I continuously learn new tools and experiment with technologies like Framer, Next.js, and Blender, because I believe a designer should always keep evolving.</p>
              <p id='desc' className="text-base font-medium text-white/50">If you’d like to collaborate, talk design, or simply connect, you can reach me on <a href="https://www.linkedin.com/in/mmriz16/" target='_blank'>LinkedIn</a>, <a href="https://www.dribbble.com/mmriz16">Dribbble</a>, or via email at <a href="emailto:m.miftakhul.rizky4@gmail.com">m.miftakhul.rizky4@gmail.com</a>.</p>
            </div>
          </div>
          <div>
            <Image className='rounded-2xl rotate-2 overflow-hidden relative -z-10' src="/img/me.jpg" alt="profile" width={460} height={100} unoptimized={true} quality={100} />
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