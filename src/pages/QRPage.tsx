import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QRCodeSVG } from "qrcode.react";
import { addEnquiry } from "@/lib/enquiryStorage";
import { trackPageView } from "@/lib/visitorTracking";
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  FileText,
  QrCode,
  ShieldCheck,
  Phone,
  Mail,
  Globe,
  User,
  Building,
  Lock,
  Unlock,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/main red no pad.png";

export default function QRPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    return Boolean(sessionStorage.getItem("cell24x7_qr_brochure_unlocked"));
  });

  // Lead Form State
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [bookDemoChecked, setBookDemoChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Official PDF link URL
  const brochurePdfUrl = "/Cell24x7-Brochure.pdf";
  const absoluteBrochureUrl = `${window.location.origin}${brochurePdfUrl}`;

  useEffect(() => {
    // Automatically track QR Scan event in Admin logs
    trackPageView("/qr?scanned=true", "QR Scan Brochure Portal");
  }, []);

  // Handle Smart Form Submit & Unlock
  const handleUnlockBrochure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      toast({
        title: "Please enter required details",
        description: "Full Name and Mobile Number are required to unlock the brochure.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Record Enquiry in Admin System
      addEnquiry({
        name: name.trim(),
        mobile: mobile.trim(),
        email: email.trim() || "N/A",
        company_name: company.trim() || "N/A",
        service_type: bookDemoChecked ? "QR Brochure & Demo Request" : "QR Code Scan Brochure",
        remarks: bookDemoChecked 
          ? "Scanned QR code, unlocked brochure & requested personalized demo"
          : "Scanned QR code and unlocked official brochure",
        status: "New",
      });

      // Mark session unlocked
      sessionStorage.setItem("cell24x7_qr_brochure_unlocked", "true");
      setUnlocked(true);
      setIsSubmitting(false);

      toast({
        title: "Brochure Unlocked & Access Granted! 🎉",
        description: "Your details have been registered. Opening brochure now...",
      });

      // Automatically trigger open & download
      window.open(brochurePdfUrl, "_blank");
      
      const link = document.createElement("a");
      link.href = brochurePdfUrl;
      link.download = "Cell24x7-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  // Copy URL to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(absoluteBrochureUrl);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Brochure link copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  // Download QR Code as PNG
  const handleDownloadQR = () => {
    const svgElement = document.getElementById("official-brochure-qr");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = 600;
      canvas.height = 600;
      if (ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 50, 500, 500);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "Cell24x7-Brochure-QR.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };

    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    toast({
      title: "Downloading QR Code",
      description: "Cell24x7-Brochure-QR.png is downloading.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between">
      <Header />

      <main className="container-custom pt-24 pb-16 flex-grow flex flex-col items-center justify-center">
        {/* Banner Section matching user brochure design */}
        <div className="w-full max-w-4xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30 shadow-2xl rounded-3xl p-6 sm:p-10 mb-10 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 space-y-3">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> SMART QR ACCESS & LEAD TRACKING
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                LET'S BUILD <span className="text-amber-500">STRONGER CONVERSATIONS.</span>
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base font-medium">
                More engagement. More conversions. More growth.
              </p>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                Book a personalized demo and discover how Cell24x7 can transform your customer communication.
              </p>

              {/* Contact Footer Line inside Banner */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 877 972 1034</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>sales@cell24x7.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>www.cell24x7.com</span>
                </div>
              </div>
            </div>

            {/* QR Code Box in Banner */}
            <div className="shrink-0 flex flex-col items-center bg-white p-4 rounded-2xl shadow-xl border border-slate-200">
              <QRCodeSVG
                id="official-brochure-qr"
                value={absoluteBrochureUrl}
                size={160}
                level="H"
                includeMargin={true}
                fgColor="#0f172a"
                bgColor="#FFFFFF"
              />
              <div className="text-slate-900 font-bold text-xs mt-2 text-center">Scan to connect</div>
              <div className="text-slate-500 text-[10px] font-medium text-center">Book a demo</div>
            </div>
          </div>
        </div>

        {/* Smart Lead Gate / Brochure Access Card */}
        <Card className="w-full max-w-xl bg-slate-950/90 border border-slate-800 shadow-2xl rounded-3xl p-6 sm:p-8">
          {!unlocked ? (
            /* LOCKED STATE: Lead Capture Form */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/20 mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  Unlock Official Cell24x7 Brochure
                </CardTitle>
                <CardDescription className="text-slate-400 text-sm">
                  Please enter your contact details below to unlock and download the complete product brochure.
                </CardDescription>
              </div>

              <form onSubmit={handleUnlockBrochure} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" /> Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-xl h-11 focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="mobile" className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> WhatsApp / Mobile Number <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="mobile" 
                    type="tel"
                    placeholder="+91 98765 43210" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    required 
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-xl h-11 focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-400" /> Work Email (Optional)
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="name@company.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-xl h-11 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-amber-400" /> Company Name (Optional)
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company / Org" 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-xl h-11 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <input 
                    type="checkbox" 
                    id="bookDemo" 
                    checked={bookDemoChecked} 
                    onChange={(e) => setBookDemoChecked(e.target.checked)} 
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                  />
                  <label htmlFor="bookDemo" className="text-xs text-slate-300 cursor-pointer font-medium">
                    Request a personalized 1-on-1 Product Demo from Cell24x7 team
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-6 rounded-2xl shadow-lg shadow-amber-500/20 text-base gap-2 transition-all"
                >
                  <Unlock className="w-5 h-5" /> 
                  {isSubmitting ? "Unlocking Brochure..." : "Unlock & Download Brochure PDF"}
                </Button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified lead tracking • Instant PDF access
                </p>
              </form>
            </div>
          ) : (
            /* UNLOCKED STATE: Direct View & Download */
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1 text-xs rounded-full mb-2">
                  Access Unlocked & Registered
                </Badge>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  Cell24x7 Brochure Ready!
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Your details have been saved into our system. You can view or download the brochure anytime below.
                </CardDescription>
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  asChild 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-6 rounded-2xl shadow-lg shadow-amber-500/20 text-base gap-2"
                >
                  <a href={brochurePdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" /> Open & View Brochure (PDF)
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 py-6 rounded-2xl font-semibold gap-2"
                >
                  <a href={brochurePdfUrl} download="Cell24x7-Brochure.pdf">
                    <Download className="w-5 h-5 text-amber-400" /> Re-download PDF File
                  </a>
                </Button>
              </div>

              <div className="flex gap-2 pt-2 border-t border-slate-800/80">
                <Button 
                  onClick={handleDownloadQR} 
                  variant="ghost" 
                  className="flex-1 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl text-xs gap-1.5 h-9"
                >
                  <Download className="w-3.5 h-3.5" /> Save QR Image
                </Button>

                <Button 
                  onClick={handleCopyLink} 
                  variant="ghost" 
                  className="flex-1 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl text-xs gap-1.5 h-9"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Link Copied!" : "Copy Link"}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </main>

      <Footer />
    </div>
  );
}
