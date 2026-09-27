<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { site } from '$lib/data/site';
	import { cases } from '$lib/data/cases';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, MapPin, Ruler, Package } from '@lucide/svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const galleryImages = cases.map((c) => ({ src: c.image, alt: c.title }));
	let lbIndex = $state(-1);
</script>

<SeoHead title="工程案例" description="贵润水漆精选工程案例——住宅小区、商业综合体、工业园区等外墙涂装工程" />

<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h1 class="text-4xl font-bold tracking-tight text-foreground">工程案例</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
				500+工程项目经验，涵盖住宅、商业、工业等全场景
			</p>
		</ScrollReveal>
	</div>
</section>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<StaggerContainer stagger={80} class="grid gap-8 md:grid-cols-2">
			{#each cases as item, i}
				<Card.Root
					class="group overflow-hidden border-stone-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
				>
					<button type="button" class="block w-full cursor-pointer" onclick={() => (lbIndex = i)}>
						<div class="aspect-16/10 overflow-hidden bg-stone-light">
							<img src={item.image} alt={item.title} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
						</div>
					</button>
					<Card.Header>
						<div class="flex items-center gap-2">
							<Badge variant="secondary">{item.product}</Badge>
						</div>
						<Card.Title class="text-xl transition-colors group-hover:text-brand">{item.title}</Card.Title>
						<Card.Description class="text-sm leading-relaxed">{item.description}</Card.Description>
					</Card.Header>
					<Card.Footer class="flex-wrap gap-4 text-sm text-muted-foreground">
						<div class="flex items-center gap-1">
							<MapPin class="h-4 w-4 text-brand" />
							{item.location}
						</div>
						<div class="flex items-center gap-1">
							<Ruler class="h-4 w-4 text-brand" />
							{item.area}
						</div>
						<div class="flex items-center gap-1">
							<Package class="h-4 w-4 text-brand" />
							{item.product}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</StaggerContainer>
	</div>
</section>

<section class="bg-stone-light py-16">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h2 class="text-2xl font-bold text-foreground">有项目需要外墙涂装？</h2>
			<p class="mt-3 text-muted-foreground">提供免费技术咨询和工程报价，专业团队为您服务</p>
			<Button href="tel:{site.phone}" class="mt-6 bg-brand text-white transition-all hover:bg-brand-dark active:scale-95">
				立即咨询
				<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
			</Button>
		</ScrollReveal>
	</div>
</section>

<Lightbox images={galleryImages} bind:index={lbIndex} />
