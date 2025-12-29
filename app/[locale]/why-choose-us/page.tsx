import Header from '@/src/components/Header';
import ImageTextSection from '@/src/components/ImageTextSection';
import Footer from '@/src/components/Footer';
import StickyRegisterButton from '@/src/components/StickyRegisterButton';
import { getLanguageFromPath } from '@/src/lib/i18n';
import { getTranslation } from '@/src/utils/translations';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);
  const currentPath = locale === 'en' ? '/en/why-choose-us' : `/pl/why-choose-us`;

  return {
    title: `${t.whyChooseUs.title} | BetLabel`,
    description: t.whyChooseUs.subtitle,
    alternates: {
      canonical: currentPath,
      languages: {
        'en': '/en/why-choose-us',
        'pl': '/pl/why-choose-us',
        'x-default': '/en/why-choose-us',
      },
    },
  };
}

export default async function WhyChooseUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      <main className="pb-20 sm:pb-0">
        <section className="container py-12 lg:py-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.whyChooseUs.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            {t.whyChooseUs.subtitle}
          </p>
        </section>
        <ImageTextSection
          title={t.whyChooseUs.imageTextTitle}
          text={t.whyChooseUs.imageTextContent}
          imageLeft={false}
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

