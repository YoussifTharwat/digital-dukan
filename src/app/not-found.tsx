import Logo from '@/components/Logo';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
	return (
		<MaxWidthWrapper>
			<div className="flex flex-col justify-center items-center gap-3 w-full aspect-video">
				<Logo />
				<h1 className="text-3xl font-bold ">
					<span className="text-primary">404</span> Not found.
				</h1>
				<Link href={`/`} className={buttonVariants()}>
					Go back to home page &rarr;
				</Link>
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
