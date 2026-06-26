import { Flex, Text, Span } from "@chakra-ui/react";
import Section from "./Section";
import dataServices from "../data/services";
import CustomCard from "./CustomCard";
function Services() {
  return (
    <Section
      id="services"
      wrap="wrap"
      headingPart1="Offro"
      headingPart2="Servizi di ristrutturazione"
      description={
        <Text>
          Posso liberarti facilmente dalle incombenze domestiche. Ho già aiutato
          tantissime di cittadini del Bologna a migliorare le proprie case e a
          mantenere le proprie proprietà in perfette condizioni.{" "}
          <Span color="brand.yellow" fontWeight="bold">
            Cosa posso fare per te?
          </Span>
        </Text>
      }
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
        gap={4}
      >
        {dataServices.map((service) => (
          <CustomCard data={service} key={service.title} />
        ))}
      </Flex>
    </Section>
  );
}

export default Services;
