import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Section from "./Section";
import steps from "../data/steps";



function HowItWorksSectionSection() {
  return (
    <Section
      headingPart1="Come funziona"
      headingPart2="Semplice, dal primo contatto all'intervento"
      direction="column"
      bgColor="brand.grey"
      wrap="wrap"
    >
      <Flex
        as="ol"
        listStyle="none"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 0 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          bg: "gray.300",
          left: { base: "35px", md: "12.5%" },
          right: { base: "auto", md: "12.5%" },
          top: { base: "24px", md: "24px" },
          bottom: { base: "24px", md: "auto" },
          width: { base: "1px", md: "auto" },
          height: { base: "auto", md: "1px" },
          zIndex: 0,
        }}
      >
        {steps.map(({ number, title, description }, index) => (
          <Flex
            as="li"
            key={number}
            flex="1"
            minW={0}
            direction={{ base: "row", md: "column" }}
            alignItems={{ base: "flex-start", md: "center" }}
            gap={{ base: 4, md: 3 }}
            position="relative"
            zIndex={1}
            _after={
              index === steps.length - 1
                ? {
                  content: '""',
                  display: { base: "block", md: "none" },
                  position: "absolute",
                  left: "35px",
                  top: "48px",
                  bottom: 0,
                  width: "1px",
                  bg: "brand.grey",
                  zIndex: 1,
                }
                : undefined
            }
          >
            <Text
              flexShrink={0}
              w={{ base: "72px", md: "auto" }}
              textAlign="center"
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight="1"
              fontWeight="900"
              color="brand.primary"
              bg="brand.grey"
              px={2}
            >
              {number}
            </Text>
            <Box textAlign={{ base: "left", md: "center" }} maxW="xs">
              <Heading as="h3" size="md" fontWeight="bold">
                {title}
              </Heading>
              <Text mt={2}>
                {number === "01" ? (
                  <>
                    {description.split("WhatsApp")[0]}
                    <Link
                      href="https://wa.me/393289487163"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.primary"
                      textDecoration="none"
                      _hover={{ color: "brand.primary" }}
                      _focusVisible={{
                        outline: "2px solid",
                        outlineColor: "brand.primary",
                        outlineOffset: "2px",
                        borderRadius: "2px",
                      }}
                    >
                      WhatsApp
                    </Link>
                    {description.split("WhatsApp")[1]}
                  </>
                ) : (
                  description
                )}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
}

export default HowItWorksSectionSection;
