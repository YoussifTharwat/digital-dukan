'use client';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	AuthCredentialsValidator,
	TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator';
import { trpc } from '@/trpc/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Page = () => {
	const form = useForm<TAuthCredentialsValidator>({
		resolver: zodResolver(AuthCredentialsValidator),
	});

	const { mutate: createUser } =
		trpc.authRouter.createPayloadUser.useMutation();

	function onSubmit({ email, password }: TAuthCredentialsValidator) {
		createUser({ email, password });
	}

	return (
		<>
			<div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
						<h1 className="text-2xl font-bold">Create an account</h1>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="w-full text-start"
							>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													{...form.register('email')}
													placeholder={'test@test.com'}
													{...field}
												/>
											</FormControl>
											<FormDescription>{}</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													{...form.register('email')}
													placeholder={'test@test.com'}
													{...field}
													type="password"
												/>
											</FormControl>
											<FormDescription>{}</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" className="w-full">
									Create an account
								</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
