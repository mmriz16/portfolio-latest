'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { workService, WorkExperience } from '@/lib/database';

export default function WorkExperienceExample() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWorkExperiences() {
      try {
        const data = await workService.getAll();
        setWorkExperiences(data);
      } catch (err) {
        setError('Failed to fetch work experiences');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkExperiences();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;
  };

  const calculateDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years !== 1 ? 's' : ''}${months > 0 ? ` ${months} month${months !== 1 ? 's' : ''}` : ''}`;
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-white/5 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-700 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/4 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
          <p className="text-red-300">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Work Experience ({workExperiences.length})</h2>
      
      {workExperiences.length > 0 ? (
        <div className="space-y-6">
          {workExperiences.map((work, index) => (
            <div key={work.id} className="bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  {work.logo_url ? (
                    <div className="w-12 h-12 relative">
                      <Image
                        src={work.logo_url}
                        alt={`${work.company} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-white/70 font-bold text-lg">
                        {work.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Work Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{work.position}</h3>
                      <p className="text-blue-400 font-medium">{work.company}</p>
                    </div>
                    <div className="text-right text-sm text-white/50">
                      <p className="font-medium">
                        {formatDate(work.start_date)} - {work.end_date ? formatDate(work.end_date) : 'Present'}
                      </p>
                      <p className="text-xs">
                        {calculateDuration(work.start_date, work.end_date)}
                      </p>
                    </div>
                  </div>
                  
                  {work.description && (
                    <p className="text-white/70 leading-relaxed">{work.description}</p>
                  )}
                </div>
              </div>
              
              {/* Timeline connector */}
              {index < workExperiences.length - 1 && (
                <div className="ml-6 mt-4 h-4 border-l-2 border-white/10"></div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">No Work Experience Found</h3>
          <p className="text-white/70 mb-4">Add your work experiences to your Supabase database to see them here.</p>
          <div className="text-sm text-white/50">
            <p>Go to your Supabase dashboard → Table Editor → work_experiences table</p>
          </div>
        </div>
      )}
    </div>
  );
}