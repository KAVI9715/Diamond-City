
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Accessibility, Minus, Plus, Link as LinkIcon, SunMoon, Contrast } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Cookies from 'js-cookie';

const FONT_SIZE_MIN = 0.8;
const FONT_SIZE_MAX = 1.2;
const FONT_SIZE_STEP = 0.1;

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedFontSize = Cookies.get('fontSize');
    const savedHighContrast = Cookies.get('highContrast');
    const savedUnderlineLinks = Cookies.get('underlineLinks');

    if (savedFontSize) setFontSize(parseFloat(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedUnderlineLinks) setUnderlineLinks(savedUnderlineLinks === 'true');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}rem`;
    Cookies.set('fontSize', fontSize.toString(), { expires: 7 });
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
    Cookies.set('highContrast', highContrast.toString(), { expires: 7 });
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('underline-links', underlineLinks);
    Cookies.set('underlineLinks', underlineLinks.toString(), { expires: 7 });
  }, [underlineLinks]);

  const adjustFontSize = (direction: 'increase' | 'decrease') => {
    setFontSize((prev) => {
      let newSize;
      if (direction === 'increase') {
        newSize = Math.min(FONT_SIZE_MAX, prev + FONT_SIZE_STEP);
      } else {
        newSize = Math.max(FONT_SIZE_MIN, prev - FONT_SIZE_STEP);
      }
      return parseFloat(newSize.toFixed(2));
    });
  };

  const handleReset = () => {
    setFontSize(1);
    setHighContrast(false);
    setUnderlineLinks(false);
    toast({
        title: 'Accessibility settings reset',
        description: 'Your view has been returned to the default settings.',
    });
  };

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
      <PopoverContent className="w-80 mb-2" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-foreground">Accessibility</h4>
            <p className="text-sm text-muted-foreground">
              Adjust your viewing experience.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Font Size</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => adjustFontSize('decrease')} disabled={fontSize <= FONT_SIZE_MIN}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-semibold tabular-nums w-10 text-center">{Math.round(fontSize * 100)}%</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => adjustFontSize('increase')} disabled={fontSize >= FONT_SIZE_MAX}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Contrast className="h-4 w-4" /> High Contrast
              </span>
              <Button variant="outline" onClick={() => setHighContrast(p => !p)}>{highContrast ? 'Disable' : 'Enable'}</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <LinkIcon className="h-4 w-4" /> Underline Links
              </span>
              <Button variant="outline" onClick={() => setUnderlineLinks(p => !p)}>{underlineLinks ? 'Disable' : 'Enable'}</Button>
            </div>
          </div>
          <Button variant="ghost" onClick={handleReset} className="mt-2">Reset to Default</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
