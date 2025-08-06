'use client';

export default function Update() {
  return (
    <div className="p-6 border rounded-2xl border-white/10 gap-2.5 flex flex-col">
      <h1 className="text-white font-semibold">Stay up to date</h1>
      <p className="text-sm text-white/50 leading-[1.6]">Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className="flex items-center justify-center gap-2.5 mt-4">
        <input type="email" placeholder="Email Address" className="text-xs w-full p-4 border border-white/5 bg-white/5 rounded-xl" />
        <button className="bg-white/10 text-white font-semibold p-4 rounded-xl text-xs">Join</button>
      </div>
    </div>
  );
}