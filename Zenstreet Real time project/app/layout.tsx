import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multi-Step Form',
  description: 'A collaborative multi-step form with real-time updates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Multi-Step Form</h1>
                <ThemeToggle />
              </div>
            </header>
            <main className="container mx-auto py-8">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
                © 2024 Multi-Step Form. All rights reserved.
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}