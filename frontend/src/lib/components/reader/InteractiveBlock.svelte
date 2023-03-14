<script>
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";
  import { fade } from "svelte/transition";

  // Import audio funcitons
  import { createHowlerInstance, crossFadeLoop } from "$lib/functions/audio";

  // Import the howler Svelte store to control the audio queue
  import { howler_queue } from "$lib/stores/howlerStores.js";
  $: console.log("For debugging purposes, the current value of the Howler queue is", $howler_queue);

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

    // Create Howler instances for all sounds in the block
    let sounds = paragraph_content.sounds;
    if (sounds) {
      sounds.forEach((sound) => {
        // Check if each of these sounds matches any of the Howler instances in the queue
        let matched_howler_instance = $howler_queue.find(
          (howler_instance) =>
            howler_instance._src === `${PUBLIC_STRAPI_HOSTNAME_PORT}${sound.attributes.url}`
        );

        if (!matched_howler_instance) {
          console.log(
            "There exists no Howler instance in the queue with the same URL as this sound"
          );
          const howler_instance = createHowlerInstance(
            `${PUBLIC_STRAPI_HOSTNAME_PORT}${sound.attributes.url}`
          );
          console.log(
            "Created Howler instance for",
            sound.attributes.url,
            "and added it to the Howler queue"
          );
          $howler_queue = [...$howler_queue, howler_instance];
        } else {
          console.log(
            "A Howler instance in the queue with the same URL as this sound already exists. No need to create a new Howler instance."
          );
        }
      });
    } else {
      console.log("There are no sounds in this interactive block");
    }
  });

  // Reactive variable that controls the Lightbox functionality
  let lightbox_active = false;

  // Function that plays if the user opens the lightbox
  function handleLightbox() {
    lightbox_active = !lightbox_active;
    let first_sound_url = paragraph_content.sounds[0].attributes.url;

    function playInteractiveBlockSound(lightbox_active) {
      // Create a Howler instancez
      if (lightbox_active) {
        if ($howler_queue.length > 0) {
          console.log("There exists a Howler instance in the queue");

          // Write a function to check if the sound's url matches any of the Howler instances in the queue
          let matched_howler_instance = $howler_queue.find(
            (howler_instance) =>
              howler_instance._src ===
              `${PUBLIC_STRAPI_HOSTNAME_PORT}${first_sound_url}`
          );

          if (
            matched_howler_instance.state() === "loaded" &&
            !matched_howler_instance.playing()
          ) {
            console.log("Sound loaded");
            crossFadeLoop(null, matched_howler_instance, "fade-into-first");
          }
          // Start playing the sound under the 'fade-into-first' type
          return lightbox_active;
        }
      }
    }

    const x = playInteractiveBlockSound(lightbox_active);
  }
</script>

<div
  on:click={handleLightbox}
  on:keyup={handleLightbox}
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
