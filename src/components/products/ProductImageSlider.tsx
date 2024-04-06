'use client';

import { Product } from '@/payload-types';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

type Props = { product: Product };

const ProductImageSlider = ({ product }: Props) => {
	const validUrls = product.images
		.map(({ image }) => (typeof image === 'string' ? image : image.url))
		.filter(Boolean) as string[];

	return (
		<Carousel className="w-full group">
			<CarouselContent>
				{validUrls.map((image, index) => (
					<CarouselItem key={index}>
						<Image
							key={image}
							alt={`image product image`}
							className="object-cover  object-center rounded-lg opacity-0 transition-all duration-[2s]"
							width={768}
							height={768}
							loading="lazy"
							src={image}
							onLoadingComplete={(image) => image.classList.remove('opacity-0')}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious
				variant={`secondary`}
				className="left-2  transition-all duration-150 z-50 active:scale-90 opacity-0 group-hover:opacity-100 disabled:hidden"
			/>
			<CarouselNext
				variant={`secondary`}
				className="right-2   transition-all duration-150 z-50 active:scale-90 opacity-0 group-hover:opacity-100 disabled:hidden"
			/>
		</Carousel>
	);
};

export default ProductImageSlider;
