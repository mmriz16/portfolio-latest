import { ReactNode } from 'react';

export default function OuterCard ({children}: {children: ReactNode}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 border border-white/10 rounded-2xl">
      {children}
    </div>
  );
}