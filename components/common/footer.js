'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	const handleSmoothScroll = (href) => {
		const targetElement = document.getElementById(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label='landing page template'
						className='flex items-center mb-3'
						title='landing page template'
						href={`/${langName}`}
					>
						<Image
							width={200}
							height={200}
							src={'/logo.gif'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						></Image>
						<h2 className='ml-3 font-bold leading-5'>NovaMetric</h2>
					</a>
					<div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<button
									key={index}
									title={link.name}
									onClick={() => handleSmoothScroll(link.url)}
								>
									{link.name}
								</button>
							);
						})}
					</div>
				</div>

				<p>
					Copyright © 2025 NovaMetric. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
