import { 
  MessageSquare, 
  ShoppingCart, 
  Headphones, 
  HelpCircle, 
  Award, 
  FileText,
  DollarSign,
  Megaphone,
  Gamepad2,
  Receipt,
  MapPin,
  UserCheck
} from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Assisted sales" },
  { icon: Headphones, label: "Account support" },
  { icon: HelpCircle, label: "Product Enquiries" },
  { icon: ShoppingCart, label: "WhatsApp shopping" },
  { icon: Award, label: "Virtual assistant" },
  { icon: FileText, label: "Automated invoicing" },
  { icon: DollarSign, label: "Banking on the go" },
  { icon: Megaphone, label: "Sales campaigns" },
  { icon: Gamepad2, label: "Quizzes & gamification" },
  { icon: Receipt, label: "Loan approvals" },
  { icon: MapPin, label: "Customer promotions" },
  { icon: UserCheck, label: "Customer KYC" },
];

export function FeatureMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* First row - scrolling left */}
      <div className="flex gap-4 mb-4 animate-marquee">
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border/60 rounded-full whitespace-nowrap shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
          >
            <feature.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{feature.label}</span>
          </div>
        ))}
      </div>
      
      {/* Second row - scrolling right */}
      <div className="flex gap-4 animate-marquee-reverse">
        {[...features.slice(6), ...features.slice(0, 6), ...features.slice(6), ...features.slice(0, 6)].map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border/60 rounded-full whitespace-nowrap shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
          >
            <feature.icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
