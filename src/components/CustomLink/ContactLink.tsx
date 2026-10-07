import { Link, type LinkProps } from "@chakra-ui/react";
import { LuPhone, LuMessageCircle } from "react-icons/lu";

interface ContactLinkProps extends LinkProps {
  cta?: "chiama" | "whatsapp";
  children?: React.ReactNode
}

function ContactLink({ cta, children, ...props }: ContactLinkProps) {
  const icon = cta === 'chiama' ? <LuPhone /> : <LuMessageCircle />;
  const text = children ?? (cta === 'chiama' ? "Chiama" : "WhatsApp")
  const href = cta === 'chiama' ? "tel:+393289487163" : cta === 'whatsapp' ? "https://wa.me/393289487163" : undefined

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
