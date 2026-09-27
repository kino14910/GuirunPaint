<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { site } from '$lib/data/site';
	import { ArrowRight, Shield, Leaf, Award } from '@lucide/svelte';
	import CountUp from '$lib/components/animations/CountUp.svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		const timer = setTimeout(() => {
			mounted = true;
		}, 50);
		return () => clearTimeout(timer);
	});
</script>

<section
	class="relative overflow-hidden bg-linear-to-br from-stone-light via-background to-brand-light"
>
	<div class="pointer-events-none absolute inset-0 animate-gradient-shift opacity-40"
		style="background: linear-gradient(135deg, oklch(0.92 0.04 145 / 0.15), oklch(0.972 0.005 80 / 0.3), oklch(0.92 0.04 145 / 0.1)); background-size: 200% 200%;">
	</div>

	<div class="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="space-y-8">
				<div
					class="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand transition-all duration-700"
					class:opacity-0={!mounted}
					class:translate-y-4={!mounted}
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
				>
					<Leaf class="h-4 w-4" />
					环保水性涂料 · 仿石漆专家
				</div>

				<h1
					class="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl"
					class:opacity-0={!mounted}
					class:translate-y-4={!mounted}
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style:transition="all 0.7s cubic-bezier(0.25, 1, 0.3, 1) 100ms"
				>
					用科技重新定义<br />
					<span class="text-brand">建筑外墙美学</span>
				</h1>

				<p
					class="max-w-lg text-lg leading-relaxed text-muted-foreground"
					class:opacity-0={!mounted}
					class:translate-y-4={!mounted}
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style:transition="all 0.7s cubic-bezier(0.25, 1, 0.3, 1) 200ms"
				>
					贵润水漆专注环保水性涂料与仿石漆研发生产，以卓越品质和专业技术服务全国工程项目，让每一面墙都成为艺术品。
				</p>

				<div
					class="flex flex-wrap gap-4"
					class:opacity-0={!mounted}
					class:translate-y-4={!mounted}
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style:transition="all 0.7s cubic-bezier(0.25, 1, 0.3, 1) 300ms"
				>
					<Button
						href="/products"
						size="lg"
						class="bg-brand text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 active:scale-95"
					>
						查看产品
						<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</Button>
					<Button
						href="tel:{site.phone}"
						variant="outline"
						size="lg"
						class="border-brand text-brand transition-all hover:bg-brand/5 active:scale-95"
					>
						免费咨询报价
					</Button>
				</div>

				<div
					class="flex gap-8 pt-4"
					class:opacity-0={!mounted}
					class:translate-y-4={!mounted}
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style:transition="all 0.7s cubic-bezier(0.25, 1, 0.3, 1) 400ms"
				>
					<div class="text-center">
						<div class="text-2xl font-bold text-brand">
							<CountUp value={15} suffix="+" />
						</div>
						<div class="text-sm text-muted-foreground">年行业经验</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-brand">
							<CountUp value={500} suffix="+" />
						</div>
						<div class="text-sm text-muted-foreground">工程项目</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-brand">
							<CountUp value={98} suffix="%" />
						</div>
						<div class="text-sm text-muted-foreground">客户满意度</div>
					</div>
				</div>
			</div>

			<div class="relative hidden lg:block">
				<div
					class="animate-float aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-brand/20 to-stone/30 shadow-2xl"
					class:opacity-0={!mounted}
					class:scale-95={!mounted}
					class:opacity-100={mounted}
					class:scale-100={mounted}
					style:transition="all 0.9s cubic-bezier(0.25, 1, 0.3, 1) 300ms"
				>
					<div class="flex h-full items-center justify-center">
						<div class="space-y-4 p-12 text-center">
							<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10">
								<Shield class="h-10 w-10 text-brand" />
							</div>
							<p class="text-lg font-semibold text-foreground">环保品质 · 值得信赖</p>
							<div class="flex items-center justify-center gap-2">
								<Award class="h-5 w-5 text-brand" />
								<span class="text-sm text-muted-foreground">通过国家环保认证</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
