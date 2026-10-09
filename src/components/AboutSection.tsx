import Section from "./Section";
import { Text, Image, Flex } from "@chakra-ui/react";

function AboutSection() {
  return (
    <Section
      id="about"
      alignItems="flex-start"
      pb={0}
      bgImage=" linear-gradient(
0deg,rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.98) 80% ), url('/about-bg.jpg')"
      directionItems="left"
      headingPart1="Chi sono"
      headingPart2="Sono Francesco"
      description={
        <>
          <Text>
            Mi chiamo Francesco e offro un servizio di tuttofare a domicilio a Bologna per piccoli lavori di manutenzione e riparazione.
          </Text>
          <Text mt={6}>
            Aiuto chi ha bisogno di risolvere quei lavori che spesso rimangono in sospeso: una riparazione, un montaggio, un piccolo intervento elettrico o idraulico.
          </Text>
          <Text mt={6}>
            Lavoro direttamente con il cliente, cercando una soluzione pratica e adatta alle esigenze della casa.
          </Text>
        </>
      }
    >
      <Flex alignSelf="flex-end" w="full" justifyContent="center">
        <Image src="/Handyman.webp" alt="Un artigiano sorridente con cintura porta attrezzi" maxH="34rem" maxW="min(100%, calc(34rem * 896 / 1200))" aspectRatio="896 / 1200" htmlWidth={896} htmlHeight={1200} loading="lazy" decoding="async" />
      </Flex>
    </Section>
  );
}

export default AboutSection;
