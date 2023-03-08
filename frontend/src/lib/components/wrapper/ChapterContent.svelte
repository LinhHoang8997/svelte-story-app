<script>
  // Import Svelte components
  import TextOnlyParagraph from "$lib/components/reader/TextOnlyParagraph.svelte";

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

  // console.log(chapter_data);

  // Get link of Header Hero image
  $: header_hero_image_url =
    chapter_data.attributes.chapter_header_media[0].hero_image.data.attributes
      .url;

  // ANIMATIONS
  $: pathname = $page.url.href;

  // Lightbox
  let lightbox_active = false;
</script>

<div>
  <h1 class="text-lg font-bold">{chapter_data.attributes.title}</h1>
  <div>
    {@html chapter_data.attributes.blurb}
  </div>
  <img src="{PUBLIC_STRAPI_HOSTNAME_PORT}{header_hero_image_url}" alt="hero" />
  <div>
    {#each content as paragraph}
      <TextOnlyParagraph {paragraph} />
      <br />
    {/each}
  </div>
</div>

<div on:click={() => (lightbox_active = !lightbox_active)}>
  <img src="https://picsum.photos/200/300" alt="xv" />
</div>

<div
  class="lightbox"
  class:active={lightbox_active}
  on:click={() => (lightbox_active = !lightbox_active)}
>
  <div class='lightbox-container'>
    <img src="https://picsum.photos/600/600" alt="xv" />
    <h2 class="text-white">Poem</h2>
    <p class="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
    </p>
    <p class="text-white">Lorem something</p>
  </div>
</div>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
  }

  .lightbox-container {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }

  .active {
    display: flex;
  }
</style>
