<script>
  import "@fontsource/petrona";
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reader from "$lib/components/wrapper/Reader.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MusicTrackCard from "$lib/components/reader/MusicTrackCard.svelte";
  import UtilityBar from "$lib/components/reader/UtilityBar.svelte";

  export let data;

  const { APIChapterTitles } = data;

</script>

<div class="min-h-screen">
  <Navbar />
  <!-- Define the main section below the Navbar here -->
  <div class="flex flex-col md:flex-row">
    {#if $APIChapterTitles.fetching}
    <p>Loading</p>
    {:else}
    <Sidebar chapters_data={$APIChapterTitles.data.chapters.data}/>
    {/if}
    <Reader>
      <slot />
    </Reader>
  </div>
  <MusicTrackCard />
  <UtilityBar />
  <Footer />
</div>
