
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
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const year = new Date().getFullYear().toString();
        setCurrentYear(year); 
    }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
                <Image src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876" alt="Diamond City Logo" width={62} height={80} className="h-12 w-auto" />
                <span className="text-xl font-bold">Diamond City</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
                Crafting brilliant digital experiences that stand the test of time. Built to shine, designed to last.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
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
            <h3 className="text-sm font-semibold tracking-wider uppercase">Legal & More</h3>
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
            <h3 className="text-sm font-semibold tracking-wider uppercase">Get in Touch</h3>
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
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Diamond City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
