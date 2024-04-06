import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import Navbar from '@/components/nav/Navbar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Digital Dukan',
	description: 'Your digital market place for high quality icons.',
	icons: '/main.svg',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						disableTransitionOnChange
					>
						<Navbar />
						{children}
						<Toaster />
						<Footer />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
