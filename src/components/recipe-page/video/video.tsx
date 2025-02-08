import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface VideoProps {
    src?: string;
    fallbackImage?: string;
}

export const Video: React.FC<VideoProps> = ({ src, fallbackImage }) => {
    return src ? (
        <Box
            as="iframe"
            src={src}
            frameBorder="0"
            allowFullScreen
            width="51vw"
            height="33vw"
            borderRadius="md"
            boxShadow="lg"
            mx="auto"
            {...({} as React.ComponentProps<"iframe">)}
        />
    ) : (
        <Box w="51vw" h="33vw" display="flex" alignItems="center" justifyContent="center">
            <Image
                src={fallbackImage || "/placeholder-image.jpg"} // Используем картинку блюда, если нет видео
                alt="Готовое блюдо"
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="md"
                boxShadow="lg"
            />
        </Box>
    );
};

