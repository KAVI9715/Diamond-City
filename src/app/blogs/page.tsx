
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'How Diamond City Was Built: Our Startup Journey',
    description: 'A story-driven blog about how you started, early challenges, key decisions, and how your company name (Diamond City) was chosen.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwam91cm5leXxlbnwwfHx8fDE3NTQzNzAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'startup journey',
    slug: 'how-diamond-city-was-built-our-startup-journey'
  },
  {
    title: 'Behind the Code: A Day in the Life at Diamond City',
    description: 'Show how your team works daily — from planning to coding to client delivery. Include real photos or screenshots of tools you use.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXklMjBpbiUyMHRoZSUyMGxpZmUlMjBhdCUyMGElMjBjb21wYW55fGVufDB8fHx8MTc1NDM3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'team working',
    slug: 'behind-the-code-a-day-in-the-life-at-diamond-city'
  },
  {
    title: 'What Makes Diamond City Different From Other Web Agencies?',
    description: 'Compare your values, approach, pricing, quality, and client care. Highlight your motto: “Built to Shine. Designed to Last.”',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhZ2VuY3klMjBtZWV0aW5nfGVufDB8fHx8MTc1NDM3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'web agency',
    slug: 'what-makes-diamond-city-different'
  },
  {
    title: 'Our Top 5 Favorite Projects (And What We Learned From Them)',
    description: 'Pick 5 past projects and briefly explain what was built, how you solved problems, and what made it special.',
    image: 'https://images.unsplash.com/photo-1552944150-6dd0130f044d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYXZvcml0ZSUyMHByb2plY3RzfGVufDB8fHx8MTc1NDM3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'favorite projects',
    slug: 'our-top-5-favorite-projects'
  },
  {
    title: 'From Clients to Collaborators: How We Build Long-Term Relationships',
    description: 'Talk about how you don’t just do one-time work — you grow with your clients. Include testimonials or quotes.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjByZWxhdGlvbnNoaXBzfGVufDB8fHx8MTc1NDM3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'client relationships',
    slug: 'from-clients-to-collaborators'
  },
  {
    title: 'Tools We Use at Diamond City for Fast & Reliable Web Development',
    description: 'List your preferred stack: VS Code, GitHub, React, Firebase, etc. Explain why they make your work better.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRvb2xzfGVufDB8fHx8MTc1NDM3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'development tools',
    slug: 'tools-we-use-at-diamond-city'
  },
  {
    title: 'Meet Our Team: The People Who Make the Magic Happen',
    description: 'Introduce key team members with short bios, skills, and a fun fact. Helps humanize your company.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWV0JTIwdGhlJTIwdGVhbXxlbnwwfHx8fDE3NTQzNzAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'team members',
    slug: 'meet-our-team'
  },
  {
    title: 'Why Small Businesses Trust Diamond City With Their First Website',
    description: 'Focused on your trust-building and beginner-friendly process — show that you guide clients from scratch.',
    image: 'https://images.unsplash.com/photo-1554224155-169544351742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwdHJ1c3R8ZW58MHx8fHwxNzU0MzcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'small business',
    slug: 'why-small-businesses-trust-diamond-city'
  },
  {
    title: 'Website Maintenance: What We Offer After Project Delivery',
    description: 'Explain your post-launch support: bug fixes, speed checks, SEO updates, etc.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzU0MzcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'website maintenance',
    slug: 'website-maintenance-what-we-offer'
  },
  {
    title: 'Hiring at Diamond City: What We Look For in New Team Members',
    description: 'Share your values for new hires: passion, creativity, willingness to learn — not just skill.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwbmV3JTIwaGlyZXN8ZW58MHx8fHwxNzU0MzcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'hiring process',
    slug: 'hiring-at-diamond-city'
  }
];

export default function BlogsPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Blogs
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our latest articles, insights, and stories from the Diamond City team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.title} className="flex">
            <Card className="overflow-hidden flex flex-col w-full hover:shadow-lg transition-shadow duration-300">
              <Image
                src={post.image}
                data-ai-hint={post['data-ai-hint']}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
