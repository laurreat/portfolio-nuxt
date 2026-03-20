import { createClient } from '@supabase/supabase-js'

let supabaseInstance: any = null

export function useSupabase() {
  if (supabaseInstance) return supabaseInstance
  
  const config = useRuntimeConfig()
  
  if (!config.public.supabaseUrl || !config.public.supabaseKey) {
    console.warn('Supabase URL or Key is missing. Client could not be initialized.')
    return null
  }
  
  supabaseInstance = createClient(
    config.public.supabaseUrl as string,
    config.public.supabaseKey as string
  )
  
  return supabaseInstance
}

export async function getProjects() {
  const supabase = useSupabase()
  if (!supabase) return []
  
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
  const supabase = useSupabase()
  if (!supabase) return null
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

export async function submitContact(form: { name: string; email: string; message: string; project_type?: string; budget?: string; timeline?: string }) {
  const supabase = useSupabase()
  if (!supabase) throw new Error('Supabase no disponible')
  
  const { data, error } = await supabase
    .from('messages')
    .insert([form])
  
  if (error) throw error
  return data
}
