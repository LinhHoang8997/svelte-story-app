<script>
  // Import Svelte components
  import TextOnlyParagraph from "$lib/components/reader/TextOnlyParagraph.svelte";
  import InteractiveBlock from "$lib/components/reader/InteractiveBlock.svelte";

  // Import functions
  import { filterParagraphData } from "$lib/functions/filterParagraphData";

  // Import modules necessary for animation
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  export let chapter_data;

  // Return data of interactive elements from special bracketed p_tags_text inside of the content returned from Strapi
  $: content = filterParagraphData(chapter_data);

  // Get link of Header Hero image
  $: header_hero_image_url =
    chapter_data.attributes.chapter_header_media[0].hero_image.data.attributes
      .url;

  //

</script>

<div>
  <h1 class="text-lg font-bold">{chapter_data.attributes.title}</h1>
  <div>
    {@html chapter_data.attributes.blurb}
  </div>
  <img src="{PUBLIC_STRAPI_HOSTNAME_PORT}{header_hero_image_url}" alt="hero" />
  <div>
    {#each content as paragraph}
      {#if paragraph.type === "regular"}
        <TextOnlyParagraph paragraph_content={paragraph.content} />
      {:else if paragraph.type === "interactive_block"}
        <InteractiveBlock paragraph_content={paragraph.content} />
      {/if}
      <br />
    {/each}
  </div>
</div>

