import { Flex, Text, VStack } from "@chakra-ui/react";
import { LuMail, LuPhone, LuMessageCircle } from "react-icons/lu";
import Section from "./Section";
import CustomButton from "./CustomButton";
import ContactLink from "./CustomLink/ContactLink";

function Contact() {
  return (
    <Section
      id="contact"
      directionItems="left"
      bgImage="url('/manutencasa/contact-bg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      headingPart1="Contatta"
      headingPart2=" il tuo tuttofare a Bologna"
      description={
        <Flex gap={{ base: 6, md: 10 }} flexWrap="wrap">
          <VStack gap={4} color="brand.white" zIndex={1}>
            <Text fontSize={{ base: "md", md: "lg" }} alignSelf="baseline">
              Da questa pagina puoi richiedere informazioni o programmare un
              intervento di manutenzione a domicilio in modo semplice e diretto.
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} alignSelf="baseline">
              Puoi contattare Handyman - Tuttofare Bologna telefonicamente o
              tramite WhatsApp, descrivendo brevemente il tipo di intervento
              richiesto.
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} alignSelf="baseline">
              Per facilitare la valutazione, indica il problema riscontrato e,
              se possibile, invia una o più foto. Ogni richiesta viene gestita
              con attenzione per valutare tempi, modalità di intervento e
              fornire una risposta chiara prima di organizzare il lavoro.
            </Text>
          </VStack>

          <Flex gap={4} flexWrap={{ base: "wrap", md: "nowrap" }}>
            <CustomButton asChild bgColor="brand.green">
              <ContactLink href="https://wa.me/393289487163">
                <LuMessageCircle />
                WhatsApp
              </ContactLink>
            </CustomButton>

            <CustomButton asChild variant1>
              <ContactLink href="tel:+393289487163">
                <LuPhone />
                Chiama
              </ContactLink>
            </CustomButton>

            <CustomButton asChild variant1>
              <ContactLink href="mailto:info@tuttofarebologna.it">
                <LuMail />
                Email
              </ContactLink>
            </CustomButton>
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

export default Contact;
