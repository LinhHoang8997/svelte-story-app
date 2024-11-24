<script>
  export let src;
  export let alt = "Test Interactive Element";
  export let type = "standard";
</script>

{#if type == "standard"}
  <div
    class="mb-4 border-4 border-amber-700 border-double hover:border-amber-600 hover:saturate-200 transition-all duration-200 ease-in-out"
  >
    <img class="" {src} {alt} />
  </div>
{:else if type == "lightbox"}
  <div
    class="flex basis-2/3 sm:w-auto w-72 h-auto border-2 border-amber-700 mb-2"
  >
    <img class="sm: max-h-[500px]" {src} {alt} />
  </div>
{/if}
