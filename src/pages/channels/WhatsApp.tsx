import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle,
  ClipboardCheck,
  FileText,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { WhatsAppPreview } from "@/components/previews/WhatsAppPreview";

const heroPoints = [
  "Reach customers instantly on their preferred channel",
  "Automate conversations and notifications",
  "Improve response time and customer satisfaction",
  "Increase conversions with rich, interactive messaging",
];

const featureCards = [
  {
    title: "Official WhatsApp Business API",
    description: "Meta-approved WhatsApp API with secure, reliable infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Bulk WhatsApp Messaging",
    description: "Send promotional and transactional messages with scheduling and reports.",
    icon: MessageSquare,
  },
  {
    title: "WhatsApp Templates",
    description: "Utility, Authentication, and Marketing templates with easy management.",
    icon: FileText,
  },
  {
    title: "Automated Notifications",
    description: "OTP, order updates, payment alerts, and delivery confirmations.",
    icon: ClipboardCheck,
  },
  {
    title: "Two-Way Messaging",
    description: "Real-time replies with chat history, sessions, and agent inbox.",
    icon: Users,
  },
  {
    title: "Chatbot & Automation",
    description: "Auto-reply workflows, FAQ bots, lead capture, and AI handoff.",
    icon: Bot,
  },
];

const integrationItems = [
  "REST APIs for fast integration",
  "Webhooks for delivery and reply tracking",
  "CRM, ERP, and custom app integrations",
];

const techStack = ["PHP", "Java", "Python", "Node.js", ".NET"];

const dashboardItems = [
  "Live delivery reports",
  "Read and reply status",
  "Campaign analytics",
  "User and role management",
];

const industries = [
  "Banking & Finance",
  "E-commerce",
  "Logistics & Delivery",
  "Education",
  "Healthcare",
  "Travel & Hospitality",
  "IT & SaaS Companies",
];

const complianceItems = [
  "End-to-end encrypted messaging",
  "Meta policy compliant",
  "GDPR-ready data handling",
];

const reasons = [
  "Official WhatsApp API provider",
  "Quick onboarding and setup",
  "Dedicated technical support",
  "Competitive pricing",
  "Scalable enterprise-grade solution",
];

const WhatsApp = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Business API – Cell24x7
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Grow Faster with Official WhatsApp Business API
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cell24x7 provides official WhatsApp Business API solutions to help businesses connect with customers
                instantly, securely, and at scale. Automate notifications, run campaigns, and offer real-time support
                from one powerful platform.
              </p>
              <div className="grid gap-3 mb-8">
                {heroPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
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
              <div className="aspect-square max-w-md w-full bg-green-500/5 rounded-2xl shadow-lg flex items-center justify-center">
                <WhatsAppPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why WhatsApp Business API */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why WhatsApp Business API?
            </h2>
            <p className="text-muted-foreground">
              WhatsApp is the most trusted messaging platform with high open rates and fast responses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Users className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Instant Reach</h3>
              <p className="text-muted-foreground">Engage customers on their preferred channel instantly.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Zap className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Automation at Scale</h3>
              <p className="text-muted-foreground">Automate notifications, FAQs, and lead qualification.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <BarChart3 className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Better Engagement</h3>
              <p className="text-muted-foreground">Increase responses, conversions, and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              WhatsApp API Features
            </h2>
            <p className="text-muted-foreground">Everything you need to launch and grow on WhatsApp.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50">
                <item.icon className="w-10 h-10 text-green-500 mb-4" />
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
                Cell24x7 WhatsApp API supports REST APIs and webhooks for real-time delivery and reply tracking.
              </p>
              <ul className="space-y-3">
                {integrationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Supported Tech</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Integration Highlights</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  Unified Inbox with team routing and SLAs
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  Template library and approval workflows
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  Analytics for delivery, response, and conversion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard & Reporting */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Dashboard & Reporting
            </h2>
            <p className="text-muted-foreground">Live visibility for teams, campaigns, and outcomes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {dashboardItems.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <BarChart3 className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">Proven use cases across high-trust industries.</p>
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

      {/* Security & Compliance */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Security & Compliance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cell24x7 */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose Cell24x7?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
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
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to grow your business with WhatsApp? Let us set up your official API in days.
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

export default WhatsApp;
