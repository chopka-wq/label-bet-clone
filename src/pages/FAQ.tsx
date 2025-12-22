import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is simple! Click on the "Registration" button in the top right corner, fill in your personal details, verify your email address, and you\'re ready to start betting. The entire process takes less than 2 minutes.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept a wide variety of payment methods including credit and debit cards (Visa, Mastercard), e-wallets (Skrill, Neteller, PayPal), bank transfers, and cryptocurrencies (Bitcoin, Ethereum). All transactions are processed securely and encrypted.',
    },
    {
      question: 'How long do withdrawals take?',
      answer: 'Withdrawal processing times vary by method. E-wallet withdrawals are typically processed within 24 hours, while bank transfers may take 3-5 business days. Cryptocurrency withdrawals are usually instant. All withdrawals are subject to account verification.',
    },
    {
      question: 'Is BetLabel licensed and regulated?',
      answer: 'Yes, BetLabel is fully licensed and regulated by the Malta Gaming Authority (MGA) and the UK Gambling Commission. We operate in compliance with all international gambling regulations and maintain the highest standards of security and fairness.',
    },
    {
      question: 'What is the welcome bonus?',
      answer: 'New players can claim our welcome bonus of 1500€ + 150 Free Spins. To receive this bonus, simply register a new account and use the promo code BETPLUS during registration. The bonus is subject to our terms and conditions and wagering requirements.',
    },
    {
      question: 'How do I claim my bonus?',
      answer: 'To claim your bonus, make sure to enter the promo code during registration or in the cashier section when making your first deposit. The bonus will be automatically credited to your account once the qualifying deposit is made.',
    },
    {
      question: 'Can I bet on mobile devices?',
      answer: 'Absolutely! BetLabel is fully optimized for mobile devices. You can access our platform through any mobile browser, or download our dedicated mobile app for iOS and Android devices. All features are available on mobile.',
    },
    {
      question: 'What sports can I bet on?',
      answer: 'We offer betting on a wide range of sports including football, basketball, tennis, hockey, baseball, MMA, boxing, and many more. We also offer live betting, esports betting, and virtual sports. Check our sportsbook for the complete list.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Our customer support team is available 24/7. You can reach us via live chat (available on the website), email at support@betlabel.com, or phone at +1-800-BETLABEL. We typically respond within minutes via live chat.',
    },
    {
      question: 'Are my personal details safe?',
      answer: 'Yes, your security is our top priority. We use advanced SSL encryption technology to protect all personal and financial information. We never share your data with third parties and comply with all data protection regulations including GDPR.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find answers to the most common questions about BetLabel. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto mb-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="gradient-card border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-semibold">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get instant help from our support team</p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  Start Chat
                </button>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>support@betlabel.com</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours</p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  Send Email
                </button>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>+1-800-BETLABEL</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Call us for immediate assistance</p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  Call Now
                </button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

