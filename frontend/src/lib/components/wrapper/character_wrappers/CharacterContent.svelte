<script>
    export let character_data;
    $: console.log(character_data);
</script>
<h1 class="text-primary text-2xl font-bold"> {character_data.attributes.name}</h1>
<h2 class="text-primary text-center">{character_data.attributes.laconic_description}</h2>
<section>
    <h2 class="text-accent text-xl text-center font-bold mt-4">Bio</h2>
</section>