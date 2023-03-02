<script>
    import Seo from '$lib/components/wrapper/Seo.svelte';
    export let data;

    const {chapters} = data;
</script>


<Seo title="Chapter List" description="The Official place for Steel, Fire, and Velvet" />

<h1 class="text-lg font-bold">All the Chapters are here</h1>

{#each chapters as chapter}
    <a href="chapters/{chapter.slug}">{chapter.title}</a>
{/each} 