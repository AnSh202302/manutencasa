const galleryImages = [
  {
    before: "/gallery-bagno-dopo-960.webp",
    beforeSrcSet: "/gallery-bagno-dopo-480.webp 480w, /gallery-bagno-dopo-960.webp 960w",
    after: "/gallery-bagno-prima-960.webp",
    afterSrcSet: "/gallery-bagno-prima-480.webp 480w, /gallery-bagno-prima-960.webp 960w",
    beforeAlt: "Bagno prima della ristrutturazione",
    afterAlt: "Bagno dopo la ristrutturazione",
  },
  {
    before: "/gallery-muro-dopo-960.webp",
    beforeSrcSet: "/gallery-muro-dopo-480.webp 480w, /gallery-muro-dopo-960.webp 960w",
    after: "/gallery-muro-prima-960.webp",
    afterSrcSet: "/gallery-muro-prima-480.webp 480w, /gallery-muro-prima-960.webp 960w",
    beforeAlt: "Muro prima della ristrutturazione",
    afterAlt: "Muro dopo la ristrutturazione",
  },
  {
    before: "/gallery-terrazza-dopo-960.webp",
    beforeSrcSet: "/gallery-terrazza-dopo-480.webp 480w, /gallery-terrazza-dopo-960.webp 960w",
    after: "/gallery-terrazza-prima-960.webp",
    afterSrcSet: "/gallery-terrazza-prima-480.webp 480w, /gallery-terrazza-prima-960.webp 960w",
    beforeAlt: "Terrazza prima della ristrutturazione",
    afterAlt: "Terrazza dopo la ristrutturazione",
  },
];

export type GalleryImage = (typeof galleryImages)[number];

export default galleryImages;
