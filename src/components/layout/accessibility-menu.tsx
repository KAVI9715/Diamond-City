
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
  PauseCircle,
  EyeOff,
  BookOpen,
  MousePointer,
  X,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Cookies from 'js-cookie';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

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
  const [isOpen, setIsOpen] = useState(false);

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
    document.documentElement.style.fontSize = `${fontSize}rem`;
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
    { icon: Contrast, label: "High Contrast", state: highContrast, action: setHighContrast },
    { icon: LinkIcon, label: "Highlight Links", state: underlineLinks, action: setUnderlineLinks },
    { icon: Type, label: "Bigger Text", state: fontSize, action: adjustFontSize },
    { icon: ArrowLeftRight, label: "Text Spacing", state: textSpacing, action: setTextSpacing },
    { icon: PauseCircle, label: "Pause Animations", state: pauseAnimations, action: setPauseAnimations },
    { icon: EyeOff, label: "Hide Images", state: hideImages, action: setHideImages },
    { icon: BookOpen, label: "Dyslexia Friendly", state: dyslexiaFriendly, action: setDyslexiaFriendly },
    { icon: MousePointer, label: "Bigger Cursor", state: bigCursor, action: setBigCursor },
  ];

  const AccessibilityButton = ({ option, isSelected, onToggle }: { option: any, isSelected: boolean, onToggle: (value: any) => void }) => {
    const isBiggerText = option.label === "Bigger Text";

    return (
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="outline"
          className={cn(
            "w-full h-24 flex flex-col gap-2 items-center justify-center bg-card hover:bg-accent hover:text-accent-foreground border-border/50",
            isSelected && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={onToggle}
        >
          <option.icon className="h-7 w-7" />
          <span className="text-xs font-medium">{option.label}</span>
        </Button>
        {isBiggerText && (
          <div className="flex items-center gap-2 mt-1">
            <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => adjustFontSize('decrease')} disabled={fontSize <= FONT_SIZE_MIN}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-semibold tabular-nums w-10 text-center">{Math.round(fontSize * 100)}%</span>
            <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => adjustFontSize('increase')} disabled={fontSize >= FONT_SIZE_MAX}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
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
      <PopoverContent className="w-80 mb-2 p-0 border-none shadow-2xl" align="end">
        <div className="flex flex-col bg-card rounded-lg overflow-hidden">
          <header className="flex items-center justify-between p-3 bg-destructive text-destructive-foreground">
            <h4 className="font-semibold">Accessibility Menu</h4>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive-foreground hover:bg-destructive/80" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </header>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {accessibilityOptions.map((option) => {
                const isSelected = option.label === "Bigger Text" ? fontSize > 1 : !!option.state;
                const onToggle = () => {
                  if (typeof option.action === 'function') {
                    if (typeof option.state === 'boolean') {
                       (option.action as React.Dispatch<React.SetStateAction<boolean>>)(!option.state);
                    }
                  }
                };
                
                if (option.label === "Bigger Text") {
                   return <AccessibilityButton key={option.label} option={option} isSelected={isSelected} onToggle={() => {}} />;
                }

                return <AccessibilityButton key={option.label} option={option} isSelected={isSelected} onToggle={onToggle} />;
              })}
            </div>
          </div>
          
          <Separator />
          
          <div className="p-3">
            <Button variant="ghost" onClick={handleReset} className="w-full">
              Reset to Default
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

    