
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Accessibility, 
  Minus, 
  Plus, 
  Link as LinkIcon, 
  Contrast,
  Type,
  ArrowLeftRight,
  Annoyed,
  EyeOff,
  BookOpen,
  MousePointer,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Cookies from 'js-cookie';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

const FONT_SIZE_MIN = 0.8;
const FONT_SIZE_MAX = 1.2;
const FONT_SIZE_STEP = 0.1;

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const savedFontSize = Cookies.get('fontSize');
    const savedHighContrast = Cookies.get('highContrast');
    const savedUnderlineLinks = Cookies.get('underlineLinks');
    const savedTextSpacing = Cookies.get('textSpacing');
    const savedPauseAnimations = Cookies.get('pauseAnimations');
    const savedHideImages = Cookies.get('hideImages');
    const savedDyslexiaFriendly = Cookies.get('dyslexiaFriendly');
    const savedBigCursor = Cookies.get('bigCursor');

    if (savedFontSize) setFontSize(parseFloat(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedUnderlineLinks) setUnderlineLinks(savedUnderlineLinks === 'true');
    if (savedTextSpacing) setTextSpacing(savedTextSpacing === 'true');
    if (savedPauseAnimations) setPauseAnimations(savedPauseAnimations === 'true');
    if (savedHideImages) setHideImages(savedHideImages === 'true');
    if (savedDyslexiaFriendly) setDyslexiaFriendly(savedDyslexiaFriendly === 'true');
    if (savedBigCursor) setBigCursor(savedBigCursor === 'true');
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
  
  useEffect(() => {
    document.documentElement.classList.toggle('text-spacing', textSpacing);
    Cookies.set('textSpacing', textSpacing.toString(), { expires: 7 });
  }, [textSpacing]);

  useEffect(() => {
    document.documentElement.classList.toggle('pause-animations', pauseAnimations);
    Cookies.set('pauseAnimations', pauseAnimations.toString(), { expires: 7 });
  }, [pauseAnimations]);

  useEffect(() => {
    document.documentElement.classList.toggle('hide-images', hideImages);
    Cookies.set('hideImages', hideImages.toString(), { expires: 7 });
  }, [hideImages]);

  useEffect(() => {
    document.documentElement.classList.toggle('dyslexia-friendly', dyslexiaFriendly);
    Cookies.set('dyslexiaFriendly', dyslexiaFriendly.toString(), { expires: 7 });
  }, [dyslexiaFriendly]);
  
  useEffect(() => {
    document.documentElement.classList.toggle('big-cursor', bigCursor);
    Cookies.set('bigCursor', bigCursor.toString(), { expires: 7 });
  }, [bigCursor]);

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
    setTextSpacing(false);
    setPauseAnimations(false);
    setHideImages(false);
    setDyslexiaFriendly(false);
    setBigCursor(false);
    toast({
        title: 'Accessibility settings reset',
        description: 'Your view has been returned to the default settings.',
    });
  };

  const accessibilityOptions = [
    {
        icon: Contrast,
        label: "High Contrast",
        state: highContrast,
        action: setHighContrast
    },
    {
        icon: LinkIcon,
        label: "Highlight Links",
        state: underlineLinks,
        action: setUnderlineLinks
    },
    {
        icon: ArrowLeftRight,
        label: "Text Spacing",
        state: textSpacing,
        action: setTextSpacing
    },
    {
        icon: Annoyed,
        label: "Pause Animations",
        state: pauseAnimations,
        action: setPauseAnimations
    },
    {
        icon: EyeOff,
        label: "Hide Images",
        state: hideImages,
        action: setHideImages
    },
    {
        icon: BookOpen,
        label: "Dyslexia Friendly",
        state: dyslexiaFriendly,
        action: setDyslexiaFriendly
    },
    {
        icon: MousePointer,
        label: "Bigger Cursor",
        state: bigCursor,
        action: setBigCursor
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 animate-pulse-slow hover:animate-none"
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
              <Label htmlFor="font-size" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Type className="h-4 w-4" /> Bigger Text
              </Label>
              <div id="font-size" className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => adjustFontSize('decrease')} disabled={fontSize <= FONT_SIZE_MIN}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-semibold tabular-nums w-10 text-center">{Math.round(fontSize * 100)}%</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => adjustFontSize('increase')} disabled={fontSize >= FONT_SIZE_MAX}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {accessibilityOptions.map(({ icon: Icon, label, state, action }) => (
                <div key={label} className="flex items-center justify-between">
                    <Label htmlFor={label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Icon className="h-4 w-4" /> {label}
                    </Label>
                    <Switch id={label} checked={state} onCheckedChange={action} />
                </div>
            ))}
          </div>
          <Button variant="ghost" onClick={handleReset} className="mt-2">Reset to Default</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
