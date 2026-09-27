<script lang="ts">
	import { cases } from '$lib/data/cases';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, MapPin, Ruler } from '@lucide/svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const galleryImages = cases.map((c) => ({ src: c.image, alt: c.title }));
	let lbIndex = $state(-1);
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">工程案例</h2>
				<p class="mt-3 text-muted-foreground">精选项目案例，见证品质实力</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={80} class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each cases as item, i}
				<Card.Root
					class="group overflow-hidden border-0 bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
				>
					<button type="button" class="aspect-4/3 cursor-pointer bg-stone-light overflow-hidden" onclick={() => (lbIndex = i)}>
						<img src={item.image} alt={item.title} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
					</button>
					<Card.Header class="pb-2">
						<Card.Title class="line-clamp-1 text-base transition-colors group-hover:text-brand">{item.title}</Card.Title>
						<Card.Description class="line-clamp-2">{item.summary}</Card.Description>
					</Card.Header>
					<Card.Footer class="flex-col items-start gap-2 text-xs text-muted-foreground">
						<div class="flex items-center gap-1">
							<MapPin class="h-3 w-3" />
							{item.location}
						</div>
						<div class="flex items-center gap-1">
							<Ruler class="h-3 w-3" />
							{item.area}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</StaggerContainer>
		<ScrollReveal delay={200}>
			<div class="mt-10 text-center">
				<Button href="/cases" variant="outline" class="border-brand text-brand transition-all hover:bg-brand/5 active:scale-95">
					查看更多案例
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
				</Button>
			</div>
		</ScrollReveal>
	</div>
</section>

<Lightbox images={galleryImages} bind:index={lbIndex} />
