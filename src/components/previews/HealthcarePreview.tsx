import { Heart, Calendar, Bell, FileText, Check } from "lucide-react";

const appointments = [
  { patient: "Sarah Johnson", time: "9:00 AM", type: "Check-up", status: "confirmed" },
  { patient: "Michael Brown", time: "10:30 AM", type: "Follow-up", status: "pending" },
  { patient: "Emily Davis", time: "2:00 PM", type: "Lab Results", status: "confirmed" },
];

export function HealthcarePreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-white">Patient Engagement</div>
          <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">HIPAA</span>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="bg-green-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-green-500">95%</div>
          <div className="text-[9px] text-muted-foreground">Show Rate</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-blue-500">142</div>
          <div className="text-[9px] text-muted-foreground">Reminders</div>
        </div>
        <div className="bg-purple-500/10 rounded-xl p-2 text-center">
          <div className="text-lg font-bold text-purple-500">4.9</div>
          <div className="text-[9px] text-muted-foreground">Rating</div>
        </div>
      </div>

      {/* Appointments */}
      <div className="px-3 pb-3">
        <div className="text-xs font-medium text-foreground mb-2">Today's Appointments</div>
        <div className="space-y-2">
          {appointments.map((apt, i) => (
            <div key={i} className="bg-secondary/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold">
                {apt.patient.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-foreground truncate">{apt.patient}</div>
                <div className="text-[9px] text-muted-foreground">{apt.time} • {apt.type}</div>
              </div>
              {apt.status === 'confirmed' ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Bell className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
