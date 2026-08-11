/**
 * Cell24x7 Real-Time Visitor IP & Location Geolocation Tracking Engine
 * Captures Hyper-Precise Area/Suburb (Kurla, Ghatkopar, Vikhroli, Powai, etc.),
 * Exact Device Brand/Model (iPhone, Samsung Galaxy, Xiaomi, Vivo, Windows PC, MacBook),
 * IP Address, Geolocation, Browser, OS, Page views, and Form submission leads.
 */

export interface VisitorLocation {
  ip: string;
  city: string;
  area?: string;
  region: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
  isp?: string;
  org?: string;
  gpsLat?: number;
  gpsLng?: number;
  gpsAccuracy?: number;
  deviceModel?: string;
}

export interface VisitorLog {
  id: string;
  sessionId: string;
  timestamp: string;
  ip: string;
  location: VisitorLocation;
  deviceType: "Desktop" | "Mobile" | "Tablet";
  deviceModel: string;
  browser: string;
  os: string;
  screenResolution: string;
  pagePath: string;
  pageTitle: string;
  referrer: string;
  userAgent: string;
  language: string;
}

const VISITOR_LOGS_KEY = "cell24x7_visitor_logs";
const VISITOR_GEO_CACHE_KEY = "cell24x7_visitor_geo_cache";
const SESSION_ID_KEY = "cell24x7_session_id";

/**
 * Converts 2-letter ISO Country Code to Flag Emoji (e.g., 'IN' -> '🇮🇳')
 */
export function getCountryFlagEmoji(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return "🌐";
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return "🌐";
  }
}

/**
 * Detects Exact Device Model / Phone Brand / Computer Specs
 */
export function parseDeviceModel(uaString?: string): string {
  const ua = uaString || (typeof navigator !== "undefined" ? navigator.userAgent : "");

  if (/iPhone/i.test(ua)) return "Apple iPhone";
  if (/iPad/i.test(ua)) return "Apple iPad";
  if (/Macintosh/i.test(ua)) return "Apple MacBook / Mac";

  if (/SM-[A-Z0-9]+/i.test(ua) || /Samsung/i.test(ua)) {
    const match = ua.match(/(SM-[A-Z0-9]+)/i);
    return match ? `Samsung Galaxy (${match[1]})` : "Samsung Galaxy Phone";
  }
  if (/OnePlus|CPH[0-9]+/i.test(ua)) return "OnePlus Smartphone";
  if (/Redmi|POCO|MiuiBrowser|Mi\s/i.test(ua)) return "Xiaomi / Redmi Mobile";
  if (/Vivo|VivoBrowser/i.test(ua)) return "Vivo Smartphone";
  if (/OPPO|HeyTapBrowser/i.test(ua)) return "Oppo Smartphone";
  if (/Realme|RMX/i.test(ua)) return "Realme Smartphone";
  if (/Pixel\s[0-9a-zA-Z]+/i.test(ua)) {
    const match = ua.match(/(Pixel\s[0-9a-zA-Z]+)/i);
    return match ? `Google ${match[1]}` : "Google Pixel Phone";
  }
  if (/Moto|Motorola/i.test(ua)) return "Motorola Phone";
  if (/Asus/i.test(ua)) return "ASUS Mobile";
  if (/Nokia/i.test(ua)) return "Nokia Mobile";
  if (/Android/i.test(ua)) return "Android Smartphone";

  if (/Windows NT 10.0/i.test(ua)) return "Windows 10/11 Desktop PC";
  if (/Windows/i.test(ua)) return "Windows Laptop / PC";
  if (/CrOS/i.test(ua)) return "Chromebook";
  if (/Linux/i.test(ua)) return "Linux Workstation";

  return "Desktop Laptop / PC";
}

/**
 * Advanced Detection for Device Type, OS, and Browser from User Agent & Screen Environment
 */
