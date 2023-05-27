<script>
  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Get paragraph content from the parent component
  export let paragraph_content;
  let interactive_block_id = paragraph_content.id;

  $: console.log("Paragraph content is:", paragraph_content);
</script>

<div class="relative">
  {#each paragraph_content.images as image}
    <img
      src="{PUBLIC_STRAPI_HOSTNAME_PORT}{image.attributes.url}"
      alt="interactive block"
      type="standard"
    />
  {/each}

  <div class="absolute top-8 left-12">
    {#each paragraph_content.rich_text_caption as paragraph}
    <!-- To replace p tags with motion-enabled component -->
      <p class="text-3xl text-black font-bold mb-4 text-shadow-lg shadow-gray-800">
        {paragraph}
      </p>
    {/each}
  </div>
</div>
