<script>
    import Seo from '$lib/components/wrapper/Seo.svelte';
    export let data;

    // const {chapters} = data;

    // Try Houdini data

    $: ({ AllChapterTitles } = data);

    $: console.log($AllChapterTitles);

</script>


<Seo title="Chapter List" description="The Official place for Steel, Fire, and Velvet" />

<h1 class="text-lg font-bold text-primary">All the Chapters are here</h1>
{#if $AllChapterTitles.fetching}
    <p>Loading</p>
{:else}
    {#each $AllChapterTitles.data.chapters.data as chapter}
        <a class="text-accent" href="chapters/{chapter.attributes.slug}">{chapter.attributes.title}</a>
    {/each}
{/if}