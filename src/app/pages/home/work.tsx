'use client';
import Image from 'next/image';

export default function Work() {
  return (
    <div className="p-6 border border-white/10 rounded-xl gap-6 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold">Work Experience</h1>
        <div className="col-span-4 col-start-8 text-end text-xs text-white/30">5 Years 3 Month</div>
      </div>
      <div className="list gap-6 flex flex-col">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="col-span-2 w-[40] h-[40px] rounded-full flex items-center justify-center bg-white/10">
              <Image src="/img/Siesta.png" alt="Company logo" width={32} height={32} unoptimized={true} quality={100} />
            </div>
            <div className="col-span-6 w-[200px]">
              <h1 className="text-white font-semibold">UI/UX Designer</h1>
              <p className="text-white/50 text-sm">PT Solusi Infotech Semesta Indonesia</p>
            </div>
          </div>
          <div className="col-span-4 col-start-9 text-end text-xs text-white/30">Sep 2023 - Jan 2025</div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="col-span-2 w-[40] h-[40px] rounded-full flex items-center justify-center bg-white/10">
              <Image src="/img/Aghatis.png" alt="Company logo" width={32} height={32} unoptimized={true} quality={100} />
            </div>
            <div className="col-span-6">
              <h1 className="text-white font-semibold">UI/UX Designer</h1>
              <p className="text-white/50 text-sm">PT Aghatis Karya Indonesia</p>
            </div>
          </div>
          <div className="col-span-4 col-start-9 text-end text-xs text-white/30">Dec 2021 - Aug 2023</div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="col-span-2 w-[40] h-[40px] rounded-full flex items-center justify-center bg-white/10">
              <Image src="/img/DGT.png" alt="Company logo" width={32} height={32} unoptimized={true} quality={100} />
            </div>
            <div className="col-span-6">
              <h1 className="text-white font-semibold">Graphic & UI/UX Designer</h1>
              <p className="text-white/50 text-sm">CV Dian Global Tech</p>
            </div>
          </div>
          <div className="col-span-4 col-start-9 text-end text-xs text-white/30">Feb 2020 - Aug 2021</div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="col-span-2 w-[40] h-[40px] rounded-full flex items-center justify-center bg-white/10">
              <Image src="/img/stmik-bandung.png" alt="Company logo" width={32} height={32} unoptimized={true} quality={100} />
            </div>
            <div className="col-span-6">
              <h1 className="text-white font-semibold">Graphic Designer</h1>
              <p className="text-white/50 text-sm">STMIK Bandung</p>
            </div>
          </div>
          <div className="col-span-4 col-start-9 text-end text-xs text-white/30">Aug 2019 - Jan 2020</div>
        </div>
      </div>
      <a href="https://drive.usercontent.google.com/download?id=1tVqFRQ9YBrp20cSlxNlMzl3CNGKg9WT9&export=download&authuser=0&confirm=t&uuid=8a8cfeaa-38f9-4b97-8de5-5ba4287ebf74&at=AN8xHoop83HufVUBdKQAZnf65EiG:1756906123576" ><button className="text-xs py-4 bg-white/10 w-full text-white font-semibold rounded-xl cursor-default hover:cursor-pointer">Download Resume</button></a>
    </div>
  );
}