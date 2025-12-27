import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Gift, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Welcome to BetLabel', href: '/#welcome', isAnchor: true },
  { name: 'Sports betting', href: '/#categories', isAnchor: true },
  { name: 'Popular sports', href: '/#categories', isAnchor: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'RU', name: 'Русский' },
    { code: 'PL', name: 'Polski' },
    { code: 'KZ', name: 'Қазақша' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
            <span className="text-primary">BET</span>
            <span className="text-foreground">LABEL</span>
          </span>
          <div className="flex items-center gap-2 ml-2">
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="w-12 h-7 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-sm border-0 text-xs font-bold text-white hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 transition-all flex items-center justify-center gap-1 px-2"
              >
                {language}
                <ChevronDown className={`w-3 h-3 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {languageMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-popover border border-border rounded-md shadow-lg z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between ${
                        language === lang.code ? 'bg-accent/50 text-primary font-semibold' : 'text-popover-foreground'
                      }`}
                    >
                      <span>{lang.code}</span>
                      {language === lang.code && (
                        <span className="text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Gift className="text-accent animate-float hidden sm:block" style={{ width: '1.8rem', height: '1.8rem' }} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <Link to="/live-betting" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Live betting
          </Link>
          <Link to="/esports" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Esports
          </Link>
          <Link to="/casino" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Casino
          </Link>
          <Link to="/slot-machines" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Slot machines
          </Link>
          <Link to="/why-choose-us" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            Why choose us
          </Link>
          <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            FAQ
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="register" size="default" className="hidden sm:flex">
            Registration
          </Button>
          <Button variant="login" size="default" className="hidden sm:flex">
            Log in
          </Button>
          <button
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-9 h-9" />
            ) : (
              <Menu className="w-9 h-9" />
            )}
          </button>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="hidden lg:block border-t border-border bg-card/50">
        <div className="container py-2">
          <nav className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background w-full">
          <nav className="container py-4 flex flex-col gap-2 px-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/live-betting"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Live betting
            </Link>
            <Link
              to="/esports"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Esports
            </Link>
            <Link
              to="/casino"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Casino
            </Link>
            <Link
              to="/slot-machines"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Slot machines
            </Link>
            <Link
              to="/why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              Why choose us
            </Link>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              FAQ
            </Link>
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="flex gap-2 mt-4 sm:hidden">
              <Button variant="register" size="sm" className="flex-1">
                Registration
              </Button>
              <Button variant="login" size="sm" className="flex-1">
                Log in
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
