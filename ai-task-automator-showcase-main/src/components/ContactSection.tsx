import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const pricingFeatures = [
    "Custom AI automation workflows",
    "24/7 AI assistant support",
    "Advanced analytics dashboard",
    "Integration with 100+ tools",
    "Priority customer support",
    "Monthly strategy consultations"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can transform your business with intelligent automation. 
            Schedule a free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 gradient-border animate-fade-in-up">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary smooth-transition"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary smooth-transition"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary smooth-transition"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your automation needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary smooth-transition resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary smooth-transition group"
                  size="lg"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                    <span>hello@xtract.ai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing/Features */}
          <div className="space-y-8">
            <Card className="p-8 gradient-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <Badge className="bg-gradient-primary text-primary-foreground mb-4">
                    Enterprise Solution
                  </Badge>
                  <h3 className="text-3xl font-bold gradient-text">Custom Pricing</h3>
                  <p className="text-muted-foreground mt-2">
                    Tailored to your business needs
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full hover:bg-muted/50 smooth-transition"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="p-6 gradient-border bg-gradient-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-2">Start Your Free Trial</h4>
                <p className="text-muted-foreground mb-4">
                  Experience the power of AI automation with our 14-day free trial. No credit card required.
                </p>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow-primary smooth-transition"
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;