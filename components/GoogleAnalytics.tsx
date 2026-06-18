import { SITE } from "@/lib/site";

const GA_MEASUREMENT_ID = SITE.google.analyticsMeasurementId;
const GOOGLE_ADS_ID = SITE.google.adsId;
const ANALYTICS_DELAY_MS = 10000;

export function GoogleAnalytics() {
  const tagIds = [GA_MEASUREMENT_ID, GOOGLE_ADS_ID].filter(Boolean);

  if (tagIds.length === 0) {
    return null;
  }

  const script = `
    (() => {
      const tagIds = ${JSON.stringify(tagIds)};
      const primaryTagId = tagIds[0];
      const delayMs = ${ANALYTICS_DELAY_MS};
      let loaded = false;
      let configured = false;

      function configureGoogleTags() {
        if (configured || !window.gtag) return;
        configured = true;
        window.gtag('js', new Date());
        tagIds.forEach(function(tagId) {
          window.gtag('config', tagId);
        });
      }

      function loadAnalytics() {
        if (window.gtag) {
          configureGoogleTags();
          return;
        }
        if (loaded) return;
        loaded = true;

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments); };

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.google' + 'tagmanager.com/gtag/js?id=' + primaryTagId;
        script.onload = configureGoogleTags;
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
