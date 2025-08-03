'use client';

import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-6 bg-white/5 border-x-1 border-white/10">
      {children}
    </div>
  );
}