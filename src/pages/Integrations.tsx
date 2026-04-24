import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { integrations } from "@/config/site";
import { ArrowRight, Search, Plug, Code, Webhook } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "crm", name: "CRM" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "payment", name: "Payment" },
  { id: "automation", name: "Automation" },
  { id: "productivity", name: "Productivity" },
  { id: "support", name: "Support" },
];

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeCategory === "all" || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Integrations
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Connect Your{" "}
              <span className="gradient-text">Favorite Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Cell24x7 integrates with 100+ apps to streamline your workflow and 
              supercharge your customer communication.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "gradient-hero text-white"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {integration.name}
                </h3>
                <span className="text-xs text-muted-foreground capitalize">
                  {integration.category}
                </span>
              </div>
            ))}
          </div>

          {/* Developer Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-brand-cyan/10 border border-border/50">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                REST APIs
              </h3>
              <p className="text-muted-foreground mb-6">
                Full-featured APIs to integrate Cell24x7 into your own applications and workflows.
              </p>
              <Link to="/docs/api" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                View API Docs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-primary/10 border border-border/50">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Webhook className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Webhooks
              </h3>
              <p className="text-muted-foreground mb-6">
                Real-time event notifications to keep your systems in sync with Cell24x7.
              </p>
              <Link to="/docs/webhooks" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-brand-cyan/10 border border-border/50">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Plug className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                OAuth 2.0
              </h3>
              <p className="text-muted-foreground mb-6">
                Secure authentication for third-party app integrations with Cell24x7.
              </p>
              <Link to="/docs/oauth" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team can help you build custom integrations for your specific business needs.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Talk to Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integrations;
