import { Flex, Heading, Separator, Text, Image, Box } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

function Hero() {
  return (
    <Flex
      as="section"
      position="relative"
      minH="calc(100vh - 80px)"
      px={{ base: 6, md: 12, lg: 20 }}
      direction={{ base: "column", lg: "row" }}
      gap={10}
      overflow="hidden"
      bgImage="url('/manutencasa/hero-bg.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bgColor: "brand.yellow",
        opacity: 0.88,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: "30rem", md: "50rem" }}
        alignSelf="center"
        mt={{ base: 8, md: 12, lg: 0 }}
        zIndex={1}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "7xl", lg: "7xl" }}
          fontWeight="900"
          lineHeight="1.1"
          color="brand.white"
        >
          Manutenzione, senza stress
        </Heading>

        <Separator my={6} borderColor="brand.white" maxW="120px" size="lg" />

        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          Trovi l&apos;artigiano giusto in pochi click. Interventi rapidi,
          affidabili e disponibili anche in giornata.
        </Text>

        <Flex gap={4} wrap="wrap">
          <CustomButton asChild>
            <a
              href="https://wa.me/393289487163?text=Ciao%2C%20vorrei%20richiedere%20un%20preventivo."
              target="_blank"
              rel="noopener noreferrer"
            >
              Richiedi un preventivo
            </a>
          </CustomButton>
          <CustomButton asChild variant1>
            <a href="#services">Scopri di più</a>
          </CustomButton>
        </Flex>
      </Box>

      <Flex w="full" alignSelf="flex-end" justifyContent="center" zIndex={1}>
        <Image src="/manutencasa/francesco.png" alt="Francesco" />
      </Flex>
    </Flex>
  );
}

export default Hero;
