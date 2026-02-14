// lib/supabase.js
const SUPABASE_URL = "REEMPLAZAR_EN_VERCEL"; // Vercel injecta NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = "REEMPLAZAR_EN_VERCEL"; // Vercel injecta NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = supabase.createClient(
  // En HTML puro, puedes reemplazar directamente con los valores públicos seguros
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
