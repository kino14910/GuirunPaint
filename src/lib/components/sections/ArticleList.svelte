<script lang="ts">
	import { articles } from '$lib/data/articles';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Calendar, Tag } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';
</script>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">行业资讯</h2>
				<p class="mt-3 text-muted-foreground">涂料行业动态与专业技术分享</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={80} class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each articles as article, i}
				<Card.Root
					class="group overflow-hidden border-stone-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
				>
					<div class="aspect-[16/10] overflow-hidden bg-stone-light">
						<img src={article.image} alt={article.title} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
					</div>
					<Card.Header class="pb-2">
						<div class="flex items-center gap-3 text-xs text-muted-foreground">
							<span class="flex items-center gap-1">
								<Calendar class="h-3 w-3" />
								{article.date}
							</span>
							<span class="flex items-center gap-1">
								<Tag class="h-3 w-3" />
								{article.category}
							</span>
						</div>
						<Card.Title class="line-clamp-2 text-base leading-snug transition-colors group-hover:text-brand">{article.title}</Card.Title>
						<Card.Description class="line-clamp-2">{article.summary}</Card.Description>
					</Card.Header>
					<Card.Footer>
						<Button href="/articles/{article.slug}" variant="ghost" size="sm" class="text-brand transition-colors hover:text-brand-dark">
							阅读全文
							<ArrowRight class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</StaggerContainer>
		<ScrollReveal delay={200}>
			<div class="mt-10 text-center">
				<Button href="/articles" variant="outline" class="border-brand text-brand transition-all hover:bg-brand/5 active:scale-95">
					查看更多资讯
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
				</Button>
			</div>
		</ScrollReveal>
	</div>
</section>
