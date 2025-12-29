import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BetLabel - Online Betting & Casino | 1500€ Welcome Bonus',
  description: 'BetLabel - Your premier destination for online sports betting and casino gaming. Get 1500€ + 150 Free Spins welcome bonus.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

