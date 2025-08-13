
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, Code, PenTool, Rocket, Users, Award, Star, Quote } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1656231267030-6e2c4af5ebd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxUYXNrTWFzdGVyJTIwQXBwfGVufDB8fHx8MTc1NDk5NDE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication, built using React and a backend like Firebase.',
    link: '/project/taskmaster-app',
  },
];

const services = [
  {
    icon: Code,
    title: 'Web Development 💻',
    description: 'We build high-performance, scalable websites and applications tailored to your business needs.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design 🎨',
    description: 'Crafting intuitive and beautiful user interfaces that provide an exceptional user experience.',
  },
  {
    icon: Rocket,
    title: 'SEO & Performance 🚀',
    description: 'Optimizing your site for speed and search engines to help you reach a wider audience.',
  },
];

const achievements = [
  {
    icon: Rocket,
    value: '50+',
    label: 'Projects Launched',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: '5',
    label: 'Years in Business',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Average Rating',
  },
];

const testimonials = [
  {
    quote: "Diamond City transformed our online presence. Their attention to detail and commitment to quality is unparalleled. We couldn't be happier with the result.",
    name: 'Sarah L.',
    title: 'CEO of a Local Business',
    avatar: 'SL',
  },
  {
    quote: "The team was professional, responsive, and incredibly talented. They delivered our project on time and exceeded our expectations. Highly recommended!",
    name: 'Mike D.',
    title: 'Startup Founder',
    avatar: 'MD',
  },
  {
    quote: "Working with Diamond City was a fantastic experience. They understood our vision and brought it to life with a beautiful and functional website.",
    name: 'Jane K.',
    title: 'Marketing Manager',
    avatar: 'JK',
  },
];


export default function Home() {
  return (
    <div
      className="bg-background text-foreground"
    >
      <div className="flex flex-col min-w-0 w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          <iframe
            src="https://www.youtube.com/embed/fzWzPXEhPvA?autoplay=1&mute=1&loop=1&playlist=fzWzPXEhPvA&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&end=49"
            className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[56.25vw] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="container relative px-4 md:px-6 text-center z-20">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Built to Shine. Designed to Last.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">
              Crafting brilliant digital experiences that stand the test of time.
            </p>
          </div>
        </section>

        <div className="bg-background/80 backdrop-blur-sm text-foreground">
            {/* Our Services Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Services ✨</h2>
                    <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    We provide a complete suite of services to build and grow your digital presence.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                    <Card key={service.title} className="text-center bg-card text-card-foreground">
                        <CardHeader>
                        <div className="mx-auto rounded-full h-16 w-16 flex items-center justify-center bg-primary text-primary-foreground">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="mt-4 font-headline text-foreground">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                </div>
            </section>

            {/* Company Growth Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center">Fueled by Our People 🧑‍🤝‍🧑</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                        From a small startup to a leading force in the industry, our journey is one of passion and perseverance.
                    </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="https://www.behindwoods.com/uploads/5fd0df634ed2b.jpg"
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
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects 🏆</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take a look at some of the stunning projects we've delivered for our clients.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {projects.map((project) => (
                    <Card key={project.name} className="bg-card text-card-foreground">
                        <Image
                        src={project.image}
                        data-ai-hint={project['data-ai-hint']}
                        alt={project.name}
                        width={550}
                        height={310}
                        className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                        />
                        <CardContent className="p-4">
                        <h3 className="text-lg font-semibold font-headline text-foreground">{project.name}</h3>
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

            {/* Achievements Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements 🏅</h2>
                    <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    We are proud of the milestones we have achieved over the years.
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {achievements.map((achievement) => (
                    <div key={achievement.label}>
                        <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-4xl font-bold text-foreground">{achievement.value}</p>
                        <p className="text-muted-foreground">{achievement.label}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say ❤️</h2>
                    <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    We take pride in building strong relationships with our clients. Here's what they have to say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="flex flex-col bg-card text-card-foreground">
                        <CardContent className="p-6 flex-grow">
                        <Quote className="mb-4 h-8 w-8 text-primary" />
                        <p className="flex-grow text-muted-foreground">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="flex flex-row items-center gap-4 pt-0">
                        <Avatar>
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                        </CardHeader>
                    </Card>
                    ))}
                </div>
                </div>
            </section>

            {/* CEO Words Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <Image
                            src="https://i.postimg.cc/QNnQYkt6/13.jpg"
                            data-ai-hint="ceo portrait"
                            alt="CEO of Diamond City"
                            width={400}
                            height={400}
                            className="mx-auto rounded-full object-cover aspect-square"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center">Words from Our CEO 👨‍💼</h2>
                            <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic max-w-xl mx-auto lg:mx-0">
                            "Our success is built on five pillars: unwavering commitment to quality, relentless innovation, genuine client partnerships, a culture of continuous learning, and the passion our team brings to every project. This is how we build digital experiences that don't just function—they shine."
                            </blockquote>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://i.postimg.cc/QNnQYkt6/13.jpg" />
                                <AvatarFallback>K</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">Kaviyarasan</p>
                                <p className="text-sm text-muted-foreground">CEO of Diamond City</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}
    

    




    

    

    

    

    
