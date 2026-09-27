<script lang="ts">
	import { Building2, Home, Factory, TreePine } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const scenarios = [
		{ icon: Home, title: '高端住宅', desc: '别墅、洋房外墙仿石漆装饰，打造石材般尊贵质感', href: '/cases' },
		{ icon: Building2, title: '商业建筑', desc: '商业综合体、酒店、写字楼外墙涂装，提升商业形象', href: '/cases' },
		{ icon: Factory, title: '工业厂房', desc: '钢结构防腐、厂房外墙涂装，水性环保施工无异味', href: '/cases' },
		{ icon: TreePine, title: '市政工程', desc: '学校、医院、公共建筑外墙涂装，安全环保有保障', href: '/cases' }
	];
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">应用场景</h2>
				<p class="mt-3 text-muted-foreground">从住宅到商业，从民用到工业，全场景覆盖</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={80} class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each scenarios as item, i}
				<a
					href={item.href}
					class="group rounded-xl bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/40 hover:border-brand/20"
				>
					<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 transition-all duration-300 group-hover:bg-brand/20 group-hover:scale-110">
						<item.icon class="h-7 w-7 text-brand transition-transform duration-300 group-hover:scale-110" />
					</div>
					<h3 class="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
					<span class="mt-4 inline-flex items-center text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
						查看案例
						<svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
					</span>
				</a>
			{/each}
		</StaggerContainer>
	</div>
</section>
