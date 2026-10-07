import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import dataNavigation from "../../data/navigation";
import CustomLink from "../CustomLink/HeaderLink";
import { useState } from "react";
import CustomButton from "../CustomButton";
import ContactLink from "../CustomLink/ContactLink";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer.Root
      placement="end"
      size="sm"
      open={open}
      onOpenChange={(event) => setOpen(event.open)}
    >
      <Drawer.Trigger asChild>
        <IconButton aria-label="Apri menu" variant="ghost">
          <LuMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content aria-label="Navigazione mobile">
            <Drawer.Header>
              <Drawer.CloseTrigger asChild>
                <CloseButton />
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
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </CustomLink>
                ))}
                <CustomButton size="lg" w="100%" asChild>
                  <ContactLink cta="chiama" />
                </CustomButton>
                <CustomButton size="lg" w="100%" asChild variant1>
                  <ContactLink cta="whatsapp" />
                </CustomButton>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default MobileMenu;
