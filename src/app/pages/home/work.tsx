'use client';

export default function Work() {
  return (
    <div className="p-6 border border-white/10 rounded-xl gap-6 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold">Work Experience</h1>
        <div className="col-span-4 col-start-8 text-end text-xs text-white/30">5 Years 3 Month</div>
      </div>
      <div className="list gap-3 flex flex-col">
        <div className="grid grid-cols-10 grid-rows-1 gap-4 items-center">
          <div className="col-span-2 w-[65px] h-[65px] rounded-full flex items-center justify-center bg-white/10">
            <img src="/img/Siesta.png" alt="Company logo" width={55} height={55} />
          </div>
          <div className="col-span-5">
            <h1 className="text-white font-semibold">UI/UX Designer</h1>
            <p className="text-white/50 text-sm">PT Solusi Infotech Semesta Indonesia</p>
          </div>
          <div className="col-span-4 col-start-8 text-end text-xs text-white/30">Sep 2023 - Jan 2025</div>
        </div>
        <div className="grid grid-cols-10 grid-rows-1 gap-4 items-center">
          <div className="col-span-2 w-[65px] h-[65px] rounded-full flex items-center justify-center bg-white/10">
            <img src="/img/Aghatis.png" alt="Company logo" width={55} height={55} />
          </div>
          <div className="col-span-5">
            <h1 className="text-white font-semibold">UI/UX Designer</h1>
            <p className="text-white/50 text-sm">PT Aghatis Karya Indonesia</p>
          </div>
          <div className="col-span-4 col-start-8 text-end text-xs text-white/30">Dec 2021 - Aug 2023</div>
        </div>
        <div className="grid grid-cols-10 grid-rows-1 gap-4 items-center">
          <div className="col-span-2 w-[65px] h-[65px] rounded-full flex items-center justify-center bg-white/10">
            <img src="/img/DGT.png" alt="Company logo" width={55} height={55} />
          </div>
          <div className="col-span-5">
            <h1 className="text-white font-semibold">Graphic Design & UI/UX Designer</h1>
            <p className="text-white/50 text-sm">CV Dian Global Tech</p>
          </div>
          <div className="col-span-4 col-start-8 text-end text-xs text-white/30">Feb 2020 - Aug 2021</div>
        </div>
        <div className="grid grid-cols-10 grid-rows-1 gap-4 items-center">
          <div className="col-span-2 w-[65px] h-[65px] rounded-full bg-white/10"></div>
          <div className="col-span-5">
            <h1 className="text-white font-semibold">Graphic Designer</h1>
            <p className="text-white/50 text-sm">STMIK Bandung</p>
          </div>
          <div className="col-span-4 col-start-8 text-end text-xs text-white/30">Aug 2019 - Jan 2020</div>
        </div>
      </div>
      <button className="text-xs py-4 bg-white/10 w-full text-white font-semibold rounded-xl">Download Resume</button>
    </div>
  );
}