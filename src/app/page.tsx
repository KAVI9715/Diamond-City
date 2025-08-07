
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctvmQlsml0FbXTWIMHyVSyuHRGSRgf2gtxg&s"
            data-ai-hint="team collaboration"
            alt="Hardworking Employees"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>

      {/* Popular Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Most Popular Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of the groundbreaking projects that define our capabilities and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => (
              <Card key={project.name} className="overflow-hidden">
                <Image
                  src={project.image}
                  data-ai-hint={project['data-ai-hint']}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto mt-4">
                    <Link href={project.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <Avatar className="w-48 h-48 mx-auto">
                <AvatarImage src="data:image/jpeg;base64,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" data-ai-hint="ceo portrait" />
                <AvatarFallback>CEO</AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">A Message from Our CEO</h3>
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-accent pl-4">
                  "Our goal is to push the boundaries of what's possible."<br/>
                  "We believe in the power of technology to create positive change."<br/>
                  "Every challenge is an opportunity for innovation and growth."<br/>
                  "Our team is our greatest asset, and their passion fuels our success."<br/>
                  "Together, we are building a legacy of excellence."
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
