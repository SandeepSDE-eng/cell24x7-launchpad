import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QRCodeSVG } from "qrcode.react";
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  FileText,
  QrCode
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QRPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Official PDF link URL
  const brochurePdfUrl = "/Cell24x7-Brochure.pdf";
  const absoluteBrochureUrl = `${window.location.origin}${brochurePdfUrl}`;

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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <Header />

      <main className="container-custom pt-28 pb-16 flex-grow flex flex-col items-center justify-center">
        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-in">
          <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-red-600" /> Cell24x7 Official Brochure
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">
            Scan with Phone Camera
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Scan the QR code using your smartphone camera to open and download the official <span className="font-bold text-slate-900">Cell24x7 Product Brochure</span>.
          </p>
        </div>

        {/* Simplified Single QR Card */}
        <Card className="w-full max-w-md bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-8 text-center animate-scale-in">
          <CardHeader className="p-0 pb-4">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100 mx-auto text-xs px-3 py-1 font-medium mb-2">
              <QrCode className="w-3.5 h-3.5 mr-1 text-red-600" /> Scan QR Code
            </Badge>
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-red-600" /> Cell24x7 Brochure
            </CardTitle>
            <CardDescription className="text-slate-500 text-xs">
              Opens Cell24x7-Brochure.pdf directly on mobile
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 my-4 flex flex-col items-center">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm relative group transition-all duration-300 hover:shadow-md hover:border-red-300">
              <QRCodeSVG
                id="official-brochure-qr"
                value={absoluteBrochureUrl}
                size={230}
                level="H"
                includeMargin={true}
                fgColor="#0f172a"
                bgColor="#FFFFFF"
              />
            </div>
            
            <p className="text-xs text-slate-500 mt-3 font-medium">
              Point phone camera at code to open document
            </p>
          </CardContent>

          {/* Action Buttons */}
          <div className="w-full space-y-3 pt-2">
            <Button 
              asChild 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 rounded-2xl shadow-md transition-all gap-2"
            >
              <a href={brochurePdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> View Brochure (PDF)
              </a>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 py-6 rounded-2xl font-semibold gap-2"
            >
              <a href={brochurePdfUrl} download="Cell24x7-Brochure.pdf">
                <Download className="w-4 h-4 text-red-600" /> Download Brochure
              </a>
            </Button>

            <div className="flex gap-2 pt-2">
              <Button 
                onClick={handleDownloadQR} 
                variant="ghost" 
                className="flex-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl text-xs gap-1.5 h-9"
              >
                <Download className="w-3.5 h-3.5" /> Save QR Image
              </Button>

              <Button 
                onClick={handleCopyLink} 
                variant="ghost" 
                className="flex-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl text-xs gap-1.5 h-9"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Link Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
