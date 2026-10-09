import { Flex, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";
import CustomButton from "./CustomButton";
import ContactLink from "./CustomLink/ContactLink";

function Footer() {
  return (
    <Section
      as="footer"
      id="contact"

      directionItems="left"
      bgImage="url('/contact-bg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      headingPart1="Hai un lavoro da fare?"
      headingPart2="Raccontami di cosa hai bisogno"
      description={
        <Flex gap={{ base: 6, md: 10 }} flexWrap="wrap" w="full">
          <VStack gap={4} color="brand.white" zIndex={1}>
            <Text fontSize={{ base: "md", md: "lg" }} alignSelf="baseline">
              Descrivimi il lavoro o il problema che hai in casa. Puoi anche inviare una foto: valuteremo insieme se posso aiutarti e come procedere.
            </Text>
          </VStack>

          <Flex gap={2} flexWrap="wrap" w="full" maxW="sm">
            <CustomButton asChild >
              <ContactLink cta="chiama" />
            </CustomButton>
            <CustomButton
              asChild
              variant1
            >
              <ContactLink cta="whatsapp" />
            </CustomButton>
          </Flex>

          <Flex
            as="div"
            w="full"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="space-between"
            gap={{ base: 3, md: 4 }}
            borderTop="1px solid"
            borderColor="whiteAlpha.400"
            pt={5}
            color="whiteAlpha.800"
            fontSize="sm"
          >
            <Text color="brand.white" fontSize="xs">
              ManutenCasa di Francesco Berardi  | Manutenzione e piccoli lavori per la casa | P.IVA 04370511208 | Bologna, Italia | Tel. +39 328 948 7163
            </Text>
            <Text fontSize="xs">© 2026 ManutenCasa</Text>
          </Flex>
        </Flex>
      }
      colorHeading2="brand.white"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bgColor: "brand.black",
        opacity: 0.94,
        zIndex: 0,
      }}
    />
  );
}

export default Footer;
