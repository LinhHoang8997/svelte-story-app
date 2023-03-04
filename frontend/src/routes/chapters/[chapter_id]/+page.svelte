<script>
    import Seo from '$lib/components/wrapper/Seo.svelte';

    export let data;
    const {IndividualChapterQuery} = data;

    $: console.log($IndividualChapterQuery);

</script>

<Seo title="Chapter Individual" description="The Official place for Steel, Fire, and Velvet" />

{#if $IndividualChapterQuery.fetching}
    <p>Loading</p>
{:else}
    <h1 class="text-lg font-bold">{$IndividualChapterQuery.data.chapters.data[0].attributes.title}</h1>
    <p>{$IndividualChapterQuery.data.chapters.data[0].attributes.content}</p>
{/if}