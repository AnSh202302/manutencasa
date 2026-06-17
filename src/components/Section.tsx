import { Box, type BoxProps } from "@chakra-ui/react";
function Section(props: BoxProps) {
  return (
    <Box as="section" py={12} px={{ base: 6, md: 8, lg: 10 }} {...props} />
  );
}

export default Section;
