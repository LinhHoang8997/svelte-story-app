<script>
  import { page } from "$app/stores";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
  let current_page_path = $derived($page.route.id);
  let home = $derived(current_page_path === "/" || current_page_path === "/index.html");
</script>

<section
  class="reader_wrapper flex flex-col md:basis-5/6 items-center transition-all duration-500 bg-orange-200"
>
  <main class="flex flex-col w-full items-center scroll-smooth p-6 md:p-4">
    {#if home}
      <slot/>
    {:else}
      <slot/>
      <a href="/" class="text-2xl text-center text-black mb-6">Return to Home</a
      >
    {/if}
  </main>
</section>

<style>
  .reader_wrapper {
    background-image: url("$lib/assets/images/patterns/fabric_1.webp");
    background-color: #f9cdaa;
    background-blend-mode: multiply;
    background-repeat: repeat;
  }

  .reading_view {
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE and Edge */
  }

  .reading_view::-webkit-scrollbar {
    display: none;
  }

  .reading_view p {
    scroll-snap-align: start;
    overflow: visible;
  }

</style>
