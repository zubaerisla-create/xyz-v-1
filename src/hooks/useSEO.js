/**
 * useSEO — Dynamically sets document title, meta tags, and canonical link
 * for each page in the SPA so every route is individually indexable by Google.
 *
 * @param {Object} options
 * @param {string} options.title         - Full page title shown in browser tab + Google SERP
 * @param {string} options.description   - 150-160 char description for Google snippet
 * @param {string} options.keywords      - Comma-separated keywords
 * @param {string} options.canonical     - Canonical URL for this page
 * @param {string} [options.ogImage]     - Open Graph image URL
 * @param {string} [options.ogType]      - Open Graph type (default: 'website')
 */
import { useEffect } from "react";

const SITE_URL = "https://abdullahzubaer.vercel.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/myimage.png`;

function setMeta(name, content, isProperty = false) {
  if (!content) return;
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────
    if (title) document.title = title;

    // ── Core meta ──────────────────────────────────────────
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("author", "Abdullah Al Zubaer");

    // ── Open Graph ─────────────────────────────────────────
    setMeta("og:type",        ogType,       true);
    setMeta("og:title",       title,        true);
    setMeta("og:description", description,  true);
    setMeta("og:url",         canonical || `${SITE_URL}/`, true);
    setMeta("og:image",       ogImage,      true);
    setMeta("og:site_name",   "Abdullah Al Zubaer – Full Stack Developer & CEO", true);
    setMeta("og:locale",      "en_US",      true);

    // ── Twitter Card ───────────────────────────────────────
    setMeta("twitter:card",        "summary_large_image");
    setMeta("twitter:title",       title);
    setMeta("twitter:description", description);
    setMeta("twitter:image",       ogImage);
    setMeta("twitter:creator",     "@abdullahzubaer");

    // ── Canonical ──────────────────────────────────────────
    if (canonical) setCanonical(canonical);
  }, [title, description, keywords, canonical, ogImage, ogType]);
}
