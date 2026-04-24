import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";

const conversations = [
  { name: "John D.", channel: "whatsapp", message: "Hi, I need help with my order", time: "2m", unread: true },
  { name: "Sarah M.", channel: "email", message: "Thanks for the quick response!", time: "5m", unread: false },
  { name: "Mike R.", channel: "sms", message: "When will my package arrive?", time: "12m", unread: true },
  { name: "Emily K.", channel: "instagram", message: "Love your products! 💕", time: "18m", unread: false },
];

const channelIcons: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle className="w-3 h-3 text-green-500" />,
  email: <Mail className="w-3 h-3 text-blue-500" />,
  sms: <Phone className="w-3 h-3 text-purple-500" />,
  instagram: <Instagram className="w-3 h-3 text-pink-500" />,
};

export function UnifiedInboxPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Unified Inbox</span>
          <span className="text-xs bg-brand-cyan text-white px-2 py-0.5 rounded-full">4 new</span>
        </div>
      </div>
      
      {/* Conversation List */}
      <div className="divide-y divide-border/30">
        {conversations.map((conv, i) => (
          <div key={i} className={`px-4 py-3 flex items-start gap-3 ${conv.unread ? 'bg-primary/5' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center text-white text-xs font-bold">
              {conv.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-medium text-foreground">{conv.name}</span>
                {channelIcons[conv.channel]}
              </div>
              <p className="text-xs text-muted-foreground truncate">{conv.message}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] text-muted-foreground">{conv.time}</span>
              {conv.unread && <div className="w-2 h-2 rounded-full bg-brand-cyan" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
