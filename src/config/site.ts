export const siteConfig = {
  name: "Cell24x7",
  description: "AI-powered omnichannel communication & automation platform",
  url: "https://cell24x7.com",
  tagline: "One Inbox. All Channels. Zero Chaos.",
  
  navigation: [
    { name: "Features", href: "/features" },
    { name: "Channels", href: "/channels" },
    { name: "Pricing", href: "/pricing" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Company", href: "/company" },
    { name: "Partners", href: "/partners" },
    { name: "Integrations", href: "/integrations" },
    { name: "Resources", href: "/resources" },
  ],
  
  cta: {
    primary: { text: "Book a Demo", href: "/book-demo" },
    secondary: { text: "Start Free Trial", href: "/signup" },
  },
  
  social: {
    twitter: "https://twitter.com/cell24x7",
    linkedin: "https://linkedin.com/company/cell24x7",
    facebook: "https://facebook.com/cell24x7",
  },
  
  contact: {
    email: "sales@cell24x7.com",
    phone: "+91 87797 21034",
    whatsapp: "918779721034",
    location: "Phoenix Marketcity",
    address: "No.3B-05:, PHOENIX MARKETCITY, Paragon Plaza, Kurla West, Kurla, Mumbai, Maharashtra 400070",
  },

  // Simple admin password for local demo dashboard (dummy password)
  adminPassword: "cell24admin",

};

export const channels = [
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    icon: "MessageCircle",
    color: "from-green-400 to-green-600",
    description: "Official WhatsApp Business API integration for scalable customer communication",
    features: ["Verified Business Profile", "Broadcast Messages", "Interactive Buttons", "Catalog Integration"],
  },
  {
    id: "instagram",
    name: "Instagram DM",
    icon: "Instagram",
    color: "from-pink-500 to-purple-600",
    description: "Manage Instagram Direct Messages and Story replies from your unified inbox",
    features: ["Story Replies", "Quick Replies", "Product Tags", "Automated Responses"],
  },
  {
    id: "messenger",
    name: "Facebook Messenger",
    icon: "Facebook",
    color: "from-blue-500 to-blue-700",
    description: "Connect with customers on Facebook Messenger with rich media support",
    features: ["Persistent Menu", "Rich Media", "Messenger Ads", "Handover Protocol"],
  },
  {
    id: "sms",
    name: "SMS",
    icon: "Smartphone",
    color: "from-cyan-400 to-blue-500",
    description: "Reach customers globally with SMS messaging",
    features: ["Global Coverage", "Global Coverage", "Verified Sender"],
  },
  {
    id: "rcs",
    name: "RCS",
    icon: "MessageSquare",
    color: "from-green-400 to-cyan-500",
    description: "Rich Communication Services (RCS) for enhanced messaging experiences",
    features: ["Rich Cards", "Suggested Actions", "Verified Sender"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    icon: "MessageCircle",
    color: "from-green-400 to-green-600",
    description: "Official WhatsApp Business API integration for scalable customer communication",
    features: ["Verified Business Profile", "Broadcast Messages", "Interactive Buttons", "Catalog Integration"],
  },
  {
    id: "email",
    name: "Email",
    icon: "Mail",
    color: "from-amber-400 to-orange-500",
    description: "Professional email campaigns with tracking and automation",
    features: ["Email Templates", "Open Tracking", "Click Analytics", "A/B Testing"],
  },
  {
    id: "dlt",
    name: "DLT (India)",
    icon: "Shield",
    color: "from-emerald-400 to-emerald-600",
    description: "TRAI DLT registration, templates, headers, and compliance support",
    features: ["Entity Registration", "Header Approval", "Template Registration", "Consent Management"],
  },
  {
    id: "voice",
    name: "Voice Calling",
    icon: "Phone",
    color: "from-violet-400 to-purple-600",
    description: "Cloud-based voice calling with IVR and call recording",
    features: ["IVR Builder", "Call Recording", "Click-to-Call", "Voice Bots"],
  },
];

export const features = [
  {
    id: "unified-inbox",
    name: "Unified Inbox",
    description: "All your customer conversations from every channel in one intelligent dashboard",
    icon: "Inbox",
    benefits: ["Single view for all channels", "Smart conversation threading", "Team collaboration tools", "Priority inbox filtering"],
    demoVideo: {
      url: undefined, // Replace with actual video URL when available
      hasVideo: false,
      shortDescription: "See how all your customer conversations come together in one powerful dashboard.",
    },
  },
  {
    id: "ai-automation",
    name: "AI Automation & Bots",
    description: "Build intelligent chatbots and automate workflows without coding",
    icon: "Bot",
    benefits: ["No-code bot builder", "AI-powered responses", "Intent recognition", "Seamless handoff to agents"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "Watch how easy it is to build AI-powered chatbots without any coding.",
    },
  },
  {
    id: "campaigns",
    name: "Campaigns & Broadcasts",
    description: "Send targeted messages to thousands of customers with personalization",
    icon: "Send",
    benefits: ["Segment audiences", "Schedule campaigns", "Template management", "Delivery analytics"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "Learn how to create and schedule personalized broadcast campaigns.",
    },
  },
  {
    id: "crm",
    name: "CRM & Segmentation",
    description: "Built-in CRM to track customer journeys and segment for targeted engagement",
    icon: "Users",
    benefits: ["Contact management", "Custom fields", "Tags & segments", "Journey tracking"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "Discover how to segment customers and track their journey effectively.",
    },
  },
  {
    id: "team-inbox",
    name: "Team Inbox & Roles",
    description: "Collaborate with your team using roles, permissions, and smart assignment",
    icon: "UserCheck",
    benefits: ["Role-based access", "Auto-assignment", "Internal notes", "Performance tracking"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "See how teams collaborate with smart assignment and role management.",
    },
  },
  {
    id: "analytics",
    name: "Analytics & Reports",
    description: "Data-driven insights to optimize your customer communication strategy",
    icon: "BarChart3",
    benefits: ["Real-time dashboards", "Custom reports", "Team metrics", "Channel performance"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "Explore real-time dashboards and custom reporting capabilities.",
    },
  },
  {
    id: "apis",
    name: "APIs, Webhooks & OAuth",
    description: "Extend functionality with robust APIs and seamless integrations",
    icon: "Plug",
    benefits: ["REST APIs", "Webhooks", "OAuth 2.0", "Developer docs"],
    demoVideo: {
      url: undefined,
      hasVideo: false,
      shortDescription: "Learn about our developer-friendly APIs and integration options.",
    },
  },
];

export const pricing = [
  {
    name: "Starter",
    price: { monthly: 49, yearly: 39 },
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 contacts",
      "2 team members",
      "3 channels included",
      "Basic automation",
      "Email support",
      "Basic analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: 149, yearly: 119 },
    description: "For growing teams that need more power",
    features: [
      "Up to 10,000 contacts",
      "10 team members",
      "All channels included",
      "Advanced automation",
      "Priority support",
      "Advanced analytics",
      "Custom fields",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: { monthly: 349, yearly: 279 },
    description: "For established businesses scaling up",
    features: [
      "Up to 50,000 contacts",
      "Unlimited team members",
      "All channels + premium",
      "AI-powered automation",
      "24/7 priority support",
      "Custom reports",
      "Webhooks & OAuth",
      "Dedicated CSM",
      "SLA guarantee",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: { monthly: null, yearly: null },
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited contacts",
      "Unlimited team members",
      "All channels + custom",
      "Custom AI training",
      "Enterprise SLA",
      "On-premise option",
      "Custom integrations",
      "Dedicated support team",
      "Security & compliance",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export const useCases = [
  {
    id: "ecommerce",
    name: "E-commerce & D2C",
    icon: "ShoppingCart",
    description: "Boost sales and reduce cart abandonment with automated messaging",
    benefits: ["Order notifications", "Cart recovery", "Product recommendations", "Review collection"],
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Engage students and parents with timely communication",
    benefits: ["Admission queries", "Fee reminders", "Event notifications", "Parent updates"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    description: "Improve patient experience with secure, compliant messaging",
    benefits: ["Appointment reminders", "Health tips", "Lab results", "Follow-up care"],
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: "Plane",
    description: "Deliver exceptional guest experiences from booking to checkout",
    benefits: ["Booking confirmations", "Check-in alerts", "Concierge services", "Feedback collection"],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "Building",
    description: "Nurture leads and close deals faster with automated follow-ups",
    benefits: ["Property alerts", "Viewing schedules", "Document sharing", "Payment reminders"],
  },
  {
    id: "bfsi",
    name: "BFSI",
    icon: "Landmark",
    description: "Secure, compliant customer communication for financial services",
    benefits: ["Transaction alerts", "KYC reminders", "Policy updates", "Claims tracking"],
  },
];

export const integrations = [
  { name: "Shopify", category: "ecommerce", logo: "🛒" },
  { name: "WooCommerce", category: "ecommerce", logo: "🛍️" },
  { name: "Salesforce", category: "crm", logo: "☁️" },
  { name: "HubSpot", category: "crm", logo: "🧡" },
  { name: "Zoho", category: "crm", logo: "📊" },
  { name: "Stripe", category: "payment", logo: "💳" },
  { name: "Razorpay", category: "payment", logo: "💰" },
  { name: "Zapier", category: "automation", logo: "⚡" },
  { name: "Make", category: "automation", logo: "🔧" },
  { name: "Google Sheets", category: "productivity", logo: "📗" },
  { name: "Slack", category: "productivity", logo: "💬" },
  { name: "Freshdesk", category: "support", logo: "🎫" },
];

export const testimonials = [
  {
    quote: "Cell24x7 transformed how we handle customer support. Response times dropped by 60% and satisfaction scores are at an all-time high.",
  },
  {
    quote: "The unified inbox is a game-changer. Our team finally has complete visibility across all channels without switching between tools.",
  },
  {
    quote: "We've automated 40% of our customer inquiries with Cell24x7's AI bots. The ROI was visible within the first month.",
  },
];

export const stats = [
  { value: "10M+", label: "Messages Delivered Daily" },
  { value: "5,000+", label: "Businesses Trust Us" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "40%", label: "Avg. Cost Reduction" },
];
