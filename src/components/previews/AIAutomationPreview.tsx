import { Bot, User } from "lucide-react";

const messages = [
  { type: "user", text: "Hi, I want to track my order #12345" },
  { type: "bot", text: "Hello! 👋 Let me look that up for you..." },
  { type: "bot", text: "Your order is out for delivery and will arrive today between 2-4 PM! 📦" },
  { type: "user", text: "Thanks! Can I change the delivery address?" },
  { type: "bot", text: "I'll connect you with our team right away. One moment..." },
];

export function AIAutomationPreview() {
  return (
    <div className="w-full h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-purple to-brand-cyan px-4 py-3">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white">AI Assistant</span>
          <span className="ml-auto text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Online</span>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.type === 'user' ? 'justify-end' : ''}`}>
            {msg.type === 'bot' && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
            )}
            <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs ${
              msg.type === 'user' 
                ? 'bg-brand-cyan text-white rounded-br-sm' 
                : 'bg-secondary text-foreground rounded-bl-sm'
            }`}>
              {msg.text}
            </div>
            {msg.type === 'user' && (
              <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-3 h-3 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-2 border-t border-border/30">
        <div className="flex items-center gap-2 bg-secondary rounded-full px-3 py-2">
          <span className="text-xs text-muted-foreground">Type a message...</span>
        </div>
      </div>
    </div>
  );
}
