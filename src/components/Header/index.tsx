import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { MdHandyman } from "react-icons/md";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="80px"
      p={4}
      position="sticky"
      top={0}
      zIndex={1000}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      bgColor="brand.white"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex alignItems="center" gap={4} fontWeight="bold">
        <Icon size="2xl" color="brand.primary">
          <MdHandyman />
        </Icon>
        <Box>
          <Heading as="h3" fontSize="xl" lineHeight="short" fontWeight="bold">
            ManutenCasa
          </Heading>
          <Heading as="h5" fontSize="xs" lineHeight="short">
            di Francesco Berardi
          </Heading>
        </Box>
      </Flex>
      <MobileMenu />
    </Flex>
  );
}

export default Header;
