import { Link as RouterLink } from "react-router-dom";
import { EmailContactButton } from "./EmailContact/EmailContactButton";
import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";
import CustomButton from "./Buttons/CustomButton";
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

          <Flex gap={2} flexWrap="wrap" w="full">
            <CustomButton asChild >
              <ContactLink cta="chiama" />
            </CustomButton>
            <CustomButton
              asChild
              colorVariant="secondary"
            >
              <ContactLink cta="whatsapp" />
            </CustomButton>
            <EmailContactButton w="full" maxW={{ md: "200px" }} />
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
            color="brand.white"
            fontSize="xs"
          >
            <Text>
              ManutenCasa di Francesco Berardi  | Manutenzione e piccoli lavori per la casa | P.IVA 04370511208 | Bologna, Italia | Tel. +39 328 948 7163
            </Text>
            <Text>© 2026 ManutenCasa | <Link asChild color="brand.white" textDecoration="underline"><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></Link></Text>
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
