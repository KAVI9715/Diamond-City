
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Share2, ShieldCheck, ClipboardCheck, RefreshCw, Phone, Mail } from 'lucide-react';

const policies = [
  {
    icon: Cookie,
    title: 'What Are Cookies?',
    content: 'Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They help websites remember your preferences, recognize you on return visits, and improve performance and usability.\n\nCookies can be:\n\nSession Cookies – Temporary cookies that expire when you close your browser.\n\nPersistent Cookies – Stored on your device until you delete them or they expire.\n\nFirst-party Cookies – Set by our website.\n\nThird-party Cookies – Set by other services we use (e.g., Google Analytics).',
  },
  {
    icon: Cookie,
    title: 'How We Use Cookies',
    content: 'We use cookies for the following purposes:\n\n🔹 a. Essential Cookies\nThese cookies are necessary for the website to function properly. Without them, core features like page navigation, security, and form submissions may not work.\n\nExamples:\nUser login sessions\nContact form validation\nSite language or preferences\n\n🔹 b. Performance & Analytics Cookies\nThese cookies help us understand how users interact with our website by collecting data such as page visits, time spent, and error messages.\n\nWe use tools like:\nGoogle Analytics\nFacebook Pixel (if applicable)\n\nThis data helps us improve the website’s performance and content based on visitor behavior.\n\n🔹 c. Functional Cookies\nThese cookies allow us to remember your preferences, such as your region, preferred language, or user settings.\n\nExamples:\nRemembering login details\nStoring user-selected themes or layouts\nLanguage selection (for multi-language sites)\n\n🔹 d. Advertising / Targeting Cookies\nThese cookies track your browsing habits and may be used to deliver ads relevant to you, either on our site or across other websites.\n\nNote: As of now, Diamond City does not display third-party advertisements, but we may use targeting cookies for marketing campaigns on platforms like Google or Facebook in the future.',
  },
  {
    icon: Share2,
    title: 'Third-Party Cookies',
    content: 'Some cookies may be placed by third-party services we use, such as:\n\nGoogle (Google Analytics, Google Tag Manager)\nMeta/Facebook (if pixel is added)\nPayment gateways (Razorpay, Stripe, etc.)\nVideo platforms (YouTube, Vimeo)\n\nWe do not control these cookies directly. Please check the respective third-party privacy policies for more details.',
  },
  {
    icon: ShieldCheck,
    title: 'Your Cookie Choices and Controls',
    content: 'You can choose to accept or reject cookies through:\n\nThe cookie consent banner (on first visit)\n\nYour browser settings\n\nCookie management tools (if implemented on our site)\n\n🔐 How to Control Cookies via Browser:\nChrome: Settings → Privacy & Security → Cookies\n\nFirefox: Preferences → Privacy & Security\n\nSafari: Preferences → Privacy\n\nEdge: Settings → Cookies & Site permissions\n\nRejecting cookies may affect the performance or functionality of our site.',
  },
  {
    icon: ClipboardCheck,
    title: 'Cookie Consent Notice',
    content: 'When you first visit our website, you will see a cookie banner asking for your consent to use cookies. You can accept all, reject all, or customize your preferences (if implemented).',
  },
  {
    icon: RefreshCw,
    title: 'Changes to This Cookie Policy',
    content: 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised Effective Date. Continued use of our site after changes implies consent to the updated policy.',
  },
];

export default function CookiesPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
             <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                At Diamond City Web Solutions, we use cookies to improve your browsing experience, analyze website traffic, and personalize content. This Cookie Policy explains what cookies are, how we use them, and how you can control them. By using our website, you agree to the use of cookies in accordance with this policy.
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
                   <p>For questions about this Cookie Policy or your data:</p>
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
