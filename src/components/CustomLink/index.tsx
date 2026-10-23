import { Link, type LinkProps } from "@chakra-ui/react";

function CustomLink(props: LinkProps) {
  return (
    <Link
      fontSize={{ base: "2xl", md: "md" }}
      fontWeight="bold"
      transition="transform 0.3s ease,
              text-decoration-color 0.3s ease"
      _hover={{ textDecoration: "underline", color: "brand.primary", transform: "translateY(-3px) scale(1.05)" }}
      {...props}
    />
  );
}

export default CustomLink;
