import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Results", href: "#results" },
    { name: "Services", href: "#services" },
    { name: "Promise", href: "#promise" }
  ];

  return (
    <nav className="fixed top-2 sm:top-4 left-0 right-0 z-50">
      {/* Floating pill container */}
      <div className="mx-auto max-w-6xl px-2 sm:px-3 relative">
        <div className="h-12 sm:h-14 md:h-16 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.35)] flex items-center justify-between px-3 sm:px-5 md:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-white/80 overflow-hidden bg-black/60">
              <img src="/logo.png" alt="Degen Labs logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xl sm:text-2xl md:text-[26px] font-semibold font-display tracking-tight">Degen Labs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white smooth-transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/80 group-hover:w-5 smooth-transition rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://t.me/SamanwayDeFi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/10 text-white px-3 py-1.5 text-sm font-medium hover:bg-white/20 smooth-transition"
              aria-label="Contact on Telegram"
            >
              <img src="/telegram.svg" alt="Telegram" className="w-4 h-4 mr-2" />
              Contact Us
            </a>
            <Button className="h-10 px-4 text-sm bg-white text-black hover:bg-white/90">
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-black/60 text-white border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation - overlay panel */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-3 right-3 top-[calc(100%+8px)] z-50 animate-slide-down">
            <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <nav className="space-y-5">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-center text-white/90 tracking-wide uppercase text-base py-2 rounded-md hover:bg-white/10 smooth-transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;