<script>
    import { page } from '$app/stores';
    export let title;
    export let description;
    $: url = $page.url.href;
</script>


<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}" />
	<meta name="og:title" content="{title}" />
	<meta name="og:description" content="{description}" />
	{@html `<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebPage",
            "url": "${url}",
			"name": "${title}",
			"description": "${description}"
		}
	</script>`}
</svelte:head>