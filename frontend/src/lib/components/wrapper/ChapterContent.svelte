<script>
  import { filterParagraphData } from "$lib/functions/filterParagraphData";

  import { onMount, afterUpdate } from "svelte";
  import { animate, spring, stagger} from "motion";

  import { PUBLIC_STRAPI_HOSTNAME_PORT } from '$env/static/public'

  export let chapter_data;

  // Return data of interactive elements from special bracketed p_tags_text inside of the content returned from Strapi
  $: content = filterParagraphData(chapter_data);

  console.log(chapter_data);

  // Get link of Header Hero image
  $: header_hero_image_url = chapter_data.attributes.chapter_header_media[0].hero_image.data.attributes.url;

  // ANIMATION TO START ONCE THE COMPONENT IS LOADED (Mounted)

  onMount(() => {
    animate(
      ".chapter_paragraph",
      {
        opacity: [0, 1]
      },
      {
        delay: stagger(0.25),
        duration: 1.5,
        easing: "ease-in-out",
      }
    );
  });

  afterUpdate(() => {
    animate(
      ".chapter_paragraph",
      {
        opacity: [0, 1],
        x: [20, 0]
      },
      {
        delay: stagger(0.25),
        duration: 0.5,
        easing: spring({ damping: 60 })
      }
    );
  });
</script>

<div>
  <h1 class="text-lg font-bold">{chapter_data.attributes.title}</h1>
  <div>
    {@html chapter_data.attributes.blurb}
  </div>
  <img src="{PUBLIC_STRAPI_HOSTNAME_PORT}{header_hero_image_url}" alt="hero"/>
  <div>
    {#each content as paragraph}
      <p class="chapter_paragraph">{paragraph}</p>
      <br />
    {/each}
  </div>
</div>
