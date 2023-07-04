import { error, redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async ({ request, locals: { supabase, getSession } }) => {
	const { error: err } = await supabase.auth.signOut()

	if (err) {
		throw error(500, "Something went wrong logging you out.")
	}

	throw redirect(303, "/")
}
