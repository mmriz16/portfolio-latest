# Supabase Integration Guide

This guide will help you set up and use Supabase with your Next.js portfolio project.

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new account
2. Create a new project
3. Wait for the project to be set up (usually takes 2-3 minutes)

### 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to **Settings** → **API**
3. Copy your **Project URL** and **anon/public key**

### 3. Configure Environment Variables

Update the `.env.local` file with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 📊 Database Schema

Create these tables in your Supabase database:

### Projects Table

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT,
  year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Projects are viewable by everyone" ON projects
  FOR SELECT USING (true);
```

### Articles Table

```sql
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  slug TEXT UNIQUE NOT NULL,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to published articles
CREATE POLICY "Published articles are viewable by everyone" ON articles
  FOR SELECT USING (published = true);
```

### Work Experiences Table

```sql
CREATE TABLE work_experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE work_experiences ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Work experiences are viewable by everyone" ON work_experiences
  FOR SELECT USING (true);
```

## 💻 Usage Examples

### Fetching Projects in a Component

```tsx
'use client';
import { useEffect, useState } from 'react';
import { projectService, Project } from '@/lib/database';

export default function ProjectsPage() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <span>{project.year}</span>
        </div>
      ))}
    </div>
  );
}
```

### Server-Side Data Fetching

```tsx
// app/projects/page.tsx
import { projectService } from '@/lib/database';

export default async function ProjectsPage() {
  const projects = await projectService.getAll();

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Fetching Articles

```tsx
import { articleService } from '@/lib/database';

export default async function ArticlesPage() {
  const articles = await articleService.getPublished();

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <time>{new Date(article.created_at).toLocaleDateString()}</time>
        </article>
      ))}
    </div>
  );
}
```

### Real-time Subscriptions

```tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase, Project } from '@/lib/supabase';

export default function RealtimeProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch initial data
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*');
      if (data) setProjects(data);
    };

    fetchProjects();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('projects')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'projects' },
        (payload) => {
          console.log('Change received!', payload);
          // Handle real-time updates here
          fetchProjects(); // Refetch data
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
```

## 🔧 Advanced Features

### File Upload to Supabase Storage

```tsx
import { dbUtils } from '@/lib/database';

const handleFileUpload = async (file: File) => {
  try {
    const fileName = `${Date.now()}-${file.name}`;
    const publicUrl = await dbUtils.uploadFile('images', fileName, file);
    console.log('File uploaded:', publicUrl);
    return publicUrl;
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### Testing Database Connection

```tsx
import { dbUtils } from '@/lib/database';

const testConnection = async () => {
  const isConnected = await dbUtils.testConnection();
  console.log('Database connected:', isConnected);
};
```

## 🔒 Security Best Practices

1. **Row Level Security (RLS)**: Always enable RLS on your tables
2. **Environment Variables**: Never commit your Supabase keys to version control
3. **Service Role Key**: Keep your service role key secret and only use it server-side
4. **Policies**: Create appropriate policies for your use case

## 🚀 Deployment

When deploying to Vercel:

1. Add your environment variables in the Vercel dashboard
2. Make sure your Supabase project allows connections from your domain
3. Test your deployment thoroughly

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js with Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)

## 🐛 Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure to restart your development server after adding `.env.local`
2. **RLS blocking queries**: Check your Row Level Security policies
3. **CORS errors**: Ensure your domain is added to Supabase project settings
4. **Type errors**: Make sure your TypeScript interfaces match your database schema

### Debug Mode

Enable debug mode to see detailed logs:

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key, {
  auth: {
    debug: true
  }
});
```