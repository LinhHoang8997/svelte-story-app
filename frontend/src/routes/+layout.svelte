<script>
  import "@fontsource/petrona";
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reader from "$lib/components/wrapper/Reader.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MusicTrackCard from "$lib/components/reader/MusicTrackCard.svelte";
  import UtilityBar from "$lib/components/reader/UtilityBar.svelte";

  import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	
  export let data;

  // Extract the data from the Houdini query response first - Content first
  $: ({ titles_data } = data);

  // Extract the data from the Supabase session - Auth and User second
	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})


</script>

<div class="min-h-screen">
  <Navbar />
  <!-- Define the main section below the Navbar here -->
  <div class="flex flex-col md:flex-row">
    {#if titles_data}
      <Sidebar chapters_data={titles_data.data.chapters.data} />
    {/if}
    <Reader>
      <slot />
    </Reader>
  </div>
  <MusicTrackCard />
  <UtilityBar />
  <!-- <Footer /> -->
</div>
