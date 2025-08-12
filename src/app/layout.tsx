
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Diamond City',
  description: 'Welcome to Diamond City',
  icons: {
    icon: 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876',
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
        <main className="flex-grow w-full">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
