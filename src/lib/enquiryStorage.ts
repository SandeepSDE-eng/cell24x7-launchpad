import initialEnquiries from "@/data/initialEnquiries.json";
import { getCachedVisitorGeo } from "@/lib/visitorTracking";

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  mobile: string;
  country_code?: string | null;
  company_name?: string | null;
  service_type?: string | null;
  remarks?: string | null;
  created_at: string;
  updated_at: string;
  status?: "New" | "In Contact" | "Converted" | "Closed" | "Pending";
  ip_address?: string | null;
  location_city?: string | null;
  location_region?: string | null;
  location_country?: string | null;
  location_flag?: string | null;
}

const STORAGE_KEY = "cell24x7_enquiries_master_v2";
const LEGACY_STORAGE_KEY = "cell24x7_demo_requests";

/**
 * Normalizes an enquiry object
 */
export function normalizeEnquiry(raw: any): Enquiry {
  return {
    id: Number(raw.id) || Date.now(),
    name: raw.name || `${raw.firstName || ''} ${raw.lastName || ''}`.trim() || "Anonymous",
    email: raw.email || "N/A",
    mobile: raw.mobile || raw.phone || "N/A",
    country_code: raw.country_code || "+91",
    company_name: raw.company_name || raw.company || "",
    service_type: raw.service_type || raw.service || "General Inquiry",
    remarks: raw.remarks || raw.message || "",
    created_at: raw.created_at || raw.createdAt || new Date().toISOString().replace('T', ' ').slice(0, 19),
    updated_at: raw.updated_at || raw.updatedAt || new Date().toISOString().replace('T', ' ').slice(0, 19),
    status: raw.status || "New",
    ip_address: raw.ip_address || raw.ip || null,
    location_city: raw.location_city || raw.city || null,
    location_region: raw.location_region || raw.region || raw.state || null,
    location_country: raw.location_country || raw.country || null,
    location_flag: raw.location_flag || raw.flag || null,
  };
}

/**
 * Fetches all enquiries from localStorage, ensuring all 233 initial DB dump records are ALWAYS included
 */
export function getEnquiries(): Enquiry[] {
  try {
    const initItems: Enquiry[] = (initialEnquiries as any[]).map(normalizeEnquiry);
    
    // Map of all initial 233 DB items by ID
    const enquiryMap = new Map<number, Enquiry>();
    initItems.forEach((item) => enquiryMap.set(item.id, item));

    // Check stored items (user additions, remarks edits, etc.)
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("cell24x7_enquiries_master");
    if (stored) {
      try {
        const parsedStored = JSON.parse(stored);
        if (Array.isArray(parsedStored)) {
          parsedStored.forEach((item) => {
            const norm = normalizeEnquiry(item);
            enquiryMap.set(norm.id, norm); // user edits/additions take precedence or add on top
          });
        }
      } catch (e) {
        // ignore
      }
    }

    // Check legacy demo requests
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      try {
        const parsedLegacy = JSON.parse(legacy);
        if (Array.isArray(parsedLegacy)) {
          parsedLegacy.forEach((item) => {
            const norm = normalizeEnquiry(item);
            if (!enquiryMap.has(norm.id)) {
              enquiryMap.set(norm.id, norm);
            }
          });
        }
      } catch (e) {
        // ignore
      }
    }

    const result = Array.from(enquiryMap.values());
    
    // Sort descending by created_at or ID so latest enquiries appear at top
    result.sort((a, b) => {
      const timeA = new Date(a.created_at).getTime() || a.id;
      const timeB = new Date(b.created_at).getTime() || b.id;
      return timeB - timeA;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    return result;
  } catch (e) {
    console.error("Failed to load enquiries:", e);
    return (initialEnquiries as any[]).map(normalizeEnquiry);
  }
}

/**
 * Saves enquiries list to localStorage
 */
export function saveEnquiries(items: Enquiry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to save enquiries:", e);
  }
}

/**
 * Adds a new enquiry to the top of the list
 */
export function addEnquiry(data: Partial<Enquiry>): Enquiry {
  const list = getEnquiries();
  const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
  const geo = getCachedVisitorGeo();
  const newEnquiry: Enquiry = {
    id: newId,
    name: data.name || "N/A",
    email: data.email || "N/A",
    mobile: data.mobile || "N/A",
    country_code: data.country_code || "+91",
    company_name: data.company_name || "",
    service_type: data.service_type || "General Inquiry",
    remarks: data.remarks || "",
    created_at: new Date().toISOString().replace('T', ' ').slice(0, 19),
    updated_at: new Date().toISOString().replace('T', ' ').slice(0, 19),
    status: "New",
    ip_address: data.ip_address || geo.ip || null,
    location_city: data.location_city || geo.city || null,
    location_region: data.location_region || geo.region || null,
    location_country: data.location_country || geo.country || null,
    location_flag: data.location_flag || geo.flagEmoji || null,
  };

  const updatedList = [newEnquiry, ...list];
  saveEnquiries(updatedList);
  return newEnquiry;
}

/**
 * Updates an existing enquiry by ID
 */
export function updateEnquiry(id: number, updates: Partial<Enquiry>): Enquiry | null {
  const list = getEnquiries();
  const index = list.findIndex(item => item.id === id);
  if (index === -1) return null;

  const updated: Enquiry = {
    ...list[index],
    ...updates,
    updated_at: new Date().toISOString().replace('T', ' ').slice(0, 19),
  };

  list[index] = updated;
  saveEnquiries(list);
  return updated;
}

/**
 * Deletes an enquiry by ID
 */
export function deleteEnquiry(id: number): boolean {
  const list = getEnquiries();
  const filtered = list.filter(item => item.id !== id);
  if (filtered.length !== list.length) {
    saveEnquiries(filtered);
    return true;
  }
  return false;
}

/**
 * Resets storage back to initialEnquiries.json (233 records)
 */
export function resetEnquiriesToOriginal(): Enquiry[] {
  const initItems: Enquiry[] = (initialEnquiries as any[]).map(normalizeEnquiry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initItems));
  return initItems;
}

/**
 * Exports enquiries list to CSV file download
 */
export function exportEnquiriesToCSV(items: Enquiry[]): void {
  if (items.length === 0) {
    alert("No enquiries to export");
    return;
  }

  const headers = ["ID", "Created At", "Name", "Email", "Country Code", "Mobile", "Company Name", "Service Type", "Status", "Remarks"];
  
  const escapeCsv = (str: any) => {
    if (str === null || str === undefined) return '""';
    const val = String(str).replace(/"/g, '""');
    return `"${val}"`;
  };

  const rows = items.map(item => [
    item.id,
    escapeCsv(item.created_at),
    escapeCsv(item.name),
    escapeCsv(item.email),
    escapeCsv(item.country_code),
    escapeCsv(item.mobile),
    escapeCsv(item.company_name),
    escapeCsv(item.service_type),
    escapeCsv(item.status || "New"),
    escapeCsv(item.remarks),
  ].join(","));

  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cell24x7-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
