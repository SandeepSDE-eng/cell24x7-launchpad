import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity, CheckCircle } from "lucide-react";
import { AnalyticsPreview } from "@/components/previews/AnalyticsPreview";

const features = [
  "Real-time dashboard with key metrics",
  "Conversation analytics and response times",
  "Agent performance tracking",
  "Campaign ROI measurement",
  "Custom reports and exports",
  "Predictive analytics and insights",
];

const Analytics = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Features
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Data-driven insights to understand your customers, optimize your 
              operations, and grow your business with confidence.
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
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square max-w-md mx-auto">
                <AnalyticsPreview />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Data-Driven Decision Making
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get complete visibility into your customer communications with 
                comprehensive analytics and actionable insights.
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
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics That Matter
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <TrendingUp className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Growth Tracking</h3>
              <p className="text-muted-foreground">Monitor trends and track your growth over time.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <PieChart className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Channel Insights</h3>
              <p className="text-muted-foreground">Understand which channels drive the best results.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <Activity className="w-12 h-12 text-brand-cyan mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Real-Time Data</h3>
              <p className="text-muted-foreground">Live dashboards that update as events happen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Better Insights?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unlock the power of data with Cell24x7 Analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;
