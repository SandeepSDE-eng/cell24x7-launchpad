import { TrendingUp, Users, MessageSquare, Clock } from "lucide-react";

const chartData = [35, 55, 45, 70, 60, 85, 75];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function AnalyticsPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Analytics</span>
          <span className="text-xs text-muted-foreground">Last 7 days</span>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-xl p-3">
          <MessageSquare className="w-4 h-4 text-brand-cyan mb-1" />
          <div className="text-lg font-bold text-foreground">12.4K</div>
          <div className="text-[10px] text-muted-foreground flex items-center gap-1">
            Messages <TrendingUp className="w-3 h-3 text-green-500" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 rounded-xl p-3">
          <Users className="w-4 h-4 text-brand-purple mb-1" />
          <div className="text-lg font-bold text-foreground">2.1K</div>
          <div className="text-[10px] text-muted-foreground flex items-center gap-1">
            Customers <TrendingUp className="w-3 h-3 text-green-500" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-3">
          <Clock className="w-4 h-4 text-green-500 mb-1" />
          <div className="text-lg font-bold text-foreground">1.2m</div>
          <div className="text-[10px] text-muted-foreground">Avg Response</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-3">
          <TrendingUp className="w-4 h-4 text-orange-500 mb-1" />
          <div className="text-lg font-bold text-foreground">94%</div>
          <div className="text-[10px] text-muted-foreground">Satisfaction</div>
        </div>
      </div>

      {/* Mini Chart */}
      <div className="px-3 pb-3">
        <div className="bg-secondary/30 rounded-xl p-3">
          <div className="text-xs font-medium text-foreground mb-2">Weekly Trend</div>
          <div className="flex items-end justify-between gap-1 h-16">
            {chartData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full bg-gradient-to-t from-brand-cyan to-brand-purple rounded-t"
                  style={{ height: `${value}%` }}
                />
                <span className="text-[8px] text-muted-foreground">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
