import { z } from 'zod';

export const AuthCredentialsValidator = z.object({
	email: z.string().email(),
	password: z.string().min(2, {
		message: 'Password must be at least 2 characters long.',
	}),
});

export type TAuthCredentialsValidator = z.infer<
	typeof AuthCredentialsValidator
>;
