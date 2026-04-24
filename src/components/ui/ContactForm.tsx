import * as React from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [channels, setChannels] = React.useState<{ [k: string]: boolean }>({ whatsapp: false, sms: false, rcs: false });
  const [status, setStatus] = React.useState("");

  const toggle = (key: string) => setChannels((s) => ({ ...s, [key]: !s[key] }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { name, email, message, channels: Object.keys(channels).filter((k) => channels[k]), createdAt: new Date().toISOString() };

    try {
      const existing = JSON.parse(localStorage.getItem("cell24x7_leads") || "[]");
      existing.push(payload);
      localStorage.setItem("cell24x7_leads", JSON.stringify(existing));
      setStatus("Data stored successfully.");
      setName("");
      setEmail("");
      setMessage("");
      setChannels({ whatsapp: false, sms: false, rcs: false });

      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      setStatus("Failed to store data. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="border rounded-md px-3 py-2 w-full" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required className="border rounded-md px-3 py-2 w-full" />
      </div>

      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message (optional)" className="border rounded-md px-3 py-2 w-full mt-3 min-h-[80px]" />

      <div className="flex items-center gap-3 mt-3">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={channels.whatsapp} onChange={() => toggle("whatsapp")} /> WhatsApp
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={channels.sms} onChange={() => toggle("sms")} /> SMS
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={channels.rcs} onChange={() => toggle("rcs")} /> RCS
        </label>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button type="submit">Send</Button>
        <div className="text-sm text-muted-foreground">{status}</div>
      </div>
    </form>
  );
}
