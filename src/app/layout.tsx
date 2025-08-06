
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Diamond City',
  description: 'Welcome to Diamond City',
  icons: {
    icon: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/499602339_1259994212156767_5100678790049392660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y7w6hLYWr2cQ7kNvwGPZcjy&_nc_oc=AdlC4txy0nVh8XTDv99ebzClb6_wGpCoclZ7_LqP-3cwy-5ihWStQu3CtD1VHY1YbOE&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=fSxcDpsqKatSKln66NK2Yg&oh=00_AfUkZTbl3MEGQuNUXk-Ibp4cv5beb9jBA0-zbRQwUWjY0w&oe=6898E175',
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
