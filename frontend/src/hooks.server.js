import { setSession } from "$houdini";
import { STRAPI_GRAPHQL_API_URL } from "$env/static/private";
import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";

// Import the supabase SERVER client create function from the auth helper
// REMEMBER THAT YOU NEED TO CREATE A LOAD CLIENT TO HANDLE THIS INSTANCE
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";

/* @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  });

  // get the user information however you want
  const houdini_user = {
    api_key: STRAPI_GRAPHQL_API_URL,
  };

  // create a shorthand to make getting session easier
  /**
   * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  // set the Houdini information for this event
  setSession(event, { houdini_user });

  // pass the event onto the default handle
  return await resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    },
  });
};
