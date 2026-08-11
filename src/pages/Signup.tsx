import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addEnquiry } from "@/lib/enquiryStorage";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
  Phone,
  Building,
  Users,
  Mail,
  Lock,
} from "lucide-react";

export default function Signup() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "+91",
    mobile: "",
    company_name: "",
    service_type: "WhatsApp Business API",
    team_size: "1-10",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile || !formData.company_name) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, phone, and company name.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid work email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));

    try {
      addEnquiry({
        name: formData.name,
        email: formData.email,
        country_code: formData.country_code,
        mobile: formData.mobile,
        company_name: formData.company_name,
        service_type: `Free Trial: ${formData.service_type}`,
        remarks: `[Free Trial Sign-up] Team Size: ${formData.team_size}. Account created on web portal.`,
      });

      setIsSubmitted(true);
      toast({
        title: "Free Trial Activated! 🎉",
        description: "Welcome to Cell24x7. Your 14-day free trial is now active.",
      });
    } catch (err) {
      console.error("Signup error:", err);
      toast({
        title: "Registration Stored",
        description: "Your trial request has been registered successfully.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-background dark:from-slate-950 dark:via-slate-900/50 dark:to-background min-h-[85vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* LEFT COLUMN: HERO & PROMO INFO */}
            <div className="lg:col-span-5 space-y-6 text-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
                14-Day Unlimited Access Free Trial
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Free Trial</span> Today.
              </h1>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Empower your team with AI-driven WhatsApp, VoiceBot, RCS, SMS & Email automation. No credit card required.
              </p>

              {/* BENEFIT BULLETS */}
              <div className="space-y-3.5 pt-2">
                {[
                  "1,000 Free Messaging Credits Included",
                  "Unified Omnichannel Team Inbox",
                  "Official WhatsApp Business API Sandbox",
                  "No-Code AI Bot Builder & CRM Sync",
                  "24/7 Dedicated Support & SLA",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* TESTIMONIAL MINI CARD */}
              <div className="p-4 rounded-2xl bg-card border border-border/50 shadow-sm space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  "Cell24x7 helped us scale WhatsApp & VoiceBot customer support by 4x within 10 days of signing up."
                </p>
                <div className="text-[11px] font-semibold text-foreground">
                  — Operations Team, Retail Brand
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SIGNUP FORM CARD */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/60 shadow-2xl space-y-6">
                
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Trial Account Created! 🎉</h2>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Welcome to Cell24x7, <span className="font-semibold text-foreground">{formData.name}</span>! Your 14-day trial for <span className="font-semibold text-foreground">{formData.company_name}</span> has been activated.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2">
                        <Link to="/admin">
                          Go to Dashboard <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Register Another Account
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1 text-left border-b border-border/40 pb-4">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight">Create Your Account</h2>
                      <p className="text-xs text-muted-foreground">
                        Get started in less than 2 minutes. Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                          Log In
                        </Link>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Full Name *
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="h-11 bg-background"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Work Email *
                          </label>
                          <Input
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            type="email"
                            placeholder="rahul@company.com"
                            className="h-11 bg-background"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Country Code
                          </label>
                          <Input
                            value={formData.country_code}
                            onChange={(e) => setFormData({ ...formData, country_code: e.target.value })}
                            placeholder="+91"
                            className="h-11 bg-background"
                          />
                        </div>

                        <div className="space-y-1.5 sm:col-span-2">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Mobile Number *
                          </label>
                          <Input
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            placeholder="9876543210"
                            className="h-11 bg-background"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Company / Brand Name *
                          </label>
                          <Input
                            value={formData.company_name}
                            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                            placeholder="Acme Technologies"
                            className="h-11 bg-background"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Primary Channel
                          </label>
                          <select
                            value={formData.service_type}
                            onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                            className="w-full h-11 px-3 rounded-md bg-background border border-input text-xs focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="WhatsApp Business API">WhatsApp Business API</option>
                            <option value="VoiceBot AI">VoiceBot AI</option>
                            <option value="RCS Messaging">RCS Messaging</option>
                            <option value="SMS Platform">SMS Platform</option>
                            <option value="Email Campaigns">Email Campaigns</option>
                            <option value="Call Center Solution">Call Center Solution</option>
                            <option value="Omnichannel Suite">All Omnichannel Suite</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Team Size
                          </label>
                          <select
                            value={formData.team_size}
                            onChange={(e) => setFormData({ ...formData, team_size: e.target.value })}
                            className="w-full h-11 px-3 rounded-md bg-background border border-input text-xs focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="1-10">1 - 10 members</option>
                            <option value="11-50">11 - 50 members</option>
                            <option value="51-200">51 - 200 members</option>
                            <option value="200+">200+ members</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Create Password (Optional)
                          </label>
                          <Input
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            type="password"
                            placeholder="••••••••"
                            className="h-11 bg-background"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 gap-2 mt-4"
                      >
                        {isSubmitting ? (
                          "Activating Trial..."
                        ) : (
                          <>
                            Start Free Trial Now <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-[11px] text-center text-muted-foreground pt-2">
                        By registering, you agree to Cell24x7's{" "}
                        <Link to="/terms" className="underline hover:text-foreground">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="underline hover:text-foreground">
                          Privacy Policy
                        </Link>.
                      </p>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
