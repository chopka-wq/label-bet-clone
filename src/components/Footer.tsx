import { Mail, MessageCircle, Phone } from 'lucide-react';

const footerLinks = {
  Games: ['Slots', 'Live Casino', 'Table Games', 'Jackpots'],
  Sports: ['Football', 'Basketball', 'Tennis', 'Esports'],
  Support: ['Help Center', 'FAQ', 'Contact Us', 'Live Chat'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Responsible Gaming', 'Licenses'],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-extrabold mb-4">
              <span className="text-primary">BET</span>
              <span className="text-foreground">LABEL</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Your premier destination for online betting and casino gaming.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2024 BetLabel. All rights reserved. 18+ Gambling can be addictive. Play responsibly.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border">
                18+
              </span>
              <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border">
                Licensed
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
