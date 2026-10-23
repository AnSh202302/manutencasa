import { Box, } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PrivacyHeaderContent from "./PrivacyHeaderContent";
import HomeHeaderContent from "./HomeHeaderContent";


function Header() {
  const { pathname } = useLocation();
  const isPrivacy = pathname.replace(/\/+$/, "") === "/privacy-policy";

  return (
    <Box
      as="header"
      role="banner"
      position="sticky"
      alignContent="center"
      top={0}
      zIndex={1000}
      mx="auto"
      px={{ base: 4, md: 8, lg: 28 }}
      h={{ base: 16, md: 20 }}
      bg="brand.white"
      boxShadow="lg"
    >
      {isPrivacy ? <PrivacyHeaderContent /> : <HomeHeaderContent />}
    </Box>
  );
}

export default Header;
