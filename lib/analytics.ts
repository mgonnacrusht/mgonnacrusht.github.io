type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (name: string, data?: EventData) => void };
  }
}

/**
 * Sends a custom Umami event. The Umami script is only loaded in production
 * builds, so in development events are logged to the console instead.
 */
export function trackEvent(name: string, data?: EventData) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", name, data ?? {});
    return;
  }
  window.umami?.track(name, data);
}
