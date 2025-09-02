
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accessibility } from 'lucide-react';

export function AccessibilityMenu() {
  return (
    <Link href="/contact" passHref>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open Contact Page"
        >
          <Accessibility className="h-7 w-7" />
        </Button>
    </Link>
  );
}
