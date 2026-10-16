import { Flex, Icon, HStack, Text, Box } from "@chakra-ui/react"
import { MdHandyman } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import dataNavigation from "../../data/navigation";
import CustomLink from "../CustomLink";


function HomeHeaderContent() {
    return (
        <Flex h="100%" justify="space-between">
            <CustomLink href="/">
                <Flex align="center" gap={4}>
                    <Icon as={MdHandyman} boxSize={8} color="brand.primary" />
                    <Box >
                        <Text
                            fontFamily="heading"
                            fontSize="lg"
                            lineHeight="short"
                            fontWeight="bold"
                        >
                            ManutenCasa
                        </Text>
                        <Text
                            fontSize="xs"
                            fontFamily="heading"
                            lineHeight="short"
                        >
                            di Francesco Berardi
                        </Text>
                    </Box>
                </Flex>
            </CustomLink>

            <Flex align="center" gap={{ base: 2, md: 6 }} display={{ base: "none", md: "flex" }} >
                <HStack
                    as="nav" aria-label="Navigazione principale" gap={{ base: 2, md: 6 }}>
                    {dataNavigation.map(({ name, href }) => (
                        <CustomLink key={name} href={href}>
                            {name}
                        </CustomLink>
                    ))}
                </HStack>
            </Flex>

            <HStack gap={1} display={{ base: "flex", md: "none" }}>
                <MobileMenu />
            </HStack>
        </Flex>
    )
}

export default HomeHeaderContent
