'use client';

import { Button } from '@/components/ui/button';
import { getLanguageFromPath, type Language } from '@/lib/i18n';
import { getTranslation } from '@/utils/translations';

interface StickyRegisterButtonProps {
  locale?: string;
}

const StickyRegisterButton = ({ locale }: StickyRegisterButtonProps) => {
  const language: Language = locale ? getLanguageFromPath(`/${locale}`) : 'en';
  const t = getTranslation(language);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto">
        <Button variant="register" size="lg" className="w-full h-12 text-base font-bold">
          {t.buttons.register}
        </Button>
      </div>
    </div>
  );
};

export default StickyRegisterButton;
