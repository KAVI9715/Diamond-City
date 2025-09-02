
'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Accessibility, Minus, Plus, RefreshCw, Underline, Contrast, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '../ui/separator';

const FONT_SIZE_COOKIE = 'accessibility-font-size';
const HIGH_CONTRAST_COOKIE = 'accessibility-high-contrast';
const UNDERLINE_LINKS_COOKIE = 'accessibility-underline-links';

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedFontSize = Cookies.get(FONT_SIZE_COOKIE);
    const savedHighContrast = Cookies.get(HIGH_CONTRAST_COOKIE);
    const savedUnderlineLinks = Cookies.get(UNDERLINE_LINKS_COOKIE);

    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedUnderlineLinks) setUnderlineLinks(savedUnderlineLinks === 'true');

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
        document.documentElement.style.fontSize = `${fontSize}px`;
        Cookies.set(FONT_SIZE_COOKIE, String(fontSize), { expires: 365 });
    }
  }, [fontSize, isMounted]);

  useEffect(() => {
    if (isMounted) {
        document.documentElement.classList.toggle('high-contrast', highContrast);
        Cookies.set(HIGH_CONTRAST_COOKIE, String(highContrast), { expires: 365 });
    }
  }, [highContrast, isMounted]);

  useEffect(() => {
    if (isMounted) {
        document.documentElement.classList.toggle('underline-links', underlineLinks);
        Cookies.set(UNDERLINE_LINKS_COOKIE, String(underlineLinks), { expires: 365 });
    }
  }, [underlineLinks, isMounted]);

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));
  
  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setUnderlineLinks(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open Accessibility Menu"
        >
          <Accessibility className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-4 mb-2" side="top" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-foreground">Accessibility Settings</h4>
            <p className="text-sm text-muted-foreground">
              Adjust the appearance of the site to your needs.
            </p>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="font-size" className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> / <Minus className="h-4 w-4" /> Font Size
              </Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={decreaseFontSize}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{Math.round((fontSize / 16) * 100)}%</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={increaseFontSize}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="flex items-center gap-2">
                <Contrast className="h-4 w-4" /> High Contrast
              </Label>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={setHighContrast}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="underline-links" className="flex items-center gap-2">
                <Underline className="h-4 w-4" /> Underline Links
              </Label>
              <Switch
                id="underline-links"
                checked={underlineLinks}
                onCheckedChange={setUnderlineLinks}
              />
            </div>
          </div>
          <Separator />
          <Button variant="outline" onClick={resetSettings}>
            <RefreshCw className="mr-2 h-4 w-4" /> Reset to Default
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
