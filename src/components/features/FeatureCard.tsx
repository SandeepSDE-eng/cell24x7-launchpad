import { CheckCircle } from "lucide-react";
import { InlineDemoVideo } from "@/components/InlineDemoVideo";
import { 
  Inbox, 
  Bot, 
  Send, 
  Users, 
  UserCheck, 
  BarChart3, 
  Plug 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Inbox,
  Bot,
  Send,
  Users,
  UserCheck,
  BarChart3,
  Plug,
};

interface FeatureCardProps {
  feature: {
    id: string;
    name: string;
    description: string;
    icon: string;
    benefits: string[];
    demoVideo?: {
      url?: string;
      hasVideo: boolean;
      shortDescription: string;
    };
  };
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon];

  return (
    <div
      id={feature.id}
      className="group rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Video/GIF at Top */}
      <div className="w-full">
        <InlineDemoVideo
          videoUrl={feature.demoVideo?.url}
          hasVideo={feature.demoVideo?.hasVideo || false}
          featureName={feature.name}
          className="rounded-none border-0 shadow-none"
        />
      </div>

      {/* Content Below */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
              {feature.name}
            </h3>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-5 leading-relaxed">
          {feature.description}
        </p>
        
        {/* Benefits Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {feature.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span className="text-foreground text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
