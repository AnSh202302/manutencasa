import { useCallback, useState, type ReactNode } from "react";
import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import EmailContactForm from "./EmailContactForm";
import EmailContactContext from "./EmailContactContext";

export function EmailContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formSession, setFormSession] = useState(0);

  const openForm = useCallback(() => {
    setSuccess(false);
    setFormSession((session) => session + 1);
    setOpen(true);
  }, []);

  return (
    <EmailContactContext.Provider value={openForm}>
      {children}
      <Dialog.Root open={open} onOpenChange={({ open }) => setOpen(open)} placement="center" scrollBehavior="inside">
        <Portal>
          <Dialog.Backdrop zIndex={1400} />
          <Dialog.Positioner zIndex={1400} p={4}>
            <Dialog.Content bg="brand.white" color="brand.text" borderRadius={6} maxW="lg">
              <Dialog.Header ps={{ base: 6, md: 8 }} pe={12} pt={{ base: 6, md: 8 }} pb={4} srOnly={success}>
                <Dialog.Title fontFamily="heading" color="brand.black">Raccontami di cosa hai bisogno</Dialog.Title>
              </Dialog.Header>
              <Dialog.CloseTrigger asChild><CloseButton aria-label="Chiudi modulo email" /></Dialog.CloseTrigger>
              <Dialog.Body px={{ base: 6, md: 8 }} pt={success ? 12 : 0} pb={{ base: 6, md: 8 }}>
                <EmailContactForm key={formSession} onSuccess={() => setSuccess(true)} onClose={() => setOpen(false)} />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </EmailContactContext.Provider>
  );
}
