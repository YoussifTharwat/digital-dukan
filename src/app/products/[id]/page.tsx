import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import AddToCartButton from '@/components/products/AddToCartButton';
import ProductReel from '@/components/products/ProductReel';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';
import { getPayloadClient } from '../../../get-payload';
import ProductImageSlider from '@/components/products/ProductImageSlider';
import { formatCurrency } from '@/lib/utils';

type Props = {
	params: {
		[key: string]: string | string[] | undefined;
	};
};

const Page = async ({ params }: Props) => {
	const id = params.id as string;

	const payload = await getPayloadClient();

	const product = await payload.findByID({
		collection: 'products',
		id,
		depth: 1,
	});

	return (
		<MaxWidthWrapper className="py-8">
			<section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
				<div className="p-2 flex flex-col justify-center gap-2 h-full">
					<h1 className="text-3xl font-bold">{product.name}</h1>
					<div className="flex items-center gap-3">
						<p className="font-semibold">{formatCurrency(product.price)}</p>
						<Separator orientation="vertical" />
						<p className="capitalize text-muted-foreground">
							{product.category}
						</p>
					</div>
					<p className="text-muted-foreground">{product.description}</p>
					<AddToCartButton product={product} />
					<p className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
						<Shield />
						30 Day Return Guarantee
					</p>
				</div>
				<ProductImageSlider product={product} />
			</section>
			<Separator className="w-full my-12" />
			<section className="">
				<ProductReel
					title="More like this"
					link=""
					query={{
						category: product.category,
						limit: 5,
						sort: 'asc',
						filterProduct: product.id,
					}}
				/>
			</section>
		</MaxWidthWrapper>
	);
};

export default Page;
