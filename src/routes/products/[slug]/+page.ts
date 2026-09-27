import { products } from '$lib/data/products';

export function entries() {
	return products.map((p) => ({ slug: p.slug }));
}

export const prerender = true;
