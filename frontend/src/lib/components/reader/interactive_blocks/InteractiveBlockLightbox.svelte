<script>
  import { onMount } from "svelte";
  // import { createLoadObserver } from "$lib/functions/utils";
  import { animate } from "motion";
  import { fade } from "svelte/transition";
  import { graphql } from "$houdini";

  // Import Interactive wrapper components
  import InteractiveParagraph from "$lib/components/wrapper/interactive_wrappers/InteractiveParagraph.svelte";
  import InteractiveImage from "$lib/components/wrapper/interactive_wrappers/InteractiveImage.svelte";

  // Import audio funcitons
  import { createHowlerInstance, crossFadeLoop } from "$lib/functions/audio";

  // Import the howler Svelte store to control the audio queue
  import { howler_queue, metadata_queue } from "$lib/stores/howlerStores.js";
  // $: console.log(
  //   "For debugging purposes, the current value of the Howler queue is",
  //   $howler_queue
  // );
  // $: console.log(
  //   "For debugging purposes, the current value of the metadata queue is (this is to get the name of sound)",
  //   $metadata_queue
  // );

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Get paragraph content from the parent component
  export let paragraph_content;
  let interactive_block_id = paragraph_content.id;

  // Get data from GraphQL store for sounds to play
  export const _SoundtracksBlockQueryVariables = () => {
    return { id: interactive_block_id };
  };
  const soundtrack_store = graphql(`
    query SoundtracksBlockQuery($id: String!) @load {
      interactiveBlocks(
        filters: { interactive_block_id: { eq: $id } }
        pagination: { page: 1, pageSize: 20 }
      ) {
        data {
          attributes {
            soundtracks {
              data {
                attributes {
                  soundtrack_id
                  title
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
  // $: console.log("Watching the soundtracks variable", soundtracks);

  $: if (!$soundtrack_store.fetching) {
    console.log(
      "The soundtrack store is no longer fetching for: ",
      interactive_block_id
    );
    if ($soundtrack_store.data) {
      // Get the soundtracks from the store
      let soundtracks_from_response =
        $soundtrack_store.data.interactiveBlocks.data[0].attributes.soundtracks
          .data;

      if (soundtracks_from_response.length > 0) {
        console.log("The soundtrack store has data");
        soundtracks = soundtracks_from_response.map((soundtrack) => {
          return {
            id: soundtrack.attributes.soundtrack_id,
            title: soundtrack.attributes.title,
            description: soundtrack.attributes.description,
            trackfile_url: soundtrack.attributes.track_file.data.attributes.url,
          };
        });
      } else {
        console.log("The soundtrack store has no data");
      }
    }
  }

  // Create Howler instances for all sounds in the block
  $: if (soundtracks) {
    soundtracks.forEach((track) => {
      console.log("Checking if a Howler instance exists for", track.title);
      // Check if each of these tracks matches any of the Howler instances in the queue
      let matched_howler_instance = $howler_queue.find(
        (howler_instance) =>
          howler_instance._src ===
          `${PUBLIC_STRAPI_HOSTNAME_PORT}${track.trackfile_url}`
      );

      if (!matched_howler_instance) {
        console.log(
          "There exists no Howler instance in the queue with the same URL as this track"
        );
        const howler_instance = createHowlerInstance(
          `${PUBLIC_STRAPI_HOSTNAME_PORT}${track.trackfile_url}`
        );

        console.log("Created Howler instance for", track.trackfile_url);

        const metadata_object = {
          track_filename: track.trackfile_url.split("/").pop(),
          track_title: track.title,
          howler_instance: howler_instance,
        };

        // Assign the Howler instance to the queue + info about the track in the metadata queue
        $howler_queue = [...$howler_queue, howler_instance];
        $metadata_queue = [...$metadata_queue, metadata_object];
      } else {
        console.log(
          "A Howler instance in the queue with the same URL as this track already exists. No need to create a new Howler instance."
        );
      }
    });
  } else {
    console.log("There are no tracks in this interactive block");
  }

  // Function that animates the text
  function startTextLoadAnimation() {
    animate(
      ".interactive_block_wrapper",
      {
        opacity: [0, 1],
      },
      {
        duration: 1.5,
        easing: "ease-in-out",
      }
    );
  }

  // Start the text loading animation when the component mounts
  onMount(() => {
    startTextLoadAnimation();
  });

  // Start the text cascade animation when the component mounts
  // const onload = createLoadObserver(() => {
  //       console.log('loaded!!!')
  //   })

  // Reactive variable that controls the Lightbox functionality
  let lightbox_active = false;

  // Function that plays if the user opens the lightbox
  function handleLightbox() {
    lightbox_active = !lightbox_active;
    let first_sound_url = soundtracks[0].trackfile_url;

    if (first_sound_url) {
      console.log(
        "The first sound URL exists",
        first_sound_url,
        "and will be playing"
      );
      playInteractiveBlockSound(lightbox_active);
    }

    function playInteractiveBlockSound(lightbox_active) {
      // Check if there are any Howler instances in the queue
      if ($howler_queue.length > 0) {
        console.log("There exists a Howler instance in the queue");

        // Check to find the first Howler instance that is playing
        const playing_howler_instance = $howler_queue.find((howler_instance) =>
          howler_instance.playing()
        );

        // Check if the lightbox is just turned on - active, then play the first sound that matches the audio embedded within the Interactive Block
        if (lightbox_active) {
          console.log("LIGHTBOX ACTIVE");
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
              console.log(
                "Nothing in the queue is playing. Start playing the sound in Interactive Block."
              );
              crossFadeLoop(null, matched_howler_instance, "fade-into-first");
            }
            // Start playing the sound under the 'fade-into-first' type
            return lightbox_active;
          }
        } else {
          console.log("LIGHTBOX DISABLED");
          // If there is a Howler instance currently playing, stop it
          if (playing_howler_instance) {
            crossFadeLoop(playing_howler_instance, null, "fade-into-void");
          }
        }
      }
    }
  }
</script>

<div
  on:click={handleLightbox}
  on:keyup={handleLightbox}
  class="interactive_block_wrapper"
>
  {#each paragraph_content.images as image}
    <InteractiveImage
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
    on:click={handleLightbox}
    on:keyup={handleLightbox}
  >
    <div class="lightbox-container">
      <h3 class="text-secondary text-lg font-bold">
        {paragraph_content.title}
      </h3>
      {#each paragraph_content.images as image}
        <InteractiveImage
          src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
          alt="interactive block"
          type="lightbox"
        />
      {/each}
      <div class="flex flex-col basis-1/3">
        {#each paragraph_content.rich_text_caption as paragraph}
          <InteractiveParagraph>
            {paragraph}
          </InteractiveParagraph>
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
    border-radius: 0.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>
