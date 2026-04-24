import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { channels } from "@/config/site";
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Smartphone, 
  Mail, 
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Instagram,
  Facebook,
  Smartphone,
  Mail,
  Phone,
};

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
              Reach your customers where they are. From WhatsApp to Voice, Cell24x7 
              integrates all major communication channels into one powerful platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {channels.map((channel) => {
                const Icon = iconMap[channel.icon];
                return (
                  <a
                    key={channel.id}
                    href={`#${channel.id}`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${channel.color} text-white text-sm font-medium hover:opacity-90 transition-opacity`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {channel.name.split(" ")[0]}
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
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 mb-24 last:mb-0 scroll-mt-24`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6`}>
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {channel.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {channel.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {channel.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="gradient" asChild>
                    <Link to="/book-demo">
                      Get Started with {channel.name.split(" ")[0]}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className={`relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br ${channel.color} p-1`}>
                    <div className="w-full h-full bg-card rounded-[calc(1.5rem-4px)] flex items-center justify-center">
                  <div className="text-center p-8">
                        {Icon && <Icon className="w-20 h-20 mx-auto mb-6 text-primary" />}
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-4 bg-secondary rounded-full mx-auto" style={{ width: `${100 - i * 15}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
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
              All Channels, One Inbox
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop switching between apps. Cell24x7 brings all your customer conversations 
              into a single, unified inbox with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Channels;
