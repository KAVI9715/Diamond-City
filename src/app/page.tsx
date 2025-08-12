
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
            src="data:image/jpeg;base64,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