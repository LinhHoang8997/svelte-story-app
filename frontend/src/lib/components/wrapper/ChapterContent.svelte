<script>
  import { filterParagraphData } from "$lib/functions/filterParagraphData";

  export let chapter_data;

  // Return data of interactive elements from special bracketed p_tags_text inside of the content returned from Strapi
  $: content = filterParagraphData(chapter_data);
</script>

<div>
  <h1 class="text-lg font-bold">{chapter_data.attributes.title}</h1>
  <div>
    {#each content as paragraph}
      <p class="test-p-animation">{paragraph}</p>
      <br>
    {/each}
  </div>
</div>
