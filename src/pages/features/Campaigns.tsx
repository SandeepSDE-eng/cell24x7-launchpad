import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Send, Target, Users, BarChart3, CheckCircle } from "lucide-react";
import { CampaignsPreview } from "@/components/previews/CampaignsPreview";

const features = [
  "Broadcast messages to thousands instantly",
  "Segment audiences for targeted campaigns",
  "Schedule campaigns for optimal timing",
  "A/B testing for message optimization",
  "Rich media support including images and videos",
  "Real-time campaign analytics and reporting",
];

const Campaigns = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <Send className="w-4 h-4" />
              Features
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Campaigns</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create powerful broadcast and targeted messaging campaigns 
              that reach your audience at the right time, on the right channel.
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
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Broadcast & Targeted Messaging
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Reach your entire audience or specific segments with personalized 
                messages. Track performance and optimize for better engagement.
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
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <CampaignsPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campaign Features That Drive Results
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Target className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Smart Targeting</h3>
              <p className="text-muted-foreground">Reach the right audience with advanced segmentation tools.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Users className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Mass Reach</h3>
              <p className="text-muted-foreground">Broadcast to thousands of contacts with a single click.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <BarChart3 className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Analytics</h3>
              <p className="text-muted-foreground">Track open rates, clicks, and conversions in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Launch Your Campaign?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start reaching your customers with powerful, targeted messaging campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
