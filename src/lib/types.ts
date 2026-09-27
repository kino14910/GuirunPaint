export interface Product {
	slug: string;
	name: string;
	summary: string;
	description: string;
	features: string[];
	scenarios: string[];
	image: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	location: string;
	area: string;
	product: string;
	summary: string;
	description: string;
	image: string;
}

export interface Article {
	slug: string;
	title: string;
	summary: string;
	content: string;
	date: string;
	category: string;
	image: string;
	relatedProducts: string[];
}

export interface SiteConfig {
	name: string;
	tagline: string;
	description: string;
	phone: string;
	email: string;
	address: string;
}
