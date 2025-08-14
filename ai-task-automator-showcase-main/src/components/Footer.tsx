import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Results", href: "#results" },
      { name: "Services", href: "#services" },
      { name: "Promise", href: "#promise" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* CTA Panel */}
        <div className="rounded-3xl center-gradient-card text-center px-6 py-10 md:px-16 md:py-14 mb-12 shadow-[0_0_40px_rgba(124,58,237,0.25),_0_0_80px_rgba(59,130,246,0.2)]">
          <h3 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            Ready to <span className="font-cursive italic gradient-trustless">grow</span> with Degen Labs?
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-6 text-lg">
            We are just one message away from becoming Your Trusted Growth Partner.
          </p>
          <a
            href="https://t.me/DegenLabsX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur px-5 py-3 text-base text-white smooth-transition"
            aria-label="Chat on Telegram"
          >
            Chat with us
            <img src="/telegram.svg" alt="Telegram" className="w-4 h-4 ml-2" />
          </a>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Bottom brand + quick links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/80 overflow-hidden bg-black/60">
                <img src="/logo.png" alt="Degen Labs logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-semibold">Degen Labs</span>
            </div>
            <p className="text-white/80">Your Growth Frens</p>
          </div>
          {/* Links */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/70">
              <a href="mailto:info@degenlabs.site" className="hover:text-white">info@degenlabs.site</a>
              <a href="#" className="hover:text-white">Privacy policy</a>
				<a href="https://instagram.com/DegenLabsX" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.linkedin.com/in/samanway-baranwal-a40886297/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Founder LinkedIn</a>
				<a href="https://x.com/DegenLabsX" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2024 Degen Labs. All rights reserved.</p>
          <a
            href="https://t.me/DegenLabsX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-sm text-white smooth-transition"
          >
            Contact us
            <img src="/telegram.svg" alt="Telegram" className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;