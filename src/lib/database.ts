import { supabase, Project, Article, WorkExperience } from './supabase';

// Project operations
export const projectService = {
  // Get all projects
  async getAll(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('year', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get project by ID
  async getById(id: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create new project
  async create(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .insert(project)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update project
  async update(id: string, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete project
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Article operations
export const articleService = {
  // Get all published articles
  async getPublished(): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get article by slug
  async getBySlug(slug: string): Promise<Article | null> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Get all articles (including unpublished)
  async getAll(): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Create new article
  async create(article: Omit<Article, 'id' | 'created_at' | 'updated_at'>): Promise<Article> {
    const { data, error } = await supabase
      .from('articles')
      .insert(article)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update article
  async update(id: string, updates: Partial<Article>): Promise<Article> {
    const { data, error } = await supabase
      .from('articles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Work experience operations
export const workService = {
  // Get all work experiences
  async getAll(): Promise<WorkExperience[]> {
    const { data, error } = await supabase
      .from('work_experiences')
      .select('*')
      .order('start_date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Create new work experience
  async create(work: Omit<WorkExperience, 'id' | 'created_at'>): Promise<WorkExperience> {
    const { data, error } = await supabase
      .from('work_experiences')
      .insert(work)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update work experience
  async update(id: string, updates: Partial<WorkExperience>): Promise<WorkExperience> {
    const { data, error } = await supabase
      .from('work_experiences')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Generic utility functions
export const dbUtils = {
  // Upload file to Supabase Storage
  async uploadFile(bucket: string, path: string, file: File): Promise<string> {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);
    
    if (error) throw error;
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    
    return publicUrl;
  },

  // Delete file from Supabase Storage
  async deleteFile(bucket: string, path: string): Promise<void> {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);
    
    if (error) throw error;
  },

  // Test database connection
  async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('count')
        .limit(1);
      
      return !error;
    } catch {
      return false;
    }
  }
};