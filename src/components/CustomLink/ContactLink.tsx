import { Link, type LinkProps } from "@chakra-ui/react";

function ContactLink(props: LinkProps) {
  return (
    <Link
      w="full"
      maxW={{ md: "200px" }}
      _hover={{ textDecoration: "none" }}
      {...props}
    ></Link>
  );
}

export default ContactLink;
