
'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

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
                <DiamondLogo />
                <span className="font-bold text-lg">Diamond City</span>
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
