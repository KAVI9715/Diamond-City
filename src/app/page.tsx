
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
            src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/528068089_122094541496975585_2316637687468881104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=buydVUzI4KkQ7kNvwEqpJ-5&_nc_oc=AdkOzQ6ayDPBahAD-4ZG5t3zDsMVxw8F8OPecBbyMjEzhF1ntrFoDNckA4yrRTDTkdwDQd754uJWWL_aVvWmFd-h&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=IeCom_gPsHXbOWEzbzlEcA&oh=00_AfVY0HI_8aOEBot2CS26Kh47oz-ys58ssIDw95B3Hdcvhg&oe=6898D876"
            data-ai-hint="company logo"
            alt="Company Logo"
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
                <AvatarImage src="data:image/jpeg;base64,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"/>
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
