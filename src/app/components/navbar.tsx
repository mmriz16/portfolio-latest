'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="container w-full max-w-5xl mx-auto px-12 fixed top-5 left-1/2 -translate-x-1/2 flex justify-between">
      <div className="p-1 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl">
        <a href="/home"><Image className="rounded-lg" width={48} height={48} src="/img/profile.jpg" alt="profile" /></a>
      </div>
      <div className="p-4 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl flex justify-center">
        <ul className="flex gap-4 text-sm items-center text-white/50">
          <li className="hover:text-white"><a href="/home">About</a></li>
          <li className="hover:text-white"><a href="/articles/list">Article</a></li>



          <li className="hover:text-white"><a href="/projects">Projects</a></li>
          <li className="hover:text-white"><a href="/uses">Uses</a></li>
        </ul>
      </div>
      <div className="p-1 rounded-xl bg-black/10 w-fit border border-white/10 backdrop-blur-xl">
        <div className="card w-[48px] h-[48px]"></div>
      </div>
    </div>
  );
}