<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		value: number;
		duration?: number;
		suffix?: string;
		prefix?: string;
	}

	let { value, duration = 1500, suffix = '', prefix = '' }: Props = $props();

	let element: HTMLElement;
	let display = $state(0);
	let hasAnimated = false;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			display = value;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						hasAnimated = true;
						animate();
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	});

	function animate() {
		const start = performance.now();
		const tick = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			display = Math.round(eased * value);
			if (progress < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}
</script>

<span bind:this={element}>{prefix}{display}{suffix}</span>
