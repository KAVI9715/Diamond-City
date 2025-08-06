
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M50 5C46.8 6.2 43.4 9.4 41.4 13.4C40.6 15 40 16.2 40 18C40 20.2 41.2 21.8 43 22.8L43.8 23.2C44.6 23.6 45.4 24.2 46.2 25.2L47.6 27C49 29.2 50 31.8 50 34.8C50 38.6 48.8 41.8 46.4 44.4L44.8 46C43.8 47 43.4 48.2 43.8 49.6L44.8 53.2C45.2 54.6 46.2 55.6 47.6 56.2L50.4 57.2C52.2 57.8 53.8 57.8 55.2 57.2L58 56.2C59.4 55.6 60.4 54.6 60.8 53.2L61.8 49.6C62.2 48.2 61.8 47 60.8 46L59.2 44.4C56.8 41.8 55.6 38.6 55.6 34.8C55.6 31.8 56.6 29.2 58 27L59.4 25.2C60.2 24.2 61 23.6 61.8 23.2L62.6 22.8C64.4 21.8 65.6 20.2 65.6 18C65.6 16.2 65 15 64.2 13.4C62.2 9.4 58.8 6.2 55.6 5H50Z' stroke='%23FBBF24' stroke-width='3'/%3E%3C/svg%3E" />
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
