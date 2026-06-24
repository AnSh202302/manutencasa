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
}

function Section({
  headingPart1,
  headingPart2,
  description,
  directionItems = "center",
  children,
  ...flexProps
}: SectionProps) {
  return (
    <Flex
      as="section"
      direction={{ base: "column", lg: "row" }}
      justifyContent="center"
      gap={{ base: 8, lg: 16 }}
      py={12}
      px={{ base: 6, md: 8, lg: 10 }}
      {...flexProps}
    >
      <Flex direction="column" w="full" alignItems={directionItems} gap={6}>
        <Heading as="h3" size="xl" color="brand.primary">
          {headingPart1}
        </Heading>

        <Heading
          as="h2"
          size={{ base: "4xl", md: "5xl" }}
          letterSpacing="normal"
          fontWeight="900"
          textAlign={directionItems}
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