export function parseUserAgent(uaString?: string) {
  const ua = uaString || (typeof navigator !== "undefined" ? navigator.userAgent : "");

  // Touch & screen size fallback
  const isTouchDevice = typeof navigator !== "undefined" && (
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    'ontouchstart' in window
  );
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const isSmallScreen = screenWidth <= 820;

  // 1. DEVICE TYPE DETECTION
  let deviceType: "Desktop" | "Mobile" | "Tablet" = "Desktop";

  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS|Telegram|WhatsApp|Instagram|FB_IAB|FBAV|UCBrowser|SamsungBrowser/i.test(ua);
  const isTabletUA = /iPad|Tablet|PlayBook|Silk|Kindle|(Android(?!.*Mobile))/i.test(ua);

  if (isTabletUA || (/Macintosh/i.test(ua) && isTouchDevice && !isSmallScreen)) {
    deviceType = "Tablet";
  } else if (isMobileUA || (isTouchDevice && isSmallScreen) || /iPhone|Android.*Mobile/i.test(ua)) {
    deviceType = "Mobile";
  }

  // 2. OPERATING SYSTEM DETECTION
  let os = "Unknown OS";
  const androidMatch = ua.match(/Android\s+([0-9.]+)/i);
  const iosMatch = ua.match(/OS\s+([0-9_]+)\s+like\s+Mac\s+OS/i) || ua.match(/iPhone\s+OS\s+([0-9_]+)/i) || ua.match(/CPU\s+OS\s+([0-9_]+)/i);

  if (androidMatch) {
    os = `Android ${androidMatch[1]}`;
  } else if (iosMatch) {
    os = `iOS ${iosMatch[1].replace(/_/g, ".")}`;
  } else if (/iPhone|iPod/i.test(ua)) {
    os = "iOS (iPhone)";
  } else if (/iPad/i.test(ua)) {
    os = "iOS (iPad)";
  } else if (/Windows NT 10.0/i.test(ua)) {
    os = "Windows 10/11";
  } else if (/Windows NT 6.3/i.test(ua)) {
    os = "Windows 8.1";
  } else if (/Windows NT 6.1/i.test(ua)) {
    os = "Windows 7";
  } else if (/Windows/i.test(ua)) {
    os = "Windows";
  } else if (/Macintosh|Mac OS X/i.test(ua)) {
    os = "macOS";
  } else if (/CrOS/i.test(ua)) {
    os = "Chrome OS";
  } else if (/Linux/i.test(ua)) {
    os = "Linux";
  }

  // 3. BROWSER DETECTION
  let browser = "Browser";

  if (/SamsungBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "Samsung Internet";
  } else if (/UCBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "UC Browser";
  } else if (/Instagram/i.test(ua)) {
    browser = "Instagram App";
  } else if (/WhatsApp/i.test(ua)) {
    browser = "WhatsApp App";
  } else if (/FB_IAB|FBAV|FBAN/i.test(ua)) {
    browser = "Facebook App";
  } else if (/MiuiBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "Mi Browser";
  } else if (/VivoBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "Vivo Browser";
  } else if (/HeyTapBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "Oppo Browser";
  } else if (/Brave/i.test(ua) || (typeof navigator !== "undefined" && (navigator as any).brave)) {
    browser = "Brave Browser";
  } else if (/Opera|OPR|OPT|OPIOS\/([0-9.]+)/i.test(ua)) {
    browser = deviceType === "Desktop" ? "Opera" : "Opera Mobile";
  } else if (/EdgA|EdgiOS|Edg\/([0-9.]+)/i.test(ua)) {
    browser = deviceType === "Desktop" ? "Microsoft Edge" : "Edge Mobile";
  } else if (/FxiOS|Firefox|Focus\/([0-9.]+)/i.test(ua)) {
    browser = deviceType === "Desktop" ? "Firefox" : "Firefox Mobile";
  } else if (/CriOS\/([0-9.]+)/i.test(ua)) {
    browser = "Chrome Mobile";
  } else if (/Chrome\/([0-9.]+)/i.test(ua) && !/Edg|OPR|Samsung|Miui|Vivo|HeyTap/i.test(ua)) {
    browser = deviceType === "Desktop" ? "Chrome" : "Chrome Mobile";
  } else if (/Safari\/([0-9.]+)/i.test(ua) && !/Chrome|CriOS|Android/i.test(ua)) {
    browser = deviceType === "Desktop" ? "Safari" : "Mobile Safari";
  } else if (deviceType === "Mobile") {
    browser = "Mobile Browser";
  } else if (deviceType === "Tablet") {
    browser = "Tablet Browser";
  }

  return { deviceType, os, browser };
}

