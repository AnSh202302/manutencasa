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
           Hai un piccolo lavoro da fare in casa e non sai a chi rivolgerti?
          </Text>
          <Text mt={6}>
            Con ManutenCasa hai un unico punto di riferimento per le riparazioni e i lavori di manutenzione di tutti i giorni. Mi occupo di piccoli interventi idraulici ed elettrici, tinteggiatura, montaggio, riparazioni e tanti altri lavori per la casa.
          </Text>
          <Text mt={6}>
            Lavoro con attenzione e precisione, cercando sempre di trovare una soluzione pratica e adatta alle tue esigenze.
          </Text>
          <Text mt={6}>
            Se hai un lavoro da fare, contattami: raccontami di cosa hai bisogno e valutiamo insieme come risolverlo.
          </Text>
        </>
      }
    >
      <Flex alignSelf="flex-end" w="full" justifyContent="center">
        <Image src="/manutencasa/Handyman.png" alt="About ManutenCasa" />
      </Flex>
    </Section>
  );
}

export default About;
