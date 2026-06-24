import {
  Box,
  Card,
  type CardRootProps,
  Icon,
  Separator,
  Image,
} from "@chakra-ui/react";
import type { ContentItem } from "../types";

interface CustomCardProps extends CardRootProps {
  data: ContentItem;
}

function CustomCard({ data, ...props }: CustomCardProps) {
  return (
    <Card.Root
      w={{
        base: "100%",
        md: "calc(50% - 12px)",
        lg: "calc(33.333% - 16px)",
      }}
      maxW={{ md: "320px" }}
      border="none"
      borderTop="4px solid"
      borderColor="brand.primary"
      borderRadius="md"
      boxShadow="md"
      {...props}
    >
      <Card.Body alignItems="center" gap={4} p={data.icon ? 4 : "0 0 1rem 0"}>
        {data.icon && (
          <Box
            w="70px"
            h="70px"
            borderRadius="full"
            bg={data.color || "brand.primary"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={data.icon} boxSize={8} fill="brand.white" />
          </Box>
        )}
        {data.img && <Image src={data.img} w="100%" h={60} objectFit="cover" />}

        <Card.Title letterSpacing="wide">{data.title}</Card.Title>
        <Separator
          borderColor={data.color || "brand.primary"}
          w="20%"
          size="lg"
        />
        <Card.Description textAlign="center">
          {data.description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default CustomCard;
