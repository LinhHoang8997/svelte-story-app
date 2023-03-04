<script>
  import "@fontsource/petrona";
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reader from "$lib/components/wrapper/Reader.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;

  const { APIChapterTitles } = data;
  
</script>

<div class="min-h-screen">
  <Navbar />
  <!-- Define the main section below the Navbar here -->
  <!-- Temporarily set height to 72 -->
  <div class="flex flex-col md:flex-row h-72">
    <Sidebar {$APIChapterTitles}/>
    <Reader>
      <slot />
    </Reader>
  </div>
  <Footer />
</div>
