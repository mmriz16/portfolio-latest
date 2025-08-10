'use client';
import Container from '@/app/components/container';

export default function Hero() {
  return (
    <Container>
      <div className="grid grid-flow-row auto-rows-max gap-4 md:gap-7 md:mx-6 md:px-0 mt-16 md:mt-24">
        <div className="col-span-8">
          <h1 id='title' className="text-[28px] md:text-5xl font-bold leading-[1.1]">UI/UX Designer,<br/> Icon Designer, and Founder.</h1>
        </div>
        <div className="col-span-10">
          <p id='desc' className="text-sm md:text-base font-medium text-white/50">I’m Rizky, a Graphic Designer and UI/UX Designer based in Bandung City. I’m the founder and CEO of Termicons, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
        </div>
        <div className="col-span-2">
          <ul className="flex gap-4 text-sm md:text-base">
            <li><a href="https://www.linkedin.com/in/mmriz16/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://www.instagram.com/mmriz16/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
