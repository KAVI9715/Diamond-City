
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
    description: 'PortfolioPro is a sleek and modern portfolio template designed for creative professionals. It provides a stunning showcase for your projects, an integrated resume section to highlight your skills and experience, and a seamless contact form for potential clients or employers to get in touch. Built with performance in mind using technologies like React and Next.js, it\'s fully responsive and customizable to fit your personal brand.',
    usage: 'Ideal for freelancers, designers, developers, and artists to showcase their work and attract clients.',
    performance: 'Optimized for fast loading with clean, efficient code. Fully responsive for all devices.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    features: ['Project Showcase', 'Resume Integration', 'Contact Form', 'Social Media Links'],
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1536560942313-1530f4653ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsYW5kaW5nJTIwcGFnZXxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'BizLaunch offers a clean, professional, and high-converting landing page for businesses. It\'s designed to capture visitor attention and drive action, whether that\'s signing up for a newsletter, requesting a quote, or making a purchase. The single-page responsive layout ensures a seamless experience on any device, helping you make a great first impression.',
    usage: 'Perfect for startups and small businesses to quickly establish an online presence and generate leads.',
    performance: 'Built for high conversion rates with a focus on speed and mobile-first design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: ['Service Showcase', 'Pricing Table', 'Testimonials Section', 'Lead-gen Form'],
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'TaskMaster is a powerful and intuitive task management application. With full CRUD (Create, Read, Update, Delete) functionality and secure user authentication, it helps you stay organized and productive. Whether you\'re managing personal to-do lists or team projects, TaskMaster provides the tools you need to track progress and meet deadlines.',
    usage: 'Helps individuals and teams organize tasks, set deadlines, and track progress efficiently.',
    performance: 'Real-time database synchronization ensures tasks are always up-to-date across all user devices.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    features: ['CRUD Operations', 'User Authentication', 'Task Prioritization', 'Deadline Tracking'],
  },
  {
    name: 'EduBoard LMS',
    image: 'https://images.unsplash.com/photo-1665766918272-46bd786ffe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWFybmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "learning dashboard",
    description: 'EduBoard is a comprehensive Learning Management System (LMS) designed for the modern educational landscape. It features separate dashboards for admins, students, and teachers, facilitating seamless course management, delivery of video lectures, and effective progress tracking. EduBoard is the perfect solution for creating and managing online learning environments.',
    usage: 'An all-in-one solution for educational institutions and online tutors to deliver and manage courses.',
    performance: 'Scalable architecture to handle a large number of concurrent users and video streaming.',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'AWS S3'],
    features: ['Course Management', 'Video Lectures', 'Quizzes & Assignments', 'Progress Tracking'],
  },
  {
    name: 'eComKart',
    image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "ecommerce products",
    description: 'eComKart is a feature-rich e-commerce platform that provides everything you need to sell online. From a beautiful product catalog and intuitive shopping cart to secure payment gateway integration and order tracking, eComKart delivers a smooth and reliable shopping experience for your customers, helping you grow your online business.',
    usage: 'A complete e-commerce solution for businesses to sell products online and manage inventory.',
    performance: 'Fast product loading and a streamlined checkout process to minimize cart abandonment.',
    technologies: ['Next.js', 'Stripe', 'GraphQL', 'Apollo Client', 'Prisma'],
    features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking'],
  },
  {
    name: 'BlogVault',
    image: 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxibG9nJTIwbGF5b3V0fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "blog layout",
    description: 'BlogVault is a powerful blogging platform that empowers content creators. It features a rich text editor for crafting beautiful posts, robust user management for authors and editors, and an engaging comment system to foster community interaction. With a secure backend built on Node.js or Django, BlogVault is both scalable and reliable.',
    usage: 'A platform for bloggers and content creators to publish articles and engage with their audience.',
    performance: 'SEO-optimized structure and fast page loads to rank higher in search engine results.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Nginx'],
    features: ['Rich Text Editor', 'Post Management', 'Comment System', 'User Profiles'],
  },
  {
    name: 'EventMate',
    image: 'https://images.unsplash.com/photo-1641810644628-50826c8914c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxldmVudCUyMGNhbGVuZGFyfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "event calendar",
    description: 'EventMate is the ultimate solution for event management. It allows organizers to create and manage events effortlessly, send out invitations, handle ticket bookings, and provide attendees with location maps. Whether it\'s a small meetup or a large conference, EventMate streamlines the entire process from planning to execution.',
    usage: 'A tool for event organizers to manage events, sell tickets, and interact with attendees.',
    performance: 'Handles high traffic during ticket sales and provides real-time updates on event status.',
    technologies: ['Vue.js', 'Firebase', 'Google Maps API', 'Stripe'],
    features: ['Event Management', 'Ticket Booking', 'Invitation System', 'Map Integration'],
  },
  {
    name: 'DevFinder',
    image: 'https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGV2ZWxvcGVyJTIwcHJvZmlsZXN8ZW58MHx8fHwxNzU0MzY2NjAwfDA&ixlib-rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "developer profiles",
    description: 'DevFinder is a platform designed to connect companies and recruiters with talented software developers. Using the GitHub API, it provides a searchable and filterable list of developers, allowing you to find the perfect candidate based on their tech stack, location, and experience. DevFinder makes technical recruitment simple and efficient.',
    usage: 'A platform for recruiters and companies to find and connect with software developers.',
    performance: 'Fast search and filtering capabilities, leveraging the efficiency of the GitHub API.',
    technologies: ['React', 'GitHub API', 'Axios', 'Tailwind CSS'],
    features: ['Developer Search', 'Profile Viewing', 'Technology Filtering', 'Location-based Search'],
  },
  {
    name: 'SmartWeather',
    image: 'https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "weather app",
    description: 'SmartWeather is a beautifully designed weather application that provides real-time weather updates from around the globe. It uses external APIs to deliver accurate forecasts, which are presented with animated icons and responsive charts. With its user-friendly interface, checking the weather has never been more enjoyable.',
    usage: 'Provides users with up-to-date weather forecasts for any location worldwide.',
    performance: 'Quickly fetches and displays weather data from external APIs for a smooth user experience.',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'Chart.js', 'CSS3'],
    features: ['Real-time Weather', '5-Day Forecast', 'Animated Icons', 'Interactive Charts'],
  },
  {
    name: 'RealEstately',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NDMyODE2Nnww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "real estate",
    description: 'RealEstately is a comprehensive real estate platform for agents, buyers, and sellers. Users can effortlessly browse property listings with advanced filters, view high-quality image galleries, and schedule property visits. An intuitive admin dashboard allows agents to manage listings, track inquiries, and connect with potential clients.',
    usage: 'A platform for real estate agents to list properties and for buyers to find their new home.',
    performance: 'Advanced filtering and search capabilities provide fast and relevant results from a large database.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Mapbox'],
    features: ['Property Listings', 'Advanced Search', 'Visit Scheduling', 'Admin Dashboard'],
  },
  {
    name: 'Foodify',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "food delivery",
    description: 'Foodify is a seamless food delivery application connecting hungry users with their favorite local restaurants. It offers an easy-to-use interface for browsing menus, a simple add-to-cart function, secure payment processing, and live order tracking. Foodify brings delicious meals right to your doorstep, quickly and reliably.',
    usage: 'A food delivery application that connects users with local restaurants.',
    performance: 'Real-time order tracking and a seamless payment process provide a great user experience.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
    features: ['Restaurant Browsing', 'Shopping Cart', 'Live Order Tracking', 'Online Payments'],
  },
  {
    name: 'StreamIt',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHN0cmVhbWluZ3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "video streaming",
    description: 'StreamIt is a YouTube-like video streaming platform for content creators and viewers. It supports video uploading, high-quality streaming, and features for user engagement like view counts, likes, and comments. With a scalable architecture, StreamIt is built to handle a growing library of content and a large user base.',
    usage: 'A video streaming platform for content creators to share their work with a wide audience.',
    performance: 'Optimized for high-quality video streaming with minimal buffering.',
    technologies: ['React', 'Node.js', 'AWS S3', 'Cloudflare Stream'],
    features: ['Video Upload', 'Video Streaming', 'Likes & Comments', 'User Channels'],
  },
  {
    name: 'FinTrack',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwdHJhY2tlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "finance tracker",
    description: 'FinTrack is a personal finance application that helps users take control of their financial health. It allows for easy tracking of expenses and incomes, categorization of transactions, and provides insightful monthly analytics through clear visualizations. FinTrack makes budgeting and financial planning straightforward and effective.',
    usage: 'A personal finance tool to help users track their spending and manage their budget.',
    performance: 'Fast data entry and real-time analytics to give users instant insights into their finances.',
    technologies: ['Vue.js', 'Chart.js', 'Firebase', 'Plaid API'],
    features: ['Expense Tracking', 'Income Logging', 'Categorization', 'Financial Analytics'],
  },
  {
    name: 'ChatSphere',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hhdCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "chat application",
    description: 'ChatSphere is a dynamic real-time chat application for both private and group conversations. Built with Socket.IO, it ensures low-latency messaging for instant communication. The app includes modern features like emoji support and a robust notification system, making it perfect for teams and communities.',
    usage: 'A real-time chat application for teams and communities to communicate effectively.',
    performance: 'Low-latency messaging powered by WebSockets for instant communication.',
    technologies: ['React', 'Socket.IO', 'Node.js', 'Redis'],
    features: ['Private Chat', 'Group Chat', 'Emoji Support', 'Push Notifications'],
  },
  {
    name: 'Diamond ERP',
    image: 'https://images.unsplash.com/photo-1685893417834-1fb3b2a7121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "business dashboard",
    description: 'Diamond ERP is our signature product, a custom-built Enterprise Resource Planning system designed to streamline your business operations. It integrates sales, inventory, HR, and reporting into a single, powerful dashboard. Diamond ERP is scalable, secure, and tailored to meet the unique challenges of your business, providing you with the insights you need to succeed.',
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
      className="bg-background text-foreground"
    >
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/project">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </Button>
        </div>
        <Card className="bg-card">
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
                        <h3 className="text-2xl font-bold text-accent-foreground mb-2">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent-foreground"><Zap className="h-6 w-6" /> Usage</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{project.usage}</p>
                </CardContent>
            </Card>
             <Card className="bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent-foreground"><Cpu className="h-6 w-6" /> Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{project.performance}</p>
                </CardContent>
            </Card>
        </div>
         <Card className="bg-card mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent-foreground"><Code className="h-6 w-6" /> Technologies & Features</CardTitle>
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
