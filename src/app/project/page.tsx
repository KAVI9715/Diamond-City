
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const allProjects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1641444473031-75aa19c003a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'A modern portfolio template with project showcase, resume integration, and contact form. Built using HTML, CSS, JS, and optionally React.',
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1536560942313-1530f4653ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsYW5kaW5nJTIwcGFnZXxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'A single-page responsive landing site designed for businesses to showcase their services, pricing, and testimonials.',
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication. Built using React and Firebase/MongoDB backend.',
  },
  {
    name: 'EduBoard LMS',
    image: 'https://images.unsplash.com/photo-1665766918272-46bd786ffe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWFybmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "learning dashboard",
    description: 'Admin, student, and teacher dashboards with course management, video lectures, and progress tracking.',
  },
  {
    name: 'eComKart',
    image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "ecommerce products",
    description: 'A shopping site with cart, product pages, payment gateway, and order tracking.',
  },
  {
    name: 'BlogVault',
    image: 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxibG9nJTIwbGF5b3V0fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "blog layout",
    description: 'Users can post, edit, and comment. Built with a rich text editor and backend (Node.js/Django).',
  },
  {
    name: 'EventMate',
    image: 'https://images.unsplash.com/photo-1641810644628-50826c8914c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxldmVudCUyMGNhbGVuZGFyfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "event calendar",
    description: 'Create/manage events with invite system, ticket booking, and location map integration.',
  },
  {
    name: 'DevFinder',
    image: 'https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGV2ZWxvcGVyJTIwcHJvZmlsZXN8ZW58MHx8fHwxNzU0MzY2NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "developer profiles",
    description: 'Searchable list of developers using GitHub API, with filters for tech stack and location.',
  },
  {
    name: 'SmartWeather',
    image: 'https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "weather app",
    description: 'Real-time weather updates using external APIs with animated icons and responsive charts.',
  },
  {
    name: 'RealEstately',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NDMyODE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "real estate",
    description: 'Users can browse, filter, and schedule property visits. Admin can manage listings and inquiries.',
  },
  {
    name: 'Foodify',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "food delivery",
    description: 'Browse restaurants, add to cart, live tracking of orders, and payment system.',
  },
  {
    name: 'StreamIt',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHN0cmVhbWluZ3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "video streaming",
    description: 'Upload, watch, and manage videos (like YouTube). Includes views, likes, and comments.',
  },
  {
    name: 'FinTrack',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwdHJhY2tlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "finance tracker",
    description: 'Add expenses/incomes, categorize, and visualize with monthly analytics.',
  },
  {
    name: 'ChatSphere',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hhdCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "chat application",
    description: 'Real-time private and group chat with emoji support and notification system using Socket.IO.',
  },
  {
    name: 'Diamond ERP',
    image: 'https://images.unsplash.com/photo-1685893417834-1fb3b2a7121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "business dashboard",
    description: 'Custom-built ERP system for managing sales, inventory, HR, and reports — your signature product under Diamond City.',
  },
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function ProjectPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20250105/original/pngtree-abstract-technology-background-with-pink-and-blue-waves-lights-picture-image_15713085.jpg')",
      }}
    >
      <main className="container mx-auto py-12 px-4 md:px-6 bg-slate-900/80 backdrop-blur-sm">
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
            <Link href={`/project/${slugify(project.name)}`} key={project.name} className="flex">
              <Card className="overflow-hidden flex flex-col w-full hover:shadow-lg transition-shadow duration-300">
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
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
