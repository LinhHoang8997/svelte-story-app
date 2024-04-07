<script>
  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Import components
  import InteractiveVerse from "$lib/components/wrapper/interactive_wrappers/InteractiveVerse.svelte";

  // Get paragraph content from the parent component
  export let paragraph_content;
  let interactive_block_id = paragraph_content.id;

  // Import font
  import "@fontsource/kaushan-script";

  // Set the default height of the curtain area
  let curtain_height = "250px";
</script>

<div class="relative">
  <div class="curtain" style="--curtain-height: {curtain_height}">
    <div class="curtain_wrapper">
      <input type="checkbox" checked />
      <div
        class="curtain_panel curtain_panel_left"
        style="--curtain-height: {curtain_height}"
      >
        <p>Left Curtain</p>
      </div>
      {#each paragraph_content.images as image}
        <div class="hidden_item" style="--curtain-height: {curtain_height}">
          <img
            style="--curtain-height: {curtain_height}"
            src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
            alt="interactive block"
            type="standard"
          />
        </div>
      {/each}
      <div
        class="curtain_panel curtain_panel_right"
        style="--curtain-height: {curtain_height}"
      >
        <p>Right Curtain</p>
      </div>
    </div>
  </div>
</div>

<style>
  .curtain {
    margin: 0 auto;
    width: 100%;
    height: var(--curtain-height);
    overflow: hidden; /* to slide panels outside the container without them being visible/changing layout */
  }

  .curtain_wrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }

  input[type="checkbox"] {
    position: absolute; /* Force the checkbox at the start of the container */
    cursor: pointer; /* Indicate the curtain is clickable */
    width: 100%; /* The checkbox is as wide as the component */
    height: 100%; /* The checkbox is as tall as the component */
    z-index: 100; /* Make sure the checkbox is on top of everything else */
    opacity: 0; /* Hide the checkbox */
    top: 0;
    left: 0;
  }

  /* Slide the first panel in */
  input[type="checkbox"]:checked ~ div.curtain_panel_left {
    transform: translateX(0);
  }

  /* Slide the second panel in */
  input[type="checkbox"]:checked ~ div.curtain_panel_right {
    transform: translateX(0);
  }

  .curtain_panel_left {
    transform: translateX(-100%);
  }

  /* Slide the panel to the right out of the container */
  .curtain_panel_right {
    transform: translateX(100%);
  }

  .curtain_panel {
    display: flex;
    background: #b50101;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: var(--curtain-height);
    /* max-height: 300px; */
    position: relative;
    z-index: 2;
    transition: all 1s ease-out; /* Animates the sliding transition */
  }

  .hidden_item {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    height: var(--curtain-height);
    width: 100%;
  }

  .hidden_item img {
    max-height: var(--curtain-height);
    width: auto;
    object-fit: cover;
    object-position: 50% 0; /*To set image to show the top part, and the middle of the image, when the image is larger than the container  */
  }
</style>
