<script lang="ts">
	import { processes } from "$lib/data/colors";
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';
</script>

{#snippet processItem(item: { step: number; title: string; desc: string; }, i: number)}
	<div class="group flex gap-5">
		<div class="flex flex-col items-center">
			<div
				class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/30 group-hover:scale-105"
			>
				{item.step < 10 ? `0${item.step}` : item.step}
			</div>
			{#if i < processes.length - 1}
				<div
					class="my-3 w-px flex-1 bg-linear-to-b from-border via-border/50 to-transparent"
				></div>
			{/if}
		</div>

		<div class="pb-10">
			<h3 class="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
				{item.title}
			</h3>
			<p class="mt-2 text-sm leading-relaxed text-muted-foreground/80">
				{item.desc}
			</p>
		</div>
	</div>
{/snippet}

<section class="bg-background py-24 border-t border-border/40">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
			<ScrollReveal>
				<div>
					<h2
						class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
					>
						工艺流程
					</h2>
					<p class="mt-4 text-sm leading-relaxed text-muted-foreground">
						标准化规范施工工序，严苛把控每一道涂层的物理特性、粘性衔接与漆面覆盖质感。
					</p>
				</div>
			</ScrollReveal>
			<StaggerContainer stagger={90} class="lg:col-span-2">
				{#each processes as item, i}
					{@render processItem(item, i)}
				{/each}
			</StaggerContainer>
		</div>
	</div>
</section>
