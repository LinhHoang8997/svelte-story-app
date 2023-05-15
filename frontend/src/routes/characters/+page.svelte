<script>
  import CharacterCard from "$lib/components/wrapper/character_wrappers/CharacterCard.svelte";



</script>

<h1 class="text-primary text-3xl font-bold">Persons of Interest</h1>

<div>
  <!-- MAIN CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">
    THE GOLDEN PALANQUIN
  </h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    <CharacterCard name="Mamoru" laconic_description="The laconic guard whose purpose to life is on loan from Shinju. Savior of Eastend."
     />
    <CharacterCard name="Raiden"/>
    <CharacterCard name="Shinju"/>
  </div>


  <!-- OTHER CHARACTERS -->
  <h2 class="text-accent text-xl text-center font-bold mt-4">
    OTHERS
  </h2>
  <div class="flex md:flex-row items-center flex-wrap">
    <CharacterCard name="Random" faction="other"/>
    <CharacterCard name="Random" faction="other"/>
    <CharacterCard name="Random" faction="other"/>
    <CharacterCard name="Random" faction="other"/>
    <CharacterCard name="Random" faction="other"/>
    <CharacterCard name="Random" faction="other"/>
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
