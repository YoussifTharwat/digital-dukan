'use client';

import { usePathname } from 'next/navigation';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import Logo from './Logo';
import { buttonVariants } from './ui/button';

const Footer = () => {
	const pathname = usePathname();
	const pathsToMinimize = ['/verify-email', '/sign-up', '/sign-in'];

	return (
		<footer className="mt-4 flex-grow-0">
			<MaxWidthWrapper>
				<div className="border-t border-border">
					{pathsToMinimize.includes(pathname) ? null : (
						<div className="pb-8 pt-16">
							<div className="flex justify-center">
								<Logo />
							</div>
						</div>
					)}

					{pathsToMinimize.includes(pathname) ? null : (
						<div>
							<div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
								<div className="absolute inset-0 overflow-hidden rounded-lg">
									<div
										aria-hidden="true"
										className="absolute bg-accent inset-0 bg-gradient-to-br bg-opacity-90"
									/>
								</div>

								<div className="text-center relative mx-auto max-w-sm">
									<h3 className="font-semibold">Become a seller</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										If you&apos;d like to sell high-quality digital products,
										you can do so in minutes.{' '}
										<Link
											href={`/sign-in?as=seller`}
											className={buttonVariants({
												variant: 'link',
												className:
													'gap-1.5 w-24 p-0 group hover:no-underline hover:text-primary/80 md:ml-auto',
											})}
										>
											Get started{' '}
											<span className="group-hover:translate-x-1 transition-all">
												&rarr;
											</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="py-10 md:flex md:items-center md:justify-between">
					<div className="text-center md:text-left">
						<p className="text-sm text-muted-foreground">
							&copy; {new Date().getFullYear()} All Rights Reserved
						</p>
					</div>

					<div className="mt-4 flex items-center justify-center md:mt-0">
						<div className="flex space-x-8">
							<Link
								href="#"
								className="text-sm transition-all text-muted-foreground hover:text-muted-foreground/50"
							>
								Terms
							</Link>
							<Link
								href="#"
								className="text-sm transition-all text-muted-foreground hover:text-muted-foreground/50"
							>
								Privacy Policy
							</Link>
							<Link
								href="#"
								className="text-sm transition-all text-muted-foreground hover:text-muted-foreground/50"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;
