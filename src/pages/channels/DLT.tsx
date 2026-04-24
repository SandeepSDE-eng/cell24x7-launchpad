import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const keyPoints = [
  "TRAI DLT registration for Principal Entities",
  "Sender ID (header) registration and approval",
  "Template registration and content matching",
  "Consent and preference management",
  "Operator scrubbing and delivery compliance",
];

const templateTypes = [
  {
    title: "Transactional",
    description: "Critical alerts like OTP, banking, and system notifications.",
  },
  {
    title: "Service – Implicit",
    description: "Service updates to existing customers based on relationship.",
  },
  {
    title: "Service – Explicit",
    description: "Service updates with explicit customer consent.",
  },
  {
    title: "Promotional",
    description: "Marketing messages with consent and time-window restrictions.",
  },
];

const steps = [
  {
    title: "Register Your Entity",
    description: "Complete Principal Entity registration on TRAI DLT platform.",
  },
  {
    title: "Add Headers & Templates",
    description: "Register Sender IDs and submit message templates for approval.",
  },
  {
    title: "Go Live & Monitor",
    description: "Launch compliant campaigns and track performance.",
  },
];

const rules = [
  "Messages must match approved templates and variables",
  "Headers must be registered and mapped to templates",
  "Consent must be captured and stored for marketing",
  "URL and call-to-action content should be registered",
  "Operators apply scrubbing and delivery checks",
];

const DLT = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              DLT Compliance – India (TRAI)
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              TRAI DLT Compliance Made Simple
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cell24x7 helps you stay compliant with India DLT regulations for SMS. From entity registration
              to template approval and consent management, we cover the full lifecycle.
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

      {/* Key Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Key DLT Requirements (India)
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((item) => (
              <div key={item} className="bg-card rounded-2xl p-6 border border-border/50">
                <ClipboardCheck className="w-10 h-10 text-emerald-500 mb-4" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Types */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              DLT Template Categories
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {templateTypes.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50">
                <FileText className="w-8 h-8 text-emerald-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              DLT Onboarding Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-semibold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                TRAI DLT Rules (Summary)
              </h2>
              <p className="text-muted-foreground mb-6">
                DLT compliance requires approved templates, registered headers, and verified consent.
                Operators enforce these checks before delivery.
              </p>
              <ul className="space-y-3">
                {rules.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-emerald-500" />
                <h3 className="font-semibold text-foreground">How Cell24x7 Helps</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                  Entity and header registration support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                  Template creation and approval workflows
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                  DLT-aligned routing and delivery checks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Help With DLT Compliance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We simplify DLT registration, templates, and compliance for your brand.
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

export default DLT;
