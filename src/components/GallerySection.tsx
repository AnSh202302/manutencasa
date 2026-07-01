import { Flex, Text } from "@chakra-ui/react";
import Section from "./Section";
import GalleryCard from "./Cards/GalleryCard";
import galleryImages from "../data/galleryImg";

function Gallery() {
  return (
    <Section
      id="gallery"
      direction="column"
      headingPart1="Guarda"
      headingPart2="I risultati del mio lavoro:"
      description={<Text>Prima e dopo</Text>}
    >
      <Flex
        w="full"
        maxW="1700px"
        mx="auto"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 6, lg: 12 }}
      >
        {galleryImages.map((galleryImage) => (
          <GalleryCard data={galleryImage} key={galleryImage.before} />
        ))}
      </Flex>
    </Section>
  );
}

export default Gallery;
