import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Keep the original homepage metadata when navigating back from the policy.
const homeMetadata: Record<string, string> = {
  "description": "ManutenCasa di Francesco Berardi: manutenzione casa a Bologna e provincia. Tinteggiatura, montaggio, riparazioni edili e piccoli interventi idraulici ed elettrici.",
  "og:title": "ManutenCasa | Manutenzione e riparazioni casa a Bologna e provincia",
  "og:description": "ManutenCasa di Francesco Berardi: manutenzione casa a Bologna e provincia. Tinteggiatura, montaggio, riparazioni edili e piccoli interventi idraulici ed elettrici.",
  "og:type": "website",
  "og:url": "https://manutencasa.it/",
  "og:locale": "it_IT",
  "og:site_name": "ManutenCasa",
  "og:image": "https://manutencasa.it/social-preview.jpg",
  "og:image:secure_url": "https://manutencasa.it/social-preview.jpg",
  "og:image:type": "image/jpeg",
  "og:image:width": "1200",
  "og:image:height": "630",
  "og:image:alt": "ManutenCasa - Manutenzione e riparazioni casa a Bologna",
  "twitter:card": "summary_large_image",
  "twitter:title": "ManutenCasa | Manutenzione e riparazioni casa a Bologna e provincia",
  "twitter:description": "ManutenCasa di Francesco Berardi: manutenzione casa a Bologna e provincia. Tinteggiatura, montaggio, riparazioni edili e piccoli interventi idraulici ed elettrici.",
  "twitter:image": "https://manutencasa.it/social-preview.jpg",
  "twitter:image:alt": "ManutenCasa - Manutenzione e riparazioni casa a Bologna"
};
const homeTitle = "ManutenCasa | Manutenzione e riparazioni casa a Bologna e provincia";

export default function RouteMetadata() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useLayoutEffect(() => {
    const privacy = pathname.replace(/\/+$/, "") === "/privacy-policy";
    const title = privacy ? "Informativa sulla Privacy | ManutenCasa" : homeTitle;
    const description = privacy
      ? "Informazioni sul trattamento dei dati personali per richieste di contatto, email, WhatsApp e navigazione sul sito ManutenCasa."
      : homeMetadata.description;
    const canonical = privacy ? "https://manutencasa.it/privacy-policy" : "https://manutencasa.it/";
    document.title = title;
    const metadata = { ...homeMetadata, description, "og:title": title,
      "og:description": description, "og:url": canonical,
      "twitter:title": title, "twitter:description": description };
    for (const [key, content] of Object.entries(metadata)) {
      const attribute = key.startsWith("og:") ? "property" : "name";
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.append(meta);
      }
      meta.content = content;
    }
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
    // Move keyboard and screen-reader navigation to the newly rendered page.
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const heading = document.querySelector<HTMLElement>("main h1");
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
