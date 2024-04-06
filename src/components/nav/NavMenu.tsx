'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { PRODUCT_CATEGORIES } from '@/config';
import Image from 'next/image';
import Link from 'next/link';

export default function NavMenu() {
	return (
		<NavigationMenu className="top-0 static hidden lg:flex">
			<NavigationMenuList>
				{PRODUCT_CATEGORIES.map((category) => (
					<NavigationMenuItem key={category.value}>
						<NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
						<NavigationMenuContent className="z-[999]">
							<ul className="p-4 w-[99.9vw] grid grid-cols-3 gap-3">
								{category.featured.map((featuredItem, index) => (
									<li key={index}>
										<NavigationMenuLink>
											<Link
												href={`${featuredItem.href}`}
												className="group flex flex-col gap-2"
											>
												<div className="relative aspect-video w-[500px] group-hover:opacity-80 transition-all">
													<Image
														src={featuredItem.imageSrc}
														alt={`${featuredItem.name}`}
														fill
														className="object-cover object-center rounded"
														loading="eager"
													/>
												</div>
												<h2 className="font-semibold text-sm">
													{featuredItem.name}
												</h2>
												<p className="text-muted-foreground text-xs">
													Shop now
												</p>
											</Link>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
