
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Diamond City',
  description: 'Welcome to Diamond City',
  icons: {
    icon: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/528707405_122094532166975585_3675701913572390484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AaTgT-2TLecQ7kNvwEP5Q7k&_nc_oc=Adn005DKrTl2wBlLwrMtc0S52jlxvNwNCGjusESPjtiuSxS-h6cwpEbpq5elD3OLosbdSvZWzjXbti4G_aufcdki&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=1c_80rG7qwu19-RxvXTmaQ&oh=00_AfUqsfydaDbgSsQr6pPwXFSOROq5o5tWpQDQeyd1uSmKAA&oe=689908B1',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
