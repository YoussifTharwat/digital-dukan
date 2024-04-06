import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/products/ProductReel';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

const perks = [
	{
		name: 'Instant Delivery',
		Icon: ArrowDownToLine,
		description:
			'Get your assets delivered to your email in seconds and download them right away.',
	},
	{
		name: 'Guaranteed Quality',
		Icon: CheckCircle,
		description:
			'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
	},
	{
		name: 'For the Planet',
		Icon: Leaf,
		description:
			"We've pledged 1% of sales to the preservation and restoration of the natural environment.",
	},
];

export default function Home() {
	return (
		<MaxWidthWrapper>
			<main className="p-4 flex flex-col justify-center gap-4">
				<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
						Your marketplace for high-quality{' '}
						<span className="text-primary">digital assets</span>.
					</h1>
					<p className="mt-6 text-lg max-w-prose text-muted-foreground">
						Welcome to DigitalDukan. Every asset on our platform is verified by
						our team to ensure our highest quality standards.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Link href="/products" className={buttonVariants()}>
							Browse Trending
						</Link>
						<Link
							href={`#landing-badges`}
							className={buttonVariants({ variant: 'ghost' })}
						>
							Our quality promise &rarr;
						</Link>
					</div>
				</div>
				<ProductReel
					title="Featured"
					link=""
					linkText="Browse our collection"
					query={{ sort: 'desc', limit: 4 }}
				/>
				<section
					className="border-y borderborder py-20 lg:mb-10"
					id="landing-badges"
				>
					<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
						{perks.map((perk) => (
							<div
								key={perk.name}
								className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
										{<perk.Icon className="w-1/3 h-1/3" />}
									</div>
								</div>

								<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-base font-medium ">{perk.name}</h3>
									<p className="mt-3 text-sm text-muted-foreground">
										{perk.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<ProductReel
					title="Icons"
					link="?category=icons"
					linkText="For more icons"
					query={{ sort: 'desc', category: 'icons', limit: 4 }}
				/>
				<Separator className="w-full my-6" />
				<ProductReel
					title="Ui Kits"
					link="?category=ui_kits"
					linkText="For more Ui kits"
					query={{ sort: 'desc', category: 'ui_kits', limit: 4 }}
				/>
			</main>
		</MaxWidthWrapper>
	);
}
