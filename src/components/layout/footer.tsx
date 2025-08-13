'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Separator } from '../ui/separator';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project',label: 'Projects' },
  { href: '/service', label: 'Services' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookies Policy' },
  { href: '/career', label: 'Careers' },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
];

export function Footer() {
    const [currentYear, setCurrentYear] = useState<string | null>(null);

    useEffect(() => {
        const year = new Date().getFullYear().toString();
        setCurrentYear(year); 
    }, []);

  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
                <Image src="https://i.postimg.cc/MKfz1xNs/2-removebg-preview.png" alt="Diamond City Logo" width={170} height={120} className="h-[120px] w-[170px]" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
                Crafting brilliant digital experiences that stand the test of time. Built to shine, designed to last.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Legal & More</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className='flex items-center gap-3'>
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Tanjore, Tamil Nadu, India</span>
                </li>
                <li className='flex items-center gap-3'>
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contact@diamondcityweb.com" className="hover:text-primary">contact@diamondcityweb.com</a>
                </li>
                 <li className='flex items-center gap-3'>
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
                </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <link.Icon className="h-6 w-6" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
        
        <Separator className="my-8 bg-border" />
        
        <div className="text-center text-sm text-muted-foreground">
          {currentYear && <p>&copy; {currentYear} Diamond City. All rights reserved.</p>}
        </div>
      </div>
    </footer>
  );
}
