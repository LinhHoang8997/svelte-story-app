<script>
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";
  import { fade } from "svelte/transition";
  import { graphql } from "$houdini";

  // Import audio funcitons
  import { createHowlerInstance, crossFadeLoop } from "$lib/functions/audio";

  // Import the howler Svelte store to control the audio queue
  import { howler_queue } from "$lib/stores/howlerStores.js";
  $: console.log(
    "For debugging purposes, the current value of the Howler queue is",
    $howler_queue
  );

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Get paragraph content from the parent component
  export let paragraph_content;
  let interactive_block_id = paragraph_content.id;
  // $: console.log("The interactive block ID is", interactive_block_id);

  // Get data from GraphQL store for sounds to play
  export const _MyQueryVariables = () => {
    return { id: interactive_block_id };
  };
  const soundtrack_store = graphql(`
    query MyQuery($id: String!) @load {
      interactiveBlocks(
        filters: { interactive_block_id: { eq: $id } }
        pagination: { page: 1, pageSize: 100 }
      ) {
        data {
          id
          attributes {
            interactive_block_id
            characters {
              data {
                attributes {
                  name
                }
              }
            }
            soundtracks {
              data {
                attributes {
                  soundtrack_id
                  track_file {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
        meta {
          pagination {
            page
            pageSize
          }
        }
      }
    }
  `);

  // Get data from store when its "fetching" property is false
  let soundtracks;
  // $: console.log(
  //   "For debugging purposes, the current value of the soundtrack store is",
  //   $soundtrack_store
  // );
  $: if (!$soundtrack_store.fetching) {
    // console.log(
    //   "The soundtrack store is no longer fetching. The data is",
    //   $soundtrack_store.data
    // );

    // Get the soundtracks from the store
    soundtracks = $soundtrack_store.data;
  }

  // Function that animates the text
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
            howler_instance._src ===
            `${PUBLIC_STRAPI_HOSTNAME_PORT}${sound.attributes.url}`
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

    console.log("The first sound URL is", first_sound_url);

    function playInteractiveBlockSound(lightbox_active) {
      // Create a Howler instance
      if (lightbox_active) {
        if ($howler_queue.length > 0) {
          console.log("There exists a Howler instance in the queue");

          // Check find the first Howler instance that is playing
          const playing_howler_instance = $howler_queue.find(
            (howler_instance) => howler_instance.playing()
          );

          // Write a function to find the Howler instance in the queue that matches with the Interactive Block
          const matched_howler_instance = $howler_queue.find(
            (howler_instance) =>
              howler_instance._src ===
              `${PUBLIC_STRAPI_HOSTNAME_PORT}${first_sound_url}`
          );

          if (matched_howler_instance.state() === "loaded") {
            console.log("Sound loaded. Ready to play sound.");
            if (playing_howler_instance) {
              if (playing_howler_instance === matched_howler_instance) {
                console.log("The sound is already playing. Do nothing.");
              } else {
                console.log(
                  "Something else is playing. Fade out the current sound and fade in the new sound."
                );
                crossFadeLoop(
                  playing_howler_instance,
                  matched_howler_instance,
                  "fade-into-second"
                );
              }
            } else {
              console.log(
                "Nothing in the queue is playing. Start playing the sound in Interactive Block."
              );
              crossFadeLoop(null, matched_howler_instance, "fade-into-first");
            }
            // Start playing the sound under the 'fade-into-first' type
            return lightbox_active;
          }
        }
      }
    }

    playInteractiveBlockSound(lightbox_active);
  }
</script>

<div
  on:click={handleLightbox}
  on:keyup={handleLightbox}
  class="interactive_block_wrapper"
>
  <h3>{paragraph_content.id}</h3>
  {#each paragraph_content.images as image}
    <img
      src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
      alt="interactive block"
    />
  {/each}
</div>

<!-- LAYOUT ELEMENTS OF THE LIGHTBOX -->
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
