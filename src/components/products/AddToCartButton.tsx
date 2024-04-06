'use client';

import { Product } from '@/payload-types';
import { Button, buttonVariants } from '../ui/button';
import { useCart } from '@/lib/stores/use-cart';
import { toast } from 'sonner';
import { Check, CheckCheck, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = { product: Product };

const AddToCartButton = ({ product }: Props) => {
	const { items, addItem } = useCart();

	function handleClick() {
		addItem(product);
		toast('Item added to cart', {
			icon: <Check className="w-4 h-4 text-emerald-500" />,
		});
	}

	const isAdded = items.find((item) => item.product.id === product.id);

	if (isAdded)
		return (
			<p
				className={buttonVariants({
					className: cn(
						'w-full bg-primary/30 hover:bg-primary/[.30] gap-1.5 md:mt-20 text-primary/[1]'
					),
				})}
			>
				Item added to cart. <CheckCheck />
			</p>
		);

	return (
		<Button onClick={handleClick} className="w-full md:mt-20">
			Add to cart
		</Button>
	);
};

export default AddToCartButton;
