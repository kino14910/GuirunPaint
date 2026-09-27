<script lang="ts">
	import Lightbox from '$lib/components/Lightbox.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import StaggerContainer from '$lib/components/animations/StaggerContainer.svelte';

	const photos = [
		{ title: '天然仿石漆 · 荔枝面花岗岩效果', tag: '外墙工程', span: 'col-span-2 row-span-2', src: '/images/products/fangshi-qi.svg' },
		{ title: '真石漆 · 黄锈石效果', tag: '商业外墙', span: 'col-span-1 row-span-1', src: '/images/products/zhen-shi-qi.svg' },
		{ title: '水性工业漆 · 钢结构防腐', tag: '工业涂装', span: 'col-span-1 row-span-1', src: '/images/products/shuixing-gongye-qi.svg' },
		{ title: '仿石漆 · 砂岩效果', tag: '别墅外墙', span: 'col-span-1 row-span-2', src: '/images/products/waiqiang-diqi.svg' },
		{ title: '净味内墙漆 · 色彩效果', tag: '室内涂装', span: 'col-span-1 row-span-1', src: '/images/products/neiqiang-qi.svg' },
		{ title: '仿石漆 · 大理石纹理', tag: '酒店外墙', span: 'col-span-1 row-span-1', src: '/images/products/fangshi-qi.svg' },
	];

	const galleryImages = photos.map((p) => ({ src: p.src, alt: p.title }));
	let lbIndex = $state(-1);
</script>

<section class="bg-background py-20 border-t border-border/30">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<ScrollReveal>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-foreground">产品实拍</h2>
				<p class="mt-3 text-muted-foreground">真实工程效果，所见即所得</p>
			</div>
		</ScrollReveal>
		<StaggerContainer stagger={60} class="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{#each photos as photo, i}
				<button
					type="button"
					class="group relative {photo.span} cursor-pointer overflow-hidden rounded-xl bg-stone-light transition-transform duration-300 ease-out hover:scale-[1.02]"
					onclick={() => (lbIndex = i)}
				>
					<img src={photo.src} alt={photo.title} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
					<div class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
					<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
						<p class="text-sm font-medium text-white">{photo.title}</p>
						<p class="text-xs text-white/70">{photo.tag}</p>
					</div>
				</button>
			{/each}
		</StaggerContainer>
	</div>
</section>

<Lightbox images={galleryImages} bind:index={lbIndex} />
