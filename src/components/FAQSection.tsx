'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getLanguageFromPath, type Language } from '@/lib/i18n';
import { getTranslation } from '@/utils/translations';

interface FAQSectionProps {
  locale?: string;
}

const FAQSection = ({ locale }: FAQSectionProps) => {
  const language: Language = locale ? getLanguageFromPath(`/${locale}`) : 'en';
  const t = getTranslation(language);

  const faqs = [
    {
      question: language === 'pl' 
        ? 'Jak utworzyć konto w BetLabel?'
        : 'How do I create an account at BetLabel?',
      answer: language === 'pl'
        ? 'Utworzenie konta jest proste. Kliknij przycisk "Rejestracja", wypełnij swoje dane osobowe, zweryfikuj swój e-mail i jesteś gotowy do rozpoczęcia gry. Cały proces trwa zaledwie kilka minut.'
        : 'Creating an account is simple. Click on the "Registration" button, fill in your personal details, verify your email, and you\'re ready to start playing. The entire process takes just a few minutes.',
    },
    {
      question: language === 'pl'
        ? 'Jakie metody płatności są dostępne?'
        : 'What payment methods are available?',
      answer: language === 'pl'
        ? 'Akceptujemy szeroki zakres metod płatności, w tym karty kredytowe/debetowe, portfele elektroniczne, przelewy bankowe i kryptowaluty. Wszystkie transakcje są przetwarzane bezpiecznie i szybko.'
        : 'We accept a wide range of payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies. All transactions are processed securely and quickly.',
    },
    {
      question: language === 'pl'
        ? 'Jak odebrać bonus powitalny?'
        : 'How do I claim the welcome bonus?',
      answer: language === 'pl'
        ? 'Aby odebrać bonus powitalny w wysokości 1500€ + 150 darmowych spinów, po prostu zarejestruj się używając kodu promocyjnego "BETPLUS" i dokonaj pierwszej wpłaty. Bonus zostanie przyznany automatycznie.'
        : 'To claim your welcome bonus of 1500€ + 150 Free Spins, simply register using the promo code "BETPLUS" and make your first deposit. The bonus will be credited automatically.',
    },
    {
      question: language === 'pl'
        ? 'Czy BetLabel jest licencjonowany i bezpieczny?'
        : 'Is BetLabel licensed and safe?',
      answer: language === 'pl'
        ? 'Tak, BetLabel działa na podstawie ważnej licencji hazardowej i stosuje standardowe środki bezpieczeństwa branżowego, w tym szyfrowanie SSL, bezpieczne przetwarzanie płatności i narzędzia odpowiedzialnej gry.'
        : 'Yes, BetLabel operates under a valid gambling license and employs industry-standard security measures including SSL encryption, secure payment processing, and responsible gambling tools.',
    },
    {
      question: language === 'pl'
        ? 'Ile czasu trwają wypłaty?'
        : 'How long do withdrawals take?',
      answer: language === 'pl'
        ? 'Większość wypłat jest przetwarzana w ciągu 24 godzin. Rzeczywisty czas otrzymania środków zależy od wybranej metody płatności, ale staramy się, aby wszystkie wypłaty były jak najszybsze.'
        : 'Most withdrawals are processed within 24 hours. The actual time to receive funds depends on your chosen payment method, but we strive to make all payouts as fast as possible.',
    },
  ];

  return (
    <section id="faq" className="container py-12 lg:py-16 scroll-mt-32">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
        {language === 'pl' ? 'Najczęściej zadawane ' : 'Frequently Asked '}
        <span className="text-primary">{language === 'pl' ? 'pytania' : 'Questions'}</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        {language === 'pl' 
          ? 'Znajdź odpowiedzi na najczęstsze pytania dotyczące BetLabel.'
          : 'Find answers to common questions about BetLabel.'}
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
