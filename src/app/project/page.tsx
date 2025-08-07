
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
    image: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlcnxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'TaskMaster is a powerful and intuitive task management application. With full CRUD (Create, Read, Update, Delete) functionality and secure user authentication, it helps you stay organized and productive. Whether you\'re managing personal to-do lists or team projects, TaskMaster provides the tools you need to track progress and meet deadlines.',
  },
  {
    name: 'EduBoard LMS',
    image: 'https://images.unsplash.com/photo-1665766918272-46bd786ffe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWFybmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "learning dashboard",
    description: 'EduBoard is a comprehensive Learning Management System (LMS) designed for the modern educational landscape. It features separate dashboards for admins, students, and teachers, facilitating seamless course management, delivery of video lectures, and effective progress tracking. EduBoard is the perfect solution for creating and managing online learning environments.',
  },
  {
    name: 'eComKart',
    image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "ecommerce products",
    description: 'eComKart is a feature-rich e-commerce platform that provides everything you need to sell online. From a beautiful product catalog and intuitive shopping cart to secure payment gateway integration and order tracking, eComKart delivers a smooth and reliable shopping experience for your customers, helping you grow your online business.',
  },
  {
    name: 'BlogVault',
    image: 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxibG9nJTIwbGF5b3V0fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "blog layout",
    description: 'BlogVault is a powerful blogging platform that empowers content creators. It features a rich text editor for crafting beautiful posts, robust user management for authors and editors, and an engaging comment system to foster community interaction. With a secure backend built on Node.js or Django, BlogVault is both scalable and reliable.',
  },
  {
    name: 'EventMate',
    image: 'https://images.unsplash.com/photo-1641810644628-50826c8914c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxldmVudCUyMGNhbGVuZGFyfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "weather app",
    description: 'SmartWeather is a beautifully designed weather application that provides real-time weather updates from around the globe. It uses external APIs to deliver accurate forecasts, which are presented with animated icons and responsive charts. With its user-friendly interface, checking the weather has never been more enjoyable.',
  },
  {
    name: 'RealEstately',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NDMyODE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "real estate",
    description: 'RealEstately is a comprehensive real estate platform for agents, buyers, and sellers. Users can effortlessly browse property listings with advanced filters, view high-quality image galleries, and schedule property visits. An intuitive admin dashboard allows agents to manage listings, track inquiries, and connect with potential clients.',
  },
  {
    name: 'Foodify',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fHx8MTc1NDM2NjYwMHww&ixlib-rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "food delivery",
    description: 'Foodify is a seamless food delivery application connecting hungry users with their favorite local restaurants. It offers an easy-to-use interface for browsing menus, a simple add-to-cart function, secure payment processing, and live order tracking. Foodify brings delicious meals right to your doorstep, quickly and reliably.',
  },
  {
    name: 'StreamIt',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHN0cmVhbWluZ3xlbnwwfHx8fDE3NTQzNjY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('data:image/jpeg;base64,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') no-repeat center center / cover",
      }}
    >
      <main className="container mx-auto py-12 px-4 md:px-6 bg-white/80 backdrop-blur-sm">
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
