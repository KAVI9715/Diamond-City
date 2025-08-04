
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MessageSquare, Eye } from 'lucide-react';

const blogPosts = [
  {
    title: 'SEO vs Paid Ads: Where Should You Invest?',
    date: 'August 4, 2025',
    readTime: '2 Min Read',
    author: 'pepytechnologies',
    category: 'SEO',
    image: 'https://placehold.co/800x400.png',
    "data-ai-hint": "digital marketing chart",
    description: 'In today’s digital-first world, two powerful strategies dominate the online marketing landscape—Search Engine Optimization (SEO) and Paid Advertising (PPC). If you’re a business owner or startup wondering where to invest your time and money, you’re not alone. Both strategies offer…',
  },
  {
    title: 'Why Every Business Needs a Digital Marketing Strategy Today',
    date: 'August 2, 2025',
    readTime: '3 Min Read',
    author: 'pepytechnologies',
    category: 'DIGITAL MARKETING',
    image: 'https://placehold.co/800x400.png',
    "data-ai-hint": "business strategy meeting",
    description: 'In today’s digital-first world, your customers are online — researching, comparing, and buying. Whether you’re a local shop or a global enterprise, if you don’t have a proper digital marketing strategy in place, you’re losing valuable leads to your competitors….',
  },
  {
    title: 'Why Your Business Needs a Mobile App Today',
    date: 'August 1, 2025',
    readTime: '3 Min Read',
    author: 'pepytechnologies',
    category: 'Mobile Application',
    image: 'https://placehold.co/800x400.png',
    "data-ai-hint": "mobile app interface",
    description: 'In today’s fast-paced digital world, having just a website or social media presence isn’t enough. Consumers are spending more time on their smartphones than ever before, and mobile apps have become a powerful way for businesses to engage, serve, and…',
  },
  {
    title: 'Why Choosing a Professional Web Design Company in Coimbatore Can Transform Your Business',
    date: 'July 30, 2025',
    readTime: '3 Min Read',
    author: 'pepytechnologies',
    category: 'Web Design',
    image: 'https://placehold.co/800x400.png',
    "data-ai-hint": "web design sketch",
    description: 'In today’s digital-first world, your website is more than just a digital brochure—it’s your brand’s first impression. Whether you’re a startup, small business, or established enterprise, having a visually appealing and user-friendly website is essential. If you’re looking to grow…',
  },
   {
    title: 'E-commerce Website Design Secrets That Convert Visitors into Buyers',
    date: 'July 30, 2025',
    readTime: '4 Min Read',
    author: 'pepytechnologies',
    category: 'E-commerce',
    image: 'https://placehold.co/800x400.png',
    "data-ai-hint": "online shopping concept",
    description: 'In today’s fast-moving digital world, having an e-commerce store is no longer a luxury—it’s a necessity. But simply launching an online store isn’t enough. What truly matters is how your website performs in turning visitors into paying customers. That’s where…',
  },
];

const tags = [
    "AI", "BUSINESS", "Digital Marketing", "E-commerce", "Google Ads", 
    "Graphic Designing", "Logo Design", "Mobile Application", "Paid Ads"
];

const recentPosts = [
  { title: 'SEO vs Paid Ads: Where Should You Invest?', date: 'August 4, 2025', href: '#' },
  { title: 'Why Every Business Needs a Digital Marketing Strategy Today', date: 'August 2, 2025', href: '#' },
  { title: 'Why Your Business Needs a Mobile App Today', date: 'August 1, 2025', href: '#' },
  { title: 'Why Choosing a Professional Web Design Company in Coimbatore Can Transform Your Business', date: 'July 30, 2025', href: '#' },
];

export default function BlogsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={post['data-ai-hint']}
                />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary">{post.category.toUpperCase()}</Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    <Link href="#" className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex justify-between items-center">
                     <Button asChild variant="link" className="p-0 h-auto">
                        <Link href="#">Continue Reading</Link>
                     </Button>
                     <div className="flex items-center text-sm text-muted-foreground">
                       <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person avatar"/>
                        <AvatarFallback>P</AvatarFallback>
                       </Avatar>
                       <span>{post.author}</span>
                     </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
              <Button variant="outline" disabled>Previous</Button>
              <span className="text-sm text-muted-foreground">Page 1 of 15</span>
              <Button variant="outline">Next</Button>
            </div>
          </main>
          
          {/* Sidebar */}
          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <Link href={post.href} className="hover:text-accent font-semibold">{post.title}</Link>
                      <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tag Cloud</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>About me</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="company logo"/>
                        <AvatarFallback>PT</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">pepytechnologies</h3>
                    <p className="text-sm text-muted-foreground">Author</p>
                </CardContent>
            </Card>

          </aside>
        </div>
      </div>
    </div>
  );
}
