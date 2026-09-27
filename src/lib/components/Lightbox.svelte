<script lang="ts">
	import { onMount } from "svelte";
	import PhotoSwipe from "photoswipe";
	import "photoswipe/style.css";

	let {
		images = [],
		index = $bindable(-1),
	}: {
		images: { src: string; alt?: string }[];
		index?: number;
	} = $props();

	let lightbox: PhotoSwipe | null = null;
	let opening = false;

	onMount(() => {
		return () => {
			lightbox?.destroy();
			lightbox = null;
		};
	});

	$effect(() => {
		const i = index;
		if (i < 0 || i >= images.length || opening) return;
		opening = true;
		openGallery(i);
	});

	function openGallery(i: number) {
		lightbox?.destroy();

		let loaded = 0;
		const resolved = images.map(() => ({ w: 800, h: 600 }));

		images.forEach((img, idx) => {
			const el = new Image();
			el.onload = () => {
				resolved[idx] = { w: el.naturalWidth, h: el.naturalHeight };
				loaded++;
				if (loaded === images.length) startSwipe(i, resolved);
			};
			el.onerror = () => {
				loaded++;
				if (loaded === images.length) startSwipe(i, resolved);
			};
			el.src = img.src;
		});
	}

	function startSwipe(i: number, dims: { w: number; h: number }[]) {
		lightbox = new PhotoSwipe({
			dataSource: images.map((img, idx) => ({
				src: img.src,
				alt: img.alt ?? "",
				width: dims[idx].w,
				height: dims[idx].h,
			})),
			index: i,
			bgOpacity: 0.92,
			showHideAnimationType: "zoom",
			preload: [1, 2],
			returnFocus: false,
			wheelToZoom: true,
			pinchToClose: false,
		});

		let indicator: HTMLDivElement | null = null;

		lightbox.on("afterInit", () => {
			const el = lightbox?.element;
			if (!el) return;
			indicator = document.createElement("div");
			indicator.className = "pswp-zoom-indicator";
			el.appendChild(indicator);
		});

		lightbox.on("zoomPanUpdate", (e) => {
			if (!indicator) return;
			const z = (e as any).slide?.currZoomLevel ?? 1;
			indicator.textContent = z <= 1.05 ? "" : `${z.toFixed(1)}×`;
		});

		lightbox.on("close", () => {
			indicator?.remove();
			indicator = null;
			opening = false;
			index = -1;
		});

		lightbox.init();
	}
</script>

<style>
	:global(.pswp-zoom-indicator) {
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
		padding: 4px 12px;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		font-size: 13px;
		font-weight: 600;
		font-family: "Inter Variable", sans-serif;
		border-radius: 6px;
		pointer-events: none;
		z-index: 100;
		letter-spacing: 0.03em;
		user-select: none;
	}
</style>
