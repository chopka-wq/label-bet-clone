import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Gift } from 'lucide-react';

const navItems = [
  { name: 'Welcome to BetLabel', href: '/#welcome', isAnchor: true },
  { name: 'Why choose us', href: '/why-choose-us', isAnchor: false },
  { name: 'Sports betting', href: '/#categories', isAnchor: true },
  { name: 'Popular sports', href: '/#categories', isAnchor: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">BET</span>
            <span className="text-foreground">LABEL</span>
          </span>
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <div className="w-8 h-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-xs font-bold text-foreground">EN</span>
            </div>
            <Gift className="w-6 h-6 text-accent animate-float" />
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
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-2">
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
