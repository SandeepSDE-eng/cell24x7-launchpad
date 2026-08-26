import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCodeSVG } from "qrcode.react";
import { Html5Qrcode } from "html5-qrcode";
import { 
  QrCode, 
  Camera, 
  Download, 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  Upload, 
  Sparkles, 
  ShieldCheck,
  Eye,
  Maximize2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QRPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const [cameras, setCameras] = useState<Array<{ id: string; label: string }>>([]);
  const [selectedCameraId, setSelectedCameraId] = useState<string>("");
  const [scannerError, setScannerError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("code");

  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
  const qrReaderContainerId = "reader-container";

  // Official PDF link URL (relative and absolute)
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

  // Start Camera Scanner
  const startCameraScanner = async (cameraIdToUse?: string) => {
    try {
      setScannerError(null);
      setScannedResult(null);

      // Stop existing instance if running
      if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
        await html5QrCodeRef.current.stop();
      }

      const devices = await Html5Qrcode.getCameras();
      if (devices && devices.length > 0) {
        setCameras(devices.map(d => ({ id: d.id, label: d.label || `Camera ${d.id}` })));
        const targetCam = cameraIdToUse || devices[devices.length - 1].id; // default back camera if available
        setSelectedCameraId(targetCam);

        const html5QrCode = new Html5Qrcode(qrReaderContainerId);
        html5QrCodeRef.current = html5QrCode;

        await html5QrCode.start(
          targetCam,
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText) => {
            setScannedResult(decodedText);
            toast({
              title: "QR Code Scanned Successfully! 🎉",
              description: `Result: ${decodedText}`,
            });
            // Auto open if it's brochure or link
            if (decodedText.includes("Brochure") || decodedText.endsWith(".pdf") || decodedText.includes("cell24x7")) {
              window.open(decodedText, "_blank");
            }
          },
          () => {
            // Ignored scan errors per frame
          }
        );
        setIsScanning(true);
      } else {
        setScannerError("No camera devices found on this device.");
      }
    } catch (err: any) {
      console.error("Camera scanner error:", err);
      setScannerError(err.message || "Failed to start camera. Please ensure camera permissions are granted.");
      setIsScanning(false);
    }
  };

  // Stop Camera Scanner
  const stopCameraScanner = async () => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
      try {
        await html5QrCodeRef.current.stop();
        setIsScanning(false);
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
  };

  // Handle image file upload scan
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setScannerError(null);
      const html5QrCode = new Html5Qrcode("file-scan-temp");
      const result = await html5QrCode.scanFile(file, true);
      setScannedResult(result);
      toast({
        title: "QR Image Scanned!",
        description: `Found content: ${result}`,
      });
      if (result.includes("Brochure") || result.endsWith(".pdf") || result.includes("cell24x7")) {
        window.open(result, "_blank");
      }
    } catch (err: any) {
      console.error("File scan error:", err);
      setScannerError("Could not detect a valid QR code in this image.");
      toast({
        title: "Scan Failed",
        description: "No readable QR code found in the uploaded image.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    return () => {
      if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
        html5QrCodeRef.current.stop().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col justify-between">
      <Header />

      <main className="container-custom pt-24 pb-16 flex-grow">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Official Document & QR Portal
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
            Cell24x7 Product Brochure QR Code
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Scan the QR code below using your mobile camera or built-in scanner to open, view, and download the official <span className="font-semibold text-white">Cell24x7 Brochure</span>.
          </p>
        </div>

        {/* Tabs for Code View & Live Camera Scanner */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="code" value={activeTab} onValueChange={(val) => {
            setActiveTab(val);
            if (val !== "scanner" && isScanning) {
              stopCameraScanner();
            }
          }} className="w-full">
            <TabsList className="grid grid-cols-3 w-full bg-slate-800/80 border border-slate-700/60 rounded-xl p-1.5 mb-8">
              <TabsTrigger value="code" className="rounded-lg font-medium text-sm data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-2 py-2.5">
                <QrCode className="w-4 h-4" /> Official QR Code
              </TabsTrigger>
              <TabsTrigger value="scanner" className="rounded-lg font-medium text-sm data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-2 py-2.5">
                <Camera className="w-4 h-4" /> Live QR Scanner
              </TabsTrigger>
              <TabsTrigger value="preview" className="rounded-lg font-medium text-sm data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-2 py-2.5">
                <Eye className="w-4 h-4" /> View Brochure PDF
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: OFFICIAL QR CODE */}
            <TabsContent value="code" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Left Card: QR Code Visual */}
                <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col justify-between items-center text-center p-6 rounded-2xl">
                  <CardHeader className="pb-4 p-0">
                    <Badge variant="outline" className="border-indigo-500/40 text-indigo-300 bg-indigo-500/10 mb-2">
                      Scan with Phone Camera
                    </Badge>
                    <CardTitle className="text-xl text-white font-bold">Cell24x7 Brochure QR</CardTitle>
                    <CardDescription className="text-slate-400 text-xs">
                      Points directly to Cell24x7-Brochure.pdf
                    </CardDescription>
                  </CardHeader>

                  <div className="my-6 p-5 bg-white rounded-2xl shadow-inner border border-slate-200 relative group transition-transform duration-300 hover:scale-105">
                    <QRCodeSVG
                      id="official-brochure-qr"
                      value={absoluteBrochureUrl}
                      size={220}
                      level="H"
                      includeMargin={true}
                    />
                    <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
                      <span className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md">
                        Scan Me!
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    <Button 
                      onClick={handleDownloadQR} 
                      variant="outline" 
                      className="w-full border-indigo-500/50 text-indigo-200 hover:bg-indigo-600 hover:text-white rounded-xl gap-2 font-medium"
                    >
                      <Download className="w-4 h-4" /> Download QR Code Image (PNG)
                    </Button>

                    <Button 
                      onClick={handleCopyLink} 
                      variant="ghost" 
                      className="w-full text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl gap-2 text-xs"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "Link Copied to Clipboard" : "Copy Direct Brochure URL"}
                    </Button>
                  </div>
                </Card>

                {/* Right Card: Quick Actions & Brochure Details */}
                <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-xl shadow-2xl p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/20 text-primary rounded-xl">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Cell24x7 Official Brochure</h3>
                        <p className="text-xs text-slate-400">PDF Document • High Quality Presentation</p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Download or preview the official Cell24x7 brochure to explore our AI-powered omnichannel messaging solutions, WhatsApp Business API, RCS, SMS, VoiceBot, and custom application integrations.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Verified & Safe Document Download</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                        <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>Instant Access on Mobile & Desktop</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-6 rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
                    >
                      <a href={brochurePdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" /> Open & View Brochure (PDF)
                      </a>
                    </Button>

                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                    >
                      <a href={brochurePdfUrl} download="Cell24x7-Brochure.pdf">
                        <Download className="w-5 h-5 text-indigo-400" /> Download Brochure PDF
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* TAB 2: LIVE QR CAMERA SCANNER */}
            <TabsContent value="scanner" className="focus-visible:outline-none">
              <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-xl shadow-2xl p-6 rounded-2xl">
                <CardHeader className="p-0 mb-6 text-center">
                  <CardTitle className="text-2xl text-white font-bold flex items-center justify-center gap-2">
                    <Camera className="w-6 h-6 text-indigo-400" /> Camera & Image QR Scanner
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Use your device camera or upload a QR image file to scan and open any document or link.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  {/* Scanner Feed Container */}
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                    <div id={qrReaderContainerId} className="w-full max-w-sm rounded-xl overflow-hidden shadow-md"></div>
                    
                    {!isScanning && (
                      <div className="text-center py-8 px-4">
                        <div className="w-16 h-16 bg-indigo-900/30 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                          <Camera className="w-8 h-8" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">Camera Scanner Inactive</h4>
                        <p className="text-slate-400 text-xs max-w-xs mx-auto mb-6">
                          Click below to start your device camera and scan any QR code.
                        </p>
                        <Button 
                          onClick={() => startCameraScanner()} 
                          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 font-medium gap-2 shadow-lg shadow-indigo-600/30"
                        >
                          <Camera className="w-4 h-4" /> Turn On Camera Scanner
                        </Button>
                      </div>
                    )}

                    {isScanning && (
                      <div className="w-full mt-4 flex flex-col items-center gap-3">
                        {cameras.length > 1 && (
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-slate-400">Select Camera:</span>
                            <select
                              value={selectedCameraId}
                              onChange={(e) => startCameraScanner(e.target.value)}
                              className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2 py-1 text-xs outline-none"
                            >
                              {cameras.map((cam) => (
                                <option key={cam.id} value={cam.id}>{cam.label}</option>
                              ))}
                            </select>
                          </div>
                        )}

                        <Button 
                          onClick={stopCameraScanner} 
                          variant="destructive" 
                          className="rounded-xl text-xs px-4 py-2 gap-1.5"
                        >
                          Stop Camera
                        </Button>
                      </div>
                    )}
                  </div>

                  {scannerError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-3 rounded-xl text-xs text-center">
                      {scannerError}
                    </div>
                  )}

                  {/* Scanned Result Banner */}
                  {scannedResult && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                      <div className="text-center sm:text-left">
                        <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Scanned Result</div>
                        <div className="text-sm font-mono text-white break-all">{scannedResult}</div>
                      </div>
                      <Button 
                        asChild 
                        className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs px-4 py-2 shrink-0 gap-1.5"
                      >
                        <a href={scannedResult} target="_blank" rel="noopener noreferrer">
                          Open Link <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                  )}

                  {/* File Upload Scanner */}
                  <div className="border-t border-slate-800 pt-6">
                    <h4 className="text-sm font-semibold text-white mb-3 text-center">Or Upload a QR Code Image</h4>
                    <div className="flex items-center justify-center">
                      <label className="w-full sm:w-auto cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 rounded-xl px-6 py-3 text-xs font-medium flex items-center justify-center gap-2 transition-colors">
                        <Upload className="w-4 h-4 text-indigo-400" />
                        <span>Choose Image File to Scan</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleFileUpload} 
                          className="hidden" 
                        />
                      </label>
                    </div>
                    <div id="file-scan-temp" className="hidden"></div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 3: BROCHURE PREVIEW */}
            <TabsContent value="preview" className="focus-visible:outline-none">
              <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-xl shadow-2xl p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Live PDF Brochure Viewer</h3>
                    <p className="text-xs text-slate-400">Cell24x7-Brochure.pdf</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-slate-700 text-slate-200 hover:bg-slate-800 text-xs rounded-xl gap-1.5"
                    >
                      <a href={brochurePdfUrl} target="_blank" rel="noopener noreferrer">
                        <Maximize2 className="w-3.5 h-3.5" /> Fullscreen
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-xl gap-1.5"
                    >
                      <a href={brochurePdfUrl} download="Cell24x7-Brochure.pdf">
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="w-full h-[600px] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                  <iframe 
                    src={brochurePdfUrl} 
                    className="w-full h-full border-none"
                    title="Cell24x7 Official Brochure Preview"
                  />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
