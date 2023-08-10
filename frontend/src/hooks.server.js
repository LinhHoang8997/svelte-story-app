import { setSession } from '$houdini'
import { STRAPI_GRAPHQL_API_URL } from '$env/static/private';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

/* @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
    // get the user information however you want
    const user = {
        api_key: STRAPI_GRAPHQL_API_URL
    }
    // set the session information for this event
    setSession(event, { user })

    // pass the event onto the default handle
    return await resolve(event)
}
