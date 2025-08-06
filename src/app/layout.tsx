
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Diamond City',
  description: 'Welcome to Diamond City',
  icons: {
    icon: 'https://6000-firebase-studio-1754287762762.cluster-isls3qj2gbd5qs4jkjqvhahfv6.cloudworkstations.dev/capra/attachedImages/9412cad3-dba1-4f0c-8f94-f3e0e7db9bd1/image_64a37749-6ce1-49c1-ab5b-d630f3020463.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
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
