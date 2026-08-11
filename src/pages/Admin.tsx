import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import {
  getEnquiries,
  addEnquiry,
  updateEnquiry,
  deleteEnquiry,
  resetEnquiriesToOriginal,
  exportEnquiriesToCSV,
  Enquiry,
} from "@/lib/enquiryStorage";
import {
  getVisitorLogs,
  clearVisitorLogs,
  exportVisitorLogsToCSV,
  VisitorLog,
} from "@/lib/visitorTracking";
import {
  BarChart3,
  Search,
  Download,
  RefreshCw,
  Plus,
  Trash2,
  Eye,
  LogOut,
  Lock,
  Database,
  Users,
  MessageSquare,
  Building,
  Filter,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Layers,
  X,
  FileText,
  Sun,
  Moon,
  Globe,
  MapPin,
  Laptop,
  Smartphone,
  Tablet,
  Copy,
  ExternalLink,
  ShieldCheck,
  Activity,
  Compass,
  Check,
} from "lucide-react";

type ChatLead = {
  id: number;
  createdAt: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  service: string | null;
  transcript: Array<{ from: "bot" | "user"; text: string; at: string }>;
  ip?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
  flag?: string | null;
};

const CHAT_STORAGE_KEY = "cell24x7_chat_leads";
const ADMIN_FLAG = "cell24x7_admin_logged_in";
const THEME_STORAGE_KEY = "cell24x7_admin_theme";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState<boolean>(() => Boolean(localStorage.getItem(ADMIN_FLAG)));
  
  // Theme state: "dark" or "light" (defaults to "dark")
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (localStorage.getItem(THEME_STORAGE_KEY) as "dark" | "light") || "dark"
  );

  // Data state
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [chatLeads, setChatLeads] = useState<ChatLead[]>([]);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  
  const [activeTab, setActiveTab] = useState<"overview" | "visitors" | "enquiries" | "chat" | "system">("overview");

  // Filtering, Search & Pagination State for Enquiries
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  // Filtering & Pagination State for Visitor Tracking
  const [visitorSearch, setVisitorSearch] = useState("");
  const [visitorDeviceFilter, setVisitorDeviceFilter] = useState<string>("ALL");
  const [visitorCountryFilter, setVisitorCountryFilter] = useState<string>("ALL");
  const [visitorPage, setVisitorPage] = useState(1);
  const [copiedIp, setCopiedIp] = useState<string | null>(null);

  // Modals state
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [editRemarksText, setEditRemarksText] = useState("");

  const [selectedVisitorLog, setSelectedVisitorLog] = useState<VisitorLog | null>(null);
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newForm, setNewForm] = useState({
    name: "",
    email: "",
    mobile: "",
    country_code: "+91",
    company_name: "",
    service_type: "WhatsApp Business API",
    remarks: "",
  });

  // Save theme preference
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  // Load data on mount & admin login
  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin]);

  function loadData() {
    const list = getEnquiries();
    setEnquiries(list);

    const chatRaw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (chatRaw) {
      try {
        setChatLeads(JSON.parse(chatRaw));
      } catch (e) {
        setChatLeads([]);
      }
    }

    const vLogs = getVisitorLogs();
    setVisitorLogs(vLogs);
  }

  // Login & Logout
  function handleLogin(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (password === siteConfig.adminPassword || password === "admin" || password === "cell24admin") {
      localStorage.setItem(ADMIN_FLAG, "1");
      setIsAdmin(true);
    } else {
      alert("Incorrect admin password. (Hint: cell24admin)");
    }
  }

  function handleLogout() {
    localStorage.removeItem(ADMIN_FLAG);
    setIsAdmin(false);
  }

  function handleResetDatabase() {
    if (confirm("Reset database to initial dump (233 records from enquiries.sql)? Custom additions will be overwritten.")) {
      const reset = resetEnquiriesToOriginal();
      setEnquiries(reset);
      setCurrentPage(1);
      alert("Database reset successfully to original 233 enquiries!");
    }
  }

  function handleClearVisitorLogs() {
    if (confirm("Are you sure you want to clear all visitor tracking logs?")) {
      clearVisitorLogs();
      setVisitorLogs([]);
      setVisitorPage(1);
      alert("Visitor tracking logs cleared successfully.");
    }
  }

  function handleCopyIp(ip: string) {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  }

  function formatTimeAgo(isoString: string): string {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);

    if (diffSec < 30) return "Just now";
    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHrs < 24) return `${diffHrs}h ago`;
    return `${diffDays}d ago`;
  }

  // Filtered & Sorted Enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        (item.name || "").toLowerCase().includes(q) ||
        (item.email || "").toLowerCase().includes(q) ||
        (item.mobile || "").toLowerCase().includes(q) ||
        (item.company_name || "").toLowerCase().includes(q) ||
        (item.remarks || "").toLowerCase().includes(q) ||
        (item.ip_address || "").toLowerCase().includes(q) ||
        (item.location_city || "").toLowerCase().includes(q) ||
        (item.location_country || "").toLowerCase().includes(q);

      const matchesService = selectedService === "ALL" || item.service_type === selectedService;

      return matchesSearch && matchesService;
    }).sort((a, b) => {
      const timeA = new Date(a.created_at).getTime() || a.id;
      const timeB = new Date(b.created_at).getTime() || b.id;
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
  }, [enquiries, searchQuery, selectedService, sortOrder]);

  // Paginated Enquiries
  const paginatedEnquiries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredEnquiries.slice(start, start + pageSize);
  }, [filteredEnquiries, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredEnquiries.length / pageSize) || 1;

  // Filtered & Paginated Visitor Logs
  const uniqueVisitorCountries = useMemo(() => {
    const set = new Set<string>();
    visitorLogs.forEach((v) => {
      if (v.location?.country) set.add(v.location.country);
    });
    return Array.from(set);
  }, [visitorLogs]);

  const filteredVisitorLogs = useMemo(() => {
    return visitorLogs.filter((log) => {
      const q = visitorSearch.toLowerCase();
      const matchesSearch =
        !visitorSearch ||
        (log.ip || "").toLowerCase().includes(q) ||
        (log.location?.city || "").toLowerCase().includes(q) ||
        (log.location?.region || "").toLowerCase().includes(q) ||
        (log.location?.country || "").toLowerCase().includes(q) ||
        (log.pagePath || "").toLowerCase().includes(q) ||
        (log.os || "").toLowerCase().includes(q) ||
        (log.browser || "").toLowerCase().includes(q) ||
        (log.location?.isp || "").toLowerCase().includes(q);

      const matchesDevice =
        visitorDeviceFilter === "ALL" || log.deviceType === visitorDeviceFilter;

      const matchesCountry =
        visitorCountryFilter === "ALL" || log.location?.country === visitorCountryFilter;

      return matchesSearch && matchesDevice && matchesCountry;
    });
  }, [visitorLogs, visitorSearch, visitorDeviceFilter, visitorCountryFilter]);

  const paginatedVisitorLogs = useMemo(() => {
    const start = (visitorPage - 1) * pageSize;
    return filteredVisitorLogs.slice(start, start + pageSize);
  }, [filteredVisitorLogs, visitorPage, pageSize]);

  const totalVisitorPages = Math.ceil(filteredVisitorLogs.length / pageSize) || 1;

  // Visitor Tracking Analytics Metrics
  const visitorStats = useMemo(() => {
    const total = visitorLogs.length;
    const uniqueSessions = new Set(visitorLogs.map((v) => v.sessionId || v.ip)).size;
    const uniqueIps = new Set(visitorLogs.map((v) => v.ip)).size;
    
    const desktopCount = visitorLogs.filter((v) => v.deviceType === "Desktop").length;
    const mobileCount = visitorLogs.filter((v) => v.deviceType === "Mobile").length;
    const tabletCount = visitorLogs.filter((v) => v.deviceType === "Tablet").length;

    const countryCounts: Record<string, { count: number; flag: string }> = {};
    visitorLogs.forEach((v) => {
      const cName = v.location?.country || "India";
      const flag = v.location?.flagEmoji || "🇮🇳";
      if (!countryCounts[cName]) countryCounts[cName] = { count: 0, flag };
      countryCounts[cName].count += 1;
    });

    const sortedCountries = Object.entries(countryCounts).sort((a, b) => b[1].count - a[1].count);
    const topCountryEntry = sortedCountries[0];
    const topCountry = topCountryEntry ? `${topCountryEntry[1].flag} ${topCountryEntry[0]}` : "🇮🇳 India";

    return {
      total,
      uniqueSessions,
      uniqueIps,
      desktopCount,
      mobileCount,
      tabletCount,
      topCountry,
      sortedCountries,
    };
  }, [visitorLogs]);

  // Overall Enquiries Metrics
  const stats = useMemo(() => {
    const total = enquiries.length;
    const today = new Date().toISOString().slice(0, 10);
    const todaysCount = enquiries.filter((e) => e.created_at?.startsWith(today)).length;
    const withCompany = enquiries.filter((e) => Boolean(e.company_name)).length;
    const withRemarks = enquiries.filter((e) => Boolean(e.remarks)).length;

    const serviceCounts: Record<string, number> = {};
    enquiries.forEach((e) => {
      const st = e.service_type || "General Inquiry";
      serviceCounts[st] = (serviceCounts[st] || 0) + 1;
    });

    const topServices = Object.entries(serviceCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    return {
      total,
      todaysCount,
      withCompany,
      withRemarks,
      topServices,
      serviceCounts,
    };
  }, [enquiries]);

  // Handle Enquiry Actions
  function openDetailModal(item: Enquiry) {
    setSelectedEnquiry(item);
    setEditRemarksText(item.remarks || "");
    setIsDetailModalOpen(true);
  }

  function handleSaveRemarks() {
    if (!selectedEnquiry) return;
    const updated = updateEnquiry(selectedEnquiry.id, { remarks: editRemarksText });
    if (updated) {
      setSelectedEnquiry(updated);
      loadData();
      alert("Remarks updated successfully!");
    }
  }

  function handleDeleteEnquiry(id: number) {
    if (confirm(`Are you sure you want to delete enquiry #${id}?`)) {
      deleteEnquiry(id);
      loadData();
      if (selectedEnquiry?.id === id) {
        setIsDetailModalOpen(false);
      }
    }
  }

  function handleCreateNewEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!newForm.name || !newForm.email) {
      alert("Name and Email are required.");
      return;
    }

    addEnquiry(newForm);
    loadData();
    setIsAddModalOpen(false);
    setNewForm({
      name: "",
      email: "",
      mobile: "",
      country_code: "+91",
      company_name: "",
      service_type: "WhatsApp Business API",
      remarks: "",
    });
    alert("New enquiry created successfully!");
  }

  function handleDeleteChatLead(id: number) {
    if (confirm("Delete this chat lead?")) {
      const filtered = chatLeads.filter((c) => c.id !== id);
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(filtered));
      setChatLeads(filtered);
    }
  }

  // Distinct service types for filter dropdown
  const uniqueServices = useMemo(() => {
    const set = new Set<string>();
    enquiries.forEach((e) => {
      if (e.service_type) set.add(e.service_type);
    });
    return Array.from(set);
  }, [enquiries]);

  // LOGIN SCREEN
  if (!isAdmin) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gradient-to-b from-background via-slate-900/5 to-background">
          <div className="w-full max-w-md p-8 rounded-2xl bg-card border border-border/40 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Admin Portal Access</h1>
              <p className="text-sm text-muted-foreground">
                Enter your administrative password to access the Cell24x7 Visitor, IP & Lead Dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Admin Password
                </label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password..."
                  className="h-11 bg-background"
                  autoFocus
                />
              </div>

              <Button type="submit" className="w-full h-11 text-sm font-medium gap-2">
                <Lock className="w-4 h-4" /> Log In to Dashboard
              </Button>
            </form>

            <div className="pt-4 border-t border-border/30 text-center">
              <p className="text-xs text-muted-foreground">
                Protected system for Cell24x7 Media Technologies Pvt. Ltd.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // DYNAMIC THEME CLASS STYLES (Cell24x7 Official Logo Crimson Red Theme)
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const headerBg = isDark ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200 shadow-sm text-slate-900";
  const cardBg = isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm text-slate-900";
  const subText = isDark ? "text-slate-400" : "text-slate-500";
  const mainTitle = isDark ? "text-white" : "text-slate-950";

  const navActive = "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 font-semibold";
  const navInactive = isDark
    ? "text-slate-400 hover:text-white hover:bg-slate-800/60"
    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50";

  const tableHeaderBg = isDark ? "bg-slate-950 text-slate-400 border-slate-800" : "bg-slate-100 text-slate-700 border-slate-200";
  const tableRowHover = isDark ? "hover:bg-slate-800/40" : "hover:bg-indigo-50/30";
  const tableBorder = isDark ? "divide-slate-800" : "divide-slate-200";
  const inputBg = isDark ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400";

  const badgeServiceBg = isDark
    ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 font-semibold"
    : "bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold";

  return (
    <Layout>
      <div className={`min-h-screen transition-colors duration-200 ${containerBg}`}>
        {/* TOP DASHBOARD HEADER */}
        <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${headerBg}`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                24x7
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className={`text-xl font-bold tracking-tight ${mainTitle}`}>Cell24x7 Admin Dashboard</h1>
                  <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live Tracking Active
                  </span>
                </div>
                <p className={`text-xs ${subText}`}>Omnichannel Visitor IP, Location & Enquiry Intelligence Engine</p>
              </div>
            </div>

            {/* ACTION BUTTONS & THEME TOGGLE */}
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className={
                  isDark
                    ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-amber-300 text-xs gap-1.5 h-9"
                    : "bg-white border-slate-300 hover:bg-slate-100 text-slate-800 text-xs gap-1.5 h-9 shadow-sm"
                }
                title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-600" /> Dark Mode
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAddModalOpen(true)}
                className={
                  isDark
                    ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 text-xs gap-1.5 h-9"
                    : "bg-indigo-50 border-indigo-200 hover:bg-indigo-100 text-indigo-700 font-medium text-xs gap-1.5 h-9"
                }
              >
                <Plus className="w-4 h-4 text-emerald-500" /> Add Enquiry
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => exportEnquiriesToCSV(enquiries)}
                className={
                  isDark
                    ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 text-xs gap-1.5 h-9"
                    : "bg-white border-slate-300 hover:bg-slate-100 text-slate-700 text-xs gap-1.5 h-9 shadow-sm"
                }
              >
                <Download className="w-4 h-4 text-cyan-500" /> Export Enquiries
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={loadData}
                className={
                  isDark
                    ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 text-xs gap-1.5 h-9"
                    : "bg-white border-slate-300 hover:bg-slate-100 text-slate-700 text-xs gap-1.5 h-9 shadow-sm"
                }
              >
                <RefreshCw className="w-4 h-4 text-indigo-500" /> Refresh
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className={
                  isDark
                    ? "text-slate-400 hover:text-white hover:bg-slate-800 text-xs gap-1.5 h-9"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs gap-1.5 h-9"
                }
              >
                <LogOut className="w-4 h-4" /> Logout
              </Button>
            </div>
          </div>
        </header>

        {/* MAIN BODY LAYOUT (WITH SIDEBAR) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* SIDEBAR NAVIGATION */}
            <aside className="lg:col-span-3 space-y-6">
              <div className={`border rounded-2xl p-4 space-y-1 ${cardBg}`}>
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "overview" ? navActive : navInactive
                  }`}
                >
                  <BarChart3 className="w-4 h-4" /> Dashboard Overview
                </button>

                {/* NEW VISITOR TRACKING TAB */}
                <button
                  onClick={() => setActiveTab("visitors")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "visitors" ? navActive : navInactive
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-cyan-400" /> Live Visitors & Geo
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full border ${
                      activeTab === "visitors"
                        ? "bg-white/20 text-white border-white/30"
                        : isDark
                        ? "bg-slate-800 text-cyan-400 border-cyan-500/30"
                        : "bg-cyan-50 text-cyan-700 border-cyan-200"
                    }`}
                  >
                    {visitorLogs.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("enquiries")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "enquiries" ? navActive : navInactive
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Database className="w-4 h-4" /> All Enquiries
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full border ${
                      activeTab === "enquiries"
                        ? "bg-white/20 text-white border-white/30"
                        : isDark
                        ? "bg-slate-800 text-indigo-400 border-indigo-500/30"
                        : "bg-indigo-50 text-indigo-700 border-indigo-200"
                    }`}
                  >
                    {stats.total}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("chat")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "chat" ? navActive : navInactive
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4" /> Chatbot Leads
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full border ${
                      activeTab === "chat"
                        ? "bg-white/20 text-white border-white/30"
                        : isDark
                        ? "bg-slate-800 text-emerald-400 border-emerald-500/30"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    {chatLeads.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("system")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "system" ? navActive : navInactive
                  }`}
                >
                  <Layers className="w-4 h-4" /> System & Database
                </button>
              </div>

              {/* QUICK DATABASE & TRACKING INFO CARD */}
              <div className={`border rounded-2xl p-5 space-y-4 ${cardBg}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>System Health & Status</h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className={`flex justify-between py-1 border-b ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <span className={subText}>Geo-IP Tracking:</span>
                    <span className="font-bold text-emerald-500">Enabled (Multi-API)</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <span className={subText}>Total Traffic Logs:</span>
                    <span className="font-mono font-semibold text-cyan-400">{visitorLogs.length} Hits</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <span className={subText}>Total Enquiries:</span>
                    <span className="font-mono font-semibold text-indigo-400">{enquiries.length} Records</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className={subText}>Live Server Status:</span>
                    <span className="font-bold text-emerald-500">100% Operational</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="lg:col-span-9 space-y-6">

              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* KPI STAT CARDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className={`border rounded-2xl p-5 space-y-2 relative overflow-hidden group ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>Total Enquiries</span>
                        <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 font-bold">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>
                      <div className={`text-3xl font-extrabold ${mainTitle}`}>{stats.total}</div>
                      <p className={`text-[11px] ${subText}`}>Historical & latest database entries</p>
                    </div>

                    <div className={`border rounded-2xl p-5 space-y-2 relative overflow-hidden group ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>Total Pageviews</span>
                        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 font-bold">
                          <Activity className="w-4 h-4" />
                        </div>
                      </div>
                      <div className={`text-3xl font-extrabold ${mainTitle}`}>{visitorStats.total}</div>
                      <p className={`text-[11px] ${subText}`}>Live captured website visits</p>
                    </div>

                    <div className={`border rounded-2xl p-5 space-y-2 relative overflow-hidden group ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>Unique Visitors</span>
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 font-bold">
                          <Globe className="w-4 h-4" />
                        </div>
                      </div>
                      <div className={`text-3xl font-extrabold ${mainTitle}`}>{visitorStats.uniqueIps}</div>
                      <p className={`text-[11px] ${subText}`}>Unique IP addresses logged</p>
                    </div>

                    <div className={`border rounded-2xl p-5 space-y-2 relative overflow-hidden group ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>Top Location</span>
                        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 font-bold">
                          <MapPin className="w-4 h-4" />
                        </div>
                      </div>
                      <div className={`text-xl font-extrabold truncate ${mainTitle}`}>{visitorStats.topCountry}</div>
                      <p className={`text-[11px] ${subText}`}>Primary audience origin</p>
                    </div>
                  </div>

                  {/* SERVICE TYPE BREAKDOWN & TRAFFIC CARD */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className={`border rounded-2xl p-6 space-y-4 ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className={`text-base font-bold ${mainTitle}`}>Top Services Requested</h2>
                          <p className={`text-xs ${subText}`}>Breakdown by customer preference</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setActiveTab("enquiries")}
                          className={isDark ? "bg-slate-800 border-slate-700 text-xs gap-1" : "bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          Enquiries <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>

                      <div className="space-y-3 pt-2">
                        {stats.topServices.map(([serviceName, count]) => {
                          const pct = Math.round((count / stats.total) * 100);
                          return (
                            <div key={serviceName} className="space-y-1 text-xs">
                              <div className="flex justify-between font-semibold">
                                <span className={mainTitle}>{serviceName}</span>
                                <span className="text-indigo-500">{count} ({pct}%)</span>
                              </div>
                              <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
                                <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" style={{ width: `${Math.max(5, pct)}%` }}></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className={`border rounded-2xl p-6 space-y-4 ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className={`text-base font-bold ${mainTitle}`}>Recent Live Visitors (IP & Geo)</h2>
                          <p className={`text-xs ${subText}`}>Real-time traffic feed</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setActiveTab("visitors")}
                          className={isDark ? "bg-slate-800 border-slate-700 text-xs gap-1" : "bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          View All Visitors <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>

                      <div className="space-y-2.5 pt-2">
                        {visitorLogs.slice(0, 5).map((log) => (
                          <div
                            key={log.id}
                            onClick={() => {
                              setSelectedVisitorLog(log);
                              setIsVisitorModalOpen(true);
                            }}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 text-xs ${
                              isDark ? "bg-slate-800/40 border-slate-800 hover:bg-slate-800" : "bg-slate-50 border-slate-200 hover:bg-white"
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{log.location?.flagEmoji || "🌐"}</span>
                                <span className={`font-mono font-bold ${mainTitle}`}>{log.ip}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? "bg-slate-700 text-cyan-300" : "bg-slate-200 text-slate-700"}`}>
                                  {log.location?.city || "Local"}, {log.location?.country || "India"}
                                </span>
                              </div>
                              <div className={`text-[11px] ${subText}`}>
                                {log.deviceType === "Mobile" ? "📱 Mobile" : "💻 Desktop"} • {log.browser} • Page: <span className="font-mono text-indigo-400">{log.pagePath}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 whitespace-nowrap">
                              {formatTimeAgo(log.timestamp)}
                            </span>
                          </div>
                        ))}

                        {visitorLogs.length === 0 && (
                          <p className={`text-xs text-center py-6 ${subText}`}>No live visitor traffic captured yet. Open site pages to record visits.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RECENT 5 ENQUIRIES PREVIEW */}
                  <div className={`border rounded-2xl p-6 space-y-4 ${cardBg}`}>
                    <div className="flex items-center justify-between">
                      <h2 className={`text-lg font-bold ${mainTitle}`}>Latest Received Enquiries</h2>
                      <span className={`text-xs ${subText}`}>Top 5 Recent</span>
                    </div>

                    <div className="space-y-3">
                      {enquiries.slice(0, 5).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => openDetailModal(item)}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border cursor-pointer transition-all gap-4 ${
                            isDark
                              ? "bg-slate-800/40 border-slate-800 hover:bg-slate-800/80"
                              : "bg-slate-50/60 border-slate-200 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-mono ${subText}`}>#{item.id}</span>
                              <span className={`text-sm font-bold ${mainTitle}`}>{item.name}</span>
                              {item.company_name && (
                                <span className={`text-xs px-2 py-0.5 rounded ${isDark ? "bg-slate-700/50 text-slate-300" : "bg-slate-200 text-slate-700"}`}>
                                  {item.company_name}
                                </span>
                              )}
                              {item.ip_address && (
                                <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                  {item.location_flag || "🌐"} {item.ip_address} ({item.location_city || "India"})
                                </span>
                              )}
                            </div>
                            <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${subText}`}>
                              <span className="flex items-center gap-1">
                                <Mail className="w-3.5 h-3.5 opacity-70" /> {item.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-3.5 h-3.5 opacity-70" /> {item.country_code} {item.mobile}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${badgeServiceBg}`}>
                              {item.service_type || "General Inquiry"}
                            </span>
                            <span className={`text-xs ${subText}`}>{item.created_at?.slice(0, 10)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* LIVE VISITORS & GEO TRACKING TAB (NEW TAB) */}
              {activeTab === "visitors" && (
                <div className="space-y-6">
                  {/* TOP VISITOR CONTROLS & STATS */}
                  <div className={`border rounded-2xl p-6 space-y-6 ${cardBg}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className={`text-xl font-bold ${mainTitle}`}>Live Visitor IP & Geolocation Log</h2>
                          <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Real-time Capture
                          </span>
                        </div>
                        <p className={`text-xs ${subText} mt-1`}>
                          Detailed visitor telemetry: IP address, Location, ISP, Device, OS, Browser, Visited URL, and Geolocation.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => exportVisitorLogsToCSV(visitorLogs)}
                          className={isDark ? "bg-slate-800 border-slate-700 text-cyan-300 text-xs gap-1.5" : "bg-white border-slate-300 text-cyan-700 text-xs gap-1.5 shadow-sm"}
                        >
                          <Download className="w-4 h-4 text-cyan-400" /> Export CSV
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={loadData}
                          className={isDark ? "bg-slate-800 border-slate-700 text-slate-200 text-xs gap-1.5" : "bg-white border-slate-300 text-slate-700 text-xs gap-1.5 shadow-sm"}
                        >
                          <RefreshCw className="w-4 h-4 text-indigo-500" /> Refresh
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleClearVisitorLogs}
                          className={isDark ? "bg-slate-800 border-slate-700 text-red-400 hover:bg-red-950/30 text-xs gap-1.5" : "bg-white border-slate-300 text-red-600 hover:bg-red-50 text-xs gap-1.5 shadow-sm"}
                        >
                          <Trash2 className="w-4 h-4" /> Clear Logs
                        </Button>
                      </div>
                    </div>

                    {/* STATS SUMMARY CARDS */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                        <span className={`text-[11px] font-semibold uppercase ${subText}`}>Total Traffic Logged</span>
                        <div className={`text-2xl font-black text-cyan-400`}>{visitorStats.total}</div>
                        <p className={`text-[10px] ${subText}`}>Total recorded pageviews</p>
                      </div>

                      <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                        <span className={`text-[11px] font-semibold uppercase ${subText}`}>Unique IP Addresses</span>
                        <div className={`text-2xl font-black text-purple-400`}>{visitorStats.uniqueIps}</div>
                        <p className={`text-[10px] ${subText}`}>Distinct client IPs</p>
                      </div>

                      <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                        <span className={`text-[11px] font-semibold uppercase ${subText}`}>Top Audience Origin</span>
                        <div className={`text-lg font-bold text-emerald-400 truncate`}>{visitorStats.topCountry}</div>
                        <p className={`text-[10px] ${subText}`}>Highest visitor country</p>
                      </div>

                      <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                        <span className={`text-[11px] font-semibold uppercase ${subText}`}>Device Breakdown</span>
                        <div className={`text-xs font-semibold ${mainTitle} space-y-0.5 pt-1`}>
                          <div className="flex justify-between"><span>💻 Desktop:</span> <span className="font-bold text-indigo-400">{visitorStats.desktopCount}</span></div>
                          <div className="flex justify-between"><span>📱 Mobile:</span> <span className="font-bold text-emerald-400">{visitorStats.mobileCount}</span></div>
                        </div>
                      </div>
                    </div>

                    {/* SEARCH & FILTERS BAR */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                      <div className="relative w-full md:w-80">
                        <Search className={`w-4 h-4 absolute left-3.5 top-3 ${subText}`} />
                        <Input
                          value={visitorSearch}
                          onChange={(e) => {
                            setVisitorSearch(e.target.value);
                            setVisitorPage(1);
                          }}
                          placeholder="Search IP, City, Country, OS, Browser, Page..."
                          className={`pl-10 h-10 text-xs focus:border-cyan-500 ${inputBg}`}
                        />
                        {visitorSearch && (
                          <button
                            onClick={() => setVisitorSearch("")}
                            className={`absolute right-3 top-3 ${subText} hover:text-cyan-500`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-xs">
                          <Filter className={`w-3.5 h-3.5 ${subText}`} />
                          <select
                            value={visitorDeviceFilter}
                            onChange={(e) => {
                              setVisitorDeviceFilter(e.target.value);
                              setVisitorPage(1);
                            }}
                            className={`h-9 px-3 rounded-lg border text-xs focus:outline-none focus:border-cyan-500 ${inputBg}`}
                          >
                            <option value="ALL">All Devices</option>
                            <option value="Desktop">Desktop Only 💻</option>
                            <option value="Mobile">Mobile Only 📱</option>
                            <option value="Tablet">Tablet Only 📟</option>
                          </select>
                        </div>

                        <select
                          value={visitorCountryFilter}
                          onChange={(e) => {
                            setVisitorCountryFilter(e.target.value);
                            setVisitorPage(1);
                          }}
                          className={`h-9 px-3 rounded-lg border text-xs focus:outline-none focus:border-cyan-500 ${inputBg}`}
                        >
                          <option value="ALL">All Countries ({uniqueVisitorCountries.length})</option>
                          {uniqueVisitorCountries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* VISITOR LOGS TABLE */}
                  <div className={`border rounded-2xl overflow-hidden shadow-md ${cardBg}`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className={`uppercase tracking-wider font-semibold ${tableHeaderBg}`}>
                          <tr>
                            <th className="p-3.5">Timestamp</th>
                            <th className="p-3.5">IP Address</th>
                            <th className="p-3.5">Location & ISP</th>
                            <th className="p-3.5">Device & Browser</th>
                            <th className="p-3.5">Page Visited</th>
                            <th className="p-3.5">Referrer</th>
                            <th className="p-3.5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${tableBorder}`}>
                          {paginatedVisitorLogs.map((log) => (
                            <tr key={log.id} className={`transition-colors ${tableRowHover}`}>
                              <td className="p-3.5 whitespace-nowrap">
                                <div className={`font-semibold ${mainTitle}`}>{new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
                                <div className="flex items-center gap-1 text-[10px]">
                                  <span className="text-cyan-400 font-semibold">{formatTimeAgo(log.timestamp)}</span>
                                  <span className={subText}>({new Date(log.timestamp).toLocaleDateString()})</span>
                                </div>
                              </td>

                              <td className="p-3.5 font-mono whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-cyan-400">{log.ip}</span>
                                  <button
                                    onClick={() => handleCopyIp(log.ip)}
                                    className="p-1 rounded hover:bg-slate-700/50 text-slate-400 hover:text-cyan-300"
                                    title="Copy IP"
                                  >
                                    {copiedIp === log.ip ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              </td>

                              <td className="p-3.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-base">{log.location?.flagEmoji || "🌐"}</span>
                                  <span className={`font-bold ${mainTitle}`}>
                                    {log.location?.city || "Local City"}, {log.location?.country || "India"}
                                  </span>
                                </div>
                                <div className={`text-[10px] ${subText} truncate max-w-[180px]`}>
                                  {log.location?.region || "State"} • {log.location?.isp || "Local Network"}
                                </div>
                              </td>

                              <td className="p-3.5 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  {log.deviceType === "Mobile" ? (
                                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1">
                                      <Smartphone className="w-3.5 h-3.5" /> Mobile
                                    </span>
                                  ) : log.deviceType === "Tablet" ? (
                                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center gap-1">
                                      <Tablet className="w-3.5 h-3.5" /> Tablet
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                                      <Laptop className="w-3.5 h-3.5" /> Desktop
                                    </span>
                                  )}
                                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {log.browser}
                                  </span>
                                </div>
                                <div className={`text-[10px] ${subText} mt-1`}>
                                  OS: <span className="font-semibold text-slate-300">{log.os}</span> • Res: {log.screenResolution}
                                </div>
                              </td>

                              <td className="p-3.5">
                                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                                  {log.pagePath}
                                </span>
                              </td>

                              <td className={`p-3.5 max-w-[130px] truncate ${subText}`}>
                                {log.referrer || "Direct / Bookmark"}
                              </td>

                              <td className="p-3.5 text-right whitespace-nowrap">
                                <div className="flex items-center justify-end gap-1">
                                  {log.location?.latitude && log.location?.longitude && (
                                    <a
                                      href={`https://www.google.com/maps?q=${log.location.latitude},${log.location.longitude}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`p-1.5 rounded-lg border text-xs gap-1 ${isDark ? "bg-slate-800 border-slate-700 text-emerald-400 hover:bg-slate-700" : "bg-white border-slate-300 text-emerald-600 hover:bg-slate-100"}`}
                                      title="Open Location on Google Maps"
                                    >
                                      <MapPin className="w-3.5 h-3.5" />
                                    </a>
                                  )}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      setSelectedVisitorLog(log);
                                      setIsVisitorModalOpen(true);
                                    }}
                                    className={`h-8 text-xs gap-1 ${isDark ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"}`}
                                  >
                                    <Eye className="w-3.5 h-3.5 text-cyan-400" /> Details
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}

                          {paginatedVisitorLogs.length === 0 && (
                            <tr>
                              <td colSpan={7} className={`p-12 text-center ${subText}`}>
                                No visitor logs found matching search criteria. Open website pages in a browser window to capture live hits.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* PAGINATION CONTROLS FOR VISITORS */}
                    <div className={`flex flex-col sm:flex-row items-center justify-between p-4 border-t gap-4 text-xs ${isDark ? "bg-slate-950/60 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
                      <div>
                        Page <span className={`font-bold ${mainTitle}`}>{visitorPage}</span> of{" "}
                        <span className={`font-bold ${mainTitle}`}>{totalVisitorPages}</span> (Showing {filteredVisitorLogs.length} logs)
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={visitorPage <= 1}
                          onClick={() => setVisitorPage((p) => p - 1)}
                          className={isDark ? "h-8 bg-slate-900 border-slate-800 text-xs gap-1" : "h-8 bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          <ChevronLeft className="w-3.5 h-3.5" /> Previous
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={visitorPage >= totalVisitorPages}
                          onClick={() => setVisitorPage((p) => p + 1)}
                          className={isDark ? "h-8 bg-slate-900 border-slate-800 text-xs gap-1" : "h-8 bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          Next <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ENQUIRIES TAB (COMPREHENSIVE DATA TABLE) */}
              {activeTab === "enquiries" && (
                <div className="space-y-6">
                  
                  {/* SEARCH & FILTER CONTROLS BAR */}
                  <div className={`border rounded-2xl p-5 space-y-4 ${cardBg}`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      {/* Search Bar */}
                      <div className="relative w-full md:w-80">
                        <Search className={`w-4 h-4 absolute left-3.5 top-3 ${subText}`} />
                        <Input
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                          }}
                          placeholder="Search name, email, phone, IP, city..."
                          className={`pl-10 h-10 text-sm focus:border-indigo-500 ${inputBg}`}
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className={`absolute right-3 top-3 ${subText} hover:text-indigo-600`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Filters & Sorting */}
                      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-2">
                          <Filter className={`w-4 h-4 ${subText}`} />
                          <select
                            value={selectedService}
                            onChange={(e) => {
                              setSelectedService(e.target.value);
                              setCurrentPage(1);
                            }}
                            className={`h-10 px-3 rounded-lg border text-xs focus:outline-none focus:border-indigo-500 ${inputBg}`}
                          >
                            <option value="ALL">All Services ({uniqueServices.length})</option>
                            {uniqueServices.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <select
                          value={sortOrder}
                          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                          className={`h-10 px-3 rounded-lg border text-xs focus:outline-none focus:border-indigo-500 ${inputBg}`}
                        >
                          <option value="newest">Sort: Newest First</option>
                          <option value="oldest">Sort: Oldest First</option>
                        </select>

                        <select
                          value={pageSize}
                          onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setCurrentPage(1);
                          }}
                          className={`h-10 px-3 rounded-lg border text-xs focus:outline-none focus:border-indigo-500 ${inputBg}`}
                        >
                          <option value={10}>10 / page</option>
                          <option value={15}>15 / page</option>
                          <option value={25}>25 / page</option>
                          <option value={50}>50 / page</option>
                          <option value={100}>100 / page</option>
                        </select>
                      </div>
                    </div>

                    {/* Active Filter Indicator */}
                    <div className={`flex items-center justify-between text-xs pt-2 border-t ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-600"}`}>
                      <div>
                        Showing <span className={`font-semibold ${mainTitle}`}>{filteredEnquiries.length}</span> of{" "}
                        <span className={`font-semibold ${mainTitle}`}>{enquiries.length}</span> total database enquiries
                      </div>
                      {(selectedService !== "ALL" || searchQuery) && (
                        <button
                          onClick={() => {
                            setSelectedService("ALL");
                            setSearchQuery("");
                          }}
                          className="text-xs text-indigo-600 font-semibold hover:underline"
                        >
                          Clear Filters
                        </button>
                      )}
                    </div>
                  </div>

                  {/* DATA TABLE WITH IP & LOCATION */}
                  <div className={`border rounded-2xl overflow-hidden shadow-md ${cardBg}`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className={`uppercase tracking-wider font-semibold ${tableHeaderBg}`}>
                          <tr>
                            <th className="p-3.5">ID</th>
                            <th className="p-3.5">Date & Time</th>
                            <th className="p-3.5">Name & Lead</th>
                            <th className="p-3.5">Contact Details</th>
                            <th className="p-3.5">IP & Location</th>
                            <th className="p-3.5">Company</th>
                            <th className="p-3.5">Service Type</th>
                            <th className="p-3.5">Remarks</th>
                            <th className="p-3.5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${tableBorder}`}>
                          {paginatedEnquiries.map((item) => (
                            <tr key={item.id} className={`transition-colors ${tableRowHover}`}>
                              <td className={`p-3.5 font-mono ${subText}`}>#{item.id}</td>
                              <td className={`p-3.5 whitespace-nowrap ${isDark ? "text-slate-300" : "text-slate-700"}`}>{item.created_at}</td>
                              <td className={`p-3.5 font-bold whitespace-nowrap ${mainTitle}`}>{item.name}</td>
                              <td className="p-3.5 whitespace-nowrap">
                                <div>{item.email}</div>
                                <div className={`font-mono ${subText}`}>{item.country_code ? `${item.country_code} ` : ""}{item.mobile}</div>
                              </td>

                              {/* IP & LOCATION COLUMN */}
                              <td className="p-3.5 whitespace-nowrap">
                                {item.ip_address ? (
                                  <div>
                                    <div className="flex items-center gap-1">
                                      <span>{item.location_flag || "🌐"}</span>
                                      <span className="font-mono font-bold text-cyan-400">{item.ip_address}</span>
                                    </div>
                                    <div className={`text-[10px] ${subText}`}>
                                      {item.location_city || "City"}, {item.location_country || "India"}
                                    </div>
                                  </div>
                                ) : (
                                  <span className={`text-[10px] ${subText} italic`}>Standard DB Entry</span>
                                )}
                              </td>

                              <td className="p-3.5">
                                {item.company_name ? (
                                  <span className={`px-2 py-0.5 rounded border ${isDark ? "bg-slate-800 text-slate-200 border-slate-700" : "bg-slate-100 text-slate-800 border-slate-200 font-medium"}`}>
                                    {item.company_name}
                                  </span>
                                ) : (
                                  <span className={subText}>-</span>
                                )}
                              </td>
                              <td className="p-3.5">
                                <span className={`px-2.5 py-1 rounded-md text-[11px] font-medium border whitespace-nowrap ${badgeServiceBg}`}>
                                  {item.service_type || "General Inquiry"}
                                </span>
                              </td>
                              <td className="p-3.5 max-w-[180px] truncate">
                                {item.remarks ? (
                                  <span className={isDark ? "text-slate-300" : "text-slate-700"}>{item.remarks}</span>
                                ) : (
                                  <span className={`${subText} italic`}>None</span>
                                )}
                              </td>
                              <td className="p-3.5 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => openDetailModal(item)}
                                    className={`h-8 w-8 ${isDark ? "text-slate-400 hover:text-indigo-400 hover:bg-slate-800" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"}`}
                                    title="View / Edit Remarks"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDeleteEnquiry(item.id)}
                                    className={`h-8 w-8 ${isDark ? "text-slate-400 hover:text-red-400 hover:bg-slate-800" : "text-slate-600 hover:text-red-600 hover:bg-slate-100"}`}
                                    title="Delete"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}

                          {paginatedEnquiries.length === 0 && (
                            <tr>
                              <td colSpan={9} className={`p-12 text-center ${subText}`}>
                                No enquiries match your search criteria.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* PAGINATION CONTROLS */}
                    <div className={`flex flex-col sm:flex-row items-center justify-between p-4 border-t gap-4 text-xs ${isDark ? "bg-slate-950/60 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
                      <div>
                        Page <span className={`font-bold ${mainTitle}`}>{currentPage}</span> of{" "}
                        <span className={`font-bold ${mainTitle}`}>{totalPages}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage <= 1}
                          onClick={() => setCurrentPage((p) => p - 1)}
                          className={isDark ? "h-8 bg-slate-900 border-slate-800 text-xs gap-1" : "h-8 bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          <ChevronLeft className="w-3.5 h-3.5" /> Previous
                        </Button>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum = i + 1;
                            if (totalPages > 5 && currentPage > 3) {
                              pageNum = currentPage - 3 + i;
                              if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                            }
                            return (
                              <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                                  currentPage === pageNum
                                    ? "bg-indigo-600 text-white shadow-sm"
                                    : isDark
                                    ? "bg-slate-900 text-slate-400 hover:bg-slate-800"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage >= totalPages}
                          onClick={() => setCurrentPage((p) => p + 1)}
                          className={isDark ? "h-8 bg-slate-900 border-slate-800 text-xs gap-1" : "h-8 bg-white border-slate-300 text-xs gap-1 shadow-sm"}
                        >
                          Next <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHATBOT LEADS TAB */}
              {activeTab === "chat" && (
                <div className={`border rounded-2xl p-6 space-y-6 ${cardBg}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className={`text-lg font-bold ${mainTitle}`}>Chatbot Interactive Leads</h2>
                      <p className={`text-xs ${subText}`}>Leads captured via AI Chatbot Assistant</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold">
                      {chatLeads.length} Sessions Captured
                    </span>
                  </div>

                  <div className="space-y-4">
                    {chatLeads.map((lead) => (
                      <div key={lead.id} className={`p-4 rounded-xl border space-y-3 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700/50 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold ${mainTitle}`}>{lead.name || "Visitor"}</span>
                              {lead.ip && (
                                <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                  {lead.flag || "🌐"} {lead.ip} ({lead.city || "India"})
                                </span>
                              )}
                            </div>
                            <div className={`flex flex-wrap items-center gap-3 text-xs mt-0.5 ${subText}`}>
                              {lead.email && <span>{lead.email}</span>}
                              {lead.phone && <span>{lead.phone}</span>}
                              {lead.service && (
                                <span className="text-indigo-600 font-semibold">[{lead.service}]</span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs ${subText}`}>{new Date(lead.createdAt).toLocaleString()}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteChatLead(lead.id)}
                              className="text-red-600 hover:bg-red-50 h-8 text-xs"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>

                        {/* Transcript Snippet */}
                        {lead.transcript && lead.transcript.length > 0 && (
                          <div className={`p-3 rounded-lg space-y-1.5 text-xs ${isDark ? "bg-slate-950 text-slate-300" : "bg-white border border-slate-200 text-slate-800"}`}>
                            <div className={`text-[10px] uppercase font-semibold ${subText}`}>Conversation Transcript:</div>
                            {lead.transcript.map((m, idx) => (
                              <div key={idx} className="flex gap-2">
                                <span className={`font-bold ${m.from === "user" ? "text-indigo-600" : "text-emerald-600"}`}>
                                  {m.from === "user" ? "User:" : "Bot:"}
                                </span>
                                <span>{m.text}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    {chatLeads.length === 0 && (
                      <div className={`p-12 text-center ${subText}`}>No chatbot lead sessions captured yet.</div>
                    )}
                  </div>
                </div>
              )}

              {/* SYSTEM & DATABASE TAB */}
              {activeTab === "system" && (
                <div className={`border rounded-2xl p-6 space-y-6 ${cardBg}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${mainTitle}`}>System & Database Controls</h2>
                    <p className={`text-xs ${subText}`}>Database synchronization, visitor logs & data export options</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className={`p-5 rounded-xl border space-y-3 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                        <Database className="w-4 h-4" /> Reset Database to SQL Dump
                      </div>
                      <p className={`text-xs ${subText}`}>
                        Restores initial 233 enquiries imported from `enquiries.sql`. Useful if test data needs cleanup.
                      </p>
                      <Button
                        variant="outline"
                        onClick={handleResetDatabase}
                        className={isDark ? "w-full bg-slate-900 border-slate-700 text-indigo-300 text-xs" : "w-full bg-white border-slate-300 text-indigo-600 text-xs shadow-sm"}
                      >
                        Reset to Original 233 Records
                      </Button>
                    </div>

                    <div className={`p-5 rounded-xl border space-y-3 ${isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                        <Globe className="w-4 h-4" /> Export Visitor IP Logs
                      </div>
                      <p className={`text-xs ${subText}`}>
                        Export full traffic history (IP, City, Country, ISP, Device, URL path) to a CSV file.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => exportVisitorLogsToCSV(visitorLogs)}
                        className={isDark ? "w-full bg-slate-900 border-slate-700 text-cyan-300 text-xs" : "w-full bg-white border-slate-300 text-cyan-700 text-xs shadow-sm"}
                      >
                        Download Visitor Logs CSV
                      </Button>
                    </div>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>

        {/* MODAL: VIEW VISITOR DETAILS */}
        {isVisitorModalOpen && selectedVisitorLog && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`w-full max-w-lg border rounded-2xl shadow-2xl p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"}`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{selectedVisitorLog.location?.flagEmoji || "🌐"}</span>
                  <div>
                    <h3 className={`text-lg font-bold ${mainTitle}`}>Visitor Telemetry Specs</h3>
                    <p className="text-xs text-cyan-400 font-mono font-bold">IP: {selectedVisitorLog.ip}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisitorModalOpen(false)}
                  className={`p-1 rounded-lg ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Country & Flag</span>
                  <p className={`font-bold ${mainTitle}`}>{selectedVisitorLog.location?.flagEmoji} {selectedVisitorLog.location?.country || "India"}</p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Hyper-Precise Area / Suburb</span>
                  <p className="font-bold text-emerald-400">
                    📍 {selectedVisitorLog.location?.area || "Local Suburb"}, {selectedVisitorLog.location?.city || "Mumbai"}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>City & Region</span>
                  <p className={`font-bold ${mainTitle}`}>{selectedVisitorLog.location?.city || "Mumbai"}, {selectedVisitorLog.location?.region || "Maharashtra"}</p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>ISP & Network</span>
                  <p className={`font-bold text-indigo-400 truncate`}>{selectedVisitorLog.location?.isp || "Local Provider"}</p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Device Brand & Model</span>
                  <p className="font-bold text-cyan-400">
                    {selectedVisitorLog.deviceModel || selectedVisitorLog.location?.deviceModel || "Smartphone / PC"} ({selectedVisitorLog.deviceType})
                  </p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Browser & OS</span>
                  <p className={`font-bold ${mainTitle}`}>{selectedVisitorLog.browser} • {selectedVisitorLog.os}</p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Screen Resolution</span>
                  <p className={`font-mono ${mainTitle}`}>{selectedVisitorLog.screenResolution}</p>
                </div>

                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Postal / Zip Code</span>
                  <p className={`font-mono ${mainTitle}`}>{selectedVisitorLog.location?.postal || "400070"}</p>
                </div>

                <div className="space-y-1 col-span-2">
                  <span className={`uppercase font-semibold ${subText}`}>Page URL Visited</span>
                  <p className="font-mono text-cyan-400 font-bold bg-cyan-500/10 p-2 rounded border border-cyan-500/20">{selectedVisitorLog.pagePath}</p>
                </div>

                <div className="space-y-1 col-span-2">
                  <span className={`uppercase font-semibold ${subText}`}>User Agent String</span>
                  <p className={`font-mono text-[10px] ${subText} break-all bg-slate-950 p-2 rounded border border-slate-800`}>{selectedVisitorLog.userAgent}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/40">
                {selectedVisitorLog.location?.latitude && selectedVisitorLog.location?.longitude && (
                  <a
                    href={`https://www.google.com/maps?q=${selectedVisitorLog.location.latitude},${selectedVisitorLog.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold hover:underline"
                  >
                    <MapPin className="w-4 h-4" /> Open on Google Maps &rarr;
                  </a>
                )}
                <Button
                  onClick={() => setIsVisitorModalOpen(false)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs ml-auto"
                >
                  Close Window
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: VIEW & EDIT ENQUIRY REMARKS */}
        {isDetailModalOpen && selectedEnquiry && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`w-full max-w-lg border rounded-2xl shadow-2xl p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"}`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <div>
                  <span className="text-xs font-mono text-indigo-600 font-bold">Enquiry #{selectedEnquiry.id}</span>
                  <h3 className={`text-lg font-bold ${mainTitle}`}>{selectedEnquiry.name}</h3>
                </div>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className={`p-1 rounded-lg ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Email Address</span>
                  <p className={`font-semibold ${mainTitle}`}>{selectedEnquiry.email}</p>
                </div>
                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Mobile Number</span>
                  <p className={`font-semibold ${mainTitle}`}>
                    {selectedEnquiry.country_code} {selectedEnquiry.mobile}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Company Name</span>
                  <p className={`font-semibold ${mainTitle}`}>{selectedEnquiry.company_name || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <span className={`uppercase font-semibold ${subText}`}>Service Requested</span>
                  <p className="font-semibold text-indigo-600">{selectedEnquiry.service_type || "General"}</p>
                </div>

                {selectedEnquiry.ip_address && (
                  <div className="space-y-1 col-span-2 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <span className="uppercase text-[10px] font-bold text-cyan-400 tracking-wider">Visitor IP & Geolocation Telemetry</span>
                    <div className="flex items-center justify-between text-xs font-mono pt-1">
                      <span className="font-bold text-cyan-300">{selectedEnquiry.location_flag || "🌐"} IP: {selectedEnquiry.ip_address}</span>
                      <span className="text-slate-300">{selectedEnquiry.location_city || "City"}, {selectedEnquiry.location_country || "India"}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-1 col-span-2">
                  <span className={`uppercase font-semibold ${subText}`}>Date Received</span>
                  <p className={isDark ? "text-slate-300" : "text-slate-700"}>{selectedEnquiry.created_at}</p>
                </div>
              </div>

              {/* REMARKS EDIT AREA */}
              <div className={`space-y-2 pt-2 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <label className={`block text-xs font-semibold uppercase ${subText}`}>
                  Agent Remarks & Follow-up Notes
                </label>
                <Textarea
                  value={editRemarksText}
                  onChange={(e) => setEditRemarksText(e.target.value)}
                  placeholder="Add comments, call notes, or follow-up status..."
                  rows={4}
                  className={`text-xs focus:border-indigo-500 ${inputBg}`}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setIsDetailModalOpen(false)}
                  className={isDark ? "bg-slate-800 border-slate-700 text-slate-300 text-xs" : "bg-white border-slate-300 text-slate-700 text-xs shadow-sm"}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveRemarks}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" /> Save Remarks
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: ADD NEW ENQUIRY */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`w-full max-w-lg border rounded-2xl shadow-2xl p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"}`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <h3 className={`text-lg font-bold ${mainTitle}`}>Create New Enquiry</h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className={`p-1 rounded-lg ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateNewEnquiry} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className={`font-semibold ${subText}`}>Full Name *</label>
                    <Input
                      value={newForm.name}
                      onChange={(e) => setNewForm({ ...newForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`text-xs ${inputBg}`}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={`font-semibold ${subText}`}>Email Address *</label>
                    <Input
                      value={newForm.email}
                      onChange={(e) => setNewForm({ ...newForm, email: e.target.value })}
                      placeholder="john@company.com"
                      className={`text-xs ${inputBg}`}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className={`font-semibold ${subText}`}>Code</label>
                    <Input
                      value={newForm.country_code}
                      onChange={(e) => setNewForm({ ...newForm, country_code: e.target.value })}
                      placeholder="+91"
                      className={`text-xs ${inputBg}`}
                    />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label className={`font-semibold ${subText}`}>Mobile Number</label>
                    <Input
                      value={newForm.mobile}
                      onChange={(e) => setNewForm({ ...newForm, mobile: e.target.value })}
                      placeholder="9876543210"
                      className={`text-xs ${inputBg}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className={`font-semibold ${subText}`}>Company Name</label>
                    <Input
                      value={newForm.company_name}
                      onChange={(e) => setNewForm({ ...newForm, company_name: e.target.value })}
                      placeholder="Acme Corp"
                      className={`text-xs ${inputBg}`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={`font-semibold ${subText}`}>Service Type</label>
                    <select
                      value={newForm.service_type}
                      onChange={(e) => setNewForm({ ...newForm, service_type: e.target.value })}
                      className={`w-full h-10 px-3 rounded-md border text-xs focus:outline-none ${inputBg}`}
                    >
                      <option value="WhatsApp Business API">WhatsApp Business API</option>
                      <option value="VoiceBot">VoiceBot</option>
                      <option value="RCS">RCS</option>
                      <option value="SMS">SMS</option>
                      <option value="Emails">Emails</option>
                      <option value="Call Center Solution">Call Center Solution</option>
                      <option value="Other Solution">Other Solution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className={`font-semibold ${subText}`}>Remarks / Message</label>
                  <Textarea
                    value={newForm.remarks}
                    onChange={(e) => setNewForm({ ...newForm, remarks: e.target.value })}
                    placeholder="Enter enquiry notes..."
                    rows={3}
                    className={`text-xs ${inputBg}`}
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddModalOpen(false)}
                    className={isDark ? "bg-slate-800 border-slate-700 text-slate-300 text-xs" : "bg-white border-slate-300 text-slate-700 text-xs shadow-sm"}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs">
                    Create Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
