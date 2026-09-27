<script lang="ts">
	import { products } from '$lib/data/products';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { ArrowRight, CheckCircle } from '@lucide/svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const galleryImages = products.map((p) => ({ src: p.image, alt: p.name }));
	let lbIndex = $state(-1);
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">产品体系</h2>
				<p class="mt-3 text-muted-foreground">全系列环保涂料产品，满足不同场景需求</p>
			</div>
		</ScrollReveal>
		<div class="mt-16 space-y-16">
			{#each products.slice(0, 6) as product, i}
				{@const reversed = i % 2 !== 0}
				<ScrollReveal delay={i * 60}>
					<div class="grid items-center gap-10 lg:grid-cols-2">
						<div class={reversed ? 'lg:order-2' : ''}>
							<button type="button" class="group block w-full cursor-pointer" onclick={() => (lbIndex = i)}>
								<div class="aspect-[4/3] overflow-hidden rounded-2xl bg-stone-light">
									<img src={product.image} alt={product.name} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" />
								</div>
							</button>
						</div>
						<div class={reversed ? 'lg:order-1' : ''}>
							<h3 class="text-2xl font-bold text-foreground">{product.name}</h3>
							<p class="mt-3 text-muted-foreground leading-relaxed">{product.description}</p>
							<div class="mt-6 space-y-2">
								{#each product.features.slice(0, 4) as feature}
									<div class="flex items-center gap-2 text-sm">
										<CheckCircle class="h-4 w-4 text-brand" />
										<span>{feature}</span>
									</div>
								{/each}
							</div>
							<Button href="/products/{product.slug}" class="mt-6 bg-brand text-white transition-all hover:bg-brand-dark active:scale-95">
								查看详情
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</Button>
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
		<ScrollReveal delay={200}>
			<div class="mt-16 text-center">
				<Button href="/products" variant="outline" class="border-brand text-brand transition-all hover:bg-brand/5 active:scale-95">
					查看全部产品
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
				</Button>
			</div>
		</ScrollReveal>
	</div>
</section>

<Lightbox images={galleryImages} bind:index={lbIndex} />
