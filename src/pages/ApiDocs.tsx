import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Search, 
  Copy, 
  Check, 
  ChevronRight, 
  ExternalLink, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Download, 
  Play, 
  BookOpen, 
  Key, 
  Layers, 
  Smartphone, 
  MessageCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Webhook, 
  AlertCircle,
  Clock,
  Sparkles,
  Server
} from "lucide-react";
import { Link } from "react-router-dom";

// API Endpoint Documentation Data
interface ApiEndpoint {
  id: string;
  title: string;
  category: string;
  method: "POST" | "GET" | "PUT" | "DELETE";
  path: string;
  description: string;
  headers: Array<{ name: string; type: string; required: boolean; description: string; example: string }>;
  params: Array<{ name: string; type: string; required: boolean; description: string; example: string }>;
  codeExamples: {
    curl: string;
    node: string;
    python: string;
    postman: string;
  };
  response200: object;
  response429?: object;
}

const docsNavigation = [
  {
    category: "Getting Started",
    items: [
      { id: "overview", name: "Overview & Base URL", icon: BookOpen },
      { id: "auth", name: "Authentication & API Keys", icon: Key },
      { id: "limits", name: "Credits & Daily Rate Limits", icon: Clock },
    ]
  },
  {
    category: "Channel APIs",
    items: [
      { id: "sms-api", name: "SMS Messaging API", icon: Smartphone },
      { id: "whatsapp-api", name: "WhatsApp Business API", icon: MessageCircle },
      { id: "rcs-api", name: "RCS Business Messaging", icon: MessageSquare },
      { id: "voice-api", name: "Voice API & IVR", icon: Phone },
      { id: "email-api", name: "Email Messaging API", icon: Mail },
    ]
  },
  {
    category: "Integration & Webhooks",
    items: [
      { id: "webhooks", name: "Webhooks & DLR Callbacks", icon: Webhook },
      { id: "postman", name: "Postman Collection & Testing", icon: Layers },
    ]
  }
];

