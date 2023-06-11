<script>
  import { font_size_store } from "$lib/stores/appearanceStores";

  // Import Svelte components
  import TextOnlyParagraph from "$lib/components/reader/TextOnlyParagraph.svelte";
  import InteractiveBlockLightbox from "$lib/components/reader/interactive_blocks/InteractiveBlockLightbox.svelte";
  import InteractiveBlockPoem from "$lib/components/reader/interactive_blocks/InteractiveBlockPoem.svelte";
  import InteractiveImage from "$lib/components/wrapper/interactive_wrappers/InteractiveImage.svelte";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";
  import { onMount } from "svelte";

  // Get data from load function defined in +page.server.js
  export let chapter_data;
  export let content;

  // Get link of images (Header Hero Image, Emblem)
  $: header_hero_image_url =
    chapter_data.attributes.chapter_header_media[0].hero_image.data.attributes
      .url;

  $: emblem_image_url = chapter_data.attributes.emblem.data.attributes.url;

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
  <!-- Container of the Emblem -->
  <div class="flex flex-col text-center align-middle my-2">
    <img
      class="m-auto w-14"
      src="{PUBLIC_STRAPI_HOSTNAME_PORT}{emblem_image_url}"
      alt="emblem"
    />
    <!-- <div class="flex mx-auto my-2 align-middle items-center ">
      <img
        class="w-2 invert-[.25]"
        src="$lib/assets/images/icons/sparkler.png"
        alt="sparkler"
      />
      <img
        class="w-2 invert-[.25]"
        src="$lib/assets/images/icons/sparkler.png"
        alt="sparkler"
      />
      <img
        class="w-2 invert-[.25]"
        src="$lib/assets/images/icons/sparkler.png"
        alt="sparkler"
      />
    </div> -->
  </div>

  <!-- Main Headline -->
  <h1
    class="font-bold text-primary transition-size duration-300 ease-in-out text-center"
    class:text-xl={$font_size_store == "small"}
    class:text-2xl={$font_size_store == "medium"}
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
          <InteractiveBlockPoem paragraph_content={paragraph.content} />
        {/if}
      {/if}
      <br />
    {/each}
  </div>
</div>
