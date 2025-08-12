
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { generateVideo } from '@/ai/flows/video-generation-flow';

export default function StudioPage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('cinematic');
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        variant: 'destructive',
        title: 'Prompt is required',
        description: 'Please enter a description for the video you want to create.',
      });
      return;
    }

    setIsLoading(true);
    setVideoUrl('');

    try {
      const result = await generateVideo({ prompt, style });
      if (result && result.videoDataUri) {
        setVideoUrl(result.videoDataUri);
        toast({
          title: 'Video Generated!',
          description: 'Your video has been successfully created.',
        });
      } else {
        throw new Error('Video generation failed to return data.');
      }
    } catch (error) {
      console.error('Video generation error:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'Something went wrong while creating your video. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen py-12"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20250105/original/pngtree-abstract-technology-background-with-pink-and-blue-waves-lights-picture-image_15713085.jpg')",
      }}
    >
      <main className="container mx-auto px-4 md:px-6 bg-slate-900/80 backdrop-blur-sm py-12 rounded-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-white">
            Creator Studio
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Bring your ideas to life. Describe a scene and let our AI create a video for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Create Your Video</CardTitle>
              <CardDescription>
                Fill in the details below to generate your video.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-white">Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="bg-background text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="style" className="text-white">Style</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger id="style" className="w-full bg-background text-foreground">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="animation">Animation</SelectItem>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="dreamlike">Dreamlike</SelectItem>
                    <SelectItem value="hero">Hero</SelectItem>
                    <SelectItem value="master">Master</SelectItem>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="satisfaction">Satisfaction</SelectItem>
                    <SelectItem value="thrilling">Thrilling</SelectItem>
                    <SelectItem value="vibrant">Vibrant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate
                  </>
                )}
              </Button>
               {isLoading && (
                <p className="text-sm text-center text-gray-400 mt-2">
                    Video generation can take up to a minute. Please be patient.
                </p>
            )}
            </CardContent>
          </Card>

          <Card className="bg-card/80 flex items-center justify-center">
            <CardContent className="p-6 w-full">
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <Loader2 className="h-16 w-16 animate-spin text-accent" />
                  <p className="mt-4 text-lg">Creating your masterpiece...</p>
                </div>
              )}
              {!isLoading && videoUrl && (
                <video
                  src={videoUrl}
                  controls
                  className="w-full rounded-lg aspect-video"
                />
              )}
              {!isLoading && !videoUrl && (
                <div className="text-center text-gray-400 h-full flex flex-col justify-center">
                  <Wand2 className="h-16 w-16 mx-auto text-accent" />
                  <p className="mt-4 text-lg">Your generated video will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
