'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { articleService, Article } from '@/lib/database';

export default function ArticlesExample() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await articleService.getPublished();
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-white/5 rounded-xl p-6">
              <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3 mb-3"></div>
              <div className="h-3 bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
          <p className="text-red-300">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Latest Articles ({articles.length})</h2>
      
      {articles.length > 0 ? (
        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold hover:text-blue-400 transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <time className="text-white/50 text-sm whitespace-nowrap ml-4">
                  {new Date(article.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <p className="text-white/70 mb-4 leading-relaxed">{article.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <Link 
                  href={`/articles/${article.slug}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Read more →
                </Link>
                <span className="text-white/40 text-xs">
                  Slug: {article.slug}
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">No Articles Found</h3>
          <p className="text-white/70 mb-4">Add some published articles to your Supabase database to see them here.</p>
          <div className="text-sm text-white/50">
            <p>Go to your Supabase dashboard → Table Editor → articles table</p>
            <p className="mt-1">Make sure to set 'published' to true for articles you want to display</p>
          </div>
        </div>
      )}
    </div>
  );
}