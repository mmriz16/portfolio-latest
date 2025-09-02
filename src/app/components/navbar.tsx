'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="container w-full  lg:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-12 fixed top-5 left-1/2 -translate-x-1/2 flex justify-between">
      <div className="p-1 rounded-xl bg-black/10 w-fit h-fit border border-white/10 backdrop-blur-xl">
        <Link href="/"><Image className="rounded-lg" width={46} height={46} src="/img/profile.jpg" alt="profile" /></Link>
      </div>
      <div className="p-4 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl hidden md:flex justify-center">
        <ul className="flex gap-4 text-sm items-center text-white/50">
          <li className="hover:text-white"><Link href="/pages/about">About</Link></li>
          <li className="hover:text-white"><Link href="/pages/articles/list">Article</Link></li>
          <li className="hover:text-white"><Link href="/pages/project/list">Projects</Link></li>
          <li className="hover:text-white"><Link href="/pages/uses">Uses</Link></li>
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