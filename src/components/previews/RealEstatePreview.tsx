import { Home, Calendar, MessageSquare, TrendingUp, MapPin } from "lucide-react";

const leads = [
  { name: "Robert Chen", property: "3BR Apartment, Downtown", status: "hot", time: "5m" },
  { name: "Lisa Park", property: "2BR Condo, Riverside", status: "warm", time: "1h" },
  { name: "James Wilson", property: "4BR House, Suburbs", status: "new", time: "2h" },
];

export function RealEstatePreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3">
        <div className="text-sm font-semibold text-white">Real Estate CRM</div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="bg-green-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-green-500">24</div>
          <div className="text-[9px] text-muted-foreground">New Leads</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-blue-500">12</div>
          <div className="text-[9px] text-muted-foreground">Viewings</div>
        </div>
        <div className="bg-amber-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-amber-500">3</div>
          <div className="text-[9px] text-muted-foreground">Closing</div>
        </div>
      </div>

      {/* Lead List */}
      <div className="px-3 pb-3">
        <div className="text-xs font-medium text-foreground mb-2">Hot Leads</div>
        <div className="space-y-2">
          {leads.map((lead, i) => (
            <div key={i} className="bg-secondary/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-foreground truncate">{lead.name}</div>
                <div className="text-[9px] text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {lead.property}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                  lead.status === 'hot' ? 'bg-red-500 text-white' :
                  lead.status === 'warm' ? 'bg-amber-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>{lead.status.toUpperCase()}</span>
                <span className="text-[9px] text-muted-foreground">{lead.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
