
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
    <div className="flex flex-col">
      {/* Hero Video Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
            Built to Shine. Designed to Last.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Crafting brilliant digital experiences that stand the test of time.
          </p>
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
      </section>

      {/* Company Growth Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Growth Story</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From a small startup to a leading force in the industry, our journey is one of passion and perseverance.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Avatar>
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJNGmw6PulCzjKFR2XjulKspVH63XDq4V3w&s" data-ai-hint="ceo portrait" />
                  <AvatarFallback>CEO</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-muted-foreground">CEO of Diamond City</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-accent">Benefits</h3>
                        <p className="mt-2 text-muted-foreground">We are committed to delivering cutting-edge solutions that drive success and create lasting value for our clients.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-accent">Projects</h3>
                        <p className="mt-2 text-muted-foreground">Our diverse portfolio showcases our expertise in tackling complex challenges and delivering exceptional results.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Employees Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container grid items-center justify-between gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Fueled by Our People</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The dedication and expertise of our team are the driving forces behind our success. Their hard work transforms ambitious ideas into reality, leading to project growth and client satisfaction.
            </p>
          </div>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WnJlC1yqCf--RX5WPN4uO7KoTwjB8__57Q&s"
            data-ai-hint="team collaboration"
            alt="Hardworking Employees"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
    </div>
  );
}
