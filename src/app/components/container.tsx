'use client';

import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto py-12 bg-white/5 border-x-1 border-white/10 lg:max-w-3xl xl:max-w-5xl max-w-full md:px-6 px-4">

      {children}
    </div>
  );
}