import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { braindInfo } from '@/content/braind';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  adjustFontFallback: false
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      `ADINSPIRATION | ${braindInfo.braind_name.toUpperCase()}` ?? 'TEMPLATE',
    description: braindInfo.description ?? 'TEMPLATE'
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('flex h-auto flex-col', inter.variable)}>
        <Header />

        <main className="mx-auto flex size-full flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
