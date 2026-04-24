import { testimonials } from "@/config/site";
import { Star, Quote } from "lucide-react";

const trustedLogos = [
  "TechFlow", "GlobalRetail", "FinServe", "HealthPlus", 
  "EduNext", "TravelEase", "PropMax", "InsureTech"
];

export function TrustSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Trusted By Logos */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedLogos.map((logo, index) => (
              <div
                key={logo}
                className="px-6 py-3 bg-secondary/50 rounded-lg text-muted-foreground font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Teams <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-muted-foreground">
              See what our customers have to say about Cell24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>


              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
