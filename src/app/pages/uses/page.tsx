'use client';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Uses() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col gap-7 px-6 mt-24 mb-12">
          <div className="w-full max-w-[650px]">
            <h1 id='title' className="text-5xl font-bold leading-[1.1]">Software I use, gadgets I love, and other things I recommend.</h1>
          </div>
          <div className="w-full max-w-[650px]">
            <p id='desc' className="text-base font-medium text-white/50">I get asked a lot about the things I use to build software, stay productive, or buy to fool myself  into thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of  my favorite stuff.</p>
          </div>
        </div>
        <div className="flex gap-7 flex-col ml-6 place-content-between h-full border-l-1 mb-2 border-white/20">
          <div className="flex">
            <div className="basis-1/6 px-5 py-4">
              <p className="text-sm text-white">Workstation</p>
            </div>
            <div className="flex flex-col gap-2 basis-4/6">
              <a href='/pages/articles/detail'>
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Lenovo Legion Y7000SE</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
              <a href='/pages/articles/detail'>
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Logitech MX Master 3S</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/6 px-5 py-4">
              <p className="text-sm text-white">Design Tools</p>
            </div>
            <div className="flex flex-col gap-2 basis-4/6">
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Figma</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Adobe Illustrator</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/6 px-5 py-4">
              <p className="text-sm text-white">Productivity</p>
            </div>
            <div className="flex flex-col gap-2 basis-4/6">
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Notion</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Zoom</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}