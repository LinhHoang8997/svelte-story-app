<script>
  import "@fontsource/petrona";
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reader from "$lib/components/wrapper/Reader.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // Set up URQL client connecting to the Strapi GraphQL API
  import { createClient, setContextClient } from "@urql/svelte";

  export let data;
  const { api_key } = data;

  const client = createClient({
    url: `http://127.0.0.1:1337/graphql`,
    fetchOptions: () => {
      const token = api_key;
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
  });

  setContextClient(client);

</script>

<div class="min-h-screen">
  <Navbar />
  <!-- Define the main section below the Navbar here -->
  <!-- Temporarily set height to 72 -->
  <div class="flex flex-col md:flex-row h-72">
    <Sidebar />
    <Reader>
      <slot />
    </Reader>
  </div>
  <Footer />
</div>

<!-- <pre>{JSON.stringify($chapterQueryStore.data.chapters)}</pre> -->
