import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { channels } from "@/config/site";
import { 
  MessageCircle, 
  Smartphone, 
  Mail, 
  Phone,
  MessageSquare,
  Code,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Check,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Smartphone,
  Mail,
  Phone,
  MessageSquare,
  Code,
};

function RenderChannelMockup({ channelId }: { channelId: string }) {
  if (channelId === "whatsapp") {
    return (
      <div className="w-full h-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between overflow-hidden">
        {/* WhatsApp Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md">
              C24
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-semibold text-sm text-white">
                Cell24x7 Official
                <ShieldCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              </div>
              <p className="text-xs text-emerald-400">Official Meta BSP Verified</p>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono border border-emerald-800">
            ONLINE
          </span>
        </div>

        {/* Messages Body */}
        <div className="my-4 space-y-3">
          <div className="bg-slate-800/90 rounded-2xl rounded-tl-none p-3.5 max-w-[85%] text-xs space-y-2 border border-slate-700/60 shadow">
            <p className="font-semibold text-emerald-400">⚡ Order Dispatched</p>
            <p className="text-slate-200">Hi Rahul, your order <span className="font-mono text-cyan-300">#C24-9982</span> is on the way! Expected delivery by 5:00 PM today.</p>
            <div className="text-[10px] text-slate-400 text-right">10:42 AM • Sent</div>
          </div>

          <div className="space-y-1.5 pl-4">
            <div className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-2 px-3 text-xs text-center font-medium shadow transition cursor-pointer flex items-center justify-center gap-2">
              <Zap className="w-3.5 h-3.5" /> Track Live Delivery
            </div>
            <div className="bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl py-1.5 px-3 text-xs text-center font-medium border border-slate-700 cursor-pointer">
              Modify Delivery Time
            </div>
          </div>
        </div>

        {/* WhatsApp Footer badge */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-400" /> 99.9% Delivery Guarantee
          </span>
          <span className="font-mono text-emerald-400 font-semibold">Meta API v19.0</span>
        </div>
      </div>
    );
  }

  if (channelId === "sms") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between">
        {/* SMS Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-sm text-cyan-300">TRAI DLT Verified Pipe</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono border border-cyan-800">
            HEADER: AX-CELL24
          </span>
        </div>

        {/* SMS Body */}
        <div className="my-4 space-y-3">
          <div className="bg-slate-900 rounded-xl p-3.5 text-xs border border-cyan-900/40 space-y-1.5 shadow">
            <div className="flex justify-between text-[10px] text-cyan-400 font-mono font-medium">
              <span>DLT Template ID: 17071689201</span>
              <span>100% Delivered</span>
            </div>
            <p className="text-slate-200">Your Cell24x7 OTP for login is <strong className="text-cyan-300 font-mono text-sm tracking-wider">948210</strong>. Valid for 10 minutes. Do not share with anyone.</p>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-3 text-xs border border-slate-800 space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold text-[11px]">Transactional Alert</p>
            <p className="text-slate-300 text-[11px]">Alert: INR 4,999.00 credited to account XX8291. Ref ID: C24TXN9920.</p>
          </div>
        </div>

        {/* SMS Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Airtel • Jio • Vi Direct Operator Route
          </span>
          <span className="font-mono text-slate-300">&lt;2s Latency</span>
        </div>
      </div>
    );
  }

  if (channelId === "rcs") {
    return (
      <div className="w-full h-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between">
        {/* RCS Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold text-sm text-indigo-200">Google RCS Business</span>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 font-medium">
            Rich Card Carousel
          </span>
        </div>

        {/* RCS Content Card */}
        <div className="my-3 bg-slate-950 rounded-xl border border-indigo-900/40 p-3 overflow-hidden shadow-inner">
          <div className="h-20 w-full rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-3 flex flex-col justify-end">
            <span className="bg-slate-950/80 text-white font-bold text-xs px-2 py-0.5 rounded w-fit">
              FESTIVE OFFER ⚡ 40% OFF
            </span>
          </div>
          <div className="mt-2.5 space-y-2">
            <h4 className="font-semibold text-xs text-white">Cell24x7 Enterprise Suite Upgrade</h4>
            <p className="text-[11px] text-slate-300">Upgrade to unlimited multi-channel broadcasting with dedicated AI routing.</p>
            <div className="flex gap-2 pt-1">
              <button className="flex-1 py-1.5 rounded-md bg-indigo-600 text-white font-semibold text-[11px] hover:bg-indigo-500">
                Claim Offer
              </button>
              <button className="flex-1 py-1.5 rounded-md bg-slate-800 text-slate-200 text-[11px] border border-slate-700">
                Explore Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Verified Sender Badge Included</span>
          <span className="text-indigo-400 font-semibold">10x Engagement</span>
        </div>
      </div>
    );
  }

  if (channelId === "voice") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between">
        {/* Voice Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-400" />
            <span className="font-semibold text-sm text-purple-300">Voice API & AI Bot</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">
            IVR CALL ACTIVE
          </span>
        </div>

        {/* Voice Animation & IVR Nodes */}
        <div className="my-4 space-y-3">
          <div className="bg-slate-900 rounded-xl p-3 border border-purple-900/40 text-center space-y-2">
            <div className="flex items-center justify-center gap-1 h-8">
              {[40, 70, 100, 60, 90, 40, 80, 50, 90, 30].map((h, idx) => (
                <div 
                  key={idx} 
                  className="w-1.5 bg-purple-500 rounded-full animate-pulse" 
                  style={{ height: `${h}%`, animationDelay: `${idx * 0.15}s` }} 
                />
              ))}
            </div>
            <p className="text-xs text-purple-300 font-mono font-medium">AI Bot: "Press 1 for Sales, Press 2 for Support"</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-slate-300">
              <span className="block text-slate-400 text-[10px]">Speech Recognition</span>
              <strong className="text-white">99.4% Accuracy</strong>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-slate-300">
              <span className="block text-slate-400 text-[10px]">Call Capacity</span>
              <strong className="text-purple-300">10,000+ Calls/Min</strong>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-purple-400">
            <Bot className="w-3.5 h-3.5" /> Neural Voice Synthesis
          </span>
          <span className="font-mono text-slate-300">SIP & WebRTC</span>
        </div>
      </div>
    );
  }

  if (channelId === "custom") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between">
        {/* Code Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-sm text-amber-300">Unified REST API Engine</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-mono">
            POST /v1/dispatch
          </span>
        </div>

        {/* Code Block */}
        <div className="my-3 bg-slate-900 rounded-xl p-3.5 font-mono text-[11px] text-slate-300 border border-slate-800 overflow-x-auto">
          <div className="text-slate-500">// Multi-channel dispatch payload</div>
          <div>{'{'}</div>
          <div className="pl-4"><span className="text-amber-400">"to"</span>: <span className="text-emerald-300">"+919876543210"</span>,</div>
          <div className="pl-4"><span className="text-amber-400">"channels"</span>: [<span className="text-emerald-300">"whatsapp"</span>, <span className="text-emerald-300">"rcs"</span>, <span className="text-emerald-300">"sms"</span>],</div>
          <div className="pl-4"><span className="text-amber-400">"fallback_enabled"</span>: <span className="text-cyan-300">true</span>,</div>
          <div className="pl-4"><span className="text-amber-400">"template_id"</span>: <span className="text-emerald-300">"ORDER_ALERT_V2"</span></div>
          <div>{'}'}</div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="text-emerald-400 font-mono font-medium">HTTP 200 OK • 42ms</span>
          <span className="text-amber-400 font-semibold">Automatic Channel Fallback</span>
        </div>
      </div>
    );
  }

  // Email API visual
  return (
    <div className="w-full h-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl border border-slate-800 flex flex-col justify-between">
      {/* Email Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-rose-400" />
          <span className="font-semibold text-sm text-rose-300">Email Messaging API</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 font-mono">
          HIGH DELIVERABILITY
        </span>
      </div>

      {/* Email Content Visual */}
      <div className="my-3 space-y-2.5">
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5">
          <div className="text-slate-400 text-[10px]">From: <span className="text-slate-200">updates@cell24x7.com</span></div>
          <div className="text-slate-400 text-[10px]">Subject: <span className="text-white font-medium">Your Monthly CPaaS Intelligence Report</span></div>
          <div className="pt-1.5 border-t border-slate-900 text-slate-300 text-[11px] leading-relaxed">
            Here is your real-time analytics summary for 1.2M transactional messages delivered today.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <span className="text-slate-400 block">Deliverability</span>
            <span className="font-bold text-emerald-400 text-xs">99.7%</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <span className="text-slate-400 block">Open Rate</span>
            <span className="font-bold text-rose-400 text-xs">48.2%</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <span className="text-slate-400 block">Click Rate</span>
            <span className="font-bold text-cyan-400 text-xs">22.8%</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span>Dedicated IP Warmup & SPF/DKIM</span>
        <span className="text-rose-400 font-semibold">Zero Spam Drop</span>
      </div>
    </div>
  );
}

