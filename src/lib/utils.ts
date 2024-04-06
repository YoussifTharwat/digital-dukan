import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(num: number) {
	const FORMATTED_CURRENCY = new Intl.NumberFormat(undefined, {
		currency: 'USD',
		style: 'currency',
	});

	return FORMATTED_CURRENCY.format(num);
}
