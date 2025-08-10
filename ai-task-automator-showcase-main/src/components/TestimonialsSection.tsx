import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Inc.",
      avatar: "SJ",
      quote: "Xtract transformed our workflow completely. We went from spending 8 hours on manual data entry to having it automated in minutes. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions Ltd.",
      avatar: "MC",
      quote: "The AI assistant handles our customer inquiries 24/7. Our response time improved by 90% and customer satisfaction scores are at an all-time high.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Dynamics",
      avatar: "ER",
      quote: "Implementation was seamless and the support team was incredible. Our team now focuses on strategy instead of repetitive tasks. Game changer!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying about their automation journey with Xtract.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 gradient-border hover:shadow-glow-primary smooth-transition hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['TechFlow', 'Digital Solutions', 'Growth Dynamics', 'InnovateCorp', 'FutureScale'].map((company, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-primary smooth-transition">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;