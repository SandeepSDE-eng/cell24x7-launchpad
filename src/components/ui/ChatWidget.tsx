import { useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const services = [
  "WhatsApp API",
  "SMS",
  "Email",
  "RCS",
  "VoiceBot",
  "DLT (India)",
  "Web Application",
];

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
};

type ChatLead = {
  id: number;
  createdAt: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  service: string | null;
  transcript: Array<{ from: "bot" | "user"; text: string; at: string }>;
};

const CHAT_LEADS_KEY = "cell24x7_chat_leads";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      from: "bot",
      text: "Hi! I am your Cell24x7 assistant. Please share your name to get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [awaitingService, setAwaitingService] = useState(false);
  const [awaitingLiveChoice, setAwaitingLiveChoice] = useState(false);
  const [leadName, setLeadName] = useState<string | null>(null);
  const [leadEmail, setLeadEmail] = useState<string | null>(null);
  const [leadPhone, setLeadPhone] = useState<string | null>(null);
  const [leadSaved, setLeadSaved] = useState(false);
  const [leadId, setLeadId] = useState<number | null>(null);
  const [liveAgentConnected, setLiveAgentConnected] = useState(false);

  const lastBotMessage = useMemo(() => {
    const reversed = [...messages].reverse();
    return reversed.find((m) => m.from === "bot");
  }, [messages]);

  const addMessage = (from: "bot" | "user", text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, from, text },
    ]);
  };

  const getTranscript = (): ChatLead["transcript"] =>
    messages.map((m) => ({ from: m.from, text: m.text, at: new Date().toISOString() }));

  const saveLead = (service: string) => {
    const payload: ChatLead = {
      id: leadId ?? Date.now(),
      createdAt: new Date().toISOString(),
      name: leadName,
      email: leadEmail,
      phone: leadPhone,
      service,
      transcript: getTranscript(),
    };
    const existing = JSON.parse(localStorage.getItem(CHAT_LEADS_KEY) || "[]");
    const filtered = existing.filter((l: ChatLead) => l.id !== payload.id);
    filtered.unshift(payload);
    localStorage.setItem(CHAT_LEADS_KEY, JSON.stringify(filtered));
    setLeadSaved(true);
    setLeadId(payload.id);
  };

  const updateTranscript = () => {
    if (!leadId) return;
    const existing = JSON.parse(localStorage.getItem(CHAT_LEADS_KEY) || "[]");
    const updated = existing.map((l: ChatLead) =>
      l.id === leadId ? { ...l, transcript: getTranscript() } : l
    );
    localStorage.setItem(CHAT_LEADS_KEY, JSON.stringify(updated));
  };

  const getAutoReply = (text: string) => {
    const msg = text.toLowerCase();
    if (msg.includes("price") || msg.includes("pricing")) {
      return "We offer flexible pricing based on volume and channels. Would you like a custom quote?";
    }
    if (msg.includes("demo")) {
      return "I can help you schedule a demo. Please share your preferred time and timezone.";
    }
    if (msg.includes("whatsapp")) {
      return "WhatsApp API setup includes onboarding, templates, and verified sender support.";
    }
    if (msg.includes("sms")) {
      return "SMS supports bulk, OTP, and DLT-compliant routes for India.";
    }
    if (msg.includes("email")) {
      return "Email campaigns include automation, segmentation, and deliverability tools.";
    }
    if (msg.includes("dlt")) {
      return "DLT includes entity registration, header approval, and template compliance.";
    }
    if (msg.includes("voice") || msg.includes("voicebot")) {
      return "VoiceBot offers 24/7 voice automation with live agent handoff.";
    }
    if (msg.includes("support") || msg.includes("help")) {
      return "I can connect you with a specialist. Would you like to speak to a live agent?";
    }
    return "Thanks! Please share your use case, volume, and timeline so I can guide you better.";
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setAwaitingService(false);
    setAwaitingLiveChoice(true);
    addMessage("user", service);
    addMessage(
      "bot",
      `Great choice! I will share details about ${service}. One moment while we set things up.`
    );

    if (!leadSaved) {
      try {
        saveLead(service);
      } catch {
        setLeadSaved(true);
      }
    }

    // Simulated webhook-style update
    setTimeout(() => {
      addMessage(
        "bot",
        `Webhook update: ${service} request received. A live agent will contact you shortly.`
      );
      addMessage("bot", "Would you like to chat with a live agent now?");
    }, 600);
  };

  const handleLiveChoice = (choice: "yes" | "no") => {
    setAwaitingLiveChoice(false);
    if (choice === "yes") {
      addMessage("user", "Connect me to a live agent");
      addMessage(
        "bot",
        "Thanks! A specialist will join shortly. Meanwhile, you can share your requirements."
      );
      setLiveAgentConnected(true);
      return;
    }
    addMessage("user", "Continue with chatbot");
    addMessage("bot", "Sure. Ask your question and I will help you right away.");
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addMessage("user", text);
    setInput("");

    if (!leadName) {
      setLeadName(text);
      addMessage("bot", `Thanks ${text}! Please share your work email.`);
      return;
    }

    if (!leadEmail) {
      setLeadEmail(text);
      addMessage("bot", "Thanks! Please share your mobile number.");
      return;
    }

    if (!leadPhone) {
      setLeadPhone(text);
      setAwaitingService(true);
      addMessage("bot", "Great! Please select a service below.");
      return;
    }

    if (selectedService && !awaitingLiveChoice) {
      if (text.toLowerCase().includes("thank")) {
        addMessage("bot", "Thank you! Our team will contact you shortly.");
        updateTranscript();
        setTimeout(() => setOpen(false), 900);
        return;
      }
      const reply = getAutoReply(text);
      addMessage("bot", liveAgentConnected ? `Agent: ${reply}` : reply);
      updateTranscript();
      return;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-border/60 bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-black text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold">Cell24x7 Live Chat</span>
            </div>
            <button
              className="p-1 rounded-md hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="px-4 py-3 bg-white">
            <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-xl px-3 py-2 text-sm max-w-[85%] ${
                      m.from === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {awaitingService && (
              <div className="grid grid-cols-2 gap-2 mb-3">
                {services.map((service) => (
                  <button
                    key={service}
                    className="text-xs px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}

            {awaitingLiveChoice && (
              <div className="flex gap-2 mb-3">
                <button
                  className="flex-1 h-9 rounded-md bg-primary text-white text-sm font-semibold"
                  onClick={() => handleLiveChoice("yes")}
                >
                  Yes, live agent
                </button>
                <button
                  className="flex-1 h-9 rounded-md border border-border/60 text-sm font-semibold"
                  onClick={() => handleLiveChoice("no")}
                >
                  Continue here
                </button>
              </div>
            )}

            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
                className="flex-1 h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-900 placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="h-9 w-9 rounded-md bg-black text-white flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-3 text-xs text-muted-foreground">
              {lastBotMessage?.text.includes("Webhook")
                ? "Webhook status received. Choose an option to continue."
                : "We typically respond in a few minutes."}
            </p>
          </div>
        </div>
      )}

      <button
        className="h-12 w-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:scale-[1.03] transition-transform"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
