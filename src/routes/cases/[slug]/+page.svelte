<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';
	import { cases } from '$lib/data/cases';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, MapPin, Ruler, Package, Phone } from '@lucide/svelte';

	const caseStudy = $derived(cases.find((c) => c.slug === page.params.slug));
</script>

{#if caseStudy}
	<SeoHead title={caseStudy.title} description={caseStudy.summary} />

	<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<Button href="/cases" variant="ghost" size="sm" class="mb-6 text-muted-foreground">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回工程案例
			</Button>
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<Badge variant="secondary" class="mb-4">{caseStudy.product}</Badge>
					<h1 class="text-4xl font-bold tracking-tight text-foreground">{caseStudy.title}</h1>
					<p class="mt-4 text-lg text-muted-foreground">{caseStudy.description}</p>
					<div class="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
						<div class="flex items-center gap-1.5">
							<MapPin class="h-4 w-4 text-brand" />
							{caseStudy.location}
						</div>
						<div class="flex items-center gap-1.5">
							<Ruler class="h-4 w-4 text-brand" />
							{caseStudy.area}
						</div>
						<div class="flex items-center gap-1.5">
							<Package class="h-4 w-4 text-brand" />
							{caseStudy.product}
						</div>
					</div>
					<Button href="tel:{site.phone}" class="mt-8 bg-brand text-white hover:bg-brand-dark">
						<Phone class="mr-2 h-4 w-4" />
						咨询同类项目
					</Button>
				</div>
				<div class="aspect-4/3 overflow-hidden rounded-2xl bg-stone-light">
					<img src={caseStudy.image} alt={caseStudy.title} class="h-full w-full object-cover" loading="lazy" />
				</div>
			</div>
		</div>
	</section>

	<section class="bg-background py-20">
		<div class="mx-auto max-w-4xl px-4 lg:px-8">
			<h2 class="text-2xl font-bold text-foreground">项目详情</h2>
			<div class="prose prose-stone mt-6 max-w-none">
				<p>{caseStudy.description}</p>
				<h3>项目信息</h3>
				<table>
					<tbody>
						<tr><td>项目地点</td><td>{caseStudy.location}</td></tr>
						<tr><td>施工面积</td><td>{caseStudy.area}</td></tr>
						<tr><td>使用产品</td><td>{caseStudy.product}</td></tr>
					</tbody>
				</table>
			</div>
			<div class="mt-12 rounded-xl bg-brand/5 p-8 text-center">
				<h3 class="text-lg font-semibold text-foreground">想要类似的工程效果？</h3>
				<p class="mt-2 text-sm text-muted-foreground">联系我们获取免费方案设计和工程报价</p>
				<Button href="tel:{site.phone}" class="mt-4 bg-brand text-white hover:bg-brand-dark">
					立即咨询
				</Button>
			</div>
		</div>
	</section>
{:else}
	<section class="flex min-h-[50vh] items-center justify-center bg-background">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-foreground">案例未找到</h1>
			<p class="mt-2 text-muted-foreground">请返回工程案例查看所有项目</p>
			<Button href="/cases" class="mt-4 bg-brand text-white hover:bg-brand-dark">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回工程案例
			</Button>
		</div>
	</section>
{/if}
