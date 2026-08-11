import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Scale,
  ShieldAlert,
  Server,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  Building,
  DollarSign,
  Ban,
  Clock,
  Award,
} from "lucide-react";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("terms-acceptance");

  const sections = [
    { id: "terms-acceptance", label: "1. Acceptance of Terms" },
    { id: "services", label: "2. Services & Platform Access" },
    { id: "acceptable-use", label: "3. Acceptable Use Policy" },
    { id: "billing", label: "4. Billing & Messaging Credits" },
    { id: "whatsapp-dlt", label: "5. WhatsApp & DLT Rules" },
    { id: "ip-rights", label: "6. Intellectual Property" },
    { id: "liability-sla", label: "7. Liability & 99.9% SLA" },
    { id: "termination", label: "8. Termination & Governing Law" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* HERO BANNER SECTION */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-indigo-400" /> Platform Master Service Agreement
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Terms of Service & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">User Agreement</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            These terms govern your access to and use of Cell24x7 Media Technologies Pvt. Ltd.’s omnichannel messaging platform, APIs, WhatsApp Business solutions, AI VoiceBots, and cloud services.
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-medium">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> 99.9% Uptime SLA Guaranteed
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Anti-Spam & Fair Usage Policy
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              Last Updated: August 08, 2026
            </span>
          </div>
        </div>
      </section>

      {/* MAIN DOCUMENT BODY WITH STICKY TOC */}
      <section className="py-12 md:py-20 bg-background text-foreground">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* SIDEBAR TABLE OF CONTENTS */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-5 rounded-2xl bg-card border border-border/60 shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" /> Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeSection === sec.id
                          ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Have Legal Questions?</p>
                  <p>Contact our legal compliance desk for contract or SLA details.</p>
                  <a
                    href="mailto:legal@cell24x7.com"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline text-xs"
                  >
                    legal@cell24x7.com &rarr;
                  </a>
                </div>
              </div>
            </aside>

            {/* CONTENT ARTICLES */}
            <main className="lg:col-span-8 space-y-10 text-left">
              
              {/* SECTION 1 */}
              <article id="terms-acceptance" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Acceptance of Terms</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  By registering for an account, accessing the dashboard at cell24x7.com, integrating our REST APIs, or utilizing any services provided by <strong className="text-foreground">Cell24x7 Media Technologies Pvt. Ltd.</strong>, you agree to be bound by these Terms of Service.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you are entering into this Agreement on behalf of a company, organization, or legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </article>

              {/* SECTION 2 */}
              <article id="services" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Services & Platform Access</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cell24x7 provides a SaaS omnichannel communication platform offering WhatsApp Business API hosting, AI VoiceBot IVR, RCS Rich Messaging, Bulk SMS gateways, Email broadcast tools, and DLT compliance management.
                </p>

                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 text-xs space-y-2">
                  <span className="font-bold text-foreground">Account Credentials & Responsibility:</span>
                  <p className="text-muted-foreground">
                    You are solely responsible for maintaining the confidentiality of your account credentials, API keys, and secret tokens. Any activities occurring under your account credentials are your responsibility.
                  </p>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="acceptable-use" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Acceptable Use & Anti-Spam Policy</h2>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs flex items-start gap-3">
                  <Ban className="w-5 h-5 shrink-0 text-amber-500 mt-0.5" />
                  <div>
                    <span className="font-bold">Strict Zero-Spam Policy:</span> Sending unsolicited messages, illegal content, phishing attempts, fraudulent schemes, or prohibited goods through Cell24x7 will result in immediate account suspension without refund.
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  You agree to comply with all applicable local, national, and international laws regarding electronic communications, user opt-in consent, and consumer protection.
                </p>
              </article>

              {/* SECTION 4 */}
              <article id="billing" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Billing, Credits & Payment Terms</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/30 space-y-1.5">
                    <span className="font-bold text-foreground flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-emerald-500" /> Messaging Credits
                    </span>
                    <p className="text-muted-foreground">
                      Prepaid messaging credits (SMS, WhatsApp conversations, Voice minutes) are non-refundable and valid according to subscription plan terms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/40 border border-border/30 space-y-1.5">
                    <span className="font-bold text-foreground flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-indigo-500" /> Subscriptions & Renewal
                    </span>
                    <p className="text-muted-foreground">
                      SaaS monthly or annual subscription plans renew automatically unless cancelled prior to the renewal date.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="whatsapp-dlt" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">WhatsApp API & DLT Provider Rules</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  WhatsApp Business API services are subject to Meta’s Commerce Policy and Business Terms. Commercial SMS and Voice traffic in India must strictly adhere to DLT header registration, template approvals, and TRAI TCCCPR guidelines.
                </p>
              </article>

              {/* SECTION 6 */}
              <article id="ip-rights" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    6
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Intellectual Property Rights</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  All rights, titles, and interests in the Cell24x7 platform, technology, code, logos, trademarks, and documentation remain the exclusive intellectual property of Cell24x7 Media Technologies Pvt. Ltd.
                </p>
              </article>

              {/* SECTION 7 */}
              <article id="liability-sla" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    7
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Limitation of Liability & 99.9% SLA</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cell24x7 strives for 99.9% platform availability. However, Cell24x7 is not liable for indirect, incidental, or consequential damages resulting from carrier network outages, third-party API downtime (e.g. Meta / telecom networks), or unauthorized account access.
                </p>
              </article>

              {/* SECTION 8 */}
              <article id="termination" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    8
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Termination & Governing Law</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-card to-card border border-indigo-500/20 space-y-4 text-xs">
                  <div className="font-bold text-sm text-foreground">
                    Legal Desk — Cell24x7 Media Technologies Pvt. Ltd.
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-indigo-500" />
                      <span>Email: <strong>legal@cell24x7.com</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-indigo-500" />
                      <span>Phone: <strong>+91 87797 21034</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs gap-2">
                    <Link to="/book-demo">
                      Contact Sales & Legal <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
