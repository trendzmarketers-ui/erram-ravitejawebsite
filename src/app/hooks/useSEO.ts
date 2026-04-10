import { useEffect } from "react";

/**
 * SEO Hook — Sets page-level meta tags dynamically for each route.
 *
 * Since this is an SPA (React + React Router), the HTML <head> is static.
 * This hook updates document.title and meta description/OG/Twitter tags
 * on each route change so that:
 *   1. Browser tab shows the correct page title
 *   2. Google SPA rendering captures the correct meta tags
 *   3. Social crawlers with JS support pick up the correct OG data
 *
 * For social crawlers WITHOUT JS (WhatsApp, Telegram, etc.), use a
 * server edge function or pre-rendering service for full coverage.
 */

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

const BRAND = "Raviteja Erram";
const BASE_URL = "https://ravitejaerram.com";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (el) {
    el.href = href;
  } else {
    el = document.createElement("link");
    el.rel = "canonical";
    el.href = href;
    document.head.appendChild(el);
  }
}

export function useSEO({ title, description, canonical, ogType = "website" }: SEOConfig) {
  useEffect(() => {
    // Page title — brand name appended
    document.title = `${title} | ${BRAND}`;

    // Meta description
    setMeta("description", description);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonical || `${BASE_URL}${window.location.pathname}`, true);

    // Twitter Card
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical URL
    setCanonical(canonical || `${BASE_URL}${window.location.pathname}`);
  }, [title, description, canonical, ogType]);
}
