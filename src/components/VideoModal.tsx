import { lazy, Suspense, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Play, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl?: string;
  hasVideo: boolean;
}

export function VideoModal({
  isOpen,
  onClose,
  title,
  description,
  videoUrl,
  hasVideo,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && hasVideo) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    }
  }, [isOpen, hasVideo]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-card border-border/50">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-display text-xl font-semibold text-foreground">
            How {title} Works
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          {hasVideo && videoUrl ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
              <video
                ref={videoRef}
                src={videoUrl}
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-brand-cyan/10 border border-border/50">
              {/* Placeholder dashboard mockup */}
              <div className="absolute inset-0 p-6 flex flex-col">
                {/* Header bar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-32 h-3 bg-secondary/80 rounded-full" />
                  <div className="flex-1" />
                  <div className="w-8 h-8 bg-secondary/80 rounded-lg" />
                  <div className="w-8 h-8 bg-secondary/80 rounded-lg" />
                </div>
                
                {/* Main content */}
                <div className="flex-1 grid grid-cols-4 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-1 bg-secondary/50 rounded-xl p-3 space-y-2">
                    <div className="w-full h-3 bg-secondary rounded" />
                    <div className="w-3/4 h-3 bg-secondary rounded" />
                    <div className="w-full h-3 bg-primary/30 rounded" />
                    <div className="w-2/3 h-3 bg-secondary rounded" />
                  </div>
                  
                  {/* Main area */}
                  <div className="col-span-3 bg-secondary/30 rounded-xl p-4 flex flex-col">
                    <div className="flex gap-3 mb-4">
                      <div className="w-24 h-6 bg-secondary rounded-lg" />
                      <div className="w-24 h-6 bg-secondary rounded-lg" />
                      <div className="w-24 h-6 bg-primary/40 rounded-lg" />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-secondary/60 rounded-lg p-2">
                          <div className="w-full h-2 bg-secondary rounded mb-2" />
                          <div className="w-2/3 h-2 bg-secondary rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coming soon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground mb-2">
                    Demo Video Coming Soon
                  </p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    We're working on an interactive demo. Book a live demo to see {title} in action.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface WatchDemoButtonProps {
  onClick: () => void;
  className?: string;
}

export function WatchDemoButton({ onClick, className = "" }: WatchDemoButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors group ${className}`}
    >
      <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Play className="w-3.5 h-3.5 fill-current" />
      </span>
      Watch 30s Demo
    </button>
  );
}
