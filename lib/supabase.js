// Configuración de Supabase
const SUPABASE_URL = "https://guvezqmrebzekipjelte.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dmV6cW1yZWJ6ZWtpcGplbHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5OTM0MTYsImV4cCI6MjA4NjU2OTQxNn0.diu5zEvrJ1YmNu3Pk00YO9BTqAmuGrp2G6Tw4-j1X0s"

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
