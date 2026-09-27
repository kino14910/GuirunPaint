<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { site } from '$lib/data/site';
	import { Target, Users, Award, Factory, Leaf, TrendingUp } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';
	import CountUp from '$lib/components/animations/CountUp.svelte';

	const milestones = [
		{ year: '2014', title: '公司成立', desc: '贵润实业在贵州安顺成立，专注建筑涂料研发生产' },
		{ year: '2015', title: '技术突破', desc: '自主研发仿石漆配方，仿真度达到行业领先水平' },
		{ year: '2024', title: '品牌升级', desc: '品牌形象全面升级，开启高质量发展新征程' }
	];

	const values = [
		{ icon: Target, title: '使命', desc: '用环保科技守护建筑之美' },
		{ icon: Users, title: '愿景', desc: '成为中国水性涂料领导品牌' },
		{ icon: Leaf, title: '理念', desc: '绿色生产，可持续发展' },
		{ icon: TrendingUp, title: '价值观', desc: '品质为本，创新驱动' }
	];
</script>

<SeoHead title="关于我们" description="了解贵润涂料——专注环保水性涂料与仿石漆研发生产的现代化涂料企业" />

<section class="bg-linear-to-br from-stone-light to-brand-light py-20">
	<div class="mx-auto max-w-7xl px-4 text-center lg:px-8">
		<ScrollReveal>
			<h1 class="text-4xl font-bold tracking-tight text-foreground">关于贵润</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
				十五年专注环保水性涂料，用科技与匠心守护每一面墙的品质与美观
			</p>
		</ScrollReveal>
	</div>
</section>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2">
			<ScrollReveal>
				<div>
					<h2 class="text-2xl font-bold text-foreground">企业简介</h2>
					<div class="prose prose-stone mt-4 max-w-none">
						<p>{site.name}成立于2014年，是一家专注于水性涂料与仿石漆研发、生产、销售的现代化涂料企业。公司坐落于贵州安顺，拥有先进的生产设备和专业的研发团队。</p>
						<p>多年来，贵润涂料始终坚持"XXXX，XXXX"的经营理念，产品线涵盖仿石漆、水性工业漆、防水涂料、内墙漆等全系列建筑涂料。公司通过ISO9001质量管理体系认证，产品均通过国家环保检测。</p>
						<p>目前，贵润涂料已服务超过500个工程项目，业务主要覆盖西南区域，赢得了广大客户的信赖与好评。</p>
					</div>
				</div>
			</ScrollReveal>
			<ScrollReveal delay={150}>
				<div class="flex items-center justify-center">
					<div class="group flex h-full max-h-[22rem] min-h-[16rem] w-full items-center justify-center rounded-xl bg-stone-light transition-all duration-300 hover:shadow-md">
						<svg
							class="h-20 w-20 text-muted-foreground/40 transition-transform duration-300 group-hover:scale-105"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
							<circle cx="8.5" cy="8.5" r="1.5" />
							<polyline points="21 15 16 10 5 21" />
						</svg>
					</div>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<section class="bg-background pb-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<StaggerContainer stagger={80} class="grid grid-cols-2 gap-4 lg:grid-cols-4">
				{#each values as item, i}
					<div class="rounded-xl bg-stone-light p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
					<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 transition-transform duration-300 hover:scale-110">
						<item.icon class="h-6 w-6 text-brand" />
					</div>
					<h3 class="mt-3 font-semibold text-foreground">{item.title}</h3>
					<p class="mt-1 text-sm text-muted-foreground">{item.desc}</p>
				</div>
			{/each}
		</StaggerContainer>
		<ScrollReveal delay={200}>
			<div class="mt-8 flex justify-center gap-12 rounded-xl bg-brand/5 p-6">
				<div class="text-center">
					<div class="text-3xl font-bold text-brand">
						<CountUp value={15} suffix="+" />
					</div>
					<div class="text-sm text-muted-foreground">年行业经验</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-brand">
						<CountUp value={500} suffix="+" />
					</div>
					<div class="text-sm text-muted-foreground">工程项目</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-brand">
						<CountUp value={5} suffix="万" />
					</div>
					<div class="text-sm text-muted-foreground">吨年产能</div>
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<section class="bg-stone-light py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<h2 class="text-center text-2xl font-bold text-foreground">发展历程</h2>
		</ScrollReveal>
		<div class="relative mt-12">
			<div class="absolute left-4 top-0 h-full w-px bg-brand/20 lg:left-1/2"></div>
			<div class="space-y-8">
				{#each milestones as item, i}
					<ScrollReveal delay={i * 120}>
						<div class="relative flex items-start gap-6 {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} pl-12 lg:pl-0">
							<div class="flex-1 {i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}">
								<span class="text-sm font-bold text-brand">{item.year}</span>
								<h3 class="mt-1 font-semibold text-foreground">{item.title}</h3>
								<p class="mt-1 text-sm text-muted-foreground">{item.desc}</p>
							</div>
							<div class="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-brand transition-transform duration-300 hover:scale-125 lg:left-1/2 lg:-translate-x-1/2"></div>
							<div class="hidden flex-1 lg:block"></div>
						</div>
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<StaggerContainer stagger={100} class="grid gap-6 md:grid-cols-3">
				<div class="rounded-xl bg-stone-light p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
					<Factory class="mx-auto h-10 w-10 text-brand transition-transform duration-300 hover:scale-110" />
					<h3 class="mt-4 text-lg font-semibold text-foreground">生产基地</h3>
					<p class="mt-2 text-sm text-muted-foreground">现代化自动生产线，年产能5万吨，保障供货稳定</p>
				</div>
				<div class="rounded-xl bg-stone-light p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
					<Award class="mx-auto h-10 w-10 text-brand transition-transform duration-300 hover:scale-110" />
					<h3 class="mt-4 text-lg font-semibold text-foreground">荣誉资质</h3>
					<p class="mt-2 text-sm text-muted-foreground">ISO9001认证、国家环保产品认证、多项发明专利</p>
				</div>
				<div class="rounded-xl bg-stone-light p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
					<Users class="mx-auto h-10 w-10 text-brand transition-transform duration-300 hover:scale-110" />
					<h3 class="mt-4 text-lg font-semibold text-foreground">服务网络</h3>
					<p class="mt-2 text-sm text-muted-foreground">覆盖华南、华中、西南等主要区域，专业团队驻点服务</p>
				</div>
			</StaggerContainer>
	</div>
</section>
