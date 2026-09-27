<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';
	import { articles } from '$lib/data/articles';
	import { products } from '$lib/data/products';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, ArrowRight, Calendar, Tag, Phone } from '@lucide/svelte';

	const article = $derived(articles.find((a) => a.slug === page.params.slug));
	const relatedProducts = $derived(
		article ? products.filter((p) => article.relatedProducts.includes(p.slug)) : []
	);
</script>

{#if article}
	<SeoHead title={article.title} description={article.summary} />

	<section class="bg-linear-to-br from-stone-light to-brand-light py-16">
		<div class="mx-auto max-w-4xl px-4 lg:px-8">
			<Button href="/articles" variant="ghost" size="sm" class="mb-6 text-muted-foreground">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回行业资讯
			</Button>
			<div class="flex items-center gap-3 text-sm text-muted-foreground">
				<span class="flex items-center gap-1">
					<Calendar class="h-3.5 w-3.5" />
					{article.date}
				</span>
				<span class="flex items-center gap-1">
					<Tag class="h-3.5 w-3.5" />
					{article.category}
				</span>
			</div>
			<h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">{article.title}</h1>
			<p class="mt-4 text-lg text-muted-foreground">{article.summary}</p>
		</div>
	</section>

	<section class="bg-background py-16">
		<div class="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_300px] lg:px-8">
			<article class="prose prose-stone max-w-none prose-headings:text-foreground prose-a:text-brand">
				{@html article.content.split('\n').map(line => {
					if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
					if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
					if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
					if (line.match(/^\d+\. /)) return `<li>${line.replace(/^\d+\. /, '')}</li>`;
					if (line.trim() === '') return '';
					return `<p>${line}</p>`;
				}).join('')}
			</article>

			<aside class="space-y-8">
				{#if relatedProducts.length > 0}
					<div class="rounded-xl bg-stone-light p-6">
						<h3 class="text-sm font-semibold text-foreground">相关产品</h3>
						<div class="mt-4 space-y-3">
							{#each relatedProducts as product}
								<a href="/products/{product.slug}" class="block rounded-lg bg-background p-3 transition-colors hover:bg-brand/5">
									<p class="font-medium text-foreground">{product.name}</p>
									<p class="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.summary}</p>
								</a>
							{/each}
						</div>
					</div>
				{/if}

				<div class="rounded-xl bg-brand/5 p-6 text-center">
					<h3 class="font-semibold text-foreground">需要专业建议？</h3>
					<p class="mt-2 text-sm text-muted-foreground">我们的技术团队随时为您解答</p>
					<Button href="tel:{site.phone}" size="sm" class="mt-4 bg-brand text-white hover:bg-brand-dark">
						<Phone class="mr-2 h-4 w-4" />
						联系我们
					</Button>
				</div>

				<div class="rounded-xl bg-stone-light p-6">
					<h3 class="text-sm font-semibold text-foreground">工程案例</h3>
					<div class="mt-4">
						<Button href="/cases" variant="ghost" size="sm" class="text-brand hover:text-brand-dark">
							查看全部案例
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</aside>
		</div>
	</section>
{:else}
	<section class="flex min-h-[50vh] items-center justify-center bg-background">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-foreground">文章未找到</h1>
			<p class="mt-2 text-muted-foreground">请返回行业资讯查看所有文章</p>
			<Button href="/articles" class="mt-4 bg-brand text-white hover:bg-brand-dark">
				<ArrowLeft class="mr-2 h-4 w-4" />
				返回行业资讯
			</Button>
		</div>
	</section>
{/if}
