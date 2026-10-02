import { Box, Flex, Heading, Icon, HStack, Text } from "@chakra-ui/react";
import { MdHandyman } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import dataNavigation from "../../data/navigation";
import CustomLink from "../CustomLink/HeaderLink";

function Header() {
  return (
    <Box as="header" role="banner" position="sticky" top={0} zIndex={1000}>
      <Flex
        mx="auto"
        w="100%"
        h={{ base: "64px", md: "80px" }}
        px={{ base: 6, md: 12, lg: 20 }}
        align="center"
        justify="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="brand.white"
        boxShadow="sm"
      >
        <CustomLink href="/manutencasa/" _hover={{ textDecoration: "none" }}>
          <Flex align="center" gap={3}>
            <Icon as={MdHandyman} boxSize={8} color="brand.primary" />

            <Box>
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

        <HStack
          as="nav"
          aria-label="Navigazione principale"
          gap={8}
          display={{ base: "none", md: "flex" }}
        >
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

        <Box display={{ base: "block", md: "none" }}>
          <MobileMenu />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
