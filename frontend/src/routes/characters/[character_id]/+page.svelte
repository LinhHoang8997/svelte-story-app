<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  import CharacterContent from "$lib/components/wrapper/CharacterContent.svelte";

  // Import CharacterContent component

  // Parse the data first
  export let data;
  $: ({ character_data } = data);

  $: console.log(character_data);
</script>

<Seo
  title="Default Character Page"
  description="Default Character Description"
/>

<!-- Use the CharacterContent component here -->
<CharacterContent {character_data} />