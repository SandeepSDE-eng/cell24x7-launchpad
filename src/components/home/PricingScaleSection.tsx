import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Layers, 
  Bot, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Mail,
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PricingScaleSection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/book-demo?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/book-demo");
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 text-indigo-300 text-xs sm:text-sm font-semibold border border-indigo-800 shadow-inner">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Result-Driven CPaaS Pricing
          </div>

          {/* Main Titles */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Plans that scale with you.{" "}
            <span className="block gradient-text mt-2">Pricing tied to your results.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nine channels in every plan. AI agents and predictive intelligence available as packs.{" "}
            <strong className="text-emerald-400 font-semibold">30% of our platform fee is tied to your business KPIs.</strong>
          </p>

          {/* Work Email & Talk to Sales CTA Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input 
                type="email" 
                required
                placeholder="Enter your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition shadow-inner"
              />
            </div>
            <Button 
              type="submit" 
              variant="gradient" 
              size="lg" 
              className="px-6 py-3 font-semibold shadow-lg shadow-indigo-950 gap-2 shrink-0"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> No credit card required • Instant custom ROI calculator setup
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">9 Channels In Every Plan</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              SMS, WhatsApp Business API, Google RCS, Voice Calling, IVR, Email, and Webhooks are included in all standard tiers.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Multi-channel routing
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">AI Agents & Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Add intelligent conversational bots, sentiment analysis, and predictive audience targeting packs whenever you scale.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-purple-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Modular add-on packs
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">30% KPI-Tied Fee</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our growth aligns with yours. 30% of platform fees are strictly tied to achieving your target business metrics & ROI goals.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Performance guarantee
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
