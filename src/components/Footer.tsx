import { Flex, Text, VStack } from "@chakra-ui/react";
import { LuPhone, LuMessageCircle } from "react-icons/lu";
import Section from "./Section";
import CustomButton from "./CustomButton";
import ContactLink from "./CustomLink/ContactLink";

function Footer() {
  return (
    <Section
      as="footer"
      id="contact"

      directionItems="left"
      bgImage="url('/manutencasa/contact-bg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      headingPart1="Hai un lavoro da fare?"
      headingPart2="Raccontami di cosa hai bisogno"
      description={
        <Flex gap={{ base: 6, md: 10 }} flexWrap="wrap" w="full">
          <VStack gap={4} color="brand.white" zIndex={1}>
            <Text fontSize={{ base: "md", md: "lg" }} alignSelf="baseline">
              Descrivimi il lavoro o il problema che hai in casa. Puoi anche
              mandarmi una foto: valuteremo insieme se posso occuparmene e come
              procedere.
            </Text>
          </VStack>

          <Flex gap={2} flexWrap="nowrap" w="full" maxW="sm">
                  <CustomButton
              asChild
              flex="1"
              minW={0}
              h="48px"
              px={{ base: 2, md: 4 }}
              fontSize={{ base: "sm", md: "md" }}
              whiteSpace="nowrap"
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "brand.yellow",
                outlineOffset: "2px",
              }}
            >
              <ContactLink href="tel:+393289487163">
                <LuPhone />
                Chiama
              </ContactLink>
            </CustomButton>
            <CustomButton
              asChild
                            variant1

              flex="1"
              minW={0}
              h="48px"
              px={{ base: 2, md: 4 }}
              fontSize={{ base: "sm", md: "md" }}
              whiteSpace="nowrap"
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "brand.yellow",
                outlineOffset: "2px",
              }}
            >
              <ContactLink
                href="https://wa.me/393289487163"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuMessageCircle />
                WhatsApp
              </ContactLink>
            </CustomButton>

      
          </Flex>

          <Flex
            as="footer"
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
            <VStack align="flex-start" gap={1}>
              <Text color="brand.white" fontWeight="semibold">
                ManutenCasa di Francesco Berardi
              </Text>
              <Text fontSize="xs">
                Manutenzione e piccoli lavori per la casa a Bologna
              </Text>
            </VStack>

         

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
