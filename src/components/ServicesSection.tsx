import { Flex, Text, Box, Span, SimpleGrid } from "@chakra-ui/react";
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
        <Box maxW="48rem">
          <Text mb={4}>
            Hai poco tempo per occuparti dei lavori di casa?
          </Text>

          <Text mb={4}>
            Mi occupo di piccoli lavori di manutenzione e riparazione per aiutarti a
            tenere la tua casa in ordine e a risolvere quei problemi che spesso rimangono
            in sospeso. <Span color="brand.yellow" fontWeight="bold">Cosa posso fare per te?</Span>
          </Text>


        </Box>
      }
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={4}
      >
        {dataServices.map((service) => (
          <CustomCard data={service} key={service.title} />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Services;
