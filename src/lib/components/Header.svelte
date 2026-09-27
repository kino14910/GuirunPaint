<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';
	import { Button } from '$lib/components/ui/button';
	import { Phone, Menu, X } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	const navItems = [
		{ label: '首页', href: '/' },
		{ label: '关于我们', href: '/about' },
		{ label: '产品中心', href: '/products' },
		{ label: '工程案例', href: '/cases' },
		{ label: '行业资讯', href: '/articles' }
	];

	function isActive(pathname: string, href: string) {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class={cn(
		'sticky top-0 z-50 w-full border-b transition-all duration-300',
		scrolled
			? 'border-stone-light/80 bg-background/90 shadow-sm backdrop-blur-md'
			: 'border-transparent bg-background/95 backdrop-blur-sm'
	)}
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
		<a
			href="/"
			class="group flex items-center gap-2 transition-opacity hover:opacity-80"
			aria-label="返回首页"
		>
			<span class="text-xl font-bold text-brand">{site.name}</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="主导航">
			{#each navItems as item}
				{@const active = isActive(page.url.pathname, item.href)}
				<a
					href={item.href}
					class={cn(
						'relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
						active
							? 'bg-brand/10 text-brand'
							: 'text-foreground/80 hover:bg-stone-light hover:text-brand active:scale-95'
					)}
					aria-current={active ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-3 lg:flex">
			<a
				href="tel:{site.phone}"
				class="group flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
			>
				<Phone class="h-4 w-4 transition-transform group-hover:scale-110" />
				{site.phone}
			</a>
			<Button
				href="tel:{site.phone}"
				size="sm"
				class="bg-brand text-white shadow-sm transition-all hover:bg-brand-dark hover:shadow-md active:scale-95"
			>
				免费咨询
			</Button>
		</div>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="rounded-md p-1 transition-colors hover:bg-stone-light lg:hidden"
			aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
			aria-expanded={menuOpen}
		>
			{#if menuOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	{#if menuOpen}
		<div
			class="border-t border-stone-light bg-background lg:hidden"
			transition:slide={{ duration: 200 }}
		>
			<nav class="flex flex-col px-4 py-2" aria-label="移动端导航">
				{#each navItems as item, i}
					{@const active = isActive(page.url.pathname, item.href)}
					<a
						href={item.href}
						class={cn(
							'border-b border-stone-light/50 py-3 text-sm font-medium transition-all duration-200 hover:pl-2',
							active ? 'text-brand' : 'text-foreground/80 hover:text-brand'
						)}
						style:transition-delay="{i * 30}ms"
						onclick={() => (menuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
				<div class="flex items-center gap-3 py-4">
					<a
						href="tel:{site.phone}"
						class="flex items-center gap-1.5 text-sm font-medium text-brand"
					>
						<Phone class="h-4 w-4" />
						{site.phone}
					</a>
					<Button
						href="tel:{site.phone}"
						size="sm"
						class="bg-brand text-white transition-all hover:bg-brand-dark active:scale-95"
					>
						免费咨询
					</Button>
				</div>
			</nav>
		</div>
	{/if}
</header>
