import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with how it impacts our customers' success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible in communication.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building technology that connects businesses and customers worldwide.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "200+", label: "Team Members" },
  { value: "50+", label: "Countries Served" },
  { value: "5000+", label: "Happy Customers" },
];

const leadership = [
  "Alex Johnson",
  "Sarah Chen",
  "Marcus Williams",
  "Priya Sharma",
];

export default function Company() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              About Cell24x7
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Empowering Businesses to{" "}
              <span className="gradient-text">Connect Better</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize how businesses communicate with their customers. 
              Our AI-powered platform brings all your conversations together in one intelligent inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="rounded-full" asChild>
                <Link to="/book-demo">
                  Join Our Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full" asChild>
                <Link to="/partners">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cell24x7 was born from a simple observation: businesses were struggling to keep up 
                  with the explosion of communication channels. Customers wanted to reach companies 
                  on WhatsApp, Instagram, email, and more—but teams were drowning in disconnected tools.
                </p>
                <p>
                  In 2019, our founders set out to solve this problem. They envisioned a single, 
                  intelligent platform that could unify all customer conversations and supercharge 
                  them with AI automation.
                </p>
                <p>
                  Today, Cell24x7 powers conversations for over 5,000 businesses worldwide, 
                  delivering millions of messages daily and helping companies build stronger 
                  relationships with their customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">Award-winning Platform</p>
                  <p className="text-muted-foreground">Trusted by industry leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((name, index) => {
              const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('');
              return (
                <div key={index} className="text-center group">
                  <div className="mb-4 mx-auto w-40 h-40 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
                    {initials}
                  </div>
                  <h3 className="font-semibold text-foreground">{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Join the Cell24x7 Family
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for innovation and customer success.
          </p>
          <Button variant="hero" size="lg" className="rounded-full" asChild>
            <Link to="/book-demo">
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
