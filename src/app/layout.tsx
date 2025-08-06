
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cpath d='M32 2C31.4167 2 30.8333 2.4 30.25 3.2L11.75 22C11.1667 22.8 11.1667 23.6 11.75 24.4L30.25 43.2C30.8333 44 31.4167 44.4 32 44.4C32.5833 44.4 33.1667 44 33.75 43.2L52.25 24.4C52.8333 23.6 52.8333 22.8 52.25 22L33.75 3.2C33.1667 2.4 32.5833 2 32 2Z' fill='%23FBBF24'/%3E%3Cpath d='M32 62C33.4 55.3333 36.4667 50.5333 41.2 47.6C45.9333 44.6667 47.6 41.6 46.2 38.4C44.8 35.2 40.9333 34.4667 34.6 36.2C28.2667 37.9333 25.6 40.8 26.6 44.8C27.6 48.8 30.6 54.6667 32 62Z' fill='%23FBBF24'/%3E%3C/svg%3E" />
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
