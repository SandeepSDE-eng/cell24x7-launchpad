import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { stats } from "@/config/site";
import { FeatureMarquee } from "./FeatureMarquee";
import { HeroPhoneVisual } from "./HeroPhoneVisual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero-subtle" />
      
      {/* Decorative Elements - Gupshup style */}
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-brand-magenta rounded-full animate-pulse" />
      <div className="absolute top-40 left-1/3 w-2 h-2 bg-brand-purple rounded-full animate-pulse animation-delay-200" />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-brand-orange/60 rounded-full animate-float" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-purple/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-magenta/15 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container-custom relative">
        <div className="pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full shadow-md bg-white/80 border border-primary text-primary text-sm font-semibold mb-6 backdrop-blur-md transition-all duration-500 hover:scale-105">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-bold text-foreground">Trusted by <span className="text-primary">5,000+</span> businesses worldwide</span>
              </div>

              {/* Headline - Gupshup style with colored word */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                Drive Business{" "}
                <span className="gradient-text">Growth</span>
                <br className="hidden sm:block" />
                <span className="text-[#5956d6] px-2 py-1 rounded-md inline-block font-semibold">with AI-Powered Conversations</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up animation-delay-100">
                Accelerate lead generation, drive sales, and delight customers with 
                personalized support using AI Agents across WhatsApp, Instagram, SMS & more.
              </p>

              {/* CTA - Gupshup pill style */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-200">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="rounded-full px-8 group shadow-sm"
                  asChild
                >
                  <Link to="/book-demo">
                    Start a conversation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Free 14-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  24/7 support
                </div>
              </div>
            </div>

            {/* Right - Phone Visual */}
            <div className="relative animate-fade-in-up animation-delay-400">
              <HeroPhoneVisual />
            </div>
          </div>

          {/* Feature Marquee - Gupshup style */}
          <div className="mt-20">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Automate every customer interaction with Cell24x7 AI Agents
            </p>
            <FeatureMarquee />
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
