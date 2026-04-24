import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Users, 
  Code, 
  ArrowRight, 
  CheckCircle,
  DollarSign,
  Trophy,
  Headphones
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const partnerTypes = [
  {
    id: "agency",
    name: "Agency Partner",
    icon: Building2,
    description: "Marketing and digital agencies looking to offer Cell24x7 to their clients",
    benefits: [
      "White-label solution",
      "Dedicated partner manager",
      "Priority support",
      "Co-marketing opportunities",
    ],
  },
  {
    id: "reseller",
    name: "Reseller Partner",
    icon: Users,
    description: "Sell Cell24x7 licenses and earn recurring commissions",
    benefits: [
      "Up to 30% recurring commission",
      "Sales enablement tools",
      "Deal registration",
      "Quarterly bonuses",
    ],
  },
  {
    id: "tech",
    name: "Technology Partner",
    icon: Code,
    description: "Build integrations and extend the Cell24x7 platform",
    benefits: [
      "API access",
      "Technical documentation",
      "Co-development support",
      "Marketplace listing",
    ],
  },
];

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnerType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2 business days.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      partnerType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Partner Program
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow Together with{" "}
              <span className="gradient-text">Cell24x7</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our partner ecosystem and unlock new revenue streams while helping 
              businesses transform their customer communication.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {partnerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.id}
                  className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Benefits
              </h2>
              <p className="text-muted-foreground">
                Everything you need to succeed as a Cell24x7 partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Margins</h3>
                <p className="text-sm text-muted-foreground">
                  Earn up to 30% recurring commission on every sale
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sales Enablement</h3>
                <p className="text-sm text-muted-foreground">
                  Access to training, demos, and marketing materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Partner manager and priority technical support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section className="section-padding bg-surface-sunken" id="apply">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Become a Partner
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll be in touch within 2 business days
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name *
                </label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Partner Type *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {partnerTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, partnerType: type.id })}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        formData.partnerType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <type.icon className={`w-6 h-6 mx-auto mb-2 ${
                        formData.partnerType === type.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className="text-sm font-medium">{type.name.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your business
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What's your current business model? What are you hoping to achieve?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
