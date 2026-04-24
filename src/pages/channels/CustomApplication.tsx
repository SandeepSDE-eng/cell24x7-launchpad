import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Code,
  Database,
  Plug,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { CustomAppPreview } from "@/components/previews/CustomAppPreview";

const apiServices = [
  "REST APIs and secure webhooks",
  "SDKs and sandbox environments",
  "Custom workflow automation",
  "Multi-tenant admin panel",
  "Role-based access (RBAC)",
  "Audit logs and analytics",
];

const backendStack = [
  {
    title: "API Gateway",
    description: "Secure, scalable APIs with rate limits and monitoring.",
    icon: Server,
  },
  {
    title: "Database & Storage",
    description: "Reliable storage for conversations, events, and analytics.",
    icon: Database,
  },
  {
    title: "Auth & Security",
    description: "OAuth2, JWT, API keys, and IP allowlisting.",
    icon: ShieldCheck,
  },
  {
    title: "Webhooks",
    description: "Real-time delivery, reply, and event callbacks.",
    icon: Plug,
  },
  {
    title: "Automation Engine",
    description: "Trigger-based workflows for messaging and routing.",
    icon: Workflow,
  },
  {
    title: "AI & Bots",
    description: "Custom AI bots, intent routing, and human handoff.",
    icon: Bot,
  },
];

const useCases = [
  "CRM and ERP integration",
  "Custom customer portals",
  "Automated notifications and alerts",
  "Conversational workflows and bots",
  "Unified communication dashboards",
];

const WebApplication = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Web Application – Cell24x7
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Build Web Apps with Enterprise APIs
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Create powerful web applications with our secure APIs and backend services.
                Build custom workflows, dashboards, and automation tailored to your business.
              </p>
              <div className="grid gap-3 mb-8">
                {apiServices.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BarChart3 className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-foreground">{item}</span>
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
                <CustomAppPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              All Services We Provide
            </h2>
            <p className="text-muted-foreground">
              A complete backend stack for secure, scalable web applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {apiServices.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <Code className="w-8 h-8 text-brand-cyan mb-3" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              API Backend & Infrastructure
            </h2>
            <p className="text-muted-foreground">Built for security, scale, and performance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {backendStack.map((item) => (
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
            <p className="text-muted-foreground">Build solutions faster with a ready backend stack.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50 flex items-start gap-3">
                <Workflow className="w-6 h-6 text-brand-cyan mt-0.5" />
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
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get API access, backend infrastructure, and expert support from Cell24x7.
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

export default WebApplication;
