import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  Calendar,
  Users,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { siteConfig, channels } from "@/config/site";

const BookDemo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.company) {
      toast({
        title: "Please fill required fields",
        description: "First name, email, and company are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Save to localStorage (persist submissions)
    try {
      const key = "cell24x7_demo_requests";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const payload = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        teamSize: formData.teamSize,
        service: formData.service,
        message: formData.message,
      };
      existing.unshift(payload);
      localStorage.setItem(key, JSON.stringify(existing));

      toast({
        title: "Demo Request Submitted! 🎉",
        description: "We've stored your request and will reach out within 24 hours.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission saved locally",
        description: "Saved to local storage (demo mode).",
      });
    }
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      teamSize: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero-subtle" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-brand-cyan/5" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Book a Demo
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                See Cell24x7{" "}
                <span className="gradient-text">in Action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get a personalized demo of our omnichannel platform. Our experts will 
                show you how Cell24x7 can transform your customer communication.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-12">
                {[
                  "30-minute personalized walkthrough",
                  "See features tailored to your industry",
                  "Get answers to all your questions",
                  "Receive a custom pricing proposal",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Options */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="font-semibold text-foreground mb-4">
                  Prefer to reach out directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request Your Demo
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        // placeholder removed
                        className="text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        // placeholder removed
                        className="text-black"
                      />
                    </div>
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
                      // placeholder removed
                      className="text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      // placeholder removed
                      className="text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      // placeholder removed
                      className="text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Team Size
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {["1-5", "6-20", "21-50", "50+"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({ ...formData, teamSize: size })}
                          className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                            formData.teamSize === size
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-md border border-border/40 px-3 py-2 text-sm text-black"
                    >
                      <option value="">Select a service</option>
                      {channels.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What would you like to discuss?
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      // placeholder removed
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book My Demo
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-surface-sunken">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-display text-3xl font-bold gradient-text">5,000+</span>
              </div>
              <p className="text-muted-foreground">Businesses trust Cell24x7</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-6 h-6 text-brand-cyan" />
                <span className="font-display text-3xl font-bold gradient-text">10M+</span>
              </div>
              <p className="text-muted-foreground">Messages delivered daily</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="font-display text-3xl font-bold gradient-text">99.9%</span>
              </div>
              <p className="text-muted-foreground">Platform uptime</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookDemo;
