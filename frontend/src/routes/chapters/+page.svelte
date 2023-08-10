<script>
    import Seo from '$lib/components/wrapper/Seo.svelte';
    export let data;

    // const {chapters} = data;

    // Try Houdini data

    $: ({ titles_data } = data);

    $: console.log(titles_data);

</script>


<Seo title="Chapter List" description="The Official place for Steel, Fire, and Velvet" />

<h1 class="text-lg font-bold text-primary">All the Chapters are here</h1>
    {#each titles_data.data.chapters.data as chapter}
        <a class="text-accent" href="chapters/{chapter.attributes.slug}">{chapter.attributes.title}</a>
    {/each}