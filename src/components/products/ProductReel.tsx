'use client';
import { TQueryValidator } from '@/lib/validators/query-validator';
import { trpc } from '@/trpc/client';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import Product from './Product';

type Props = {
	query: TQueryValidator;
	title: string;
	link?: string;
	linkText?: string;
};

const ProductReel = ({ query, title, link, linkText }: Props) => {
	const FALLBACK_LIMIT = 4;

	const { data, isLoading } = trpc.getInfiniteProducts.useInfiniteQuery(
		{
			limit: query.limit ?? FALLBACK_LIMIT,
			query,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextPage,
		}
	);

	const products = data?.pages.flatMap((page) => page.items);

	if (isLoading) {
		let skeletonMap = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);

		return (
			<div>
				<div className="flex flex-col md:flex-row  w-full items-center">
					<h1 className="font-bold text-2xl my-0.5">{title}</h1>
					<Link
						href={`/products/${link}`}
						className={buttonVariants({
							variant: 'link',
							className:
								'gap-1.5 group hover:no-underline hover:text-primary/80 md:ml-auto',
						})}
					>
						Browse our featured collection
						<span className="group-hover:translate-x-1 transition-all">
							&rarr;
						</span>
					</Link>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{skeletonMap.map((_, i) => (
						<div key={i} className="flex flex-col gap-4">
							<Skeleton className=" aspect-square bg-secondary rounded-lg" />
							<Skeleton className="w-2/3 h-4 bg-secondary rounded-lg" />
							<Skeleton className="w-1/2 h-3 bg-secondary rounded-lg" />
							<Skeleton className="w-16 h-4 bg-secondary rounded-lg" />
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col md:flex-row  w-full items-center ">
				<h1 className="font-bold text-2xl my-0.5">{title}</h1>
				{link === undefined || linkText === undefined ? null : (
					<Link
						href={`/products/${link}`}
						className={buttonVariants({
							variant: 'link',
							className:
								'gap-1.5 group hover:no-underline hover:text-primary/80 md:ml-auto',
						})}
					>
						{linkText}
						<span className="group-hover:translate-x-1 transition-all">
							&rarr;
						</span>
					</Link>
				)}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products?.length ? (
					products?.map((product) => (
						//@ts-ignore
						<Product key={product?.id} product={product!} />
					))
				) : (
					<p>empty</p>
				)}
			</div>
		</div>
	);
};

export default ProductReel;
