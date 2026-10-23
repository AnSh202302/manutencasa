import { Flex, SimpleGrid } from "@chakra-ui/react";
import dataFeatures from "../data/features";
import CustomCard from "./Cards/CustomCard";
import Section from "./Section";

function FeaturesSection() {
  return (
    <Section

      wrap="wrap"
      bgImage={{ lg: "url('/features-bg.jpg')" }}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      bgColor="brand.grey"
      headingPart1="I miei"
      headingPart2="Punti di forza"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={4}

      >
        {dataFeatures.map((feature) => (
          <CustomCard key={feature.title} data={feature} />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default FeaturesSection;
