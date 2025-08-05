
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

const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2L2 9.5l10 12.5L22 9.5L12 2z" />
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
                <DiamondIcon className="h-6 w-6 text-white" />
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
