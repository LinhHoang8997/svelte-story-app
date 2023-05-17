<script>
  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Import components
  import CharacterCard from "$lib/components/wrapper/character_wrappers/CharacterCard.svelte";

  // Get data from load function defined in +page.server.js
  export let data;
  $: ({ all_characters, main_characters, other_characters } = data);

</script>

<h1 class="text-primary text-3xl font-bold">Persons of Interest</h1>

<div>
  <!-- MAIN CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">
    THE GOLDEN PALANQUIN
  </h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    {#each main_characters as main_character}
      <CharacterCard
        name={main_character.attributes.name}
        laconic_description={main_character.attributes.laconic_description}
        faction={main_character.attributes.faction}
        first_image_profile_url={PUBLIC_STRAPI_HOSTNAME_PORT}{main_character.attributes.profile_images.data[0].attributes.url}
      />
    {/each}
  </div>

  <!-- OTHER CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">OTHERS</h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    {#each other_characters as other_character}
      <CharacterCard
        name={other_character.attributes.name}
        laconic_description={other_character.attributes.laconic_description}
        faction={other_character.attributes.faction}
      />
    {/each}
  </div>
</div>

<!--
<p class='text-primary'>
  I am the bone of my sword Steel is my body, and fire is my blood I have
  created over a thousand blades Unknown to death Nor known to life Have
  withstood pain to create many weapons Yet, those hands will never hold
  anything So as I pray,
  <span class="tooltip" data-tip="Edgy archer boi">
    <span>unlimited blade works</span>
  </span>
</p> -->
