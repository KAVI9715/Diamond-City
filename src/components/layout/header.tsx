
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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M50 5C46.8 6.2 43.4 9.4 41.4 13.4C40.6 15 40 16.2 40 18C40 20.2 41.2 21.8 43 22.8L43.8 23.2C44.6 23.6 45.4 24.2 46.2 25.2L47.6 27C49 29.2 50 31.8 50 34.8C50 38.6 48.8 41.8 46.4 44.4L44.8 46C43.8 47 43.4 48.2 43.8 49.6L44.8 53.2C45.2 54.6 46.2 55.6 47.6 56.2L50.4 57.2C52.2 57.8 53.8 57.8 55.2 57.2L58 56.2C59.4 55.6 60.4 54.6 60.8 53.2L61.8 49.6C62.2 48.2 61.8 47 60.8 46L59.2 44.4C56.8 41.8 55.6 38.6 55.6 34.8C55.6 31.8 56.6 29.2 58 27L59.4 25.2C60.2 24.2 61 23.6 61.8 23.2L62.6 22.8C64.4 21.8 65.6 20.2 65.6 18C65.6 16.2 65 15 64.2 13.4C62.2 9.4 58.8 6.2 55.6 5H50Z" stroke="#FBBF24" strokeWidth="3"/>
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
