<script>
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  export let paragraph_content;

  function startTextLoadAnimation() {
    animate(
      ".interactive_block_wrapper",
      {
        opacity: [0, 1],
      },
      {
        delay: stagger(0.25),
        duration: 1.5,
        easing: "ease-in-out",
      }
    );
  }

  onMount(() => {
    startTextLoadAnimation();
  });

  // Lightbox
  let lightbox_active = false;
</script>

<div
  on:click={() => (lightbox_active = !lightbox_active)}
  class="interactive_block_wrapper"
>
  <h3>{paragraph_content.title}</h3>
  {#each paragraph_content.images as image}
    <img
      src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
      alt="interactive block"
    />
  {/each}
</div>

<div
  class="lightbox"
  class:active={lightbox_active}
  on:click={() => (lightbox_active = !lightbox_active)}
>
  <div class="lightbox-container">
    {#each paragraph_content.images as image}
      <img
        src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
        alt="interactive block"
      />
    {/each}
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
