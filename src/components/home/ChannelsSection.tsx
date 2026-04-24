import { channels } from "@/config/site";
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Smartphone, 
  Mail, 
  Phone,
  MessageSquare,
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
  MessageSquare,
};

export function ChannelsSection() {
  return (
    <section className="section-padding bg-surface-sunken relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
            Omnichannel Platform
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Every Channel.{" "}
            <span className="gradient-text">One Platform.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with customers on their preferred channels. From WhatsApp to Voice, 
            manage all conversations in one unified inbox.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => {
            const Icon = iconMap[channel.icon];
            return (
              <Link
                key={channel.id}
                to={`/channels#${channel.id}`}
                className="group card-feature"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {channel.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {channel.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {channel.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/channels"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore all channels
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
