import { Box, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import type { GalleryImage } from "../../data/galleryImg";

interface GalleryCardProps {
  data: GalleryImage;
}

function GalleryCard({ data }: GalleryCardProps) {
  const [position, setPosition] = useState(50);

  return (
      <Box
        position="relative"
        w="full"
        h={{ base: "260px", md: "360px", xl: "460px" }}
        flexShrink={0}
        overflow="hidden"
        bg="brand.grey"
        css={{
          "&:has(input:focus-visible)::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            border: "3px solid",
            borderColor: "brand.primary",
            pointerEvents: "none",
            zIndex: 4,
          },
        }}
      >
        <Image
          src={data.before}
          srcSet={data.beforeSrcSet}
          sizes="(min-width: 1024px) 33vw, 100vw"
          loading="lazy"
          decoding="async"
          alt={data.beforeAlt}
          position="absolute"
          inset={0}
          w="full"
          h="full"
          objectFit="cover"
        />

        <Box
          position="absolute"
          inset={0}
          overflow="hidden"
          clipPath={`inset(0 ${100 - position}% 0 0)`}
        >
          <Image
            src={data.after}
            srcSet={data.afterSrcSet}
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
            decoding="async"
            alt={data.afterAlt}
            position="absolute"
            inset={0}
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>

        <Input
          type="range"
          min={0}
          max={100}
          value={position}
          aria-label="Confronta il prima e dopo"
          onChange={(event) => setPosition(Number(event.target.value))}
          position="absolute"
          inset={0}
          zIndex={3}
          w="full"
          h="full"
          opacity={0}
          cursor="ew-resize"
        />

        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={`${position}%`}
          zIndex={1}
          w="3px"
          bg="brand.white"
          transform="translateX(-50%)"
          pointerEvents="none"
        />

        <Box
          position="absolute"
          top="50%"
          left={`${position}%`}
          zIndex={2}
          w="48px"
          h="48px"
          border="3px solid"
          borderColor="brand.white"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.14)"
          transform="translate(-50%, -50%)"
          pointerEvents="none"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            w="24px"
            h="20px"
            transform="translate(-50%, -50%)"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderRight: "9px solid white",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: "9px solid white",
            }}
          />
        </Box>
      </Box>
  );
}

export default GalleryCard;
