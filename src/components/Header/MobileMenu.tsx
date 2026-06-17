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

function MobileMenu() {
  return (
    <Drawer.Root placement="end" size="sm">
      <Drawer.Trigger asChild>
        <IconButton aria-label="Apri menu" variant="ghost">
          <LuMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content>
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
              <VStack gap={8}>
                {dataNavigation.map((item) => (
                  <CustomLink key={item.href} href={item.href}>
                    {item.name}
                  </CustomLink>
                ))}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default MobileMenu;
