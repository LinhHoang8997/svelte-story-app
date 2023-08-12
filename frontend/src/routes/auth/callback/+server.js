import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase } }) => {
  // After users click on the Login link in the Magic Email, a code will send over in the URL parameters
  // Retrieve this code
    const code = url.searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  throw redirect(303, '/account')
}
