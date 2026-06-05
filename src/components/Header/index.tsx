import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { MdHandyman } from "react-icons/md";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      p={4}
      position="sticky"
      top={0}
      zIndex={1000}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex alignItems="center" gap={4} fontWeight="bold">
        <Icon size="2xl" color="brand.primary">
          <MdHandyman />
        </Icon>
        <Box>
          <Heading
            as="h3"
            fontSize="xl"
            lineHeight="short"
            fontWeight="bold"
          >
            ManutenCasa
          </Heading>
          <Heading as="h5" fontSize="xs" lineHeight="short" >
            di Francesco Berardi
          </Heading>
        </Box>
      </Flex>
      <MobileMenu />
    </Flex>
  );
}

export default Header;
