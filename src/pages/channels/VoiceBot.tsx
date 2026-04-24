import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  Mic,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { VoiceBotPreview } from "@/components/previews/VoiceBotPreview";

const heroPoints = [
  "24/7 voice automation with natural language",
  "Multi-language support and smart routing",
  "Real-time transcription and analytics",
  "Seamless handoff to human agents",
];

const featureCards = [
  {
    title: "AI Voice Conversations",
    description: "Human-like voice flows for inbound and outbound calls.",
    icon: Bot,
  },
  {
    title: "Smart Call Routing",
    description: "Route by intent, language, or customer tier.",
    icon: Phone,
  },
  {
    title: "Live Agent Handoff",
    description: "Escalate to agents with full context and transcripts.",
    icon: Users,
  },
  {
    title: "Transcription & QA",
    description: "Capture transcripts with QA insights for training.",
    icon: Mic,
  },
  {
    title: "24/7 Availability",
    description: "Never miss a call during peak hours or after hours.",
    icon: Clock,
  },
  {
    title: "Secure Voice Platform",
    description: "Role-based access with audit-ready logs.",
    icon: ShieldCheck,
  },
];

const useCases = [
  "Customer support and FAQs",
  "Appointment booking and reminders",
  "Lead qualification and follow-ups",
  "Payment and billing inquiries",
];

const VoiceBot = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                VoiceBot – Cell24x7
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                AI Voice Automation That Sounds Human
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Handle calls at scale with intelligent voice bots that understand context and intent.
                Reduce wait times, improve resolution, and keep customers happy.
              </p>
              <div className="grid gap-3 mb-8">
                {heroPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/book-demo">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/book-demo">Talk to Sales</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/integrations">Start Integration</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="aspect-square max-w-md w-full bg-brand-cyan/5 rounded-2xl shadow-lg flex items-center justify-center">
                <VoiceBotPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              VoiceBot Features
            </h2>
            <p className="text-muted-foreground">Enterprise-grade voice automation built for scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50">
                <item.icon className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Common Use Cases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50 flex items-start gap-3">
                <Zap className="w-6 h-6 text-brand-cyan mt-0.5" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Voice AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your phone support with intelligent voice automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/book-demo">Talk to Sales</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/integrations">Start Integration</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VoiceBot;
