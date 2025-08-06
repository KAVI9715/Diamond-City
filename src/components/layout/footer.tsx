
'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project',label: 'Project' },
  { href: '/service', label: 'Service' },
  { href: '/contact', label: 'Contact' },
];

const referenceLinks = [
  { href: '/career', label: 'Career' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/purpose', label: 'Purpose' },
];

const supportLinks = [
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookies Policy' },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
];

export function Footer() {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <Link href="/" className="flex items-center gap-2">
                 <Image src="https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/499602339_1259994212156767_5100678790049392660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y7w6hLYWr2cQ7kNvwGPZcjy&_nc_oc=AdlC4txy0nVh8XTDv99ebzClb6_wGpCoclZ7_LqP-3cwy-5ihWStQu3CtD1VHY1YbOE&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=fSxcDpsqKatSKln66NK2Yg&oh=00_AfUkZTbl3MEGQuNUXk-Ibp4cv5beb9jBA0-zbRQwUWjY0w&oe=6898E175" alt="Diamond City Logo" width={45} height={56} />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Building the future, one project at a time.
              </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Reference</h3>
            <ul className="mt-4 space-y-2">
              {referenceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                   <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
                      <link.Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Diamond City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
