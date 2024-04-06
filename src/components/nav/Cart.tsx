'use client';

import { useCart } from '@/lib/stores/use-cart';
import { formatCurrency } from '@/lib/utils';
import { CreditCard, ShoppingCart, Trash, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';
import { Button, buttonVariants } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';

const Cart = () => {
	const { items, clearCart, removeItem } = useCart();

	const products = items.map((product) => product.product);

	const productPrices = products.reduce((total, cartItem) => {
		return total + (cartItem?.price || 0);
	}, 0);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<ShoppingCart />
				</Button>
			</SheetTrigger>
			<SheetContent className="z-[9999] min-w-[30%] px-2">
				<SheetHeader>
					<SheetTitle>Cart</SheetTitle>
				</SheetHeader>
				<section className="h-full flex flex-col pb-4">
					{items.length === 0 ? (
						<div className="flex flex-col items-center justify-center gap-3 h-full">
							<Logo />
							<p className="font-bold">Cart is empty.</p>
							<p className="text-sm text-center text-muted-foreground">
								You can explore our{' '}
								<Link
									href={`/products`}
									className="text-primary hover:underline underline-offset-1"
								>
									products
								</Link>{' '}
								to add them here.
							</p>
						</div>
					) : (
						<>
							<ScrollArea className="">
								{products.map((product) => (
									<div
										className="flex gap-3 p-3 text-sm border-b border-border last:border-b-0"
										key={product.id}
									>
										<Image
											//@ts-ignore
											src={product.images[0].image.url}
											width={100}
											height={100}
											alt="Product image"
											className="rounded"
										/>
										<div className="flex flex-col items-end flex-1 gap-1">
											<p className="font-semibold">{product.name}</p>
											<p className="text-xs text-muted-foreground">
												Price: {formatCurrency(product.price)}
											</p>
											<p className="text-xs text-muted-foreground">
												Transaction fee: {formatCurrency(product.price * 0.1)}
											</p>
											<Button
												onClick={() => removeItem(product.id)}
												className="gap-1.5 mt-auto"
												size={'sm'}
												variant={'ghost'}
											>
												Remove <X className="w-4 h-4" />
											</Button>
										</div>
									</div>
								))}
							</ScrollArea>
							<div className="mt-auto flex flex-col gap-1">
								<Separator />
								<div className="text-sm text-muted-foreground">
									<p>Total product price: {formatCurrency(productPrices)}</p>
									<p>Total transaction fee: {formatCurrency(1)}</p>
									<p className="text-foreground font-semibold">
										Total: {formatCurrency(productPrices + 1)}
									</p>
								</div>
								<Button className="w-full gap-1.5 mb-2" onClick={clearCart}>
									Clear cart <Trash className="w-4 h-4" />
								</Button>
								<Link
									href={`/cart`}
									className={buttonVariants({ className: 'w-full gap-1.5' })}
								>
									Proceed to checkout <CreditCard />
								</Link>
							</div>
						</>
					)}
				</section>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
