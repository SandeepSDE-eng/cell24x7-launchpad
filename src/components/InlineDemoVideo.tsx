import { useState, useRef, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

interface InlineDemoVideoProps {
  videoUrl?: string;
  hasVideo: boolean;
  featureName: string;
  className?: string;
}

export function InlineDemoVideo({ 
  videoUrl, 
  hasVideo, 
  featureName,
  className = "" 
}: InlineDemoVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for autoplay on visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility or hover
  useEffect(() => {
    if (videoRef.current && hasVideo && videoUrl) {
      if (isVisible || isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isHovered, hasVideo, videoUrl]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted border border-border/50 shadow-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* "How it works" Label */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-muted-foreground border border-border/50">
          <Play className="w-3 h-3" />
          How it works
        </span>
      </div>

      {hasVideo && videoUrl ? (
        <>
          {/* Loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
            </div>
          )}
          
          {/* Video */}
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      ) : (
        /* Placeholder when no video */
        <DemoPlaceholder featureName={featureName} />
      )}
    </div>
  );
}

// Animated placeholder component
function DemoPlaceholder({ featureName }: { featureName: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
      {/* Animated dashboard mockup */}
      <div className="w-full max-w-[280px] space-y-3 mb-4">
        {/* Header bar */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <div className="flex-1 h-3 bg-secondary/80 rounded-full ml-2" />
        </div>
        
        {/* Sidebar + Content mockup */}
        <div className="flex gap-2 h-32">
          {/* Sidebar */}
          <div className="w-1/4 space-y-2">
            <div className="h-3 bg-secondary/60 rounded animate-pulse" />
            <div className="h-3 bg-primary/30 rounded" />
            <div className="h-3 bg-secondary/60 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="h-3 bg-secondary/60 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          
          {/* Main content */}
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-secondary/60 rounded animate-pulse" />
            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="bg-primary/20 rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="bg-brand-cyan/20 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="bg-secondary/60 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="bg-secondary/60 rounded animate-pulse" style={{ animationDelay: '0.7s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Coming soon label */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
          <Play className="w-3 h-3" />
          Product demo coming soon
        </span>
      </div>
    </div>
  );
}
