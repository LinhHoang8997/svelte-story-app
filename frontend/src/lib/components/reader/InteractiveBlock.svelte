<script>
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";
  import { fade } from "svelte/transition";

  // Import audio funcitons
  import { createHowlerInstance, crossFadeLoop } from "$lib/functions/audio";

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

  // Reactive variable that controls the Lightbox functionality
  let lightbox_active = false;
  $: callSoundFunction = playInteractiveBlockSound(lightbox_active);

  // Function that plays if the user opens the lightbox
  function playInteractiveBlockSound(lightbox_active) {
    // Create a Howler instance
    if (lightbox_active) {
      let sounds = paragraph_content.sounds;
    if (sounds.length > 1) {
      console.log("There are more than one sound files");
    } else {
      console.log("There is only one sound file");
      let sound = sounds[0];
      const howlerInstance = createHowlerInstance(
        `${PUBLIC_STRAPI_HOSTNAME_PORT}${sound.attributes.url}`
      );

      howlerInstance.once("load", () => {
        console.log("Sound loaded");
        crossFadeLoop(null, howlerInstance, 'fade-into-first');
      });

      // Start playing the sound under the 'fade-into-first' type
      return lightbox_active;
    }
    }
  };
</script>

<div
  on:click={() => (lightbox_active = !lightbox_active)}
  on:keyup={() => (lightbox_active = !lightbox_active)}
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

<!-- LAY OUT ELEMENTS OF THE LIGHTBOX -->
{#if lightbox_active}
  <div
    class="lightbox"
    transition:fade={{ duration: 300 }}
    on:click={() => (lightbox_active = !lightbox_active)}
    on:keyup={() => (lightbox_active = !lightbox_active)}
  >
    <div class="lightbox-container">
      <h3 class="text-white">{paragraph_content.title}</h3>
      {#each paragraph_content.images as image}
        <img
          class="flex basis-2/3 h-2/3 max-h-96 w-auto"
          src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
          alt="interactive block"
        />
      {/each}
      <div class="flex flex-col basis-1/3">
        {#each paragraph_content.rich_text_caption as paragraph}
          <p class="rich_text_caption_paragraph text-white">{paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lightbox-container {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
</style>
