<script lang="ts">
	import { colors } from '$lib/data/colors';
	import { site } from '$lib/data/site';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Palette, Check } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	let copiedIndex = $state(-1);

	function copyColor(code: string, index: number) {
		navigator.clipboard?.writeText(code);
		copiedIndex = index;
		setTimeout(() => (copiedIndex = -1), 1500);
	}
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">精选色卡</h2>
				<p class="mt-3 text-muted-foreground">丰富色彩选择，为建筑赋予独特个性</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={40} class="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
			{#each colors as color, i}
				<button
				type="button"
				class="group cursor-pointer text-center"
				onclick={() => copyColor(color.code, i)}
				aria-label="复制颜色 {color.name} {color.code}"
			>
					<div
						class="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
						style:background-color={color.code}
					>
						<div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							{#if copiedIndex === i}
								<Check class="h-6 w-6 text-white drop-shadow-md" />
							{:else}
								<span class="text-xs font-medium text-white drop-shadow-md">复制</span>
							{/if}
						</div>
					</div>
					<p class="mt-2 text-sm font-medium text-foreground">{color.name}</p>
					<p class="text-xs text-muted-foreground transition-colors group-hover:text-brand">{color.code}</p>
				</button>
			{/each}
		</StaggerContainer>
		<ScrollReveal delay={200}>
			<div class="mt-10 text-center">
				<Button href="tel:{site.phone}" variant="outline" class="border-brand text-brand transition-all hover:bg-brand/5 active:scale-95">
					<Palette class="mr-2 h-4 w-4" />
					获取完整色卡
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
				</Button>
			</div>
		</ScrollReveal>
	</div>
</section>
