import { Button, type ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  variant1?: boolean;
}

function CustomButton({ variant1 = false, ...props }: CustomButtonProps) {
  return (
    <Button
      size={{ base: "md", md: "xl" }}
      bgColor={variant1 ? "brand.white" : "brand.primary"}
      color={variant1 ? "brand.black" : "brand.white"}
      borderRadius={6}
      fontFamily="Poppins, sans-serif"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.02em"
      _hover={{
        bgColor: variant1 ? "brand.primary" : "brand.black",
        color: "brand.white",
      }}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      {...props}
    />
  );
}

export default CustomButton;
