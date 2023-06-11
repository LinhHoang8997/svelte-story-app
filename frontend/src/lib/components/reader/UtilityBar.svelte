<script>
  // Import stores
  import { font_size_store } from "$lib/stores/appearanceStores";

  // Set collapsed/expanded state of the utility bar
  $: utility_bar_expanded = true;

  // Import transtion fade from Svelte
  import { fade } from 'svelte/transition';

  function setFontSize(size) {
    $font_size_store = size;
    console.log(font_size_setting);
  }

  function handleClick() {
    utility_bar_expanded = !utility_bar_expanded;
  }
</script>

<div
  class="flex flex-row items-center w-full bg-gray-800 bg-opacity-[0.97] fixed bottom-0 transition-all duration-300 ease-in-out"
  class:bg-opacity-0={!utility_bar_expanded}
>
  
  <!-- Button to collapse/exapand the utility bar -->
  <button class="btn w-32" on:click={handleClick}>
  {#if utility_bar_expanded}
    CHOOSE
  {:else}
    SETTINGS
  {/if}
  </button>
  
  {#if utility_bar_expanded}
  <div class="tab rounded-box" transition:fade="{{ duration: 200 }}"
  >
    <div class="tab text-secondary"><b>FONT SIZE</b></div>
    <button
      class="tab tab-lifted text-primary"
      class:tab-active={$font_size_store == "small"}
      on:click={() => setFontSize("small")}>Small</button
    >
    <button
      class="tab tab-lifted text-primary"
      class:tab-active={$font_size_store == "medium"}
      on:click={() => setFontSize("medium")}>Medium</button
    >
    <button
      class="tab tab-lifted text-primary"
      class:tab-active={$font_size_store == "large"}
      on:click={() => setFontSize("large")}>Large</button
    >
  </div>
  {/if}
</div>
