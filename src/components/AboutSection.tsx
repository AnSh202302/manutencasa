import Section from "./Section";
import { Text, Image, Flex } from "@chakra-ui/react";

function About() {
  return (
    <Section
      id="about"
      alignItems="flex-start"
      pb={0}
      bgImage=" linear-gradient(
0deg,rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.98) 80% ), url('/manutencasa/about-bg.jpg')"
      directionItems="left"
      headingPart1="Penso"
      headingPart2="A tutto io!"
      description={
        <>
          <Text>
            Se hai bisogno di riparazioni domestiche o semplicemente di sbrigare
            una serie di piccoli lavori in casa, e fai fatica a trovare un
            tuttofare qualificato e professionale, contatta ManutenCasa: il tuo
            servizio di fiducia in zona. ManutenCasa è un servizio di
            manutenzione domestica che offre Sono qualificato è a disposizione
            per qualsiasi intervento domestico.
          </Text>
          <Text mt={6}>
            Posso occuparci di lavori di ogni tipo e complessità, tra cui
            impianti idraulici ed elettrici, tinteggiatura e molto altro ancora.
            Mettiti in contatto e i verro a trovarti in giornata.
          </Text>
        </>
      }
    >
      <Flex alignSelf="flex-end" w="full" justifyContent="center">
        <Image src="/manutencasa/francesco.png" alt="About ManutenCasa" />
      </Flex>
    </Section>
  );
}

export default About;
