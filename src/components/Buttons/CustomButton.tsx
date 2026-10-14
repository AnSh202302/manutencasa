import { Button, type ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  colorVariant?: "primary" | "secondary";
}

function CustomButton({
  colorVariant = "primary",
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      size={{ base: "md", md: "xl" }}
      bgColor={colorVariant === "secondary" ? "brand.white" : "brand.primary"}
      color={colorVariant === "secondary" ? "brand.black" : "brand.white"}
      borderRadius={6}
      fontFamily="Poppins, sans-serif"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.02em"
      _hover={{
        bgColor: colorVariant === "secondary" ? "brand.primary" : "brand.black",
        color: "brand.white",
      }}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
