import { SITE } from "@/lib/site";

const GA_MEASUREMENT_ID = SITE.google.analyticsMeasurementId;
const ANALYTICS_DELAY_MS = 10000;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  const script = `
    (() => {
      const measurementId = ${JSON.stringify(GA_MEASUREMENT_ID)};
      const delayMs = ${ANALYTICS_DELAY_MS};
      let loaded = false;

      function loadAnalytics() {
        if (loaded || window.gtag) return;
        loaded = true;

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments); };

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.google' + 'tagmanager.com/gtag/js?id=' + measurementId;
        script.onload = function() {
          window.gtag('js', new Date());
          window.gtag('config', measurementId);
        };
        document.head.appendChild(script);
      }

      function scheduleIdleLoad() {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
        } else {
          window.setTimeout(loadAnalytics, 1);
        }
      }

      function scheduleAfterLoad() {
        window.setTimeout(scheduleIdleLoad, delayMs);
      }

      if (document.readyState === 'complete') {
        scheduleAfterLoad();
      } else {
        window.addEventListener('load', scheduleAfterLoad, { once: true });
      }
    })();
  `;

  return (
    <script
      id="google-analytics-delayed-loader"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
