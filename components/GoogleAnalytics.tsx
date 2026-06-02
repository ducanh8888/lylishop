"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/site";

const GA_MEASUREMENT_ID = SITE.google.analyticsMeasurementId;
const ANALYTICS_DELAY_MS = 10000;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || window.gtag) {
      return;
    }

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const loadAnalytics = () => {
      if (window.gtag) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.onload = () => {
        window.gtag?.("js", new Date());
        window.gtag?.("config", GA_MEASUREMENT_ID);
      };
      document.head.appendChild(script);
    };

    const scheduleIdleLoad = () => {
      if (window.requestIdleCallback) {
        idleId = window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
        return;
      }

      timeoutId = window.setTimeout(loadAnalytics, 1);
    };

    const scheduleAfterInitialRender = () => {
      timeoutId = window.setTimeout(scheduleIdleLoad, ANALYTICS_DELAY_MS);
    };

    if (document.readyState === "complete") {
      scheduleAfterInitialRender();
    } else {
      window.addEventListener("load", scheduleAfterInitialRender, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleAfterInitialRender);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (idleId && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return null;
}
