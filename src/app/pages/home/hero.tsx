'use client';
import Container from '@/app/components/container';

export default function Hero() {
  return (
    <Container>
      <div className="grid grid-flow-row auto-rows-max gap-7">
        <div className="col-span-8">
          <h1 id='title' className="text-5xl font-bold leading-[1.1]">UI/UX Designer,<br/> Icon Designer, and Founder.</h1>
        </div>
        <div className="col-span-10">
          <p id='desc' className="text-base font-medium text-white/50">UI/UX Designer with over 4 years of experience crafting user-centered interfaces for financial, education, and agriculture sectors.
            Specialized in icon system design, mobile-first experiences, and research-based user flows. Successfully delivered digital solutions for Bank Indonesia and several startup platforms.
            Proficient in Figma, Adobe CC, Framer, and modern UI technologies, committed to creating scalable, accessible, and impactful design systems.
          </p>
        </div>
        <div className="col-span-2">
          <ul className="flex gap-4">
            <li><a href="https://www.linkedin.com/in/mmriz16/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://www.instagram.com/mmriz16/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
