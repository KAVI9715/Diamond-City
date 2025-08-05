
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const allServices = [
    {
      name: 'Business Website Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'business website',
      description: 'Custom-designed websites for small to large businesses. We create professional websites for companies to showcase their brand, services, and contact info — ideal for growing your digital presence.',
      clients: ['Companies', 'Agencies', 'Startups'],
      features: ['About, services, testimonials, contact forms', 'Contact forms', 'Service showcase', 'Google Maps integration', 'Testimonials section'],
    },
    {
      name: 'E-Commerce Website',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDB8fHx8MTc1NDM2ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'ecommerce website',
      description: 'Online store design and development. Sell your products online with a custom-designed e-commerce store that includes shopping cart, payment integration, and inventory control.',
      clients: ['Retail', 'Clothing', 'Groceries', 'Niche stores'],
      features: ['Product pages, cart, payment gateway, invoice system', 'Product catalog & filters', 'Cart & checkout', 'Payment gateway integration', 'Order tracking', 'Discount & coupon system'],
    },
    {
      name: 'Personal Portfolio Website',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'personal portfolio',
      description: 'Custom portfolio for professionals (developers, designers, artists). Build a personal online identity to display your skills, projects, and resume — perfect for freelancers and job seekers.',
      clients: ['Freelancers', 'Job seekers', 'Creators'],
      features: ['Resume, project showcase, contact, social links', 'Project gallery', 'Resume download', 'Skills chart', 'Contact form', 'Social media links'],
    },
    {
      name: 'Educational / LMS Platform',
      image: 'https://images.unsplash.com/photo-1614793319738-bde496bbe85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb25hbCUyMCUyRiUyMGxtcyUyMHBsYXRmb3JtfGVufDB8fHx8MTc1NDM2ODU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'education platform',
      description: 'Learning management system for online courses. Launch your own online learning platform with course uploads, video content, quizzes, and user progress tracking.',
      clients: ['Tutors', 'Schools', 'E-learning startups'],
      features: ['Course uploads, videos, quizzes, certificates', 'Course upload & videos', 'Quiz & test module', 'Certificate generator', 'Progress tracking', 'Role-based dashboards (Admin/Teacher/Student)'],
    },
    {
      name: 'Real Estate Website',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'real estate',
      description: 'Property listing site with advanced filters. List, manage, and promote properties with map integration, inquiry forms, and search filters for location, price, and type.',
      clients: ['Agents', 'Agencies', 'Developers'],
      features: ['Map view, inquiry forms, scheduling visits', 'Property listings with filters', 'Map location view', 'Inquiry & visit booking form', 'Image gallery', 'Admin control panel'],
    },
    {
      name: 'Blog or News Platform',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibG9nJTIwbmV3cyUyMHBsYXRmb3JtfGVufDB8fHx8MTc1NDM2ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'blog platform',
      description: 'SEO-optimized blog for personal or public use. Publish content with a clean, SEO-optimized layout. Great for bloggers, writers, or media agencies.',
      clients: ['Bloggers', 'Media companies'],
      features: ['Categories, comments, likes, tags', 'Category-based post layout', 'Search & tag system', 'Author profiles', 'Comment section', 'SEO-friendly URLs'],
    },
    {
      name: 'Invoice & Billing System',
      image: 'https://images.unsplash.com/photo-1579621970795-87f54f597987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwYmlsbGluZyUyMHN5c3RlbXxlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'billing system',
      description: 'Web-based invoicing for businesses. Generate professional invoices online with download, email, and auto-numbering features — perfect for freelancers and small businesses.',
      clients: ['Freelancers', 'SMEs'],
      features: ['Generate, download, email invoices', 'Invoice generation (PDF/Email)', 'Tax & discount options', 'Client database', 'Payment status tracker', 'Export to Excel/CSV'],
    },
    {
      name: 'Event Management System',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'event management',
      description: 'Event creation and booking platform. Create and manage public or private events with RSVP, ticket booking, and event scheduling features.',
      clients: ['Event planners', 'Companies', 'Public groups'],
      features: ['RSVP, ticket booking, calendar view', 'Event creation panel', 'RSVP or ticket booking', 'Event calendar view', 'Attendee list management', 'Event countdown timer'],
    },
    {
      name: 'Live Chat & Support System',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2hhdCUyMHN1cHBvcnQlMjBzeXN0ZW18ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'live chat',
      description: 'Real-time chat plugin for websites. Enable real-time messaging on your website for customer queries, support, or sales — integrated with smart responses.',
      clients: ['Customer support', 'E-commerce sites'],
      features: ['Live messaging, auto-responses, offline forms', 'Real-time chat window', 'Auto-reply for offline', 'Agent dashboard', 'Notification alerts', 'Chat history tracking'],
    },
    {
      name: 'Admin Dashboard / Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhZG1pbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'admin dashboard',
      description: 'Data dashboards with custom metrics. Get a powerful admin panel to manage your business data, user activity, reports, and sales insights — all in one place.',
      clients: ['Businesses needing internal analytics'],
      features: ['Charts, user reports, sales insights', 'User stats & reports', 'Sales/revenue analytics', 'Role-based access', 'Real-time charts', 'Dark/light theme'],
    },
    {
      name: 'User Authentication System',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXV0aGVudGljYXRpb24lMjBzeXN0ZW18ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'authentication system',
      description: 'Secure login/register with email or OTP. Secure user login and signup system with email verification, password reset, and role-based access controls.',
      clients: ['Any web app requiring user access'],
      features: ['JWT token, forgot password, role-based access', 'Secure login/signup', 'Email verification', 'Password reset', 'Social login (Google/Facebook)', 'User role management'],
    },
    {
      name: 'Responsive Mobile Website',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwbW9iaWxlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3NTQzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'responsive design',
      description: 'Mobile-first versions of existing or new sites. Your website — optimized for every screen. We ensure fast, smooth, mobile-friendly designs for better user experience.',
      clients: ['Businesses wanting mobile optimization'],
      features: ['Fast load, touch-friendly design', 'Mobile-first layout', 'Fast page load', 'Swipe-friendly design', 'Optimized menus & buttons', 'Cross-browser compatibility'],
    },
    {
      name: 'Multi-Language Website',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdWx0aS1sYW5ndWFnZSUyMHdlYnNpdGV8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'language globe',
      description: 'Translate site content into multiple languages. Expand your reach with websites that support multiple languages and regional formats, including RTL (right-to-left) support.',
      clients: ['International businesses', 'Tourism', 'NGOs'],
      features: ['Language switcher, RTL support', 'Language switcher', 'Auto-translate (if needed)', 'RTL support (e.g., Arabic)', 'Language-specific content', 'Locale formatting (currency/date)'],
    },
    {
      name: 'Custom Web Applications',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3ZWIlMjBhcHBsaWNhdGlvbnN8ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'web application',
      description: 'Advanced solutions like ERPs, CRMs, booking engines. Tailor-made web apps built from scratch to suit your business needs — from ERP tools to booking platforms.',
      clients: ['Enterprises', 'Startups'],
      features: ['Built from scratch, scalable structure', 'Tailor-made UI/UX', 'Custom backend logic', 'Secure database integration', 'Scalable architecture', 'API integrations'],
    },
    {
      name: 'Website Speed & SEO Optimization',
      image: 'https://images.unsplash.com/photo-1599339942296-b6cf8824a7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc3BlZWQlMjBzZW8lMjBvcHRpbWl6YXRpb258ZW58MHx8fHwxNzU0MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'seo optimization',
      description: 'Improve load time and search rankings. Improve your site’s speed, search visibility, and Google ranking with performance and SEO enhancements.',
      clients: ['All website owners'],
      features: ['PageSpeed improvement, meta tags, sitemap, clean URLs', 'Image & script compression', 'Meta tags & sitemap', 'PageSpeed improvements', 'Mobile SEO setup', 'Clean and structured code'],
    },
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const getServiceBySlug = (slug: string) => {
  return allServices.find(service => slugify(service.name) === slug);
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
       <div className="mb-8">
        <Button asChild variant="outline">
            <Link href="/service">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
            </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-primary">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={service.image}
              data-ai-hint={service['data-ai-hint']}
              alt={service.name}
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Ideal For</h3>
              <div className="flex flex-wrap gap-2">
                {service.clients.map((client) => (
                    <Badge key={client} variant="secondary">{client}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

    