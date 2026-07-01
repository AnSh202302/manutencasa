import { Flex } from "@chakra-ui/react";
import dataFeatures from "../data/features";
import CustomCard from "./Cards/CustomCard";
import Section from "./Section";

function FeaturesSection() {
  return (
    <Section
      wrap="wrap"
      bgImage={{ lg: "url('/manutencasa/features-bg.jpg')" }}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      bgColor="brand.grey"
      headingPart1="I miei"
      headingPart2="Punti di forza"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
        gap={4}
      >
        {dataFeatures.map((feature) => (
          <CustomCard key={feature.title} data={feature} />
        ))}
      </Flex>
    </Section>
  );
}

export default FeaturesSection;
