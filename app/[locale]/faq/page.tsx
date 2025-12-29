import Header from '@/components/Header';
import ImageTextSection from '@/components/ImageTextSection';
import Footer from '@/components/Footer';
import StickyRegisterButton from '@/components/StickyRegisterButton';
import { getLanguageFromPath, supportedLanguages } from '@/lib/i18n';
import { getTranslation } from '@/utils/translations';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return supportedLanguages.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);
  const currentPath = locale === 'en' ? '/en/faq' : `/pl/faq`;

  return {
    title: `${t.faq.title} | BetLabel`,
    description: t.faq.subtitle,
    alternates: {
      canonical: currentPath,
      languages: {
        'en': '/en/faq',
        'pl': '/pl/faq',
        'x-default': '/en/faq',
      },
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      <main className="pb-20 sm:pb-0">
        <section className="container py-12 lg:py-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.faq.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            {t.faq.subtitle}
          </p>
        </section>
        <ImageTextSection
          title={t.faq.imageTextTitle}
          text={t.faq.imageTextContent}
          imageLeft={true}
          buttonText={t.buttons.getStarted}
        />
      </main>
      <div className="pb-20 sm:pb-0">
        <Footer locale={locale} />
      </div>
      <StickyRegisterButton locale={locale} />
    </div>
  );
}

