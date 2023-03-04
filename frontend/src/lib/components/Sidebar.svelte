<script>
    export let chapter_data;
</script>


<div class="sidebar_container flex flex-col md:basis-1/6 md:hover:basis-1/4 transition-all duration-500 overflow-y-auto border-double border-r-4  border-yellow-600">
    <ul>
        <li>
            <div class="flex text-xl p-2 border-b-2 border-double justify-center font-bold border-rose-900 text-white">🕮 Chapter List</div>
        </li>
        {#each chapter_data as chapter}
            <li>
                <a href="{chapter.url}" class="chapter_link flex text-xl p-2 border-b-2 border-double justify-center font-bold border-rose-900 text-white">{chapter.title}</a>
            </li>
        {/each}
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