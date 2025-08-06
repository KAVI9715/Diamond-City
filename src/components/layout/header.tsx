
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, MoreVertical, Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project',label: 'Project' },
  { href: '/service', label: 'Service' },
  { href: '/contact', label: 'Contact' },
];

const appMenuItems = [
  { href: '/career', label: 'Career' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/purpose', label: 'Purpose' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookies Policy' },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
];

const DiamondLogo = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500"
    >
        <path d="M32 2C31.4167 2 30.8333 2.4 30.25 3.2L11.75 22C11.1667 22.8 11.1667 23.6 11.75 24.4L30.25 43.2C30.8333 44 31.4167 44.4 32 44.4C32.5833 44.4 33.1667 44 33.75 43.2L52.25 24.4C52.8333 23.6 52.8333 22.8 52.25 22L33.75 3.2C33.1667 2.4 32.5833 2 32 2Z" fill="#FBBF24"/>
        <path d="M32 62C33.4 55.3333 36.4667 50.5333 41.2 47.6C45.9333 44.6667 47.6 41.6 46.2 38.4C44.8 35.2 40.9333 34.4667 34.6 36.2C28.2667 37.9333 25.6 40.8 26.6 44.8C27.6 48.8 30.6 54.6667 32 62Z" fill="#FBBF24"/>
    </svg>
);


export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        'px-3 py-2 text-sm font-medium transition-colors hover:text-accent rounded-md',
        pathname === href ? 'text-accent' : 'text-foreground/80'
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
          pathname === href ? 'bg-accent text-accent-foreground' : 'text-foreground'
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 mr-6">
            <DiamondLogo />
            <span className="font-bold">Diamond City</span>
          </Link>
        </div>

        <div className="flex items-center justify-center flex-1">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {mainNavLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>


        <div className="flex items-center gap-1">
           {/* Desktop App Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-md h-9 w-9" size="icon">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">Open app menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {appMenuItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Get in Touch</DropdownMenuLabel>
                {socialLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <link.Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
                 <Link href="/" className="flex items-center gap-2 mb-8">
                  <DiamondLogo />
                  <span className="font-bold text-lg">Diamond City</span>
                </Link>
                <div className="flex flex-col gap-y-4">
                  <div className='flex flex-col gap-y-2'>
                    {mainNavLinks.map((link) => (
                      <MobileNavLink key={link.href} href={link.href}>
                        {link.label}
                      </MobileNavLink>
                    ))}
                  </div>
                  <Separator />
                  <div className='flex flex-col gap-y-2'>
                    {appMenuItems.map((item) => (
                       <MobileNavLink key={item.href} href={item.href}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                   <Separator />
                   <div>
                    <h4 className="px-3 text-sm font-medium text-muted-foreground mb-2">Get in Touch</h4>
                    <div className="flex flex-col gap-y-2">
                      {socialLinks.map((link) => (
                         <SheetClose asChild key={link.href}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                              <link.Icon className="h-5 w-5" />
                              <span>{link.label}</span>
                            </a>
                        </SheetClose>
                      ))}
                    </div>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
