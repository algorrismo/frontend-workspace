//? Give me Supabase's function for creating a connection/client.
import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL; //reads env variable from .env file
  const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY; //reads env variable from .env file

  if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) {
    throw new Error(
      "Missing Supabase environment variables"
    );
  }

  return createClient(
    SUPABASE_URL,
    SUPABASE_SECRET_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }
  );
}