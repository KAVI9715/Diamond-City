
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M45.8,9.1l-28,28.2c-2.3,2.3-3.6,5.5-3.6,8.8v0c0,6.9,5.6,12.5,12.5,12.5h0c3.3,0,6.5-1.3,8.8-3.6l14.5-14.5' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3Cpath d='M45.8,9.1l28.2,28.2c2.3,2.3,3.6,5.5,3.6,8.8v0c0,6.9-5.6,12.5-12.5,12.5h0c-3.3,0-6.5-1.3-8.8-3.6L42,42.1' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3Cpath d='M17.8,62.1L50,94.3l32.2-32.2' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3Cline x1='50' y1='58.6' x2='50' y2='94.3' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3Cpath d='M33.4,47.7L50,64.3l16.6-16.6' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3Cpath d='M45.8,9.1L50,4.9l4.2,4.2' stroke='%23f59e0b' stroke-width='5' stroke-miterlimit='10'/%3E%3C/svg%3E" />
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
