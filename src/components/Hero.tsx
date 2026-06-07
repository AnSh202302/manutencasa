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
        flex="1"
        alignSelf="center"
        mt={{ base: 8, md: 12, lg: 0 }}
        zIndex={1}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
          fontWeight="900"
          lineHeight="1.1"
          color="brand.white"
        >
          Manutenzione casa,
          <br />
          senza stress
        </Heading>

        <Separator my={6} borderColor="brand.white" maxW="120px" size="lg" />

        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          Trovi l&apos;artigiano giusto in pochi click. Interventi rapidi,
          affidabili e disponibili anche in giornata.
        </Text>

        <Flex gap={3} wrap="wrap">
          <CustomButton>Richiedi un preventivo</CustomButton>

          <CustomButton
            bg="brand.white"
            color="brand.black"
            _hover={{
              bg: "brand.primary",
              color: "brand.white",
            }}
          >
            Scopri di più
          </CustomButton>
        </Flex>
      </Box>

      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={1}
      >
        <Image
          src="/manutencasa/francesco.png"
          alt="Francesco"
          alignSelf="flex-end"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
}

export default Hero;
