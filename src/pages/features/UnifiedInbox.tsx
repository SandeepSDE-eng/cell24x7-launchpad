import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Inbox, MessageSquare, Users, Zap, CheckCircle } from "lucide-react";
import { UnifiedInboxPreview } from "@/components/previews/UnifiedInboxPreview";

const features = [
  "Consolidate all messages from WhatsApp, SMS, Email, and more",
  "Smart filters and labels for organized conversations",
  "Team assignment and collaboration tools",
  "Quick reply templates and canned responses",
  "Real-time notifications across devices",
  "Customer context and history at a glance",
];

const UnifiedInbox = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <Inbox className="w-4 h-4" />
              Features
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Unified Inbox</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              All your customer conversations from every channel in one powerful inbox. 
              Never miss a message, respond faster, and keep your team in sync.
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
                One Inbox for All Channels
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop switching between apps. Cell24x7's Unified Inbox brings together 
                messages from WhatsApp, SMS, Email, Instagram, Facebook, and more into 
                a single, streamlined interface.
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
                <UnifiedInboxPreview />
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
              Why Teams Love Unified Inbox
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <MessageSquare className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Faster Response</h3>
              <p className="text-muted-foreground">Respond to customers in seconds with all context at your fingertips.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Users className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">Assign conversations, add notes, and collaborate seamlessly.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Zap className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Automation Ready</h3>
              <p className="text-muted-foreground">Connect with AI bots and workflows to automate routine tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Unify Your Inbox?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of businesses using Cell24x7 to manage customer conversations efficiently.
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

export default UnifiedInbox;
