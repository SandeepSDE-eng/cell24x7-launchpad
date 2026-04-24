
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Users, Award, Lightbulb, Globe2 } from "lucide-react";

const mission = {
  icon: Lightbulb,
  title: "Our Mission",
  description:
    "To empower businesses to build meaningful, seamless, and scalable customer connections across every channel using innovative technology.",
};

const vision = {
  icon: Globe2,
  title: "Our Vision",
  description:
    "To be the world’s most trusted platform for intelligent, unified business communication, driving growth and customer delight everywhere.",
};

const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about transforming how businesses communicate.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great things happen when we work together as a team.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
];

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        <div className="container-custom relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
            Company
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
            We are redefining business communication for the modern world. Discover our story, mission, vision, and the values that drive us forward.
          </p>
        </div>
      </section>

      {/* Main 2-column Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Story, Mission, Vision */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-slate-100">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-brand-cyan">Our Story</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg space-y-4">
                  <p>
                    Cell24x7 was founded with a simple belief: businesses should be able to communicate with their customers on any channel, seamlessly and at scale.
                  </p>
                  <p>
                    What started as a small team with a big vision has grown into a trusted platform serving thousands of businesses worldwide. We've helped companies send billions of messages, automate millions of conversations, and create meaningful connections with their customers.
                  </p>
                  <p>
                    Today, we continue to innovate and push boundaries, leveraging AI and automation to make customer communication smarter, faster, and more personal.
                  </p>
                </CardContent>
              </Card>
              {/* Mission Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-cyan-50 via-white to-slate-50">
                <CardHeader className="flex flex-row items-center gap-3">
                  <mission.icon className="w-8 h-8 text-brand-cyan" />
                  <CardTitle className="text-2xl font-semibold">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-base">
                  {mission.description}
                </CardContent>
              </Card>
              {/* Vision Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
                <CardHeader className="flex flex-row items-center gap-3">
                  <vision.icon className="w-8 h-8 text-brand-cyan" />
                  <CardTitle className="text-2xl font-semibold">{vision.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-base">
                  {vision.description}
                </CardContent>
              </Card>
            </div>
            {/* Right: Values */}
            <div className="space-y-8">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-brand-cyan/10 via-white to-slate-50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-brand-cyan">Our Values</span>
                  </CardTitle>
                  <CardDescription className="text-lg">The principles that guide everything we do.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {values.map((value) => (
                      <div key={value.title} className="flex flex-col items-center bg-white/80 rounded-xl p-5 shadow-md border border-border/30">
                        <value.icon className="w-10 h-10 text-brand-cyan mb-2" />
                        <div className="font-semibold text-lg mb-1 text-foreground">{value.title}</div>
                        <div className="text-muted-foreground text-sm text-center">{value.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Join Our Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented people to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/careers">
                  View Careers
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
