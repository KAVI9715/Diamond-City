
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32.0001 5.33331L56.0001 22.6666L32.0001 58.6666L8.00008 22.6666L32.0001 5.33331Z' stroke='%23FBBF24' stroke-width='3' stroke-linejoin='round'/%3E%3Cpath d='M8 22.6666L32 32L56 22.6666' stroke='%23FBBF24' stroke-width='3' stroke-linejoin='round'/%3E%3Cpath d='M32 58.6666V32' stroke='%23FBBF24' stroke-width='3' stroke-linejoin='round'/%3E%3Cpath d='M20 28L32 32' stroke='%23FBBF24' stroke-width='3' stroke-linejoin='round'/%3E%3Cpath d='M44 28L32 32' stroke='%23FBBF24' stroke-width='3' stroke-linejoin='round'/%3E%3C/svg%3E" />
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
