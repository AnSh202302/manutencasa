import {
  Box,
  Flex,
  Heading,
  Text,
  Separator,
  Span,
  Card,
  Icon,
} from "@chakra-ui/react";
import Section from "./Section";
import dataServices from "../data/services";
function Services() {
  return (
    <Section id="services">
      <Flex direction="column" alignItems="center" gap="6">
        <Heading as="h3" size="xl" color="brand.primary">
          Offro
        </Heading>
        <Heading
          as="h2"
          size={{ base: "4xl", md: "5xl" }}
          letterSpacing="normal"
          fontWeight="900"
          textAlign="center"
        >
          Servizi di ristrutturazione
        </Heading>
        <Separator borderColor="brand.yellow" w="10%" size="lg" />
        <Text textAlign="center">
          Posso liberarti facilmente dalle incombenze domestiche. Ho già aiutato
          tantissime di cittadini del Bolona a migliorare le proprie case e a
          mantenere le proprie proprietà in perfette condizioni.{" "}
          <Span color="brand.yellow" fontWeight="bold">
            Cosa posso fare per te?
          </Span>
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
        gap={4}
        mt={8}
      >
        {dataServices.map((service) => (
          <Card.Root
            key={service.title}
            w={{
              base: "100%",
              md: "calc(50% - 12px)",
              lg: "calc(33.333% - 16px)",
            }}
            maxW={{ md: "320px" }}
            border="none"
            borderTop="4px solid"
            borderColor="brand.primary"
            borderRadius="md"
            boxShadow="md"
          >
            <Card.Body alignItems="center" gap={4} p={4}>
              {service.icon && (
                <Box
                  w="70px"
                  h="70px"
                  borderRadius="full"
                  bg={service.color || "brand.primary"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={service.icon} boxSize={8} fill="brand.white" />
                </Box>
              )}

              <Card.Title letterSpacing="wide">{service.title}</Card.Title>
              <Separator
                borderColor={service.color || "brand.primary"}
                w="20%"
                size="lg"
              />
              <Card.Description textAlign="center">
                {service.description}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </Section>
  );
}

export default Services;
