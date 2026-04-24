import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";

type Submission = {
  id: number;
  createdAt: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company: string;
  teamSize?: string;
  service?: string;
  message?: string;
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

const STORAGE_KEY = "cell24x7_demo_requests";
const CHAT_STORAGE_KEY = "cell24x7_chat_leads";
const ADMIN_FLAG = "cell24x7_admin_logged_in";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState<boolean>(() => Boolean(localStorage.getItem(ADMIN_FLAG)));
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [chatLeads, setChatLeads] = useState<ChatLead[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setSubmissions(JSON.parse(raw));
      } catch (e) {
        setSubmissions([]);
      }
    }

    const chatRaw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (chatRaw) {
      try {
        setChatLeads(JSON.parse(chatRaw));
      } catch (e) {
        setChatLeads([]);
      }
    }
  }, [isAdmin]);

  const todaysCount = useMemo(() => {
    const today = new Date().toDateString();
    return submissions.filter((s) => new Date(s.createdAt).toDateString() === today).length;
  }, [submissions]);

  const totalCount = submissions.length;

  function handleLogin() {
    if (password === siteConfig.adminPassword) {
      localStorage.setItem(ADMIN_FLAG, "1");
      setIsAdmin(true);
    } else {
      alert("Incorrect admin password");
    }
  }

  function handleLogout() {
    localStorage.removeItem(ADMIN_FLAG);
    setIsAdmin(false);
  }

  function refresh() {
    const raw = localStorage.getItem(STORAGE_KEY) || "[]";
    setSubmissions(JSON.parse(raw));
    const chatRaw = localStorage.getItem(CHAT_STORAGE_KEY) || "[]";
    setChatLeads(JSON.parse(chatRaw));
  }

  function clearAll() {
    if (!confirm("Delete all demo submissions? This cannot be undone.")) return;
    localStorage.removeItem(STORAGE_KEY);
    setSubmissions([]);
  }

  function clearChatLeads() {
    if (!confirm("Delete all chat leads? This cannot be undone.")) return;
    localStorage.removeItem(CHAT_STORAGE_KEY);
    setChatLeads([]);
  }

  function deleteSubmission(id: number) {
    const filtered = submissions.filter((s) => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    setSubmissions(filtered);
  }

  function deleteChatLead(id: number) {
    const filtered = chatLeads.filter((s) => s.id !== id);
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(filtered));
    setChatLeads(filtered);
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            {!isAdmin ? (
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <p className="mb-4 text-muted-foreground">Enter admin password to view demo submissions (demo mode).</p>
                <div className="grid grid-cols-2 gap-4">
                  <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Admin password" />
                  <Button onClick={handleLogin}>Login</Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Hint: password is set in site config (demo only).</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Total submissions</div>
                    <div className="text-3xl font-bold">{totalCount}</div>
                    <div className="text-sm text-muted-foreground">Today: {todaysCount}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="ghost" className="text-black" onClick={refresh}>Refresh</Button>
                    <Button variant="outline" className="text-black" onClick={clearAll}>Clear All</Button>
                    <Button className="text-black" onClick={() => {
                      if (submissions.length === 0) return alert('No submissions to export');
                      const headers = ['createdAt','firstName','lastName','email','phone','company','teamSize','service','message'];
                      const rows = submissions.map(s => headers.map(h => "\"" + ((s as any)[h] || '').toString().replace(/"/g, '""') + "\"").join(','));
                      const csv = [headers.join(','), ...rows].join('\n');
                      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `demo-submissions-${Date.now()}.csv`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}>Export CSV</Button>
                    <Button variant="ghost" className="text-black" onClick={handleLogout}>Logout</Button>
                  </div>
                </div>

                <div className="overflow-auto rounded-lg border border-border/30">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-background">
                      <tr>
                        <th className="p-3 text-black">When</th>
                        <th className="p-3 text-black">Name</th>
                        <th className="p-3 text-black">Email</th>
                        <th className="p-3 text-black">Company</th>
                        <th className="p-3 text-black">Team Size</th>
                        <th className="p-3 text-black">Service</th>
                        <th className="p-3 text-black">Message</th>
                        <th className="p-3 text-black">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((s) => (
                        <tr key={s.id} className="border-t border-border/20">
                          <td className="p-3 align-top text-black">{new Date(s.createdAt).toLocaleString()}</td>
                          <td className="p-3 align-top text-black">{s.firstName} {s.lastName || ""}</td>
                          <td className="p-3 align-top text-black">{s.email}</td>
                          <td className="p-3 align-top text-black">{s.company}</td>
                          <td className="p-3 align-top text-black">{s.teamSize}</td>
                          <td className="p-3 align-top text-black">{s.service}</td>
                          <td className="p-3 align-top text-black">{s.message}</td>
                          <td className="p-3 align-top text-black">
                            <Button variant="ghost" className="text-black" onClick={() => deleteSubmission(s.id)}>Delete</Button>
                          </td>
                        </tr>
                      ))}
                      {submissions.length === 0 && (
                        <tr>
                          <td className="p-6 text-black" colSpan={8}>No submissions yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Chatbot leads</div>
                      <div className="text-2xl font-bold">{chatLeads.length}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" className="text-black" onClick={clearChatLeads}>Clear Chat Leads</Button>
                    </div>
                  </div>

                  <div className="overflow-auto rounded-lg border border-border/30">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-background">
                        <tr>
                          <th className="p-3 text-black">When</th>
                          <th className="p-3 text-black">Name</th>
                          <th className="p-3 text-black">Email</th>
                          <th className="p-3 text-black">Phone</th>
                          <th className="p-3 text-black">Service</th>
                          <th className="p-3 text-black">Transcript</th>
                          <th className="p-3 text-black">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chatLeads.map((s) => (
                          <tr key={s.id} className="border-t border-border/20">
                            <td className="p-3 align-top text-black">{new Date(s.createdAt).toLocaleString()}</td>
                            <td className="p-3 align-top text-black">{s.name || ""}</td>
                            <td className="p-3 align-top text-black">{s.email || ""}</td>
                            <td className="p-3 align-top text-black">{s.phone || ""}</td>
                            <td className="p-3 align-top text-black">{s.service || ""}</td>
                            <td className="p-3 align-top text-black">
                              {s.transcript?.slice(-3).map((m, idx) => (
                                <div key={`${s.id}-${idx}`}>{m.from}: {m.text}</div>
                              ))}
                            </td>
                            <td className="p-3 align-top text-black">
                              <Button variant="ghost" className="text-black" onClick={() => deleteChatLead(s.id)}>Delete</Button>
                            </td>
                          </tr>
                        ))}
                        {chatLeads.length === 0 && (
                          <tr>
                            <td className="p-6 text-black" colSpan={7}>No chat leads yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
