
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1550622824-c11e494a4b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cG9ydGZvbGlvcHJvJTIwdGVtcGxhdGUlMjB3aGl0aCUyMHByb2plY3QlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTQzNjYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'A modern portfolio template with project showcase, resume integration, and contact form.',
    link: '/project/portfoliopro',
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxCSVpMQVVOQ0glMjAlMjBCVVNJTkVTUyUyMFRFU1RJTU9OSUFMU3xlbnwwfHx8fDE3NTQzNjYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'A single-page responsive landing site for businesses to showcase services, pricing, and testimonials.',
    link: '/project/bizlaunch-landing-page',
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1694365899936-850bc6c2b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxUQVNLTUFTVCUyMEFQUHxlbnwwfHx8fDE3NTQzNjY0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication, built using React and a backend like Firebase.',
    link: '/project/taskmaster-app',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-w-0">
      {/* Hero Video Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
            Built to Shine. Designed to Last.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Crafting brilliant digital experiences that stand the test of time.
          </p>
          <div className="mx-auto max-w-4xl">
            <div className="relative mt-8 overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
                <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/erEgovG9WBs?autoplay=1&mute=1&loop=1&playlist=erEgovG9WBs&controls=0"
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Company Growth Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Fueled by Our People</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                From a small startup to a leading force in the industry, our journey is one of passion and perseverance.
              </p>
            </div>
            <div className="flex items-center justify-center">
                 <Image
                    src="https://media.licdn.com/dms/image/D4D12AQFG4fTw2M5O-w/article-cover_image-shrink_720_1280/0/1689345224855?e=2147483647&v=beta&t=o1f7hG8N1FjM0s-4M8g9J6G-j_kXo_mZ3B_gJ2A0c9c"
                    data-ai-hint="team collaboration"
                    alt="Hardworking Employees"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of the stunning projects we've delivered for our clients.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <Card key={project.name}>
                <Image
                  src={project.image}
                  data-ai-hint={project['data-ai-hint']}
                  alt={project.name}
                  width={550}
                  height={310}
                  className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <Link href={project.link} className="mt-4 inline-flex items-center text-primary hover:underline">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
              <Button asChild>
                  <Link href="/project">View All Projects</Link>
              </Button>
          </div>
        </div>
      </section>
      
      {/* CEO Words Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex items-center justify-center">
                    <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WnJlC1yqCf--RX5WPN4uO7KoTwjB8__57Q&s"
                    data-ai-hint="ceo portrait"
                    alt="CEO of Diamond City"
                    width={400}
                    height={400}
                    className="mx-auto rounded-full object-cover aspect-square"
                    />
                </div>
                <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Words from Our CEO</h2>
                    <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic max-w-xl mx-auto">
                    "Our success is built on five pillars: unwavering commitment to quality, relentless innovation, genuine client partnerships, a culture of continuous learning, and the passion our team brings to every project. This is how we build digital experiences that don't just function—they shine."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WnJlC1yqCf--RX5WPN4uO7KoTwjB8__57Q&s" />
                        <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Ratan Tata</p>
                        <p className="text-sm text-muted-foreground">CEO of Diamond City</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
