'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	function toggleTheme() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<Button variant="ghost" onClick={toggleTheme} size="icon">
			<Sun className="h-5 dark:hidden" />
			<Moon className="h-5 hidden dark:block" />
		</Button>
	);
}
