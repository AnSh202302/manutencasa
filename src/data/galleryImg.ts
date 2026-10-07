const galleryImages = [
  {
    before: "/gallery-mansarda-prima.svg",
    after: "/gallery-mansarda-dopo.svg",
    beforeAlt: "Mansarda prima della ristrutturazione",
    afterAlt: "Mansarda dopo la ristrutturazione",
  },
  {
    before: "/gallery-soggiorno-prima.svg",
    after: "/gallery-soggiorno-dopo.svg",
    beforeAlt: "Soggiorno prima della ristrutturazione",
    afterAlt: "Soggiorno dopo la ristrutturazione",
  },
];

export type GalleryImage = (typeof galleryImages)[number];

export default galleryImages;
