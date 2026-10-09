import { useLayoutEffect } from "react";

export default function useFloatingWhatsAppVisibility() {
  // Measure before paint to avoid briefly exposing an overlapping button on restored scroll.
  useLayoutEffect(() => {
    const floating = document.querySelector<HTMLAnchorElement>(
      'a[aria-label="Contattaci su WhatsApp"]',
    );
    if (!floating) return;

    const contactCTAs = Array.from(document.querySelectorAll<HTMLAnchorElement>(
      'a.chakra-button[href^="tel:"], a.chakra-button[href^="https://wa.me/"]',
    ));
    let observer: IntersectionObserver | undefined;

    const setCollision = (colliding: boolean) => {
      // Visibility preserves the fixed box, so hiding it cannot trigger a layout shift.
      floating.style.visibility = colliding ? "hidden" : "visible";
      floating.inert = colliding;
    };

    const observeCollisions = () => {
      observer?.disconnect();
      const box = floating.getBoundingClientRect();
      if (!box.width || !box.height) {
        setCollision(false);
        return;
      }

      const overlapping = new Set<Element>();
      for (const cta of contactCTAs) {
        const rect = cta.getBoundingClientRect();
        if (rect.width && rect.height && rect.left < box.right &&
            rect.right > box.left && rect.top < box.bottom && rect.bottom > box.top) {
          overlapping.add(cta);
        }
      }
      setCollision(overlapping.size > 0);

      // Restrict the observer's viewport to the floating button's actual footprint.
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRect.width > 0 &&
              entry.intersectionRect.height > 0) {
            overlapping.add(entry.target);
          } else {
            overlapping.delete(entry.target);
          }
        }
        setCollision(overlapping.size > 0);
      }, {
        rootMargin: `${-box.top}px ${box.right - window.innerWidth}px ${box.bottom - window.innerHeight}px ${-box.left}px`,
        threshold: 0,
      });
      contactCTAs.forEach((cta) => observer?.observe(cta));
    };

    observeCollisions();
    const resizeObserver = new ResizeObserver(observeCollisions);
    resizeObserver.observe(floating);
    contactCTAs.forEach((cta) => resizeObserver.observe(cta));
    window.addEventListener("resize", observeCollisions);
    return () => {
      observer?.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", observeCollisions);
    };
  }, []);
}
