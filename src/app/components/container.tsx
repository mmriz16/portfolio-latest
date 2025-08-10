'use client';

import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12 bg-white/5 border-x-1 border-white/10 md:max-w-5xl max-w-full md:px-6 px-0">

      {children}
    </div>
  );
}