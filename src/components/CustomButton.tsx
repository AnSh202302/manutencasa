import { Button, type ButtonProps } from "@chakra-ui/react";

function CustomButton(props: ButtonProps) {
  return (
    <Button
      h={14}
      bg="brand.primary"
      color="brand.white"
      borderRadius={6}
      fontFamily="Poppins, sans-serif"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.02em"
      _hover={{ bg: "brand.black" }}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      {...props}
    />
  );
}

export default CustomButton;
