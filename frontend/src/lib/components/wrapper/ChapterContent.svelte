<script>
  import { font_size_store } from "$lib/stores/appearanceStores";

  // Import Svelte components
  import TextOnlyParagraph from "$lib/components/reader/TextOnlyParagraph.svelte";
  import InteractiveBlockLightbox from "$lib/components/reader/InteractiveBlockLightbox.svelte";
  import InteractiveImage from "$lib/components/wrapper/interactive_wrappers/InteractiveImage.svelte";

  // Import functions
  import { filterParagraphData } from "$lib/functions/filterParagraphData";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";
  import { onMount } from "svelte";

  // Get data from load function defined in +page.server.js
  export let chapter_data;

  // Return data of interactive elements from special bracketed p_tags_text inside of the content returned from Strapi
  $: content = filterParagraphData(chapter_data);

  // Get link of Header Hero image
  $: header_hero_image_url =
    chapter_data.attributes.chapter_header_media[0].hero_image.data.attributes
      .url;

  //Function to capture user selected text - features to be added later
  let current_selection;

  onMount(() => {
    document.addEventListener("selectionchange", () => {
      current_selection = window.getSelection().toString();
    });
  });

  // $: console.log("Current selection is:", current_selection)
</script>

<div>
  <!-- Main Headline -->
  <h1
    class="font-bold text-primary transition-size duration-300 ease-in-out text-center"
    class:text-lg={$font_size_store == "small"}
    class:text-xl={$font_size_store == "medium"}
    class:text-3xl={$font_size_store == "large"}
  >
    {chapter_data.attributes.title}
  </h1>
  <!-- Container of main blurb -->
  <div
    class="text-primary transition-size duration-300 ease-in-out"
    class:text-sm={$font_size_store == "small"}
    class:text-base={$font_size_store == "medium"}
    class:text-lg={$font_size_store == "large"}
  >
    {@html chapter_data.attributes.blurb}
  </div>

  <!-- Container of Header image -->
  <InteractiveImage
    src="{PUBLIC_STRAPI_HOSTNAME_PORT}{header_hero_image_url}"
    alt="hero"
  />
  <!-- Container of main content -->
  <div
    class="transition-size duration-300 ease-in-out"
    class:text-sm={$font_size_store == "small"}
    class:text-base={$font_size_store == "medium"}
    class:text-lg={$font_size_store == "large"}
  >
    {#each content as paragraph}
      {#if paragraph.type === "regular"}
        <TextOnlyParagraph paragraph_content={paragraph.content} />
      {:else if paragraph.type === "interactive_block"}
          {#if paragraph.content.type === "standard_lightbox"}
            <InteractiveBlockLightbox paragraph_content={paragraph.content} />
          {:else if paragraph.content.type === "standard_poem"}
            <div> Placeholder for a poem element here</div>
          {/if}
      {/if}
      <br />
    {/each}
  </div>
</div>
