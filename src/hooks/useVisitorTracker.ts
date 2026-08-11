import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, requestGPSLocation } from "@/lib/visitorTracking";

export function useVisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    // Record page view whenever path changes
    const path = location.pathname + location.search;
    const title = document.title || "Cell24x7 Launchpad";

    trackPageView(path, title);
    requestGPSLocation();
  }, [location]);
}
export default useVisitorTracker;
