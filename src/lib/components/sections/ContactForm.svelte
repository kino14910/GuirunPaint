<script lang="ts">
	import { site } from '$lib/data/site';
	import { Phone, Mail, MapPin } from '@lucide/svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">联系我们</h2>
				<p class="mt-3 text-muted-foreground">无论是产品咨询、工程报价还是技术支持，我们都将竭诚为您服务</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={100} class="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center">
			<a
				href="tel:{site.phone}"
				class="group flex items-center gap-3 rounded-lg px-4 py-2 text-foreground transition-all duration-200 hover:bg-brand/5 hover:text-brand active:scale-95"
			>
				<Phone class="h-5 w-5 text-brand transition-transform group-hover:scale-110" />
				<span class="font-semibold">{site.phone}</span>
			</a>
			<span class="hidden text-border sm:block">|</span>
			<a
				href="mailto:{site.email}"
				class="group flex items-center gap-3 rounded-lg px-4 py-2 text-foreground transition-all duration-200 hover:bg-brand/5 hover:text-brand active:scale-95"
			>
				<Mail class="h-5 w-5 text-brand transition-transform group-hover:scale-110" />
				<span class="font-semibold">{site.email}</span>
			</a>
		</StaggerContainer>
		<ScrollReveal delay={250}>
			<div class="mx-auto mt-6 flex max-w-2xl justify-center">
				<a
					href="https://uri.amap.com/marker?position=105.94,26.25&name=贵润水漆"
					target="_blank"
					rel="noopener"
					class="group flex items-center gap-3 rounded-lg px-4 py-2 text-foreground transition-all duration-200 hover:bg-brand/5 hover:text-brand active:scale-95"
				>
					<MapPin class="h-5 w-5 shrink-0 text-brand transition-transform group-hover:scale-110" />
					<span class="font-semibold">{site.address}</span>
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>
