import { Link, type LinkProps } from "@chakra-ui/react";

function CustomLink(props: LinkProps) {
  return (
    <Link
      fontSize={{ base: "2xl", md: "lg" }}
      fontWeight="bold"
      _hover={{ textDecoration: "none", color: "brand.primary" }}
      _focus={{ outline: "none", color: "brand.primary" }}
      {...props}
    />
  );
}

export default CustomLink;
