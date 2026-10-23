import {
  Box,
  Card,
  type CardRootProps,
  Icon,
  Separator,
  Image,
} from "@chakra-ui/react";
import type { ContentItem } from "../../types";

interface CustomCardProps extends CardRootProps {
  data: ContentItem;
}

function CustomCard({ data, ...props }: CustomCardProps) {
  return (
    <Card.Root

      border="none"
      borderTop="4px solid"
      borderColor="brand.primary"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      {...props}
    >
      <Card.Body
        alignItems="center"
        gap={4}
        p={data.img ? 0 : undefined}

      >
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
        {data.img && (
          <Image
            src={data.img}
            alt={data.alt ?? ""}
            w="100%"
            objectFit="cover"
            loading="lazy"
          />
        )}

        <Card.Title letterSpacing="wide" textAlign="center">{data.title}</Card.Title>
        <Separator
          borderColor={data.color || "brand.primary"}
          w="20%"
          size="lg"
        />
        <Card.Description textAlign="center" p={data.img ? "0 27px 27px 27px" : 0}
        >
          {data.description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default CustomCard;
