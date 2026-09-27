<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { site } from '$lib/data/site';
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

<SeoHead title="产品中心" description="贵润水漆全系列产品——天然仿石漆、水性工业漆等，满足不同场景需求" />

<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h1 class="text-4xl font-bold tracking-tight text-foreground">产品中心</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
				全系列环保涂料产品，从外墙到内墙，从防水到防腐，一站式满足您的需求
			</p>
		</ScrollReveal>
	</div>
</section>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="space-y-16">
			{#each products as product, i}
				<ScrollReveal delay={i * 60}>
					<div class="grid items-center gap-8 lg:grid-cols-2 {i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
						<div class="{i % 2 !== 0 ? 'lg:order-2' : ''}">
							<button type="button" class="group block w-full cursor-pointer" onclick={() => (lbIndex = i)}>
								<div class="aspect-4/3 overflow-hidden rounded-2xl bg-stone-light">
									<img src={product.image} alt={product.name} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" />
								</div>
							</button>
						</div>
						<div class="{i % 2 !== 0 ? 'lg:order-1' : ''}">
							<Badge variant="secondary" class="mb-4">产品系列</Badge>
							<h2 class="text-2xl font-bold text-foreground">{product.name}</h2>
							<p class="mt-3 text-muted-foreground">{product.description}</p>
							<div class="mt-6 space-y-2">
								{#each product.features as feature}
									<div class="flex items-center gap-2 text-sm">
										<CheckCircle class="h-4 w-4 text-brand" />
										<span>{feature}</span>
									</div>
								{/each}
							</div>
							<div class="mt-6 flex flex-wrap gap-2">
								{#each product.scenarios as scenario}
									<Badge variant="outline" class="border-brand/30 text-brand">{scenario}</Badge>
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
	</div>
</section>

<section class="bg-stone-light py-16">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h2 class="text-2xl font-bold text-foreground">需要专业产品推荐？</h2>
			<p class="mt-3 text-muted-foreground">我们的技术团队将根据您的项目需求，推荐最适合的产品方案</p>
			<Button href="tel:{site.phone}" class="mt-6 bg-brand text-white transition-all hover:bg-brand-dark active:scale-95">
				免费咨询报价
			</Button>
		</ScrollReveal>
	</div>
</section>

<Lightbox images={galleryImages} bind:index={lbIndex} />
