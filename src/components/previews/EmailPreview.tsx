import { Star, Paperclip, Reply } from "lucide-react";

export function EmailPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3">
        <div className="text-sm font-semibold text-white">Email Campaign</div>
      </div>
      
      {/* Email Preview */}
      <div className="flex-1 p-3 space-y-3">
        {/* Email Header */}
        <div className="border-b border-border/30 pb-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center text-white text-xs font-bold">
                C
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Cell24x7</div>
                <div className="text-[10px] text-muted-foreground">to: customer@email.com</div>
              </div>
            </div>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="text-sm font-semibold text-foreground">🎁 Your Exclusive 30% Discount Inside!</div>
        </div>

        {/* Email Body */}
        <div className="space-y-2">
          <div className="h-20 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🛍️</span>
          </div>
          <div className="text-xs text-foreground">Hi there!</div>
          <div className="text-xs text-muted-foreground">
            As a valued customer, we're giving you exclusive early access to our biggest sale...
          </div>
          <button className="w-full text-xs bg-brand-cyan text-white py-2 rounded-full mt-2">
            Shop Now →
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 pt-2 border-t border-border/30">
          <button className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Reply className="w-3 h-3" /> Reply
          </button>
          <button className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Paperclip className="w-3 h-3" /> Attach
          </button>
        </div>
      </div>
    </div>
  );
}
