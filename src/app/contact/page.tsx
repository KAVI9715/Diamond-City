
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div
      className="bg-background text-foreground"
    >
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">
                    Diamond City Web Solutions<br />
                    #22, Tech Park Main Road,<br />
                    Tanjore – 613204, Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@diamondcityweb.com</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-accent-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <Link href="/" className="text-muted-foreground hover:text-accent-foreground">
                    www.diamondcityweb.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday to Friday – 9:00 AM to 5:00 PM<br />
                    Saturday & Sunday – Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Your Message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-12">
            <Card className="bg-card">
                 <CardHeader>
                    <CardTitle className="text-accent-foreground">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.112648393117!2d79.1350618153093!3d10.79685999230671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89f50c6a85b%3A0x35653c39a5f7088!2sThanjavur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1620208119853!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </CardContent>
            </Card>
        </div>

      </main>
    </div>
  );
}
