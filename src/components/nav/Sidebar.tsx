'use client';
import { LogIn, LogOut, Menu } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { PRODUCT_CATEGORIES } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { User } from '@/payload-types';
import { ScrollArea } from '../ui/scroll-area';
import UserAccountMenu from './UserAccountMenu';
import { useAuth } from '@/lib/auth';

type Props = {
	user: User | null;
};

const Sidebar = ({ user }: Props) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'ghost'} size={`icon`} className="lg:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={`left`} className="z-[9000] px-2">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<ScrollArea className="h-full p-4">
					{PRODUCT_CATEGORIES.map((categroy, index) => (
						<div key={index} className="flex flex-col items-center gap-2">
							<h2 className="font-semibold text-lg my-2">{categroy.label}</h2>
							{categroy.featured.map((featuredItem, index) => (
								<div key={index}>
									<Link
										href={`${featuredItem.href}`}
										className="group flex flex-col gap1"
									>
										<div className="relative aspect-video w-[250px] group-hover:opacity-80 transition-all">
											<Image
												src={featuredItem.imageSrc}
												alt={`${featuredItem.name}`}
												fill
												className="object-cover object-center rounded"
												loading="eager"
											/>
										</div>
										<h2 className="font-semibold">{featuredItem.name}</h2>
										<p className="text-muted-foreground text-sm">Shop now</p>
									</Link>
								</div>
							))}
							<Separator className="my-4 w-full" />
						</div>
					))}
					<div className="flex items-center justify-center gap-3 mt-2">
						{user ? (
							<div className="flex flex-col items-center gap-2">
								<p>{user.email}</p>
								<Link
									href={`/sell`}
									className={buttonVariants({
										variant: 'outline',
										className: 'w-full ',
									})}
								>
									Seller dashboard
								</Link>
								<Button
									onClick={useAuth().signOut}
									variant={'outline'}
									className="gap-1.5 w-full"
								>
									Log out <LogOut className="w-4 h-4" />
								</Button>
							</div>
						) : (
							<>
								<Link
									href={`/sign-up`}
									className={buttonVariants({
										className: 'gap-2 ',
										variant: 'outline',
									})}
								>
									Create an account
								</Link>
								<Link
									href={`/sign-in`}
									className={buttonVariants({
										className: 'gap-2 ',
										variant: 'outline',
									})}
								>
									Sign in
									<LogIn className="w-4 h-4" />
								</Link>
							</>
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
