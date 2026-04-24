import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SMSPreview } from "@/components/previews/SMSPreview";

const heroPoints = [
  "Instant delivery with high open rates",
  "Two-way messaging for real-time engagement",
  "DLT-ready for India and compliant routing",
  "Reliable global coverage at scale",
];

const featureCards = [
  {
    title: "Bulk SMS Campaigns",
    description: "Send promotional and transactional SMS with scheduling and reports.",
    icon: MessageSquare,
  },
  {
    title: "OTP & Authentication",
    description: "Secure OTP delivery with fast routing and fallback support.",
    icon: ShieldCheck,
  },
  {
    title: "Two-Way SMS",
    description: "Capture replies, create tickets, and automate follow-ups.",
    icon: Zap,
  },
  {
    title: "Smart Routing",
    description: "Optimize delivery across operators and regions.",
    icon: Globe,
  },
  {
    title: "DLT Compliance",
    description: "Headers, templates, and consent alignment for India (TRAI DLT).",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description: "Track delivery, response rates, and campaign performance.",
    icon: BarChart3,
  },
];

const integrationItems = [
  "REST APIs for SMS send and status",
  "Webhooks for delivery and reply tracking",
  "SMPP and HTTP support for enterprise systems",
];

const industries = [
  "Banking & Finance",
  "E-commerce",
  "Logistics & Delivery",
  "Healthcare",
  "Education",
  "Travel & Hospitality",
];

const complianceItems = [
  "TRAI DLT-ready headers and templates",
  "Operator-compliant routing and pacing",
  "Opt-in capture and consent storage",
];

const SMS = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                SMS Messaging – Cell24x7
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Reliable SMS for Alerts, OTP, and Campaigns
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Reach customers worldwide with reliable, fast, and secure SMS messaging. Perfect for
                notifications, marketing, and two-way conversations.
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
                <SMSPreview />
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
              SMS Features
            </h2>
            <p className="text-muted-foreground">Build reliable campaigns and critical notifications.</p>
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

      {/* API & Webhooks */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Easy API & Webhook Integration
              </h2>
              <p className="text-muted-foreground mb-6">
                Integrate SMS into your systems with REST APIs, SMPP, and webhooks for status tracking.
              </p>
              <ul className="space-y-3">
                {integrationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Reporting & Analytics</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-cyan mt-0.5" />
                  Live delivery reports and performance dashboards
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-cyan mt-0.5" />
                  Campaign segmentation and conversion insights
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-cyan mt-0.5" />
                  User and role management for large teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">Reliable SMS for high-trust and high-volume industries.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-card rounded-xl p-4 border border-border/50">
                <p className="text-foreground font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Security & Compliance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <ShieldCheck className="w-10 h-10 text-brand-cyan mb-4" />
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
              Ready to Start with SMS?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with customers globally using reliable SMS messaging.
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

export default SMS;
