import { cases } from '$lib/data/cases';

export function entries() {
	return cases.map((c) => ({ slug: c.slug }));
}

export const prerender = true;
