
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Shield, Server, Share2, Cookie, CheckSquare, History, ExternalLink, RefreshCw, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const policies = [
  {
    icon: User,
    title: 'Information We Collect',
    content: 'We may collect the following types of information:\n\na. Personal Information\nName, email address, phone number\nCompany details (if applicable)\nAddress and contact preferences\n\nb. Website Usage Information\nIP address and browser type\nPages visited, time spent, and referring URLs\nCookies and analytics data\n\nc. Project or Business Data\nInformation you provide to us related to your website, business goals, or content\nDocuments, logos, files, or media shared during project collaboration',
  },
  {
    icon: Shield,
    title: 'How We Use Your Information',
    content: 'We use the collected information to:\n\nRespond to inquiries or service requests\nDeliver and manage your website development project\nImprove our website and user experience\nSend service updates, invoices, and technical support information\nConduct internal analysis and reports\nComply with legal and contractual obligations',
  },
  {
    icon: Server,
    title: 'How We Protect Your Data',
    content: 'We take data security seriously. Measures include:\n\nSSL encryption on our website\nSecure email and project storage systems\nLimited access to personal data (only by authorized team members)\nRegular backup and malware protection',
  },
  {
    icon: Share2,
    title: 'Sharing of Information',
    content: 'We do not sell, rent, or trade your personal information.\n\nWe may share data with:\n\nTrusted third-party service providers (e.g., hosting, payment processors, analytics tools)\nLegal authorities, if required by law\nProject partners or subcontractors with your prior consent',
  },
  {
    icon: Cookie,
    title: 'Cookies and Tracking',
    content: 'Our website may use cookies to enhance your browsing experience.\n\nYou can choose to disable cookies through your browser settings, but some features may not function correctly.',
  },
  {
    icon: CheckSquare,
    title: 'Your Rights',
    content: 'You have the right to:\n\nRequest access to your data\nAsk for correction or deletion of your information\nWithdraw consent for email marketing at any time\nContact us for any privacy-related questions',
  },
  {
    icon: History,
    title: 'Data Retention',
    content: 'We retain your information:\n\nAs long as needed for the purpose collected\nFor accounting, legal, or security requirements\nUntil the project and service relationship ends',
  },
  {
    icon: ExternalLink,
    title: 'Third-Party Links',
    content: 'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of external sites. Please review their privacy policies separately.',
  },
  {
    icon: RefreshCw,
    title: 'Changes to This Policy',
    content: 'We may update this policy from time to time. Changes will be posted on this page with the new Effective Date. We recommend checking periodically to stay informed.',
  },
];

export default function PrivacyPolicyPage() {
    const [effectiveDate, setEffectiveDate] = useState('');

    useEffect(() => {
        setEffectiveDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Effective Date: {effectiveDate}
            </p>
             <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                At Diamond City Web Solutions ("we", "our", or "us"), we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website or use our services.
            </p>
          </div>

          <div className="space-y-8">
            {policies.map((policy, index) => (
              <Card key={index} className="bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                    <policy.icon className="w-8 h-8" />
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {policy.content}
                  </p>
                </CardContent>
              </Card>
            ))}
             <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl text-accent">
                        <Phone className="w-8 h-8" />
                        Contact Us
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground leading-relaxed">
                   <p>If you have any questions, concerns, or requests regarding this policy, please contact us at:</p>
                   <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <a href="mailto:privacy@diamondcityweb.com" className="hover:text-accent">privacy@diamondcityweb.com</a>
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
