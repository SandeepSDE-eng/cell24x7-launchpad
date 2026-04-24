import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Image, MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import { RCSPreview } from "@/components/previews/RCSPreview";

const features = [
  "Rich media messaging with images and videos",
  "Interactive buttons and carousels",
  "Read receipts and typing indicators",
  "Branded sender verification",
  "Suggested replies and actions",
  "Seamless fallback to SMS",
];

const RCS = () => {
  return (
    <Layout>
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-gradient-to-r from-brand-cyan/90 via-brand-blue/90 to-brand-cyan/80 shadow-md">
        <div className="container-custom">
          <div className="flex items-center gap-3 py-4">
            <Smartphone className="w-6 h-6 text-brand-cyan" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-black drop-shadow-lg tracking-tight border-b-2 border-brand-cyan inline-block pb-2">
              RCS Messaging
            </h1>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-cyan/10 via-brand-blue/10 to-white relative overflow-hidden">
        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center items-center mb-8 md:mb-0">
              <div className="aspect-square max-w-md w-full bg-gradient-to-br from-brand-cyan/10 via-brand-blue/10 to-white rounded-2xl shadow-lg flex items-center justify-center">
                <RCSPreview />
              </div>
            </div>
            <div>
              <p className="text-lg text-brand-blue mb-4 font-medium">
                Rich Communication Services - The next evolution of SMS. Engage customers with rich media, interactive buttons, and branded experiences.
              </p>
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2 text-brand-cyan">Why choose our RCS Messaging?</h3>
                <ul className="list-disc pl-6 text-black">
                  <li>Interactive and engaging customer experiences.</li>
                  <li>Branded messaging with verified sender.</li>
                  <li>Seamless fallback to SMS for maximum reach.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2 text-brand-blue">Features:</h3>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <span className="text-black font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-brand-cyan">Example:</h3>
                <p className="text-black">Send product catalogs, interactive surveys, and branded notifications with read receipts.</p>
              </div>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Steps Section */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">How to Onboard with RCS</h2>
            <p className="text-lg text-brand-cyan">Get started in just a few steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-cyan/20 via-white to-brand-blue/10 rounded-2xl p-6 border border-brand-cyan/30 flex flex-col items-center shadow-md">
              {/* SVG icon for registration */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4"><circle cx="24" cy="24" r="24" fill="#06b6d4"/><path d="M24 14v20M14 24h20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-display text-xl font-bold text-brand-cyan mb-2">Register Business</h3>
              <p className="text-black text-center">Sign up and verify your business for RCS messaging.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/20 via-white to-brand-cyan/10 rounded-2xl p-6 border border-brand-blue/30 flex flex-col items-center shadow-md">
              <Sparkles className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-blue mb-2">Configure Brand</h3>
              <p className="text-black text-center">Set up your logo, colors, and sender details for a branded experience.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-cyan/10 via-white to-brand-blue/20 rounded-2xl p-6 border border-brand-cyan/30 flex flex-col items-center shadow-md">
              <MessageSquare className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-cyan mb-2">Launch Campaigns</h3>
              <p className="text-black text-center">Create and send rich media campaigns to your customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How RCS Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-cyan mb-4">How RCS Works</h2>
            <p className="text-lg text-muted-foreground">A seamless, interactive messaging experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center">
              {/* SVG icon for API */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4"><rect x="8" y="8" width="32" height="32" rx="8" fill="#3b82f6"/><path d="M16 24h16M24 16v16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Connect via API</h3>
              <p className="text-muted-foreground text-center">Integrate your systems with RCS using our robust API.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center">
              <Image className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Send Rich Media</h3>
              <p className="text-muted-foreground text-center">Deliver images, videos, and interactive content directly to users.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Track Engagement</h3>
              <p className="text-muted-foreground text-center">Monitor delivery, read receipts, and user interactions in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-[#f7fafc]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tight inline-block pb-2">
              RCS Benefits
              <span className="block h-1 w-32 mx-auto bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan rounded-full mt-2"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-brand-cyan/40 shadow-md flex flex-col items-center">
              <Image className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-black mb-2">Rich Media</h3>
              <p className="text-black text-center">Send images, videos, and files directly in messages.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-brand-blue/40 shadow-md flex flex-col items-center">
              <MessageSquare className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="font-display text-xl font-bold text-black mb-2">Interactive</h3>
              <p className="text-black text-center">Add buttons, carousels, and quick reply options.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-brand-cyan/40 shadow-md flex flex-col items-center">
              <Sparkles className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-black mb-2">Branded</h3>
              <p className="text-black text-center">Verified sender with your logo and brand colors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-cyan mb-6">
              Ready for Rich Messaging?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Upgrade your customer communications with RCS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/channels">View All Channels</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center">
              <div className="aspect-square max-w-md w-full bg-gradient-to-br from-brand-cyan/10 via-brand-blue/10 to-brand-cyan/5 rounded-2xl shadow-lg flex items-center justify-center">
                <RCSPreview />
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-cyan mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-brand-cyan" />
                RCS Messaging
                <Image className="w-8 h-8 text-brand-blue" />
              </h2>
              <p className="text-lg text-muted-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-brand-cyan" />
                Rich Communication Services - The next evolution of SMS. Engage customers with rich media, interactive buttons, and branded experiences.
              </p>
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-brand-cyan" />
                  <span className="font-bold">Interactive Experiences</span>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-cyan" />
                  <span className="font-bold">Verified Sender</span>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-brand-cyan" />
                  <span className="font-bold">Seamless SMS Fallback</span>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3">
                  <Image className="w-6 h-6 text-brand-blue" />
                  <span className="font-bold">Rich Media Messaging</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-cyan" /> Features
                </h3>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-cyan" /> Example
                </h3>
                <p className="text-muted-foreground">Send product catalogs, interactive surveys, and branded notifications with read receipts.</p>
              </div>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why RCS?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Image className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Rich Media</h3>
              <p className="text-muted-foreground">Send images, videos, and files directly in messages.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <MessageSquare className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Interactive</h3>
              <p className="text-muted-foreground">Add buttons, carousels, and quick reply options.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Sparkles className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Branded</h3>
              <p className="text-muted-foreground">Verified sender with your logo and brand colors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Rich Messaging?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Upgrade your customer communications with RCS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/channels">View All Channels</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RCS;
