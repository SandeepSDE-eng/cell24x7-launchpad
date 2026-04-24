import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Clock, Calendar, CheckCircle } from "lucide-react";
import { HealthcarePreview } from "@/components/previews/HealthcarePreview";

const features = [
  "HIPAA-compliant patient messaging",
  "Automated appointment reminders",
  "Prescription refill notifications",
  "Post-visit follow-up and care instructions",
  "Lab results and health updates",
  "Patient satisfaction surveys",
];

const Healthcare = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Use Cases
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Healthcare</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              HIPAA-compliant patient messaging that improves outcomes. 
              Reduce no-shows, enhance care coordination, and engage patients.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square max-w-md mx-auto">
                <HealthcarePreview />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Patient Engagement Done Right
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Keep patients engaged and informed with secure, compliant 
                messaging that integrates with your healthcare systems.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Shield className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-muted-foreground">Fully compliant with healthcare regulations.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Calendar className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Fewer No-Shows</h3>
              <p className="text-muted-foreground">Reduce missed appointments by up to 50%.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Clock className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Better Outcomes</h3>
              <p className="text-muted-foreground">Improve patient adherence and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Improve Patient Care?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Cell24x7 can help your healthcare organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/use-cases">View All Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Healthcare;
