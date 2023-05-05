<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  import ChapterContent from "$lib/components/wrapper/ChapterContent.svelte";

  // Parse the data first
  export let data;
  $: ({ chapter_data } = data)

</script>

<Seo
  title = {chapter_data.attributes.title}
  description={chapter_data.attributes.description}
/>

<ChapterContent {chapter_data}/>