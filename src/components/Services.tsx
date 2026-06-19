import { Box, Flex, Text, Separator, Card, Icon, Span } from "@chakra-ui/react";
import Section from "./Section";
import dataServices from "../data/services";
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
