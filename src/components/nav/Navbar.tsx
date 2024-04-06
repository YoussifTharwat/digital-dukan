import { getServerUser } from '@/lib/payload-utils';
import { LogIn } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Logo from '../Logo';
import { ModeToggle } from '../theme/mode-toggle';
import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import Cart from './Cart';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';
import UserAccountMenu from './UserAccountMenu';

const Navbar = async () => {
	const nextCookies = cookies();

	const user = await getServerUser(nextCookies);

	return (
		<nav className="h-16 overflow-x-clip bg-background px-3 md:px-[10%] top-0 sticky z-[999] flex  gap-4 items-center w-full">
			<Sidebar user={user} />
			<Link href={`/`} className="flex items-center justify-center gap-2">
				<Logo />
			</Link>
			<NavMenu />
			<div className="ml-auto hidden lg:block">
				{user ? (
					<UserAccountMenu user={user} />
				) : (
					<>
						<Link
							href={`/sign-up`}
							className={buttonVariants({
								className: 'gap-2   ',
								variant: 'ghost',
							})}
						>
							Create an account
						</Link>
						<Link
							href={`/sign-in`}
							className={buttonVariants({
								className: 'gap-2 ',
								variant: 'ghost',
							})}
						>
							Sign in
							<LogIn className="w-4 h-4" />
						</Link>
					</>
				)}
			</div>
			<Separator
				orientation="vertical"
				className="h-[75%] bg-muted ml-auto lg:ml-0"
			/>
			<ModeToggle />
			<Cart />
		</nav>
	);
};

export default Navbar;
