import { type ButtonProps } from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import CustomButton from "../Buttons/CustomButton";
import { useEmailContact } from "./useEmailContact";

export function EmailContactButton({ onClick, ...props }: ButtonProps) {
  const openForm = useEmailContact();
  return <CustomButton type="button" colorVariant="secondary" onClick={(event) => {
    onClick?.(event);
    if (!event.defaultPrevented) openForm();
  }}  {...props}><LuMail /> Email</CustomButton>;
}
