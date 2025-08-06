
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Diamond City',
  description: 'Welcome to Diamond City',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 8.5L12 22L22 8.5L12 2Z' stroke='%23FBBF24' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M2 8.5L12 12L22 8.5' stroke='%23FBBF24' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M12 22V12' stroke='%23FBBF24' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M7 10.25L12 12' stroke='%23FBBF24' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 10.25L12 12' stroke='%23FBBF24' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
