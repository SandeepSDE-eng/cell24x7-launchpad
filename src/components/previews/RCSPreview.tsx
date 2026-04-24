import { Check, CheckCheck, Sparkles } from "lucide-react";

export function RCSPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-1">
              Fashion Store <Check className="w-3 h-3 bg-white text-blue-500 rounded-full p-0.5" />
            </div>
            <div className="text-[10px] text-white/70">Verified Business</div>
          </div>
        </div>
      </div>
      
      {/* Rich Message */}
      <div className="flex-1 p-3 space-y-3 bg-secondary/20">
        {/* Image Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-2xl">👗✨</span>
          </div>
          <div className="p-3">
            <div className="text-sm font-semibold text-foreground">New Collection!</div>
            <div className="text-xs text-muted-foreground mb-2">Up to 50% off on summer dresses</div>
            <div className="flex gap-2">
              <button className="flex-1 text-xs bg-blue-500 text-white py-2 rounded-full">Shop Now</button>
              <button className="flex-1 text-xs border border-blue-500 text-blue-500 py-2 rounded-full">View All</button>
            </div>
          </div>
        </div>

        {/* Quick Replies */}
        <div className="flex flex-wrap gap-2">
          <button className="text-[10px] px-3 py-1.5 rounded-full border border-blue-500 text-blue-500">Track Order</button>
          <button className="text-[10px] px-3 py-1.5 rounded-full border border-blue-500 text-blue-500">Size Guide</button>
          <button className="text-[10px] px-3 py-1.5 rounded-full border border-blue-500 text-blue-500">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
