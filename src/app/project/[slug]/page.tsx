
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Zap, Cpu, Code } from 'lucide-react';

const allProjects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1641444473031-75aa19c003a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'A modern portfolio template with project showcase, resume integration, and contact form. Built using HTML, CSS, JS, and optionally React.',
    usage: 'Ideal for freelancers, designers, developers, and artists to showcase their work and attract clients.',
    performance: 'Optimized for fast loading with clean, efficient code. Fully responsive for all devices.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    features: ['Project Showcase', 'Resume Integration', 'Contact Form', 'Social Media Links'],
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1536560942313-1530f4653ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsYW5kaW5nJTIwcGFnZXxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'A single-page responsive landing site designed for businesses to showcase their services, pricing, and testimonials.',
    usage: 'Perfect for startups and small businesses to quickly establish an online presence and generate leads.',
    performance: 'Built for high conversion rates with a focus on speed and mobile-first design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: ['Service Showcase', 'Pricing Table', 'Testimonials Section', 'Lead-gen Form'],
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication. Built using React and Firebase/MongoDB backend.',
    usage: 'Helps individuals and teams organize tasks, set deadlines, and track progress efficiently.',
    performance: 'Real-time database synchronization ensures tasks are always up-to-date across all user devices.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    features: ['CRUD Operations', 'User Authentication', 'Task Prioritization', 'Deadline Tracking'],
  },
  {
    name: 'EduBoard LMS',
    image: 'https://images.unsplash.com/photo-1665766918272-46bd786ffe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWFybmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "learning dashboard",
    description: 'Admin, student, and teacher dashboards with course management, video lectures, and progress tracking.',
    usage: 'An all-in-one solution for educational institutions and online tutors to deliver and manage courses.',
    performance: 'Scalable architecture to handle a large number of concurrent users and video streaming.',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'AWS S3'],
    features: ['Course Management', 'Video Lectures', 'Quizzes & Assignments', 'Progress Tracking'],
  },
  {
    name: 'eComKart',
    image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "ecommerce products",
    description: 'A shopping site with cart, product pages, payment gateway, and order tracking.',
    usage: 'A complete e-commerce solution for businesses to sell products online and manage inventory.',
    performance: 'Fast product loading and a streamlined checkout process to minimize cart abandonment.',
    technologies: ['Next.js', 'Stripe', 'GraphQL', 'Apollo Client', 'Prisma'],
    features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking'],
  },
  {
    name: 'BlogVault',
    image: 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxibG9nJTIwbGF5b3V0fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "blog layout",
    description: 'Users can post, edit, and comment. Built with a rich text editor and backend (Node.js/Django).',
    usage: 'A platform for bloggers and content creators to publish articles and engage with their audience.',
    performance: 'SEO-optimized structure and fast page loads to rank higher in search engine results.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Nginx'],
    features: ['Rich Text Editor', 'Post Management', 'Comment System', 'User Profiles'],
  },
  {
    name: 'EventMate',
    image: 'https://images.unsplash.com/photo-1641810644628-50826c8914c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxldmVudCUyMGNhbGVuZGFyfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "event calendar",
    description: 'Create/manage events with invite system, ticket booking, and location map integration.',
    usage: 'A tool for event organizers to manage events, sell tickets, and interact with attendees.',
    performance: 'Handles high traffic during ticket sales and provides real-time updates on event status.',
    technologies: ['Vue.js', 'Firebase', 'Google Maps API', 'Stripe'],
    features: ['Event Management', 'Ticket Booking', 'Invitation System', 'Map Integration'],
  },
  {
    name: 'DevFinder',
    image: 'https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGV2ZWxvcGVyJTIwcHJvZmlsZXN8ZW58MHx8fHwxNzU0MzY2NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "developer profiles",
    description: 'Searchable list of developers using GitHub API, with filters for tech stack and location.',
    usage: 'A platform for recruiters and companies to find and connect with software developers.',
    performance: 'Fast search and filtering capabilities, leveraging the efficiency of the GitHub API.',
    technologies: ['React', 'GitHub API', 'Axios', 'Tailwind CSS'],
    features: ['Developer Search', 'Profile Viewing', 'Technology Filtering', 'Location-based Search'],
  },
  {
    name: 'SmartWeather',
    image: 'https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "weather app",
    description: 'Real-time weather updates using external APIs with animated icons and responsive charts.',
    usage: 'Provides users with up-to-date weather forecasts for any location worldwide.',
    performance: 'Quickly fetches and displays weather data from external APIs for a smooth user experience.',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'Chart.js', 'CSS3'],
    features: ['Real-time Weather', '5-Day Forecast', 'Animated Icons', 'Interactive Charts'],
  },
  {
    name: 'RealEstately',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NDMyODE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "real estate",
    description: 'Users can browse, filter, and schedule property visits. Admin can manage listings and inquiries.',
    usage: 'A platform for real estate agents to list properties and for buyers to find their new home.',
    performance: 'Advanced filtering and search capabilities provide fast and relevant results from a large database.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Mapbox'],
    features: ['Property Listings', 'Advanced Search', 'Visit Scheduling', 'Admin Dashboard'],
  },
  {
    name: 'Foodify',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "food delivery",
    description: 'Browse restaurants, add to cart, live tracking of orders, and payment system.',
    usage: 'A food delivery application that connects users with local restaurants.',
    performance: 'Real-time order tracking and a seamless payment process provide a great user experience.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
    features: ['Restaurant Browsing', 'Shopping Cart', 'Live Order Tracking', 'Online Payments'],
  },
  {
    name: 'StreamIt',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHN0cmVhbWluZ3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "video streaming",
    description: 'Upload, watch, and manage videos (like YouTube). Includes views, likes, and comments.',
    usage: 'A video streaming platform for content creators to share their work with a wide audience.',
    performance: 'Optimized for high-quality video streaming with minimal buffering.',
    technologies: ['React', 'Node.js', 'AWS S3', 'Cloudflare Stream'],
    features: ['Video Upload', 'Video Streaming', 'Likes & Comments', 'User Channels'],
  },
  {
    name: 'FinTrack',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwdHJhY2tlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "finance tracker",
    description: 'Add expenses/incomes, categorize, and visualize with monthly analytics.',
    usage: 'A personal finance tool to help users track their spending and manage their budget.',
    performance: 'Fast data entry and real-time analytics to give users instant insights into their finances.',
    technologies: ['Vue.js', 'Chart.js', 'Firebase', 'Plaid API'],
    features: ['Expense Tracking', 'Income Logging', 'Categorization', 'Financial Analytics'],
  },
  {
    name: 'ChatSphere',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hhdCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "chat application",
    description: 'Real-time private and group chat with emoji support and notification system using Socket.IO.',
    usage: 'A real-time chat application for teams and communities to communicate effectively.',
    performance: 'Low-latency messaging powered by WebSockets for instant communication.',
    technologies: ['React', 'Socket.IO', 'Node.js', 'Redis'],
    features: ['Private Chat', 'Group Chat', 'Emoji Support', 'Push Notifications'],
  },
  {
    name: 'Diamond ERP',
    image: 'https://images.unsplash.com/photo-1685893417834-1fb3b2a7121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "business dashboard",
    description: 'Custom-built ERP system for managing sales, inventory, HR, and reports — your signature product under Diamond City.',
    usage: 'A comprehensive ERP solution for businesses to manage their core processes from a single dashboard.',
    performance: 'Robust and scalable system designed to handle complex business operations and large datasets.',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    features: ['Sales Management', 'Inventory Control', 'Human Resources', 'Reporting & Analytics'],
  },
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const getProjectBySlug = (slug: string) => {
  return allProjects.find(project => slugify(project.name) === slug);
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20250105/original/pngtree-abstract-technology-background-with-pink-and-blue-waves-lights-picture-image_15713085.jpg')",
      }}
    >
        <main className="container mx-auto py-12 px-4 md:px-6 bg-slate-900/80 backdrop-blur-sm">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/project">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </Button>
        </div>
        <Card className="bg-card/80">
            <CardHeader>
            <CardTitle className="text-4xl font-bold text-primary">{project.name}</CardTitle>
            <Badge variant="secondary" className="w-fit">{project['data-ai-hint']}</Badge>
            </CardHeader>
            <CardContent className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                    <Image
                    src={project.image}
                    data-ai-hint={project['data-ai-hint']}
                    alt={project.name}
                    width={800}
                    height={600}
                    className="w-full rounded-lg object-cover aspect-video"
                    />
                </div>
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-2">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-card/80">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent"><Zap className="h-6 w-6" /> Usage</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{project.usage}</p>
                </CardContent>
            </Card>
             <Card className="bg-card/80">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent"><Cpu className="h-6 w-6" /> Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{project.performance}</p>
                </CardContent>
            </Card>
        </div>
         <Card className="bg-card/80 mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent"><Code className="h-6 w-6" /> Technologies & Features</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                    </div>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-2">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map(feature => (
                            <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>

        </main>
    </div>
  );
}
