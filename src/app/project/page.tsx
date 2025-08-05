
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const allProjects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1550622824-c11e494a4b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cG9ydGZvbGlvcHJvJTIwdGVtcGxhdGUlMjB3aGl0aCUyMHByb2plY3QlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTQzNjYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'A modern portfolio template with project showcase, resume integration, and contact form. Built using HTML, CSS, JS, and optionally React.',
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxCSVpMQVVOQ0glMjAlMjBCVVNJTkVTUyUyMFRFU1RJTU9OSUFMU3xlbnwwfHx8fDE3NTQzNjYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'A single-page responsive landing site designed for businesses to showcase their services, pricing, and testimonials.',
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1694365899936-850bc6c2b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxUQVNLTUFTVCUyMEFQUHxlbnwwfHx8fDE3NTQzNjY0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication. Built using React and Firebase/MongoDB backend.',
  },
  {
    name: 'EduBoard LMS',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "learning dashboard",
    description: 'Admin, student, and teacher dashboards with course management, video lectures, and progress tracking.',
  },
  {
    name: 'eComKart',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "ecommerce products",
    description: 'A shopping site with cart, product pages, payment gateway, and order tracking.',
  },
  {
    name: 'BlogVault',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "blog layout",
    description: 'Users can post, edit, and comment. Built with a rich text editor and backend (Node.js/Django).',
  },
  {
    name: 'EventMate',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "event calendar",
    description: 'Create/manage events with invite system, ticket booking, and location map integration.',
  },
  {
    name: 'DevFinder',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "developer profiles",
    description: 'Searchable list of developers using GitHub API, with filters for tech stack and location.',
  },
  {
    name: 'SmartWeather',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "weather app",
    description: 'Real-time weather updates using external APIs with animated icons and responsive charts.',
  },
  {
    name: 'RealEstately',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "real estate",
    description: 'Users can browse, filter, and schedule property visits. Admin can manage listings and inquiries.',
  },
  {
    name: 'Foodify',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "food delivery",
    description: 'Browse restaurants, add to cart, live tracking of orders, and payment system.',
  },
  {
    name: 'StreamIt',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "video streaming",
    description: 'Upload, watch, and manage videos (like YouTube). Includes views, likes, and comments.',
  },
  {
    name: 'FinTrack',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "finance tracker",
    description: 'Add expenses/incomes, categorize, and visualize with monthly analytics.',
  },
  {
    name: 'ChatSphere',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "chat application",
    description: 'Real-time private and group chat with emoji support and notification system using Socket.IO.',
  },
  {
    name: 'Diamond ERP',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "business dashboard",
    description: 'Custom-built ERP system for managing sales, inventory, HR, and reports — your signature product under Diamond City.',
  },
];

export default function ProjectPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our portfolio of groundbreaking projects and success stories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <Card key={project.name} className="overflow-hidden flex flex-col">
            <Image
              src={project.image}
              data-ai-hint={project['data-ai-hint']}
              alt={project.name}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-muted-foreground flex-grow">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
