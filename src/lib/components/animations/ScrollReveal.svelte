<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
		delay?: number;
		y?: number;
		duration?: number;
		once?: boolean;
	}

	let {
		children,
		class: className = '',
		delay = 0,
		y = 20,
		duration = 600,
		once = true
	}: Props = $props();

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
				threshold: 0.1,
				rootMargin: '0px 0px -40px 0px'
			}
		);

		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class={cn(
		'transition-all duration-600 ease-out',
		visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
		className
	)}
	style:transition-delay="{delay}ms"
	style:transition-duration="{duration}ms"
	style:transform={visible ? 'translateY(0)' : `translateY(${y}px)`}
>
	{@render children()}
</div>
