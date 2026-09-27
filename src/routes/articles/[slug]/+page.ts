import { articles } from '$lib/data/articles';

export function entries() {
	return articles.map((a) => ({ slug: a.slug }));
}

export const prerender = true;
