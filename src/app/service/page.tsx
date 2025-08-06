
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const allServices = [
  {
    name: 'Business Website Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'business website',
    description: 'Custom-designed websites for small to large businesses. We create professional websites for companies to showcase their brand, services, and contact info — ideal for growing your digital presence.',
  },
  {
    name: 'E-Commerce Website',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDB8fHx8MTc1NDM2ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'ecommerce website',
    description: 'Online store design and development. Sell your products online with a custom-designed e-commerce store that includes shopping cart, payment integration, and inventory control.',
  },
  {
    name: 'Personal Portfolio Website',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'personal portfolio',
    description: 'Custom portfolio for professionals (developers, designers, artists). Build a personal online identity to display your skills, projects, and resume — perfect for freelancers and job seekers.',
  },
  {
    name: 'Educational / LMS Platform',
    image: 'https://images.unsplash.com/photo-1614793319738-bde496bbe85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb25hbCUyMCUyRiUyMGxtcyUyMHBsYXRmb3JtfGVufDB8fHx8MTc1NDM2ODU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'education platform',
    description: 'Learning management system for online courses. Launch your own online learning platform with course uploads, video content, quizzes, and user progress tracking.',
  },
  {
    name: 'Real Estate Website',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'real estate',
    description: 'Property listing site with advanced filters. List, manage, and promote properties with map integration, inquiry forms, and search filters for location, price, and type.',
  },
  {
    name: 'Blog or News Platform',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibG9nJTIwbmV3cyUyMHBsYXRmb3JtfGVufDB8fHx8MTc1NDM2ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'blog platform',
    description: 'SEO-optimized blog for personal or public use. Publish content with a clean, SEO-optimized layout. Great for bloggers, writers, or media agencies.',
  },
  {
    name: 'Invoice & Billing System',
    image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8aW52b2ljZSUyMHxlbnwwfHx8fDE3NTQzNjg3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'billing system',
    description: 'Web-based invoicing for businesses. Generate professional invoices online with download, email, and auto-numbering features — perfect for freelancers and small businesses.',
  },
  {
    name: 'Event Management System',
    image: 'https://images.unsplash.com/photo-1512573904052-7303e38d683a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8ZXZlbnQlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fHx8MTc1NDM2ODY3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'event management',
    description: 'Event creation and booking platform. Create and manage public or private events with RSVP, ticket booking, and event scheduling features.',
  },
  {
    name: 'Live Chat & Support System',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2hhdCUyMHN1cHBvcnQlMjBzeXN0ZW18ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'live chat',
    description: 'Real-time chat plugin for websites. Enable real-time messaging on your website for customer queries, support, or sales — integrated with smart responses.',
  },
  {
    name: 'Admin Dashboard / Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhZG1pbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'admin dashboard',
    description: 'Data dashboards with custom metrics. Get a powerful admin panel to manage your business data, user activity, reports, and sales insights — all in one place.',
  },
  {
    name: 'User Authentication System',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXV0aGVudGljYXRpb24lMjBzeXN0ZW18ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'authentication system',
    description: 'Secure login/register with email or OTP. Secure user login and signup system with email verification, password reset, and role-based access controls.',
  },
  {
    name: 'Responsive Mobile Website',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwbW9iaWxlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'responsive design',
    description: 'Mobile-first versions of existing or new sites. Your website — optimized for every screen. We ensure fast, smooth, mobile-friendly designs for better user experience.',
  },
  {
    name: 'Mobile Optimization',
    image: 'https://images.unsplash.com/photo-1654764450273-59862da1a259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bW9iaWxlJTIwb3B0aW1pemF0aW9ufGVufDB8fHx8MTc1NDQ3NTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'mobile optimization',
    description: 'Enhance your existing site for mobile users with improved speed, navigation, and readability on all devices.',
  },
  {
    name: 'Multi-Language Website',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdWx0aS1sYW5ndWFnZSUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlibrb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'language globe',
    description: 'Translate site content into multiple languages. Expand your reach with websites that support multiple languages and regional formats, including RTL (right-to-left) support.',
  },
  {
    name: 'Custom Web Applications',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3ZWIlMjBhcHBsaWNhdGlvbnN8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'web application',
    description: 'Advanced solutions like ERPs, CRMs, booking engines. Tailor-made web apps built from scratch to suit your business needs — from ERP tools to booking platforms.',
  },
  {
    name: 'Website Speed & SEO Optimization',
    image: 'https://images.unsplash.com/photo-1593438002985-ce805be04da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc3BlZWQlMjB8ZW58MHx8fHwxNzU0MzY4OTU4fDA&ixlib-rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'seo optimization',
    description: 'Improve load time and search rankings. Improve your site’s speed, search visibility, and Google ranking with performance and SEO enhancements.',
  },
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function ServicePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-beautiful-technology-website-business-poster-background-template-image_148436.jpg')",
      }}
    >
      <main className="container mx-auto py-12 px-4 md:px-6 bg-background/80 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Services We Offer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the wide range of expert services we provide to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <Link href={`/service/${slugify(service.name)}`} key={service.name} className="flex">
              <Card className="overflow-hidden flex flex-col w-full hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={service.image}
                  data-ai-hint={service['data-ai-hint']}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
