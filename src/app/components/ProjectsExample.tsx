'use client';
import { useEffect, useState } from 'react';
import { projectService, Project } from '@/lib/database';
import Image from 'next/image';

export default function ProjectsExample() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await projectService.getAll();
        setProjects(data);
      } catch (err) {
        setError('Failed to fetch projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-700 h-48 rounded-xl mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
          <p className="text-red-300">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">My Projects ({projects.length})</h2>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
              {project.image_url && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center text-xs text-white/50">
                  <span className="bg-white/10 px-2 py-1 rounded">{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">No Projects Found</h3>
          <p className="text-white/70 mb-4">Add some projects to your Supabase database to see them here.</p>
          <div className="text-sm text-white/50">
            <p>Go to your Supabase dashboard → Table Editor → projects table</p>
          </div>
        </div>
      )}
    </div>
  );
}