import { Card, CardContent } from "@/components/ui/card";
import { Search, Brain, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your current workflows and identify repetitive tasks that can be automated to save you time and resources."
    },
    {
      icon: Brain,
      title: "Training",
      description: "Our AI systems learn your specific business processes and requirements to provide tailored automation solutions."
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "We implement and deploy your custom automation tools, ensuring seamless integration with your existing systems."
    }
  ];

  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process gets you from manual tasks to full automation in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className="p-8 text-center gradient-border hover:shadow-glow-primary smooth-transition hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gradient-primary opacity-50"></div>
              )}

              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;