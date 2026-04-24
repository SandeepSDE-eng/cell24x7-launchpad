import { useEffect, useState } from "react";
import { MessageSquare, Bell, Send, CheckCircle, User, TrendingUp } from "lucide-react";

interface LiveDashboardPreviewProps {
  industry: string;
  className?: string;
}

// Industry-specific content
const industryContent: Record<string, {
  messages: { text: string; type: "incoming" | "outgoing" }[];
  metrics: { label: string; value: string; trend: string }[];
  notifications: string[];
}> = {
  ecommerce: {
    messages: [
      { text: "Where's my order #4521?", type: "incoming" },
      { text: "Your order is out for delivery! 🚚", type: "outgoing" },
      { text: "Thanks! Got it ❤️", type: "incoming" },
    ],
    metrics: [
      { label: "Cart Recovery", value: "34%", trend: "+12%" },
      { label: "Response Time", value: "2m", trend: "-45%" },
    ],
    notifications: ["New order #4589", "Payment received", "Review submitted"],
  },
  education: {
    messages: [
      { text: "Fee due date kitni hai?", type: "incoming" },
      { text: "Due date: 15 Feb. Pay now: link.pay/edu", type: "outgoing" },
      { text: "Done! Receipt bhejo", type: "incoming" },
    ],
    metrics: [
      { label: "Fee Collection", value: "89%", trend: "+8%" },
      { label: "Parent Engagement", value: "94%", trend: "+15%" },
    ],
    notifications: ["Admission query", "Fee reminder sent", "Result published"],
  },
  healthcare: {
    messages: [
      { text: "Appointment book karna hai", type: "incoming" },
      { text: "Dr. Sharma available: 10AM, 2PM. Choose?", type: "outgoing" },
      { text: "2PM confirm karo", type: "incoming" },
    ],
    metrics: [
      { label: "Appointments", value: "156", trend: "+23%" },
      { label: "No-shows", value: "4%", trend: "-18%" },
    ],
    notifications: ["Appointment confirmed", "Lab report ready", "Prescription sent"],
  },
  travel: {
    messages: [
      { text: "Flight status kya hai?", type: "incoming" },
      { text: "AI6521 On-time. Gate B4, Boarding 2:30 PM ✈️", type: "outgoing" },
      { text: "Perfect, thanks!", type: "incoming" },
    ],
    metrics: [
      { label: "Bookings", value: "1.2K", trend: "+28%" },
      { label: "Satisfaction", value: "4.8★", trend: "+0.3" },
    ],
    notifications: ["New booking", "Check-in reminder", "Feedback received"],
  },
  realestate: {
    messages: [
      { text: "3BHK Sector 50 available?", type: "incoming" },
      { text: "Yes! 3 options. Schedule visit? 📅", type: "outgoing" },
      { text: "Sunday 11AM", type: "incoming" },
    ],
    metrics: [
      { label: "Leads", value: "342", trend: "+34%" },
      { label: "Site Visits", value: "89", trend: "+22%" },
    ],
    notifications: ["New inquiry", "Visit scheduled", "Deal closed 🎉"],
  },
  bfsi: {
    messages: [
      { text: "EMI due date reminder chahiye", type: "incoming" },
      { text: "EMI ₹12,500 due 5th Feb. Auto-pay active ✓", type: "outgoing" },
      { text: "OK 👍", type: "incoming" },
    ],
    metrics: [
      { label: "Collection Rate", value: "97%", trend: "+5%" },
      { label: "Response Time", value: "30s", trend: "-60%" },
    ],
    notifications: ["KYC approved", "Loan disbursed", "Payment received"],
  },
};

export function LiveDashboardPreview({ industry, className = "" }: LiveDashboardPreviewProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  const content = industryContent[industry] || industryContent.ecommerce;

  // Animate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setCurrentMessage((prev) => (prev + 1) % content.messages.length);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.messages.length]);

  // Animate notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % content.notifications.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [content.notifications.length]);

  return (
    <div className={`relative aspect-video rounded-2xl bg-background border border-border shadow-xl overflow-hidden ${className}`}>
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] text-muted-foreground font-medium">Cell24x7 Dashboard</span>
        <div className="w-16" />
      </div>

      <div className="flex h-[calc(100%-36px)]">
        {/* Sidebar */}
        <div className="w-12 bg-muted/30 border-r border-border flex flex-col items-center py-3 gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center relative">
            <Bell className="w-3.5 h-3.5 text-muted-foreground" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Chat Panel */}
          <div className="flex-1 flex flex-col border-r border-border">
            {/* Chat Header */}
            <div className="px-3 py-2 border-b border-border flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-3 h-3 text-primary" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-foreground">Customer Chat</div>
                <div className="text-[8px] text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-2 space-y-2 overflow-hidden">
              {content.messages.slice(0, currentMessage + 1).map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "outgoing" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] px-2 py-1 rounded-lg text-[9px] ${
                      msg.type === "outgoing"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {showTyping && (
                <div className="flex justify-end animate-fade-in">
                  <div className="bg-primary/20 px-2 py-1 rounded-lg">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-2 py-1.5 border-t border-border flex items-center gap-2">
              <div className="flex-1 h-5 bg-muted rounded px-2 flex items-center">
                <span className="text-[8px] text-muted-foreground">Type a message...</span>
              </div>
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                <Send className="w-2.5 h-2.5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Right Panel - Metrics & Notifications */}
          <div className="w-28 flex flex-col">
            {/* Metrics */}
            <div className="p-2 border-b border-border">
              <div className="text-[8px] font-semibold text-muted-foreground uppercase mb-1.5">Quick Stats</div>
              {content.metrics.map((metric, idx) => (
                <div key={idx} className="mb-1.5 last:mb-0">
                  <div className="text-[8px] text-muted-foreground">{metric.label}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-foreground">{metric.value}</span>
                    <span className="text-[8px] text-green-500 font-medium">{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Notifications */}
            <div className="flex-1 p-2">
              <div className="text-[8px] font-semibold text-muted-foreground uppercase mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live
              </div>
              <div className="space-y-1">
                {content.notifications.map((notif, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 p-1 rounded text-[8px] transition-all duration-500 ${
                      idx === currentNotification
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle className="w-2.5 h-2.5 flex-shrink-0" />
                    <span className="truncate">{notif}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}