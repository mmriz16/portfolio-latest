import { ReactNode } from 'react';

export default function InnerCard ({children}: {children: ReactNode}) {
  return (
    <div className="w-full gap-2 flex flex-col p-4 md:p-6 hover:bg-white/10 rounded-2xl">
      {children}
    </div>
  );
}
