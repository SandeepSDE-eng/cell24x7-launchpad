import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { pricing } from "@/config/site";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Simple Pricing
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Plans that{" "}
              <span className="gradient-text">Scale with You</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Start free, upgrade when you're ready. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-2 bg-secondary rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  !isYearly ? "bg-card text-foreground shadow-md" : "text-muted-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  isYearly ? "bg-card text-foreground shadow-md" : "text-muted-foreground"
                )}
              >
                Yearly
                <span className="px-2 py-0.5 bg-brand-cyan/20 text-brand-cyan text-xs font-semibold rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding -mt-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                  plan.popular
                    ? "bg-card border-primary shadow-xl scale-105 z-10"
                    : "bg-card border-border/50 hover:border-primary/30 hover:shadow-lg"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 gradient-hero rounded-full text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.price.monthly ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-foreground">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="font-display text-4xl font-bold text-foreground">
                      Custom
                    </div>
                  )}
                  {isYearly && plan.price.monthly && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                  className="w-full mb-8"
                  asChild
                >
                  <Link to={plan.name === "Enterprise" ? "/book-demo" : "/signup"}>
                    {plan.cta}
                    {plan.name !== "Enterprise" && <ArrowRight className="w-4 h-4" />}
                  </Link>
                </Button>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare Plans
            </h2>
            <p className="text-muted-foreground">
              Find the perfect plan for your business needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Feature</th>
                  {pricing.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-6 font-semibold text-foreground">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Contacts", values: ["1,000", "10,000", "50,000", "Unlimited"] },
                  { name: "Team Members", values: ["2", "10", "Unlimited", "Unlimited"] },
                  { name: "Channels", values: ["3", "All", "All + Premium", "All + Custom"] },
                  { name: "AI Automation", values: ["Basic", "Advanced", "AI-Powered", "Custom AI"] },
                  { name: "API Access", values: ["—", "✓", "✓", "✓"] },
                  { name: "Webhooks", values: ["—", "—", "✓", "✓"] },
                  { name: "Dedicated CSM", values: ["—", "—", "✓", "✓"] },
                  { name: "SLA", values: ["—", "—", "99.9%", "Custom"] },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-border/50">
                    <td className="py-4 px-6 text-foreground">{row.name}</td>
                    {row.values.map((value, index) => (
                      <td key={index} className="text-center py-4 px-6 text-muted-foreground">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Questions? We've Got Answers.
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">Talk to Sales</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resources#faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
