
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
        const year = new Date().getFullYear().toString();
        setCurrentYear('2025'); 
    }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876" alt="Diamond City Logo" width={62} height={80} className="h-12 w-auto" />
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                    Building the future, one project at a time.
                </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
             <div className="lg:col-span-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <ul className="space-y-3">
                    {socialLinks.map((link) => (
                        <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
                            <link.Icon className="h-5 w-5" />
                            {link.label}
                        </a>
                        </li>
                    ))}
                    </ul>
                    <div className="w-full h-auto overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.112648393117!2d79.1350618153093!3d10.79685999230671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89f50c6a85b%3A0x35653c39a5f7088!2sThanjavur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1620208119853!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 flex justify-end text-sm text-muted-foreground">
          <p>&copy; {currentYear} Diamond City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
