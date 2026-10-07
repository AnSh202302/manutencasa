import { Box, Flex, Heading, Icon, HStack, Text } from "@chakra-ui/react";
import { MdHandyman } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import dataNavigation from "../../data/navigation";
import CustomLink from "../CustomLink/HeaderLink";
import CustomButton from "../CustomButton";
import ContactLink from "../CustomLink/ContactLink";

function Header() {
  return (
    <Box as="header" role="banner" position="sticky" top={0} zIndex={1000}>
      <Flex
        mx="auto"
        gap={2}
        w="100%"
        h={{ base: "72px", md: "80px" }}
        px={6}
        align="center"
        justify="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="brand.white"
        boxShadow="sm"
      >
        <CustomLink href="/manutencasa/" _hover={{ textDecoration: "none" }} >
          <Flex align="center" gap={3}>
            <Icon as={MdHandyman} boxSize={8} color="brand.primary" />

            <Box >
              <Heading
                as="span"
                fontSize="lg"
                lineHeight="short"
                fontWeight="bold"
              >
                ManutenCasa
              </Heading>
              <Text
                as="p"
                fontSize="xs"
                fontFamily="heading"
                fontWeight="semibold"
                lineHeight="short"
              >
                di Francesco Berardi
              </Text>
            </Box>
          </Flex>
        </CustomLink>

        <Flex align="center" gap={{ base: 2, md: 6 }} display={{ base: "none", md: "flex" }} >
          <HStack
            as="nav" aria-label="Navigazione principale" gap={{ base: 2, md: 6 }}>
            {dataNavigation.map(({ name, href }) => (
              <CustomLink
                key={name}
                href={href}
                _hover={{
                  textDecoration: "none",
                  color: "brand.primary",
                }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "brand.primary",
                  borderRadius: "4px",
                }}
              >
                {name}
              </CustomLink>
            ))}
          </HStack>
          <HStack gap={3} display={{ base: "none", md: "flex" }} >
            <CustomButton size="xs" asChild>
              <ContactLink cta="chiama" maxW={24} />
            </CustomButton>
            <CustomButton size="xs" asChild variant1 >
              <ContactLink cta="whatsapp" maxW={28} />
            </CustomButton>
          </HStack>
        </Flex>


        <Box display={{ base: "block", md: "none" }}>
          <MobileMenu />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
