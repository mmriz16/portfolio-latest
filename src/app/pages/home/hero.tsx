'use client';
import Container from '@/app/components/container';

export default function Hero() {
  return (
    <Container>
      <div className="grid grid-flow-row auto-rows-max gap-4 md:gap-7 md:mx-6 md:px-0 mt-24 md:mt-24">
        <div className="col-span-8">
          <h1 id='title' className="text-[36px] md:text-5xl font-bold leading-[1.1]">
            UI/UX Designer, Icon Designer, and Founder.
          </h1>
        </div>
        <div className="col-span-10">
          <p id='desc' className="text-sm md:text-base font-medium text-white/50">
            I&apos;m <strong>Miftakhul Rizky</strong>, a passionate UI/UX Designer and Icon Designer based in Bandung City. 
            As the founder and CEO of <strong>Termicons</strong>, I create intuitive digital experiences and beautiful iconography 
            that bridges functionality with aesthetics. Contact me at m.miftakhul.rizky4@gmail.com for collaborations.
          </p>
        </div>
        <div className="col-span-2">
          <ul className="flex gap-4 text-sm md:text-base">
            <li><a href="https://www.linkedin.com/in/mmriz16/" target="_blank" rel="noopener noreferrer me" aria-label="mmriz16 LinkedIn Profile">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/mmriz16/" target="_blank" rel="noopener noreferrer me" aria-label="mmriz16 Instagram Profile">Instagram</a></li>
            <li><a href="https://dribbble.com/mmriz16" target="_blank" rel="noopener noreferrer me" aria-label="mmriz16 Dribbble Portfolio">Dribbble</a></li>
            <li><a href="https://thenounproject.com/mmriz16" target="_blank" rel="noopener noreferrer me" aria-label="mmriz16 Noun Project Icons">Noun Project</a></li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
