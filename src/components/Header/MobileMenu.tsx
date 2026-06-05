import {
  CloseButton,
  Drawer,
  IconButton,
  Link,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import dataNavigation from "../../data/navigation";

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
            <Drawer.Header alignItems="center">
              <Drawer.CloseTrigger asChild>
                <CloseButton />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              <VStack gap={8}>
                {dataNavigation.map((item) => (
                  <Link
                    key={item.href}
                    fontSize="2xl"
                    fontWeight="bold"
                    href={item.href}
                    _hover={{ textDecoration: "none", color: "brand.primary" }}
                    _focus={{ outline: "none", color: "brand.primary" }}
                  >
                    {item.name}
                  </Link>
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
