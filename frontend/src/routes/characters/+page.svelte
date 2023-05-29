<script>
  // Import components
  import CharacterCard from "$lib/components/wrapper/character_wrappers/CharacterCard.svelte";

  // Get data from load function defined in +page.server.js
  export let data;
  $: ({ all_characters } = data);

</script>

<h1 class="text-primary text-3xl font-bold">Persons of Interest</h1>

<div>
  <!-- MAIN CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">
    THE GOLDEN PALANQUIN
  </h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    {#each all_characters as character}
      <CharacterCard character_data = {character} filtered_by_faction = "golden_palanquin"/>
    {/each}
  </div>

  <!-- KINGDOM CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">AUTOMATA KINGDOM</h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    {#each all_characters as character}
      <CharacterCard character_data = {character} filtered_by_faction = "kingdom"/>
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
