<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  import ChapterContent from "$lib/components/wrapper/ChapterContent.svelte";

  // Parse the data first
  export let data;
  $: ({ content, chapter_data } = data)

  $: console.log(content);

  $: console.log(chapter_data);

</script>

<Seo
  title = {chapter_data.title}
  description={chapter_data.description}
/>

<ChapterContent {chapter_data} {content}/>