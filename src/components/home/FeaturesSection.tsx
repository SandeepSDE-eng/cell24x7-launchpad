import { useState } from "react";
import { features } from "@/config/site";
import { 
  Inbox, 
  Bot, 
  Send, 
  Users, 
  UserCheck, 
  BarChart3, 
  Plug,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VideoModal, WatchDemoButton } from "@/components/VideoModal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Inbox,
  Bot,
  Send,
  Users,
  UserCheck,
  BarChart3,
  Plug,
};

export function FeaturesSection() {
  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    videoUrl?: string;
    hasVideo: boolean;
  }>({
    isOpen: false,
    title: "",
    description: "",
    videoUrl: undefined,
    hasVideo: false,
  });

  const openVideoModal = (feature: typeof features[0]) => {
    setActiveVideo({
      isOpen: true,
      title: feature.name,
      description: feature.demoVideo?.shortDescription || feature.description,
      videoUrl: feature.demoVideo?.url,
      hasVideo: feature.demoVideo?.hasVideo || false,
    });
  };

  const closeVideoModal = () => {
    setActiveVideo((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Powerful Features
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Win at Conversations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI-powered automation to deep analytics, Cell24x7 gives you the tools 
            to deliver exceptional customer experiences at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.slice(0, 4).map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Watch Demo CTA */}
                    <WatchDemoButton onClick={() => openVideoModal(feature)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.slice(4).map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group p-6 rounded-2xl bg-secondary/50 hover:bg-card border border-transparent hover:border-border/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/features">
              Explore All Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={activeVideo.isOpen}
        onClose={closeVideoModal}
        title={activeVideo.title}
        description={activeVideo.description}
        videoUrl={activeVideo.videoUrl}
        hasVideo={activeVideo.hasVideo}
      />
    </section>
  );
}
