<script lang="ts">
	import { ShieldCheck, Droplets, Leaf, Clock, Award, Wrench } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const advantages = [
		{ icon: Leaf, title: '绿色环保', desc: '全系列产品水性环保配方，VOC排放远低于国家标准' },
		{ icon: ShieldCheck, title: '品质保障', desc: '通过ISO9001质量管理体系认证，产品性能稳定可靠' },
		{ icon: Droplets, title: '技术领先', desc: '自主研发团队持续创新，多项核心技术专利' },
		{ icon: Clock, title: '持久耐用', desc: '耐候性超过15年，抗裂、抗污、自洁性能优异' },
		{ icon: Award, title: '工程案例', desc: '服务500+工程项目，覆盖住宅、商业、工业全场景' },
		{ icon: Wrench, title: '全程服务', desc: '从方案设计到施工指导，提供一站式专业服务' }
	];
</script>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">核心优势</h2>
				<p class="mt-3 text-muted-foreground">十五年专注，只为每一面墙的品质与美观</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={70} class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each advantages as item, i}
				<div
					class="group flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-stone-light/50 hover:shadow-sm"
				>
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 transition-all duration-300 group-hover:bg-brand/20 group-hover:scale-105">
						<item.icon class="h-6 w-6 text-brand transition-transform duration-300 group-hover:scale-110" />
					</div>
					<div>
						<h3 class="font-semibold text-foreground">{item.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
					</div>
				</div>
			{/each}
		</StaggerContainer>
	</div>
</section>
