import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeAnt AI',
  description: 'AI-powered code review and repository management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-60">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}