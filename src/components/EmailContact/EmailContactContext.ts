import { createContext } from "react";

const EmailContactContext = createContext<(() => void) | null>(null);

export default EmailContactContext;
