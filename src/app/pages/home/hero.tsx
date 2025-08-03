'use client';

export default function Hero() {
  return (
    <div className="container max-w-5xl mx-auto p-12 bg-white/5 border border-white/5">
      <div className="grid grid-flow-row auto-rows-max gap-7">
        <div className="col-span-8">
          <h1 className="text-5xl font-bold">UI/UX Designer,<br/> Icon Designer, and Founder.</h1>
        </div>
        <div className="col-span-10">
          <p className="text-base font-medium text-white/50">UI/UX Designer with over 4 years of experience crafting user-centered interfaces for financial, education, and agriculture sectors.
            Specialized in icon system design, mobile-first experiences, and research-based user flows. Successfully delivered digital solutions for Bank Indonesia and several startup platforms.
            Proficient in Figma, Adobe CC, Framer, and modern UI technologies, committed to creating scalable, accessible, and impactful design systems.
          </p>
        </div>
        <div className="col-span-2">
          <ul className="flex gap-4">
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