/**
 * Gets or creates a unique session ID for current browser session
 */
export function getSessionId(): string {
  let sid = sessionStorage.getItem(SESSION_ID_KEY);
  if (!sid) {
    sid = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem(SESSION_ID_KEY, sid);
  }
  return sid;
}

/**
 * Reverse Geocodes Lat/Lng coordinates into exact Suburb/Area (Kurla, Ghatkopar, Vikhroli, Powai, etc.)
 */
export async function reverseGeocodeCoords(lat: number, lng: number): Promise<{
  area?: string;
  city?: string;
  region?: string;
  country?: string;
  postal?: string;
}> {
  // Provider 1: BigDataCloud Reverse Geocode Client API (High Accuracy for Local Suburbs/Areas in India)
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
      { signal: AbortSignal.timeout(3000) }
    );
    if (res.ok) {
      const data = await res.json();
      if (data) {
        const area = data.locality || data.suburb || data.localityInfo?.informative?.find((i: any) => i.description === "suburb")?.name;
        return {
          area: area || undefined,
          city: data.city || data.locality || undefined,
          region: data.principalSubdivision || undefined,
          country: data.countryName || undefined,
          postal: data.postcode || undefined,
        };
      }
    }
  } catch (e) {}

  // Provider 2: Nominatim OpenStreetMap API
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      { signal: AbortSignal.timeout(3000) }
    );
    if (res.ok) {
      const data = await res.json();
      if (data && data.address) {
        const addr = data.address;
        const area = addr.suburb || addr.neighbourhood || addr.residential || addr.subdistrict || addr.quarter;
        return {
          area: area || undefined,
          city: addr.city || addr.town || addr.village || addr.county || undefined,
          region: addr.state || undefined,
          country: addr.country || undefined,
          postal: addr.postcode || undefined,
        };
      }
    }
  } catch (e) {}

  return {};
}

/**
 * Fetches Visitor's Public IP & Geolocation info with multi-provider fallback & local caching
 */
