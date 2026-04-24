import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, Brain, Clock, CheckCircle } from "lucide-react";
import { AIAutomationPreview } from "@/components/previews/AIAutomationPreview";

const features = [
  "Intelligent chatbots that understand context",
  "Automated workflow triggers and actions",
  "Smart routing based on customer intent",
  "24/7 automated responses for common queries",
  "Seamless handoff to human agents when needed",
  "Continuous learning from conversations",
];

const AIAutomation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              Features
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">AI Automation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Supercharge your customer service with intelligent AI-powered chatbots 
              and automated workflows that work around the clock.
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
                <AIAutomationPreview />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Intelligent Automation at Scale
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI understands customer intent, handles routine queries automatically, 
                and seamlessly escalates complex issues to your team.
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
              The Power of AI Automation
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Clock className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Your AI never sleeps. Respond to customers anytime, anywhere.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Zap className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Instant Response</h3>
              <p className="text-muted-foreground">Reduce wait times to zero with instant automated replies.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Brain className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Smart Learning</h3>
              <p className="text-muted-foreground">AI that learns from every conversation to improve over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Automate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how AI automation can transform your customer service operations.
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

export default AIAutomation;
