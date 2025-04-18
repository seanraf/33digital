
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://evpeimuwyxuvttmzaewj.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2cGVpbXV3eXh1dnR0bXphZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NjE4MzgsImV4cCI6MjAyOTUzNzgzOH0.tIvJJNXjxF8qp2_iTTjXCH1-VWWv-dFdXfszalTdN5Y';

export const supabase = createClient(supabaseUrl, supabaseKey);
