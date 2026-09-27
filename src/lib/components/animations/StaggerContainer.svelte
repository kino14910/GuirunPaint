<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
		stagger?: number;
		once?: boolean;
	}

	let { children, class: className = '', stagger = 80, once = true }: Props = $props();

	let element: HTMLElement;
	let visible = $state(false);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						if (once) observer.unobserve(entry.target);
					} else if (!once) {
						visible = false;
					}
				});
			},
			{
				threshold: 0.08,
				rootMargin: '0px 0px -40px 0px'
			}
		);

		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class={cn('stagger-container', visible && 'stagger-visible', className)}
	style:--stagger-delay="{stagger}ms"
>
	{@render children()}
</div>

<style>
	.stagger-container > :global(*) {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s cubic-bezier(0.25, 1, 0.3, 1),
			transform 0.5s cubic-bezier(0.25, 1, 0.3, 1);
	}

	.stagger-container.stagger-visible > :global(*:nth-child(1)) { transition-delay: calc(0 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(2)) { transition-delay: calc(1 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(3)) { transition-delay: calc(2 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(4)) { transition-delay: calc(3 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(5)) { transition-delay: calc(4 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(6)) { transition-delay: calc(5 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(7)) { transition-delay: calc(6 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(8)) { transition-delay: calc(7 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(9)) { transition-delay: calc(8 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(10)) { transition-delay: calc(9 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(11)) { transition-delay: calc(10 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(12)) { transition-delay: calc(11 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(13)) { transition-delay: calc(12 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(14)) { transition-delay: calc(13 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(15)) { transition-delay: calc(14 * var(--stagger-delay, 80ms)); }
	.stagger-container.stagger-visible > :global(*:nth-child(16)) { transition-delay: calc(15 * var(--stagger-delay, 80ms)); }

	.stagger-container.stagger-visible > :global(*) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.stagger-container > :global(*) {
			transition: none;
			opacity: 1;
			transform: none;
		}
	}
</style>
