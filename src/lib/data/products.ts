import type { Product } from '$lib/types';

export const products: Product[] = [
	{
		slug: 'fangshi-qi',
		name: '天然仿石漆',
		summary: '高度还原天然石材纹理，重量仅为真石的1/5，安全无脱落风险',
		description: '采用进口树脂与天然彩砂精制而成，完美复刻花岗岩、大理石等天然石材质感。具备优异的耐候性、抗裂性和自洁性，使用寿命超过15年。广泛应用于高端住宅、商业综合体、酒店等外墙装饰工程。',
		features: ['仿真度达95%以上', '重量轻、施工安全', '耐候15年以上', '抗裂自洁', 'A级防火'],
		scenarios: ['高端住宅外墙', '商业综合体', '酒店会所', '别墅洋房'],
		image: '/images/products/fangshi-qi.svg'
	},
	{
		slug: 'neiqiang-qi',
		name: '净味内墙漆',
		summary: '即刷即住，甲醛净化率99%，守护家人健康',
		description: '采用创新净味技术，漆膜致密细腻。添加竹炭因子，持续净化室内甲醛、苯等有害物质。色彩丰富，覆盖力强，打造健康舒适的居家环境。',
		features: ['即刷即住', '甲醛净化99%', '抗菌防霉', '覆盖力强', '色彩丰富'],
		scenarios: ['家庭住宅', '幼儿园学校', '医院养老院', '办公空间'],
		image: '/images/products/neiqiang-qi.svg'
	},
	{
		slug: 'yiwein-qi',
		name: '真石漆',
		summary: '天然彩砂质感，庄重大气，性价比之选',
		description: '选用优质天然彩砂和高性能乳液，呈现自然真实的石材效果。耐候性好、不褪色、抗污染，是外墙装饰的经典之选。',
		features: ['天然彩砂', '不褪色', '抗污染', '性价比高', '施工便捷'],
		scenarios: ['住宅小区', '学校医院', '厂房仓库', '市政工程'],
		image: '/images/products/zhen-shi-qi.svg'
	},
	{
		slug: 'waiqiang-diqi',
		name: '外墙底漆',
		summary: '渗透加固，封闭碱性，为面漆提供坚实基底',
		description: '高渗透型外墙底漆，有效封闭基层碱性，增强面漆附着力。优异的抗碱防潮性能，延长面漆使用寿命。',
		features: ['强渗透力', '封闭抗碱', '增强附着力', '防潮透气', '快干'],
		scenarios: ['新墙基层处理', '旧墙翻新', '仿石漆配套', '真石漆配套'],
		image: '/images/products/waiqiang-diqi.svg'
	}
];
