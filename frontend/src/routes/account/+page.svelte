<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'

	export let data
	export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)


	let profileForm: HTMLFormElement
	let loading = false
	// let fullName: string = profile?.full_name ?? ''
	let firstName: string = profile?.first_name ?? ''
	let username: string = profile?.username ?? ''
	let website: string = profile?.website ?? ''
	let avatarUrl: string = profile?.avatar_url ?? ''

	$: console.log("Checking value: ", firstName)

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div class="form-widget">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label class="text-primary text-lg" for="email">Email: </label>
			<input class="text-accent p-1 my-1" id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label class="text-primary text-lg" for="firstName">First Name: </label>
			<input class="text-accent p-1 my-1" id="firstName" name="firstName" type="text" value={form?.firstName ?? firstName} />
		</div>

		<div>
			<label class="text-primary text-lg" for="username">Username: </label>
			<input class="text-accent p-1 my-1" id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<label class="text-primary text-lg" for="website">Website: </label>
			<input class="text-accent p-1 my-1" id="website" name="website" type="url" value={form?.website ?? website} />
		</div>

		<div>
			<input
				type="submit"
				class="btn m-2 text-secondary"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>

	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="btn m-2 text-secondary" disabled={loading}>Sign Out</button>
		</div>
	</form>
</div>