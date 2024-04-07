<script>
  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Import components
  import InteractiveVerse from "$lib/components/wrapper/interactive_wrappers/InteractiveVerse.svelte";

  // Get paragraph content from the parent component
  export let paragraph_content;
  let interactive_block_id = paragraph_content.id;

  // Import font
  import '@fontsource/kaushan-script';

  // $: console.log("Paragraph content is:", paragraph_content);
</script>

<div class="relative">
  {#each paragraph_content.images as image}
    <img
      src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
      alt="interactive block"
      type="standard"
    />
  {/each}

  <div class="flex flex-col absolute md:bottom-8 md:right-8 bottom-1 right-3 text-right">
    {#each paragraph_content.rich_text_caption as paragraph}
        <InteractiveVerse>
          {paragraph}
        </InteractiveVerse>
    {/each}
  </div>
</div>

