'use client';

export default function Photos() {
  return (
    <div className="w-full card px-6 py-12 md:py-6 flex justify-center gap-6 overflow-hidden relative -z-10">
      <div className="bg absolute top-0 left-1/2 transform -translate-x-1/2 w-[1024px] h-[600px] bg-white/5 border-x-1 border-white/10"></div>
      <div className="example w-[214px] h-[236] md:w-[300px] md:h-[330px] flex-shrink-0 bg-[#2e2e2e] rounded-2xl rotate-2"></div>
      <div className="example w-[214px] h-[236] md:w-[300px] md:h-[330px] flex-shrink-0 bg-[#2e2e2e] rounded-2xl -rotate-2"></div>
      <div className="example w-[214px] h-[236] md:w-[300px] md:h-[330px] flex-shrink-0 bg-[#2e2e2e] rounded-2xl rotate-2"></div>
      <div className="example w-[214px] h-[236] md:w-[300px] md:h-[330px] flex-shrink-0 bg-[#2e2e2e] rounded-2xl -rotate-2"></div>
      <div className="example w-[214px] h-[236] md:w-[300px] md:h-[330px] flex-shrink-0 bg-[#2e2e2e] rounded-2xl rotate-2"></div>
    </div>
  );
}