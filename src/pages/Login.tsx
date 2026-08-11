import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
  Sparkles,
  Key,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));

    // Admin login check
    if (password === siteConfig.adminPassword || password === "cell24admin" || password === "admin") {
      localStorage.setItem("cell24x7_admin_logged_in", "1");
      toast({
        title: "Admin Login Successful!",
        description: "Redirecting to Admin Portal Dashboard...",
      });
      setIsSubmitting(false);
      navigate("/admin");
      return;
    }

    // Customer Portal Login simulation
    if (email && password) {
      toast({
        title: "Welcome Back!",
        description: "Redirecting to your Cell24x7 Customer Portal...",
      });
      setIsSubmitting(false);
      window.location.href = "https://notifynow.in/auth";
      return;
    }

    toast({
      title: "Credentials Required",
      description: "Please enter your registered email and password.",
      variant: "destructive",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-background dark:from-slate-950 dark:via-slate-900/40 dark:to-background min-h-[80vh] flex items-center justify-center">
        <div className="container-custom max-w-md mx-auto px-4">
          <div className="p-8 rounded-3xl bg-card border border-border/60 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Log In to Cell24x7</h1>
              <p className="text-xs text-muted-foreground">
                Access your Omnichannel Inbox, Campaigns, AI Bots & Admin Portal
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email Address / Username
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="name@company.com or admin"
                  className="h-11 bg-background"
                  autoFocus
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Password
                  </label>
                  <a
                    href="https://notifynow.in/auth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="h-11 bg-background"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md gap-2"
              >
                {isSubmitting ? "Logging In..." : "Log In to Account"} <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="pt-4 border-t border-border/40 text-center space-y-3">
              <p className="text-xs text-muted-foreground">
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                  Start Free Trial
                </Link>
              </p>

              <div className="p-3 rounded-xl bg-muted/40 text-[11px] text-muted-foreground flex items-center justify-between">
                <span>Admin Dashboard Access:</span>
                <Link to="/admin" className="text-indigo-600 font-semibold hover:underline">
                  Portal Login &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
