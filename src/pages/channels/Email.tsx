import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Mail,
  Palette,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { EmailPreview } from "@/components/previews/EmailPreview";

const heroPoints = [
  "Beautiful, responsive templates",
  "Segmentation and personalization",
  "Automated journeys and drip campaigns",
  "Real-time analytics and A/B testing",
];

const featureCards = [
  {
    title: "Campaign Builder",
    description: "Drag-and-drop editor with reusable blocks and templates.",
    icon: Palette,
  },
  {
    title: "Automation",
    description: "Lifecycle journeys, drip campaigns, and triggers.",
    icon: Sparkles,
  },
  {
    title: "Segmentation",
    description: "Target by behavior, attributes, and engagement.",
    icon: Send,
  },
  {
    title: "A/B Testing",
    description: "Test subject lines, content, and CTA performance.",
    icon: BarChart3,
  },
  {
    title: "Deliverability",
    description: "SPF, DKIM, and DMARC aligned sending.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description: "Opens, clicks, conversions, and revenue tracking.",
    icon: BarChart3,
  },
];

const integrationItems = [
  "SMTP and REST APIs for email send",
  "Webhooks for events and engagement",
  "CRM, ERP, and CDP integrations",
];

const useCases = [
  "Welcome and onboarding series",
  "Abandoned cart and reactivation",
  "Newsletters and product launches",
  "Renewal and billing reminders",
];

const complianceItems = [
  "SPF, DKIM, and DMARC setup",
  "Unsubscribe and preference management",
  "Audit-ready logs and access controls",
];

const Email = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                Email Marketing – Cell24x7
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Email Campaigns that Drive Revenue
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Create high-performing email campaigns with automation, personalization, and analytics—
                all in one platform.
              </p>
              <div className="grid gap-3 mb-8">
                {heroPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
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
              <div className="aspect-square max-w-md w-full bg-amber-500/5 rounded-2xl shadow-lg flex items-center justify-center">
                <EmailPreview />
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
              Email Features
            </h2>
            <p className="text-muted-foreground">Modern email tooling with enterprise reliability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50">
                <item.icon className="w-10 h-10 text-amber-500 mb-4" />
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
                API & Integration Ready
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect email sending with your product and marketing stack using SMTP, REST, and webhooks.
              </p>
              <ul className="space-y-3">
                {integrationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Use Cases</h3>
              <ul className="space-y-3 text-muted-foreground">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Security & Deliverability
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
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
              Ready to Transform Your Email?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Launch campaigns, automate journeys, and measure results in one platform.
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

export default Email;
