
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const allProjects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1641444473031-75aa19c003a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'PortfolioPro is a sleek and modern portfolio template designed for creative professionals. It provides a stunning showcase for your projects, an integrated resume section to highlight your skills and experience, and a seamless contact form for potential clients or employers to get in touch. Built with performance in mind using technologies like React and Next.js, it\'s fully responsive and customizable to fit your personal brand.',
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1536560942313-1530f4653ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsYW5kaW5nJTIwcGFnZXxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'BizLaunch offers a clean, professional, and high-converting landing page for businesses. It\'s designed to capture visitor attention and drive action, whether that\'s signing up for a newsletter, requesting a quote, or making a purchase. The single-page responsive layout ensures a seamless experience on any device, helping you make a great first impression.',
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'TaskMaster is a powerful and intuitive task management application. With full CRUD (Create, Read, Update, Delete) functionality and secure user authentication, it helps you stay organized and productive. Whether you\'re managing personal to-do lists or team projects, TaskMaster provides the tools you need to track progress and meet deadlines.',
  },
  {
    name: 'EduBoard LMS',
    image: 'https://images.unsplash.com/photo-1665766918272-46bd786ffe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWFybmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "learning dashboard",
    description: 'EduBoard is a comprehensive Learning Management System (LMS) designed for the modern educational landscape. It features separate dashboards for admins, students, and teachers, facilitating seamless course management, delivery of video lectures, and effective progress tracking. EduBoard is the perfect solution for creating and managing online learning environments.',
  },
  {
    name: 'eComKart',
    image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "ecommerce products",
    description: 'eComKart is a feature-rich e-commerce platform that provides everything you need to sell online. From a beautiful product catalog and intuitive shopping cart to secure payment gateway integration and order tracking, eComKart delivers a smooth and reliable shopping experience for your customers, helping you grow your online business.',
  },
  {
    name: 'BlogVault',
    image: 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxibG9nJTIwbGF5b3V0fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "blog layout",
    description: 'BlogVault is a powerful blogging platform that empowers content creators. It features a rich text editor for crafting beautiful posts, robust user management for authors and editors, and an engaging comment system to foster community interaction. With a secure backend built on Node.js or Django, BlogVault is both scalable and reliable.',
  },
  {
    name: 'EventMate',
    image: 'https://images.unsplash.com/photo-1641810644628-50826c8914c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxldmVudCUyMGNhbGVuZGFyfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "event calendar",
    description: 'EventMate is the ultimate solution for event management. It allows organizers to create and manage events effortlessly, send out invitations, handle ticket bookings, and provide attendees with location maps. Whether it\'s a small meetup or a large conference, EventMate streamlines the entire process from planning to execution.',
  },
  {
    name: 'DevFinder',
    image: 'https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGV2ZWxvcGVyJTIwcHJvZmlsZXN8ZW58MHx8fHwxNzU0MzY2NjAwfDA&ixlib-rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "developer profiles",
    description: 'DevFinder is a platform designed to connect companies and recruiters with talented software developers. Using the GitHub API, it provides a searchable and filterable list of developers, allowing you to find the perfect candidate based on their tech stack, location, and experience. DevFinder makes technical recruitment simple and efficient.',
  },
  {
    name: 'SmartWeather',
    image: 'https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "weather app",
    description: 'SmartWeather is a beautifully designed weather application that provides real-time weather updates from around the globe. It uses external APIs to deliver accurate forecasts, which are presented with animated icons and responsive charts. With its user-friendly interface, checking the weather has never been more enjoyable.',
  },
  {
    name: 'RealEstately',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NDMyODE2Nnww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "real estate",
    description: 'RealEstately is a comprehensive real estate platform for agents, buyers, and sellers. Users can effortlessly browse property listings with advanced filters, view high-quality image galleries, and schedule property visits. An intuitive admin dashboard allows agents to manage listings, track inquiries, and connect with potential clients.',
  },
  {
    name: 'Foodify',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "food delivery",
    description: 'Foodify is a seamless food delivery application connecting hungry users with their favorite local restaurants. It offers an easy-to-use interface for browsing menus, a simple add-to-cart function, secure payment processing, and live order tracking. Foodify brings delicious meals right to your doorstep, quickly and reliably.',
  },
  {
    name: 'StreamIt',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHN0cmVhbWluZ3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "video streaming",
    description: 'StreamIt is a YouTube-like video streaming platform for content creators and viewers. It supports video uploading, high-quality streaming, and features for user engagement like view counts, likes, and comments. With a scalable architecture, StreamIt is built to handle a growing library of content and a large user base.',
  },
  {
    name: 'FinTrack',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwdHJhY2tlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "finance tracker",
    description: 'FinTrack is a personal finance application that helps users take control of their financial health. It allows for easy tracking of expenses and incomes, categorization of transactions, and provides insightful monthly analytics through clear visualizations. FinTrack makes budgeting and financial planning straightforward and effective.',
  },
  {
    name: 'ChatSphere',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hhdCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "chat application",
    description: 'ChatSphere is a dynamic real-time chat application for both private and group conversations. Built with Socket.IO, it ensures low-latency messaging for instant communication. The app includes modern features like emoji support and a robust notification system, making it perfect for teams and communities.',
  },
  {
    name: 'Diamond ERP',
    image: 'https://images.unsplash.com/photo-1685893417834-1fb3b2a7121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib.rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "business dashboard",
    description: 'Diamond ERP is our signature product, a custom-built Enterprise Resource Planning system designed to streamline your business operations. It integrates sales, inventory, HR, and reporting into a single, powerful dashboard. Diamond ERP is scalable, secure, and tailored to meet the unique challenges of your business, providing you with the insights you need to succeed.',
  },
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function ProjectPage() {
  return (
    <div
      className="bg-background text-foreground"
    >
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-foreground">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our portfolio of groundbreaking projects and success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Link href={`/project/${slugify(project.name)}`} key={project.name} className="flex">
              <Card className="overflow-hidden flex flex-col w-full hover:shadow-lg transition-shadow duration-300 bg-card">
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
