<script lang="ts">
	import { site } from '$lib/data/site';
	import { Phone, Mail, MapPin } from '@lucide/svelte';

	const footerLinks = [
		{
			title: '产品中心',
			links: [
				{ label: '天然仿石漆', href: '/products/fangshi-qi' },
				{ label: '水性工业漆', href: '/products/shuixing-gongye-qi' },
				{ label: '净味内墙漆', href: '/products/neiqiang-qi' }
			]
		},
		{
			title: '服务支持',
			links: [
				{ label: '工程案例', href: '/cases' },
				{ label: '行业资讯', href: '/articles' }
			]
		},
		{
			title: '关于我们',
			links: [
				{ label: '公司简介', href: '/about' },
				{ label: '企业文化', href: '/about' },
				{ label: '发展历程', href: '/about' },
				{ label: '荣誉资质', href: '/about' }
			]
		}
	];
</script>

<footer class="bg-stone-dark text-white/90">
	<div class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div>
				<h3 class="text-lg font-bold text-white">{site.name}</h3>
				<p class="mt-3 text-sm leading-relaxed text-white/70">
					{site.description}
				</p>
				<div class="mt-6 space-y-3">
					<a
						href="tel:{site.phone}"
						class="group flex items-center gap-2 text-sm text-white/80 transition-all duration-200 hover:text-brand"
					>
						<Phone class="h-4 w-4 transition-transform group-hover:scale-110" />
						{site.phone}
					</a>
					<a
						href="mailto:{site.email}"
						class="group flex items-center gap-2 text-sm text-white/80 transition-all duration-200 hover:text-brand"
					>
						<Mail class="h-4 w-4 transition-transform group-hover:scale-110" />
						{site.email}
					</a>
					<div class="flex items-start gap-2 text-sm text-white/80">
						<MapPin class="mt-0.5 h-4 w-4 shrink-0" />
						{site.address}
					</div>
				</div>
			</div>
			{#each footerLinks as group}
				<div>
					<h4 class="text-sm font-semibold text-white">{group.title}</h4>
					<ul class="mt-4 space-y-2.5">
						{#each group.links as link}
							<li>
								<a
									href={link.href}
									class="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-brand"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div class="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
			&copy; {new Date().getFullYear()} {site.name} 版权所有
		</div>
	</div>
</footer>
