import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

export const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseKey
)

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'completed')
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getProject(id: number) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

export async function submitContact(form: { name: string; email: string; message: string; project_type?: string; budget?: string; timeline?: string }) {
  const { data, error } = await supabase
    .from('messages')
    .insert([form])
  
  if (error) throw error
  return data
}
