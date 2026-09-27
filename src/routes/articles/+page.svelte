<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { articles } from '$lib/data/articles';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Calendar, Tag } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';
</script>

<SeoHead title="行业资讯" description="涂料行业动态、产品知识、施工技术分享——贵润水漆行业资讯" />

<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h1 class="text-4xl font-bold tracking-tight text-foreground">行业资讯</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
				涂料行业动态、选购指南与施工技术分享
			</p>
		</ScrollReveal>
	</div>
</section>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<StaggerContainer stagger={80} class="grid gap-8 md:grid-cols-2">
			{#each articles as article, i}
				<Card.Root
					class="group overflow-hidden border-stone-light transition-all duration-300 hover:shadow-lg"
				>
					<div class="aspect-video overflow-hidden bg-stone-light">
						<img src={article.image} alt={article.title} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
					</div>
					<Card.Header>
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
						<Card.Title class="text-xl transition-colors group-hover:text-brand">{article.title}</Card.Title>
						<Card.Description class="line-clamp-3">{article.summary}</Card.Description>
					</Card.Header>
					<Card.Footer>
						<Button href="/articles/{article.slug}" variant="ghost" class="text-brand transition-colors hover:text-brand-dark">
							阅读全文
							<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</StaggerContainer>
	</div>
</section>
