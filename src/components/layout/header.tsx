
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
import Image from 'next/image';

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
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876" alt="Diamond City Logo" width={62} height={80} className="h-10 w-auto" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
              {mainNavLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                  {link.label}
                  </NavLink>
              ))}
          </nav>
        </div>

        <div className="flex items-center">
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
                  <Image src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876" alt="Diamond City Logo" width={62} height={80} className="h-10 w-auto" />
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
