import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I create an account at BetLabel?',
    answer: 'Creating an account is simple. Click on the "Registration" button, fill in your personal details, verify your email, and you\'re ready to start playing. The entire process takes just a few minutes.',
  },
  {
    question: 'What payment methods are available?',
    answer: 'We accept a wide range of payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies. All transactions are processed securely and quickly.',
  },
  {
    question: 'How do I claim the welcome bonus?',
    answer: 'To claim your welcome bonus of 1500€ + 150 Free Spins, simply register using the promo code "BETPLUS" and make your first deposit. The bonus will be credited automatically.',
  },
  {
    question: 'Is BetLabel licensed and safe?',
    answer: 'Yes, BetLabel operates under a valid gambling license and employs industry-standard security measures including SSL encryption, secure payment processing, and responsible gambling tools.',
  },
  {
    question: 'How long do withdrawals take?',
    answer: 'Most withdrawals are processed within 24 hours. The actual time to receive funds depends on your chosen payment method, but we strive to make all payouts as fast as possible.',
  },
];

const FAQSection = () => {
  return (
    <section className="container py-12 lg:py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Find answers to common questions about BetLabel.
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card rounded-xl border border-border px-6 hover:border-primary/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
