import { ShoppingCart, TrendingUp, Package, MessageSquare } from "lucide-react";

export function EcommercePreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-3">
        <div className="text-sm font-semibold text-white">E-commerce Dashboard</div>
      </div>
      
      {/* Stats */}
      <div className="p-3 space-y-3">
        {/* Recovery Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-500/10 rounded-xl p-3">
            <TrendingUp className="w-4 h-4 text-green-500 mb-1" />
            <div className="text-lg font-bold text-foreground">$12.4K</div>
            <div className="text-[10px] text-muted-foreground">Recovered Sales</div>
          </div>
          <div className="bg-orange-500/10 rounded-xl p-3">
            <ShoppingCart className="w-4 h-4 text-orange-500 mb-1" />
            <div className="text-lg font-bold text-foreground">67%</div>
            <div className="text-[10px] text-muted-foreground">Cart Recovery</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-secondary/30 rounded-xl p-3">
          <div className="text-xs font-medium text-foreground mb-2">Recent Automations</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px]">
              <Package className="w-3 h-3 text-blue-500" />
              <span className="text-muted-foreground">Order shipped to Sarah M.</span>
              <span className="ml-auto text-muted-foreground">2m</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <ShoppingCart className="w-3 h-3 text-orange-500" />
              <span className="text-muted-foreground">Cart reminder sent to John D.</span>
              <span className="ml-auto text-muted-foreground">5m</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <MessageSquare className="w-3 h-3 text-green-500" />
              <span className="text-muted-foreground">Review request to Mike R.</span>
              <span className="ml-auto text-muted-foreground">12m</span>
            </div>
          </div>
        </div>

        {/* Conversion Chart */}
        <div className="flex items-end justify-between gap-1 h-12 px-2">
          {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
            <div 
              key={i}
              className="flex-1 bg-gradient-to-t from-orange-500 to-pink-500 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
