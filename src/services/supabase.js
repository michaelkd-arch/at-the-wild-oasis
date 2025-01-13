import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yszjmxtpfxslnchzfnqf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzempteHRwZnhzbG5jaHpmbnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODI5OTksImV4cCI6MjA0ODk1ODk5OX0.H-oKbl6x79nAwjy-8htCFB1uK3SccRwRpSztffdxDGY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
