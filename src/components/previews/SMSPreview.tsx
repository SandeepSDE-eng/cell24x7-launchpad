import { Check, CheckCheck } from "lucide-react";

const messages = [
  { type: "sent", text: "Your order #4521 has been shipped! Track at: bit.ly/track4521", time: "10:30 AM", status: "delivered" },
  { type: "received", text: "Thanks! When will it arrive?", time: "10:32 AM" },
  { type: "sent", text: "Expected delivery: Tomorrow, Feb 4th between 2-5 PM 📦", time: "10:33 AM", status: "delivered" },
  { type: "received", text: "Perfect, thank you!", time: "10:34 AM" },
];

export function SMSPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
            JD
          </div>
          <div>
            <div className="text-sm font-semibold text-white">John Doe</div>
            <div className="text-[10px] text-white/70">+1 (555) 123-4567</div>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 bg-secondary/20">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs ${
              msg.type === 'sent' 
                ? 'bg-green-500 text-white rounded-br-sm' 
                : 'bg-white text-foreground rounded-bl-sm shadow-sm'
            }`}>
              <div>{msg.text}</div>
              <div className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                msg.type === 'sent' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {msg.time}
                {msg.type === 'sent' && (
                  msg.status === 'delivered' 
                    ? <CheckCheck className="w-3 h-3" /> 
                    : <Check className="w-3 h-3" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
