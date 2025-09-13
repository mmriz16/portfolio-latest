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
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">My primary workstation laptop featuring AMD Ryzen 7 processor and RTX graphics. Perfect for design work, development, and handling multiple creative applications simultaneously with excellent performance and reliability.</p>
                </div>
              </a>
              <a href='/pages/articles/detail'>
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Logitech MX Master 3S</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">An exceptional wireless mouse with precise tracking and customizable buttons. The ergonomic design and smooth scrolling make it perfect for long design sessions and productivity work.</p>
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
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">My go-to design tool for UI/UX design, prototyping, and collaboration. Figma&apos;s real-time collaboration features and component system make it perfect for creating design systems and working with teams.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Adobe Creative Cloud</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Essential suite for graphic design, photo editing, and illustration work. I primarily use Photoshop, Illustrator, and After Effects for creating detailed graphics and animations.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Framer</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Advanced prototyping tool for creating interactive and animated prototypes. Perfect for demonstrating complex user interactions and micro-animations in design presentations.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Blender</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Open-source 3D creation suite for modeling, animation, and rendering. I use it for creating 3D icons, illustrations, and adding depth to my design projects.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/6 px-5 py-4">
              <p className="text-sm text-white">Technologies</p>
            </div>
            <div className="flex flex-col gap-2 basis-4/6">
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Tailwind CSS</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Utility-first CSS framework that speeds up my development process. Perfect for creating responsive designs quickly with consistent spacing, colors, and typography systems.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Next.js</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">React framework for building fast, SEO-friendly web applications. I love its file-based routing, built-in optimization, and seamless deployment capabilities.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">VS Code</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">My primary code editor with excellent extensions ecosystem. The integrated terminal, Git support, and customizable interface make coding efficient and enjoyable.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/6 px-5 py-4">
              <p className="text-sm text-white">Specialities</p>
            </div>
            <div className="flex flex-col gap-2 basis-4/6">
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">UI/UX Design</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Creating intuitive and user-centered digital experiences. I focus on understanding user needs, crafting seamless interactions, and designing interfaces that are both beautiful and functional.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Icon Design</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Crafting pixel-perfect icons and iconography systems. Through Termicons, I create scalable icon libraries that maintain consistency and clarity across different platforms and sizes.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Design Systems</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Building comprehensive design systems that scale across products and teams. I create component libraries, style guides, and documentation that ensure design consistency and efficiency.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">User Research</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Understanding user behavior through research and testing. I conduct user interviews, usability testing, and analyze user data to inform design decisions and improve user experiences.</p>
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
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">All-in-one workspace for notes, project management, and documentation. I use it to organize design projects, maintain client information, and create comprehensive design documentation.</p>
                </div>
              </a>
              <a href='/articles/detail' className="basis-4/6">
                <div className="card hover:bg-white/5 px-5 py-4 rounded-xl gap-2 flex flex-col">
                  <h1 className="text-base font-semibold">Zoom</h1>
                  <p className="text-sm leading-[1.6] overflow-ellipsis line-clamp-3 text-white/50">Reliable video conferencing platform for client meetings and team collaboration. Essential for conducting user interviews, design reviews, and remote design workshops.</p>
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