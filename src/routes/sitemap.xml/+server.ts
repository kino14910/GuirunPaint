import { products } from '$lib/data/products';
import { cases } from '$lib/data/cases';
import { articles } from '$lib/data/articles';
import type { RequestHandler } from './$types';

const baseUrl = 'https://www.guirunpaint.com';

export const prerender = true;

export const GET: RequestHandler = () => {
	const pages = [
		{ url: '/', changefreq: 'weekly', priority: '1.0' },
		{ url: '/about', changefreq: 'monthly', priority: '0.8' },
		{ url: '/products', changefreq: 'weekly', priority: '0.9' },
		{ url: '/cases', changefreq: 'weekly', priority: '0.8' },
		{ url: '/articles', changefreq: 'weekly', priority: '0.7' }
	];

	const productPages = products.map((p) => ({
		url: `/products/${p.slug}`,
		changefreq: 'monthly',
		priority: '0.8'
	}));

	const casePages = cases.map((c) => ({
		url: `/cases/${c.slug}`,
		changefreq: 'monthly',
		priority: '0.7'
	}));

	const articlePages = articles.map((a) => ({
		url: `/articles/${a.slug}`,
		changefreq: 'monthly',
		priority: '0.6'
	}));

	const allPages = [...pages, ...productPages, ...casePages, ...articlePages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