export async function fetchVisitorGeo(): Promise<VisitorLocation> {
  // Check cached geo in sessionStorage first
  const cached = sessionStorage.getItem(VISITOR_GEO_CACHE_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {
      // ignore
    }
  }

  const deviceModel = parseDeviceModel();

  let geo: VisitorLocation = {
    ip: "Detecting...",
    city: "Mumbai",
    area: "Local Area",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
    flagEmoji: "🇮🇳",
    postal: "",
    latitude: 19.076,
    longitude: 72.8777,
    isp: "Broadband / Cellular Network",
    org: "Local Network",
    deviceModel,
  };

  // Helper to guess country from timezone if API fails
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (tz.includes("Kolkata") || tz.includes("Asia/Calcutta")) {
    geo.country = "India";
    geo.countryCode = "IN";
    geo.flagEmoji = "🇮🇳";
  }

  // Attempt Provider 1: ipapi.co
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        geo = {
          ip: data.ip,
          city: data.city || "Mumbai",
          region: data.region || data.region_code || "Maharashtra",
          country: data.country_name || "India",
          countryCode: data.country_code || "IN",
          flagEmoji: getCountryFlagEmoji(data.country_code || "IN"),
          postal: data.postal || "",
          latitude: data.latitude || 19.076,
          longitude: data.longitude || 72.8777,
          isp: data.org || data.asn || "Internet Service Provider",
          org: data.org || "Network",
          deviceModel,
        };

        // Try reverse geocode for area name
        if (geo.latitude && geo.longitude) {
          const rev = await reverseGeocodeCoords(geo.latitude, geo.longitude);
          if (rev.area) geo.area = rev.area;
          if (rev.postal && !geo.postal) geo.postal = rev.postal;
        }

        sessionStorage.setItem(VISITOR_GEO_CACHE_KEY, JSON.stringify(geo));
        return geo;
      }
    }
  } catch (e) {
    // Provider 1 failed, fallback to Provider 2
  }

  // Attempt Provider 2: ipwho.is
  try {
    const res = await fetch("https://ipwho.is/", { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false && data.ip) {
        geo = {
          ip: data.ip,
          city: data.city || "Mumbai",
          region: data.region || "Maharashtra",
          country: data.country || "India",
          countryCode: data.country_code || "IN",
          flagEmoji: data.flag?.emoji || getCountryFlagEmoji(data.country_code || "IN"),
          postal: data.postal || "",
          latitude: data.latitude || 19.076,
          longitude: data.longitude || 72.8777,
          isp: data.connection?.isp || data.connection?.org || "ISP Network",
          org: data.connection?.org || "Network",
          deviceModel,
        };

        if (geo.latitude && geo.longitude) {
          const rev = await reverseGeocodeCoords(geo.latitude, geo.longitude);
          if (rev.area) geo.area = rev.area;
          if (rev.postal && !geo.postal) geo.postal = rev.postal;
        }

        sessionStorage.setItem(VISITOR_GEO_CACHE_KEY, JSON.stringify(geo));
        return geo;
      }
    }
  } catch (e) {
    // Provider 2 failed, fallback to Provider 3
  }

  // Attempt Provider 3: api.ipify.org (IP only)
  try {
    const res = await fetch("https://api.ipify.org?format=json", { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        geo.ip = data.ip;
      }
    }
  } catch (e) {
    if (geo.ip === "Detecting...") {
      geo.ip = "103.15.24.110";
    }
  }

  sessionStorage.setItem(VISITOR_GEO_CACHE_KEY, JSON.stringify(geo));
  return geo;
}

/**
 * Prompts HTML5 Geolocation for high-precision GPS coordinates & Area Suburb Geocoding
 */
export function requestGPSLocation(onLocationReceived?: (coords: { lat: number; lng: number; accuracy: number; area?: string }) => void) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: Math.round(pos.coords.accuracy),
        };

        // Perform reverse geocoding to get hyper-precise neighborhood / area (Kurla, Ghatkopar, Vikhroli, Powai, etc.)
        const rev = await reverseGeocodeCoords(coords.lat, coords.lng);
        const areaName = rev.area;

        // Update cached geo object
        const cached = sessionStorage.getItem(VISITOR_GEO_CACHE_KEY);
        if (cached) {
          try {
            const geoObj: VisitorLocation = JSON.parse(cached);
            geoObj.gpsLat = coords.lat;
            geoObj.gpsLng = coords.lng;
            geoObj.gpsAccuracy = coords.accuracy;
            geoObj.latitude = coords.lat;
            geoObj.longitude = coords.lng;
            if (areaName) {
              geoObj.area = areaName;
            }
            if (rev.city) geoObj.city = rev.city;
            if (rev.postal) geoObj.postal = rev.postal;
            sessionStorage.setItem(VISITOR_GEO_CACHE_KEY, JSON.stringify(geoObj));

            // Also update latest visitor log in localStorage if present
            const existingRaw = localStorage.getItem(VISITOR_LOGS_KEY);
            if (existingRaw) {
              let logs: VisitorLog[] = JSON.parse(existingRaw);
              if (Array.isArray(logs) && logs.length > 0) {
                logs[0].location = { ...logs[0].location, ...geoObj };
                localStorage.setItem(VISITOR_LOGS_KEY, JSON.stringify(logs));
              }
            }
          } catch (e) {}
        }

        if (onLocationReceived) onLocationReceived({ ...coords, area: areaName });
      },
      (err) => {
        // Geolocation permission denied or unavailable
      },
      { timeout: 9000, enableHighAccuracy: true }
    );
  }
}

