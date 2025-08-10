import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const PromiseSection = () => {
  const guarantees = [
    "Tailored, trend-driven campaigns",
    "Right narratives with the right people",
    "Data-backed approach",
    "Community-driven growth",
    "Real results, not fake metrics",
    "Strategic scaling with trust"
  ];

  const callBenefits = [
    "Clarity on your growth goals",
    "Custom growth plan outline", 
    "Expert suggestions & insights",
    "Chill vibes, no pressure"
  ];

  return (
    <section id="promise" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            The <span className="gradient-text">Degen Labs</span> Guarantee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We build tailored, trend-driven campaigns with the right narratives and the right people. 
            Our data-backed and community-driven approach ensures your growth is real, not fake. 
            Choose us to scale with trust and strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Promise */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold">What We Promise</h3>
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 border border-primary/20"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery Call Benefits */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold">What You Get From Our Discovery Call</h3>
            <div className="space-y-4">
              {callBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 border border-accent/20"
                >
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Let's Get You Growing
          </h3>
          <a
            href="https://t.me/SamanwayDeFi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/30 backdrop-blur-md px-8 py-4 text-lg hover:bg-white/40 smooth-transition animate-fade-in-up"
            style={{ animationDelay: '1s' }}
            aria-label="Contact on Telegram"
          >
            <img src="/telegram.svg" alt="Telegram" className="w-5 h-5 mr-2" />
            Let's Chat
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;