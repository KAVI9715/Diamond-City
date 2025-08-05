
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Gem, Handshake, Heart } from 'lucide-react';

export default function PurposePage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Our Purpose
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We don’t just build websites. We build digital legacies.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Target className="w-8 h-8" />
                        Our Core Mission
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        At Diamond City, our core purpose is to empower individuals, startups, and businesses by transforming their ideas into powerful digital experiences.
                    </p>
                    <p>
                        We believe that a website is more than just code — it’s a brand’s identity, a customer’s first impression, and a platform for growth. That’s why we are committed to delivering web solutions that are functional, fast, beautiful, and built to last.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Handshake className="w-8 h-8" />
                        Bridging Creativity & Technology
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        We exist to bridge the gap between creativity and technology, offering our clients websites and applications that are not only visually stunning but also strategically built for performance, scalability, and user engagement.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Heart className="w-8 h-8" />
                        Our Values
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                     <p>
                        Every project we take on is guided by our values: clarity, quality, trust, and innovation. Like a diamond, we craft each solution with precision and care, ensuring it reflects strength, value, and brilliance.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Gem className="w-8 h-8" />
                        Building Partnerships
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Our purpose goes beyond development — we aim to build long-term partnerships, support our clients’ digital growth, and contribute meaningfully to the evolving world of web technology.
                    </p>
                </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
