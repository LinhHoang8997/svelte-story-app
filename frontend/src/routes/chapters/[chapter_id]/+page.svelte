<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  // Using manual loading from
  export let data;
  $: ({ IndividualChapter } = data)

  $: console.log($IndividualChapter)

</script>

<Seo
  title="Chapter Individual"
  description="The Official place for Steel, Fire, and Velvet"
/>

{#if $IndividualChapter.fetching}
  <p>Loading</p>
{:else}
  <h1 class="text-lg font-bold">
    {$IndividualChapter.data.chapters.data[0].attributes.title}
  </h1>
  <div>
    {@html $IndividualChapter.data.chapters.data[0].attributes.content}
  </div>
{/if}
