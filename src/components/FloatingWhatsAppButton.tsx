import ContactLink from "./CustomLink/ContactLink";
import useFloatingWhatsAppVisibility from "../hooks/useFloatingWhatsAppVisibility";

export default function FloatingWhatsAppButton() {
  useFloatingWhatsAppVisibility();

  return (
    <ContactLink cta="whatsapp" aria-label="Contattaci su WhatsApp" position="fixed"
      right={4}
      bottom={4}
      zIndex={1100}
      display={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="center"
      w="56px"
      h="56px"
      borderRadius="full"
      bg="brand.primary" color="white"
      fontSize="30px"
      boxShadow="md"
      _hover={{ bg: "#20bd5a", textDecoration: "none" }}
      _focusVisible={{ outline: "2px solid", outlineColor: "brand.primary", outlineOffset: "2px" }}
    > </ContactLink>
  );
}