const endpointsData: Record<string, ApiEndpoint> = {
  "sms-api": {
    id: "sms-api",
    title: "Send Single / Bulk SMS (DLT Approved)",
    category: "SMS Messaging",
    method: "POST",
    path: "/v1/sms/send",
    description: "Send single or bulk SMS directly to Indian mobile numbers via high-throughput operator pipes with TRAI DLT registration header and template ID verification.",
    headers: [
      { name: "Authorization", type: "string", required: true, description: "Bearer token with your Cell24x7 API Key", example: "Bearer c24_live_9981240a87f" },
      { name: "Content-Type", type: "string", required: true, description: "Must be application/json", example: "application/json" }
    ],
    params: [
      { name: "sender_id", type: "string", required: true, description: "Approved 6-character TRAI DLT Header", example: "AX-CELL24" },
      { name: "entity_id", type: "string", required: true, description: "Principal Entity (PE) ID registered on DLT portal", example: "1701158000000000000" },
      { name: "template_id", type: "string", required: true, description: "Approved Content Template ID registered on DLT", example: "17071689201" },
      { name: "recipients", type: "array", required: true, description: "List of 10-digit mobile numbers with country code (+91)", example: "[\"+919876543210\"]" },
      { name: "message", type: "string", required: true, description: "SMS text content matching exact DLT approved template", example: "Your Cell24x7 OTP for login is 948210. Valid for 10 mins." },
      { name: "custom_ref", type: "string", required: false, description: "Optional client reference ID for tracking in DLR webhook", example: "ORD-99420" }
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.cell24x7.com/v1/sms/send" \\
  -H "Authorization: Bearer c24_live_9981240a87f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender_id": "AX-CELL24",
    "entity_id": "1701158000000000000",
    "template_id": "17071689201",
    "recipients": ["+919876543210"],
    "message": "Your Cell24x7 OTP for login is 948210. Valid for 10 mins.",
    "custom_ref": "ORD-99420"
  }'`,
      node: `const axios = require('axios');

async function sendSMS() {
  const response = await axios.post('https://api.cell24x7.com/v1/sms/send', {
    sender_id: "AX-CELL24",
    entity_id: "1701158000000000000",
    template_id: "17071689201",
    recipients: ["+919876543210"],
    message: "Your Cell24x7 OTP for login is 948210. Valid for 10 mins.",
    custom_ref: "ORD-99420"
  }, {
    headers: {
      'Authorization': 'Bearer c24_live_9981240a87f',
      'Content-Type': 'application/json'
    }
  });

  console.log(response.data);
}`,
      python: `import requests

url = "https://api.cell24x7.com/v1/sms/send"
headers = {
    "Authorization": "Bearer c24_live_9981240a87f",
    "Content-Type": "application/json"
}
payload = {
    "sender_id": "AX-CELL24",
    "entity_id": "1701158000000000000",
    "template_id": "17071689201",
    "recipients": ["+919876543210"],
    "message": "Your Cell24x7 OTP for login is 948210. Valid for 10 mins.",
    "custom_ref": "ORD-99420"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
      postman: `// Postman Pre-request Script & Environment Setup
pm.environment.set("baseUrl", "https://api.cell24x7.com/v1");
pm.environment.set("apiKey", "c24_live_9981240a87f");

// Request Body (JSON)
{
  "sender_id": "AX-CELL24",
  "entity_id": "1701158000000000000",
  "template_id": "17071689201",
  "recipients": ["+919876543210"],
  "message": "Your Cell24x7 OTP for login is 948210. Valid for 10 mins."
}`
    },
    response200: {
      status: "success",
      code: 200,
      message_id: "c24_sms_msg_9942801",
      submitted_at: "2026-09-03T13:40:00Z",
      recipient_count: 1,
      credits_deducted: 1,
      remaining_credits: 49842,
      status_details: [
        { recipient: "+919876543210", status: "DELIVERED", operator: "Airtel", delivery_time_ms: 840 }
      ]
    },
    response429: {
      status: "error",
      code: 429,
      error_code: "DAILY_LIMIT_EXCEEDED",
      message: "You have reached your daily credit dispatch limit of 100,000 messages. Contact sales@cell24x7.com to upgrade your daily quota.",
      retry_after_seconds: 3600
    }
  },
  "whatsapp-api": {
    id: "whatsapp-api",
    title: "Send WhatsApp Template Message",
    category: "WhatsApp Business API",
    method: "POST",
    path: "/v1/whatsapp/send-template",
    description: "Send pre-approved WhatsApp interactive template messages containing media headers, dynamic variables, and call-to-action buttons via Meta Cloud API.",
    headers: [
      { name: "Authorization", type: "string", required: true, description: "Bearer token with your Cell24x7 API Key", example: "Bearer c24_live_9981240a87f" },
      { name: "Content-Type", type: "string", required: true, description: "Must be application/json", example: "application/json" }
    ],
    params: [
      { name: "phone_number_id", type: "string", required: true, description: "Meta Registered WhatsApp Business Phone Number ID", example: "109841029841" },
      { name: "to", type: "string", required: true, description: "Customer phone number with country code without '+'", example: "919876543210" },
      { name: "template_name", type: "string", required: true, description: "Name of the approved WhatsApp template in Meta Manager", example: "order_dispatch_alert_v1" },
      { name: "language", type: "string", required: true, description: "Language code of the template", example: "en_US" },
      { name: "body_variables", type: "array", required: false, description: "Dynamic variable replacements for {{1}}, {{2}}, etc.", example: "[\"Rahul\", \"#C24-9982\", \"5:00 PM\"]" },
      { name: "buttons", type: "array", required: false, description: "Dynamic URL or payload for interactive template buttons", example: "[{ \"type\": \"url\", \"index\": 0, \"url_suffix\": \"C24-9982\" }]" }
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.cell24x7.com/v1/whatsapp/send-template" \\
  -H "Authorization: Bearer c24_live_9981240a87f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone_number_id": "109841029841",
    "to": "919876543210",
    "template_name": "order_dispatch_alert_v1",
    "language": "en_US",
    "body_variables": ["Rahul", "#C24-9982", "5:00 PM"]
  }'`,
      node: `const axios = require('axios');

async function sendWhatsApp() {
  const res = await axios.post('https://api.cell24x7.com/v1/whatsapp/send-template', {
    phone_number_id: "109841029841",
    to: "919876543210",
    template_name: "order_dispatch_alert_v1",
    language: "en_US",
    body_variables: ["Rahul", "#C24-9982", "5:00 PM"]
  }, {
    headers: { 'Authorization': 'Bearer c24_live_9981240a87f' }
  });

  console.log(res.data);
}`,
      python: `import requests

url = "https://api.cell24x7.com/v1/whatsapp/send-template"
headers = {"Authorization": "Bearer c24_live_9981240a87f"}
payload = {
    "phone_number_id": "109841029841",
    "to": "919876543210",
    "template_name": "order_dispatch_alert_v1",
    "language": "en_US",
    "body_variables": ["Rahul", "#C24-9982", "5:00 PM"]
}

r = requests.post(url, json=payload, headers=headers)
print(r.json())`,
      postman: `{
  "phone_number_id": "109841029841",
  "to": "919876543210",
  "template_name": "order_dispatch_alert_v1",
  "language": "en_US",
  "body_variables": ["Rahul", "#C24-9982", "5:00 PM"]
}`
    },
    response200: {
      result: "success",
      code: 200,
      message_id: "wamid.HBgLOTE5ODc2NTQzMjEwFQIAERgSQ0VMTDI0WDdDRU1UMDk4MgA=",
      messaging_product: "whatsapp",
      contacts: [{ input: "919876543210", wa_id: "919876543210" }],
      credits_deducted: 1,
      status: "sent"
    }
  },
  "rcs-api": {
    id: "rcs-api",
    title: "Send RCS Rich Media Card",
    category: "RCS Business Messaging",
    method: "POST",
    path: "/v1/rcs/send-carousel",
    description: "Deliver interactive Android Rich Communication Services (RCS) rich cards with high-resolution image banners, action chips, and verified brand identity.",
    headers: [
      { name: "Authorization", type: "string", required: true, description: "Bearer token API Key", example: "Bearer c24_live_9981240a87f" },
      { name: "Content-Type", type: "string", required: true, description: "application/json", example: "application/json" }
    ],
    params: [
      { name: "bot_id", type: "string", required: true, description: "Registered Cell24x7 RCS Bot ID", example: "rcs_cell24_bot_01" },
      { name: "to", type: "string", required: true, description: "Recipient mobile number", example: "+919876543210" },
      { name: "card_title", type: "string", required: true, description: "Title displayed on RCS Rich Card", example: "Festive Flash Sale - 40% OFF" },
      { name: "card_description", type: "string", required: true, description: "Detailed offer description", example: "Upgrade your enterprise messaging suite today with unlimited CPaaS routing." },
      { name: "media_url", type: "string", required: true, description: "HTTPS URL of high-resolution banner image", example: "https://cell24x7.com/assets/rcs-banner.jpg" },
      { name: "actions", type: "array", required: true, description: "Suggested reply buttons & actions", example: "[{ \"label\": \"Claim Offer\", \"type\": \"url\", \"uri\": \"https://cell24x7.com/claim\" }]" }
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.cell24x7.com/v1/rcs/send-carousel" \\
  -H "Authorization: Bearer c24_live_9981240a87f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "bot_id": "rcs_cell24_bot_01",
    "to": "+919876543210",
    "card_title": "Festive Flash Sale - 40% OFF",
    "card_description": "Upgrade your enterprise messaging suite today.",
    "media_url": "https://cell24x7.com/assets/rcs-banner.jpg"
  }'`,
      node: `// Node.js RCS API call
const axios = require('axios');
axios.post('https://api.cell24x7.com/v1/rcs/send-carousel', {
  bot_id: "rcs_cell24_bot_01",
  to: "+919876543210",
  card_title: "Festive Flash Sale - 40% OFF",
  media_url: "https://cell24x7.com/assets/rcs-banner.jpg"
}, { headers: { 'Authorization': 'Bearer c24_live_9981240a87f' } });`,
      python: `# Python RCS API call
import requests
requests.post('https://api.cell24x7.com/v1/rcs/send-carousel', json={
    'bot_id': 'rcs_cell24_bot_01',
    'to': '+919876543210',
    'card_title': 'Festive Flash Sale - 40% OFF'
}, headers={'Authorization': 'Bearer c24_live_9981240a87f'})`,
      postman: `{
  "bot_id": "rcs_cell24_bot_01",
  "to": "+919876543210",
  "card_title": "Festive Flash Sale - 40% OFF",
  "card_description": "Upgrade your enterprise messaging suite today.",
  "media_url": "https://cell24x7.com/assets/rcs-banner.jpg"
}`
    },
    response200: {
      result: "success",
      code: 200,
      rcs_msg_id: "rcs_msg_9841208941",
      delivery_channel: "google_rcs_carrier",
      status: "QUEUED_FOR_DELIVERY"
    }
  },
  "voice-api": {
    id: "voice-api",
    title: "Trigger Programmable Outbound Voice Call / IVR",
    category: "Voice API & IVR",
    method: "POST",
    path: "/v1/voice/outbound-call",
    description: "Initiate programmable voice calls, Text-to-Speech (TTS) Voice OTPs, and multi-level IVR call flows with real-time recording and webhooks.",
    headers: [
      { name: "Authorization", type: "string", required: true, description: "Bearer token", example: "Bearer c24_live_9981240a87f" },
      { name: "Content-Type", type: "string", required: true, description: "application/json", example: "application/json" }
    ],
    params: [
      { name: "caller_id", type: "string", required: true, description: "Assigned virtual phone number for caller ID", example: "+912249882200" },
      { name: "to", type: "string", required: true, description: "Destination mobile number", example: "+919876543210" },
      { name: "tts_prompt", type: "string", required: true, description: "Text string to synthesize to voice or audio file URL", example: "Welcome to Cell24x7. Your security code is 9 4 8 2." },
      { name: "voice_gender", type: "string", required: false, description: "female or male neural voice", example: "female" },
      { name: "record_call", type: "boolean", required: false, description: "Enable call audio recording", example: "true" }
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.cell24x7.com/v1/voice/outbound-call" \\
  -H "Authorization: Bearer c24_live_9981240a87f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "caller_id": "+912249882200",
    "to": "+919876543210",
    "tts_prompt": "Welcome to Cell24x7. Your security code is 9 4 8 2.",
    "record_call": true
  }'`,
      node: `// Node.js Voice API call
const axios = require('axios');
axios.post('https://api.cell24x7.com/v1/voice/outbound-call', {
  caller_id: "+912249882200",
  to: "+919876543210",
  tts_prompt: "Welcome to Cell24x7. Your security code is 9 4 8 2."
}, { headers: { 'Authorization': 'Bearer c24_live_9981240a87f' } });`,
      python: `# Python Voice API call
import requests
requests.post('https://api.cell24x7.com/v1/voice/outbound-call', json={
    'caller_id': '+912249882200',
    'to': '+919876543210',
    'tts_prompt': 'Welcome to Cell24x7. Your security code is 9 4 8 2.'
}, headers={'Authorization': 'Bearer c24_live_9981240a87f'})`,
      postman: `{
  "caller_id": "+912249882200",
  "to": "+919876543210",
  "tts_prompt": "Welcome to Cell24x7. Your security code is 9 4 8 2.",
  "record_call": true
}`
    },
    response200: {
      status: "success",
      code: 200,
      call_sid: "c24_call_884920184",
      call_status: "RINGING",
      dialed_at: "2026-09-03T13:40:05Z"
    }
  },
  "email-api": {
    id: "email-api",
    title: "Send Transactional & Marketing Email",
    category: "Email Messaging API",
    method: "POST",
    path: "/v1/email/send",
    description: "Send high-deliverability HTML email campaigns or instant transactional notifications with open/click tracking and dedicated IP pools.",
    headers: [
      { name: "Authorization", type: "string", required: true, description: "Bearer token", example: "Bearer c24_live_9981240a87f" },
      { name: "Content-Type", type: "string", required: true, description: "application/json", example: "application/json" }
    ],
    params: [
      { name: "from", type: "string", required: true, description: "Sender email address (verified domain)", example: "updates@cell24x7.com" },
      { name: "to", type: "array", required: true, description: "List of recipient email addresses", example: "[\"customer@example.com\"]" },
      { name: "subject", type: "string", required: true, description: "Email subject line", example: "Your Monthly Cell24x7 CPaaS Intelligence Summary" },
      { name: "html_content", type: "string", required: true, description: "Full HTML body string or template merge tag", example: "<h1>Welcome to Cell24x7</h1><p>Your API key is active.</p>" },
      { name: "track_opens", type: "boolean", required: false, description: "Enable pixel open tracking", example: "true" }
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.cell24x7.com/v1/email/send" \\
  -H "Authorization: Bearer c24_live_9981240a87f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "updates@cell24x7.com",
    "to": ["customer@example.com"],
    "subject": "Your Monthly Cell24x7 CPaaS Intelligence Summary",
    "html_content": "<h1>Welcome</h1><p>Your account is ready.</p>",
    "track_opens": true
  }'`,
      node: `// Node.js Email API call
const axios = require('axios');
axios.post('https://api.cell24x7.com/v1/email/send', {
  from: "updates@cell24x7.com",
  to: ["customer@example.com"],
  subject: "Your Monthly Cell24x7 CPaaS Intelligence Summary",
  html_content: "<h1>Welcome</h1><p>Your account is ready.</p>"
}, { headers: { 'Authorization': 'Bearer c24_live_9981240a87f' } });`,
      python: `# Python Email API call
import requests
requests.post('https://api.cell24x7.com/v1/email/send', json={
    'from': 'updates@cell24x7.com',
    'to': ['customer@example.com'],
    'subject': 'Your Monthly Cell24x7 CPaaS Intelligence Summary',
    'html_content': '<h1>Welcome</h1><p>Your account is ready.</p>'
}, headers={'Authorization': 'Bearer c24_live_9981240a87f'})`,
      postman: `{
  "from": "updates@cell24x7.com",
  "to": ["customer@example.com"],
  "subject": "Your Monthly Cell24x7 CPaaS Intelligence Summary",
  "html_content": "<h1>Welcome</h1><p>Your account is ready.</p>",
  "track_opens": true
}`
    },
    response200: {
      status: "success",
      code: 200,
      email_id: "c24_em_774920194",
      accepted: ["customer@example.com"],
      rejected: []
    }
  }
};