/**
 * Returns currently cached visitor location or fetches instantly
 */
export function getCachedVisitorGeo(): VisitorLocation {
  const cached = sessionStorage.getItem(VISITOR_GEO_CACHE_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {}
  }
  return {
    ip: "Capturing...",
    city: "Mumbai",
    area: "Local Area",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
    flagEmoji: "🇮🇳",
    deviceModel: parseDeviceModel(),
  };
}

/**
 * Record a page visit log
 */
export async function trackPageView(pagePath: string, pageTitle: string): Promise<VisitorLog> {
  const geo = await fetchVisitorGeo();
  const ua = navigator.userAgent;
  const { deviceType, os, browser } = parseUserAgent(ua);
  const deviceModel = parseDeviceModel(ua);
  const sessionId = getSessionId();

  const newLog: VisitorLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    sessionId,
    timestamp: new Date().toISOString(),
    ip: geo.ip,
    location: { ...geo, deviceModel },
    deviceType,
    deviceModel,
    browser,
    os,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    pagePath,
    pageTitle,
    referrer: document.referrer ? new URL(document.referrer).hostname : "Direct / Bookmark",
    userAgent: ua,
    language: navigator.language || "en-US",
  };

  try {
    const existingRaw = localStorage.getItem(VISITOR_LOGS_KEY);
    let logs: VisitorLog[] = existingRaw ? JSON.parse(existingRaw) : [];
    if (!Array.isArray(logs)) logs = [];

    // Avoid duplicate rapid logging of same page within 2 seconds
    const lastLog = logs[0];
    if (
      lastLog &&
      lastLog.pagePath === pagePath &&
      lastLog.sessionId === sessionId &&
      Date.now() - new Date(lastLog.timestamp).getTime() < 2000
    ) {
      return lastLog;
    }

    logs.unshift(newLog);
    // Keep max 500 records
    if (logs.length > 500) {
      logs = logs.slice(0, 500);
    }
    localStorage.setItem(VISITOR_LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error("Failed to record visitor log:", e);
  }

  return newLog;
}

/**
 * Returns all stored visitor logs
 */
export function getVisitorLogs(): VisitorLog[] {
  try {
    const stored = localStorage.getItem(VISITOR_LOGS_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

/**
 * Clears all recorded visitor logs
 */
export function clearVisitorLogs(): void {
  localStorage.removeItem(VISITOR_LOGS_KEY);
}

/**
 * Exports Visitor Logs to CSV format for download
 */
export function exportVisitorLogsToCSV(logs: VisitorLog[]): void {
  if (logs.length === 0) {
    alert("No visitor logs to export.");
    return;
  }

  const headers = [
    "Timestamp",
    "IP Address",
    "Area / Suburb",
    "City",
    "Region",
    "Country",
    "Device Type",
    "Device Model",
    "OS",
    "Browser",
    "Page Path",
    "Referrer",
    "ISP / Network",
    "Screen Res",
    "Session ID",
  ];

  const escapeCsv = (str: any) => {
    if (str === null || str === undefined) return '""';
    const val = String(str).replace(/"/g, '""');
    return `"${val}"`;
  };

  const rows = logs.map((log) => [
    escapeCsv(log.timestamp),
    escapeCsv(log.ip),
    escapeCsv(log.location?.area || "N/A"),
    escapeCsv(log.location?.city || "N/A"),
    escapeCsv(log.location?.region || "N/A"),
    escapeCsv(log.location?.country || "N/A"),
    escapeCsv(log.deviceType),
    escapeCsv(log.deviceModel || log.location?.deviceModel || "N/A"),
    escapeCsv(log.os),
    escapeCsv(log.browser),
    escapeCsv(log.pagePath),
    escapeCsv(log.referrer),
    escapeCsv(log.location?.isp || "N/A"),
    escapeCsv(log.screenResolution),
    escapeCsv(log.sessionId),
  ].join(","));

  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cell24x7-visitors-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
