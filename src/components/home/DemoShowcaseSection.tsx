import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { features } from "@/config/site";
import { VideoModal } from "@/components/VideoModal";

const featureDemos = features.slice(0, 4).map((feature) => ({
  ...feature,
  videoUrl: undefined, // Will be replaced with actual videos
  hasVideo: false,
}));

export function DemoShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const activeFeature = featureDemos[activeTab];

  return (
    <section className="section-padding bg-surface-sunken relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Product Demo
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See Cell24x7{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore how our platform helps businesses transform customer communication 
            with powerful automation and unified messaging.
          </p>
        </div>

        {/* Demo Viewer */}
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {featureDemos.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {feature.name}
              </button>
            ))}
          </div>

          {/* Video Preview Card */}
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-brand-cyan/10 border border-border/50 cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Dashboard mockup preview */}
            <div className="absolute inset-0 p-8 flex flex-col opacity-70 group-hover:opacity-50 transition-opacity">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-40 h-4 bg-secondary rounded-full" />
                <div className="flex-1" />
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-secondary rounded-lg" />
                  <div className="w-10 h-10 bg-secondary rounded-lg" />
                </div>
              </div>
              
              {/* Content grid */}
              <div className="flex-1 grid grid-cols-5 gap-6">
                <div className="col-span-1 bg-secondary/40 rounded-xl p-4 space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-4 rounded ${i === 2 ? 'bg-primary/40' : 'bg-secondary'}`} style={{ width: `${60 + Math.random() * 40}%` }} />
                  ))}
                </div>
                <div className="col-span-4 bg-secondary/30 rounded-xl p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-secondary/60 rounded-xl p-4 h-24" />
                    ))}
                  </div>
                  <div className="bg-secondary/40 rounded-xl h-48" />
                </div>
              </div>
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="mt-4 text-foreground font-medium text-lg">
                  Watch {activeFeature.name} Demo
                </p>
                <p className="text-muted-foreground text-sm">
                  30 second overview
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Book a Live Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title={activeFeature.name}
        description={activeFeature.description}
        videoUrl={activeFeature.videoUrl}
        hasVideo={activeFeature.hasVideo}
      />
    </section>
  );
}
