<script>
  export let chapters_data;

  import { scroll } from "motion";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  $: current_chapter_slug = $page.params.chapter_id;

  let chapter_list_adjustment_box;

    onMount(() => {
      scroll(({ y }) => {
        if (window.innerWidth > 640) {
          chapter_list_adjustment_box.style.height = y.current + "px";
        } else {
          chapter_list_adjustment_box.style.height = "0px";
        }
      });
    }
    )

</script>

<div
  class="sidebar_container flex flex-col md:basis-1/6 md:hover:basis-1/4 transition-all duration-500 overflow-y-auto border-double border-r-4  border-yellow-600"
>
  <ul>
    <li bind:this={chapter_list_adjustment_box}
      class="flex bg-transparent h-0 m-0 transition-all duration-500 ease-in-out"
      id="chapter-list-adjustment-box"
    />
    <li>
      <div
        class="flex text-xl p-2 border-b-2 border-double justify-center font-bold border-rose-900 text-white"
      >
        <a href="/chapters">🕮 Latest Chapters</a>
      </div>
    </li>
    {#each chapters_data as chapter}
      <li>
        <a 
          href="/chapters/{chapter.attributes.slug}"
          class="flex text-primary items-center h-8 p-2 border-b-2 border-rose-900 border-double justify-center hover:font-semibold bg-orange-400 hover:bg-orange-700  hover:text-gray-200 transition-all"
          class:bg-orange-800={chapter.attributes.slug === current_chapter_slug}
          class:text-secondary={chapter.attributes.slug === current_chapter_slug}
          >{chapter.attributes.title}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  .sidebar_container {
    background-image: url("$lib/assets/images/patterns/triangles_pattern.webp");
    background-color: rgb(195, 1, 1);
    background-blend-mode: multiply;
    background-repeat: repeat;
  }
</style>
