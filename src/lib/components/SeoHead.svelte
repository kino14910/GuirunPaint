<script lang="ts">
	import { site } from '$lib/data/site';

	let { title, description }: { title?: string; description?: string } = $props();

	const pageTitle = $derived(title ? `${title} - ${site.name}` : `${site.name} - ${site.tagline}`);
	const pageDesc = $derived(description ?? site.description);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDesc} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDesc} />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
</svelte:head>
