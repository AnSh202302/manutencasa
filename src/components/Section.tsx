import {
  Box,
  Flex,
  type FlexProps,
  Heading,
  Separator,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { TextProps } from "@chakra-ui/react";

interface SectionProps extends FlexProps {
  headingPart1: string;
  headingPart2: string;
  description?: ReactNode;
  directionItems?: TextProps["textAlign"];
  children?: ReactNode;
  colorHeading2?: string;
}

function Section({
  headingPart1,
  headingPart2,
  description,
  directionItems = "center",
  colorHeading2,
  children,
  ...flexProps
}: SectionProps) {
  return (
    <Flex
      as="section"
      minH="100vh"
      direction={{ base: "column", lg: "row" }}
      justifyContent="center"
      gap={{ base: 8, lg: 16 }}
      py={12}
      px={{ base: 6, md: 8, lg: 10 }}
      position="relative"
      overflow="hidden"
      scrollMarginTop={{ base: 14 }}
      {...flexProps}
    >
      <Flex
        direction="column"
        w="full"
        alignItems={directionItems}
        gap={6}
        zIndex={1}
      >
        <Heading as="h3" size="lg" color="brand.primary">
          {headingPart1}
        </Heading>

        <Heading
          as="h2"
          size={{ base: "3xl", md: "5xl" }}
          letterSpacing="normal"
          fontWeight="900"
          textAlign={directionItems}
          color={colorHeading2 ? colorHeading2 : "brand.black"}
        >
          {headingPart2}
        </Heading>

        <Separator borderColor="brand.yellow" w="10%" size="lg" />

        {description && <Box textAlign={directionItems}>{description}</Box>}
      </Flex>

      {children}
    </Flex>
  );
}

export default Section;
