import { Flex, Text, Box } from "@chakra-ui/react";
import Section from "./Section";
import dataServices from "../data/services";
import CustomCard from "./Cards/CustomCard";
function Services() {
  return (
    <Section
      id="services"
      wrap="wrap"
      headingPart1="I miei "
      headingPart2="Servizi"
      description={
        <Box>
          <Text mb={4}>
            Hai poco tempo per occuparti dei lavori di casa?
          </Text>

          <Text mb={4}>
            Mi occupo di piccoli lavori di manutenzione e riparazione per aiutarti a
            tenere la tua casa in ordine e a risolvere quei problemi che spesso rimangono
            in sospeso.
          </Text>

          <Text color="brand.yellow" fontWeight="bold">
            Cosa posso fare per te?
          </Text>
        </Box>
      }
    >
      <Flex
        maxW="72rem"
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
