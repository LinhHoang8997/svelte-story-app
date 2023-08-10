// Import items needed for Supabase handling from client side
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";

// Import the manual loading function from Houdini
// import { load_getAllChapterTitles } from '$houdini'

export const load = async ({fetch, data, depends }) => {
  depends("supabase:auth")
  // To create a custom identifier for invalidate and depends, use a string beginning with [a-z]+: (e.g. custom:state) — this is a valid URL.

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  });

  // const houdini_data = await load_getAllChapterTitles({ event });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { supabase, session };
};
