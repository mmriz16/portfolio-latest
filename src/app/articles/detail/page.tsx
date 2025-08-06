'use client';

export default function ArticleDetail() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <p className="text-sm text-white/50 mb-2">August 03, 2025</p>
        <h1 className="text-3xl font-bold mb-4">Crafting a design system for a multiplanetary future</h1>
        <div className="w-full h-64 bg-white/5 rounded-xl mb-8"></div>
      </div>
      
      <article className="prose prose-invert max-w-none">
        <p className="text-white/80 leading-relaxed mb-6">
          In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.
        </p>
        
        <p className="text-white/80 leading-relaxed mb-6">
          As we venture into space exploration and establish colonies on other planets, the challenges of designing for diverse environments become apparent. From the low gravity of Mars to the extreme conditions of space stations, our design systems must be adaptable and resilient.
        </p>
        
        <h2 className="text-xl font-semibold text-white mb-4">Key Principles</h2>
        
        <p className="text-white/80 leading-relaxed mb-6">
          The foundation of a multiplanetary design system rests on several key principles: modularity, accessibility, and environmental adaptability. These principles ensure that our interfaces can function effectively regardless of the planetary conditions or technological constraints.
        </p>
        
        <p className="text-white/80 leading-relaxed mb-6">
          By implementing these principles, we can create design systems that not only serve our current needs on Earth but also prepare us for the challenges of interplanetary communication and interaction.
        </p>
      </article>
      
      <div className="mt-12 pt-8 border-t border-white/10">
        <a href="/articles" className="text-[#417ffa] hover:underline">
          ← Back to Articles
        </a>
      </div>
    </div>
  );
}