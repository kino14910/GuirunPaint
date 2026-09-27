<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';
	import { products } from '$lib/data/products';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { CircleCheckBig, ArrowLeft, Phone } from '@lucide/svelte';

	const product = $derived(products.find((p) => p.slug === page.params.slug));
</script>

{#if product}
	<SeoHead title={product.name} description={product.summary} />

	<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<Button href="/products" variant="ghost" size="sm" class="mb-6 text-muted-foreground">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回产品中心
			</Button>
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<Badge variant="secondary" class="mb-4">产品详情</Badge>
					<h1 class="text-4xl font-bold tracking-tight text-foreground">{product.name}</h1>
					<p class="mt-4 text-lg text-muted-foreground">{product.description}</p>
					<div class="mt-8 flex flex-wrap gap-3">
						<Button href="tel:{site.phone}" class="bg-brand text-white hover:bg-brand-dark">
							<Phone class="mr-2 h-4 w-4" />
							咨询报价
						</Button>
						<Button href="/cases" variant="outline" class="border-brand text-brand hover:bg-brand/5">
							查看工程案例
						</Button>
					</div>
				</div>
				<div class="aspect-4/3 overflow-hidden rounded-2xl bg-stone-light">
					<img src={product.image} alt={product.name} class="h-full w-full object-cover" loading="lazy" />
				</div>
			</div>
		</div>
	</section>

	<section class="bg-background py-20">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-2">
				<div>
					<h2 class="text-2xl font-bold text-foreground">产品特点</h2>
					<div class="mt-6 space-y-3">
						{#each product.features as feature}
							<div class="flex items-center gap-3 rounded-lg bg-stone-light p-3">
								<CircleCheckBig class="h-5 w-5 text-brand" />
								<span class="font-medium">{feature}</span>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<h2 class="text-2xl font-bold text-foreground">适用场景</h2>
					<div class="mt-6 flex flex-wrap gap-3">
						{#each product.scenarios as scenario}
							<Badge variant="outline" class="border-brand/30 px-4 py-2 text-brand">{scenario}</Badge>
						{/each}
					</div>
					<div class="mt-8 rounded-xl bg-brand/5 p-6">
						<h3 class="font-semibold text-foreground">技术参数</h3>
						<div class="mt-4 space-y-2 text-sm">
							<div class="flex justify-between border-b border-stone-light py-2">
								<span class="text-muted-foreground">产品类型</span>
								<span class="font-medium">水性环保涂料</span>
							</div>
							<div class="flex justify-between border-b border-stone-light py-2">
								<span class="text-muted-foreground">环保标准</span>
								<span class="font-medium">符合国家标准</span>
							</div>
							<div class="flex justify-between border-b border-stone-light py-2">
								<span class="text-muted-foreground">包装规格</span>
								<span class="font-medium">20KG/桶</span>
							</div>
							<div class="flex justify-between py-2">
								<span class="text-muted-foreground">保质期</span>
								<span class="font-medium">12个月</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section class="flex min-h-[50vh] items-center justify-center bg-background">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-foreground">产品未找到</h1>
			<p class="mt-2 text-muted-foreground">请返回产品中心查看所有产品</p>
			<Button href="/products" class="mt-4 bg-brand text-white hover:bg-brand-dark">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回产品中心
			</Button>
		</div>
	</section>
{/if}
