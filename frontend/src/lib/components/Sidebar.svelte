<script>
      import { getContextClient, gql, queryStore } from "@urql/svelte";

    const chapterQueryStore = queryStore({
    client: getContextClient(),
    query: gql`
      query AllChapterTitles {
        chapters {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
      }
    `,
  });


  $: console.log($chapterQueryStore);
</script>


<div class="sidebar_container flex flex-col md:basis-1/6 md:hover:basis-1/4 transition-all duration-500 overflow-y-auto border-double border-r-4  border-yellow-600">
    <ul>
        <li>
            <div class="flex text-xl p-2 border-b-2 border-double justify-center font-bold border-rose-900 text-white">🕮 Chapter List</div>
            
                {#each $chapterQueryStore.data.chapters.data as chapter}
                    <a href="chapters/{chapter.attributes.slug}" class="chapter_link flex text-xl p-2 border-b-2 border-double justify-center font-bold border-rose-900 text-white">{chapter.attributes.title}</a>
                {/each}
        </li>
    </ul>

</div>

<style>
    .chapter_link {
    border-image-slice: 42 42 42 42;
    border-image-width: 12px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: round round;
    border-image-source: url("https://mdn.github.io/css-examples/tools/border-image-generator/border-image-6.svg");
    border-style: solid; 
}

    .sidebar_container {
        background-image: url('$lib/assets/images/patterns/triangles_pattern.webp');
        background-color: rgb(195, 1, 1);
        background-blend-mode: multiply;
        background-repeat: repeat ;
    }
</style>