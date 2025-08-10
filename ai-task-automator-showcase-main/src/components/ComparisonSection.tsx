import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    { feature: "Web3 Expertise", others: false, degenLabs: true },
    { feature: "Community-First Approach", others: false, degenLabs: true },
    { feature: "Real Growth Data", others: false, degenLabs: true },
    { feature: "Strategic Storytelling", others: false, degenLabs: true },
    { feature: "3000+ KOL Network", others: false, degenLabs: true },
    { feature: "Outsourced Devs", others: true, degenLabs: false },
    { feature: "Generic Strategies", others: true, degenLabs: false },
    { feature: "Short-term Plays", others: true, degenLabs: false },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Why Choose <span className="gradient-text">Degen Labs</span>?
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            See how we stack up against other agencies
          </p>
        </div>

        <div className="gradient-border rounded-lg bg-card/50 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="p-6 bg-secondary/20">
              <h3 className="font-semibold text-center">Features</h3>
            </div>
            <div className="p-6 bg-secondary/20">
              <h3 className="font-semibold text-center">Other Agencies</h3>
            </div>
            <div className="p-6 bg-secondary/20">
              <h3 className="font-semibold text-center gradient-text">Degen Labs</h3>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((item, index) => (
              <div key={index} className="contents">
                <div className="p-4 border-t border-border/20">
                  <span className="text-sm font-medium">{item.feature}</span>
                </div>
                <div className="p-4 border-t border-border/20 text-center">
                  {item.others ? (
                    <Check className="w-5 h-5 text-red-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </div>
                <div className="p-4 border-t border-border/20 text-center">
                  {item.degenLabs ? (
                    <Check className="w-5 h-5 text-primary mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;