'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Product as ProductType } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import ProductImageSlider from './ProductImageSlider';
import { formatCurrency } from '@/lib/utils';

type Props = { product: ProductType };

const Product = ({ product }: Props) => {
	return (
		<div className="flex flex-col gap-1">
			<ProductImageSlider product={product} />
			<Link href={`/products/${product.id}`}>
				<p className="font-semibold text-sm">{product.name}</p>
				<p className="text-muted-foreground text-sm capitalize">
					{product.category.replace('_', ' ')}
				</p>
				<p className="font-semibold text-sm">{formatCurrency(product.price)}</p>
			</Link>
		</div>
	);
};

export default Product;
