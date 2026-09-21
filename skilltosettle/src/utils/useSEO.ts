import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes("SkilltoSettle")
      ? title
      : `${title} | SkilltoSettle`;
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // 2. Update Description
    if (description) {
      setMetaTag('meta[name="description"]', "name", "description", description);
      setMetaTag('meta[property="og:description"]', "property", "og:description", description);
      setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    // 3. Update OG / Twitter Titles
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);

    // 4. Update OG Image
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
      setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }

    // 5. Update Canonical Link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
      setMetaTag('meta[property="og:url"]', "property", "og:url", canonical);
    }
  }, [title, description, canonical, ogImage]);
}
