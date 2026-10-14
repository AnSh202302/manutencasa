import { Flex, Heading, Separator, Text, Image, Box } from "@chakra-ui/react";
import CustomButton from "./Buttons/CustomButton";
import ContactLink from "./CustomLink/ContactLink";

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
      bgImage="url('/hero-bg.jpg')"
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
        alignSelf="center"
        mt={{ base: 8, md: 12, lg: 0 }}
        zIndex={1}
      >
        <Heading
          as="h1"
          fontSize="clamp(1.875rem, 6vw, 5rem)"
          textWrap="balance"
          fontWeight="900"
          lineHeight="1.1"
          color="brand.white"
        >
          Manutenzione e riparazioni casa a Bologna e{"\u00a0"}provincia
        </Heading>

        <Separator my={6} borderColor="brand.white" maxW="120px" size="lg" />

        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          Piccoli lavori, riparazioni e manutenzione direttamente a domicilio.
        </Text>

        <Flex gap={4} wrap="wrap">
          <CustomButton asChild>
            <ContactLink cta="chiama" />
          </CustomButton>

          <CustomButton asChild colorVariant="secondary">
            <ContactLink cta="whatsapp" />
          </CustomButton>
        </Flex>
      </Box>

      <Flex w="full" alignSelf="flex-end" justifyContent="center" zIndex={1}>
        <Image src="/Francesco_hero.webp" alt="Francesco Berardi" htmlWidth={896} htmlHeight={1200} />
      </Flex>
    </Flex>
  );
}

export default Hero;
