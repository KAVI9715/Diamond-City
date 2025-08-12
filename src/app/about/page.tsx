
import { Gem, History, Rocket, Quote, GitCommitHorizontal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">
              About Diamond City
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our journey, our values, and what makes us shine.
            </p>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <section className="p-8 rounded-lg shadow-lg bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Gem className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent font-headline">Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Diamond City is a digital powerhouse dedicated to crafting bold, modern, and performance-driven websites. We specialize in bringing brands to life through innovative web development, ensuring every project shines with clarity, purpose, and elegance—just like a diamond. Whether you're a startup or a growing enterprise, we build your online identity with precision, creativity, and technology that lasts.
              </p>
            </section>

            {/* History */}
            <section className="p-8 rounded-lg shadow-lg bg-card">
              <div className="flex items-center gap-4 mb-4">
                <History className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent font-headline">History</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2021, Diamond City began as a small team of passionate developers with a big vision — to create world-class digital experiences from the heart of South India. Our first few projects were small, but our commitment to quality and trust quickly earned us recognition.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Within just a few years, we evolved into a full-fledged development studio, handling complex web solutions for clients across industries like business, e-commerce, real estate, and creative services.
              </p>
            </section>

            {/* Milestones */}
            <section className="p-8 rounded-lg shadow-lg bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent font-headline">Milestones</h2>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li><span className="font-bold text-foreground">2021:</span> Diamond City was born. First 3 projects completed in 3 months.</li>
                <li><span className="font-bold text-foreground">2022:</span> Built a custom portfolio CMS and crossed 20+ completed projects.</li>
                <li><span className="font-bold text-foreground">2023:</span> Partnered with international teams and launched video-based homepage sites.</li>
                <li><span className="font-bold text-foreground">2024:</span> Expanded team to include backend experts and UI/UX designers.</li>
                <li><span className="font-bold text-foreground">2025:</span> Launched our flagship web product for project-based businesses.</li>
              </ul>
            </section>

            {/* Company Motto */}
            <section className="p-8 rounded-lg shadow-lg bg-card">
               <div className="flex items-center gap-4 mb-4">
                <Quote className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent font-headline">Company Motto</h2>
              </div>
              <blockquote className="text-2xl font-semibold italic text-center text-primary border-l-4 border-accent pl-4 font-headline">
                "Built to Shine. Designed to Last."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mt-4 text-center">
                At Diamond City, we don’t just build websites — we craft experiences that reflect clarity, strength, and brilliance.
              </p>
            </section>

            {/* Struggles & Growth */}
            <section className="p-8 rounded-lg shadow-lg bg-card">
              <div className="flex items-center gap-4 mb-4">
                <GitCommitHorizontal className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent font-headline">Struggles & Growth</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Like every diamond, our journey was shaped under pressure. From managing tight timelines to staying updated with fast-changing technology, we faced early struggles balancing quality with speed. There were late nights, failed prototypes, and constant learning. But every challenge pushed us to think smarter, build cleaner, and deliver better.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Today, our strength lies not just in our code, but in the grit, growth, and goals that shaped us.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
