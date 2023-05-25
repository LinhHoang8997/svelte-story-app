<script>
  export let src;
  export let alt = "Test Interactive Element";
  export let type = "standard";
</script>

{#if type == "standard"}
  <div
    class="mb-4 border-4 border-amber-700 border-double hover:border-amber-600 hover:saturate-150 transition-all duration-300 ease-in-out"
  >
    <img class="" {src} {alt} />
  </div>
{:else if type == "lightbox"}
  <div
    class="flex basis-2/3 h-2/3 max-h-96 w-auto border-2 border-amber-700 mb-2"
  >
    <img class="max-h-96 w-auto" {src} {alt} />
  </div>
{/if}
