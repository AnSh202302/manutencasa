const galleryImages = [
  {
    before: "/manutencasa/gallery-mansarda-prima.svg",
    after: "/manutencasa/gallery-mansarda-dopo.svg",
    beforeAlt: "Mansarda prima della ristrutturazione",
    afterAlt: "Mansarda dopo la ristrutturazione",
  },
  {
    before: "/manutencasa/gallery-soggiorno-prima.svg",
    after: "/manutencasa/gallery-soggiorno-dopo.svg",
    beforeAlt: "Soggiorno prima della ristrutturazione",
    afterAlt: "Soggiorno dopo la ristrutturazione",
  },
];

export type GalleryImage = (typeof galleryImages)[number];

export default galleryImages;
