<script>
    import Seo from '$lib/components/wrapper/Seo.svelte';
    export let data;

    // const {chapters} = data;

    // Try Houdini data

    $: ({ AllChapterTitles } = data);

    $: console.log($AllChapterTitles);

</script>


<Seo title="Chapter List" description="The Official place for Steel, Fire, and Velvet" />

<h1 class="text-lg font-bold">All the Chapters are here</h1>

{#each $AllChapterTitles.data.chapters.data as chapter}
    <a href="chapters/{chapter.attributes.slug}">{chapter.attributes.title}</a>
{/each} 