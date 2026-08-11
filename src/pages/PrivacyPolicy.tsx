import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  Lock,
  Database,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Building,
  Key,
  Layers,
  ArrowRight,
  Sparkles,
  Server,
  Globe,
  UserCheck,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "1. Overview & Scope" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "processing", label: "3. Channel Data Processing" },
    { id: "security", label: "4. Data Security & Storage" },
    { id: "sharing", label: "5. Third-Party Sharing" },
    { id: "dlt", label: "6. DLT & Regulatory Compliance" },
    { id: "rights", label: "7. User Rights & Controls" },
    { id: "contact", label: "8. Grievance Officer & Contact" },
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise Privacy & Security Protocol
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Privacy Policy & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Data Standards</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Cell24x7 Media Technologies Pvt. Ltd. is committed to maintaining the highest standards of data security, user privacy, and compliance across WhatsApp Business API, VoiceBot, RCS, SMS, and Email messaging solutions.
          </p>

          {/* COMPLIANCE BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-medium">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-indigo-400" /> ISO 27001 Standards
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" /> DPDP & GDPR Ready
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> TRAI DLT Compliant
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
                  <p className="font-semibold text-foreground">Need Privacy Assistance?</p>
                  <p>Our Data Protection Team is available 24/7 for enterprise inquiries.</p>
                  <a
                    href="mailto:privacy@cell24x7.com"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline text-xs"
                  >
                    privacy@cell24x7.com &rarr;
                  </a>
                </div>
              </div>
            </aside>

            {/* CONTENT ARTICLES */}
            <main className="lg:col-span-8 space-y-10 text-left">
              
              {/* SECTION 1 */}
              <article id="overview" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Overview & Scope of Privacy</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  This Privacy Policy governs the manner in which <strong className="text-foreground">Cell24x7 Media Technologies Pvt. Ltd.</strong> ("Cell24x7", "We", "Us", "Our") collects, uses, maintains, and discloses information collected from users, clients, enterprise partners, and end-consumers utilizing the Cell24x7 omnichannel platform (accessible via cell24x7.com and APIs).
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  By accessing or utilizing our communication solutions—including WhatsApp Business API, AI VoiceBots, RCS Rich Messaging, Enterprise SMS, Email Automation, and DLT Services—you acknowledge and agree to the data practices described in this Privacy Policy.
                </p>
              </article>

              {/* SECTION 2 */}
              <article id="collection" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Information We Collect</h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  We collect information to provide robust, scalable, and compliant communication services:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/30 space-y-2">
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-indigo-500" /> Account & Client Data
                    </div>
                    <ul className="space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Full Name & Business Contact Details</li>
                      <li>Official Business Email & Phone Number</li>
                      <li>Company Registration & GSTIN / Entity Proofs</li>
                      <li>Billing Address & Payment Transactions</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/40 border border-border/30 space-y-2">
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-emerald-500" /> Messaging & Logs Data
                    </div>
                    <ul className="space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Sender ID / Headers & Template Records</li>
                      <li>Delivery Reports (DLR), Time-stamps & Status</li>
                      <li>Recipient Phone Numbers & Country Codes</li>
                      <li>API Endpoint Metadata & Call Logs</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="processing" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Omnichannel Data Processing</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Different communication channels handle data according to channel-specific security protocols:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                    <span className="font-bold text-indigo-500 text-sm">WhatsApp Business API Data</span>
                    <p className="text-muted-foreground">
                      Messages transmitted via WhatsApp API utilize Meta’s secure Cloud API servers with end-to-end encryption transport. Media files and conversation histories are stored strictly in accordance with Meta’s Business Data Terms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                    <span className="font-bold text-emerald-500 text-sm">VoiceBot & Cloud Telephony Data</span>
                    <p className="text-muted-foreground">
                      Voice call recordings, IVR transcripts, and speech-to-text metadata are stored on encrypted cloud volumes with strict role-based access control (RBAC).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                    <span className="font-bold text-cyan-500 text-sm">SMS & RCS Messaging Data</span>
                    <p className="text-muted-foreground">
                      SMS and RCS traffic are routed through licensed telecom operators. Message templates and recipient consent records are processed in compliance with TRAI regulations.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="security" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Data Security & Storage Architecture</h2>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs flex items-start gap-3">
                  <Lock className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <span className="font-bold">Zero Data Selling Policy:</span> We never sell, rent, or trade your personal or business data to third-party advertisers or data brokers under any circumstances.
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  We employ enterprise-grade security measures including 256-bit AES encryption at rest, TLS 1.3 encryption in transit, strict multi-factor authentication (MFA), network firewalls, and regular vulnerability scanning.
                </p>
              </article>

              {/* SECTION 5 */}
              <article id="sharing" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Third-Party Sharing & Partners</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data may only be shared with authorized third parties under the following strict conditions:
                </p>

                <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-5">
                  <li><strong>Telecom & Carrier Partners:</strong> Direct carrier connectivity for delivery of SMS, RCS, and Voice traffic.</li>
                  <li><strong>Meta & WhatsApp Cloud:</strong> Official API processing for WhatsApp Business accounts.</li>
                  <li><strong>Legal & Regulatory Authorities:</strong> Only when required by lawful court orders, government requests, or statutory obligations.</li>
                </ul>
              </article>

              {/* SECTION 6 */}
              <article id="dlt" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    6
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">DLT & TRAI Regulatory Compliance (India)</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  In compliance with TRAI (Telecom Regulatory Authority of India) TCCCPR guidelines, all commercial SMS and Voice content must be registered on DLT (Distributed Ledger Technology) platforms. Sender IDs, headers, and consent templates are maintained in compliance with National Customer Preference Register (NCPR) guidelines.
                </p>
              </article>

              {/* SECTION 7 */}
              <article id="rights" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    7
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">User Rights & Control</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have full rights over your data, including the right to access, rectify, request erasure (Right to be Forgotten), or export your messaging and contact datasets at any time through your account controls.
                </p>
              </article>

              {/* SECTION 8 */}
              <article id="contact" className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    8
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Grievance Officer & Contact Details</h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  If you have any questions, concerns, or grievances regarding this Privacy Policy or data processing, please reach out to our designated Data Protection Officer:
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-card to-card border border-indigo-500/20 space-y-4 text-xs">
                  <div className="font-bold text-sm text-foreground">
                    Cell24x7 Media Technologies Pvt. Ltd.
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-indigo-500" />
                      <span>Email: <strong>privacy@cell24x7.com</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-indigo-500" />
                      <span>Phone: <strong>+91 87797 21034</strong></span>
                    </div>
                    <div className="sm:col-span-2 flex items-start gap-2 pt-1">
                      <Building className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Address: Phoenix Marketcity, No.3B-05, Paragon Plaza, Kurla West, Mumbai, Maharashtra 400070</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs gap-2">
                    <Link to="/book-demo">
                      Contact Support Team <ArrowRight className="w-4 h-4" />
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
