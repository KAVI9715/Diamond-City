
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Briefcase, Users, CreditCard, PenTool, CheckCircle, Phone, Mail, Globe, XCircle, AlertTriangle, Scale, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

const terms = [
  {
    icon: FileText,
    title: 'Definitions',
    content: 'Company: Refers to “Diamond City Web Solutions”, its owners, employees, and authorized partners. Client/User: Any person, business, or entity that uses our services or visits our website. Services: Includes web design, development, maintenance, SEO, consultancy, and all other offerings by Diamond City.',
  },
  {
    icon: Briefcase,
    title: 'Service Agreement',
    content: 'A formal agreement (quotation or contract) will be shared before the start of any project. Project scope, timeline, cost, and payment terms will be clearly defined. All project changes must be requested in writing and may incur additional charges.',
  },
  {
    icon: Shield,
    title: 'Intellectual Property',
    content: 'All designs, code, and content created by Diamond City remain the property of Diamond City until full payment is received. Once paid in full, the client receives rights to use, modify, and own the deliverables. Diamond City reserves the right to showcase completed work in our portfolio unless otherwise agreed.',
  },
  {
    icon: Users,
    title: 'Client Responsibilities',
    content: 'Clients must provide accurate content, files, and feedback on time. Delays in client responses may affect project timelines. Clients are responsible for maintaining confidentiality of admin login credentials once delivered.',
  },
  {
    icon: CreditCard,
    title: 'Payments',
    content: 'All payments must be made in the agreed currency and schedule. Delays in payment may result in service suspension or additional fees. No refunds are issued once the project has started unless otherwise stated.',
  },
  {
    icon: PenTool,
    title: 'Revisions & Approvals',
    content: 'The client is entitled to [2–3] revision rounds, as stated in the agreement. Major structural changes after final approval may be billed separately. Final approval must be provided in writing or email before project launch.',
  },
  {
    icon: CheckCircle,
    title: 'Support & Maintenance',
    content: 'Post-launch support will be offered as defined in the contract (e.g., 15 to 30 days free support). Ongoing maintenance, backups, and updates can be provided under a separate maintenance plan.',
  },
  {
    icon: Globe,
    title: 'Third-Party Tools & Services',
    content: 'Diamond City may use third-party tools (e.g., hosting, plugins, APIs) where needed. We are not responsible for any failure or policy change from third-party vendors. Licenses and renewals for third-party products may be charged separately.',
  },
  {
    icon: XCircle,
    title: 'Termination',
    content: 'Either party may terminate the project agreement with written notice. Work completed up to the termination date must be paid in full. All intellectual property remains with Diamond City until final payment.',
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: 'Diamond City is not liable for any damages (direct or indirect) from using our services or website. We do not guarantee traffic increase, search rankings, or business results unless contractually agreed.',
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    content: 'We respect your privacy. Please refer to our Privacy Policy for how we collect, store, and protect your data.',
  },
  {
    icon: Scale,
    title: 'Governing Law',
    content: 'These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tanjore, Tamil Nadu.',
  },
  {
    icon: RefreshCw,
    title: 'Amendments',
    content: 'Diamond City may update these Terms at any time. Changes will be posted on this page with a revised “Effective Date”.',
  },
];

export default function TermsAndConditionsPage() {
  const [effectiveDate, setEffectiveDate] = useState<string | null>(null);

  useEffect(() => {
    setEffectiveDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-h1">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-lg">
                Effective Date: {effectiveDate || '...'}
            </p>
             <p className="mt-6 max-w-2xl mx-auto">
                Welcome to Diamond City. These Terms and Conditions ("Terms") govern your use of our website, services, and digital products. By accessing or using any part of our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-8">
            {terms.map((term, index) => (
              <Card key={index} className="bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                    <term.icon className="w-8 h-8" />
                    {term.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed whitespace-pre-line">
                    {term.content}
                  </p>
                </CardContent>
              </Card>
            ))}
             <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Phone className="w-8 h-8" />
                        Contact
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 leading-relaxed">
                   <p>If you have any questions about these Terms, please contact us at:</p>
                   <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <a href="mailto:legal@diamondcityweb.com" className="hover:text-accent">legal@diamondcityweb.com</a>
                   </div>
                   <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        <span>+91 98765 43210</span>
                   </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
