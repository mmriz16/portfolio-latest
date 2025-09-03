'use client';
import { useEffect, useState } from 'react';
import { projectService, articleService, workService, dbUtils, Project, Article, WorkExperience } from '@/lib/database';

export default function TestSupabasePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);

  useEffect(() => {
    async function testSupabaseConnection() {
      try {
        setLoading(true);
        
        // Test database connection
        const isConnected = await dbUtils.testConnection();
        setConnectionStatus(isConnected);
        
        if (isConnected) {
          // Fetch all data
          const [projectsData, articlesData, workData] = await Promise.all([
            projectService.getAll(),
            articleService.getPublished(),
            workService.getAll()
          ]);
          
          setProjects(projectsData);
          setArticles(articlesData);
          setWorkExperiences(workData);
        }
      } catch (err) {
        setError(`Failed to connect to Supabase: ${err}`);
        console.error('Supabase connection error:', err);
      } finally {
        setLoading(false);
      }
    }

    testSupabaseConnection();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Testing Supabase Connection...</h1>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Integration Test</h1>
        
        {/* Connection Status */}
        <div className="mb-8 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Connection Status</h2>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
            connectionStatus 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              connectionStatus ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            {connectionStatus ? 'Connected to Supabase' : 'Connection Failed'}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-900/50 border border-red-500 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Error</h2>
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {connectionStatus && (
          <>
            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Projects ({projects.length})</h2>
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-400">No projects found. Add some projects to your Supabase database!</p>
                </div>
              )}
            </section>

            {/* Articles Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Published Articles ({articles.length})</h2>
              {articles.length > 0 ? (
                <div className="space-y-4">
                  {articles.map((article) => (
                    <div key={article.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{article.excerpt}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>Slug: {article.slug}</span>
                        <span>{new Date(article.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-400">No published articles found. Add some articles to your Supabase database!</p>
                </div>
              )}
            </section>

            {/* Work Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Work Experience ({workExperiences.length})</h2>
              {workExperiences.length > 0 ? (
                <div className="space-y-4">
                  {workExperiences.map((work) => (
                    <div key={work.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{work.position}</h3>
                          <p className="text-blue-400">{work.company}</p>
                        </div>
                        <div className="text-right text-xs text-gray-400">
                          <p>{work.start_date}</p>
                          <p>{work.end_date || 'Present'}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{work.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-400">No work experiences found. Add some work experiences to your Supabase database!</p>
                </div>
              )}
            </section>

            {/* Sample Data Instructions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Add Sample Data</h2>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-4">To test the examples, add some sample data to your Supabase tables:</p>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-400">1. Go to your Supabase dashboard</p>
                  <p className="text-blue-400">2. Navigate to Table Editor</p>
                  <p className="text-blue-400">3. Add sample records to projects, articles, and work_experiences tables</p>
                  <p className="text-blue-400">4. Refresh this page to see the data</p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Navigation */}
        <div className="mt-8 pt-4 border-t border-gray-700">
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}