const Channels = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              Communication Channels
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Connect on{" "}
              <span className="gradient-text">Every Channel</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Reach your customers where they are. From WhatsApp to Voice and Unified APIs, Cell24x7 
              integrates all enterprise CPaaS communication channels into one powerful platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {channels.map((channel) => {
                const Icon = iconMap[channel.icon];
                return (
                  <a
                    key={channel.id}
                    href={`#${channel.id}`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${channel.color} text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {channel.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Channels Detail */}
      <section className="section-padding">
        <div className="container-custom">
          {channels.map((channel, index) => {
            const Icon = iconMap[channel.icon];
            const isReversed = index % 2 === 1;
            
            return (
              <div
                key={channel.id}
                id={channel.id}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16 mb-24 last:mb-0 scroll-mt-24`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 shadow-lg shadow-primary/10`}>
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {channel.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {channel.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {channel.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="gradient" size="lg" asChild>
                      <Link to="/book-demo">
                        Get Started with {channel.name.split(" ")[0]}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/docs">View API Docs</Link>
                    </Button>
                  </div>
                </div>

                {/* Rich Channel Product Visual Mockup */}
                <div className="flex-1 w-full max-w-lg">
                  <div className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${channel.color} p-1 shadow-2xl transition-transform duration-300 hover:scale-[1.02]`}>
                    <RenderChannelMockup channelId={channel.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration CTA */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              All Channels, One CPaaS Engine
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop switching between platforms. Cell24x7 brings SMS, WhatsApp, RCS, Voice, and Email 
              into a single, unified API with intelligent fallback and real-time DLR analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/docs">Explore API Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Channels;
