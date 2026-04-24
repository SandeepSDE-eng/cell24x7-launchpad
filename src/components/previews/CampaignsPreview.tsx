import { Send, Users, BarChart3 } from "lucide-react";

const campaigns = [
  { name: "Summer Sale 🔥", sent: "12.5K", opened: "8.2K", status: "active" },
  { name: "New Arrivals", sent: "8.1K", opened: "5.4K", status: "completed" },
  { name: "Flash Deal", sent: "—", opened: "—", status: "scheduled" },
];

export function CampaignsPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Campaigns</span>
          <button className="text-xs bg-brand-cyan text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Send className="w-3 h-3" /> New
          </button>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="bg-secondary/50 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-brand-cyan">20.6K</div>
          <div className="text-[10px] text-muted-foreground">Sent</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-brand-purple">13.6K</div>
          <div className="text-[10px] text-muted-foreground">Opened</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-green-500">66%</div>
          <div className="text-[10px] text-muted-foreground">Rate</div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="px-3 pb-3 space-y-2">
        {campaigns.map((camp, i) => (
          <div key={i} className="bg-secondary/30 rounded-xl p-3 flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${
              camp.status === 'active' ? 'bg-green-500' : 
              camp.status === 'scheduled' ? 'bg-yellow-500' : 'bg-muted-foreground'
            }`} />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground truncate">{camp.name}</div>
              <div className="text-[10px] text-muted-foreground flex items-center gap-2">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{camp.sent}</span>
                <span className="flex items-center gap-1"><BarChart3 className="w-3 h-3" />{camp.opened}</span>
              </div>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              camp.status === 'active' ? 'bg-green-500/10 text-green-500' : 
              camp.status === 'scheduled' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-secondary text-muted-foreground'
            }`}>{camp.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
