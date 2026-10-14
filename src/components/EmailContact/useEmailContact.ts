import { useContext } from "react";
import EmailContactContext from "./EmailContactContext";

export function useEmailContact() {
  const openForm = useContext(EmailContactContext);
  if (openForm === null) {
    throw new Error("useEmailContact must be used within EmailContactProvider");
  }
  return openForm;
}
