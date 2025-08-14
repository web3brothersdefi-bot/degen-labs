import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { FloatingCrypto } from "./FloatingCrypto";

const HeroSection = () => {
  const [particles] = useState<Array<{id: number, left: number, size: number, delay: number}>>(() =>
    // Generate once so particles exist on first paint (no pop-in)
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 20,
    }))
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 md:pt-32 pb-16 md:pb-0">
      {/* Space particles background */}
      <div className="space-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Central radial glow */}
      <div className="radial-glow blur-2xl opacity-70"></div>

      {/* Floating crypto icons */}
      <FloatingCrypto />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* New badge */}
        <div className="mb-6 md:mb-8 animate-slide-from-left" style={{ animationDelay: '0.2s' }}>
          <Badge variant="outline" className="gradient-border-cool px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            ⭐ Leading Web3 Growth Firm
          </Badge>
        </div>

        {/* Main heading aligned like reference */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-display tracking-tight leading-tight mb-6 md:mb-8 animate-slide-from-left" style={{ animationDelay: '0.4s' }}>
          <span className="block text-white">Your trusted growth partner in</span>
          <span className="block text-white">a <span className="italic font-normal font-cursive gradient-trustless">trustless</span> eco-system</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto animate-slide-from-left" style={{ animationDelay: '0.6s' }}>
          Degen Labs specializes in Web3 marketing, community growth, and development to drive real results for your project.
        </p>

        {/* Trust indicator removed per request */}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center animate-slide-from-left" style={{ animationDelay: '1s' }}>
          <a
            href="https://calendly.com/web3brothersdefi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white text-black hover:bg-white/90 border border-white/30 px-6 sm:px-8 py-4 text-base sm:text-lg smooth-transition group"
            aria-label="Request a proposal"
          >
            Request a proposal
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://t.me/DegenLabsX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/15 bg-black/60 text-white px-6 sm:px-8 py-4 text-base sm:text-lg hover:bg-black/70 smooth-transition"
            aria-label="Contact on Telegram"
          >
            <img src="/telegram.svg" alt="Telegram" className="w-5 h-5 mr-2" />
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;