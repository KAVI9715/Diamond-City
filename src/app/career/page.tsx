
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Mail, Rocket, Star, Users } from 'lucide-react';

const openings = [
  {
    position: 'Frontend Developer (React.js)',
    type: 'Full-Time',
    experience: '1–3 Years',
    location: 'Remote / Office',
  },
  {
    position: 'UI/UX Designer',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Remote',
  },
  {
    position: 'Web Intern (HTML/CSS/JS)',
    type: 'Internship',
    experience: 'Fresher',
    location: 'Remote',
  },
  {
    position: 'Project Coordinator',
    type: 'Full-Time',
    experience: '2+ Years',
    location: 'Office (Tanjore)',
  },
];

const whyWorkWithUs = [
    { text: "Work on real client projects across industries", icon: Briefcase },
    { text: "Learn from experienced developers and designers", icon: Users },
    { text: "Flexible and creative work environment", icon: Star },
    { text: "Opportunity to grow into leadership roles", icon: Rocket },
    { text: "Exposure to modern tools and technologies (React, Node, Firebase, etc.)", icon: Code }
];

export default function CareerPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Careers at Diamond City
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              At Diamond City, we don’t just build websites — we build careers. 
              If you’re passionate about web development, design, or digital innovation, we’d love to work with you. 
              Join a team where your ideas matter and your work creates real impact.
            </p>
          </div>

          <div className="space-y-12">
            {/* Why Work With Us */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Why Work With Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  {whyWorkWithUs.map(item => (
                    <li key={item.text} className="flex items-start gap-4">
                        <item.icon className="w-6 h-6 text-accent mt-1" />
                        <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Current Openings */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Current Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Position</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openings.map((job) => (
                      <TableRow key={job.position}>
                        <TableCell className="font-medium">{job.position}</TableCell>
                        <TableCell><Badge variant="secondary">{job.type}</Badge></TableCell>
                        <TableCell>{job.experience}</TableCell>
                        <TableCell>{job.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* General Requirements */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">General Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Strong communication & team skills</li>
                  <li>Portfolio or sample projects (GitHub or live links)</li>
                  <li>Passion for clean and efficient code/design</li>
                  <li>Willingness to learn and adapt to new tech</li>
                </ul>
              </CardContent>
            </Card>

            {/* How to Apply */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">How to Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent" />
                    <p className="text-muted-foreground">
                        Send your resume, portfolio, and the job title in the subject line to: <a href="mailto:careers@diamondcityweb.com" className="font-semibold text-primary hover:underline">careers@diamondcityweb.com</a>
                    </p>
                </div>
              </CardContent>
            </Card>

            {/* Future Opportunities */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Future Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Even if there’s no suitable position listed now, feel free to reach out. We’re always looking for talented people in:
                </p>
                <div className="flex flex-wrap gap-2">
                    {['Backend Development', 'Digital Marketing', 'SEO & Analytics', 'Client Support', 'Content Writing'].map(area => (
                        <Badge key={area} variant="outline">{area}</Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
