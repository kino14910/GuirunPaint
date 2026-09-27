<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { ArrowUp } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	let visible = $state(false);

	onMount(() => {
		const onScroll = () => {
			visible = window.scrollY > 400;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		onclick={scrollToTop}
		transition:fly={{ y: 12, duration: 200 }}
		class={cn(
			'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/25 transition-all duration-200 hover:scale-105 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95',
			className
		)}
		aria-label="回到顶部"
	>
		<ArrowUp class="h-5 w-5" />
	</button>
{/if}
