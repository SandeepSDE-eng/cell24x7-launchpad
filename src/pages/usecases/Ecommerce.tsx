import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, TrendingUp, Package, MessageSquare, CheckCircle } from "lucide-react";
import { EcommercePreview } from "@/components/previews/EcommercePreview";

const features = [
  "Reduce cart abandonment with timely reminders",
  "Automated order confirmations and shipping updates",
  "Personalized product recommendations",
  "Post-purchase support and feedback collection",
  "Flash sale and promotion notifications",
  "Loyalty program engagement",
];

const Ecommerce = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4" />
              Use Cases
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">E-commerce</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Boost sales and customer satisfaction with automated messaging. 
              From cart recovery to order updates, we've got you covered.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Drive Sales & Reduce Abandonment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Recover lost sales, keep customers informed, and build lasting 
                relationships with automated e-commerce messaging.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <EcommercePreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              E-commerce Results
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <TrendingUp className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">30% More Sales</h3>
              <p className="text-muted-foreground">Recover abandoned carts and boost conversions.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Package className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Happy Customers</h3>
              <p className="text-muted-foreground">Keep buyers informed at every step.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <MessageSquare className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Better Support</h3>
              <p className="text-muted-foreground">Instant answers to product questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Grow Your E-commerce?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Cell24x7 can transform your online store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/use-cases">View All Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ecommerce;
