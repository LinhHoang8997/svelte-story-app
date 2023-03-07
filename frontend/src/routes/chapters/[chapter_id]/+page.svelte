<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  import ChapterContent from "$lib/components/wrapper/ChapterContent.svelte";
  import { page } from "$app/stores";

  // Using the GQL Store via manual loading from +page.js
  // export let data;
  // $: ({ IndividualChapterQuery } = data)

  // $: console.log($IndividualChapterQuery)

  // Parse the data first
  export let data;
  $: ({ chapter_data } = data)

</script>

<Seo
  title="Chapter Individual"
  description="The Official place for Steel, Fire, and Velvet"
/>

<ChapterContent {chapter_data}/>