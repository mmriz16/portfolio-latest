'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="container w-full  lg:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-12 fixed top-5 left-1/2 -translate-x-1/2 flex justify-between">
      <div className="p-1 rounded-xl bg-black/10 w-fit h-fit border border-white/10 backdrop-blur-xl">
        <Link href="/"><Image className="rounded-lg" width={46} height={46} src="/img/profile.jpg" alt="profile" /></Link>
      </div>
      <div className="p-1 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl hidden md:flex justify-center">
        <ul className="flex gap-1 text-sm items-center text-white/50">
          <Link href="/pages/abouts"><li className={`hover:text-white hover:bg-white/10 rounded-lg p-3 hover:cursor-pointer ${pathname === '/pages/about' ? 'text-white bg-white/10' : ''}`}>About</li></Link>
          <Link href="/pages/articles"><li className={`hover:text-white hover:bg-white/10 rounded-lg p-3 hover:cursor-pointer ${pathname.startsWith('/pages/articles') ? 'text-white bg-white/10' : ''}`}>Article</li></Link>
          <Link href="/pages/project"><li className={`hover:text-white hover:bg-white/10 rounded-lg p-3 hover:cursor-pointer ${pathname.startsWith('/pages/project') ? 'text-white bg-white/10' : ''}`}>Projects</li></Link>
          <Link href="/pages/uses"><li className={`hover:text-white hover:bg-white/10 rounded-lg p-3 hover:cursor-pointer ${pathname === '/pages/uses' ? 'text-white bg-white/10' : ''}`}>Uses</li></Link>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="Menu flex items-center justify-center px-4 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl md:hidden">
          <div className="card w-fit">Menu</div>
        </div>
        <div className="p-1 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl">
          <div className="card w-[46px] h-[46px]"></div>
        </div>
      </div>
    </div>
  );
}