export default function ApiDocs() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>("sms-api");
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "postman" | "node" | "python">("curl");
  const [copiedCode, setCopiedCode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentData = endpointsData[selectedEndpoint] || endpointsData["sms-api"];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <Layout>
      {/* Top Docs Banner */}
      <section className="bg-slate-950 border-b border-slate-800 text-slate-100 py-8 px-4 sm:px-6">
        <div className="container-custom max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 text-xs font-mono font-medium mb-3 border border-indigo-800">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Cell24x7 CPaaS API Documentation v1.4
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Developer API & Postman Integration
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Complete REST API reference, DLT compliance guidelines, rate limits, daily credits quota, and interactive Postman collections.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button 
                className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs gap-2 shadow-lg shadow-orange-950"
                onClick={() => {
                  const collectionJson = JSON.stringify(endpointsData, null, 2);
                  const blob = new Blob([collectionJson], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "Cell24x7_CPaaS_Postman_Collection.json";
                  a.click();
                }}
              >
                <Download className="w-4 h-4" /> Download Postman Collection
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 text-xs gap-2" asChild>
                <Link to="/book-demo">Get API Key</Link>
              </Button>
            </div>
          </div>

          {/* Quick Search */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search endpoints (e.g. /v1/sms/send, DLT, Rate Limits, WhatsApp)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>
        </div>
      </section>

      {/* Docs Body Layout */}
      <div className="bg-background text-foreground min-h-screen">
        <div className="container-custom max-w-7xl py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Sidebar Navigation */}
            <aside className="lg:col-span-3 bg-card border border-border rounded-2xl p-4 sticky top-24 shadow-sm">
              <div className="space-y-6">
                {docsNavigation.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                      {group.category}
                    </h3>
                    <ul className="space-y-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedEndpoint === item.id;
                        return (
                          <li key={item.id}>
                            <button
                              onClick={() => setSelectedEndpoint(item.id)}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                                isSelected 
                                  ? "bg-indigo-600 text-white font-semibold shadow-sm" 
                                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-indigo-500"}`} />
                              <span>{item.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-9 space-y-8">

              {/* Special View for Overview */}
              {selectedEndpoint === "overview" && (
                <div className="space-y-6 card-feature p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Cell24x7 CPaaS API Overview</h2>
                      <p className="text-sm text-muted-foreground">High-performance REST API architecture for Omnichannel messaging</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-slate-400">Production Base URL: </span>
                      <strong className="text-emerald-400">https://api.cell24x7.com/v1</strong>
                    </div>
                    <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-800">
                      STATUS: 99.99% ONLINE
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Cell24x7 API allows enterprise applications to send transactional SMS, WhatsApp messages, Google RCS rich cards, Voice OTPs, and emails through a single high-throughput REST gateway with automatic fallback logic and TRAI DLT compliance.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl border border-border bg-secondary/30">
                      <h4 className="font-semibold text-xs mb-1">⚡ Ultra-Low Latency</h4>
                      <p className="text-xs text-muted-foreground">Sub-50ms HTTP request routing with direct carrier pipes.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-secondary/30">
                      <h4 className="font-semibold text-xs mb-1">🛡️ DLT Automation</h4>
                      <p className="text-xs text-muted-foreground">Automatic DLT Entity & Content Template ID validation.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-secondary/30">
                      <h4 className="font-semibold text-xs mb-1">🔄 Multi-Channel Fallback</h4>
                      <p className="text-xs text-muted-foreground">Reroute un-delivered WhatsApp messages automatically to SMS.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Special View for Authentication */}
              {selectedEndpoint === "auth" && (
                <div className="space-y-6 card-feature p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center font-bold">
                      <Key className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Authentication & Security</h2>
                      <p className="text-sm text-muted-foreground">Authenticate your API calls securely via HTTP Bearer Tokens</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All Cell24x7 REST API endpoints require HTTP Bearer authentication using your account secret key. You can generate and rotate API keys inside your Cell24x7 Dashboard under Settings &gt; Developer API Keys.
                  </p>

                  <div className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 border border-slate-800">
                    <span className="text-slate-500">// Header format for all requests:</span>
                    <div>Authorization: Bearer <span className="text-emerald-400">c24_live_9981240a87f884210</span></div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-amber-600 dark:text-amber-300 text-xs leading-relaxed">
                    <strong>⚠️ Security Requirement:</strong> Keep your secret API key safe. Do not expose live secret keys in public client-side code or browser applications. Always call Cell24x7 APIs from your backend server.
                  </div>
                </div>
              )}

              {/* Special View for Credits and Daily Limits */}
              {selectedEndpoint === "limits" && (
                <div className="space-y-6 card-feature p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-600 flex items-center justify-center font-bold">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Credits & Daily Rate Limits</h2>
                      <p className="text-sm text-muted-foreground">Quota management, daily limits, and HTTP 429 response handling</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm">Default Rate Limits & Throughput</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-border bg-secondary/20 space-y-1">
                        <span className="text-xs text-muted-foreground block">Max Burst Rate</span>
                        <strong className="text-lg font-mono text-indigo-600">500 Req/Sec</strong>
                        <p className="text-[11px] text-muted-foreground">Parallel HTTP requests allowed across all channels.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-border bg-secondary/20 space-y-1">
                        <span className="text-xs text-muted-foreground block">Standard Daily Credit Quota</span>
                        <strong className="text-lg font-mono text-emerald-600">100,000 Messages/Day</strong>
                        <p className="text-[11px] text-muted-foreground">Upgradeable on request via Enterprise tier.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">HTTP 429 Too Many Requests Payload</h3>
                    <p className="text-xs text-muted-foreground">When your account exceeds daily limits or credit balance drops to zero, the API returns HTTP 429:</p>
                    <div className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 border border-slate-800">
                      <pre>{JSON.stringify(endpointsData["sms-api"].response429, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Endpoint Documentation View */}
              {endpointsData[selectedEndpoint] && (
                <div className="space-y-8">

                  {/* Header & Method Badge */}
                  <div className="card-feature p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold text-white ${
                        currentData.method === "POST" ? "bg-emerald-600" : "bg-blue-600"
                      }`}>
                        {currentData.method}
                      </span>
                      <span className="font-mono text-sm font-semibold text-foreground bg-secondary px-3 py-1 rounded-md">
                        https://api.cell24x7.com{currentData.path}
                      </span>
                      <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan font-medium">
                        {currentData.category}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {currentData.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {currentData.description}
                    </p>
                  </div>

                  {/* HTTP Headers Table */}
                  <div className="card-feature p-6 space-y-4">
                    <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-indigo-500" /> Required Request Headers
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-border bg-secondary/50 text-muted-foreground font-semibold">
                            <th className="p-3">Header Key</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Required</th>
                            <th className="p-3">Description & Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentData.headers.map((h) => (
                            <tr key={h.name} className="border-b border-border/40 hover:bg-secondary/20">
                              <td className="p-3 font-mono font-semibold text-indigo-600 dark:text-indigo-400">{h.name}</td>
                              <td className="p-3 font-mono text-muted-foreground">{h.type}</td>
                              <td className="p-3">
                                {h.required ? (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold">Required</span>
                                ) : (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground">Optional</span>
                                )}
                              </td>
                              <td className="p-3 text-muted-foreground">
                                <div>{h.description}</div>
                                <code className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">{h.example}</code>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Request Parameters Table */}
                  <div className="card-feature p-6 space-y-4">
                    <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-emerald-500" /> JSON Body Parameters
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-border bg-secondary/50 text-muted-foreground font-semibold">
                            <th className="p-3">Field Name</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Required</th>
                            <th className="p-3">Description & Sample Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentData.params.map((p) => (
                            <tr key={p.name} className="border-b border-border/40 hover:bg-secondary/20">
                              <td className="p-3 font-mono font-bold text-foreground">{p.name}</td>
                              <td className="p-3 font-mono text-muted-foreground">{p.type}</td>
                              <td className="p-3">
                                {p.required ? (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold">Required</span>
                                ) : (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground">Optional</span>
                                )}
                              </td>
                              <td className="p-3 text-muted-foreground space-y-1">
                                <div>{p.description}</div>
                                <div className="text-[11px] font-mono text-indigo-500 bg-secondary/60 px-2 py-0.5 rounded w-fit">{p.example}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Interactive Postman Visual & Code Switcher */}
                  <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-slate-100 space-y-6 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="font-semibold text-sm text-white">Postman & Code Generator</span>
                      </div>

                      {/* Code Tabs */}
                      <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        <button
                          onClick={() => setActiveCodeTab("curl")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition ${
                            activeCodeTab === "curl" ? "bg-orange-600 text-white" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          cURL
                        </button>
                        <button
                          onClick={() => setActiveCodeTab("postman")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition ${
                            activeCodeTab === "postman" ? "bg-orange-600 text-white" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Postman Collection
                        </button>
                        <button
                          onClick={() => setActiveCodeTab("node")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition ${
                            activeCodeTab === "node" ? "bg-orange-600 text-white" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Node.js
                        </button>
                        <button
                          onClick={() => setActiveCodeTab("python")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition ${
                            activeCodeTab === "python" ? "bg-orange-600 text-white" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Python
                        </button>
                      </div>
                    </div>

                    {/* Code Display Container */}
                    <div className="relative bg-slate-900/90 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                      <button
                        onClick={() => handleCopyCode(currentData.codeExamples[activeCodeTab])}
                        className="absolute right-3 top-3 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition border border-slate-700"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedCode ? "Copied!" : "Copy Code"}
                      </button>

                      <pre className="pr-20 leading-relaxed text-slate-300">
                        {currentData.codeExamples[activeCodeTab]}
                      </pre>
                    </div>

                    {/* Postman Simulated HTTP Response */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400" /> Simulated Postman Response Preview
                        </span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                            200 OK
                          </span>
                          <span>Time: <strong>42 ms</strong></span>
                          <span>Size: <strong>318 B</strong></span>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                        <pre>{JSON.stringify(currentData.response200, null, 2)}</pre>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Special View for Postman Testing Guide */}
              {selectedEndpoint === "postman" && (
                <div className="space-y-6 card-feature p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-600 flex items-center justify-center font-bold">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Testing APIs with Postman</h2>
                      <p className="text-sm text-muted-foreground">Step-by-step guide to testing Cell24x7 APIs in Postman</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-border bg-secondary/30 space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        1. Import Postman Collection
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Click the "Download Postman Collection" button at the top of this documentation page. Open Postman, click <strong>Import</strong>, and select the downloaded <code className="font-mono text-indigo-500">Cell24x7_CPaaS_Postman_Collection.json</code> file.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-secondary/30 space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        2. Set Up Authorization Bearer Token
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Go to the Collection level <strong>Authorization</strong> tab in Postman. Set Type to <strong>Bearer Token</strong> and paste your Cell24x7 API Secret Key.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-secondary/30 space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        3. Execute Requests & Monitor Response
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Select any endpoint (e.g., SMS, WhatsApp, RCS, Voice) and hit <strong>Send</strong>. Postman will receive real-time JSON responses with status codes and delivery IDs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
}
