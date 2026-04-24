import { GraduationCap, Bell, BookOpen, Users, Calendar } from "lucide-react";

const notifications = [
  { type: "exam", message: "Math exam reminder sent to 45 students", time: "Just now" },
  { type: "event", message: "Parent-teacher meeting scheduled", time: "1h ago" },
  { type: "fee", message: "Fee reminder sent to 120 parents", time: "2h ago" },
];

export function EducationPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
        <div className="text-sm font-semibold text-white">Education Portal</div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="bg-blue-500/10 rounded-xl p-3">
          <Users className="w-4 h-4 text-blue-500 mb-1" />
          <div className="text-lg font-bold text-foreground">2,450</div>
          <div className="text-[10px] text-muted-foreground">Students Reached</div>
        </div>
        <div className="bg-green-500/10 rounded-xl p-3">
          <Bell className="w-4 h-4 text-green-500 mb-1" />
          <div className="text-lg font-bold text-foreground">98%</div>
          <div className="text-[10px] text-muted-foreground">Delivery Rate</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-3 pb-2">
        <div className="flex gap-2">
          <button className="flex-1 text-[10px] bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-1">
            <Calendar className="w-3 h-3" /> Event Alert
          </button>
          <button className="flex-1 text-[10px] bg-indigo-500 text-white py-2 rounded-lg flex items-center justify-center gap-1">
            <BookOpen className="w-3 h-3" /> Exam Notice
          </button>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="px-3 pb-3">
        <div className="text-xs font-medium text-foreground mb-2">Recent Activity</div>
        <div className="space-y-2">
          {notifications.map((notif, i) => (
            <div key={i} className="bg-secondary/30 rounded-lg p-2 flex items-start gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                notif.type === 'exam' ? 'bg-purple-500' : 
                notif.type === 'event' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                {notif.type === 'exam' ? <BookOpen className="w-3 h-3 text-white" /> :
                 notif.type === 'event' ? <Calendar className="w-3 h-3 text-white" /> :
                 <Bell className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-foreground">{notif.message}</div>
                <div className="text-[9px] text-muted-foreground">{notif.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
