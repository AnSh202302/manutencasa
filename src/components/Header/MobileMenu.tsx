import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import dataNavigation from "../../data/navigation";
import CustomLink from "../CustomLink";
import { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import ContactLink from "../CustomLink/ContactLink";
import { EmailContactButton } from "../EmailContact/EmailContactButton";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root
      placement="end"
      size="sm"
      open={open}
      onOpenChange={(event) => setOpen(event.open)}

    >
      <Drawer.Trigger asChild >
        <IconButton aria-label="Apri menu" variant="ghost">
          <LuMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal >
        <Drawer.Backdrop />

        <Drawer.Positioner >
          <Drawer.Content aria-label="Navigazione mobile" backgroundColor="brand.yellow"
          >
            <Drawer.Header>
              <Drawer.CloseTrigger asChild>
                <CloseButton aria-label="Chiudi menu" _hover={{ backgroundColor: "brand.primary", color: "brand.white" }} />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VStack as="nav" aria-label="Navigazione mobile" gap={8}>
                {dataNavigation.map((item) => (
                  <CustomLink
                    key={item.href}
                    href={item.href}
                    minH="44px"
                    px={3}
                    display="flex"
                    alignItems="center"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </CustomLink>
                ))}
                <CustomButton size="lg" w="100%" asChild colorVariant="secondary">
                  <ContactLink cta="chiama" />
                </CustomButton>
                <CustomButton size="lg" w="100%" asChild colorVariant="secondary">
                  <ContactLink cta="whatsapp" />
                </CustomButton>
                <EmailContactButton size="lg" w="100%" onClick={() => setOpen(false)} />
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default MobileMenu;
