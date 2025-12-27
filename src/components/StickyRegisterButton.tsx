import { Button } from '@/components/ui/button';

const StickyRegisterButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto">
        <Button variant="register" size="lg" className="w-full h-12 text-base font-bold">
          Register
        </Button>
      </div>
    </div>
  );
};

export default StickyRegisterButton;

