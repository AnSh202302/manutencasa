import { Link, type LinkProps } from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";


export const WHATSAPP_URL = "https://wa.me/393289487163";

interface ContactLinkProps extends LinkProps {
  cta?: "chiama" | "whatsapp";
  children?: React.ReactNode
}

function ContactLink({ cta, children, ...props }: ContactLinkProps) {
  const icon = cta === 'chiama' ? <LuPhone /> : <FaWhatsapp />;
  const text = children ?? (cta === 'chiama' ? "Chiama" : "WhatsApp")
  const href = cta === 'chiama' ? "tel:+393289487163" : cta === 'whatsapp' ? WHATSAPP_URL : undefined

  return (
    <Link
      w="full"
      maxW={{ md: "200px" }}
      _hover={{ textDecoration: "none" }}
      target={cta === "whatsapp" ? "_blank" : undefined}
      rel={cta === "whatsapp" ? "noopener noreferrer" : undefined}
      href={href}
      {...props}
    >
      {icon}
      {text}
    </Link>
  );
}

export default ContactLink;
